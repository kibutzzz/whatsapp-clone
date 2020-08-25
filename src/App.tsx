import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Conversation from './components/Conversation';

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  border-top: 14vh solid #128C7E;
  background: #DDD;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  top: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

  width:100vw;
  max-width: 1400px;
  height: 95vh;

  background: #FFF;
`;

function App() {
  return (
    <Background>
      <Wrapper>
        <Container>
          <Sidebar />
          <Conversation />
        </Container>
      </Wrapper>
    </Background>
  );
}

export default App;
