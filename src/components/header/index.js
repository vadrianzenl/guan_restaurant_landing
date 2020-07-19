import React, {useState} from 'react';
import saveCustomer from '../../api/customers';

const Header = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = setValue => e => setValue(e.target.value);
  const handleSaveCustomer = () => {
    saveCustomer(name, email);
    setName('');
    setEmail('');
  };
  return (
    <header id="home" className="hero-area">
      <div className="overlay">
        <span />
        <span />
      </div>
      <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src="img/logo2.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="lni-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#home">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#services">
                  Con&oacute;cenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#features">
                  Beneficios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="#contact">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row space-100">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="contents">
              <h2 className="head-title">Plataforma de reservas y atenci&oacute;n en mesa</h2>
              <p>
                Se uno de los primeros en utilizar Guan en tus
                restaurantes favoritos y obtén descuentos
              </p>
              <div className="header-button">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange(setName)}
                    placeholder="Nombre"
                    required
                    data-error="Please enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange(setEmail)}
                    placeholder="Email"
                    required
                    data-error="Please enter your Email"
                  />
                  <div className="help-block with-errors" />
                </div>
                <button type="button" className="btn btn-border-filled" data-toggle="modal" data-target="#exampleModal" onClick={handleSaveCustomer}>Enviar</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12 p-0">
            <div className="intro-img">
              <div className="video-promo-content text-center">
                <a
                  id="play-video"
                  className="video-play-button video-popup"
                  href="https://www.youtube.com/watch?v=V6k_PCPxEjU"
                >
                  <span />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">¡Mensaje Enviado!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              Pronto estaremos en contacto contigo. Gracias por ser parte de Guan.
            </div>
            <div className="modal-footer text-center">
              <button type="button" className="btn btn-success" data-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
