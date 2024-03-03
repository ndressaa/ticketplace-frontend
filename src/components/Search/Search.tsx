import { SearchIcon } from '@/assets/icons';
import { SearchBar } from './Search.styles';

export const Search = () => {
  return (
    <SearchBar>
      <SearchIcon />
      <input placeholder="Pesquisar" />
    </SearchBar>
  );
};
