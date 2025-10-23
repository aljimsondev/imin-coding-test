import Typography from '@/components/typography';
import './header.css';

function Header() {
  return (
    <nav className="header">
      <div className="container header-content">
        <Typography>Brand Name</Typography>
      </div>
    </nav>
  );
}

export default Header;
