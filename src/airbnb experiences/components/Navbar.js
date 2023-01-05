import Logo from '../images/airbnb 1.png'
function Navbar() {
    return (
        <div>
            <nav>
                <img src={Logo}  className="logo" alt='logo' />
            </nav>
        </div>
    );
}

export default Navbar;