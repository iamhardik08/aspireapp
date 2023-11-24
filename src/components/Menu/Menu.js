import "./Menu.css";


function Menu() {

    const MenuItems = [{
        name: "Home",
        logo: "images/aspire-home.svg"
    },
    {
        name: "Cards",
        logo: "images/cards.svg"
    },
    {
        name: "Payments",
        logo: "images/payments.svg"
    },
    {
        name: "Credits",
        logo: "images/credit.svg"
    },
    {
        name: "Credits",
        logo: "images/settings.svg"
    },

    ]
    return (<aside className="left-menu-container">
        <img src="images/aspire-logo.svg" className="logo-img" />
        <div className="brand-tag">Trusted way of banking for 3,000+ <br /> SMEs and startups in Singapore</div>

        <>
            {MenuItems.map(menu => {
                return (<div className="menu-item-div" key={menu.name}><img src={menu.logo} alt={menu.name} className="menu-item-img" /><span>{menu.name}</span></div>)
            })}
        </>
    </aside>)
}

export default Menu;