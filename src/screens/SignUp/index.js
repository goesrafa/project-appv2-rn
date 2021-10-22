import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from '../SignIn/styles'
import {
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles.js'



import SignIput from "../../components/SignIput";

import Api from '../../Api'

import Logo from '../../assets/logo.svg'
import UserIcon from '../../assets/person.svg'
import LockIcon from '../../assets/lock.svg'
import PhoneIcon from '../../assets/phone.svg'

export default () => {
    const navigation = useNavigation();

    

    const[userField, setUserField] = useState('');
    const [phoneField, setPhoneField] = useState('');
    const[passwordField, setPasswordField] = useState('');

    const handleSignClick= async () => {
        if(userField !== ' ' && phoneField !== ' ' && passwordField !== ' ' ){

            let res = await Api.signUp(userField, phoneField, passwordField);
            
            if(res.token){
                await AsyncStorage.setItem('token', res.token);

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            }else{
                alert("Erro: "+res.error)
            }

        }else{
            alert("Todos os campos são obrigatórios!!")
        }
    }

    const handleMssageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}] 
        });
    }

    

    return (
        <Container>
            <Logo width="100%" height="160" />

            <InputArea>
                <SignIput 
                IconSvg={UserIcon}
                placeholder="Digite seu nome"
                value={userField}
                onChangeText={t=>setUserField(t)}
                />
                <SignIput 
                IconSvg={PhoneIcon}
                placeholder="Digite seu telefone"
                value={phoneField}
                onChangeText={t=>setPhoneField(t)}
                />  
                <SignIput 
                IconSvg={LockIcon}
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />               

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMssageButtonClick}>
                <SignMessageButtonText>Já possui cadastro?</SignMessageButtonText>
                <SignMessageButtonTextBold>Clique aqui</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}