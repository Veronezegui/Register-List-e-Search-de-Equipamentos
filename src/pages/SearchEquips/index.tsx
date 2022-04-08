import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Alert, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListCard } from '../../components/ListCard';


interface SearchProps {
    id: string;
    user: string;
    marca: string;
    modelo: string;
    numPat: string;
    numSe: string;
    setor: string;
    type: 'desktop' | 'notebook' | 'monitor';
}


export function Search() {
    const [searched, setSearched] = useState<SearchProps[]>([])
    const [usuario, setUsuario] = useState('')
    const [userSearched, setUserSearched] = useState<SearchProps[]>([])

    

    async function LoadEquips() {
        const storagedUsers = await AsyncStorage.getItem('@equips')
        if (storagedUsers) {
            setSearched(JSON.parse(storagedUsers))
        }
    }

    async function SearchUsers() {
        const usuarios = searched.filter((item) => item.user === usuario)
        if (usuarios.length > 0) {
            setUserSearched(usuarios)
        } else {
            Alert.alert('Usuário não encontrado')
        }
    }

    useEffect(() => {
        LoadEquips()
    }, [])

    
    

    return (
        <Container>
            <Header title='Consulta de equipamentos'/>
            <Input placeholder='Digite o nome de um usuário' value={usuario} onChangeText={value => setUsuario(value)} />
            <Button title='Buscar' onPress={SearchUsers}/>
            <FlatList 
                data={userSearched}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListCard 
                        item={item}
                    />

                )}
            />
        </Container>
    )
}