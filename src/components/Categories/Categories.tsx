'use client';

import { FilmIcon, LectureIcon, MusicIcon } from '@/assets/icons';
import {
  CategoriesDiv,
  Container,
  IconDiv,
  Item,
  Title,
} from './Categories.styles';

export const Categories = () => {
  return (
    <Container>
      <Title>Categorias</Title>
      <CategoriesDiv>
        <Item>
          <IconDiv>
            <MusicIcon />
          </IconDiv>
          Shows
        </Item>
        <Item>
          <IconDiv>
            <FilmIcon />
          </IconDiv>
          Filmes
        </Item>
        <Item>
          <IconDiv>
            <LectureIcon />
          </IconDiv>
          Palestras
        </Item>
      </CategoriesDiv>
    </Container>
  );
};
