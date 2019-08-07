import React from 'react';
import './Login.css'

import logo from '../assets/logo.svg'

//componente sempre é uma função
export default function Login(){
    return (
      <div className="login-container">
        <form>
          <img src={logo} alt="Tindev" />
          <input placeholder="Digite Seu Usuário do Github" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
}

