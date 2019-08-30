<!DOCTYPE html>
{% set version = next_env('version') %}

{# Language & Config #}
{% set title = __('title') !== 'title' && __('title') || config.title %}
{% set subtitle = __('subtitle') !== 'subtitle' && __('subtitle') || config.subtitle %}
{% set author = __('author') !== 'author' && __('author') || config.author %}
{% set description = __('description') !== 'description' && __('description') || config.description %}

{% set html_class = 'theme-next ' + theme.scheme %}
{% if theme.motion.enable %}
  {% set html_class = html_class + ' use-motion' %}
{% endif %}
<html class="{{ html_class | lower }}" lang="{{ config.language }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Resume</title>
  {% include '_third-party/analytics/index.swig' %}
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@3.0.1/github-markdown.min.css">
  <link rel="stylesheet" href="/assets/css/simple.css">
</head>
<body>
  <div class="no-print to-home">
    <a href="/">返回首页</a>
  </div>
  <div id="simple-container" class="markdown-body">
    {% block content %}
      {{ page.content }}
    {% endblock %}
  </div>
</body>
</html>
