import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws'

import { GoTrueClient } from '@supabase/gotrue-js'
import jwt from 'jsonwebtoken'

import { createUserAuthClient } from './auth'
import { MBDataSource } from './datasource'

type JWTPayload = {
	aud: string
	exp: number
	sub: string
	email: string
	phone: string
	app_metadata: any // TODO: define
	user_metadata: any // TODO: define
	role: string
	aal: string
	amr: {
		method: string
		timestamp: number
	}[]
	session_id: string
	accessToken: string
}

const createContext = async (
	options: CreateFastifyContextOptions | CreateWSSContextFnOptions,
) => {
	const datasource = MBDataSource
	if (!datasource.isInitialized) {
		await datasource.initialize()
	}

	const authorization = options.req.headers.authorization
	const accessToken = authorization?.match(/Bearer (.+)/)?.[1]
	try {
		if (!accessToken) {
			throw new Error('token does not exist')
		}

		const token: JWTPayload = jwt.verify(
			accessToken,
			process.env.GOTRUE_JWT_SECRET!,
		) as JWTPayload

		if (token.role === 'revenuecat_admin') {
			return {
				datasource,
				// @ts-ignore
				userAuthClient: null as GoTrueClient,

				jwt: { ...token, accessToken },
			}
		} else {
			const userAuthClient = createUserAuthClient(accessToken)

			return {
				datasource,
				userAuthClient,
				jwt: token,
			}
		}
	} catch (error) {
		return {
			datasource,
		}
	}
}

export type Context = inferAsyncReturnType<typeof createContext>

export default createContext
