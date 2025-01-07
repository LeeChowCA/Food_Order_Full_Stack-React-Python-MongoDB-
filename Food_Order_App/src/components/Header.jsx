import logoImg from '../assets/logo.jpg';

const Header = () => <header id="main-header">
    <div id="title">
        <img src={logoImg} alt='restaurant image'/>
        <h1>GHOST Japanese Restaurant</h1>
    </div>
    <nav>
        <button>Cart (0)</button>
    </nav>
</header>

export default Header;