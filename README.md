# React 환경구성

## Install
- yarn init .
- yarn add -D parcel-bundler typescript
- yarn add react react-dom 
- yarn add -D @types/react @types/react-dom
- yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
- yarn add -D eslint-plugin-{import,jsx-a11y,eslint,react,react-hooks}
- yarn add -D eslint-config-airbnb
- yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
- yarn add -D mocha@6.2.2 chai jsdom
- yarn add -D @types/mocha @types/chai
- yarn add -D enzyme enzyme-adapter-react-16
- yarn add -D @babel/core @babel/register @babel/preset-env @babel/preset-typescript babel-loader ts-node ignore-styles
- yarn add -D nyc

## Todo
- [x] npm init.
- [x] bundler install Parcel, React app(typescript).
- [x] lint, prettier(airbnb)
- [x] mocha, chai
- [ ] hushky hook(commit -> lint, prettier)
- [ ] hushky hook(push -> testing mocha, chai)

## Commit
- [x] React App - Typescript.
- [ ] list, prettier

## Tips
- Commit[0]: React-app Typescript to Parcel.
- Commit[1]: lint, prettier


## Study
- 설치할 eslint패키지 파일확인 
> - npm info "eslint-config-airbnb@latest" peerDependencies


## Command
```
# parcel
yarn parcel -p 3000 ./public/index.html --open
// public/index.html의 파일을 개발환경으로 3000포트에 작동시키며 최초로 열기.

yarn parcel build ./public/index.html
// public/index.html의 파일을 프로덕션 환경으로 실행.

# prettier
yarn prettier --write --config ./.prettierrc './src/**/!(*.spec).{ts,tsx}'
// prettier를 실행시키며, 기존 코드가 정리됨(.printerrc 파일 기준)

# lint
yarn eslint './src/**/!(*.spec).{ts,tsx}'
// 코드의 문법에 에러가 있는지 확인하기 위해 eslint가 실행(수동적)

yarn exlint --fix './src/**/!(*.spec).{ts,tsx}'
// 코드의 문법확인과 고쳐줌(능동적)

# mocha
yarn mocha -r @bable/register -r ts-node/register -r ./test/helpers.js -r ./test/dom.js -r ignore-styles ./src/**/*.spec.*
// (mocha)테스팅 설정을 구성하는 ./test/의 디렉터리 안의 파일들로 ./src/에있는 *.spec.*파일에 대한 테스트 실행.

yarn mocha -r @babel/register -r ts-node/register -r ./test/dom.js -r ./test/helpers.js -r ignore-styles ./src/**/*.spec.* -- --watch
// (mocha)테스팅 실행을 watch하며, 계속해서 확인.

yarn nyc mocha -r @babel/register -r ts-node -r ./test/dom.js -r ./test/helpers.js -r ignore-styles ./src/**/*.spec.*
// (mocha)테스팅을 상세한 nyc로 결과 확인하기.
```

## Refs.
- [eslint, prettier](https://flamingotiger.github.io/javascript/eslint-setup/#2-1-eslint-config-airbnb-%EB%A1%9C-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)
- [mocha, chai](https://rinae.dev/posts/react-testing-tutorial-kr)