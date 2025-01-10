import { Link } from 'react-router-dom'
import { footerLinks } from '@/lib/data'

import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { MinusIcon, PlusIcon } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 flex flex-col bg-neutral text-sm text-neutral-foreground-100 *:-z-0 [&_h5]:font-semibold lg:[&_h5]:my-3 [&_li>h6]:text-xs [&_li>h6]:text-neutral-foreground-100 [&_li]:text-neutral-foreground-200 lg:[&_li]:mb-2 lg:[&_ul]:py-2">
      <section className="page-bounds border-b border-b-neutral-foreground-100/30 py-6">
        <div className="mb-4">
          <Logo />
        </div>
        <div className="flex flex-wrap justify-between gap-6">
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
              <div className="flex flex-wrap items-stretch gap-4">
                <input
                  className="box-border flex-1 border border-neutral-foreground-100 bg-transparent px-4 py-2"
                  type="email"
                  placeholder="Your Email Address"
                />
                <Button
                  type="submit"
                  className="h-[unset] rounded-none max-[380px]:w-full lg:px-10"
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

      <section className="page-bounds flex flex-col items-start justify-between lg:flex-row">
        <ItemsGroup title="basic navigations">
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
        </ItemsGroup>

        <ItemsGroup title="contacts">
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
        </ItemsGroup>

        <ItemsGroup title="my account">
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
        </ItemsGroup>

        <div className="hidden lg:block">
          <h5>SELLER ZONE</h5>
          <ul>
            {footerLinks.seller.map((s) => (
              <li key={s.title}>
                {s.title.toLowerCase() ===
                'become a seller' ? (
                  <span className="flex items-center gap-4">
                    {s.title}{' '}
                    <Link
                      to={s.href}
                      className="text-accent"
                    >
                      Apply Now
                    </Link>
                  </span>
                ) : (
                  <Link
                    className="animated-underline"
                    to={s.href}
                  >
                    {s.title}
                  </Link>
                )}
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

        <div className="w-full lg:hidden">
          <ItemsGroup title="seller zone">
            {footerLinks.seller.map((s) => (
              <li key={s.title}>
                {s.title.toLowerCase() ===
                'become a seller' ? (
                  <span className="flex items-center gap-4">
                    {s.title}{' '}
                    <Link
                      to={s.href}
                      className="text-accent"
                    >
                      Apply Now
                    </Link>
                  </span>
                ) : (
                  <Link
                    className="animated-underline"
                    to={s.href}
                  >
                    {s.title}
                  </Link>
                )}
              </li>
            ))}
          </ItemsGroup>

          <ItemsGroup title="delivery boy">
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
          </ItemsGroup>
        </div>
      </section>

      <section className="page-bounds flex flex-col-reverse items-center justify-between gap-8 bg-neutral-100 pb-20 pt-8 text-center text-neutral-foreground-300 md:flex-row md:items-end md:text-left">
        <div className="space-y-6">
          <p>&copy; {new Date().getFullYear()} BUY-SHOP | B2B &B2C</p>
          <p>
            Powered by&nbsp;
            <a
              href="#"
              className="font-semibold text-brand-primary"
            >
              BUY-SHOP.
            </a>
          </p>
        </div>

        <div>
          <img
            className="w-44"
            src="/icons/payment.webp"
            alt="payment methods"
          />
        </div>
      </section>
    </footer>
  )
}

function ItemsGroup({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="max-lg:w-full max-lg:border-b max-lg:border-b-neutral-foreground-100/30">
      <h5
        onClick={toggleOpen}
        className="capitalize max-lg:flex max-lg:w-full max-lg:items-center max-lg:justify-between max-lg:bg-neutral-100 max-lg:px-8 max-lg:py-8 max-lg:text-neutral-foreground-200 lg:uppercase"
      >
        <span>{title}</span>
        <span
          className={cn(
            'transition-transform lg:hidden',
            isOpen ? 'rotate-0' : 'rotate-[360deg]'
          )}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </span>
      </h5>
      <div
        className={cn(
          'transition-[max-height] ease-out max-lg:overflow-hidden max-lg:px-8 max-lg:py-0',
          isOpen
            ? 'max-h-96 duration-[2.5s]'
            : 'tran duration-400 max-h-0'
        )}
      >
        <ul
          className={
            'max-lg:space-y-2 max-lg:py-8 max-lg:[&_li]:border-b max-lg:[&_li]:border-b-neutral-foreground-100/20 max-lg:[&_li]:py-2'
          }
        >
          {children}
        </ul>
      </div>
    </div>
  )
}
