# Upgrade Powershell

Authorization to run script error occurred until PowerShell was upgraded from v5 to v7.

Check PowerShell version (PSVersion)

```
$PSVersionTable
```

Install PowerShell

```
winget install Microsoft.PowerShell
```

# Install node.js

Install **nvm** (node version manager) for windows to switch between node versions
* https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows
* https://github.com/coreybutler/nvm-windows/releases/tag/1.2.2


Install **node.js**

```
nvm install lts
```

```
node -v
```

When nvm is installed it also installs **npm**

```
npm -v
```

# Create React Project with Vite

## Create Project

Install **create-vite** to create new project.

```
npm install create-vite
```

```
npm create vite@latest my-app
```

Then cli prompts for framework and language

## Run

Install packages in config

```
npm install
```

Run and see localhost port number

```
npm run dev
```

-or-

Install **vite**

```
npm install -g vite
```

```
npx vite
```

## Pull from GitHub

`cd` to project's parent directory, and install configured packages before running.

```
npm install
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
