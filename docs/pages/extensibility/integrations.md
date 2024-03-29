---
layout: enhanced
title: "Extensibility: Meshplay Integrations"
permalink: extensibility/integrations
type: Extensibility
abstract: 'Meshplay architecture is extensible. Meshplay provides several extension points for working with different cloud native projects via <a href="extensibility#adapters">adapters</a>, <a href="extensibility#load-generators">load generators</a> and <a href="extensibility/providers">providers</a>.'
language: en
#redirect_from: extensibility
---

Meshplay provides 220+ built-in integrations which refer to the supported connections and interactions between Meshplay and various cloud native platforms, tools, and technologies. Meshplay's approach is Kubernetes-native which means you can easily incorporate Meshplay into your existing workflow without additional setup or integration effort. 

{% assign sorted_index = site.pages | sort: "name" | alphabetical %}
{% assign total = sorted_index | size %}
{% capture totalled %}

### All Integrations by Name ({{ total }})

{% endcapture %}
{{totalled}}

Optionally, you can [navigate all integrations visually](https://khulnasoft.com/integrations).

<!--
UNCOMMENT WHEN INTEGRATIONS COLLECTION IS READY
### All Integrations by Name ({{ site.integrations.size }}) -->

<ul>
    {% for item in sorted_index %}
    {% if item.type=="installation" and item.category=="integrations" and item.list=="include" and item.language == "en" -%}
      <li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.title }}</a>
      {% if item.abstract %}
        -  {{ item.abstract }}
      {% endif %}
      </li>
      {% endif %}
    {% endfor %}
</ul>
