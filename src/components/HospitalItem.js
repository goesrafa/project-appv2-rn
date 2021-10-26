import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Area = styled.TouchableOpacity``;

const InfoArea = styled.View``;

const SeeProfileButton = styled.View``;

const SeeProfileButtonText = styled.Text``;

export default()=>{
    return(
        <Area>
            <InfoArea>
                
                <SeeProfileButton>
                    <SeeProfileButtonText>Ver informações</SeeProfileButtonText>
                </SeeProfileButton>
            </InfoArea>
        </Area>
    )
}