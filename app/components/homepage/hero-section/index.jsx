// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">import java.util.List;<br /></span>
                <span className="mr-2 text-pink-500">import java.util.Arrays<br /></span>
                <span className="mr-2 text-white">public class Coder</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">private String</span>
                <span className="text-amber-300">name;<br /></span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">private List {`<String>`}</span>
                <span className="text-amber-300">skills;<br /></span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">private boolean</span>
                <span className="text-amber-300">hardWorker;<br /></span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">private boolean</span>
                <span className="text-amber-300">quickLearner;<br /></span>
                <span className="ml-4 lg:ml-8 mr-2 text-white">private boolean</span>
                <span className="text-amber-300">problemSolver;<br /></span>
                <div>
                  <br />
                  <span className>public Coder</span>
                  <span className="text-gray-400">{` (`}</span>
                  <span className="ml-8 lg:ml-16 text-white">String name,</span>
                  <span className="text-amber-300">List {`<String>`} skills,</span>
                  <span className="text-amber-300">boolean hardWorker,</span>
                  <span className="text-amber-300">boolean quickLearner,</span>
                  <span className="text-amber-300">boolean problemSolver</span>
                  <span className="text-gray-400">{`) {`} <br /></span>
                  <br />
                  <span className="ml-4 lg:ml-24  text-cyan-400">this.</span>
                  <span className="text-amber-300">name </span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400">name;</span>
                  <br />
                  <span className="ml-4 lg:ml-24 text-cyan-400">this.</span>
                  <span className="text-amber-300">skills </span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400"> skills;</span>
                  <br />
                  <span className="ml-4 lg:ml-24 text-cyan-400">this.</span>
                  <span className="text-amber-300">hardWorker</span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400"> hardWorker;</span>
                  <br />
                  <span className="ml-4 lg:ml-24 text-cyan-400">this.</span> 
                  <span className="text-amber-300">quickLearner</span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400"> quickLearner;</span>
                  <br />
                  <span className="ml-4 lg:ml-24 text-cyan-400">this.</span>
                  <span className="text-amber-300">problemSolver</span>
                  <span className="text-white"> = </span>
                  <span className="text-orange-400"> problemSolver;</span>
                  <br />
                  <span className="text-gray-400">{`}`}</span>
                </div>
                <div>
                  <br />
                  <span className="ml-4 lg:ml-8 mr-2 text-white">public boolean</span>
                  <span className="text-amber-300">hireable()</span>
                  <span className="text-gray-400">{` {`}</span>
                  <br />
                  <span className="ml-8 lg:ml-16 text-orange-400">return</span>
                  <span className="text-white-400">  hardWorker </span>
                  <span className="text-cyan-400"> && </span>
                  <span className="text-white-400">  problemSolver </span>
                  <span className="text-cyan-400"> && </span>
                  <span className="text-white-400"> skills.size()</span>
                  <span className="text-amber-300">  {`>=`}</span>
                  <span className="text-orange-400">5</span>
                  <span className="text-gray-400">{`;`}</span>
                  <br />
                  <span className="text-gray-400">{` }`}</span>
                </div>

                <div>
                  <span>public static void </span>
                  <span className="text-amber-300">main</span>
                  <span className="text-gray-400">{`(`}</span>
                  <span className="text-white">String[] args</span>
                  <span className="text-gray-400">{`) {`}</span>
                  <br />
                  <span className="ml-8 text-white-400">List </span>
                  <span>{`<Strings>`}</span>
                  <span className="text-amber-300">skills</span>
                  <span className="text-gray-400"> = </span>
                  <span className="text-amber-300">Arrays.asList</span>
                  <span className="text-gray-400">{`(`}</span>
                  <span className="text-orange-400">"Java"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"Python"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="ml-8 text-orange-400">"JavaScript"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"React"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"NodeJS"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"MySql"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"MongoDB"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="ml-8 text-orange-400">"PostgreSQL"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"SpringBoot"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"Docker"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"Flask"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"Django"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="ml-8 text-orange-400">"Solidity"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"Move"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">"AWS"</span>
                  <span className="text-gray-400">{`);`}</span>
                  <br />
                  <span className="ml-8 text-white-400">Coder </span>
                  <span className="text-amber-300">coder</span>
                  <span className="text-gray-400"> = </span>
                  <span className="text-white-400">new </span>
                  <span className="text-amber-300">Coder</span>
                  <span className="text-gray-400">{`(`}</span>
                  <span className="text-orange-400">"Oluwafemi Jacob"</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">skills</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="ml-8 text-orange-400">true</span>
                  <span className="text-gray-400">{`, `}</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">{`);`}</span>
                  <br />
                  <span className="ml-8 text-white-400">System.out.println</span>
                  <span className="text-gray-400">{`(`}</span>
                  <span className="text-orange-400">coder.hireable()</span>
                  <span className="text-gray-400">{`);`}</span>
                </div>
              </div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

