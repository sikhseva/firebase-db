// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
   apiKey: "AIzaSyBfFfAAi5wz6p8mnIgihXUNyIZYe9IalHE",
    authDomain: "firegallery-c073a.firebaseapp.com",
    databaseURL: "https://firegallery-c073a.firebaseio.com",
    projectId: "firegallery-c073a",
    storageBucket: "firegallery-c073a.appspot.com",
    messagingSenderId: "362383160654"
  }
};
