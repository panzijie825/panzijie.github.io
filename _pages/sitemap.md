---
layout: archive
title: "<i class='fas fa-sitemap'></i> Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

## Main Pages

* [Home]({{ base_path }}/)
* [Publications]({{ base_path }}/publications/)
* [CV]({{ base_path }}/cv/)
* [Talks]({{ base_path }}/talks/)
* [Teaching]({{ base_path }}/teaching/)
* [Guide]({{ base_path }}/guide/)

## Recent Publications

{% for post in site.publications reversed %}
{% if post.path contains "ts-rag" or post.path contains "multi-modal" %}
* {{ post.title }} - *{{ post.venue }}*
{% endif %}
{% endfor %}

## Recent Talks

{% for post in site.talks reversed limit:5 %}
{% if post.title %}
* {{ post.title }}
{% endif %}
{% endfor %}

## Recent Teaching

{% for post in site.teaching reversed limit:5 %}
{% if post.title %}
* {{ post.title }}
{% endif %}
{% endfor %}
