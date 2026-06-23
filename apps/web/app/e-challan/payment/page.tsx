import { ChallanPayment } from '@/components/e-challan/ChallanPayment'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'
export default function Page() {
  return (
    <main>
          <Navbar />
          <ChallanPayment/>
          <Footer />
        </main>
  )
}