import React from "react";
import DeveloperCard from "../../styles/DeveloperCard";
import Contribute from "../../components/Contribute";
import { Navbar } from "../../components/Navbar";
import "./ourteam.css";

import devData from "../../assets/devData";

// /** functionality for loading developer cards components, and the contribute components **/
export default function OurTeam() {
  const devCards = [];

  for (const [name, value] of Object.entries(devData)) {
    devCards.push(
      <DeveloperCard>
        <img src={value.img} alt={name} className="dev-pic" />
        <p className="dev-name">{value["dev-name"]}</p>
        <a href={value["github-link"]}>{value["github-handle"]}</a>
      </DeveloperCard>
    );
  }
  devCards.sort()
  
  return (
    <div className="ourteam">
      <Navbar/>
      <div className="footer">
      <div className="team-content">
      <h2 className="team-h2">About OverVue</h2>
       <h3 className="team-h3">OverVue is an Open Source prototyping tool that allows developers to seemlessly create and visualize Vue applications with interactive product previews and live-updated tree displays of component hierarchies and application routing. The resulting live-generated code is easily exportable, allowing developers to transition from prototyping to production with just the click of a button. </h3>
      </div>
        <h4 className="team-h4">Our Team</h4>
        <h5 className="team-h5">Our product is built by a diverse community of developers who are passionate about improving prototype driven development.</h5>
        <div className="devCards">
          {devCards}
        </div>
        <Contribute />
      </div>
    </div>
  )
};