## react app written by typescript

### dev

```bash
# download dependency
$ yarn install

# start develop server and storybook
$ yarn start

# lint
$ yarn lint

# only server
$ yarn start:server

# only storybook
$ yarn start:storybook

```

### production build

```bash
$ yarn build
```

- build 配下に吐かれたファイルが成果物です
- index.html をエントリーポイントとして、build 以下を全て配信すれば動きます
