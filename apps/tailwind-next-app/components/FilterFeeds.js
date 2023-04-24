'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactComponent as Send } from '../public/send.svg';
import { ReactComponent as Stats } from '../public/stats.svg';

import Feeds from 'components/Feeds';
import { useState } from 'react';

const FilterFeeds = () => {
  const [searchText, setSearchText] = useState('');

  function handleKeyUp(event) {
    console.log('Tecla soltada:', event.target.value);
  }

  return (
    <div className="">
      <header className="flex items-center justify-between p-4 px-6 bg-white shadow box-border rounded-xl">
        <div className="items-center">
          <input
            onKeyUp={handleKeyUp}
            className="bg-[#F5F5F5] p-2 px-6 w-80 rounded-xl focus:outline-none"
            type="text"
            placeholder="Search or type a command"
          />
        </div>
        <div className="flex items-center justify-center">
          <button className="flex p-2 gap-2 px-4 mx-4 rounded-xl bg-[#2A86FF] text-white items-center">
            <span className="text-2xl">+</span> Create
          </button>
          <Send className="p-2" />
          <Stats className="p-2" />
        </div>
      </header>

      <Feeds className="my-4" />
    </div>
  );
};

export default FilterFeeds;
