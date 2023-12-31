<img src="docs/assets/images/logos/nighthawk/stacked/nighthawk-full.svg" />

# Nighthawk

- Project site: https://getnighthawk.dev
- Project doc: https://docs.google.com/document/d/1lHfMo4iIx2WXFZIspfHyxTsPR1T63_2IV5NUkgxoo0w/edit#
- Project Slack: http://slack.khulnasoft.com

## What is Nighthawk?

Nighthawk is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate or with an adaptive request rate. Khulnasoft offers a custom distribution of Nighthawk with intelligent adaptive load controllers to automatically identify optimal configurations for your service mesh deployment. As a Layer 7 performance characterization tool supporting HTTP/HTTPS/HTTP2, Nighthawk is Meshplay’s (and Envoy’s) load generator and is written in C++.

## Nighthawk and Meshplay

Meshplay integrates Nighthawk as one of (currently) three choices of load generator for characterizing and managing the performance of service meshes and their workloads.
Centric to the advancement of Nighthawk is the Meshplay and Service Mesh Performance projects, which enable Nighthawk’s standards-based distributed performance management. The intersection of these projects allow researchers and users to conveniently identify the optimal service mesh configuration while considering their specific environment, application and load. Meshplay orchestrates multiple instances of Nighthawk (horizontal scaling) and provides an easy to use interface for Nighthawk’s adaptive load controller capability. 

---
---

# Go-Nighthawk

Nighthawk adapter to run service mesh load tests with Meshplay.

## Load Generators in Meshplay

Users may prefer to use one load generator over the next given the difference of capabilities between load generators, so Meshplay provides a load generator interface (a gRPC interface) behind which a load generator can be implemented. Meshplay provides users with choice of which load generator they prefer to use for a given performance test. Users may set their configure their own preference of load generator different that the default load generator.

### What function do load generators in Meshplay provide?

Load generators will provide the capability to run load tests from Meshplay. As of today the load generators are embedded as libraries in Meshplay and Meshplay invokes the load generators APIs with the right load test options to run the load test. At the moment, Meshplay has support for HTTP load generators. Support for GRPC and TCP load testing is on the roadmap. Meshplay has functional integration with `fortio`, `wrk2`, and `nighthawk`.

### Why support multiple load generators?

Different use cases and different opinions call for different approaches to statistical analysis of the performance results. For example, wrk2 accounts for a concept called Coordinated Omission.

### Which are currently supported?

`fortio` - Fortio load testing library, command line tool, advanced echo server and web UI in go (golang). Allows to specify a set query-per-second load and record latency histograms and other useful stats.
`wrk2` - A constant throughput, correct latency recording variant of wrk.
`nighthawk` - Enables users to run distributed performance tests to better mimic real-world, distributed systems scenarios.

<div>&nbsp;</div>

## Join the Community!

<a name="contributing"></a><a name="community"></a>
Our projects are community-built and welcome collaboration. 👍 Be sure to see the <a href="https://khulnasoft.com/community/handbook">Khulnasoft Community Welcome Guide</a> for a tour of resources available to you and jump into our <a href="https://slack.khulnasoft.com">Slack</a>!

<p style="clear:both;">
<a href ="https://khulnasoft.com/community/meshmates"><img alt="MeshMates" src=".github/readme/images/Khulnasoft-Community-Sign_square.png" style="margin-right:10px; margin-bottom:7px;" width="28%" align="left" /></a>
<h3>Find your MeshMate</h3>

<p>MeshMates are experienced Khulnasoft community members, who will help you learn your way around, discover live projects and expand your community network. 
Become a <b>Meshtee</b> today!</p>

Find out more on the <a href="https://khulnasoft.com/community">Khulnasoft community</a>. <br />
<br /><br /><br /><br />
</p>

<div>&nbsp;</div>

<a href="https://slack.meshplay.khulnasoft.com">

<picture align="right">
  <source media="(prefers-color-scheme: dark)" srcset=".github/readme/images//slack-dark-128.png"  width="110px" align="right" style="margin-left:10px;margin-top:10px;">
  <source media="(prefers-color-scheme: light)" srcset=".github/readme/images//slack-128.png" width="110px" align="right" style="margin-left:10px;padding-top:5px;">
  <img alt="Shows an illustrated light mode meshplay logo in light color mode and a dark mode meshplay logo dark color mode." src=".github/readme/images//slack-128.png" width="110px" align="right" style="margin-left:10px;padding-top:13px;">
</picture>
</a>

<a href="https://meshplay.khulnasoft.com/community"><img alt="Khulnasoft Cloud Native Community" src=".github/readme/images//community.svg" style="margin-right:8px;padding-top:5px;" width="140px" align="left" /></a>

<p>
✔️ <em><strong>Join</strong></em> any or all of the weekly meetings on <a href="https://calendar.google.com/calendar/b/1?cid=bGF5ZXI1LmlvX2VoMmFhOWRwZjFnNDBlbHZvYzc2MmpucGhzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">community calendar</a>.<br />
✔️ <em><strong>Watch</strong></em> community <a href="https://www.youtube.com/playlist?list=PL3A-A6hPO2IMPPqVjuzgqNU5xwnFFn3n0">meeting recordings</a>.<br />
✔️ <em><strong>Access</strong></em> the <a href="https://drive.google.com/drive/u/4/folders/0ABH8aabN4WAKUk9PVA">Community Drive</a> by completing a community <a href="https://khulnasoft.com/newcomer">Member Form</a>.<br />
✔️ <em><strong>Discuss</strong></em> in the <a href="https://discuss.khulnasoft.com/">Community Forum</a>.<br />
</p>
<p align="center">
<i>Not sure where to start?</i> Grab an open issue with the <a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Akhulnasoft+org%3Ameshplay+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22+">help-wanted label</a>.
</p>
