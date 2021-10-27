import React, {useState} from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container } from '../SignIn/styles'
import {
    InputArea,
    CustomButton,
    CustomButtonText,
} from './styles.js'



import SignIput from "../../components/SignIput";





import calendar from '../../assets/calendar.svg'
import clock from '../../assets/clock.svg'
import local from '../../assets/location.svg'
export default () => {
    const navigation = useNavigation();

    

    const[calendarField, setCalendarField] = useState('');
    const [clockField, setClockField] = useState('');
    const [localField, setLocalField] = useState('');
    

    const handleSignClick= async () => {
        alert("Agendamento feito com sucesso")
    }   

    return (
        <Container>
            

            <InputArea>
            <SignIput 
                IconSvg={local}
                placeholder="Digite o nome do hospital"
                value={localField}
                onChangeText={t=>setLocalField(t)}
                /> 

                <SignIput 
                IconSvg={calendar}
                placeholder="Digite o dia"
                value={calendarField}
                onChangeText={t=>setCalendarField(t)}
                />
                <SignIput 
                IconSvg={clock}
                placeholder="Digite o horario"
                value={clockField}
                onChangeText={t=>setClockField(t)}
                />  
                               

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Agendar</CustomButtonText>
                </CustomButton>
            </InputArea>
        </Container>
    )
}