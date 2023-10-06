
import { Navbar } from './componentes/Navbar/Navbar'
import { Homes } from './componentes/Homes/Homes'
import { About } from "./componentes/about/About";
import { Portfolio } from "./componentes/Portfolio/Portfolio";
import { Contact } from "./componentes/Contact/Contact";

import './App.css'

function App() {


  return (
    <>
      <header id='principal' className='conteiner-principal'>
        <div className='div-navbar'>
          
          <Navbar />
         
        </div>

      </header>

      <main>
        <section id='homes' className='homes'>
          <div>
            <Homes />
          </div>
        </section>

        <section id='portfolio' className='portfolio'>
          <div>
            <Portfolio />
          </div>
        </section>

        <section id='about' className='about'>
          <div>
          <About />
          </div>
        </section>

      </main>

      <footer>
        <section id='contact' className='contact'>
          <div>
            <Contact/>
          </div>
        </section>
      </footer>
    </>
  )
}

export default App
