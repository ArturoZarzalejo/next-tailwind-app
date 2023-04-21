import React from 'react';
import { ReactComponent as Message } from '../public/message.svg';
import Link from 'next/link';

function Contacts() {
  return (
    <div className="w-10/12 overflow-hidden min-h-[90px]">
      <span className="text-xl font-bold">Contacts</span>
      <div className="flex items-center justify-start gap-5 my-5">
        <div className="relative">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Picture of the author"
          />
          <span className="absolute w-3 h-3 bottom-0 right-0 rounded-full bg-[#34DCBC] border-white dark:border-[#0C0D0D] border-[3px]"></span>
        </div>
        <div className="flex flex-col justify-center h-10">
          <span className="font-bold pt-1">Julie Mendez</span>
          <span className="font-semibold text-xs text-zinc-400">
            Memphis, TN, US
          </span>
        </div>
        <Message className="w-8 h-8 text-[#4D77FF]" />
      </div>

      <div className="flex items-center justify-start gap-5 my-5">
        <div className="relative">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Picture of the author"
          />
          <span className="absolute w-3 h-3 bottom-0 right-0 rounded-full bg-[#34DCBC] border-white dark:border-[#0C0D0D] border-[3px]"></span>
        </div>
        <div className="flex flex-col justify-center h-10">
          <span className="font-bold pt-1">Julie Mendez</span>
          <span className="font-semibold text-xs text-zinc-400">
            Torrance, CA, United States
          </span>
        </div>
        <Message className="w-8 h-8 text-[#4D77FF]" />
      </div>
      <div className="flex items-center justify-start gap-5 my-5">
        <div className="relative">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Picture of the author"
          />
          <span className="absolute w-3 h-3 bottom-0 right-0 rounded-full bg-[#34DCBC] border-white dark:border-[#0C0D0D] border-[3px]"></span>
        </div>
        <div className="flex flex-col justify-center h-10">
          <span className="font-bold pt-1">Julie Mendez</span>
          <span className="font-semibold text-xs text-zinc-400">
            Torrance, CA, United States
          </span>
        </div>
        <Message className="w-8 h-8 text-[#4D77FF]" />
      </div>
      <div className="flex items-center justify-start gap-5 my-5">
        <div className="relative">
          <img
            className="w-10 h-10 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
            alt="Picture of the author"
          />
          <span className="absolute w-3 h-3 bottom-0 right-0 rounded-full bg-[#34DCBC] border-white dark:border-[#0C0D0D] border-[3px]"></span>
        </div>
        <div className="flex flex-col justify-center h-10">
          <span className="font-bold pt-1">Julie Mendez</span>
          <span className="font-semibold text-xs text-zinc-400">
            Memphis, TN, US
          </span>
        </div>
        <Message className="w-8 h-8 text-[#4D77FF]" />
      </div>
    </div>
  );
}

export { Contacts };
