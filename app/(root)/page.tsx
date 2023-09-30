import Image from 'next/image'
import Landing from '@/components/landing'
import { Navbarmain } from '@/components/navbarmain'
import { Navbar } from '@/components/navbar'
export default function Home() {
  return (
   <>
   <div className="background_gr">
   <Navbar/>
   <Landing/>
   </div>/
   </>
  )
}
