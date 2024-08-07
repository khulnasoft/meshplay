---
layout: default
title: meshplayctl-filter-delete
permalink: reference/meshplayctl/filter/delete
redirect_from: reference/meshplayctl/filter/delete/
type: reference
display-title: "false"
language: en
command: filter
subcommand: delete
---

# meshplayctl filter delete

Delete a filter file

## Synopsis

Delete a filter file using the name or ID of a filter
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter delete [filter-name | ID] [flags]

</div>
</pre> 

## Examples

Delete the specified WASM filter file using name or ID
A unique prefix of the name or ID can also be provided. If the prefix is not unique, the first match will be deleted.
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl filter delete [filter-name | ID]

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help   help for delete

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string   path to config file (default "/home/runner/.meshplay/config.yaml")
  -t, --token string    Path to token file default from current context
  -v, --verbose         verbose output

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
