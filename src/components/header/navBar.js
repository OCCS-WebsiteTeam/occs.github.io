import './navBar.css';

export default function NavBar() {
    return (
        <header className="headerComponent">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand logoLink">
                        <div class="logoContainer">
                            <div class="logoContainerItem">
                                <div>O</div>
                                <div>O</div>
                                <div>O</div>
                            </div>
                            <div class="logoContainerItem">
                                <div>C</div>
                                <div>C</div>
                                <div>C</div>
                            </div>
                            <div class="logoContainerItem">
                                <div>C</div>
                                <div>C</div>
                                <div>C</div>
                            </div>
                            <div class="logoContainerItem">
                                <div>S</div>
                                <div>S</div>
                                <div>S</div>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/index">
                                    <div>index</div><div>index</div><div>index</div><span>index</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/test">
                                    <div>test</div><div>test</div><div>test</div><span>test</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/services">
                                    <div>temp</div><div>temp</div><div>temp</div><span>temp</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    <div>temp</div><div>temp</div><div>temp</div><span>temp</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
