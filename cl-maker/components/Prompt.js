import Dropdown from './Dropdown';
import TextEntry from './TextEntry';
import TagEntry from './TagEntry';

export default function Prompt(props) {
  return (
    <div className="prompt">
        <p>write a cover letter for a(n)</p>
        <Dropdown level={props.level} value="level" />
        <p>level</p>
        <TextEntry text="job" />
        <p>position at</p>
        <TextEntry text="company" /> <p>for someone with</p>{' '}
        <TagEntry text="skills" />
        <p>skills, and previous experience(s) at</p>{' '}
        <TagEntry text="companies" />
    </div>
  );
}
