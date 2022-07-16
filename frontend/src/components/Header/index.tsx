import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="rsmeta-logo-container">
                <img src={logo} alt="RSMeta"/>
                    <h1>RSMeta</h1>
                    <p>Desenvolvido por

                        <a href="https://www.instagram.com/ryanfelipe87.ig">@ryanfelipe87</a>
                    </p>
            </div>

        </header>
    )
}

export default Header