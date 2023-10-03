import { React } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


export default function NavBar() {
    return (
        <div id="navbar">
            
        <Link to="/HomePage">Home</Link>
        <Link to="/NewPlayerForm"> New Player Form </Link>
        <SearchBar/>
      
    </div>
    );
  }