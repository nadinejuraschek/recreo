// DEPENDENCIES
import SelectSearch from 'react-select-search';

// STYLED COMPONENTS
import { StyledSelectSearch } from './styles/Selecter';

// INTERFACES
import { PlaygroundFeature } from 'interfaces';

interface SelecterProps {
  options: PlaygroundFeature[];
  placeholder: string;
}

const Selecter: React.FC<SelecterProps> = ({ options, placeholder }) => {
  return (
    <StyledSelectSearch>
      <SelectSearch closeOnSelect options={options} placeholder={placeholder} search />
    </StyledSelectSearch>
  );
};

export default Selecter;
