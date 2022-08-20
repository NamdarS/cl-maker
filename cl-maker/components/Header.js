import Title from './Title';
import MenuButton from './MenuButton';

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-title">
          <Title href="/"/>
        </div>
      </div>

      <div className="header-menu">
        <MenuButton href="/about" text="about" />
        <MenuButton href="/howitworks" text="how it works" />
      </div>
    </div>
  );
}
