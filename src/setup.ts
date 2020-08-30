import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { setClient } from 'svelte-apollo'

export function setApolloClient(url: string) {

    const client = new ApolloClient({
        uri: url,        
    })

    setClient(client)
}
