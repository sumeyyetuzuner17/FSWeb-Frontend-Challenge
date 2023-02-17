import styled from "styled-components";

import Hero from "./components/Hero";

const SCApp = styled.div`
  margin: 0 auto 0 auto;
  max-width: 1440px;
`;

function App() {
  return (
    <SCApp className="App">
      <Hero />
    </SCApp>
  );
}

export default App;
