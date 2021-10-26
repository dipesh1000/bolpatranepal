import React from 'react';
import { Button, Container } from 'react-bootstrap';
import HomeLayouts from '../../../layouts/HomeLayouts';

const PageNotFound = () => {
  return (
    <HomeLayouts>
      <div style={{ backgroundColor: '#EDEDED' }}>
        <Container>
          <div style={{ height: 300, paddingTop: 100 }}>
            <h1>404 Page Not Found</h1>
            <p>Requested Route Not Found</p>
            <Button>Return Home</Button>
          </div>
        </Container>
      </div>
    </HomeLayouts>
  );
};

export default PageNotFound;
