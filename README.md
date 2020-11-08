# extract-dom-content

[![NPM version of extract-dom-content](https://img.shields.io/npm/v/extract-dom-content)](https://www.npmjs.com/package/extract-dom-content)

Provide a DOM element and get all of its cleaned and standardized text content in an array or string.

This library was originally developed with webpage spellchecking in mind, but can be used for any purpose you might have for it.

## Installation

```
npm install extract-dom-content
```

## API

<a name="extractDomContent"></a>

### extractDomContent(originalNode, [options]) ⇒ <code>String</code> \| <code>Array</code>
Takes in a DOM element and returns all of its text content.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| originalNode | <code>Element</code> |  | DOM element to get the content from. |
| [options] | <code>Object</code> | <code>{}</code> | An object of options to apply additionals filters and/or change the return type. |
| [options.returnAsArray] | <code>boolean</code> | <code>false</code> | Whether the content should be returned as a linebreak-separated string or an array of strings. |
| [options.removeDuplicates] | <code>boolean</code> | <code>false</code> | Whether duplicate strings should be removed or kept. |

## Contributing

If you would like to add features, fix bugs or optimize this package, feel free to fork this repository and submit a pull request.
