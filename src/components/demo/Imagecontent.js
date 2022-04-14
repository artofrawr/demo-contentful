import { GridItem, Heading, Text } from '@chakra-ui/react'
import { shape, string } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Grid from './Grid'

const ImageContent = ({ title, copy, image }) => (
  <Grid pb="50px">
    {image?.url && (
      <GridItem colSpan={[12, 12, 6]}>
        {/* eslint-disable */}
        <img src={image.url} />
        {/* eslint-enable */}
      </GridItem>
    )}
    <GridItem colSpan={[12, 12, 6]}>
      <Heading as="h2" size="md">
        {title}
      </Heading>
      <Text fontSize="16px" lineHeight="1.3" pt="20px">
        <ReactMarkdown>{copy}</ReactMarkdown>
      </Text>
    </GridItem>
  </Grid>
)

ImageContent.propTypes = {
  title: string,
  copy: string,
  image: shape({ url: string }),
}

ImageContent.defaultProps = {
  title: '',
  copy: '',
  image: {},
}

export default ImageContent
