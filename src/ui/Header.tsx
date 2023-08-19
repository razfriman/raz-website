import { Avatar, AvatarImage } from '@/components/ui/avatar';
import avatarUrl from '@/static/avatar.webp';
import { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center gap-x-12'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Avatar>
              <AvatarImage src={avatarUrl}></AvatarImage>
            </Avatar>
          </a>
          <div className='hidden lg:flex lg:gap-x-12'>NAV ITEMS</div>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            {/* <Bars3Icon className='h-6 w-6' aria-hidden='true' /> */}
          </button>
        </div>
        <div className='hidden lg:flex'>end</div>
      </nav>
    </header>
  );
};
