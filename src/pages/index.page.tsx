import Link from 'next/link';

const index = () =>
{
  return (
    <div>
      <h1>hello</h1>
      <ul>
        <li>
          <Link href='/CaseSensitive'>
            <a>Case Sensitive Route</a>
          </Link>
        </li>
        <li>
          <Link href={ `/user/${ 1 }` }>
            <a>Dynamic Route Without <strong>as</strong></a>
          </Link>
        </li>
        <li>
          <Link href='/image'>
            <a>New Image Component</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
