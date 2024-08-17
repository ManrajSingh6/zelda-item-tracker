import 'dotenv/config'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { schema } from './graphql/schema'

async function startServer(): Promise<void> {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {},
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.SERVER_PORT || '') },
  })

  console.log(`🛡️  Server ready at: ${url}`)
}

startServer()
