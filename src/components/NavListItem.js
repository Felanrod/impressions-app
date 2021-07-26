const NavListItem = ({ href, text }) => {
    return (
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}

export default NavListItem
