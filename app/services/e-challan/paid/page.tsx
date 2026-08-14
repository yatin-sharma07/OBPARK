import { CheckChallanPaid } from '@/components/e-challan/CheckChallanPaid'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/layout/Footer'
export default function Page() {
  return (
    <main>
          <Navbar />
          <CheckChallanPaid />
          <Footer />
        </main>
  )
}