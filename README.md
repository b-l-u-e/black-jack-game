# Buid blackjack application

Quick start:

- create new vite project `npx create-vite black-jack --template vanilla`

- cd "black-jack"

- install dependencies and dev server `npm install && npm run start`


For existing vite project

- install Vite and React Refresh Plugin `npm i -D vite @vitejs/plugin-react-refresh`

- edit vite.config.js 

    ```
    // vite.config.ts
    import { defineConfig } from 'vite'
    import reactRefresh from '@vitejs/plugin-react-refresh'

    export default defineConfig({
    plugins: [reactRefresh()]
    })
    ```

- update package.json scripts

    ```
    // package.json
    {
    "scripts": {
        "start": "vite",
        "build": "vite build"
        // if you need to run eslint and tsc
        "build": "eslint src && tsc && vite build",
    },
    }

    ```

- run the project `npm run start`
