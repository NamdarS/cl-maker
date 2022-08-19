import TextEntry from './TextEntry';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function TagEntry(props) {
  return (
    <div className="tag-entry">
      <div>
        <TextEntry
          text={props.text}
          value={props.value}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
        {props.valueList && (props.valueList.map((value, index) => (
          <Button
            key={index}
            id={index}
            label={props.value}
            onClick={props.onDelete}
            endIcon={<CloseIcon />}
          >
            {value}
          </Button>
        )))}
      </div>
    </div>
  );
}
