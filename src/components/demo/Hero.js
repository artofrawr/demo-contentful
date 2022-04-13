import { string } from 'prop-types'

const Hero = ({ title, copy, image }) => <div>HERO: {title}</div>

Hero.propTypes = {
  title: string,
  copy: string,
  image: string,
}

Hero.defaultProps = {
  title: '',
  copy: '',
  image: '',
}

export default Hero
