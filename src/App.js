import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

import Hashnode from './components/Hashnode';
import Dev from './components/Dev'
import Hackernews from './components/Hackernews'
import Producthunt from './components/Producthunt'
import Github from './components/Github'

const App = () => {
  return (
    <div className=" text-center mx-auto ">

      <BrowserRouter>
        <div className="flex md:flex-row flex-col">

          <div className=" bg-gradient-to-r from-indigo-400 to-indigo-600 md:w-1/2 md:h-screen h-full py-6">
            <div className="m-6">
              <h1 className="text-8xl font-bold text-white">
                devSpace
              </h1>
              <h3 className="text-2xl text-white mt-8">
                Welcome to devSpace.
              </h3>
              <span className="text-white italic font-semibold">
                Get top posts from the best developer platforms.
                Select any plarform to see top posts.
              </span>
            </div>

            <Sidebar />

            <div className="mt-12 bg-gray-900 shadow text-white p-2 mx-auto w-36 rounded">
              <a href="https://github.com/fu4303/devspace" target="_blank" rel="noreferrer" className="flex">
                <span className="text-sm font-semibold">
                  ⭐ Star on Github
                </span>
              </a>
            </div>

          </div>

          <div className="md:w-1/2 bg-gray-100  overflow-y-scroll max-h-screen">
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={Hackernews} />
            <Route exact path="/producthunt" component={Producthunt} />
            <Route exact path="/github" component={Github} />

          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
