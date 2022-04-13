import { string } from 'prop-types'

const Hero = ({ title }) => <div>HERO: {title}</div>

Hero.propTypes = {
  title: string,
}

Hero.defaultProps = {
  title: '',
}

export default Hero
