import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    padding: ${RFValue(15)}px;
    align-items: center;
`;

export const InputText = styled.TextInput`
    border-radius: ${RFValue(10)}px;
    width: 100%;
    background: ${({theme}) => theme.colors.shape}
    font-size: ${RFValue(15)}px;
    padding: ${RFValue(10)}px;
`;