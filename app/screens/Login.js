import React from 'react';
import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle } from '../../components/styles';
import { Text } from 'react-native';
import {FontLoader} from '../../components/FontLoader.js'

const Login = () => {
  return (
    <StyledContainer>
        <InnerContainer>
          <FontLoader>
            <PageTitle style={{fontFamily:"Poppins-Bold"}}>Inicia sesión</PageTitle>
            </FontLoader>
        </InnerContainer>
    </StyledContainer>
  );
}

export default Login;