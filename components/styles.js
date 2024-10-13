import styled from 'styled-components'
import {View, Text, Image} from 'react-native';
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
padding: 25px;
//padding-top: ${StatusBarHeight}px;
background-color: ${primary};
`;

//Inner Container
export const InnerContainer = styled.View`
flex: 1;
width: 100%;
align-items: center;
`;

export const PageLogo = styled.Image`
width: 100px;
height: 100px;
`;

export const PageTitle = styled.Text`
font-size: 25px;
text-align: center;
font-weight: bold;
color: ${tertiary};
padding: 10px;
`;