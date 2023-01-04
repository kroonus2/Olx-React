import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import './App.css';

import { Main } from "./components/MainComponents";
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';


const Page = (props) => {
  return (
    <BrowserRouter>
      <Main>
        <Header />

        <Routes />

        <Footer />

      </Main>

    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

//Parei aula 17