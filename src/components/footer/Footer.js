import { Box, Text } from '@chakra-ui/react'
import LinkButton from 'components/button/LinkButton'
import { string } from 'prop-types'

const Footer = ({ description, source }) => (
  <Box
    as="footer"
    position="fixed"
    bottom="0"
    width="100%"
    height="80px"
    bg="white"
    zIndex="9001"
    lineHeight="80px"
    display="flex"
    alignItems="center"
    justifyContent={{ base: 'flex-end', md: 'space-between' }}
    px="20px"
    overflow="hidden"
    role="contentinfo"
  >
    <Text
      as="h1"
      fontWeight={500}
      fontSize="16px"
      display={{ base: 'none', md: 'block' }}
    >
      {description}
    </Text>
    <Box display="flex" flexDirection="row">
      <LinkButton
        href={source}
        target="_blank"
        rel="noreferrer"
        variant="light"
      >
        Source on GitHub
      </LinkButton>
    </Box>
  </Box>
)

Footer.propTypes = {
  description: string,
  source: string,
}

Footer.defaultProps = {
  description: 'Modular pages controlled via headless CMS.',
  source: 'https://github.com/artofrawr/demo-contentful',
}

export default Footer
