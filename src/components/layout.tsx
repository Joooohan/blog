import styled from '@emotion/styled';
import React from 'react';
interface Props {
  children: React.ReactNode;
}

export const colors = {
  primary: "#515151",
}

export const fonts = {
  primary: "Lato,sans-serif",
  secondary: "PT Serif,serif",
}

const Container = styled.div`
  display: block;
  background-color: rgb(251, 251, 251);
  height: 100%;
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