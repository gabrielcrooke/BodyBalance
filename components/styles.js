import styled from 'styled-components'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: '#FFFFFF',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    lightGreen: '#A8E6A3',
    darkGreen: '#4CAF50',
    lightBlue: '#76C7F1',
    darkBlue: '#1E88E5',
    red: '#EF4444',
    pink: '#F06292',
    orange: '#FF7043'
}

const {primary, secondary, tertiary, darkLight, lightGreen, darkGreen, lightBlue, darkBlue, red, pink, orange} = Colors;

//Main Container
export const StyledContainer = styled.View`
flex: 1;
padding: 15px;
//padding-top: ${StatusBarHeight}px;
padding-top: 35px;
background-color: ${primary};
`;

//Inner Container
export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`;

//Page Logo
export const PageLogo = styled.Image`
width: 100px;
height: 100px;
`;

//Page Title
export const PageTitle = styled.Text`
font-size: 25px;
text-align: center;
font-weight: bold;
color: ${tertiary};
padding: 10px;
`;

//Sub Titulo
export const SubTitle = styled.Text`
font-size: 13px;
//margin-bottom: 30px;
letter-spacing: 1px;
font-weight: bold;
color: ${tertiary};
`;

//Screen Form Area
export const StyledFormArea = styled.View`
width: 90%;
`

//Style Text Inputs
export const StyledTextInput = styled.TextInput`
top: 20px;
background-color: ${secondary};
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 7px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 30px;
color: ${tertiary};
editable: true;
`;

//Left Icon Text Input
export const LeftIcon = styled.View`
left: 15px;
top: 40px;
position: absolute;
z-index: 1;
`;

//Right Icon Text Input
export const RightIcon = styled.TouchableOpacity`
right: 15px;
top: 40px;
position: absolute;
z-index: 1;
`;

//Button Login Styled
export const StyledButton = styled.TouchableOpacity`
padding: 15px;
margin-top: 25px;
margin-bottom: 35px;
background-color: ${darkBlue};
justify-content: center;
align-items: center;
border-radius: 7px;
margin-vertical: 5px;
height: 54px;
`;

//Button Text
export const ButtonText = styled.Text`
color: ${primary};
font-size: 17px;
`;

//Touch Link
export const TouchLink = styled.TouchableOpacity`
//padding: 3px;
background-color: transparent;
border-radius: 5px;
align-self: flex-end;
//margin-vertical: 5px;
margin-horizontal: 2px;
color: ${darkLight};
`;

//Touch Link Text
export const TouchLinkText = styled.Text`
color: ${darkBlue};
font-size: 13px;
`;

//Separator View
export const Separator = styled.View`
//margin-top: 25px;
margin-bottom: 25px;
flex-direction: row;
justify-content: center;
`;

//Separator Line
export const Line = styled.View`
height: 1px;
width: 27%;
background-color: ${darkLight};
margin-vertical: 10px;
`;

//Container Extra Login Buttons
export const ContainerExLoginBtn =styled.View`
flex-direction: row;
justify-content: space-between;
//margin-top: 25px;
`;

//Styled for button Extra Login
export const ExLoginLogoBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding-vertical: 9px;
  padding-horizontal: 38px;
  border-radius: 5px;
  border-width: 0.3px;
  border-color: ${darkLight};
  shadow-color: #000000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 2px;
`;

//Styled for Extra Logo Login
export const ExLoginLogo = styled.Image`
width: 30px;
height: 30px;
`;

//Styled for Footer
export const Fotter = styled.View`
`



