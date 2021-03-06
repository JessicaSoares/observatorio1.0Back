import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
export default function Saude() {
  {/* Cards de opções de submenu do indicador*/}
  return(
  <>
            <Search details={initialDetails}/>
     <NavSubItem 
      link1 = "/balancacomercial"
      name1 = "Balança comercial"
      link2 = "/PIBBI"
      name2 = "PIB"
      link3 = "/comercioeindustria"
      name3 = "Comércio e industria"
      link4 = ""
      name4 = ""
      />
      <div className="cards">
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/balance.png"
              text=""
              label="Balança comercial"
              path="/graphs"
            />
            <CardItem
              src="images/PIB.png"
              text=""
              label="PIB"
              path="/PIBBI"
            />
            <CardItem
              src="images/industry.png"
              text=""
              label="Comercio e Industria"
              path="/comercioeindustria"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
