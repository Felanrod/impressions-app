import PropTypes from 'prop-types'
import { MdMenu } from 'react-icons/md'
import Button from './Button'


const TopBar = ({ title }) => {
    return (
        <div id="topBar">
            <Button id={'navbar-toggler'} text={<MdMenu />} />
            <h1><a href="#home">{title}</a>
            </h1>
        </div>
    )
}

TopBar.defaultProps = {
    title: 'Impressions Custom Upholstery'
}

TopBar.propTypes = {
    title: PropTypes.string
}
export default TopBar
