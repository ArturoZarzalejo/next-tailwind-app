"use client";

import { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const dataJson = await response.json();
        setData(dataJson);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      Ejemplo tontorrón
      {data?.abilities?.map((item, key) => (
        <div key={key}>{JSON.stringify(item, null, 2)}</div>
      ))}
    </div>
  );
};

export default ExampleComponent;
