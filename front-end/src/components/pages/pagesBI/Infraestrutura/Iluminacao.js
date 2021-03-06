import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import Search from '../../../../components/Search';
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';

import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    
    this.downloadiluminacao = this.downloadiluminacao.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  
  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    PortalDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }


  downloadiluminacao() {
    PortalDataService.downloadiluminacao()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "iluminacao.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}


  render() {

    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
    const iluminacao=()=>{
      return this.downloadiluminacao // Chama a fun????o de download dos dados download despesa
    }

  
    return (
     
    <>
     
  <Search details={initialDetails}/> {/* M??dulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/> {/* M??dulo que tr??s o submenu */}
         </Col>
         </Row>
</Container>
       <br/> <br/>
      <TextSectionItem
      titlesection = "Ilumina????o"
      textsection = "Ilumina????o p??blica ?? o sistema de ilumina????o noturna das cidades, essencial ?? qualidade de vida nos centros urbanos, atuando como instrumento de cidadania, permitindo aos habitantes desfrutar, plenamente, do espa??o p??blico no per??odo noturno."
      /> {/* M??dulo que recebe o  t??tulo e o texto daquele inidicador*/}

<div className = "teste">   

<ModalDownload download1 = {iluminacao} classeSecundaria1="show" titulo1 ="Ilumina????o" 
              download2 = {iluminacao} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {iluminacao} classeSecundaria3="hide "titulo3 = "Por munic??pio"
              download4 = {iluminacao} classeSecundaria4="hide" 
              download5 = {iluminacao} classeSecundaria5="hide"/>  {/* M??dulo que tr??s o modal de Download, recebe por par??metro a fun????o de download se ?? hide 
            ou show, ou seja se aparece ou n??o no select e o t??tulo que ?? o nome no select*/}

         </div>

    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
        <ListarPaineis details={initialDetails} props ="Iluminacao" /> {/* M??dulo de busca que tr??s os pain??is de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
