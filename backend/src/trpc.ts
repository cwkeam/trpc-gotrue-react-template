import { initTRPC, TRPCError } from '@trpc/server'

import { Context } from './context'

// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.context<Context>().create()

export const router = t.router
export const mergeRouters = t.mergeRouters
export const middleware = t.middleware

export const publicProcedure = t.procedure

export const userProcedure = t.procedure.use(
	t.middleware(({ next, ctx }) => {
		const { jwt, userAuthClient } = ctx

		if (!jwt || !userAuthClient) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
			})
		}
		return next({
			ctx: {
				jwt,
				userAuthClient,
			},
		})
	}),
)
