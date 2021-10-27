import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Area = styled.TouchableOpacity`
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px
    flex-direction: row;
`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weighr: bold;
`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #CD8EE8;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #CD8EE8;
`;

export default()=>{
    return(
        <Area>
            <InfoArea>
                <UserName>{data.name}</UserName>
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver informações</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )
}