import { extendTheme } from '@chakra-ui/react'
import Button from './components/ButtonStyle'
import Text from './components/TextStyle'

const theme = extendTheme({
  components: {
    Button,
    Text,
  },
})

export default theme
