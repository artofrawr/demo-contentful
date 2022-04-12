import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { node, string } from 'prop-types'

const LinkButton = ({ href, children, ...other }) => {
  const isInternal = href.startsWith('/') && !href.startsWith('//')

  const rendered = (
    <Button as="a" href={!isInternal ? href : null} {...other}>
      {children}
    </Button>
  )

  if (isInternal) {
    return (
      <Link href={href} passHref>
        {rendered}
      </Link>
    )
  }

  return rendered
}

LinkButton.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
}

export default LinkButton
