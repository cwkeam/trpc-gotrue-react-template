import { z } from 'zod'

import { publicProcedure, router } from '@/trpc'

import userRoutes from './user'

const routes = router({
	user: userRoutes,
	test: router({
		testRoute: publicProcedure
			.input(z.undefined())
			.query(async ({ ctx: { datasource, jwt } }) => {
				return 'happy'
			}),
	}),
})

export default routes
