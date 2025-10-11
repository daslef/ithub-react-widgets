import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css'

import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const apolloClient = new ApolloClient({
    link: new HttpLink({ 
        uri: "https://api.github.com/graphql",
        headers: {
            Authorization: ""
        }
    }),
    cache: new InMemoryCache()
})

createRoot(document.getElementById('app')).render(
    <StrictMode>
        <App apolloClient={apolloClient} />
    </StrictMode>
)
