import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';

const Header = () => <header id="main-header">
    <div id="title">
        <img src={logoImg} alt='restaurant image'/>
        <h1>GHOST Japanese Restaurant</h1>
    </div>
    <nav>
        <Button textOnly>Cart (0)</Button>
    </nav>
</header>

export default Header;