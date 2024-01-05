import React from "react";
import { styled } from "styled-components";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/icons/avatar.svg";
import cart from "../../assets/icons/cart.svg";
import burger from "../../assets/icons/burger.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <img src={logo} alt="" />

        <SearchBlock>
          <div>
            <img src={burger} alt="" />
            <span>Каталог</span>
          </div>
          <input type="search" placeholder="Поиск" />
        </SearchBlock>
        <AvatarSide>
          <div>
            <p>Добро пожаловать</p>
            <div>
              <a href="/"> Вход</a> / <a href="/"> Регистрация</a>
            </div>
          </div>

          <Icons>
            <img src={avatar} alt="avatar" />

            <img src={cart} alt="cart" />
          </Icons>
        </AvatarSide>
      </HeaderContainer>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  background-color: #0063a9;
  color: #fff;
`;
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1240px;
  margin: 0 auto;
  padding: 15px 0;
`;
const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 88px;
    padding: 14px 26px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.1);
  }
  input {
    width: 600px;
    padding: 11px;
    border-radius: 20px;
    background: #fff;
    outline: none;
    margin-left: 16px;
  }
`;
const AvatarSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: Gilroy;
  font-size: 10px;
  font-weight: 400;

  a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Icons = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  img {
    background: #ffff;
    border-radius: 50%;
    padding: 3px;
  }
`;
