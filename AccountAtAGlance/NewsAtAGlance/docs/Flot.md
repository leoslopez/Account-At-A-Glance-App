#[Flot](http://www.flotcharts.org/) (librería javascript para JQuery)
(*) En GitHub: https://github.com/flot/flot/blob/master/README.md

###Instalación 
[Descargar](http://www.flotcharts.org/) e incluir el archivo javascript después de la inclusión del archivo de JQuery.
_(Generalmente todos los browsers que soportan el tag de HTML5 canvas soportan el uso del plugin)_

###Uso básico
1. Crear un div contenedor para poner el gráfico _&lt;div id="placeholder">&lt;/div>_.

2. Se necesita definir el ancho y el alto del div porque sino la librería de ploteado no sabe manejar la escala del gráfico: _&lt;div id="placeholder" style="width:600px;height:300px">&lt;/div>_

3. Cuando el div esté listo en el DOM invocamos a la función **plot**: _$.plot($("#placeholder"), data, options);_

4. La **data** es un arreglo con las series a bindear y **options** es un objeto con diversos settings para customizar la gráfica resultante del ploteado.
Este es un ejemplo rápido que dibuja una línea desde el punto (0,0) a (1,1): _$.plot($("#placeholder"), [ [[0, 0], [1, 1]] ], { yaxis: { max: 1 } });_

(*)La función **plot** inmediatamente dibuja la gráfica y returna un objeto _plot_ con algunos métodos.

##Uso en News At A Glance
###Situación planteada
Graficar el progreso en la posición en el campeonato para un determinado equipo.

###Solución usando el plugin
1. En el archivo de Team.html, donde se encuentran los [templates](https://github.com/leoslopez/Account-At-A-Glance-App/blob/master/AccountAtAGlance/NewsAtAGlance/docs/Jquery%20Templates.md) definidos para los distintos tamaños de información a mostrar para un equipo, se definió el div contenedor del gráfico de la siguiente manera: _&lt;div id="progressPositionCanvas${GraphName}" class="canvas">&lt;/div> (esto para el template de tamaño large)

2. En la funcion _formatTeams_ del _scene.tile.formatter.js_ se obtiene el div contenedor: _var canvasDiv = $('#progressPositionCanvas' + 
tileDiv.data().tileData.GraphName);_

3. Luego se invoca a la función _renderCanvas_ pasandole este div previamente obtenido (más otros valores como la data a bindear, ancho, alto, etc): _renderCanvas(canvasDiv, width, height, json.AltColor, json, json.PositionProgress);_

4. Dentro de _renderCanvas_ lo que hacemos es armar el arreglo de puntos a bindear (_points_), definimos un objeto chartOptions que son los settings para customizar la gráfica: 

                _var chartOptions = {
                series: {
                    lines: { show: true, fill: true },
                    points: { show: true, radius: 10 }
                },

                grid: { hoverable: true, autoHighlight: true },
                legend: { position: 'se' },

                // Explaination for tickFormatter definition: Max value on axis Y is replaced by custom string: 'Pos.'. The same to the axis X.
                yaxis: { max: maxY, min: 1, tickFormatter: function (val, axis) { return val < axis.max ? val.toFixed(0) : "Pos."; } },
                xaxis: { max: maxX, min: 1, tickFormatter: function (val, axis) { return val < axis.max ? val.toFixed(0) : "Fecha"; } }
            };_
Se puede notar como se define el máximo y mínimo para el eje X e Y. Se defina la ubicación de la leyenda sobre la gráfica. Se indica que se haga highlight automático cuando se pasa el mouse sobre la gráfica. Se define, también, para las series el tamaño de los puntos y el formato de las líneas. Y se pueden definir varias opciones más.

5. Por ultimo invocamos a **plot** para dibujar la gráfica con los datos y las opciones que definimos: $.plot(canvasDiv, chartOptions);

###Conclusión
Muy sencilla manera de aprovechar la característica canvas de HTML5 para construir gráficas agradables y con muchas opciones más de las aquí explicadas.
