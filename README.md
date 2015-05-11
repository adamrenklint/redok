redok
====

Readme and documentation generator

[![Join the chat at https://gitter.im/adamrenklint/redok](https://img.shields.io/badge/GITTER-join_chat-blue.svg?style=flat-square)](https://gitter.im/adamrenklint/redok)
 [![npm version](https://img.shields.io/npm/v/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok) 
 [![npm monthly downloads](https://img.shields.io/npm/dm/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok)
 [![GitHub stars](https://img.shields.io/github/stars/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/stargazers)
 [![GitHub forks](https://img.shields.io/github/forks/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/network)
 [![npm dependencies](https://img.shields.io/david/adamrenklint/redok.svg?style=flat-square)](https://david-dm.org/adamrenklint/redok)
 [![David devDependencies](https://img.shields.io/david/dev/adamrenklint/redok.svg?style=flat-square)](https://david-dm.org/adamrenklint/redok#info=devDependencies)


[redok](https://www.npmjs.com/package/redok) is a tool for generating README and repo documentation using Handlebars and Markdown. It has a bunch of helpers and partials for the most common tasks.

## Installation

```sh
$ npm install -g redok
```

## Usage

Generate output files for all templates in the folder ```.docs```. For example, ```.docs/README.md``` would become your project's main readme file.

```
$ redok
```

If you readme is growing, it's smart to split the template up into smaller chunks. All ```.hbs``` files in ```.docs/partials``` are available as Handlebars partials:

```js
{{>foo}}
```

### Options

It is possible to pass options to the command line tool.

#### Load templates and partials from ```.alternate/```

```sh
$ redok --dir .alternate
```

#### Watch and regenerate on change

```sh
$ redok --watch
```

## Helpers

- badge
- license?

## License

MIT
