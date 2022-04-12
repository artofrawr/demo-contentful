import { Box, Text } from '@chakra-ui/react'
import LinkButton from 'components/button/LinkButton'
import Footer from 'components/footer/Footer'

const Home = () => (
  <>
    <Text fontSize="34px" fontWeight={700} p="30px" textAlign="center">
      Home
    </Text>
    <Box display="flex" justifyContent="center" pb="100px">
      <LinkButton variant="dark" href="/test" m="10px">
        Dark Button
      </LinkButton>
      <LinkButton variant="light" href="/test" m="10px">
        Light Button
      </LinkButton>
    </Box>
    <Footer />
  </>
)

export default Home
