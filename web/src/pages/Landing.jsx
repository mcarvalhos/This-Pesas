import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import "../styles/pages/landing.css";

import logoImg from "../images/logo.svg";

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="" />
        <main>
          <h1>Uma forma simples para um controle eficaz</h1>
          <p>Mantenha o controle de suas despesas sem preocupação.</p>
        </main>

        <Link to="/login" className="enter-restricted-area">
          Acessar restrito
        </Link>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </div>
    </div>
  );
}
export default Landing;
