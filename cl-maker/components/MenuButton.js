import Link from 'next/link';
import Button from '@mui/material/Button';

export default function MenuButton(props) {
  return (
    <div>
      <Link href={props.href}>
        <Button variant="outlined" size="small">
          {props.text}
        </Button>
      </Link>
    </div>
  );
}
