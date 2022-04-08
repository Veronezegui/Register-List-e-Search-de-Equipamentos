import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${RFValue(15)}px;
`;


export const SubmitButton = styled.TouchableOpacity`
    width: 80%;
    background: ${({theme}) => theme.colors.success};
    align-items: center;
    height: ${RFValue(40)}px;
    justify-content: center;
    border-radius: ${RFValue(15)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.bold}
`;
