import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, InputText } from './styles';


type InputProps = TextInputProps 

export function Input({...rest}: InputProps) {
    return (
        <Container>
            <InputText {...rest} />
        </Container>
    )
}