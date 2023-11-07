import 'dotenv/config'
import 'reflect-metadata'

import { TRPCError } from '@trpc/server'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'

import fastifyCORS from '@fastify/cors'
import fastify from 'fastify'

// import notificationService from '@/integrations/notifications'
import appRouter from './app'
import createContext from './context'

export const fastifyServer = fastify({
	maxParamLength: 5000,
})

fastifyServer.register(fastifyCORS, {
	origin: (origin, callback) => {
		// if (!origin) return callback(null, true)
		return callback(null, true)
	},
})

fastifyServer.register(fastifyTRPCPlugin, {
	trpcOptions: {
		router: appRouter,
		createContext,
		onError: ({ error }: { error: TRPCError }) => {
			//^?
			console.log(error)
		},
	},
})
