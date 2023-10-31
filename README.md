NODE-LDAP

## build
`npm run build`

Whenever this package is updated locally the changes will be available in the projects that are linked

* Run the following command at the root of this package
`npm link`

* In the project where you want to use this package link the npm package locally with
`npm link node-ldap`

## publish
currently this is under rocky.assad@premisehealth.com / ask for pass
this will change once in artifactory or once using a premise account for our
open-source packages. Any changes made must first be built and then version increased
before publishing
1. `npm version major|minor|patch`

2. `npm login` 

3. `npm publish`