import React from "react";
import logo from "../assets/icons/logo.svg";
import AppStore from "../assets/icons/app-store.svg";
import GooglepPay from "../assets/icons/google-pay.svg";
import { address } from "./utils/constants";
import { styled } from "styled-components";

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <LogoAside>
          <img src={logo} alt="" />
          <p>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </p>

          <div>
            <a href="/">
              {" "}
              <img src={AppStore} alt="" />
            </a>
            <a href="/">
              {" "}
              <img src={GooglepPay} alt="" />
            </a>
          </div>
        </LogoAside>
        <Address>
          <h5>Адреса</h5>
          {address.map((e) => (
            <li>
              <p>{e.name}</p>
              <span>{e.addres}</span>
            </li>
          ))}
        </Address>
        <Company>
          <h5>Компания</h5>
          <li>Каталог</li>
          <li>Избранное</li>
          <li>Личный кабинет</li>
        </Company>
        <Contacts>
          <h5>Контакты</h5>
          <li>
            <p>Email</p>
            <span>iskender.kg@gmail.com</span>
          </li>
          <li>
            <p>Телефон</p>
            <span>+996 (500) 000-104 +996 </span>
            <span> (997) 000-104 +996 </span>
            <span>(222) 000-104</span>
          </li>
        </Contacts>
      </FooterContainer>
    </FooterStyled>
  );
};
const FooterStyled = styled.footer`
  background: linear-gradient(107deg, #3186c3 6.46%, #004f86 68.08%);
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 1240px;
  margin: 0 auto;
  padding: 15px 0;
  color: #fff;

  img {
    width: 180px;
    margin: 20px;
  }
  p {
    width: 200px;
  }
`;
const LogoAside = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    gap: 12px;

    a {

      img {
        background-color: #000;
        padding: 6px;
        border-radius: 10px;
      }
    }
  }
`;
const Address = styled.ul`
  color: #e0e0e0;
  font-family: Gilroy;

  h5 {
    font-size: 20px;
    font-weight: 700;
  }
  p {
    font-size: 15px;
    font-weight: 400;
  }
  span {
    font-size: 15px;
    font-weight: 500;
  }
`;
const Company = styled.ul`
  color: #e0e0e0;
  font-family: Gilroy;

  li {
    font-size: 14px;
    font-weight: 500;
    margin: 15px;
  }
`;
const Contacts = styled.ul`
  color: #e0e0e0;
  font-family: Gilroy;

  li {
    font-size: 14px;
    font-weight: 500;
    margin: 15px;
  }
`;
