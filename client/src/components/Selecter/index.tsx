import SelectSearch from 'react-select-search';
import { Label } from '../Input/styles';
import { StyledSelectSearch } from './styles';
import { SelecterProps } from './types';
import { fuzzySearch } from 'utils/fuzzySearch';

export const Selecter = ({ label = '', handleChange, options, placeholder, required = false }: SelecterProps): JSX.Element => (
  <div>
    {label && (
      <Label>
        {label} {required ? '*' : ''}
      </Label>
    )}
    <StyledSelectSearch>
      <SelectSearch
        closeOnSelect
        emptyMessage="Not found"
        filterOptions={fuzzySearch}
        multiple
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        printOptions="on-focus"
        search
      />
    </StyledSelectSearch>
  </div>
);
