import { node, oneOfType, shape, func, object } from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme'
import GlobalStyles from 'theme/global'

const App = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} />
  </ChakraProvider>
)

App.propTypes = {
  Component: oneOfType([func, object, node]).isRequired,
  pageProps: shape({}),
}

App.defaultProps = {
  pageProps: {},
}

export default App
