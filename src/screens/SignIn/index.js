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

import Api from '../../Api'

import SignIput from "../../components/SignIput";
import Logo from '../../assets/logo.svg'
import UserIcon from '../../assets/person.svg'
import LockIcon from '../../assets/lock.svg'

export default () => {
    const navigation = useNavigation();

    const[userField, setUserField] = useState('');
    const[passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(userField !== ' ' && passwordField !== ' '){
            let json = await Api.signIn(userField, passwordField);           
            if(json.data[0].token){
                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })

            } else{
                alert("Nome e/ou senha incorretos!")
            }
        } else{
            alert("Preencha todos os campos!");
        }
    }

    const handleMssageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}] 
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
                IconSvg={LockIcon}
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />               

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton onPress={handleMssageButtonClick}>
                <SignMessageButtonText>Não possui cadastro?</SignMessageButtonText>
                <SignMessageButtonTextBold>Clique aqui</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}