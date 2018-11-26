import { extractFragmentReplacements } from 'prisma-binding'

import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'
import User from './User'

const resolvers = {
    Query,
    Mutation,
    // Subscription,
    User
}

const fragmentReplacements = extractFragmentReplacements(resolvers) 
// ^ Takes in all of the resolvers and extracts any fragments that were defined in them

export { resolvers, fragmentReplacements }