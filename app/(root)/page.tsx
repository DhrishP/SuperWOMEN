import Image from 'next/image'
import Landing from '@/components/landing'
import { Navbarmain } from '@/components/navbarmain'
export default function Home() {
  return (
   <>
   <div className="background_gr">
  <Navbarmain/>
   <Landing/>
   </div>/
   </>
  )
}
