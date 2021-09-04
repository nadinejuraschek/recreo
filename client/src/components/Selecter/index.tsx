// DEPENDENCIES
import SelectSearch from 'react-select-search';

// STYLED COMPONENTS
import { StyledSelectSearch } from './styles/Selecter';

// INTERFACES
import { SelecterProps } from './types';

// UTILS
import { fuzzySearch } from 'utils/fuzzySearch';

const Selecter = ({ options, placeholder }: SelecterProps): JSX.Element => {
  return (
    <StyledSelectSearch>
      <SelectSearch
        closeOnSelect
        emptyMessage="Not found"
        filterOptions={fuzzySearch}
        multiple
        options={options}
        placeholder={placeholder}
        printOptions="on-focus"
        search
      />
    </StyledSelectSearch>
  );
};

export default Selecter;
