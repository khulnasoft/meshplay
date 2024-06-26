---
layout: default
title: meshplayctl-app-offboard
permalink: reference/meshplayctl/app/offboard
redirect_from: reference/meshplayctl/app/offboard/
type: reference
display-title: "false"
language: en
command: app
subcommand: offboard
---

# meshplayctl app offboard

Offboard application

## Synopsis

Offboard application will trigger undeploy of application
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl app offboard [flags]

</div>
</pre> 

## Examples

Offboard application by providing file path
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl app offboard -f [filepath]

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -f, --file string   Path to app file
  -h, --help          help for offboard

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
