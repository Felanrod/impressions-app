import PropTypes from 'prop-types'

const Button = ({ id, text }) => {
    return (
        <button id={id}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.any
}

export default Button
