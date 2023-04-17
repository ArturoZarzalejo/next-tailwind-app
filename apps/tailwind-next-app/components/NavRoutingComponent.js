'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from 'components/ThemeToggler';
import React from 'react';

const RouteParams = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'My Profile',
    href: '/user-profile',
  },
  {
    name: 'Security',
    href: '/user-profile3',
  },
];

const NavRoutingComponent = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col absolute top-0 left-0 h-screen z-10">
      <nav className="flex-1 w-80">
        <ul>
          {RouteParams?.map((item, key) => (
            <li key={key}>
              <Link href={item.href} className={`transition-all duration-300 ease-custom-bezier links-menu flex p-4 ${
                    pathname === item.href ? 'bg-blue-600' : ''
                  }`}>
                  <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggler className="absolute bottom-0 p-4 z-10"></ThemeToggler>
    </aside>
  );
};

export default NavRoutingComponent;
