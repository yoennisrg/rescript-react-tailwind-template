// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import LogoSvg from "../../static/logo.svg";

import './App.css'
;

var logo = LogoSvg;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  return React.createElement("div", {
              className: "align-center"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Hello Vite + Rescript + React 17"), React.createElement("p", undefined, React.createElement("button", {
                          onClick: (function (_e) {
                              return Curry._1(setCount, (function (count) {
                                            return count + 1 | 0;
                                          }));
                            })
                        }, "count is: " + String(match[0]))), React.createElement("p", undefined, "Edit: ", React.createElement("code", undefined, "containers/App.res"), " and save to test HMR updates."), React.createElement("p", undefined, React.createElement("a", {
                          className: "App-link",
                          href: "https://reactjs.org",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "Learn React"), " | ", React.createElement("a", {
                          className: "text-blue-300",
                          href: "https://vitejs.dev/guide/features.html",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "Vite Docs"), " | ", React.createElement("a", {
                          className: "App-link",
                          href: "https://rescript-lang.org/docs/react/latest/introduction",
                          rel: "noopener noreferrer",
                          target: "_blank"
                        }, "ReScript Docs"))));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
