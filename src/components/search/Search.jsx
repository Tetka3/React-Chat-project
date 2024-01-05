import "./Search.scss";
import Models from "../../assets/images.png";
import Tetka from "../../assets/Titus.jpg";

const Search = () => {
  return (
    <div className="search">
        <div className="top">
            <input type="text" placeholder="Find a user ..."/>
            <img src={Models} alt="search"/>
        </div>    
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div>  
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
        <div className="bottom">
            <img src={Tetka} alt="logo"/>
            <span>Titus Njema</span>            
        </div> 
    </div>
  )
}

export default Search;
