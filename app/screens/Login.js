import {React, useState} from 'react';
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
    TouchLink,
    TouchLinkText,
    ButtonText
     } from '../../components/styles';
import { Text } from 'react-native';
import {FontLoader} from '../../components/FontLoader.js'
import { StatusBar } from 'expo-status-bar';

//Icons
import {Octicons, Ionicons} from '@expo/vector-icons';
import { DarkTheme } from '@react-navigation/native';

//Colors
const {darkBlue, darkLight, lightBlue} = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
            secureTextEntry={hidePassword}
            isPassword={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            />
            <TouchLink>
              <TouchLinkText style={{fontFamily:"Poppins-Regular"}}>
              Recuperar Contraseña
              </TouchLinkText>
            </TouchLink>
            <StyledButton>
              <ButtonText style={{fontFamily:"Poppins-Bold"}}>
              Inicia Sesión
              </ButtonText>
            </StyledButton>
          </StyledFormArea>
        )}
            
          </Formik>
        </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({icon, isPassword, hidePassword, setHidePassword, ...props}) => {
 return(
  <View>
    <LeftIcon>
      <Octicons name={icon} size={25} color={darkBlue}/>
    </LeftIcon>
    <StyledTextInput {...props}/>
    {isPassword && (
      <RightIcon onPress={() => setHidePassword(!hidePassword)}>
        <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={25} color={darkBlue} />
      </RightIcon>
    )}
  </View>
 );
};

export default Login;