import TextField from '@mui/material/TextField';

export default function TextEntry(props) {
  return (
    <div className="text-field">
      <TextField
        label={props.text}
        variant="outlined"
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}
