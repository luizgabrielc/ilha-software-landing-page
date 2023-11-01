import { Button } from '@/components/ui/button'
import { Content } from './_components/contentHome'
import { Footer } from '../../components/ui/footer'
import { Navbar } from '../../components/ui/navbar'

const MarketingPage = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center md:justify-start text-center flex-1 '>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}

export default MarketingPage
