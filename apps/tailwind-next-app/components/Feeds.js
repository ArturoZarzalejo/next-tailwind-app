'use client';

import { ReactComponent as Send } from '../public/send.svg';

const Feeds = (mockDataFeeds) => {
  const {feedData} = mockDataFeeds;
  // console.log(feedData)
  return (
    <div className="">
      <h3 className="my-6 text-3xl font-semibold">Feeds</h3>

      {feedData.map((item, key) => (
        <div
          key={key}
          className="flex flex-col my-6 bg-white shadow box-border rounded-xl"
        >
          <div className="flex items-center justify-between p-4 px-6">
            <div className="flex flex-col">
              <span>{item?.name}</span>
              <span>{item?.alias}</span>
            </div>
            <button className="flex items-center">...</button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col p-4 px-6 gap-3">
              <p>Te estamos buscando!!</p>
              <p>
                En XXX buscamos un programador super sexy con ganas de seguir
                trabajando y aprendiendo que sepas encargarte de todo,
                Javascript, React, Redux, VanillaJS, Typescript, Angular,
                Angulartodaslasversiones, React, Next,Nuxt, Vue, Vue3, Pinia,
                Lit, Jest, Cypress, Mocha, Chai
              </p>
              <p>
                Además de esto, contarás con unos compañeros fenomenales y
                tendrás que trabajar en Agile, con Scrum y todas sus ceremonias!
                Dia a día, podrás compartir tu progreso en la Daily, harás una
                planificación semanal, también tendrás tus demos, refinamiento,
                retrospectivas Y Mucho más!!
              </p>

              <p>
                Para finalizar, el horario es flexible, podrás hacer las dailys
                corriendo desde donde quieras mientras respires, y te
                entenderemos en todo lo necesario
              </p>
              <p>Salario 50.000€ / año</p>
            </div>

            <div className="flex justify-between p-4 pt-0">
              <button className="flex p-2 gap-2 px-4 mx-4 rounded-xl bg-[#2A86FF] text-white items-center">
                <span className="text-2xl">+</span> Apply
              </button>
              <button className="flex p-2 gap-2 px-4 mx-4 rounded-xl bg-[#2A86FF] text-white items-center">
                Save
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
