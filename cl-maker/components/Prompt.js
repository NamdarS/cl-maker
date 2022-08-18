import Dropdown from './Dropdown';
import TextEntry from './TextEntry';
import TagEntry from './TagEntry';
import ComputerIcon from '@mui/icons-material/Computer';

export default function Prompt(props) {
  return (
    <div className="prompt">
      <div className="inter-text">
        write a cover letter for a(n)
        <Dropdown level={props.level} value="level" />
        level <TextEntry text="job" />
      </div>
      <div className="inter-text">
        position at <TextEntry text="company" />
        for someone with {/* skills{' '} */}
        <ComputerIcon sx={'visibility: hidden'} />
        <ComputerIcon sx={'visibility: hidden'} />
      </div>
      <div className="inter-text">
        <div className="tags-container">
          <TagEntry text="skills" />{' '}
        </div>
        skills and prior experience(s) at
        <div className="tags-container">
          <TagEntry text="companies/projects" />
        </div>
      </div>
    </div>
  );
}
