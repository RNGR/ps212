# PS212

## Install Notes


*And add this to package.json scripts to push dist to gh-pages:*
`"deploy": "npm run build; push-dir --dir=dist --branch=gh-pages --cleanup"`

Don't forget to update the `/src/main.js` vue-router `base` for gh-pages subfolder (repo name):

```
const router = new VueRouter({
  mode: 'history',
  base: '/ps212/', <-------
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Deploys to GitHub Pages
```
npm run deploy

# On server:
git reset --hard origin/gh-pages
```

or use the script:

```
bash deploy.sh
```
