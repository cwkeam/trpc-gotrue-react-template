import 'dotenv/config'
import 'reflect-metadata'

import { fastifyServer } from '@/server'

const PORT = Number(process.env.PORT ?? 3030)

;(async () => {
	try {
		const address = await fastifyServer.listen({
			port: PORT,
			host: '0.0.0.0',
		})

		await fastifyServer.ready()
		console.log(`🚀 Server Listening on: ${address}`)
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
})()
