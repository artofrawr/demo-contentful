import { Grid } from '@chakra-ui/react'
import { node } from 'prop-types'

const CustomGrid = ({ children, ...other }) => (
  <Grid
    templateColumns="repeat(12, 1fr)"
    gap={6}
    px={[6, 12]}
    mx="auto"
    pb="50px"
    maxWidth="1280px"
    {...other}
  >
    {children}
  </Grid>
)

CustomGrid.propTypes = {
  children: node,
}

CustomGrid.defaultProps = {
  children: null,
}

export default CustomGrid
