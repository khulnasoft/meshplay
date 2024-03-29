---
layout: default
title: meshplayctl-system-context
permalink: reference/meshplayctl/system/context
redirect_from: reference/meshplayctl/system/context/
type: reference
display-title: "false"
language: en
command: system
subcommand: context
---

# meshplayctl system context

Configure your Meshplay deployment(s)

## Synopsis

Configure and switch between different named Meshplay server and component versions and deployments.
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system context [command] [flags]

</div>
</pre> 

## Examples

Base command
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system context

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -c, --context string   (optional) temporarily change the current context.
  -h, --help             help for context

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string   path to config file (default "/home/runner/.meshplay/config.yaml")
  -v, --verbose         verbose output
  -y, --yes             (optional) assume yes for user interactive prompts.

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
