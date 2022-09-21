import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";
 
// OG Nav Bar
export default function Navbar() {

  // Fetch Github stars at runtime
  const [starsCount, setStarsCount] = useState('');
  useEffect(() => {
    // Fetch data from Github api
    console.log('useEffect');
    fetch('https://api.github.com/repos/open-source-labs/OverVue')
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        const starsRounded = (data.stargazers_count/1000).toFixed(1);
        setStarsCount(starsRounded + 'k');
      })
      .catch((error) => {
        setStarsCount('');
        console.log(error);
      })
  }, [])

  return (
    <nav className="nav">
      <Link className="nav_logo" to={"/"}>
        <img class="overVue_logo" src={logo} alt={"logo"} />
      </Link>
      <div className="nav_actions">
        <Link className="nav_docs" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav_ourTeam" to={"/ourteam"}>
          About Us
        </Link>
        <a className="github_button" href="https://github.com/open-source-labs/OverVue">
          <img className='github_logo' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="black github logo"></img>
          {starsCount}
        </a>
      </div>
    </nav>
  );
}
