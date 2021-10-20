import React from "react";
import styled from "styled-components/native";
import HomeIcon from '../assets/home.svg'
import DocIcon from '../assets/doc.svg'
import CalendarIcon from '../assets/calendar.svg'
import SearchIcon from '../assets/search.svg'

const TabArea = styled.View`
    height: 60px;
    background-color: #AD4CF6;
    flex-direction: row
`;
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const TabItemCenter = styled.TouchableOpacity`
    width: 32px;
    heigth: 32px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 3px solid: #AD4CF6;
    margin-top: -20px
`;

export default ({state, navigation}) => {

    const goTo = (screenName) =>{
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={()=> goTo('Home')}>
                <HomeIcon style={{opacity: state.index==0? 1 : 0.5}} width="24" heigth="24" fill="#fff" />
            </TabItem>

            <TabItem onPress={()=> goTo('Informacoes')}>
                <DocIcon style={{opacity: state.index==0? 2 : 0.5}} width="24" heigth="24" fill="#fff" />
            </TabItem>

            <TabItemCenter onPress={()=> goTo('Agenda')}>
                <CalendarIcon width="24" heigth="24" fill="#AD4CF6" />
            </TabItemCenter>

            <TabItem onPress={()=> goTo('Search')}>
                <SearchIcon style={{opacity: state.index==0? 3 : 0.5}} width="24" heigth="24" fill="#fff" />
            </TabItem>
        </TabArea>
    )
}