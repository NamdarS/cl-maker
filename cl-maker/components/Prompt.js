import { useState } from 'react';
import Dropdown from './Dropdown';
import TextEntry from './TextEntry';
import TagEntry from './TagEntry';
import SubmitButton from './SubmitButton';
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogContentText } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Prompt(props) {
  const [level, setLevel] = useState('entry');
  const [job, setJob] = useState('');
  const [company, setCompany] = useState('');
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [experiences, setExperiences] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSkills([...skills, skill]);
      setSkill('');
    }
  };

  const handleSkillDelete = (e) => {
    setSkills(skills.filter((skill) => skill !== skills[e.currentTarget.id]));
  };

  const handleExpChange = (e) => {
    setExperience(e.target.value);
  };

  const handleExpKeyDown = (e) => {
    if (e.key === 'Enter') {
      setExperiences([...experiences, experience]);
      setExperience('');
    }
  };

  const handleExpDelete = (e) => {
    setExperiences(
      experiences.filter(
        (experience) => experience !== experiences[e.currentTarget.id]
      )
    );
  };

  async function handleSubmit(e) {
    if (!level || !job || !company || !skills.length || !experiences.length) {
      handleOpen();
      return;
    }

    setLoading(true);
    const data = `write a cover letter for ${level} level ${job} position at 
    ${company} for someone with ${skills.join(
      ', '
    )} skills and prior experiences 
    at ${experiences.join(', ')}`;

    props.pushData(data);
    setLevel('entry');
    setJob('');
    setCompany('');
    setSkill('');
    setSkills([]);
    setExperience('');
    setExperiences([]);

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: data }),
    });
    const apiResponse = await response.json();
    props.genLetter(apiResponse.result);
    setLoading(false);
  }

  return (
    <div>
      <div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please fill out all fields.
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
        <div className="prompt-container">
          <div className="prompt">
            <div className="inter-text">
              write a <span>&nbsp;</span>
              <span className="word-style">cover letter </span>
              <span>&nbsp;</span> for a(n)
              <div className="spacer">
                <Dropdown
                  level={props.level}
                  label="level"
                  value={level}
                  onChange={handleLevelChange}
                />
              </div>
              level{' '}
              <div className="spacer">
                <TextEntry text="job" value={job} onChange={handleJobChange} />
              </div>
            </div>
            <div className="inter-text">
              position at{' '}
              <div className="spacer">
                <TextEntry
                  text="company"
                  value={company}
                  onChange={handleCompanyChange}
                />
              </div>
              for <span>&nbsp;</span>
              <span className="word-style"> someone </span>
              <span>&nbsp;</span> with
            </div>
            <div className="inter-text">
              <div className="tags-container-1">
                <TagEntry
                  text="skills"
                  value={skill}
                  onChange={handleSkillChange}
                  onKeyDown={handleSkillKeyDown}
                  onDelete={handleSkillDelete}
                  valueList={skills}
                />{' '}
              </div>
              <span>&nbsp;</span>
              <span className="word-style">skills </span>
              <span>&nbsp;</span> and prior <span>&nbsp;</span>
              <span className="word-style">experience(s) </span>
              <span>&nbsp;</span> at
              <div className="tags-container-2">
                <TagEntry
                  text="companies/projects"
                  value={experience}
                  onChange={handleExpChange}
                  onKeyDown={handleExpKeyDown}
                  onDelete={handleExpDelete}
                  valueList={experiences}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="submit-container">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
      <div className="spinner">
        {loading && (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        )}
      </div>
    </div>
  );
}
