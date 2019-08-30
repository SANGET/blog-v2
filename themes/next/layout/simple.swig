<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Simple</title>
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
