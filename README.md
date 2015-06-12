redok
====

Readme and documentation generator

[![Join the chat at https://gitter.im/adamrenklint/redok](https://img.shields.io/badge/GITTER-join_chat-blue.svg?style=flat-square)](https://gitter.im/adamrenklint/redok)
 [![npm version](https://img.shields.io/npm/v/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok) 
 [![npm monthly downloads](https://img.shields.io/npm/dm/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok)
 [![GitHub stars](https://img.shields.io/github/stars/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/stargazers)
 [![GitHub forks](https://img.shields.io/github/forks/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/network)
 [![npm dependencies](https://img.shields.io/david/adamrenklint/redok.svg?style=flat-square)](https://david-dm.org/adamrenklint/redok)


[redok](https://www.npmjs.com/package/redok) is a tool for generating README and repo documentation using Handlebars and Markdown, and aims to speed up the most common tasks.

## Installation

```sh
$ npm install -g redok
```

## Usage

Generate output files for all templates in the folder ```.docs```. For example, ```.docs/README.md``` would become your project's main readme file.

```
$ redok
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

### Partials

If your readme is growing, it's smart to split the template up into smaller chunks. All ```.hbs``` files in ```.docs/partials``` are available as Handlebars partials:

```js
{{>foo}}
```

#### Badges

redok comes with a few built-in partials for generating badges.

|Description|Code|Example|
|---|---|---|
|Gitter chat|```{{>badges/gitter}};```|[![Join the chat at https://gitter.im/adamrenklint/redok](https://img.shields.io/badge/GITTER-join_chat-blue.svg?style=flat-square)](https://gitter.im/adamrenklint/redok)|
|npm version|```{{>badges/npm-version}}```|[![npm version](https://img.shields.io/npm/v/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok) |
|npm downloads|```{{>badges/npm-downloads}}```|[![npm monthly downloads](https://img.shields.io/npm/dm/redok.svg?style=flat-square)](https://www.npmjs.com/package/redok)|
|npm dependencies|```{{>badges/npm-dependencies}}```|[![npm dependencies](https://img.shields.io/david/adamrenklint/redok.svg?style=flat-square)](https://david-dm.org/adamrenklint/redok)|
|npm devDependencies|```{{>badges/npm-devDependencies}}```|[![David devDependencies](https://img.shields.io/david/dev/adamrenklint/redok.svg?style=flat-square)](https://david-dm.org/adamrenklint/redok#info=devDependencies)|
|Github stars|```{{>badges/github-stars}}```|[![GitHub stars](https://img.shields.io/github/stars/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/stargazers)|
|Github forks|```{{>badges/github-forks}}```|[![GitHub forks](https://img.shields.io/github/forks/adamrenklint/redok.svg?style=flat-square)](https://github.com/adamrenklint/redok/network)|
|Travis CI status|```{{>badges/travis}}```|[![Travis CI status](https://img.shields.io/travis/adamrenklint/redok.svg?style=flat-square)](https://travis-ci.org/adamrenklint/redok)|
|CodeClimate score|```{{>badges/codeclimate-score}}```|[![Code Climate score](https://img.shields.io/codeclimate/github/adamrenklint/redok.svg?style=flat-square)](https://codeclimate.com/github/adamrenklint/redok)|
|CodeClimate coverage|```{{>badges/codeclimate-coverage}}```|[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/github/adamrenklint/redok.svg?style=flat-square)](https://codeclimate.com/github/adamrenklint/redok)|

## License

[MIT](https://github.com/adamrenklint/redok/blob/master/LICENSE.md) © 2015 [Adam Renklint](http://adamrenklint.com)

---
*Generated with [redok](https://github.com/adamrenklint/redok) @ Friday June 12th, 2015 - 11:02:19 AM*