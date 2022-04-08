import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;

    align-items: center;
    padding: ${RFValue(15)}px;
`;

export const ButtonCard = styled.TouchableOpacity`
    width: 70%;
    background: ${({theme}) => theme.colors.secondary};
    border-radius: ${RFValue(20)}px;
    padding: 10px;
`;

export const TextCard = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.shape};
    font-family: ${({theme}) => theme.fonts.bold};
    text-align: center;
    padding: 2px;
`;