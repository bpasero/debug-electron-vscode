# debug-electron-vscode

This is a hello world Electron application that is setup to debug both the main process and the renderer process from a single launch configuration.

# Setup

* Clone this repo and npm install
* Install the [Chrome Debug adapter](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
* Add a breakpoint into renderer.js
* Add a breakpoint into main.js (e.g. the event handler when the window closes)
* Start the debugger (F5)

# How it works

The VS Code debug configuration file (launch.json) allows for compound debug configurations that can start multiple debug adapters at the same time. 

You can enable a compound debug configuration via the following syntax:

```json
"compounds": [
    {
        "name": "Electron",
        "configurations": ["Launch Electron", "Attach to Main"]
    }
]
```

As you can see, we are pointing to two existing configurations (`Launch Electron` and `Attach to Main`).

The configuration to launch electron is leveraging the chrome debug adapter we installed as part of the setup:

```json
{
    "type": "chrome",
    "request": "launch",
    "name": "Launch Electron",
    "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
    "runtimeArgs": [
        "${workspaceRoot}",
        "--debug=9876"
    ],
    "webRoot": "${workspaceRoot}"
}
```

And the second configuration is attaching to the main process via the node debug adapter:

```json
{
    "type": "node",
    "request": "attach",
    "name": "Attach to Main",
    "port": 9876,
    "protocol": "legacy"
}
```

# Demo

![untitled](https://cloud.githubusercontent.com/assets/900690/24273354/1d8173d4-0fdf-11e7-975e-2629ee5a5543.gif)
