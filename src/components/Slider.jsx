
const Slider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px] overflow-hidden">
        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4828.jpg?auto=webp&quality=75&crop=1.91:1&width=1200" className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px] overflow-hidden">
        <img src="https://cdn.thewirecutter.com/wp-content/media/2023/11/dronesforphotovideo-2048px-DSC4837-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px] overflow-hidden">
        <img src="https://www.cnet.com/a/img/resize/d227dcef001afaa5213d76444c66c1d8fdf6653b/hub/2021/04/15/e594b53b-f4c1-4fdd-ab25-169462f1b36c/air-2s-test-4-mp4-00-00-13-22-still001.png?auto=webp&fit=cover&height=482&width=856" className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px] overflow-hidden">
        <img src="https://www.paysalia.com/sites/default/files/uploads/Actualites/drone-paysagiste-une.jpeg" className="w-full object-cover" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Slider;