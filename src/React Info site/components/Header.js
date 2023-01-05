import logo from "../images/logo192.png";

function Header() {
  return (
    <div className="header">
      <header>
        <nav className="nav">

            <img src={logo} className="logo" alt="logo" />
            <h3 className="fact">ReactFacts</h3>

          <h3>React Course -Project 1</h3>
          {/* <ul className="nav-holder">
            <li>
              <a className="active" href="javscript:void()" aria-current="page">
                Pricing
              </a>
            </li>
            <li>
              <a href="javscript:void()">
                About
              </a>
            </li>
            <li>
              <a href="javscript:void()">
                Contact
              </a>
            </li>
          </ul> */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
