import React from "react";
import { styled } from "styled-components";

export const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
`;
