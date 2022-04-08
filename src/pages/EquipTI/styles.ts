import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex: 1;
    background: ${({theme}) => theme.colors.background};
`;


export const Content = styled.ScrollView`
    width: 100%;
    height: 70%;
    padding: ${RFValue(10)}px;
    margin-top: ${RFValue(10)}px;
`;