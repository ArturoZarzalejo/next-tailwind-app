import ExampleComponent from "../../components/ExampleComponent";

async function getData() {
  const res = await fetch(" https://pokeapi.co/api/v2/pokemon/ditto");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      Hello, Next.js!
      {data.abilities.map((item, key) => (
        <div key={key}>{JSON.stringify(item, null, 2)}</div>
      ))}
      <ExampleComponent></ExampleComponent>
    </div>
  );
}
