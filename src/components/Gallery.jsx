
const Gallery = () => {
    return (
        <div className="px-[150px] grid grid-cols-3 grid-rows-2 h-[600px] my-32 gap-10">
            <div className="row-span-2" data-aos="zoom-in" data-aos-duration="1000">
                <img className="w-full h-full object-cover" src="https://www.dtcbw.com/wp-content/uploads/2023/08/DJI-Agras-T40-Price.png" alt="" />
            </div>
            <div className="row-span-1" data-aos="zoom-out" data-aos-duration="1000">
                <img className="w-full h-full object-cover" src="https://www.shutterstock.com/image-photo/drone-quadcopter-digital-camera-600nw-782313298.jpg" alt="" />
            </div>
            <div className="row-span-2" data-aos="fade-left" data-aos-duration="1000">
                <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/small-drone-flying-still-with-defocused-sea-background-dron-front-view_533849-479.jpg" alt="" />
            </div>
            <div className="row-span-1" data-aos="flip-down" data-aos-duration="1000">
                <img className="w-full h-full object-cover" src="https://5.imimg.com/data5/SELLER/Default/2021/6/WD/BO/UC/131036992/dji-phantom-4-pro-v2-0-drone-camera-500x500.png" alt="" />
            </div>
        </div>
    )
}

export default Gallery