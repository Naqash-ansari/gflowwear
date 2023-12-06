import Image from 'next/image'
import Navbar from './layout/navbar/Navbar'
import BannerCarousel from './component/carousel/BannerCarousel'
import Cards from './component/card/Cards'
import GeoLocation from './component/location/GeoLocation'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#f3f4f6] py-5 lg:py-20 xl:py-20 sm:py-10">
      <BannerCarousel />
      <Cards />
      <GeoLocation />
    </main>
  )
}
