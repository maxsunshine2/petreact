import logo from "../Images/Troll Face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header-Project">React Course - Project 3</h4>
    </header>
  );
}
