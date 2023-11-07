import { z } from 'zod'

import { router, userProcedure } from '@/trpc'

const keyPhraseRoute = router({
	sampleRoute: userProcedure
		.input(
			z.object({
				sample: z.string(),
			}),
		)
		.query(async ({ input: { sample }, ctx: { datasource, jwt } }) => {
			return 'Hello World' + sample + ' ' + jwt.sub
		}),
})
export default keyPhraseRoute
