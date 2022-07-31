import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ContainerLayout = styled.section`
  background-color: rgba(240, 240, 240, 0.5);
  padding: 30px 50px;
  border-radius: 15px;
  width: 500px;
`;

export const MainTitle = styled.h1`
  color: #383838dd;
  font-size: 2.2rem;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #fcfc8a;
  font-size: 1.2rem;
  margin: 20px 0;
  width: 100%;
  display: block;
`;

export const AddButton = styled.button`
  padding: 10px;
  border-radius: 7px;
  border: none;
  font-size: 1.2rem;
  color: #7000ff;
  background-color: #f2f2f2f7;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #7000ff55;
    color: #f5f5f5;
  }
`;

export const LayoutButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UlList = styled.ul`
  margin: 20px 0;
`;
