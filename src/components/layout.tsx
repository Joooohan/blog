import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: block;
  background-color: rgb(251, 251, 251);
`

const Content = styled.div`
  max-width: 1250px;
`


const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Layout