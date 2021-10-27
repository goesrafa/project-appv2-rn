import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #CD8EE8;
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
    font-size: 16px;
    color: #fff;
    justify-content: center;
    align-items: center;
    
`;


export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
`;


