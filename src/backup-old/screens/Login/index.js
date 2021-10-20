import React, {useState, useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';

import { Container, 
         InputArea, 
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold} from './styles'


import Api from "../../Api";
import SignIput from '../../components/SignIput';
import UserIcon from '../../assets/user.svg'
import LockIcon from '../../assets/lock.svg'

import Logo from '../../assets/logo.svg';
export default () => {
    
    const { dispatch: userDispatch} = useContext(UserContext)
    const navigation = useNavigation();

    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');


    const handlerSignClick = async () => {
        if(userField !== '' && passwordField != ''){

            let json = await Api.Login(userField, passwordField);
           
            if(json.data[0].token){
                navigation.reset({
                    routes:[{name: 'MainTab'}]
                })

            } else {
                alert("Nome e/ou senha incorretos!")
            }

        } else {
            alert("Preencha todos os campos!")
        } 
    }
    const handlerMessageButtonClick = () => { //ao clicar no botão o usuário será direcionado a tela de cadastro sem a possibilidade de volta
        navigation.reset({
            routes: [{name: 'Cadastro'}]
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
                <CustomButton onPress={handlerSignClick}>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handlerMessageButtonClick}>
                <SignMessageButtonText>Não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Clique aqui.</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}