# HTML5 Boilerplate

HTML5 Boilerplate nos ofrece simplificar el proceso de construcción de sitios web en HTML5 y para ello nos permite descargar una especie de template o plantilla que puede ayudar no solo a los desarrolladores web novatos, sino también a los más experimentados.

Con H5BP podemos obtener código del mejor (está desarrollado por gurues como Paul Irish) para: normalización para todos los navegadores (cross-browsing), optimización de performance, optmizaciones para navegadores en dispositivos móviles, clases específicas para IE, clases “no-js” y “js” para estilos basados en capacidades del navegador, un archivo .htaccess que permite el uso correcto de características HTML5 y carga de página más rápida, y mucho más; todo hecho teniendo en cuenta las mejores prácticas de hoy en día en el desarrollo web.

Incluso aunque no lo vayas a usar, puede ser algo muy instructivo el solo hecho de ver cómo está desarrollado.

Al visitar el [sitio](http://html5boilerplate.com/) tienes 3 opciones: descargar la versión comentada y explicada, descargar la versión sin comentarios o la opción de personalizar lo que descargues.

**Para "News At A Glance" tome en cuenta las siguientes consideraciones:** (Para mayor detalle referirse a [HTML5 Boilerplate documentation](https://github.com/h5bp/html5-boilerplate/blob/master/doc/TOC.md))

* El orden de los meta tags y &lt;title>:

	> Como se recomienda en las especificaciones de HTML5, se debe agregar la 
	declaración de "charset" tempranamente (antes de cualquier ASCII) para evitar un potencial problema de seguridad relacionado al encoding en IE.

	> El charset debería, además, aparecer antes del &lt;title> para evitar 
		un potencial [XSS vectors]( http://code.google.com/p/doctype-mirror/wiki/ArticleUtf7 ).

	> El meta tag que define la comptibilidad necesita estar antes que todos 
		los elementos (&lt;!DOCTYPE html>).

* X-UA-Compatible

	> Esto asegura que la última version de IE es usada en versiones de IE que contienen multiples motores de renderizado. Aun, si se estuviese usando IE8 o IE9, es posible que ellos no esten usando el último motor de renderizado que el browser contiene.
		Entonces, para solucionar esto, se usa: <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	> El meta tag le dice al motor de renderizado de IE 2 cosas:
		 1) Debería usar la última version (edge) del motor de renderizado.
		 2) Si está instalado debería usar el motor de renderizado Google Chrome Frame.

	> Este meta tag asegura que cualquiera que "browsee" tu sitio será "recibido" con la mejor expriencia de usuario posible que su browser pueda ofrecer.

* Modernizr

	> HTML5 Boilerplate usa un build customizado de Modernizr.

	> Modernizr es una librería de Javascript la cual nos ofrece la posibilidad de detectar el soporte que tiene el actual navegador para la especificación de HTML5 y además nos permite crear un estilo css en caso de que la especificación de css3 no funcione. Y para IE permite dar estilo a las nuevas etiquetas de HTML5.

	> En general, con el fin de minimizar el tiempo de carga de la pagina, es mejor llamar a cualquier js al final de la pagina. Pero, dicho esto, el script de Modernizr necesita correr antes que el browser comienze a renderizar la página, por lo que los browsers que carecen de apoyo para algunos de los nuevos elementos de HTML5 sean capaces de manejarlos adecuadamente. Por lo tanto, el script Modernizr es el único js sincrono cargado al comienzo del documento.
		
* Google CDN for jQuery

	> La version de Google CDN de la librería de JQuery es referenciada hacia el final de la pagina usando un [protocolo independiente](https://github.com/h5bp/html5-boilerplate/blob/master/doc/faq.md).

	> Una refencia a una librería local de JQuery es incluida para los raros casos en que la version de CDN no se encuentre disponible, y para facilitar el desarrollo off-line.
		
		