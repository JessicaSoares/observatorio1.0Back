import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadesgoto = this.downloadesgoto.bind(this);

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

  downloadesgoto() {
    PortalDataService.downloadesgoto()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "esgoto.csv");
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
    const esgoto = () => {
      return this.downloadesgoto // Chama a fun????o de download dos dados download despesa
    }

    return (

      <>
        <Search details={initialDetails} />
        <Container>
          <Row>

            <Col sm={8}>
              <NavInfraestrutura />{/* M??dulo que tr??s o submenu */}
            </Col>
          </Row>
        </Container>
        <br /> <br />

        <TextSectionItem
          titlesection="Esgoto"
          textsection="Esgoto ?? um sistema destinado a escoar e tratar os dejetos dos diversos aglomerados populacionais. Esses dejetos s??o a ??gua proveniente do banho, limpeza de roupas, lou??as ou descarga do vaso sanit??rio. O Servi??o Aut??nomo de ??gua e Esgoto de Parauapebas ??? SAAEP, fundado em 2009, ap??s a cria????o da Lei n?? 4.385, com o objetivo de desenvolver os servi??os de saneamento na cidade de Parauapebas. ?? uma autarquia da administra????o indireta da Prefeitura Municipal de Parauapebas, cujo objetivo ?? promover os servi??os de capta????o, tratamento e distribui????o de ??gua pot??vel para a popula????o do munic??pio. Os dados dos gr??ficos a seguir foram coletados da fonte SNIS, alimentados pelo SAAEP."
        /> {/* M??dulo que recebe o  t??tulo e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={esgoto} classeSecundaria1="show" titulo1="Esgoto"
            download2={esgoto} classeSecundaria2="hide" titulo2="Por setor"
            download3={esgoto} classeSecundaria3="hide " titulo3="Por munic??pio"
            download4={esgoto} classeSecundaria4="hide"
            download5={esgoto} classeSecundaria5="hide" /> {/* M??dulo que tr??s o modal de Download, recebe por par??metro a fun????o de download se ?? hide 
          ou show, ou seja se aparece ou n??o no select e o t??tulo que ?? o nome no select*/}

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="Esgoto" /> {/* M??dulo de busca que tr??s os pain??is de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
