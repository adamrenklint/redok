{{package.name}}
====

{{package.description}}

{{>badges}}

[{{package.name}}]({{npm.url}}) is a tool for generating README and repo documentation using Handlebars and Markdown, and aims to speed up the most common tasks.

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
\{{>foo}}
```

#### Badges

{{package.name}} comes with a few built-in partials for generating badges.

|Description|Code|Example|
|---|---|---|
|Gitter chat|```\{{>badges/gitter}};```|{{>badges/gitter}}|
|npm version|```\{{>badges/npm-version}}```|{{>badges/npm-version}}|
|npm downloads|```\{{>badges/npm-downloads}}```|{{>badges/npm-downloads}}|
|npm dependencies|```\{{>badges/npm-dependencies}}```|{{>badges/npm-dependencies}}|
|npm devDependencies|```\{{>badges/npm-devDependencies}}```|{{>badges/npm-devDependencies}}|
|Github stars|```\{{>badges/github-stars}}```|{{>badges/github-stars}}|
|Github forks|```\{{>badges/github-forks}}```|{{>badges/github-forks}}|
|Travis CI status|```\{{>badges/travis}}```|{{>badges/travis}}|
|CodeClimate score|```\{{>badges/codeclimate-score}}```|{{>badges/codeclimate-score}}|
|CodeClimate coverage|```\{{>badges/codeclimate-coverage}}```|{{>badges/codeclimate-coverage}}|

## License

[MIT]({{github.url}}/blob/master/LICENSE.md) © 2015 [Adam Renklint](http://adamrenklint.com)
