import React from 'react'
import earth from './Earth.png'
import fem from './femaleproblem.png'
import health from './healthcare.svg'
import medicine from './medicine.png'
import anger from './anger.png'
import grow from './growing-up-300.webp'

export default function Howcanjoin() {
    let data = [
      {
        img: earth,
        detail:
          "People who want to maintain by minimizing their waiting naturally.",
      },
      {
        img: anger,
        detail: "People who are victims of stress and anxiety.",
      },
      {
        img: health,
        detail: "People who want to completely stop their medications.",
      },
      {
        img: medicine,
        detail: "Those who want to keep themselves always fit and healthy.",
      },
      {
        img: grow,
        detail: "Those who are troubled by illnesses with age.",
      },
      {
        img: fem,
        detail: "Women who experience mental distress. ",
      },
    ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1
            className="sm:text-5xl text-2xl font-bold title-font mb-2 "
            style={{ color: "rgba(91,29,236,255)" }}
          >
            Who can attend this workshop?
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-black">
            The importance of mental clarity in transforming the direction
            towards positivity and inner peace by purifying the mind.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 border border-">
          {data.map((val) => (
            <div className="xl:w-1/3 md:w-1/2 p-4 " key={val.id}>
              <div className="border  border-gray-300 h-32 bg-slate-700 text-white shadow-md p-6 rounded-lg flex">
                <div className="w-20 h-10">
                  <img src={val.img} alt={val.alt} />
                </div>
                <div>
                  <p className="leading-relaxed text-lg">{val.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
