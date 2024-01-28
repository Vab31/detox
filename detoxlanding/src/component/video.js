// import React, { Component } from 'react'


// export function Video()  {

//   let videoContainerStyle = {
//         position: 'relative',
//         paddingBottom: '56.25%', // 16:9 aspect ratio
//         height: 0,
//         overflow: 'hidden',
//       };
    
//     let  iframeStyle = {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//       };
   
//         return (
//             <div className=' border border-gray-300 shadow-md md:m-28'>
//             {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/s37x2VSZrLw?si=cshQ74X_4QIgjlhH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
//             <div class="flex flex-col mt-8 text-center w-full sm:-mb-14" id="video">
//             <h1 class="sm:text-5xl text-3xl font-bold title-font " style={{"color":"rgba(91,29,236,255)"}}>क्यों आपको शामिल होना चाहिए!</h1>
//            </div>
//             <div className="container px-5 py-20 mx-auto">
            
//             <div className="flex flex-wrap -m-4 ">
//               <div className="p-4 sm:w-1 md:w-1/2 md:ml-auto md:mr-auto ">
//                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                   {/* Wrap the iframe in a container for responsiveness */}
//                   <div style={videoContainerStyle}>
//                     <iframe
//                       style={iframeStyle}
//                       title="YouTube video player"
//                       src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                   <div className="p-6 bg-slate-600">
//                   <button className="inline-flex text-white font-bold bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded md:text-2xl "><a href="/form"> Join For Free  </a></button>
    
//                     <p className="leading-relaxed mb-3  text-white">Unlocking Clarity: A Journey to Detox Your Mind and Renew Your Perspective.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//         );
      
            
    
//         }

// export default Video;



// import React from "react";
// import company from "./company.png";

// export default function Video() {
//   let videoContainerStyle = {
//     position: "relative",
//     paddingBottom: "56.25%", // 16:9 aspect ratio
//     height: 0,
//     overflow: "hidden",
//   };

//   let iframeStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   };

//   return (
//     <div className="m-4 md:m-24">
//       <div className="flex flex-col md:flex-row">
//         <div
//           aria-label="description"
//           className="bg-slate-500 flex-grow w-full md:w-1/2"
//         >
//           {/* Content for the first div */}
//           <h1 className="text-white text-center">Hello</h1>
//         </div>
//         <div className="flex-grow w-full md:w-1/2">
//           <div aria-label="video" className="ml-4 w-full">
//             <div style={videoContainerStyle}>
//               <iframe
//                 style={iframeStyle}
//                 title="YouTube video player"
//                 src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <button
//               type="button"
//               className="bg-orange-500 w-full text-white px-4 py-2 rounded cursor-pointer inline-block my-2"
//             >
//               Register Now
//             </button>
//             <p className="text-center md:hidden">
//               Reserve a seat before midnight, to unlock <br /> Bonuses Worth
//               ₹5490
//             </p>
//           </div>
//           <div
//             aria-label="company"
//             className="bg-red-500 md:block hidden w-full h-56 ml-2"
//           >
//             {/* Content for the third div */}
//             <img
//               src={company}
//               alt="company"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import company from "./company.png";
import yt from "./youtube.png";
import date from "./calendar-date.png";
import time from "./time.png";
import re2 from "./reviewpic3.jpeg";

export default function Video() {
  let videoContainerStyle = {
    position: "relative",
    paddingBottom: "56.25%", // 16:9 aspect ratio
    height: 0,
    overflow: "hidden",
  };

  let iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="m-4 md:m-24">
      <div className="flex flex-col md:flex-row">
        <div
          aria-label="description"
          className="bg-blue-700 flex-grow w-full md:w-1/2 p-4 rounded"
        >
          {/* Content for the first div */}
          {/* <h1 className="text-white text-center">Hello</h1> */}
          {/* Four rounded white divs */}
          <div className="bg-white rounded-lg h-16 flex m-4  items-center">
            <div>
              <img className="h-12 w-12 ml-3" src={yt} alt="youtube" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-semibold m-3 md:m-5 ">
                3 Hours Live Workshop
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg h-16 flex m-4  items-center">
            <div>
              <img className="h-12 w-12 ml-3" src={date} alt="date" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-semibold m-3 md:m-5 ">
                4th Feb 2024
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg h-16 flex m-4 items-center">
            <div>
              <img className="h-12 w-12 ml-3" src={time} alt="time" />
            </div>
            <div>
              <p className="text-lg md:text-2xl font-semibold m-3 md:m-5">
                Sunday @ 11 AM
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg mb-2 flex flex-col items-center justify-center m-4">
            <div className="m-4">
              <img className="h-40 w-40 rounded-full" src={re2} alt="profile" />
            </div>
            <div className="text-lg md:text-2xl font-bold mt-2">John Doe</div>
            <div className="text-base md:text-xl text-black text-center">
              (Quantum Wellness Coach)
            </div>
            <div className="text-base md:text-xl text-black text-center mt-2">
              Trained 20000+ working professionals worldwide with Cosmic
              Healing​
            </div>
          </div>
        </div>
        <div className="flex-grow w-full md:w-1/2 md:m-4">
          <div aria-label="video" className="md:ml-4 md:mr-4 mt-2 w-full">
            <div style={videoContainerStyle}>
              <iframe
                style={iframeStyle}
                title="YouTube video player"
                src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <button
              type="button"
              className="bg-orange-500 w-full text-white px-4 py-2 rounded cursor-pointer inline-block my-2"
            >
              Register Now
            </button>
            <p className="text-center md:hidden">
              Reserve a seat before midnight, to unlock <br /> Bonuses Worth
              ₹5490
            </p>
          </div>
          <div
            aria-label="company"
            className="bg-red-500 md:block hidden w-full h-56 ml-2"
          >
            {/* Content for the third div */}
            <img
              src={company}
              alt="company"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import company from "./company.png";
// import yt from "./youtube.png";
// import date from "./calendar-date.png";
// import time from "./time.png";
// import re2 from "./reviewpic3.jpeg";

// export default function Video() {
//   let videoContainerStyle = {
//     position: "relative",
//     paddingBottom: "56.25%", // 16:9 aspect ratio
//     height: 0,
//     overflow: "hidden",
//   };

//   let iframeStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//   };

//   return (
//     <div className="m-4 md:m-24">
//       <div className="flex flex-col md:flex-row">
//         <div
//           aria-label="description"
//           className="bg-blue-700 flex-grow w-full md:w-1/2 p-4 rounded"
//         >
//           {/* Content for the first div */}
//           {/* Four rounded white divs */}
//           <div className="bg-white rounded-lg h-16 flex m-4 items-center">
//             <div>
//               <img className="h-12 w-12 ml-3" src={yt} alt="youtube" />
//             </div>
//             <div>
//               <p className="text-lg md:text-2xl font-semibold m-3 md:m-5">
//                 3 Hours Live Workshop
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg h-16 flex m-4 items-center">
//             <div>
//               <img className="h-12 w-12 ml-3" src={date} alt="date" />
//             </div>
//             <div>
//               <p className="text-lg md:text-2xl font-semibold m-3 md:m-5">
//                 4th Feb 2024
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg h-16 flex m-4 items-center">
//             <div>
//               <img className="h-12 w-12 ml-3" src={time} alt="time" />
//             </div>
//             <div>
//               <p className="text-lg md:text-2xl font-semibold m-3 md:m-5">
//                 Sunday @ 11 AM
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg mb-2 flex flex-col items-center justify-center m-4">
//             <div className="m-4">
//               <img
//                 className="h-24 w-24 md:h-40 md:w-40 rounded-full"
//                 src={re2}
//                 alt="profile"
//               />
//             </div>
//             <div className="text-lg md:text-2xl font-bold mt-2">John Doe</div>
//             <div className="text-base md:text-xl text-black text-center">
//               (Quantum Wellness Coach)
//             </div>
//             <div className="text-base md:text-xl text-black text-center mt-2">
//               Trained 20000+ working professionals worldwide with Cosmic
//               Healing​
//             </div>
//           </div>
//         </div>
//         <div className="flex-grow w-full md:w-1/2 md:m-4">
//           <div aria-label="video" className="ml-4 w-full">
//             {/* <div style={videoContainerStyle}>
//               <iframe
//                 style={iframeStyle}
//                 title="YouTube video player"
//                 src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div> */}
//             <div
//               style={videoContainerStyle}
//               className="md:ml-0 ml-4 md:mr-0 mr-4 md:mt-0 mt-4"
//             >
//               <iframe
//                 style={iframeStyle}
//                 title="YouTube video player"
//                 src="https://www.youtube.com/embed/JpAAFGwogF8?si=1MV89b9-Yt9bpLma"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 allowFullScreen
//               ></iframe>
//             </div>
//             <button
//               type="button"
//               className="bg-orange-500 w-full md:mr-0 mr-4 text-white px-4 py-2 rounded cursor-pointer inline-block my-2"
//             >
//               Register Now
//             </button>
//             <p className="text-center md:hidden">
//               Reserve a seat before midnight, to unlock <br /> Bonuses Worth
//               ₹5490
//             </p>
//           </div>
//           <div
//             aria-label="company"
//             className="bg-red-500 md:block hidden w-full h-56 ml-2"
//           >
//             {/* Content for the third div */}
//             <img
//               src={company}
//               alt="company"
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
