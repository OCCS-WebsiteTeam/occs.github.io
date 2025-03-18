import './navBar.css'

export default function NavBar() {
    return (
        <header class="headerComponent">
            <nav class="navbar">
                <div class="logoContainer">
                    <a href="/" class="logoLink">
                        <span>O C<br></br>C S</span>
                        <span>O C<br></br>C S</span>
                        <span>O C<br></br>C S</span>
                    </a>
                </div>
                <ul class="nav-links">
                    <li><a href="/index"><span>index</span><span>index</span><span>index</span></a></li>
                    <li><a href="/test"><span>test</span><span>test</span><span>test</span></a></li>
                    <li><a href="/services"><span>temp</span><span>temp</span><span>temp</span></a></li>
                    <li><a href="/contact"><span>temp</span><span>temp</span><span>temp</span></a></li>
                </ul>
            </nav>
        </header>
    )
}