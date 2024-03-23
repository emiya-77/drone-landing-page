import About from './components/About'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Slider from './components/Slider'
import CardContainer from './components/cards/CardContainer'

function App() {

  return (
    <>
      <div>
        <Slider></Slider>
        <div className='container mx-auto'>
          <Banner></Banner>
        </div>
        <div className='bg-gray-100'>
          <About></About>
        </div>
        <div className='container mx-auto'>
          <CardContainer></CardContainer>
          <Gallery></Gallery>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}

export default App
