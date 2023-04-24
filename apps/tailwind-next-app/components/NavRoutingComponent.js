'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggler from 'components/ThemeToggler';
import Contacts from './Contacts';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ReactComponent as Home } from '../public/home.svg';
import { ReactComponent as Menu } from '../public/menu.svg';
import { ReactComponent as MenuOpen } from '../public/menu-open.svg';
import { ReactComponent as ViewAllAlt } from '../public/viewAllAlt.svg';
import { ReactComponent as Bookmark } from '../public/bookmark.svg';
import { ReactComponent as Send } from '../public/send.svg';
import { ReactComponent as Stats } from '../public/stats.svg';
import { ReactComponent as Settings } from '../public/settings.svg';
import { ReactComponent as Question } from '../public/question.svg';
import { ReactComponent as Check } from '../public/check.svg';

const RouteParams = [
  {
    name: 'Feed',
    href: '/',
    icon: <Home className="w-6 h-6" />,
  },
  {
    name: 'My Profile',
    href: '/user-profile',
    icon: <ViewAllAlt className="w-6 h-6" />,
  },
  {
    name: 'My favorites',
    href: '/user-sssss',
    icon: <Bookmark className="w-6 h-6" />,
  },
  {
    name: 'Direct',
    href: '/asfasf',
    icon: <Send className="w-6 h-6 -rotate-45" />,
  },
  {
    name: 'Stats',
    href: '/user-profile3',
    icon: <Stats className="w-6 h-6" />,
  },
  {
    name: 'Settings',
    href: '/user-profile4',
    icon: <Settings className="w-6 h-6" />,
  },
];

const NavRoutingComponent = ({ className }) => {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    console.log(toggleMenu);
  }, [toggleMenu]);

  const profilePicUrl =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

  return (
    <aside
      className={`flex flex-col md:h-screen z-10 motion-reduce:hidden ${className}`}
    >
      <nav className="md:hidden shadow">
        <div className="bg-white p-2 flex">
          <button
            className="flex m-2 w-8 h-8 md:hidden items-center"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <Menu></Menu>
          </button>
        </div>
      </nav>
      <div
        onClick={() => setToggleMenu(!toggleMenu)}
        className={` ${
          (!toggleMenu && `hidden`) || ``
        } md:hidden absolute w-full h-full bg-[rgba(0,0,0,0.4)]`}
      ></div>
      <nav
        className={`
        absolute w-80 md:w-80 ${(toggleMenu && `translate-x-[0px]`) || ``} 
        translate-x-[-320px] md:translate-x-[0] 
        px-4 h-full py-4 md:py-10 
        flex flex-col items-center 
        transition-all duration-300 ease-custom-bezier
        justify-between gap-8 md:relative md:shadow
        shadow box-border md:rounded-xl bg-white
         dark:bg-[#0C0D0D]
`}
      >
        <div className="absolute left-0">
          <button
            className="flex md:hidden m-2 w-8 h-8 items-center"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <MenuOpen></MenuOpen>
          </button>
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <header className="flex flex-col gap-3 items-center">
            <div className="relative">
              <Image
                className="mx-4 w-20 h-20 object-top object-cover rounded-full"
                src={profilePicUrl}
                alt="Picture of the author"
                width={48}
                height={48}
              />
              <button className="absolute bottom-0 right-4 rounded-full text-[#F3F3F3] bg-[#4D77FF] border-white dark:border-[#0C0D0D] border-[3px]">
                <Check className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col ">
              <span className="font-bold text-lg pt-1">Cyndy Lillibridge</span>
              <span className="font-semibold text-xs text-zinc-400">
                Torrance, CA, United States
              </span>
            </div>
          </header>
          <ul className="flex flex-col items-start border-t-[#E8E7E7] border-t-[1px] border-solid py-4 w-11/12">
            {RouteParams?.map((item, key) => (
              <li
                key={key}
                className={`flex items-center ${
                  pathname === item.href ? 'text-[#4D77FF]' : 'text-[#D2D3D5]'
                }`}
              >
                <Link
                  onClick={() => setToggleMenu(!toggleMenu)}
                  href={item.href}
                  className={`flex justify-center items-center gap-2 transition-all duration-300 ease-custom-bezier links-menu p-2 font-semibold text-sm `}
                >
                  {item?.icon && item?.icon}
                  <span
                    className={`${
                      pathname === item.href
                        ? 'text-[#4D77FF]'
                        : 'text-[#0A0A0A] dark:text-[#F3F3F3]'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* <Contacts /> */}
        <footer className="flex flex-col md:gap-5 border-t-[#E8E7E7] border-t-[1px] border-solid py-6 items-center w-11/12 relative">
          {/* <Link
            className="absolute -top-7 text-sm left-0 right-0 mx-auto w-fit text-[#4D77FF]"
            href="/contacts"
          >
            <p>View All</p>
          </Link> */}
          <div className="relative items-center gap-2 text-[#666] dark:text-[#F3F3F380] hidden">
            <Question className="w-5 h-5" />
            <small>Help & getting started</small>
            <button className="absolute bg-[#C7BEE9] text-black px-2 py-1 rounded-md right-2 text-xs text-extrabold">
              8
            </button>
          </div>
          <ThemeToggler className="w-fit px-3 py-2 z-10"></ThemeToggler>
        </footer>
      </nav>
    </aside>
  );
};

export default NavRoutingComponent;
