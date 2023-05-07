To run the server follow the steps described in the README.md file in the Backend directory.
To start the WebApp navigate to the dashboard_planning directory and run:
ng serve
If you get the error: Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, run:
ng serve --watch --live-reload --poll 2000

If you do not have npm and node installed, I recommend the following steps:

install nvm
run: nvm install node

run: npm install -g npx

run: npm install -g @angular/cli


If you do not have TypeScript installed, run: npm install -g typescript.
If you run into problems, try the following:

Delete the node_modules folder and package-lock.json file and run npm install

You might have to use a different npm version. That's what nvm is good for. By running nvm ls you can see all installed versions. By running nvm use version-number you can choose the version you want to use. By running nvm install version-number you can install the version. I currently use version 18.10.0. After doing that try 1).
