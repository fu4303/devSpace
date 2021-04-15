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

          <div className=" bg-gradient-to-r from-indigo-300 to-indigo-500 md:w-1/2 md:h-screen h-full py-2">
            <div className="m-4">
              <h1 className="text-8xl font-bold text-indigo-900">
                devSpace
              </h1>
              <h3 className="text-2xl text-indigo-300 mt-4">
                Welcome to devSpace
              </h3>
              <span className="text-indigo-300 italic font-semibold">
                Select any developer platform to see top posts.
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

          <div className="md:w-1/2 bg-indigo-100  overflow-y-scroll max-h-screen">
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
