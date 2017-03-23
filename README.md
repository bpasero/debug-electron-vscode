# debug-electron-vscode

This is a hello world Electron application that is setup to debug both the main process and the renderer process from a single launch configuration.

# Setup

* Install the [Chrome Debug adapter](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* Add a breakpoint into renderer.js
* Add a breakpoint into main.js (e.g. the event handler when the window closes)
* Start the debugger (F5)

# Demo

![untitled](https://cloud.githubusercontent.com/assets/900690/24273354/1d8173d4-0fdf-11e7-975e-2629ee5a5543.gif)
