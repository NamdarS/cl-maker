import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown(props) {

  return (
    <Box sx={{ width: 150 }}>
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select value={props.value} label="level" onChange={props.onChange}>
          {props.level.map((level) => (
            <MenuItem key={level} value={level}>
              {' '}
              {level}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
