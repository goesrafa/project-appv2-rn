import React from "react";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #CD8EE8;
`;

export const Scroller = styled.View`
    flex: 1;
    padding: 20px;
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
export const SearchButton = styled.TouchableOpacity`
    width: 26px
    height: 26px;
`;


export const LocationArea = styled.View`

    background-color: #8659E1;
    height: 60px;
    border-radius: 40px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;

`;
export const LocationInput = styled.TextInput`
    flex: 1;
    font-sixe: 16px;
    color: #fff
`;
export const LocationFinder = styled.TouchableOpacity`
    width: 24px;
    heigth: 24px
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

