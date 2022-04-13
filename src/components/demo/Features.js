import { GridItem, Heading, Text } from '@chakra-ui/react'
import { arrayOf, shape, string } from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Grid from './Grid'

const Features = ({ featuresCollection }) => (
  <Grid>
    {featuresCollection.items.map((feature) => (
      <GridItem colSpan={[12, 12, 4]} key={`feature-${feature.sys.id}`}>
        <Heading as="h2" size="lg">
          {feature.title}
        </Heading>
        <Text fontSize="16px" lineHeight="1.3" pt="10px">
          <ReactMarkdown>{feature.copy}</ReactMarkdown>
        </Text>
      </GridItem>
    ))}
  </Grid>
)

Features.propTypes = {
  featuresCollection: shape({
    items: arrayOf(
      shape({
        sys: shape({
          id: string,
        }),
        title: string,
        copy: string,
      })
    ),
  }),
}

Features.defaultProps = {
  featuresCollection: {
    items: [],
  },
}

export default Features
