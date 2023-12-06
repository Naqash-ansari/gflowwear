import { Inter } from 'next/font/google'
import './globals.css'
import '../app/assets/style/style.scss'
import Navbar from './layout/navbar/Navbar'
import './assets/style/tailwind.css'
import Footer from './layout/footer/Footer'
import Wrapper from './services/Wrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GroundFlowWear',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-[#f3f4f6]'>
        <Wrapper>

          <Navbar />
          {children}
          <Footer />


        </Wrapper>
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </body>
    </html>
  )
}