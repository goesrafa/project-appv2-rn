import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #CD8EE8;
    flex: 1;
    justify-content: center;
    align-items: center
`;

export const InputArea = styled.View`
    width: 100%;
    padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #8659E1;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #fff;
`;