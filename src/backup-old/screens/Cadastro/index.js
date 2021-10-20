import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, 
         InputArea, 
         CustomButton,
         CustomButtonText,
         SignMessageButton,
         SignMessageButtonText,
         SignMessageButtonTextBold} from './styles'
import { UserContext } from '../../contexts/UserContext';
import SignIput from '../../components/SignIput';

import Api from "../../Api";

import UserIcon from '../../assets/user.svg'
import PhoneIcon from '../../assets/phone.svg'
import LockIcon from '../../assets/lock.svg'

import Logo from '../../assets/logo.svg';
export default () => {
    const { dispatch: userDispatch } = useContext(UserContext)
    const navigation = useNavigation();

    const [userField, setUserField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [phoneField, setPhoneField] = useState('');


    const handlerSignClick = async () => {
        if(userField != '' && phoneField != '' && passwordField != '' ){
            let res = await Api.Cadastro(userField,phoneField,passwordField );
            if(res.token){  
                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else{
                alert ("Erro: " +res.error);
            }
        }else{
            alert("Campos não preenchidos")
        }
    }

    const handlerMessageButtonClick = () => { //ao clicar no botão o usuário será direcionado a tela de cadastro sem a possibilidade de volta
        navigation.reset({
            routes: [{name: 'Login'}]
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
                <SignIput 
                IconSvg={LockIcon}
                placeholder="Confirmação de senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />
                <CustomButton onPress={handlerSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>
            </InputArea>
            <SignMessageButton onPress={handlerMessageButtonClick}>
                <SignMessageButtonText>Ja possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça o Login.</SignMessageButtonTextBold>
            </SignMessageButton>
        </Container>
    )
}