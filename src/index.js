import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

const Pagina404 = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', backgroundColor: '#F54655', color:'#FFF'}}>
      <h1 style={{ fontSize: '5em', textAlign: 'left'}}>404</h1>
      <p>
        Oops, a página que você está procurando não existe!
        <hr />
        <a href="/" style={{ textDecoration: 'none', margin: "200px" }}>
          <div style={{ border: '2px solid #FFF', borderRadius: '99px', padding: '8px 30px 9px', textTransform: 'uppercase' }}>
            Voltar para a Home
          </div>
        </a>
      </p>
    </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);