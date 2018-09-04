# provider-dapp
The MedChain Service Provider dApp (distributed app) that interfaces with the MedChain distributed storage governed by blockchain technology.

## Installation

```bash
git clone git@github.com:MedChain/provider-dapp.git
cd provider-dapp
yarn
```

```bash
vim semantic/tasks/config/user.js
#look for line 42 and make it read: extend(true, {}, defaults, userConfig)
```

## Get started

```bash
yarn start
```

```bash
cd semantic
gulp build
gulp watch
```
