import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { axiosInstance } from "../api";
import SketolonLoader from "./UI/SkeletonLoader";

export const SortBlock = () => {
  const [sort, setSort] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllSort = async () => {
    try {
      const { data } = await axiosInstance.get("/sort");
      console.log(data);
      setSort(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getAllSort();
    setLoading(false);
  }, []);

  const sketolon = [...new Array(6)].map((_, i) => <SketolonLoader key={i} />);

  return (
    <StyledSkeleton>
      {loading ? (
        sketolon
      ) : (
        <ul>
          {sort.map((el) => (
            <li key={el.id}>
              <img src={el.img} alt={el.name} />
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      )}
    </StyledSkeleton>
  );
};
const StyledSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 36px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1.5px solid var(--grey, #d7eefe);
      }
    }
  }
`;
