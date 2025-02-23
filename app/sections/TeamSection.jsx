import React from "react";

const TeamSection = () => {
  return (
    <div className="relative">
      <img
        src="/teamab.png"
        className="absolute top-[50%] translate-y-[-50%] right-0 w-[15%]"
      />
      <div className="max-w-5xl mx-auto px-4 container mt-20">
        <div>
          <h1 className="text-4xl text-green-600 font-bold">Our Team</h1>
        </div>
        <div className="flex gap-12 mt-16">
          <div className="bg-[#24A556] py-5 flex items-end rounded-lg w-[35%] h-[25rem] relative">
            <img
              className="w-full border-b absolute top-[-50px] left-[20px] h-[90%]"
              src="/team (3).png"
            />
            <img
              src="/team/frame1.png"
              className="absolute top-10 left-3 w-20"
            />
            <div className="px-4 w-full flex items-end justify-between">
              <div>
                <h1 className="text-white text-[18px] font-semibold outfit">
                  Emily
                </h1>
                <h2 className="text-white text-[14px] font-semibold outfit">
                  Front-End Developer
                </h2>
              </div>
              <div className="flex items-center space-x-1 justify-end">
                <img className="w-4 h-4" src="/team/soc (1).png" />
                <img className="w-4 h-4" src="/team/soc (2).png" />
                <img className="w-4 h-4" src="/team/soc (3).png" />
              </div>
            </div>
          </div>
          <div className="bg-[#24A556] py-5 flex items-end rounded-lg w-[23%] h-[25rem] relative">
            <img
              className="w-full border-b absolute top-[-50px] left-0 h-[90%]"
              src="/team (1).png"
            />
            <img
              src="/team/frame2.png"
              className="absolute top-4 right-3 w-12"
            />
            <div className="px-4 w-full flex items-end justify-between">
              <div>
                <h1 className="text-white text-[18px] font-semibold outfit">
                  Jon Ashraf
                </h1>
                <h2 className="text-white text-[14px] font-semibold outfit">
                  Marketer
                </h2>
              </div>
              <div className="flex items-center space-x-1 justify-end">
                <img className="w-4 h-4" src="/team/soc (1).png" />
                <img className="w-4 h-4" src="/team/soc (2).png" />
                <img className="w-4 h-4" src="/team/soc (3).png" />
              </div>
            </div>
          </div>
          <div className="bg-[#24A556] py-5 flex items-end rounded-lg w-[23%] h-[25rem] relative">
            <img
              className="w-full border-b absolute top-[-90px] left-0 h-[100%]"
              src="/team (2).png"
            />
            <img
              src="/team/frame3.png"
              className="absolute top-3 right-3 w-12"
            />
            <div className="px-4 w-full flex items-end justify-between">
              <div>
                <h1 className="text-white text-[18px] font-semibold outfit">
                  Kani Jon
                </h1>
                <h2 className="text-white text-[14px] font-semibold outfit">
                  Desinger
                </h2>
              </div>
              <div className="flex items-center space-x-1 justify-end">
                <img className="w-4 h-4" src="/team/soc (1).png" />
                <img className="w-4 h-4" src="/team/soc (2).png" />
                <img className="w-4 h-4" src="/team/soc (3).png" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 w-[25%] justify-center items-end">
            <span className="rounded-full rotate-180 p-4 bg-[#3F3F3F]">
              <img src="/Arrow 2.png" className="w-6 h-6" />
            </span>
            <span className="rounded-full p-4 bg-[#3F3F3F]">
              <img src="/Arrow 2.png" className="w-6  h-6" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;

// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";
// import "swiper/css";
// import "swiper/css/navigation";

// const teamMembers = [
//   {
//     name: "John Doe",
//     role: "Software Engineer",
//     image: "https://ibb.co/gZNBbXJX",
//   },
//   {
//     name: "Sarah Smith",
//     role: "UI/UX Designer",
//     image: "https://ibb.co/gZNBbXJX",
//   },
//   {
//     name: "Michael Johnson",
//     role: "Project Manager",
//     image: "https://ibb.co/gZNBbXJX",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <div className="py-12 bg-gray-100 text-center">
//       <h2 className="text-3xl font-bold text-green-600 mb-8">Our Team</h2>
//       <div className="relative w-full max-w-6xl mx-auto">
//         <Swiper
//           modules={[Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {teamMembers.map((member, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center">
//                 <img
//                   className="w-32 h-32 rounded-full mb-4"
//                   src={member.image}
//                   alt={member.name}
//                 />
//                 <h3 className="text-lg font-semibold">{member.name}</h3>
//                 <p className="text-gray-500">{member.role}</p>
//                 <div className="flex space-x-4 mt-4 text-green-500">
//                   <FaFacebook className="cursor-pointer hover:text-green-700" />
//                   <FaInstagram className="cursor-pointer hover:text-green-700" />
//                   <FaTwitter className="cursor-pointer hover:text-green-700" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 cursor-pointer swiper-button-prev text-green-600 text-2xl">
//           <FaArrowLeft />
//         </div>
//         <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 cursor-pointer swiper-button-next text-green-600 text-2xl">
//           <FaArrowRight />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;

// "use client";
// import { useState } from "react";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { MdArrowBack, MdArrowForward } from "react-icons/md";

// const teamMembers = [
//   {
//     name: "Emily",
//     role: "Front End Developer",
//     image: "https://via.placeholder.com/150", // Replace with actual image
//   },
//   {
//     name: "Jon Arshaf",
//     role: "Marketer",
//     image: "https://via.placeholder.com/150", // Replace with actual image
//   },
//   {
//     name: "Kani Jon",
//     role: "Designer",
//     image: "https://via.placeholder.com/150", // Replace with actual image
//   },
// ];

// export default function TeamSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section className="py-16 bg-white text-center">
//       <h2 className="text-3xl font-bold text-green-600">Our Team</h2>
//       <div className="flex items-center justify-center mt-8 relative">
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 p-2 bg-gray-300 rounded-full"
//         >
//           <MdArrowBack size={24} />
//         </button>
//         <div className="flex space-x-6 overflow-hidden">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className={`flex flex-col items-center bg-gradient-to-b from-green-600 to-green-400 p-6 rounded-xl transition-all transform ${
//                 index === currentIndex ? "scale-100" : "scale-90 opacity-50"
//               }`}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-full mb-4 border-4 border-white"
//               />
//               <h3 className="text-white text-xl font-semibold">
//                 {member.name}
//               </h3>
//               <p className="text-white text-sm">{member.role}</p>
//               <div className="flex space-x-3 mt-3 text-white">
//                 <FaFacebook />
//                 <FaInstagram />
//                 <FaTwitter />
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={nextSlide}
//           className="absolute right-0 p-2 bg-gray-300 rounded-full"
//         >
//           <MdArrowForward size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }

// import React from "react";

// const TeamSection = () => {
//   return (
//     <div>
//       <div className="max-w-5xl mx-auto px-4 container mt-10">
//         <div>
//           <h1 className="text-4xl text-green-600 font-bold">Our Team</h1>
//         </div>
//         <div className="grid grid-cols-4 gap-6">
//           <div className="bg-[#24A556] w-full h-[20rem] relative">
//             <img
//               className="w-full absolute top-0 left-0 h-full"
//               src="/team (3).png"
//             />
//           </div>
//           <div className="bg-[#24A556] w-[70%] relative">
//             <img
//               className="w-full absolute top-0 left-0 h-full"
//               src="/team (1).png"
//             />
//           </div>
//           <div className="bg-[#24A556] w-[40%] relative">
//             <img
//               className="w-full absolute top-0 left-0 h-full"
//               src="/team (2).png"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamSection;
