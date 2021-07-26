import NavListItem from "./NavListItem"

const Navbar = () => {
    return (
        <nav className="collapsed">
            <NavListItem href={'#home'} text={'Impressions'} />
            <NavListItem href={'#work'} text={'Work'} />
            <NavListItem href={'#contact'} text={'Contact'} />
        </nav>
    )
}

export default Navbar
