# jQuery Plugin [jquery-tmpl](http://api.jquery.com/category/plugins/templates/)

    (*)Aclaración

    Es conveniente aclarar que el equipo de jQuery ha decidido no 
    hacer uso de este plugin ya que no está siendo activamente desarrollado 
    o mantenido desde hace un tiempo ya.
    Cuando se comenzó a utilizar en el self training no se tenía conocimiento
    de esto pero de todos modos, para el uso que se le dió, fue útil y 
    funcionó correctamente.

##Uso en News At A Glance
###Situación planteada

Se necesitaba poder contar con templates para los diferentes tamaños de
'tiles' que debía mostrar, y manejar, la aplicación (small, medium y large)
para los diferentes tipos de información mostrada (noticias, equipos y
videos publicitarios)
    
###Resolución usando _jquery-tmpl_ plugin

1. [Descargar](http://ajax.aspnetcdn.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js) e incluir en el proyecto el plugin: _&lt;script src="@Url.Content("~/Scripts/Libs/jQuery.tmpl.min.js")" type="text/javascript">&lt;/script>_

2. Agregar un archivo html para cada tipo de información a mostrar (noticias, equipos, videos). En nuestro caso, para las noticias, se agregó News.html.

3. Dentro de cada archivo incluir los 3 templates, 1 para cada tamaño de tile considerado: small, medium y large. El tag principal del template debe tener la siguiente forma: _&lt;script id="NewsTemplate\_Small" type="text/x-jquery-tmpl">_ (template para noticia tamaño small).

4. Ahora, usando _$( "#myTemplate" ).tmpl( [data] )_ se indica que el **template** correspondiente se bindeará con determinada **data** (puede ser algún JavaScript type, incluyendo Array u Object).

    En la app: 

    var template = $('#' + tileName + 'Template_' + size); **(se obtiene el template)**

    template.tmpl(data); **(se bindea la data correspondiente)**

5. Para identificar los valores a tener en cuenta al momento de renderizar la **data** sobre el **template** se debe considerar la siguiente sintaxis en la definición del template: _&lt;span id="spNewsSource">${Source}_&lt;/span>. 
Con el template tag: "${Source}" se indica que la **data** pasada por parametro tendrá una property llamada "Source" con un value que será renderizado sobre el _&lt;span>_ en cuestión.
**Se puede bindear de esta forma ya sea el _value_ de un span como la property _ref_ en un anchor _&lt;a id="lnkNews" href="${Url}"_, el _source_ de una imagen, los ids de elementos html, etc.**
Ver documentación para los varios template tags: [${}](http://api.jquery.com/template-tag-equal), [{{each}}](http://api.jquery.com/template-tag-each), [{{if}}](http://api.jquery.com/template-tag-if), [{{else}}](http://api.jquery.com/template-tag-else), [{{html}}](http://api.jquery.com/template-tag-html), [{{tmpl}}](http://api.jquery.com/template-tag-tmpl) [{{wrap}}](http://api.jquery.com/template-tag-wrap).

6. El método _$.tmpl()_ retorna una  _jQuery collection_ y es diseñado para encadenar con .appendTo, .prependTo, .insertAfter or .insertBefore, como en este ejemplo: _$.tmpl( "&lt;li>${Name}&lt;/li>", { "Name" : "John Doe" }).appendTo( "#target" )_.
**En la app**, el valor retornado por este método , se utilizó de la siguiente manera: _tileDiv.html(template)_ (Para el div del tile en cuestión se define la property **html** usando el **template**).

###Conclusión
El plugin permitió una gran comodidad y facilidad para mostrar, bindear y manejar templates previamente definidos sobre los cuales debía mostrarse diferente información, dependiendo del tamaño del template, de manera dinámica (en el momento de la obtención de la noticias).