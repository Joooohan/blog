import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  max-width: 1250px;
  display: block;
`


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout