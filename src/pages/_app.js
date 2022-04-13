import { node, oneOfType, shape, func, object } from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import GlobalStyles from 'theme/global'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'graphql/apollo'

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

App.propTypes = {
  Component: oneOfType([func, object, node]).isRequired,
  pageProps: shape({}),
}

App.defaultProps = {
  pageProps: {},
}

export default App
