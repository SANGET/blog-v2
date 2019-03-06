{% if theme.exturl %}
  <script type="text/javascript" src="{{ url_for(theme.js) }}/src/exturl.js?v={{ theme.version }}"></script>
{% endif %}

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125030746-1"></script>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css" integrity="sha256-3YM6A3pH4QFCl9WbSU8oXF5N6W/2ylvW0o2g+Z6TmLQ=" crossorigin="anonymous" />
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125030746-1');
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/photoset-grid/1.0.1/jquery.photoset-grid.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.6.4/jquery.colorbox-min.js"></script>
<script>
  (function ($) {
  	$('.photoset-grid-lightbox').photosetGrid({
      width: '100%',
    	// gutter: '5px',
    	highresLinks: true,
    	lowresWidth: 300,
    	rel: 'gallery-01',
    	borderActive: true,
    	borderWidth: '3px',
    	borderColor: '#000000',
    	borderRadius: '3px',
    	borderRemoveDouble: false,

    	onInit: function(){},
    	onComplete: function(){

        console.log('asd')

    		$('.photoset-grid-lightbox').css({
    			'visibility': 'visible'
    		});

        // $('.photoset-grid-lightbox').attr('style', '');
        // $('.photoset-grid-lightbox a').colorbox({
        //   photo: true,
        //   scalePhotos: true,
        //   maxHeight:'90%',
        //   maxWidth:'90%'
        // });
    	}
    });
  })(jQuery);
</script>
