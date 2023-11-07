import { mergeRouters } from '@/trpc'

import sampleRoute from './sample/sample.route'

const userRoutes = mergeRouters(sampleRoute)

export default userRoutes
