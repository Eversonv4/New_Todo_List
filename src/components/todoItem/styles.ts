import styled from "styled-components";

interface IProp {
  color: string;
}

export const LayoutList = styled.div`
  background-color: #f2f2f255;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  & li {
    color: #282828;
    max-width: 276px;
  }
`;

export const ActionButton = styled.button<IProp>`
  padding: 7px;
  font-size: 1.1rem;
  margin-left: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #f7f7f7;
  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${({ color }) => color + "66"};
  }

  @media (max-width: 500px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
