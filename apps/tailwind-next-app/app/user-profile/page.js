import Image from 'next/image';
import ExampleComponent from '../../components/ExampleComponent';


async function getData() {
  const res = await fetch(' https://pokeapi.co/api/v2/pokemon/ditto');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  const profilePicUrl =
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

  return (
    <div className="p-4">
      <h2 className="font-bold py-4">My Profile</h2>
      <div className="py-4 flex items-center border border-[rgba(0,0,0,0.2)] rounded-xl">
        <Image
          className="mx-4 w-16 h-16 object-top object-cover rounded-full"
          src={profilePicUrl}
          alt="Picture of the author"
          width={48}
          height={48}
        />
        <div className="flex-1 flex flex-row justify-between">
          <div className="flex flex-col text-sm">
            <span className="font-bold">Alba Cositas</span>
            <span className="font-medium">Team Manager</span>
            <span className="font-thin">Toledo, Pueblucho de Toledo</span>
          </div>
          <button>
            Iconito
          </button>
        </div>
      </div>
      {/* {data.abilities.map((item, key) => (
        <div key={key}>{JSON.stringify(item, null, 2)}</div>
      ))} */}
      {/* <ExampleComponent></ExampleComponent> */}
    </div>
  );
}
