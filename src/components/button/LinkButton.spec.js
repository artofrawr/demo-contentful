import { render, screen } from '@testing-library/react'
import LinkButton from './LinkButton'

describe('LinkButton', () => {
  it('renders an achor tag with text', () => {
    render(<LinkButton href="/test">Button Text</LinkButton>)

    const button = screen.getByText('Button Text')

    expect(button).toBeInTheDocument()
    expect(button.tagName.toLowerCase()).toEqual('a')
  })
})
