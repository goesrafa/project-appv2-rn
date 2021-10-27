import React from "react";

import { Container, TextBold, Infotext } from './styles';

export default () => {
    return(
        <Container>
            <TextBold>Como fazer a Coleta..</TextBold>
            <Infotext>1.Escolha um lugar agradável e calmo</Infotext>
            <Infotext>2.Higienize o recipiente, de preferencia com tampa e uma fita para fazer o rótulo</Infotext>
            <Infotext>3.Faça a higienização das mãos e de preferência deixe o cabelo preso</Infotext>
            <Infotext>4.Faça a coleta do leite,com uso de bombinha caso tenha</Infotext>
            <Infotext>5.Armazene em um recipiente com tampa e guarde na geladeira e marque num rótulo a data e hora de coleta</Infotext>
            <Infotext>6.Agende para retirada ou para levar a coleta até o posto próximo</Infotext>
            <TextBold>Observação: é muito importante que a coleta seja feita um dia antes do dia agendado</TextBold>
        </Container>
    )
}
