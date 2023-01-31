import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
`


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Layout