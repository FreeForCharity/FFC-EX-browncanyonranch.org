'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface MenuItem {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Join', href: '/join' },
  { label: 'Visitor Info', href: '/visitor-info' },
  { label: 'News', href: '/news' },
  { label: 'Programs', href: '/programs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header
      className={[
        'sticky top-0 z-40 w-full transition-colors duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur border-b border-rule'
          : 'bg-paper border-b border-transparent',
      ].join(' ')}
    >
      <div className="bcr-container flex items-center justify-between py-4 md:py-5 gap-4">
        <Link
          href="/"
          onClick={close}
          className="group flex flex-col leading-tight shrink-0"
          aria-label="Friends of the Brown Canyon Ranch — home"
        >
          <span className="font-(family-name:--font-cantata-one) text-[1.05rem] md:text-[1.2rem] text-ink tracking-[0.01em]">
            Friends of the Brown Canyon Ranch
          </span>
          <span className="font-(family-name:--font-lato) text-[0.7rem] md:text-[0.76rem] text-stone tracking-[0.2em] uppercase mt-1">
            Huachuca Mountains · Southern Arizona
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 font-(family-name:--font-lato) text-[0.9rem] tracking-wide">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink/80 hover:text-adobe-deep transition-colors border-b border-transparent hover:border-adobe pb-0.5"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.coronadonationalforestheritagesociety.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm bg-adobe text-paper px-3 py-2 text-[0.85rem] tracking-wide hover:bg-adobe-deep transition-colors"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded border border-rule px-3 py-2 text-sm text-ink/80 hover:bg-paper-deep"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="font-(family-name:--font-lato)">{isOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="lg:hidden border-t border-rule bg-paper"
        >
          <ul className="bcr-container py-3 space-y-1 font-(family-name:--font-lato)">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block px-2 py-3 text-ink/85 hover:bg-paper-deep rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://www.coronadonationalforestheritagesociety.org/donate"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="block px-2 py-3 text-adobe-deep font-semibold hover:bg-paper-deep rounded"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
