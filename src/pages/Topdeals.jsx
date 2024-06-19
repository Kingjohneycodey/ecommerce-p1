import deals from '@/assets/deals.png'

// dicount percentage

function percent(pri, dis) {
  return ((pri - dis) / pri) * 100
}

///dummy data
const data = [
  {
    image: deals,
    price: 200,
    discount: 100,
    details: 'yes',
    percent: percent({}.price, {}.discount),
  },
]

const TopDeals = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-[1900px] flex-col px-10 py-8 font-sans">
        <img src={deals} />

        {/*content goes here*/}
      </div>
    </section>
  )
}

export default TopDeals
