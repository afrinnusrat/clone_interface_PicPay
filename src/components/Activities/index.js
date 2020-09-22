import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Activie,
  ActivieLabel1,
  ActivieLabel2,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
        <Activie>
          <ActivieLabel1>Todas</ActivieLabel1>
          <ActivieLabel2>Minhas</ActivieLabel2>
        </Activie>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>João Silva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>José Pereira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 10,00</Value>

            <Divider />

            <Feather name="users" color="#fff" size={14} />
            <Date>1 mês atrás</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
