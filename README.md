# PS212

## Install Notes
`npm install -g @vue/cli`
`vue create my-project`
`npm install sass-loader node-sass webpack --save-dev`
`npm install vue-router`
`npm install vue-template-compiler`
`npm install --save-dev push-dir`

*And add this to package.json scripts to push dist to gh-pages:*
`"deploy": "npm run build; push-dir --dir=dist --branch=gh-pages --cleanup"`

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
NODE_ENV=development npm run build
```

### Lints and fixes files
```
npm run lint
```

### Deploys to GitHub Pages
```
npm run deploy
```
