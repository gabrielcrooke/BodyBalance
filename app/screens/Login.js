import React from 'react';
import { 
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle } from '../../components/styles';
import { Text } from 'react-native';
import {useFonts} from 'expo-font'

const Login = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf')
  })
  return (
    <StyledContainer>
        <InnerContainer>
            <PageTitle style={{fontFamily:"Poppins-Bold"}}>Inicia sesión</PageTitle>
        </InnerContainer>
    </StyledContainer>
  );
}

export default Login;