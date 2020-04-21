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

## Todo
- [x] npm init.
- [x] bundler install Parcel, React app(typescript).
- [x] lint, prettier(airbnb)
- [ ] mocha, chai
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

## Refs.
- [eslint, prettier](https://flamingotiger.github.io/javascript/eslint-setup/#2-1-eslint-config-airbnb-%EB%A1%9C-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)