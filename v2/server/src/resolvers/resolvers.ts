import { SuperAgentStatic } from 'superagent'
import { createQueryResolvers, QueryResolvers } from './queryResolvers'

export interface ResolversOpts {
  readonly fetcher: SuperAgentStatic
  readonly compendiumApiBaseUrl: string
}

export interface Resolvers {
  readonly Query: QueryResolvers
}

export function createResolvers({
  fetcher,
  compendiumApiBaseUrl,
}: ResolversOpts): Resolvers {
  const resolvers: Resolvers = {
    Query: createQueryResolvers({ fetcher, compendiumApiBaseUrl }),
  }

  return resolvers
}
