import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Signature from './components/Signature'
import Footer from './components/Footer'

function App() {

  return (
    <div className='grid pt-7 p-10 h-max'>
      <Header />
      <Hero />
      <Projects />
      <Signature />
      <Footer />
    </div>
  )
}

export default App
