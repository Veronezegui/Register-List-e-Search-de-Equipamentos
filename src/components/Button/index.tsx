import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, SubmitButton, Title } from './styles';


interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({title, ...rest}: ButtonProps) {
    return(
        <Container>
            <SubmitButton {...rest}>
                <Title>{title}</Title>
            </SubmitButton>
        </Container>
    )

}