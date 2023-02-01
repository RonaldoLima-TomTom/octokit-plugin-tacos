# octokit-plugin-tacos

>

[![@latest](https://img.shields.io/npm/v/octokit-plugin-tacos.svg)](https://www.npmjs.com/package/octokit-plugin-tacos)
[![Build Status](https://github.com/RonaldoLima-TomTom/octokit-plugin-tacos/workflows/Test/badge.svg)](https://github.com/RonaldoLima-TomTom/octokit-plugin-tacos/actions?query=workflow%3ATest+branch%3Amain)

## usage

<table>
<tbody valign=top align=left>
<tr><th>

Browsers

</th><td width=100%>

`octokit-plugin-tacos` is not meant for browser usage.

</td></tr>
<tr><th>

Node

</th><td>

Install with `npm install @octokit/core octokit-plugin-tacos`. Optionally replace `@octokit/core` with a compatible module

```js
const { Octokit } = require("@octokit/core");
const { tacos } = require("octokit-plugin-tacos");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(tacos);
const octokit = new MyOctokit({ auth: "secret123" });

octokit. // TODO add usage example with comments here

```

## Options

<table width="100%">
  <thead align=left>
    <tr>
      <th width=150>
        name
      </th>
      <th width=70>
        type
      </th>
      <th>
        description
      </th>
    </tr>
  </thead>
  <tbody align=left valign=top>
    <tr>
      <th>
        <code>option name</code>
      </th>
      <th>
        <code>option type</code>
      </th>
      <td>
        <strong>Required.</strong> Description here
      </td>
    </tr>
  </tbody>
</table>
  
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
