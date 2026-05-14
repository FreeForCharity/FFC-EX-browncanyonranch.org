import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/Footer'

expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('shows the mailing address', () => {
    render(<Footer />)
    expect(screen.getByText(/P\.O\. Box 996/i)).toBeInTheDocument()
    expect(screen.getByText(/Hereford, AZ 85615/i)).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<Footer />)
    expect(screen.getByText(/520-378-0311/i)).toBeInTheDocument()
  })

  it('links to the parent organization Coronado NF Heritage Society', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(
      links.some((l) => l.getAttribute('href')?.includes('coronadonationalforestheritagesociety'))
    ).toBe(true)
  })

  it('includes a Facebook link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.some((l) => l.getAttribute('href')?.includes('facebook.com'))).toBe(true)
  })

  it('displays the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
