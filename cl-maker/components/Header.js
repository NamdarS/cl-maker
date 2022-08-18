import Title from './Title';
import MenuButton from './MenuButton';

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="header-title">
          <Title />
        </div>
      </div>

      <div className="header-menu">
        <MenuButton text="about" />
        <MenuButton text="how it works" />
      </div>
    </div>
  );
}
