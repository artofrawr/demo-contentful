const ButtonStyle = {
  baseStyle: {
    fontFamily: 'Roboto, sans-serif',
    border: '2px solid black',
    padding: '0 20px',
    fontWeight: 500,
    fontSize: '16px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 0,
    _active: {
      boxShadow: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    dark: {
      bg: 'black',
      color: 'white',
      _hover: {
        bg: 'black',
        color: 'white',
      },
    },
    light: {
      bg: 'white',
      color: 'black',
      _hover: {
        bg: 'black',
        color: 'white',
      },
    },
  },
}

export default ButtonStyle
