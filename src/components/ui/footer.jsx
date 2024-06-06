import { Link } from 'react-router-dom'
import { footerLinks } from '@/lib/data'

import { Logo } from '../logo'
import { Button } from './button'

export function Footer() {
  return (
    <footer className="flex flex-col bg-neutral text-sm text-neutral-foreground-100 [&_h5]:my-3 [&_h5]:font-semibold [&_li>h6]:text-xs [&_li>h6]:text-neutral-foreground-100 [&_li]:mb-2 [&_li]:text-neutral-foreground-200 [&_ul]:py-2">
      <section className="border-b border-b-neutral-foreground-100/30 px-4 py-6 md:px-8 lg:px-12">
        <div className="mb-4">
          <Logo />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="mb-4 text-sm">
              Join out community of buyers and sellers,
              transforming the online shopping experience.{' '}
              <br />
              Your journey begins here - explore, shop, and
              connect with E-COMMERCE today!
            </p>

            <form>
              <label
                className="mb-2 inline-block text-sm font-semibold text-neutral-300"
                htmlFor="email"
              >
                Subscribe to our newsletter for regular
                updates about offers, Coupons & more
              </label>
              <div className="flex items-stretch gap-4">
                <input
                  className="box-border flex-1 border border-neutral-foreground-100 bg-transparent px-4 py-2"
                  type="email"
                  placeholder="Your Email Address"
                />
                <Button
                  type="submit"
                  className="h-[unset] rounded-none px-10"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h5>FOLLOW US</h5>
            <ul className="mb-4 flex items-center gap-2">
              {footerLinks.socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} title={s.title}>
                    <img
                      className="size-8 rounded-full object-contain"
                      src={s.src}
                      alt={s.title}
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h5>MOBILE APPS</h5>
            <ul className="flex items-center gap-2">
              {footerLinks.apps.map((a) => (
                <li key={a.title}>
                  <a href={a.href} title={a.title}>
                    <img
                      className="w-28"
                      src={a.src}
                      alt={a.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-start justify-between px-4 py-8 md:px-8 lg:px-12">
        <ul>
          <h5>BASIC NAVIGATIONS</h5>
          {footerLinks.basicNav.map((n) => (
            <li key={n.title}>
              {n.href.startsWith('http') ? (
                <a
                  className="animated-underline"
                  href={n.href}
                >
                  {n.title}
                </a>
              ) : (
                <Link
                  className="animated-underline"
                  to={n.href}
                >
                  {n.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <ul className="space-y-3">
          <h5>CONTACTS</h5>
          {footerLinks.contacts.map((c) => (
            <li key={c.title}>
              <h6 className="mb-1">{c.title}</h6>
              <p>
                {c.href ? (
                  <a
                    className="text-neutral-foreground-200 transition-colors duration-300 ease-out hover:text-brand-primary"
                    href={c.href}
                  >
                    {c.desc}
                  </a>
                ) : (
                  c.desc
                )}
              </p>
            </li>
          ))}
        </ul>

        <div>
          <h5>MY ACCOUNT</h5>
          <ul>
            {footerLinks.account.map((a) => (
              <li key={a.title}>
                <Link
                  className="animated-underline"
                  to={a.href}
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>SELLER ZONE</h5>
          <ul>
            {footerLinks.seller.map((s) => (
              <li key={s.title}>
                <Link
                  className="animated-underline"
                  to={s.href}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>

          <div>
            <h5>DELIVERY BOY</h5>
            <ul>
              {footerLinks.delivery.map((d) => (
                <li key={d.title}>
                  <Link
                    className="animated-underline"
                    to={d.href}
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-end justify-between bg-neutral-100 px-4 pb-12 pt-8 text-neutral-foreground-300 md:px-8 lg:px-12">
        <div className="space-y-6">
          <p>&copy; 2023 E-COMMERCE | B2B &B2C</p>
          <p>
            Powered by&nbsp;
            <a
              href="#"
              className="font-semibold text-brand-primary"
            >
              Starpro Version Affiliate LTD.
            </a>
          </p>
        </div>

        <div>
          <img
            className="w-36"
            src="/icons/payment.webp"
            alt="payment methods"
          />
        </div>
      </section>
    </footer>
  )
}
