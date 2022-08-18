export default function Prompt(props) {
  return (
    <div className="prompt">
      <p>
        write me a cover letter for a(n) {props.level} level {props.job}{' '}
        position at {props.company} for someone with {props.skills.join(', ')} and previous experience(s) at {props.experiences.join(', ')}
      </p>
    </div>
  );
}
