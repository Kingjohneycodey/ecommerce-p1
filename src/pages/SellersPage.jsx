import { ParticlesComponent } from '@/components/ParticlesComponent'
import { SellerCards } from '@/components/sellers/SellerCards'
import { sellersPageLinks } from '@/lib/data'
import { Link } from 'react-router-dom'

const SellersPage = () => {
  return (
    <>
      <ParticlesComponent />
      <div className="relative z-10">
        <div>
          <section className="page-bounds">
            <h1 className="my-6 font-sans text-2xl font-semibold">
              All Sellers
            </h1>

            <SellerCards className="mx-auto" />
          </section>

          <section className="border-t border-border/10 bg-muted">
            <div className="page-bounds mx-auto pb-6 pt-4 text-justify">
              <h3 className="mb-4 text-lg font-bold text-secondary">
                Your Ultimate Shopping Destination
              </h3>
              <p className="text-sm text-secondary">
                Discover unbeatable deals at SVA Global
                Marketplace &#45; your go-to for B2C & B2B
                shopping! Enjoy diverse products, exclusive
                discounts, and our eCommerce Guarantee for a
                worry-free experience. Whether wholesale or
                retail, find excellence and exciting
                auctions. Don&apos;t miss out on mega sales
                and special offers &#45; join us for a
                limitless online shopping journey!
              </p>
            </div>

            <div className="border-t border-border/30">
              <ul className="page-bounds mx-auto grid grid-cols-1 -space-x-px -space-y-px sm:grid-cols-2 lg:grid-cols-4">
                {sellersPageLinks.map(
                  ({ name, path, icon: Icon }, i) => (
                    <li
                      key={i}
                      className="group/sellerPageLink flex-1 border border-border/30 p-6 first:border-t-0"
                    >
                      <Link
                        to={path}
                        className="flex flex-col items-center gap-2"
                      >
                        <Icon
                          strokeWidth={1}
                          className="mb-3 size-10 text-foreground/50 transition-colors group-hover/sellerPageLink:text-brand-primary"
                        />
                        <span className="text-sm font-bold tracking-tight transition-[letter-spacing] group-hover/sellerPageLink:tracking-wide">
                          {name}
                        </span>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SellersPage
