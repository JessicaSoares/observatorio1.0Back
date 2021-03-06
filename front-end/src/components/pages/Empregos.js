import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function Empregos() {
  return (
    <>
          <Search details={initialDetails}/>
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


