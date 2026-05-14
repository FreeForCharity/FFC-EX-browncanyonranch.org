import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-paper-deep border-t border-rule mt-16">
      <div className="bcr-container py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="font-(family-name:--font-cantata-one) text-lg text-ink">
            Friends of the Brown Canyon Ranch
          </h2>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80 font-(family-name:--font-faustina)">
            P.O. Box 996
            <br />
            Hereford, AZ 85615
          </p>
          <p className="mt-2 text-[0.95rem] text-ink/80">
            <a
              href="tel:+15203780311"
              className="hover:text-adobe-deep underline-offset-4 hover:underline"
            >
              520-378-0311
            </a>
          </p>
          <p className="mt-2 text-[0.85rem] text-stone font-(family-name:--font-lato) italic">
            A chapter of the{' '}
            <a
              href="https://coronadonationalforestheritagesociety.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:text-adobe-deep hover:decoration-adobe"
            >
              Coronado National Forest Heritage Society
            </a>{' '}
            (501(c)(3)).
          </p>
        </div>

        <div>
          <h2 className="font-(family-name:--font-cantata-one) text-lg text-ink">Explore</h2>
          <ul className="mt-3 space-y-2 text-[0.95rem] font-(family-name:--font-faustina)">
            <li>
              <Link
                href="/visitor-info"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Visitor Info
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Western Heritage Program
              </Link>
            </li>
            <li>
              <Link
                href="/join"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Join FBCR
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-(family-name:--font-cantata-one) text-lg text-ink">Connect</h2>
          <ul className="mt-3 space-y-2 text-[0.95rem] font-(family-name:--font-faustina)">
            <li>
              <a
                href="https://www.facebook.com/Friends-of-the-Brown-Canyon-Ranch-106245609506322"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Friends of the Brown Canyon Ranch on Facebook"
                className="text-ink/85 hover:text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.coronadonationalforestheritagesociety.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/85 hover:text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Coronado NF Heritage Society
              </a>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-of-service"
                className="text-ink/85 hover:text-adobe-deep underline-offset-4 hover:underline decoration-rule hover:decoration-adobe"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-[0.8rem] text-stone font-(family-name:--font-lato)">
            Website hosted by{' '}
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-rule hover:text-adobe-deep hover:decoration-adobe"
            >
              Free For Charity
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bcr-rule" />
      <div className="bcr-container py-5 text-center text-[0.85rem] text-stone font-(family-name:--font-lato)">
        © {year} Friends of the Brown Canyon Ranch
      </div>
    </footer>
  )
}

export default Footer
