// DEPENDENCIES
import SelectSearch from 'react-select-search';

// STYLED COMPONENTS
import { Label } from '../Input/styles';
import { StyledSelectSearch } from './styles';

// INTERFACES
import { SelecterProps } from './types';

// UTILS
import { fuzzySearch } from 'utils/fuzzySearch';

export const Selecter = ({ label = '', handleChange, options, placeholder }: SelecterProps): JSX.Element => (
  <>
    {label && <Label>{label}</Label>}
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
  </>
);
