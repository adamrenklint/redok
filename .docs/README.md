{{package.name}}
====

{{package.description}}

{{>badges}}

[{{package.name}}]({{npm.url}}) is a tool for generating README and repo documentation using Handlebars and Markdown. It has a bunch of helpers and partials for the most common tasks.

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
&#123;&#123;>foo&#125;&#125;
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
