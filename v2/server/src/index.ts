import 'dotenv/config'
import superagent from 'superagent'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './graphql/schema'
import { createResolvers, ResolversOpts } from './resolvers/resolvers'

async function startServer(): Promise<void> {
  const resolversOpts: ResolversOpts = {
    fetcher: superagent,
    compendiumApiBaseUrl: process.env.HYRULE_REST_API_BASE_URL ?? '',
  }

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: { ...createResolvers(resolversOpts) },
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.PORT || '') },
  })

  console.log(`🛡️  Server ready at: ${url}`)
}

startServer()
