'use client';

import { ReactComponent as Logo } from '../public/edit.svg';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import TagManager from './TagManager';
import TagSearch from './TagSearch';

import { useState, useEffect } from 'react';

const DialogModal = dynamic(() => import('./DialogModal.js'));

const UserInfoComponent = () => {
  const profilePicUrl =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

  const [data, setData] = useState();
  const [tags, setTags] = useState([]);
  const [showMap, setShowMap] = useState(false);

  function manejarDatos(datos, showMapValue) {
    setShowMap(showMapValue);
  }

  useEffect(() => {

    console.log('funciona', tags)
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('/api/hello');
    //     const dataJson = await response.json();
    //     setData(dataJson);
    //   } catch (error) {
    //     console.error('Error al obtener los datos:', error);
    //   }
    // };

    // fetchData();
  }, [tags]);

  console.log(data);

  return (
    <div className="p-4">
      <h2 className="my-6 text-3xl font-semibold">My Profile</h2>

      <h2 className="my-6 text-3xl font-semibold">Skills</h2>

      <div className="shadow bg-white rounded-xl p-4 flex justify-between">
        <TagManager setTags={setTags} tags={tags} />
        <TagSearch tags={tags} />
      </div>
      {/* <div className="py-4 my-4 flex items-center border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-xl">
        <Image
          className="mx-4 w-16 h-16 object-top object-cover rounded-full"
          src={profilePicUrl}
          alt="Picture of the author"
          width={48}
          height={48}
        />
        <div className="flex-1 flex flex-row justify-between items-center">
          <div className="flex flex-col text-sm">
            <span className="font-bold">Alba Cositas</span>
            <span className="font-medium">Team Manager</span>
            <span className="font-thin">Toledo, Pueblucho de Toledo</span>
          </div>
          <button
            onClick={() => setShowMap(true)}
            className="mr-2 h-10 w-16 p-2 justify-between rounded-full items-center text-xs flex border border-[rgba(0,0,0,0.2)]"
          >
            Edit
            <Logo className="w-5 h-5 fill-[currentColor]"></Logo>
          </button>
        </div>
      </div> */}
      {showMap && <DialogModal manejarDatos={manejarDatos} showMap={showMap} />}

      {/* <div>{JSON.stringify(dataUser.results[0], null, 2)}</div> */}

      {/* <div className="py-4 my-4 flex flex-col items-center border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-xl">
        <div className="flex w-full justify-between items-center mb-4">
          <h3 className="px-4 font-bold">Personal Information</h3>
          <button className="mr-2 h-10 w-16 p-2 justify-between rounded-full items-center text-xs flex border border-[rgba(0,0,0,0.2)]">
            Edit
            <Logo className="w-5 h-5 fill-[currentColor]"></Logo>
          </button>
        </div>
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-row flex-wrap w-full px-4 max-w-lg">
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                First Name
              </span>
              <span className="font-medium text-sm py-1">Alba</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                Last Name
              </span>
              <span className="font-medium text-sm py-1">Cositas</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                Email Adress
              </span>
              <span className="font-medium text-sm py-1">alba@gmail.com</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                Phone
              </span>
              <span className="font-medium text-sm py-1">600000000</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">Bio</span>
              <span className="font-medium text-sm py-1">Team Manager</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 my-4 flex flex-col border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-xl">
        <div className="flex w-full justify-between items-center mb-4">
          <h3 className="px-4 font-bold">Adress</h3>
          <button className="mr-2 h-10 w-16 p-2 justify-between rounded-full items-center text-xs flex border border-[rgba(0,0,0,0.2)]">
            Edit
            <Logo className="w-5 h-5 fill-[currentColor]"></Logo>
          </button>
        </div>
        <div className="flex flex-row w-full max-w-lg">
          <div className="flex flex-row flex-wrap w-full px-4">
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                Country
              </span>
              <span className="font-medium text-sm py-1">Spain</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                City / State
              </span>
              <span className="font-medium text-sm py-1">Toledo</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                Postal Code
              </span>
              <span className="font-medium text-sm py-1">12751</span>
            </div>
            <div className="flex flex-col basis-1/2 py-2 justify-center">
              <span className="font-semibold text-xs text-stone-400">
                TAX ID
              </span>
              <span className="font-medium text-sm py-1">ASDASFASDAS</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UserInfoComponent;
