#[Raphael](http://raphaeljs.com/) javascript library

Raphael es una librería javascript que debería simplificar el trabajo con Scalable Vector Graphics (SVG) en la web.
Si se quiere crear un determinado gráfico y rotarlo, por ejemplo, debiera ser alcanzado de manera simple con el uso de esta librería.

(*)Es recomendable una introducción en el tema de [Scalable Vector Graphics SVG](http://www.w3schools.com/html/html5_svg.asp).

##Uso en News At A Glance
###Situación planteada
Realizar una gráfica de torta con los porcentajes de las cantidades de goles hecho de las diferentes lineas de un equipo de fútbol (arquero, defensores, mediocampistas y delanteros).

###Solución usando el plugin
1. Descargar e incluir en el proyecto la librería [Raphael](https://raw.github.com/DmitryBaranovskiy/raphael/master/raphael-min.js).

2. Descargar e incluir en el proyecto el [plugin](https://raw.github.com/DmitryBaranovskiy/g.raphael/master/min/g.pie-min.js) para hacer gráfica de tortas basado en la librería Raphael.

3. Ya en el código relacionado a la app, definir en el archivo de [templates](https://github.com/leoslopez/Account-At-A-Glance-App/blob/master/AccountAtAGlance/NewsAtAGlance/docs/Jquery%20Templates.md) de equipos ( _Team.html_ ), en el template de tamaño medium, el siguiente div contendor de la gráfica: _&lt;div id="goalsPieSVG${GraphName}" class="goalsPieDiv" />_.

4. Luego, en la función _formatTeams_ del archivo _scene.tile.formatter.js_ se obtiene ese div: _var namePieDiv = 'goalsPieSVG' + tileDiv.data().tileData.GraphName;_

5. Por último, en esa misma función, _formatTeams_, se hace lo siguiente:

                    values.push(tileDiv.data().tileData.Goals_GK);
                    labels.push(tileDiv.data().tileData.Goals_GK + ' goles \r\n Arq.');

                    values.push(tileDiv.data().tileData.Goals_Def);
                    labels.push(tileDiv.data().tileData.Goals_Def + ' goles \r\n Def.');

                    values.push(tileDiv.data().tileData.Goals_Mid);
                    labels.push(tileDiv.data().tileData.Goals_Mid + ' goles \r\n Med.');

                    values.push(tileDiv.data().tileData.Goals_Forw);
                    labels.push(tileDiv.data().tileData.Goals_Forw + ' goles \r\n Del.');                    

Este código, previo a hacer la llamada a _pieChart_, define los valores a graficar (goles para las diferentes líneas del equipo) y los labels relacionados a estos valores (con el fin de que, al posicionarse con el mouse sobre cada sección de la torta, se de la descripción correspondiente).

/6. Por último, se invoca al metodo _pieChart_ con el ancho, alto, el array de values, el array de labels relacionados a estos values y el color definido para los labels: _raphael(namePieDiv, 300, 400).pieChart(130, tileDiv.data().scenes[sceneId].top + 80, 50, values, labels, "#fff");_.

###Conclusión
Sencilla y potente manera de graficar y manipular gráficas en la web. El uso dado dentro de _"News At A Glance"_ es mínimo; hay muchísimas cosas agradables e interesantes para llevar a cabo haciendo uso de la librería [Raphael](http://raphaeljs.com/), aprovechando la feature de SVG de HTML5. Además de muchos plugins que se basan en la misma.