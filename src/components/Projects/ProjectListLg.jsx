// import { AiOutlineGithub } from "react-icons/ai";
// import { SiNetlify } from "react-icons/si";
// import { Link } from "react-router-dom";
import BtnPrimary from "../Buttons/BtnPrimary";
import BtnSecondary from "../Buttons/BtnSecondary";
// import { HiExternalLink } from "react-icons/hi";

// const ProjectListLg = ({ project }) => {
//   return (
//     <div className="rounded-lg lg:rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20">
//       <div className="backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5">
//         <h1 className="text-xl lg:text-2xl text-gray-200 font-semibold">
//           {project.name}
//         </h1>
//         {/* change this img to scrollable image show and scroll image when the parent div is hovered stop when mouse leave this div */}
//         <img
//           src={project.image}
//           alt="Zia Hall Project"
//           className="rounded-lg"
//         />
//       </div>
//       <div className="w-full flex justify-center items-center mt-4 flex-col p-4">
//         <h2 className="text-xl text-gray-200 font-semibold hidden lg:block">
//           Description
//         </h2>
//         <p className="text-white font-Nunito-light hidden lg:block">
//           {project.description}
//         </p>
//         <Link
//           to={`/projects/${project.id}`}
//           className="rounded-md text-slate-200 px-2 py-1 font-Nunito-light"
//         >
//           See Details
//         </Link>
//       </div>
//       <div className="flex justify-center items-center py-4 gap-4">
//         <div
//           onClick={() => {
//             console.log("Hello");
//           }}
//         >
//           <BtnPrimary>
//             <SiNetlify /> Live
//           </BtnPrimary>
//         </div>
//         <BtnSecondary>
//           <AiOutlineGithub /> Github
//         </BtnSecondary>
//       </div>
//     </div>
//   );

//   if (true) {
//     return (
//       <div className="h-[180px] md:h-[200px] rounded-3xl overflow-hidden relative group">
//         {/* Overlay animation */}
//         <div className="rounded-3xl absolute bg-gradient-to-tr from-violet-800 to-rose-700 flex flex-col justify-center items-center h-full w-full opacity-0 group-hover:opacity-100 -translate-x-1/2 gap-2 group-hover:z-10 group-hover:translate-x-0 transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
//           <h1 className="text-xl lg:text-2xl text-gray-200 font-bold font-Kanit">
//             {project.name}
//           </h1>
//           <a
//             href={project.live_link}
//             target="_blank"
//             rel="noreferrer"
//             className="bg-indigo-600 text-white rounded-full px-3 md:px-5 py-1.5 md:py-3 flex justify-center items-center gap-2"
//           >
//             View Website <HiExternalLink />
//           </a>
//         </div>

//         {/* Background image and animated overlay */}
//         <div className="absolute h-full w-full rounded-3xl overflow-hidden">
//           <div className="absolute h-full w-full">
//             <img
//               src={project.image}
//               alt={project.name}
//               className="w-full h-full object-fill"
//             />
//           </div>

//           {/* Sliding diagonal bar */}
//           <div
//             data-identity="Container"
//             className="absolute shadow-lg border-4 border-gray-300 bg-blue-500/90 md:bg-blue-500 backdrop-blur-sm md:backdrop-blur-none h-[300px] w-full flex justify-end items-center text-white -rotate-[60deg] translate-x-[140px] md:translate-x-[150px] transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full"
//           ></div>

//           {/* Text transitions */}
//           <h1 className="text-xl md:text-3xl font-bold absolute top-2 right-6 text-white transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full">
//             {project.id}.
//           </h1>
//           <h1 className="font-Kanit text-base md:text-2xl font-bold absolute top-8 md:top-10 right-2 text-white transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full">
//             {project.name}
//           </h1>
//           <p className="w-[40%] drop-shadow-md font-Kanit text-sm absolute top-14 md:top-[75px] text-right right-2 text-white transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-full leading-[13px]">
//             {project.description}
//           </p>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div className="rounded-lg lg:rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20">
//         <div className="backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5">
//           <h1 className="text-xl lg:text-2xl text-gray-200 font-semibold">
//             {project.name}
//           </h1>
//           <img src={project.image} alt="Zia Hall Project" />
//         </div>
//         <div className="w-full flex justify-center items-center mt-4 flex-col p-4">
//           <h2 className="text-xl text-gray-200 font-semibold hidden lg:block">
//             Description
//           </h2>
//           <p className="text-white font-Nunito-light hidden lg:block">
//             {project.description}
//           </p>
//           <Link
//             to={`/projects/${project.id}`}
//             className="rounded-md text-slate-200 px-2 py-1 font-Nunito-light"
//           >
//             See Details
//           </Link>
//         </div>
//         <div className="flex justify-center items-center py-4 gap-4">
//           <div
//             onClick={() => {
//               console.log("Hello");
//             }}
//           >
//             <BtnPrimary>
//               <SiNetlify /> Live
//             </BtnPrimary>
//           </div>
//           <BtnSecondary>
//             <AiOutlineGithub /> Github
//           </BtnSecondary>
//         </div>
//       </div>
//     );
//   }
// };

// export default ProjectListLg;

// import { useRef } from "react";
// import { Link } from "react-router-dom";
// import { SiNetlify } from "react-icons/si";
// import { AiOutlineGithub } from "react-icons/ai";

// const ProjectListLg = ({ project }) => {
//   const containerRef = useRef(null);
//   const imageRef = useRef(null);
//   const imageContainerRef = useRef(null);
//   const scrollInterval = useRef(null);

//   // Smooth image scroll
//   const startScroll = () => {
//     if (!imageRef.current || !containerRef.current) return;
//     const maxScroll =
//       imageRef.current.scrollHeight - containerRef.current.offsetHeight;

//     let currentScroll = 0;
//     scrollInterval.current = setInterval(() => {
//       currentScroll += 6;
//       if (currentScroll >= maxScroll) {
//         clearInterval(scrollInterval.current);
//         return;
//       }
//       imageRef.current.style.transform = `translateY(-${currentScroll}px)`;
//     }, 16); // ~60fps
//   };

//   const stopScroll = () => {
//     clearInterval(scrollInterval.current);
//     if (imageRef.current) {
//       imageRef.current.style.transform = "translateY(0)";
//     }
//   };

//   // Mouse tilt effect
//   const handleMouseMove = (e) => {
//     const container = imageContainerRef.current;
//     if (!container) return;

//     const rect = container.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;

//     const rotateX = y * 10;
//     const rotateY = x * -16;

//     container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const resetTilt = () => {
//     const container = imageContainerRef.current;
//     if (container) container.style.transform = "rotateX(0deg) rotateY(0deg)";
//   };

//   return (
//     <div
//       ref={containerRef}
//       className="rounded-lg lg:rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20 transition-transform duration-300"
//       onMouseEnter={startScroll}
//       onMouseLeave={() => {
//         stopScroll();
//         resetTilt();
//       }}
//       onMouseMove={handleMouseMove}
//     >
//       <div className="backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5">
//         <h1 className="text-xl lg:text-2xl text-gray-200 font-semibold">
//           {project.name}
//         </h1>

//         {/* Scrollable image on hover */}
//         <div
//           ref={imageContainerRef}
//           className="overflow-hidden h-[300px] w-full rounded-lg"
//         >
//           <img
//             ref={imageRef}
//             src={project.image}
//             alt={project.name}
//             className="w-full transition-transform duration-300 ease-in-out"
//             style={{ transform: "translateY(0)" }}
//           />
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center mt-4 flex-col p-4">
//         <h2 className="text-xl text-gray-200 font-semibold hidden lg:block">
//           Description
//         </h2>
//         <p className="text-white font-Nunito-light hidden lg:block">
//           {project.description}
//         </p>
//         <Link
//           to={`/projects/${project.id}`}
//           className="rounded-md text-slate-200 px-2 py-1 font-Nunito-light"
//         >
//           See Details
//         </Link>
//       </div>

//       <div className="flex justify-center items-center py-4 gap-4">
//         <div onClick={() => console.log("Hello")}>
//           <BtnPrimary>
//             <SiNetlify /> Live
//           </BtnPrimary>
//         </div>
//         <BtnSecondary>
//           <AiOutlineGithub /> Github
//         </BtnSecondary>
//       </div>
//     </div>
//   );
// };

// export default ProjectListLg;

import { useRef } from "react";
import { Link } from "react-router-dom";
import { SiNetlify } from "react-icons/si";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectListLg = ({ project }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const animationFrame = useRef(null);
  const scrollY = useRef(0);

  const startScroll = () => {
    const image = imageRef.current;
    const container = imageContainerRef.current;
    if (!image || !container) return;

    const maxScroll = image.scrollHeight - container.offsetHeight;

    const scroll = () => {
      scrollY.current += 8; // adjust speed here
      if (scrollY.current >= maxScroll) {
        cancelAnimationFrame(animationFrame.current);
        return;
      }
      image.style.transform = `translateY(-${scrollY.current}px)`;
      animationFrame.current = requestAnimationFrame(scroll);
    };
    animationFrame.current = requestAnimationFrame(scroll);
  };

  const stopScroll = () => {
    cancelAnimationFrame(animationFrame.current);
    scrollY.current = 0;
    if (imageRef.current) {
      imageRef.current.style.transform = `translateY(0px)`;
    }
  };

  // Mouse tilt effect
  const handleMouseMove = (e) => {
    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = y * 20;
    const rotateY = x * -20;

    container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetTilt = () => {
    const container = imageContainerRef.current;
    if (container) container.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={containerRef}
      className="rounded-lg lg:rounded-2xl overflow-hidden backdrop-blur-lg bg-blue-500 bg-opacity-20 transition-transform duration-300 perspective-1000"
      onMouseEnter={startScroll}
      onMouseLeave={() => {
        stopScroll();
        resetTilt();
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="backdrop-blur-sm p-4 shadow-xl flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl lg:text-2xl text-gray-200 font-semibold">
          {project.name}
        </h1>

        {/* Scrollable image on hover */}
        <div className="overflow-hidden rounded-lg bg-black">
          <div
            ref={imageContainerRef}
            className="overflow-hidden h-[300px] w-full"
          >
            <img
              ref={imageRef}
              src={project.image}
              alt={project.name}
              className="w-full transition-transform duration-300 ease-in-out will-change-transform"
              style={{ transform: "translateY(0)" }}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-4 flex-col p-4">
        <h2 className="text-xl text-gray-200 font-semibold hidden lg:block">
          Description
        </h2>
        <p className="text-white font-Nunito-light hidden lg:block">
          {project.description}
        </p>
        <Link
          to={`/projects/${project.id}`}
          className="rounded-md text-slate-200 px-2 py-1 font-Nunito-light"
        >
          See Details
        </Link>
      </div>

      <div className="flex justify-center items-center py-4 gap-4">
        <div onClick={() => console.log("Hello")}>
          <BtnPrimary>
            <SiNetlify /> Live
          </BtnPrimary>
        </div>
        <BtnSecondary>
          <AiOutlineGithub /> Github
        </BtnSecondary>
      </div>
    </div>
  );
};

export default ProjectListLg;
