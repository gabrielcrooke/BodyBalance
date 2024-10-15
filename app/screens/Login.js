import React from 'react';
import { View } from 'react-native';

//Formik
import {Formik} from 'formik';

import { 
    Colors,
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText
     } from '../../components/styles';
import { Text } from 'react-native';
import {FontLoader} from '../../components/FontLoader.js'
import { StatusBar } from 'expo-status-bar';

//Icons
import {Octicons} from '@expo/vector-icons';

//Colors
const {darkBlue, darkLight} = Colors;

const Login = () => {
  return (
    <StyledContainer>
      <StatusBar style='dark'/>
        <InnerContainer>
          <FontLoader>
            <PageTitle style={{fontFamily:"Poppins-Bold"}}>Inicia sesión</PageTitle>
            <SubTitle style={{fontFamily:"Poppins-Regular"}}>¿Aún no tienes una cuenta?</SubTitle>
            </FontLoader>
          <Formik initialValues={{email: '', password: ''}}
          onSubmit={(values) => {
            console.log(values);
          }}
          >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
            <FontLoader style={{fontFamily:"Poppins-Regular"}}>
            <MyTextInput 
            icon= "mail"
            placeholder= "Correo electrónico"
            placeHolderTextColor= {darkLight}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType= "email-address"
            />

           <MyTextInput 
            icon= "lock"
            placeholder= "Contraseña"
            placeHolderTextColor= {darkLight}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            />
            </FontLoader>
          </StyledFormArea>)}
            
          </Formik>
        </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({label, icon, ...props}) => {
 return(
  <View>
    <LeftIcon>
      <Octicons name={icon} size={30} color={darkBlue}/>
    </LeftIcon>
    <StyledInputLabel>{label}</StyledInputLabel>
    <StyledTextInput {...props}/>
  </View>
 );
};

export default Login;