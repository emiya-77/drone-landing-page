import PropTypes from 'prop-types'

const Button = ({ text }) => {
  return (
    <div className="mt-3">
      <div className="px-5 py-3 bg-orange-600 bg-opacity-80 inline-block hover:bg-orange-700 hover:bg-opacity-90 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
        <h1 className="text-white font-medium">{text}</h1>
      </div>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button