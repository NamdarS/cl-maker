import Button from '@mui/material/Button';

export default function SubmitButton(props) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.onClick}
      size="large"
      disableElevation
    >
      Generate
    </Button>
  );
}
