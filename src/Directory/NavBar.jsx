import { React } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import AllPlayers from "../components/allPlayers";
import HomePage from "./HomePage";


export default function NavBar() {
    return (
        <div id="navbar">
        <HomePage/>
        <Link to="/singlePlayer"> Create New Player  </Link>
        <AllPlayers/>

        
    </div>
    );
  }