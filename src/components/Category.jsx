import React, { useEffect, useState } from "react";
import { axiosInstance } from "../api/api";
import { styled } from "styled-components";

export const Category = () => {
  const [category, setCategory] = useState([]);

  const getAllSort = async () => {
    try {
      const { data } = await axiosInstance.get("/category");
      console.log(data);
      setCategory(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllSort();
  }, []);
  const displayedCategory = category.slice(0, 12);
  return (
    <div>
      <h4>Категории</h4>
      <CategoryStyled>
        {displayedCategory.map((el) => (
          <li key={el.id}>
            <p>{el.name}</p>
            <span>{el.quantity}</span>
            <img src={el.img} alt={el.name} />
          </li>
        ))}
      </CategoryStyled>
      <LinkToCatolog href="/catolog">перейти в каталог</LinkToCatolog>
    </div>
  );
};
const CategoryStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  li {
    width: 160px;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 8px;
    padding: 8px;
    font-family: Gilroy;
    font-style: normal;
    line-height: normal;

    p {
      color: #000;
      font-size: 14px;
      font-weight: 500;
    }
    span {
      color: var(--grey-2, #727272);
      font-size: 12px;
      font-weight: 400;
    }

    img {
      width: 120px;
      height: 100px;
      border-radius: 16px;
      margin-top: 12px;
    }
  }
`;
const LinkToCatolog = styled.a`
  color: #3186c3;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
`;
