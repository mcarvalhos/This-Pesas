import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import logoImg from "../images/logo.svg";

import "../styles/pages/login.css";


function Login() {
  const { goBack } = useHistory();

  return (
    <div id="page-login">
      <div className="login-panel">
        <img src={logoImg} alt="ThisPesas" />
        {/* <div className="login-location">
          <strong>Ribeirão Pires</strong>
          <span>São Paulo</span>
        </div> */}
      </div>
      <main>
        <div className="login-form-wrapper">
          <header>
            <button type="button">
              <FiArrowLeft size={24} color="#15C3D6" onClick={goBack} />
            </button>

            <Link to="/" type="button">
              <FiArrowLeft size={24} color="#fff" />
            </Link>
          </header>

          <form className="login-form">
            <legend>Fazer login</legend>
            <div className="div-input-login">
              <label htmlFor="name">Email</label>

              <div className="input-login">
                <input type="email" autoComplete="none" id="name" />
              </div>

              <label htmlFor="name">Senha</label>
              <div className="input-login">
                <input type="password" id="name" />
              </div>
            </div>
            <div className="login-options">
              {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" className="remember-login-check" />}
              label="Lembrar-me"
            /> */}
              <div className="div-remember-checkbox">
                <input
                  className="remember-login-checkbox"
                  type="checkbox"
                  id="check"
                />
                <label htmlFor="check">Lembrar-me</label>
              </div>
              <Link to="/recuperar" className="recovery-login">
                Esqueci minha senha
              </Link>
            </div>

            <button className="confirm-login-button" type="submit">
              <Link to="/app" className="confirm-login-button_link">Entrar</Link>
            </button>

            {/* <Button
              type="submit"
              className="confirm-login-button"
            >
              Entrar
            </Button> */}
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;
