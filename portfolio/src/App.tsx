import './styles/app.scss'
import Header from './components/Header'
import Home from './components/Homepage'

const App = () => {

  return (
    <section className='bg-black text-white font-sans font-semibold'>
      <header className=''>
        <Header/>
      </header>
      
      <main>
        <Home/>
      </main>

    </section>
  )
}

export default App