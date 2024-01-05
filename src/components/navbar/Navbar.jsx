import "./Navbar.scss";
import Tetka from "../../assets/Titus.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <span>Tetka Chat</span>
      </div>
      <div className="right">
        <img src={Tetka} alt="logo"/>
        <span>Titus Njema</span>
        <button>Log out</button>
      </div>
    </div>
  )
}

export default Navbar;