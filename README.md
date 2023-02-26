# PS212

## Install Notes

# FOR LOCAL DEVELOPMENT
# Install python 3.10.9
# MacOS:
`brew install pyenv`
# Install and set local
`pyenv install 3.10.9`
`pyenv local 3.10.9`

# Add pyenv to your PATH so that you can reference python (not python3)
`echo "export PATH=\"\${HOME}/.pyenv/shims:\${PATH}\"" >> ~/.zshrc`
`source ~/.zshrc`
`which python`
`python --version`

# Install NPM Packages:
`npm install -g @vue/cli`
`vue create my-project`
`npm install sass-loader node-sass webpack --save-dev`
`npm install vue-router`
`npm install vue-template-compiler`
`npm install --save-dev push-dir`

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

# On server:
git reset --hard origin/gh-pages
```

or use the script:

```
bash deploy.sh
```
