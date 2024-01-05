import React from "react";
import { styled } from "styled-components";
import Banner from "../assets/img/banner.png";

export const Auction = () => {
  return (
    <AuctionContainer>
      <Banner />
    </AuctionContainer>
  );
};
const AuctionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
