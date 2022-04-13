import { GridItem, Heading, Text } from '@chakra-ui/react'
import { shape, string } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import LinkButton from 'components/button/LinkButton'
import Grid from './Grid'

const Hero = ({ title, copy, image, ctaText, ctaHref }) => (
  <Grid pb="50px">
    <GridItem colSpan={[12, 12, 6]}>
      <Heading as="h1">{title}</Heading>
      <Text fontSize="18px" lineHeight="1.3" pt="20px">
        <ReactMarkdown>{copy}</ReactMarkdown>
      </Text>
      {ctaText && ctaHref && (
        <LinkButton
          href={ctaHref}
          variant="light"
          display="inline-flex"
          mt="20px"
        >
          {ctaText}
        </LinkButton>
      )}
    </GridItem>
    {image?.url && (
      <GridItem colSpan={[12, 12, 6]}>
        <img src={image.url} />
      </GridItem>
    )}
  </Grid>
)

Hero.propTypes = {
  title: string,
  copy: string,
  image: shape({ url: string }),
  ctaText: string,
  ctaHref: string,
}

Hero.defaultProps = {
  title: '',
  copy: '',
  image: {},
  ctaText: '',
  ctaHref: '',
}

export default Hero
