import { CheckChallanPending } from '@/components/e-challan/CheckChallanPending'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'
export default function Page() {
  return (
    <main>
          <Navbar />
          <CheckChallanPending />
          <Footer />
        </main>
  )
}