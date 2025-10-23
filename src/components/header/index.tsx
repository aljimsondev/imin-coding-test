import IconButton from '@/components/button/icon.button';
import Image from 'next/image';
import { BsCart2 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import './header.css';

function Header() {
  return (
    <nav className="header">
      <div className="container header-content">
        <Image src="/assets/logo/logo.webp" alt="logo" width={70} height={70} />
        <div className="header-right-content">
          <IconButton icon={BsCart2} iconProps={{ size: 24 }} />
          <IconButton icon={IoPersonOutline} iconProps={{ size: 24 }} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
