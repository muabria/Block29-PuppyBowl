import { React } from "react";
import { Link } from "react-router-dom";
import AllPlayers from "../components/allPlayers";
import HomePage from "./HomePage";
import NewPlayerForm from "../components/NewPlayerForm";


export default function NavBar() {
    return (
        <div id="navbar">
        <HomePage/>
        <Link to={NewPlayerForm} element='' > Create New Player  </Link>
        <AllPlayers/>

        
    </div>
    );
  }