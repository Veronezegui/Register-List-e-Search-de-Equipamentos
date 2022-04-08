import React, { useEffect, useState } from 'react';
import { Container, Content } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {Input} from '../../components/Input';
import { Alert, KeyboardAvoidingView } from 'react-native';


export function EquipTi() {
    const [numPat, setNumPat] = useState('')
    const [numSe, setNumSe] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [centro, setCentro] = useState('')
    const [user, setUser] = useState('')
    const [setor, setSetor] = useState('')
    const [type, setType] = useState('')

    async function handleAddEquip() {
        const equips = {
            id: String(new Date().getTime()),
            numPat,
            numSe,
            marca,
            modelo,
            centro,
            user,
            setor,
            type,
        }
        try {
            const data = await AsyncStorage.getItem('@equips')
            const currentData = data ? JSON.parse(data) : []
            const dataFormatted = [
                ...currentData,
                equips
            ]
            await AsyncStorage.setItem('@equips', JSON.stringify(dataFormatted))
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possível salvar')

            
        }
        setNumPat('')
    setNumSe('')
    setMarca('')
    setModelo('')
    setCentro('')
    setUser('')
    setSetor('')
    setType('')
        
      
    }

    
   

    async function loadDataEquips() {
        const data = await AsyncStorage.getItem('@equips')
        const currentData = data ? JSON.parse(data) : []
        console.log(currentData)
    }

    useEffect(() => {
        loadDataEquips()
    }, [])

    return (
        <Container>
            <Header title="Cadastro de equipamentos de TI"/>
                <KeyboardAvoidingView behavior='padding'>
                    <Content>
                        <Input placeholder='Número do Patrimônio' value={numPat} onChangeText={value => setNumPat(value)}/>
                        <Input placeholder='Número de série'  value={numSe} onChangeText={value => setNumSe(value)} />
                        <Input placeholder='Marca' value={marca} onChangeText={value => setMarca(value)} />
                        <Input placeholder='Modelo' value={modelo} onChangeText={value => setModelo(value)} />
                        <Input placeholder='Centro de custo' value={centro} onChangeText={value => setCentro(value)} />
                        <Input placeholder='Usuário' value={user} onChangeText={value => setUser(value)} />
                        <Input placeholder='Setor' value={setor} onChangeText={value => setSetor(value)} />
                        <Input placeholder='Tipo' value={type} onChangeText={value => setType(value)} />
                        
                    </Content>
                    <Button title='Incluir' onPress={handleAddEquip}/>
                </KeyboardAvoidingView>
        </Container>
    )
}