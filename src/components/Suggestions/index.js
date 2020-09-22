import React from 'react';

import { Octicons } from '@expo/vector-icons';

import {
  Container,
  Actions,
  Action,
  ActionLabel,
  ActionsContainer,
  Option,
  Img,
  Label,
  Header,
  Title1,
  Title2,
} from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Recarga de Celular',
  },
  {
    key: String(Math.random()),
    img: img6,
    label: 'Pagar Conta',
  },
  {
    key: String(Math.random()),
    img: img7,
    label: 'Cobrar',
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Uber',
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Ônibus',
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'SKY TV',
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Doações',
  },
];

export default function Suggestions() {
  return (
    <Container>
      <Action>
        <Octicons name="search" size={24} color="#fff" />
        <Title2>Quem você quer pagar?</Title2>
      </Action>

      <Header>
        <Title1>Sugestões</Title1>
        <Title2>Favoritos</Title2>
      </Header>

      <ActionsContainer>
        {items.map((item) => (
          <Option key={item.key}>
            <Img source={item.img} />
            <Label>{item.label}</Label>
          </Option>
        ))}
      </ActionsContainer>
    </Container>
  );
}
