import { render, screen } from '@testing-library/react'
import Footer from './Footer'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
}))

describe('Footer', () => {
  it('renders a description', () => {
    render(<Footer description="Test Description" />)

    const description = screen.getByText('Test Description')

    expect(description).toBeInTheDocument()
  })
})
