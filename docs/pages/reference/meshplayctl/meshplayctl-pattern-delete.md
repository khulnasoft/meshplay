---
layout: default
title: meshplayctl-pattern-delete
permalink: reference/meshplayctl/pattern/delete
redirect_from: reference/meshplayctl/pattern/delete/
type: reference
display-title: "false"
language: en
command: pattern
subcommand: delete
---

# meshplayctl pattern delete

Delete pattern file

## Synopsis

delete pattern file will trigger deletion of the pattern file
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl pattern delete [flags]

</div>
</pre> 

## Examples

delete a pattern file
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl pattern delete [file | URL]

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -f, --file string   Path to pattern file
  -h, --help          help for delete

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
