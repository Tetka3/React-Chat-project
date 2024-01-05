import "./Sidebar.scss";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";


const Sidebar = () => {
  return (
    <div className="sidebar">               
          <Navbar />                  
          <Search />      
              
    </div>
  )
}

export default Sidebar
