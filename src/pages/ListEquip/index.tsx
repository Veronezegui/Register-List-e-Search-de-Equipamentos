import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListCard} from '../../components/ListCard';
import { FlatList, Alert } from 'react-native'


interface ListEquipsProps {
    id: string;
    marca: string;
    modelo: string;
    numPat: string;
    numSe: string;
    setor: string;
    type: 'desktop' | 'notebook' | 'monitor';
    user: string;
}


export function ListEquip() {
    const [equipamentos, setEquipamentos] = useState<ListEquipsProps[]>([])


    async function loadEquips() {
        const storagedEquips = await AsyncStorage.getItem('@equips')
        if (storagedEquips) {
            setEquipamentos(JSON.parse(storagedEquips))
        }
    }

    async function DeleteEquip(id: string) {
        const filteredEquips = equipamentos.filter(item => (item.id !== id))
        await AsyncStorage.setItem('@equips', JSON.stringify(filteredEquips))
        Alert.alert('Confirmação', 'Tem certeza de excluir esse equipamento?', 
        [
            {
                text: 'sim',  onPress: () => setEquipamentos([...filteredEquips])
            },
            {
                text: 'cancel', onPress: () => console.log('Cancel pressed')
            }
        ]
        )
        
        

    }



    useEffect(() => {
        loadEquips()
    }, [])

    

    return (
        <Container>
            <Header title='Listagem de Equipamentos de Ti'/>
            <FlatList 
                
                data={equipamentos}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                <ListCard
                    item={item}
                    onPress={() => DeleteEquip(item.id)}
                />
                )}
            /> 
        </Container>
    )
}