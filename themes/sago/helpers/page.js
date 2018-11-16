/**
 * Helper functions for page/post.
 *
 * @example
 *     <%- is_categories(page) %>
 *     <%- is_tags(page) %>
 *     <%- page_title(page) %>
 *     <%- meta(post) %>
 *     <%- has_thumbnail(post) %>
 *     <%- get_thumbnail(post) %>
 */
module.exports = function (hexo) {

  function readProperty(object, path) {
    const paths = path.split('.');
    for (let path of paths) {
      if (typeof (object) === 'undefined' || object === null || !object.hasOwnProperty(path)) {
        return null;
      }
      object = object[path];
    }
    return object;
  }

  function trim(str) {
    return str.trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');
  }

  function split(str, sep) {
    var result = [];
    var matched = null;
    while (matched = sep.exec(str)) {
      result.push(matched[0]);
    }
    return result;
  }

  hexo.extend.helper.register('is_categories', function (page = null) {
    return (page === null ? this.page : page).__categories;
  });

  hexo.extend.helper.register('has_config', function (configName, excludePage = false) {
    const readProperty = hexo.extend.helper.get('get_config').bind(this);
    return readProperty(configName, null, excludePage) != null;
  });

  hexo.extend.helper.register('is_tags', function (page = null) {
    return (page === null ? this.page : page).__tags;
  });

  hexo.extend.helper.register('get_config', function (configName, defaultValue = undefined, excludePage = false) {
    const value = readProperty(Object.assign({}, this.config, hexo.theme.config,
      !excludePage ? this.page : {}), configName);
    if (value === null) {
      if (typeof (defaultValue) !== 'undefined') {
        return defaultValue;
      } else {
        const property = readProperty(specs, configName);
        return property === null ? null : property[descriptors.defaultValue];
      }
    }
    return value;
  });

  /**
   * Generate html head title based on page type
   */
  hexo.extend.helper.register('page_title', function (page = null) {
    page = page === null ? this.page : page;
    let title = page.title;

    if (this.is_archive()) {
      title = this._p('common.archive', Infinity);
      if (this.is_month()) {
        title += ': ' + page.year + '/' + page.month;
      } else if (this.is_year()) {
        title += ': ' + page.year;
      }
    } else if (this.is_category()) {
      title = this._p('common.category', 1) + ': ' + page.category;
    } else if (this.is_tag()) {
      title = this._p('common.tag', 1) + ': ' + page.tag;
    } else if (this.is_categories()) {
      title = this._p('common.category', Infinity);
    } else if (this.is_tags()) {
      title = this._p('common.tag', Infinity);
    }

    const siteTitle = hexo.extend.helper.get('get_config').bind(this)('title', '', true);
    return [title, siteTitle].filter(str => typeof (str) !== 'undefined' && str.trim() !== '').join(' - ');
  });

  hexo.extend.helper.register('meta', function (post) {
    var metas = post.meta || [];
    var output = '';
    var metaDOMArray = metas.map(function (meta) {
      var entities = split(meta, /(?:[^\\;]+|\\.)+/g);
      var entityArray = entities.map(function (entity) {
        var keyValue = split(entity, /(?:[^\\=]+|\\.)+/g);
        if (keyValue.length < 2) {
          return null;
        }
        var key = trim(keyValue[0]);
        var value = trim(keyValue[1]);
        return key + '="' + value + '"';
      }).filter(function (entity) {
        return entity;
      });
      return '<meta ' + entityArray.join(' ') + ' />';
    });
    return metaDOMArray.join('\n');
  });

  hexo.extend.helper.register('has_thumbnail', function (post) {
    const getConfig = hexo.extend.helper.get('get_config').bind(this);
    const allowThumbnail = getConfig('article.thumbnail', true);
    if (!allowThumbnail) {
      return false;
    }
    return post.hasOwnProperty('thumbnail') && post.thumbnail;
  });

  hexo.extend.helper.register('get_thumbnail', function (post) {
    const hasThumbnail = hexo.extend.helper.get('has_thumbnail').bind(this)(post);
    return this.url_for(hasThumbnail ? post.thumbnail : 'images/thumbnail.svg');
  });


  hexo.extend.helper.register('is_same_link', function (a, b) {
    function santize(url) {
      let paths = url.replace(/(^\w+:|^)\/\//, '').split('#')[0].split('/').filter(p => p.trim() !== '');
      if (paths.length > 0 && paths[paths.length - 1].trim() === 'index.html') {
        paths = paths.slice(0, paths.length - 1)
      }
      return paths.join('/');
    }
    return santize(this.url_for(a)) == santize(this.url_for(b));
  });

  hexo.extend.helper.register('post_count', function () {
    return this.site.posts.length;
  });

  hexo.extend.helper.register('category_count', function () {
    return this.site.categories.filter(category => category.length).length;
  });

  hexo.extend.helper.register('tag_count', function () {
    return this.site.tags.filter(tag => tag.length).length;
  });

  /**
   * Export moment.duration
   */
  hexo.extend.helper.register('duration', function () {
    return moment.duration.apply(moment, arguments);
  });

  /**
   * Get the word count of a paragraph.
   */
  hexo.extend.helper.register('word_count', function (content) {
    content = content.replace(/<\/?[a-z][^>]*>/gi, '');
    content = content.trim();
    return content ? (content.match(/[\u00ff-\uffff]|[a-zA-Z]+/g) || []).length : 0;
  });
}