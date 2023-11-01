# Async/Await ldap wrapper 

## Goal

Expose our most used ldap functions as async/await for use across projects.

## Features

- Authentication
- Get user groups
- Expose raw ldap client

## Usage

### Installation

```sh
npm install 4q-node-ldap --save
```

```javascript
const ldap = require('4q-node-ldap');

const ldapConn = await ldap.Connect(
    'ldaps://ldaps.example.com',
    'DC=example,DC=com',
    'service-user@example.com',
    'password',
    { /* tls options */ },
    { /* ldap options */ }
);

await ldapConn.authenticate('other-user@example.com', 'password');
await ldapConn.groups('other-user@example.com');
```



## build
`npm run build`

Whenever this package is updated locally the changes will be available in the projects that are linked

* Run the following command at the root of this package
`npm link`

* In the project where you want to use this package link the npm package locally with
`npm link 4q-node-ldap`

## publish
Any changes made must first be built and then version increased
before publishing
1. `npm version major|minor|patch`

2. `npm login` 

3. `npm publish`