---
layout: default
title: meshplayctl-system-provider
permalink: reference/meshplayctl/system/provider
redirect_from: reference/meshplayctl/system/provider/
type: reference
display-title: "false"
language: en
command: system
subcommand: provider
---

# meshplayctl system provider

Switch between providers

## Synopsis

Enforce a provider. Choose between available Meshplay providers
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider [flags]

</div>
</pre> 

## Examples

To view provider
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider view

</div>
</pre> 

To list all available providers
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider list

</div>
</pre> 

To set a provider
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider set [provider]

</div>
</pre> 

To switch provider and redeploy Meshplay
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider switch [provider]

</div>
</pre> 

To reset provider to default
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl system provider reset

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help   help for provider

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
