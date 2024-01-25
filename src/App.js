import React from 'react';
import styled from 'styled-components';
import Map from './Map';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LandingPage = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default LandingPage;
