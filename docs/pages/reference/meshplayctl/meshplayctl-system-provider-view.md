---
layout: default
title: meshplayctl-system-provider-view
permalink: reference/meshplayctl/system/provider/view
redirect_from: reference/meshplayctl/system/provider/view/
type: reference
display-title: "false"
language: en
command: system
subcommand: provider
---

# meshplayctl system provider view

view provider

## Synopsis

View provider of context in focus
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider view [flags]

</div>
</pre> 

## Examples

View current provider
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider view

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -a, --all    Show provider for all contexts
  -h, --help   help for view

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string    path to config file (default "/home/runner/.meshplay/config.yaml")
  -c, --context string   (optional) temporarily change the current context.
  -v, --verbose          verbose output
  -y, --yes              (optional) assume yes for user interactive prompts.

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
