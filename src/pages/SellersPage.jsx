import { ParticlesComponent } from '@/components/ParticlesComponent'
import { SellerCards } from '@/components/sellers/SellerCards'
import { BreadCrumbs } from '@/components/ui/BreadCrumbs'

const SellersPage = () => {
  return (
    <>
      <ParticlesComponent />
      <div className="relative z-10">
        <section className="page-bounds">
          <div className="my-6 flex flex-wrap-reverse items-start justify-between gap-2">
            <h1 className="font-sans text-2xl font-semibold">
              All Sellers
            </h1>

            <BreadCrumbs />
          </div>

          <SellerCards className="mx-auto" />
        </section>
      </div>
    </>
  )
}

export default SellersPage
