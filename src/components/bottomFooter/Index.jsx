import React from "react";
import "./style.css";
import logoFooter from "../../assets/img/logo-header.jpeg";
import logoFacebook from "../../assets/img/facebook.png"
import logoInstagram from "../../assets/img/instagram.png"
import logoTwitter from "../../assets/img/twitter.png"
import paymentsImg from "../../assets/img/creditCard.png"
import serieLogo from "../../assets/img/serieLogo.png"

const BottomFooter = () => {
  return (
    <div className="bottomFooter-container">
      <div className="container-footer">
      <div>
        <div className="container-address">
          <img src={logoFooter} />
          <div className="social-medias">
          <img src={logoFacebook} />
          <img src={logoInstagram} />
          <img src={logoTwitter} />
          </div>
          <div className="address-footer">
            <p>@2022 CNPJ 00.000.000/0000-00</p>
            <p>Rua Tal de Tal, 123 - Cidade de São Paulo</p>
          </div>
        </div>
      </div>
      <div>
        <a href="/">
          <p className="pet-text">PET STORE</p>
        </a>
        <a href="/">
          <p>Quem somos</p>
        </a>
        <a href="/">
          <p>Como comprar</p>
        </a>
        <a href="/">
          <p>Trocas e Devoluções</p>
        </a>
        <a href="/">
          <p>Fretes e Entregas</p>
        </a>
      </div>
      <div>
        <p className="contact-text">CONTATO</p>
        <p>(99) 9999-9999</p>
        <p>(99) 9999-9999</p>
        <p>petstore@petstore.com.br</p>
      </div>
      <div>
        <p className="payment-text">PAGAMENTO</p>
        <img src={paymentsImg}/>
      </div>

      </div>

      <div className="footer-tech">
        <p className="tech-text">TECNOLOGIA E DESENVOLVIMENTO</p>
        <img src={serieLogo} />
      </div>
    </div>
  );
};

export default BottomFooter;
