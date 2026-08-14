import { VehicleOwnerDetailsPage } from '@/components/vehicle-owner-details/VehicleOwnerDetailsPage'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <VehicleOwnerDetailsPage />
      <Footer />
    </main>
  )
}