import Link from 'next/link';

export default function Title(props) {
  return (
    <div>
      <Link href={props.href}>
        <h1 className="title">Cover Letter Generator</h1>
      </Link>
    </div>
  );
}
