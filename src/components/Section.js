import PropTypes from 'prop-types'

const Section = ({ sectionId, headerId, header }) => {
    return (
        <section id={sectionId}>
            <h2 id={headerId}>{header}</h2>
        </section>
    )
}

Section.defaultProps = {
    sectionId: ''
}

Section.propTypes = {
    sectionId: PropTypes.string,
    headerId: PropTypes.string,
    header: PropTypes.string
}

export default Section
