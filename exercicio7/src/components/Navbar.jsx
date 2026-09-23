/*o menu foi alterado pois a responsividade pode ser feita com o react tb*/
function Navbar({ contador }) {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand h1" href="#">Loja</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Carrinho <span>{contador}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;