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
&#123;&#123;>foo&#125;&#125;
```

#### Badges

{{package.name}} comes with a few built-in partials for generating badges.

|Description|Code|Example|
|---|---|---|
|Gitter chat|```&#123;&#123;>badges/gitter&#125;&#125;```|{{>badges/gitter}}|
|npm version|```&#123;&#123;>badges/npm-version&#125;&#125;```|{{>badges/npm-version}}|
|npm downloads|```&#123;&#123;>badges/npm-downloads&#125;&#125;```|{{>badges/npm-downloads}}|
|npm dependencies|```&#123;&#123;>badges/npm-dependencies&#125;&#125;```|{{>badges/npm-dependencies}}|
|npm devDependencies|```&#123;&#123;>badges/npm-devDependencies&#125;&#125;```|{{>badges/npm-devDependencies}}|
|Github stars|```&#123;&#123;>badges/github-stars&#125;&#125;```|{{>badges/github-stars}}|
|Github forks|```&#123;&#123;>badges/github-forks&#125;&#125;```|{{>badges/github-forks}}|
|Travis CI status|```&#123;&#123;>badges/travis&#125;&#125;```|{{>badges/travis}}|
|CodeClimate score|```&#123;&#123;>badges/codeclimate-score&#125;&#125;```|{{>badges/codeclimate-score}}|
|CodeClimate coverage|```&#123;&#123;>badges/codeclimate-coverage&#125;&#125;```|{{>badges/codeclimate-coverage}}|

## License

[MIT]({{github.url}}/blob/master/LICENSE.md) © 2015 [Adam Renklint](http://adamrenklint.com)
