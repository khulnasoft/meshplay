---
layout: default
title: meshplayctl-perf-profile
permalink: reference/meshplayctl/perf/profile
redirect_from: reference/meshplayctl/perf/profile/
type: reference
display-title: "false"
language: en
command: perf
subcommand: profile
---

# meshplayctl perf profile

List performance profiles

## Synopsis

List all the available performance profiles
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl perf profile [profile-name] [flags]

</div>
</pre> 

## Examples

List performance profiles (maximum 25 profiles)
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl perf profile

</div>
</pre> 

List performance profiles with search (maximum 25 profiles)
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl perf profile test 2

</div>
</pre> 

View single performance profile with detailed information
<pre class='codeblock-pre'>
<div class='codeblock'>
meshplayctl perf profile test --view

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help       help for profile
  -p, --page int   (optional) List next set of performance results with --page (default = 1) (default 1)
      --view       (optional) View single performance profile with more info

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string          path to config file (default "/home/runner/.meshplay/config.yaml")
  -o, --output-format string   (optional) format to display in [json|yaml]
  -t, --token string           (required) Path to meshplay auth config
  -v, --verbose                verbose output
  -y, --yes                    (optional) assume yes for user interactive prompts.

</div>
</pre>

## See Also

Go back to [command reference index](/reference/meshplayctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
