"use client";

// import Image from 'next/image' ////THIS LINE IS FROM DEFAULT NEXTJS
import Image from "next/image"
import img from "../../public/img1.jpg"
import { FaMoon, FaFacebook, FaTwitter, FaLinkedin, FaCopyright} from "react-icons/fa"
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);
  return (
    <div className={lightMode ? "dark" : ""}>
      <main className=" bg-gray-900 min-h-screen dark:bg-gray-100">
        <div className="flex justify-between items-center lg:p-10 p-5 dark:bg-gray-200/40 bg-gray-800">
        {/* flex justify-between items-center gap-5 */}
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-xl text-gray-200 dark:text-gray-900 font-burtons">DevelopedByDevEsti</h1>
          </div>
          <div className="flex gap-1/2 lg:gap-3 justify-center items-center">
            <div>
            <FaMoon onClick={()=>setLightMode(!lightMode)} className=" text-gray-200 dark:text-gray-800 hover:text-gray-400 dark:hover:text-gray-400 transition-all duration-300 text-lg lg:text-2xl cursor-pointer"/>
            </div>
          <div>
            <a href="#" className=" text-orange-200 dark:text-orange-700 hover:underline font-extrabold text-lg px-2 py-5 font-burtons">Sign Up</a>
          </div>
          </div>
        </div>
        <div className="m-auto mt-20 text-center w-80 ">
          <div className=" relative bg-gradient-to-t from-gray-300 dark:from-orange-900 mb-20 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full mx-auto overflow-hidden shadow-slate-500 shadow-2xl">
            <Image src={img}  alt="Profile image" layout="fit" objectFit="contain"/>
          </div>

          <h2 className="text-gray-200 dark:text-gray-950 text-3xl lg:text-4xl font-extrabold">Emilia Matina</h2>
          <h3 className="text-orange-300 dark:text-orange-900 lg:text-xl text-lg mt-2">Software Developer</h3>
          <p className=" text-gray-200 dark:text-gray-900 my-5 leading-6 max-w-xs mx-auto">This is the beginning of the portfolio
          and this is it in the text of the marker and the words of the painterbanter rolling from the plain texts
          This is the beginning of the portfolio
          and this is it in the text of the marker and the words of the painterbanter rolling from the plain texts
          </p>
          <div className="flex justify-center gap-3">
            <FaFacebook className="text-green-200 dark:text-gray-950 text-xl"/>
            <FaTwitter className="text-green-200 dark:text-gray-950 text-xl"/>
            <FaLinkedin className="text-green-200 dark:text-gray-950 text-xl"/>
          </div>
        </div>

        <div className=" w-80 mx-auto p-5 lg:mt-20 mt-10 lg:w-full">
          <h3 className="text-gray-100 dark:text-gray-950 font-extrabold text-2xl lg:text-3xl mb-10 text-center">Our Plans</h3>
          <div className="lg:flex lg:gap-10 lg:justify-between">
            <div className=" bg-gray-300 dark:bg-gray-300 shadow-md py-10 px-5 lg:p-10 rounded-md mb-10">
              <h2 className="bg-gradient-to-tr from-orange-700/30 dark:text-gray-300 dark:from-orange-700 p-2 font-extrabold">Plan-A</h2>
              <p className="text-center my-5 lg:mt-10 dark:text-gray-900  text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta atque, hic vel voluptates esse veniam voluptas cumque, corrupti dolores perferendis saepe ullam iure! Ratione eum veniam est natus iusto accusamus repellendus quasi dolore! Deleniti aliquid sunt odio quod sint.</p>
              <div className="mx-auto text-center">
                <button className="bg-gradient-to-r from-orange-900 to-gray-800 text-white py-4 px-10 rounded-md lg:mt-10 hover:from-green-600 hover:to-gray-800 transition-all ease-in duration-1000">Buy</button>
              </div>
            </div>

            <div className=" bg-gray-300 dark:bg-gray-300 shadow-md py-10 px-5 lg:p-10 rounded-md mb-10">
              <h2 className="bg-gradient-to-tr from-orange-700/30 dark:text-gray-300 dark:from-orange-700 p-2 font-extrabold">Plan-B</h2>
              <p className="text-center my-5 lg:mt-10 dark:text-gray-900 text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta atque, hic vel voluptates esse veniam voluptas cumque, corrupti dolores perferendis saepe ullam iure! Ratione eum veniam est natus iusto accusamus repellendus quasi dolore! Deleniti aliquid sunt odio quod sint.</p>
              <div className="mx-auto text-center">
                <button className="bg-gradient-to-r from-orange-900 to-gray-800 text-white py-4 px-10 rounded-md lg:mt-10 hover:from-green-600 hover:to-gray-800 transition-all ease-in duration-1000">Buy</button>
              </div>
            </div>

            <div className=" bg-gray-300 dark:bg-gray-300 shadow-md py-10 px-5 lg:p-10 rounded-md mb-10 ">
              <h2 className="bg-gradient-to-tr from-orange-700/30 dark:text-gray-300 dark:from-orange-700 p-2 font-extrabold">Plan-C</h2>
              <p className="text-center my-5 lg:mt-10 dark:text-gray-900 text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus soluta atque, hic vel voluptates esse veniam voluptas cumque, corrupti dolores perferendis saepe ullam iure! Ratione eum veniam est natus iusto accusamus repellendus quasi dolore! Deleniti aliquid sunt odio quod sint.</p>
              <div className="mx-auto text-center">
                <button className="bg-gradient-to-r from-orange-900 to-gray-800 text-white py-4 px-10 rounded-md lg:mt-10 hover:from-green-600 hover:to-gray-800 transition-all ease-in duration-1000">Buy</button>
              </div>
            </div>
          </div>        
        </div>

        <div>
          <h2 className="text-gray-100 dark:text-gray-950 font-extrabold text-2xl lg:text-3xl mb-10 text-center">Our Values</h2>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-5 p-10 lg:mt-20 lg:p-20 dark:bg-green-50 bg-gray-800">
            <p className="basis-1/3 flex-1 text-orange-200 dark:text-orange-900 border-2 border-gray-700 dark:border-none dark:shadow-gray-400 shadow-sm rounded-lg text-xl text-center  lg:py-10 lg:px-40 px-10 py-5">Excellence</p>
            <p className="basis-1/3 flex-1 text-orange-200 dark:text-orange-900 border-2 border-gray-700 dark:border-none dark:shadow-gray-400 shadow-sm rounded-lg text-xl text-center  lg:py-10 lg:px-40 px-10 py-5">Passionate</p>
            <p className="basis-1/3 flex-1 text-orange-200 dark:text-orange-900 border-2 border-gray-700 dark:border-none dark:shadow-gray-400 shadow-sm rounded-lg text-xl text-center lg:py-10 lg:px-40 px-10 py-5">Flexible</p>
            <p className="basis-1/3 flex-1 text-orange-200 dark:text-orange-900 border-2 border-gray-700 dark:border-none dark:shadow-gray-400 shadow-sm rounded-lg text-xl text-center  lg:py-10 lg:px-40 px-10 py-5">Honest</p>
            <p className="basis-1/3 flex-1 text-orange-200 dark:text-orange-900 border-2 border-gray-700 dark:border-none dark:shadow-gray-400 shadow-sm rounded-lg text-xl text-center  lg:py-10 lg:px-40 px-10 py-5">Fast</p>
          </div>
        </div>
        
        <div className="bg-gray-950 py-3 flex items-center justify-center gap-1">
          <FaCopyright className="font-light text-center text-gray-100"/>
          <span className="font-light text-center text-gray-100">footer copyrite</span>
        </div>
      </main>
    </div>



    // ///////////////////BELOW ARE FROM DEFAULT NEXT JS///////////////////////////////
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
