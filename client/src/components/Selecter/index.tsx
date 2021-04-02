// DEPENDENCIES
import SelectSearch from 'react-select-search';

// STYLED COMPONENTS
import { StyledSelectSearch } from './styles/Selecter';

// INTERFACES
import { PlaygroundFeature } from 'interfaces';

// UTILS
import { fuzzySearch } from 'utils/fuzzySearch';

interface SelecterProps {
  options: PlaygroundFeature[];
  placeholder: string;
}

const Selecter: React.FC<SelecterProps> = ({ options, placeholder }) => {
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
