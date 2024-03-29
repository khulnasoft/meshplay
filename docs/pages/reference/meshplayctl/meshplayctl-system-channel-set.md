---
layout: default
title: meshplayctl-system-channel-set
permalink: reference/meshplayctl/system/channel/set
redirect_from: reference/meshplayctl/system/channel/set/
type: reference
display-title: "false"
language: en
command: system
subcommand: channel
---

# meshplayctl system channel set

set release channel and version

## Synopsis

Set release channel and version of context in focus
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system channel set [stable|stable-version|edge|edge-version] [flags]

</div>
</pre> 

## Examples

Subscribe to release channel or version
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system channel set [stable|stable-version|edge|edge-version]

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help   help for set

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
