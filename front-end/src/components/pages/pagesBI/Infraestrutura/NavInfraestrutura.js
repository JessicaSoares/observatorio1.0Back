import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "./../Social/NavSubSocial";

export default function NavInfraestrutura() {   {/*Chama o módulo de submenu e passa os parâmetro como link e nome de cada link, Icone do submenu  e nome do submenu */}

  return (
    
    <NavSubItem 
    link1 = "/lixo"
    name1 = "Lixo"
    link2 = "/agua"
    name2 = "Água"
    link3 = "/esgoto"
    name3 = "Esgoto"
    link4 = "/iluminacao"
    name4 = "Iluminação"
    imageicon = "images/infracon.png"
    subname = "Infraestrutura"
    />
      ); 
    }
