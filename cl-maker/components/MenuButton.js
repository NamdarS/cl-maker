import Button from '@mui/material/Button';

export default function AboutButton(props) {
  return (
    <div>
      <Button variant="outlined" size='small'>{props.text}</Button>
    </div>
  );
}
