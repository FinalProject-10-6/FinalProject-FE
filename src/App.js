import Router from "./shared/Router";
import styled from "styled-components";
function App() {
  return (
    <GlobalStyle>
      <Router />
    </GlobalStyle>
  );
}

const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");
  @keyframes ring {
    0% {
      width: 30px;
      height: 30px;
      opacity: 1;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;

export default App;
