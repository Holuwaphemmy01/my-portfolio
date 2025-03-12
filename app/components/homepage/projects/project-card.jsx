// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">public</span>
            <span className="mr-2 text-white">class</span>
            <span className="mr-2 text-pink-500">Project</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">private </span>
            <span className="text-white">String</span>
            <span className="ml-2 text-amber-300">name;</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
           <span className="text-white">private </span>
           <span className="text-white">List&lt;String&gt;</span>
           <span className="ml-2 text-amber-300">tools;</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">private </span>
            <span className="text-white">String</span>
            <span className="ml-2 text-amber-300">role;</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">private </span>
            <span className="text-white">String</span>
            <span className="ml-2 text-amber-300">description;</span>
            <br />
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <br />
            <span className="text-white">public </span>
            <span className="ml-2 text-pink-500">Project</span>
            <span className="text-gray-400">()</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-400">this.</span>
            <span className="text-white">name </span>
            <span className="text-pink-500">= </span>
            <span className="text-amber-300">"{project.name}";</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-400">this.</span>
            <span className="text-white">tools </span>
            <span className="text-pink-500">= </span>
            <span className="text-amber-300">"{project.tools}";</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-400">this.</span>
            <span className="text-white">role </span>
            <span className="text-pink-500">= </span>
            <span className="text-orange-400">"{project.role}";</span>
          </div>
          <div className="ml-8">
            <span className="text-cyan-400">this.</span>
            <span className="text-white">description</span>
            <span className="text-pink-500">=</span>
            <span className="text-orange-400">"{project.description}";</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-gray-400">{`}`}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <br />
            <span className="text-pink-500">public </span>
            <span className="text-white"> static void </span>
            <span className="text-amber-300">main </span>
            <span className="text-white">{`(`} </span>
            <span className="text-white">String[] args </span>
            <span className="text-white">{`)`} </span>
            <span className="text-gray-400">{`{`}</span>
          </div>
          <div className="ml-8">
            <span className="text-white">Project </span>
            <span className="text-pink-500">project</span>
            <span className="text-gray-400"> =</span>
            <span className="text-white">new </span>
            <span className="text-pink-500">Project</span>
            <span>{`()`}</span>
            <span className="text-gray-400">;</span>
          </div>  
          <div className="ml-8">
            <span className="text-white">System.out.println</span>
            <span className="text-gray-400">{`(`}</span>
            <span className="text-pink-500">project</span>
            <span className="text-gray-400">{`)`}</span>
            <span className="text-gray-400">;</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-gray-400">{`}`}</span>
          </div>
        <div className="text-gray-400">{`};`}</div>
      </code>
    </div>
  </div>
  );
};

export default ProjectCard;