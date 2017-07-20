# eslint
Eslint configuration

## Install
Add eslint to your package.json. This can easily be done with the following command

```shell
npm install https://github.com/iarroyo5/eslint#master --save-dev
```

Or manually add this to the package.json

```json
"devDependencies": {
  "eslint": "git+ssh://git@github.com:iarroyo5/eslint.git#master"
}
```

Check the [releases](https://github.com/iarroyo5/eslint/releases) for the latest version.

## Run eslint

Add a script like the following to your package.json with your chosen configurations

```json
"scripts": {
  "eslint": "eslint src/"
}
```

And run it with

```shell
npm run eslint
```

I'd recommend calling the eslint script in your test script

```json
"scripts": {
  "test": "npm run eslint && npm run mocha"
}
```

## Versions

You can see all releases [here](https://github.com/iarroyo5/eslint/releases)

Version must be parseable by [node-semver](https://docs.npmjs.com/misc/semver) | [GitHub](https://github.com/npm/node-semver)

All version numbers should be prefixed with `v`

Changes to structure / new plugins should increment the major version number

```json
vX.0.0
```

New rules / adjustments to existing rules should increment the minor version number

```json
v0.X.0
```

Fixes to rules that were configured incorrectly should increment the patch number

```json
v0.0.X
```

## References
- https://github.com/airbnb/javascript
- https://github.com/airbnb/javascript/tree/master/react
