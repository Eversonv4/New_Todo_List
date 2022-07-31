import { createGlobalStyle } from "styled-components";

export const MyGlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: linear-gradient(to right top, #f600ff, red);
      background-size: contain;
      background-repeat: no-repeat;
      height: 100vh;
      font-family: 'PT Sans', sans-serif;
   }

   h1 {
      color: white;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }
`;
