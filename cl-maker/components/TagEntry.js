import { useState } from 'react';
import TextEntry from './TextEntry';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TagEntry(props) {
  const [tag, setTag] = useState('');
  const [skills, setSkills] = useState([]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSkills([...skills, tag]);
      setTag('');
    }
  };

  const handleDelete = (event) => {
    console.log(event.currentTarget.id);
    console.log(skills[event.currentTarget.id]);
    setSkills(
      skills.filter((skill) => skill !== skills[event.currentTarget.id])
    );
  };

  return (
    <div className="tag-entry">
      <div>
        <TextEntry
          text={props.text}
          value={tag}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {skills.map((skill, index) => (
          <Button
            key={index}
            id={index}
            label={skill}
            onClick={handleDelete}
            endIcon={<CloseIcon />}
          >{skill}</Button>
        ))}
      </div>
    </div>
  );
}
