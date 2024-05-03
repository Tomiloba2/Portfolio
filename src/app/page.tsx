import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Portfolio } from '@/components/Portfolio'
import { Blogs } from '@/components/Blog'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <header className='bg-slate-200 dark:bg-slate-900'>
        <Navbar />
        <div className='container mx-auto px-4 py-4'>
          <Hero />
        </div>
      </header>
      <main className='flex flex-col gap-10'>
        <article className='container mx-auto px-4 py-4'>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </article>
        <section id='Experience' className='bg-slate-200 dark:bg-slate-900'>
          <div className='container mx-auto px-4 py-4'>
            <Experience />
          </div>
        </section>
        <section id="portfolio" className='container mx-auto px-4 py-4'>
          <Portfolio />
        </section>
        <section id="blog" className='bg-slate-200 dark:bg-slate-900'>
          <div className="container mx-auto px-4 py-4">
            <Blogs />
          </div>
        </section>
        <section id="contact" className=''>
          <div className="container mx-auto px-4 py-4">
            <Contact />
          </div>
        </section>
        <footer id="footer" className='bg-slate-200 dark:bg-slate-900'>
          <div className="container px-4 py-4">
            <Footer />
          </div>
        </footer>
      </main>
    </div>
  )
}
