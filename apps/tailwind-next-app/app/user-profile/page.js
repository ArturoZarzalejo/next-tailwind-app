import UserDataInfo from '../../utils/UserDataInfo.js';
import UserInfoComponent from 'components/UserInfoComponent.js';

async function getData() {
  const res = await fetch(' https://pokeapi.co/api/v2/pokemon/ditto');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  // const data = await getData();

  const instance = new UserDataInfo();
  const dataUser = await instance.getUserDataInfo();

  return (
    <UserInfoComponent>
      {/* {data.abilities.map((item, key) => (
        <div key={key}>{JSON.stringify(item, null, 2)}</div>
      ))} */}
      {/* <ExampleComponent></ExampleComponent> */}
    </UserInfoComponent>
  );
}
