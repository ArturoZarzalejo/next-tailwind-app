'use client';

import Link from 'next/link';
import ThemeToggler from 'components/ThemeToggler';
import React, { useState, useRef, useEffect } from 'react';

function getPathAndQueryString() {
  const url = new URL(window.location.href);
  return [url.pathname, url.search];
}

const RouteParams = [
  {
    name: 'Home',
    href: '/',
    idRef: 'route1',
  },
  {
    name: 'My Profile',
    href: '/user-profile',
    idRef: 'route2',
  },
  {
    name: 'Security',
    href: '/user-profile',
    idRef: 'route3',
  },
];

const NavRoutingComponent = () => {
  const [activeRouteState, setActiveRouteState] = useState('');

  function deleteActiveClass (arraySelectors) {
    arraySelectors.forEach((item) => item.classList.remove('active'))
  }

  useEffect(() => {
    document.querySelector(`[href="${getPathAndQueryString()[0]}"]`).classList.add('active')
  }, [])

  function setActiveRoute (event, item) {
    deleteActiveClass(document.querySelectorAll('.links-menu'))
    document.querySelector(`[href="${item.href}"]`).classList.add('active');
  };

  return (
    <aside className="flex flex-col absolute top-0 left-0 h-screen z-10">
      <nav className="flex-1 w-80">
        <ul>
          {RouteParams?.map((item, key) => (
            <li key={key}>
              <Link
                className="links-menu flex p-4 active:bg-blue-600"
                href={item.href}
                onClick={(event) => setActiveRoute(event, item)}
              >
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
