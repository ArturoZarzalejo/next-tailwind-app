'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from 'components/ThemeToggler';
import React from 'react';
import Image from 'next/image';
import { ReactComponent as Home } from '../public/home.svg';
import { ReactComponent as ViewAll } from '../public/viewAll.svg';
import { ReactComponent as Bookmark } from '../public/bookmark.svg';
import { ReactComponent as Send } from '../public/send.svg';


const RouteParams = [
  {
    name: 'Home',
    href: '/',
    icon: <Home></Home>,
  },
  {
    name: 'My Profile',
    href: '/user-profile',
    icon: <ViewAll></ViewAll>
  },
  {
    name: 'My favorites',
    href: '/user-sssss',
    icon: <Bookmark></Bookmark>
  },
  {
    name: 'Direct',
    href: '/asfasf',
    icon: <Send></Send>
  },
  {
    name: 'Stats',
    href: '/user-profile3',
    icon: <ViewAll></ViewAll>
  },
];

const NavRoutingComponent = ({ className }) => {
  const pathname = usePathname();

  const profilePicUrl =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

  return (
    <aside className={`flex flex-col top-0 left-0 h-screen z-10  ${className}`}>
      <nav
        className="flex-1 w-80 p-4 relative shadow box-border rounded-xl bg-white dark:bg-black
          "
      >
        <header className="flex flex-col items-center">
          <Image
            className="mx-4 w-16 h-16 object-top object-cover rounded-full"
            src={profilePicUrl}
            alt="Picture of the author"
            width={48}
            height={48}
          />
          <span className="font-bold text-lg pt-1">Cyndy Lillibridge</span>
          <span className="font-semibold text-xs text-zinc-400">
            Torrance, CA, United States
          </span>
        </header>
        <ul>
          {RouteParams?.map((item, key) => (
            <li key={key} className={`flex items-center ${
              pathname === item.href ? 'text-blue-700' : ''
            }`}>
              <Link
                href={item.href}
                className={`flex items-center transition-all duration-300 ease-custom-bezier links-menu flex p-4 font-semibold text-xs `}
              >
                {item?.icon && item?.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <footer>
          <ThemeToggler className="absolute bottom-0 p-4 z-10"></ThemeToggler>
        </footer>
      </nav>
    </aside>
  );
};

export default NavRoutingComponent;
