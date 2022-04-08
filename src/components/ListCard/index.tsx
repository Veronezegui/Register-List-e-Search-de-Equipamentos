import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, ButtonCard, TextCard } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ListCardProps extends TouchableOpacityProps{
    item: object;
}


export function ListCard({item, ...rest}: ListCardProps) {

    return (
        <Container>
            <ButtonCard {...rest}>

                {Object.values(item).map((data, index) => (
                
                    <TextCard key={index}>
                        {index > 0 && data}
                    </TextCard>
                ))}
            </ButtonCard>
        </Container>
    )
}