import PropTypes from 'prop-types'

const Cards = ({ img, title, anim }) => {
    return (
        <div className="w-full hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out" data-aos={anim} data-aos-duration="1000">
            <div className="w-full h-64 overflow-hidden">
                <img className="w-full h-full object-cover" src={img} alt="" />
            </div>
            <div className="p-3 mt-4 mb-3">
                <h1 className="font-medium text-2xl tracking-wide mb-3">
                    {title}
                </h1>
                <p className="text-gray-500 text-sm mb-6 leading-6">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique molestias cupiditate obcaecati tenetur nostrum temporibus doloribus, totam beatae mollitia maxime?
                </p>
                <div className="font-medium text-orange-600 border-b-[1px] inline-block border-orange-500 cursor-pointer">
                    Read More
                </div>
            </div>
        </div>
    )
}

Cards.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    anim: PropTypes.string.isRequired
}

export default Cards