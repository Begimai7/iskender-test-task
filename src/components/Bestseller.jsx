import React, { useState } from "react";
import { styled } from "styled-components";
import { bestseller_data } from "./utils/constants";

export const Bestseller = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h4>Хиты продаж</h4>
      <BestsellerContainer>
        {bestseller_data.map((el) => (
          <li key={el.id}>
            <img src={el.img} alt={el.name} />
            <p>{el.description}</p>
            <Amount>{el.amount} c</Amount>
            <Status>{el.status}</Status>
            <Quantity>{el.quantity}</Quantity>

            <Buttons>
              <button onClick={() => setCount((prevS) => prevS - 1)}>-</button>
              <p>{count}</p>
              <button onClick={() => setCount((prevS) => prevS + 1)}>+</button>
            </Buttons>
          </li>
        ))}{" "}
      </BestsellerContainer>

      <LinkToCatolog href="/catolog">перейти в каталог</LinkToCatolog>
    </div>
  );
};

const BestsellerContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 8.291px;
  border: 1.083px solid #fff;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    flex-wrap: wrap;
    margin-bottom: 8px;
    background: #fff;
    padding: 8px;
    font-family: Gilroy;
    font-style: normal;
    line-height: normal;

    p {
      color: #1a1919;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.28px;
    }

    img {
      height: 100px;
      border-radius: 16px;
      margin: 0 0 10px 0;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #f5f5f5;
    border: none;
    border-radius: 50%;
    margin: 10px;
  }
`;
const Amount = styled.span`
  color: #000;
  font-family: Gilroy;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
`;
const Status = styled.span`
  color: #82cf6f;
  font-family: Gilroy;
  font-size: 12.437px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Quantity = styled.span`
  color: #3286c2;
  font-family: Gilroy;
  font-size: 12.437px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LinkToCatolog = styled.a`
  color: #3186c3;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;
