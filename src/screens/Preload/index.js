import React, { useEffect } from "react";
import { Container, LoadingIcon } from './styles'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Api from "../../Api";

import Logo from '../../assets/logo.svg'


export default () => {

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                let res = await Api.checkToken(token);
                if (res.token) {
                    await AsyncStorage.setItem('token', res.token);

                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    });
                } else {
                    navigation.navigate('MainTab');
                }
            }
            else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, [])

    return (
        <Container>
            <Logo width="100%" height="160" />
            <LoadingIcon size="large" color="#fff" />
        </Container>
    )
}