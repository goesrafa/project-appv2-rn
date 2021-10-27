import React from "react";

import { useNavigation } from "@react-navigation/native";



import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    HeaderArea,
    HeaderTitle,
} from './styles';



export default () => {

    const navigation = useNavigation();

    const handleSignClick = async () => {
        alert("Hospital 24h - Telefone: 1140257896")
    }

    const handleHospClick = async () => {
        alert("Hospital 24h - Telefone: 1124157865")
    }



    return (
        <Container>   
            <HeaderArea>
                <HeaderTitle numberOfLines={2}>Postos próximos</HeaderTitle>
            </HeaderArea>
            <InputArea>
            <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Sobam Hospital Médico Clínico</CustomButtonText>
                </CustomButton>
                
            </InputArea>
            <InputArea>
            <CustomButton onPress={handleHospClick}>
                    <CustomButtonText>Hospital Médico Clínico Campo Limpo Paulista</CustomButtonText>
                </CustomButton>
                
            </InputArea>
        </Container>
    )
}
