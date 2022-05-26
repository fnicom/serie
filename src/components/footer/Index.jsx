import React from "react";
import "./style.css";
import iconHeart from "../../assets/img/iconHeart.png";

const Footer = () => {
  return (
    <div className="first-footer">
      <div className="first-footer-container">
        <div className="footer-icons">
          <img src={iconHeart} />
          <p className="first-footer-text">Entrega gratuita apartir de R$ 99</p>
        </div>
        <div className="footer-icons">
          <img src={iconHeart} />
          <p className="first-footer-text">Parcelamento sem juros</p>
        </div>
        <div className="footer-icons">
          <img src={iconHeart} />
          <p className="first-footer-text">cadastre-se e ganhe desconto</p>
        </div>
      </div>

      <div className="newsletter-text-container">
        <p className="newsLetter-title">Assine nossa Newsletter</p>
        <p className="newsLetter-text">
          cadastre-se para receber nossas novidades e descontos exclusivos!
        </p>
      </div>

      <div className="newsletter-footer-container">
        <form>
          <input
            className="input-name"
            placeholder="Nome"
            requireds
            type="text"
          />
          <input
            className="input-email"
            placeholder="E-mail"
            required
            type="email"
          />
          <button>enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
