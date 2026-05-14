import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/Header'

expect.extend(toHaveNoViolations)

describe('Header component', () => {
  it('renders a banner landmark', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('shows the organization name', () => {
    render(<Header />)
    expect(screen.getAllByText(/Friends of the Brown Canyon Ranch/i).length).toBeGreaterThan(0)
  })

  it('lists the primary navigation links', () => {
    render(<Header />)
    expect(screen.getAllByText(/^Home$/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/^Join$/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Visitor Info/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/^News$/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Programs/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Gallery/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/^Contact$/i).length).toBeGreaterThanOrEqual(1)
  })

  it('exposes a mobile menu toggle', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
