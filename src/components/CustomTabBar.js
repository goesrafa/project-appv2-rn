import React from "react";
import styled from "styled-components/native";

import HomeIcon from '../assets/home.svg'
import SearchIcon from '../assets/search.svg'
import CalendarIcon from '../assets/today.svg'
import DocIcon from '../assets/doc.svg'
import ProfileIcon from '../assets/person.svg'


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
    width: 70px;
    heigth: 70px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 35px;
    border: 2px solid #AD4CF6;
    margin-top: -20px
`;

export default ({state, navigation}) => {

    const goTo = (screenName) =>{
        navigation.navigate(screenName);
    }


    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.5}} width="24" height="24" fill="#fff" />
            </TabItem>
            <TabItem onPress={()=>goTo('Search')}>
                <SearchIcon  style={{opacity: state.index === 1 ? 1 : 0.5}} width="24" height="24" fill="#fff" />
            </TabItem>
            <TabItemCenter onPress={()=>goTo('Appointments')}>
                <CalendarIcon  width="32" height="32" fill="#AD4CF6" />
            </TabItemCenter>
            <TabItem onPress={()=>goTo('Doc')}>
                <DocIcon  style={{opacity: state.index === 3 ? 1 : 0.5}} width="24" height="24"  />
            </TabItem>
            <TabItem onPress={()=>goTo('Profile')}>
                <ProfileIcon  style={{opacity: state.index === 4 ? 1 : 0.5}} width="24" height="24" fill="#fff" />
            </TabItem>
        </TabArea>
    )
}