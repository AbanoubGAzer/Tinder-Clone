import React, { useState } from 'react';
import './Login.css'

import api from '../services/api';

import logo from '../assets/logo.svg'

//componente sempre é uma função
export default function Login({ history }){ //todo componente que é rota herdam automaticamente o history
  //username => obter valores 
  //setUsername => modificar valores
  const [ username, setUsername ] = useState('');

    async function handleSubmit(event){
      //previne o redirecionamento padrão para outra página
      event.preventDefault();

      const response = await api.post('/devs', {
        username,
      });

      //pegar apena o id que veio dentro do response
      const { _id } = response.data;

      console.log(response);

      //redireciona para respectiva página
      history.push(`/dev/${_id}`);
    }

    return (
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <img src={logo} alt="Tindev" />
          <input 
            placeholder="Digite Seu Usuário do Github"
            value={username}
            //valor digitado no input
            onChange={event => setUsername(event.target.value)}
            />
          <button type="submit">Enviar</button>
        </form>
      </div> 
    );
}

