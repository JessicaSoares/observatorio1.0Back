import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, {Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class Agua extends Component {
  constructor(props) {
    super(props);
    
    this.refreshList = this.refreshList.bind(this);
    this.downloadagua = this.downloadagua.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
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

  downloadagua() {
    PortalDataService.downloadagua()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "agua.csv");
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
    const agua=()=>{
      return this.downloadagua // Chama a fun????o de download dos dados download despesa
    }
  
    return (
     
    <>
    
<Search details={initialDetails}/> {/* M??dulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/>{/* M??dulo que tr??s o submenu */}
         </Col>
         </Row>
</Container>
       <br/> <br/>
     <TextSectionItem
      titlesection = "Abastecimento de ??gua"
      textsection = "Um sistema de abastecimento de ??gua consiste no conjunto de obras, equipamentos e servi??os com o objetivo de levar ??gua pot??vel para uso no consumo dom??stico, ind??stria, servi??o p??blico, entre outros. O SAAEP ??? Servi??o Aut??nomo de ??gua e Esgoto de Parauapebas foi fundado em 2009, ap??s a cria????o da Lei n?? 4.385, de 11 de agosto de 2009, com o objetivo de desenvolver os servi??os de saneamento na cidade de Parauapebas. ?? uma autarquia da administra????o indireta da Prefeitura Municipal de Parauapebas, cujo objetivo ?? promover os servi??os de capta????o, tratamento e distribui????o de ??gua pot??vel para a popula????o do munic??pio. Os dados coletados para constru????o dos gr??ficos que ser??o apresentados ?? seguir, t??m origem do Sistema Nacional de Informa????es sobre Saneamento - SNIS, uma unidade vinculada ?? Secretaria Nacional de Saneamento do Minist??rio do Desenvolvimento Regional e alimentado pela SAAEP."
      />{/* M??dulo que recebe o  t??tulo e o texto daquele inidicador*/}

<div className = "teste">   

<ModalDownload download1 = {agua} classeSecundaria1="show" titulo1 ="??gua" 
              download2 = {agua} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {agua} classeSecundaria3="hide "titulo3 = "Por munic??pio"
              download4 = {agua} classeSecundaria4="hide" 
              download5 = {agua} classeSecundaria5="hide"/>{/* M??dulo que tr??s o modal de Download, recebe por par??metro a fun????o de download se ?? hide 
            ou show, ou seja se aparece ou n??o no select e o t??tulo que ?? o nome no select*/}

         </div>

<section class="page-section-sub-boxlegend " id="about">
        <Container>
        <ListarPaineis details={initialDetails} props ="Agua" />{/* M??dulo de busca que tr??s os pain??is de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
