/* Resoluciones paso a paso (expandidas y detalladas). Resultados verificados. */
const SOLUCIONES = [
 {
  "id": "combi-p1",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 1",
  "titulo": "Strings con A, B, C, D sin repetir",
  "enunciado": "Escribir todos los strings distintos que se pueden generar con las letras A, B, C, D sin repetirlas. ¿Qué definición de combinatoria representa ese número? ¿Cuál es el número para n letras?",
  "idea": "Reconocés este tipo de ejercicio porque te piden <b>ordenar TODOS los elementos de un conjunto</b> sin dejar ninguno afuera y sin repetir. La clave está en tres señales: <b>importa el orden</b> (el string ABCD es distinto de BACD aunque tengan las mismas letras), <b>no hay repetición</b> (cada letra se usa una sola vez) y <b>se usan todas</b> las letras disponibles. Cuando aparecen esas tres condiciones juntas, es una <b>permutación</b>. El concepto de fondo es que estás contando de cuántas maneras se puede <b>reordenar</b> un mismo conjunto de objetos.",
  "pasos": [
   "Identificá el tipo de problema con las 4 preguntas de combinatoria. Primero: <b>¿importa el orden?</b> Sí, porque ABCD y BACD se consideran strings distintos.",
   "Segundo: <b>¿hay repetición?</b> No, el enunciado dice explícitamente \"sin repetirlas\", así que cada letra aparece una sola vez.",
   "Tercero: <b>¿uso todas las letras o solo k de las n?</b> Uso <b>todas</b> (las 4). Con orden importa + sin repetición + uso todas → estás ante una <b>permutación</b> de 4 elementos.",
   "Recordá la fórmula de permutaciones: <code>P(n) = n!</code>, donde <code>n!</code> (factorial) es el producto de todos los enteros desde n hasta 1. El porqué: para la 1ª posición tenés n opciones, para la 2ª quedan n−1, para la 3ª quedan n−2, y así hasta 1. Multiplicás todo → <code>n·(n−1)·(n−2)·…·1</code>.",
   "Reemplazá n=4 y calculá la aritmética paso a paso: <code>P(4) = 4! = 4·3·2·1</code>. Hacelo por partes: <code>4·3 = 12</code>, luego <code>12·2 = 24</code>, luego <code>24·1 = 24</code>.",
   "Concluí el número: hay <code>24</code> strings distintos.",
   "Para listarlos SIN saltear ninguno, usá un método sistemático: fijá la 1ª letra y permutá las 3 restantes. Empezando con A: ABCD, ABDC, ACBD, ACDB, ADBC, ADCB → son 6 casos (que es 3! = 6, las permutaciones de las 3 letras que sobran).",
   "Repetí lo mismo fijando B, luego C, luego D como primera letra: cada una da otros 6 strings. Total: <code>4 grupos · 6 = 24</code>, que coincide con la fórmula.",
   "Generalizá para la pregunta final: para n letras distintas usadas todas sin repetir, el número es siempre <code>n!</code>."
  ],
  "resultado": "<b>24</b> strings. Para n letras: <code>n!</code>.",
  "verificar": "Confirmá que 24 = 4!, y notá que el listado por grupos (4 grupos de 6) da el mismo número que la fórmula: son dos caminos independientes que coinciden. Con la Calculadora de combinatoria: P(n) con n=4 da 24. <b>Error típico a evitar:</b> no confundir permutación con combinación: acá el orden SÍ importa, así que no hay que dividir por k! como en las combinaciones."
 },
 {
  "id": "combi-p2",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 2",
  "titulo": "Tuplas de 3 letras de {A, B, C, D}",
  "enunciado": "Encontrar las tuplas de 3 letras formadas por las letras {A, B, C, D}. ¿Cuál es el número de tuplas? ¿Qué definición representa?",
  "idea": "Reconocés una <b>variación</b> cuando importa el orden y no hay repetición, pero a diferencia de la permutación <b>no usás todos los elementos</b>: elegís solo k de los n disponibles. Acá la palabra \"tupla\" ya te avisa que el orden importa (una tupla es una secuencia ordenada), no se repiten letras, y armás secuencias de <b>3 de las 4</b> letras. El concepto de fondo: una variación cuenta las maneras de <b>elegir y ordenar</b> k objetos de un total de n; es una permutación \"parcial\".",
  "pasos": [
   "Aplicá las preguntas de combinatoria. <b>¿Importa el orden?</b> Sí: una tupla como (A,B,C) es distinta de (B,A,C).",
   "<b>¿Hay repetición?</b> No: dentro de cada tupla no se repite ninguna letra.",
   "<b>¿Cuántas uso?</b> 3 de las 4 disponibles. Orden importa + sin repetición + uso solo k de n → es una <b>variación</b> sin repetición, que se nota <code>V(4,3)</code> (o V(n,k) con n=4, k=3).",
   "Recordá la fórmula: <code>V(n,k) = n!/(n−k)!</code>. El porqué: para la 1ª posición tenés n opciones, para la 2ª quedan n−1, …, hasta la k-ésima posición; el cociente <code>n!/(n−k)!</code> justamente \"corta\" el factorial y deja solo los k primeros factores.",
   "Reemplazá n=4, k=3: <code>V(4,3) = 4!/(4−3)! = 4!/1!</code>. Como <code>1! = 1</code>, queda <code>4!/1 = 4·3·2·1</code>… pero ojo: en realidad el cociente deja solo los primeros k=3 factores.",
   "Calculá directamente los 3 factores decrecientes desde n: <code>4·3·2 = 24</code>. Verificá con la fórmula: <code>4! = 24</code> y <code>1! = 1</code>, entonces <code>24/1 = 24</code>. Coincide.",
   "Concluí: hay <code>24</code> tuplas distintas de 3 letras."
  ],
  "resultado": "<b>24</b> tuplas (variación sin repetición).",
  "verificar": "V(4,3) en la Calculadora de combinatoria da 24. <b>Nota:</b> es una coincidencia que V(4,3) y P(4) den ambos 24 (porque dividir por 1! no cambia nada); no generalices eso. <b>Error típico:</b> usar C(4,3) en lugar de V(4,3) — la combinación daría 4, pero acá el orden importa, por eso es variación."
 },
 {
  "id": "combi-p3",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 3",
  "titulo": "Elegir libros de 3 materias",
  "enunciado": "Se tienen 6 libros de Matemática, 5 de Programación y 8 de Orientación a Objetos. ¿De cuántas formas distintas podemos comprar 3 de Matemática, 2 de Programación y 4 de OO?",
  "idea": "Reconocés una <b>combinación</b> cuando elegís un subconjunto y <b>no importa el orden</b> en que lo elegís (comprar el libro X y después el Y es lo mismo que comprar Y y después X). Además, este ejercicio tiene <b>varias etapas independientes</b> (una por materia), y cuando las decisiones son independientes se <b>multiplican</b> los resultados: eso es el <b>principio de multiplicación</b>. El concepto de fondo: contás cada elección por separado con combinaciones y después combinás las etapas multiplicando.",
  "pasos": [
   "Reconocé que dentro de cada materia <b>no importa el orden</b> de los libros elegidos → cada etapa es una <b>combinación</b> <code>C(n,k)</code>, que cuenta subconjuntos de k elementos tomados de n.",
   "Recordá la fórmula: <code>C(n,k) = n!/(k!·(n−k)!)</code>. El porqué del k! en el denominador: partís de las variaciones V(n,k) (que ordenan) y dividís por k! porque cada subconjunto se puede ordenar de k! maneras que acá cuentan como una sola.",
   "Etapa Matemática: elegir 3 de 6 → <code>C(6,3) = 6!/(3!·3!)</code>. Calculá: <code>6·5·4 = 120</code> arriba (los 3 factores) y <code>3! = 6</code> abajo → <code>120/6 = 20</code>.",
   "Etapa Programación: elegir 2 de 5 → <code>C(5,2) = 5!/(2!·3!)</code>. Calculá: <code>5·4 = 20</code> arriba y <code>2! = 2</code> abajo → <code>20/2 = 10</code>.",
   "Etapa Orientación a Objetos: elegir 4 de 8 → <code>C(8,4) = 8!/(4!·4!)</code>. Calculá: <code>8·7·6·5 = 1680</code> arriba y <code>4! = 24</code> abajo → <code>1680/24 = 70</code>.",
   "Aplicá el principio de multiplicación: como las 3 elecciones son independientes (elegir los de Mate no afecta a los de Programación), multiplicá los tres resultados: <code>20 · 10 · 70</code>.",
   "Calculá el producto por partes: <code>20 · 10 = 200</code>, luego <code>200 · 70 = 14 000</code>."
  ],
  "resultado": "<b>14 000</b> formas.",
  "verificar": "Recalculá cada combinación en la calculadora: C(6,3)=20, C(5,2)=10, C(8,4)=70, y confirmá 20·10·70 = 14000. <b>Error típico a evitar:</b> sumar las etapas en vez de multiplicarlas. Se suma cuando las opciones son EXCLUYENTES (\"o esto o lo otro\"); se multiplica cuando son etapas que ocurren JUNTAS (\"esto Y esto Y esto\"), como acá."
 },
 {
  "id": "combi-p4",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 4",
  "titulo": "Menú con diagrama de árbol",
  "enunciado": "Un menú combina: entrada (empanada, matambre); plato principal (ravioles, carne al horno, milanesa); postre (flan, duraznos). Encontrar mediante un diagrama de árbol los menús posibles.",
  "idea": "Reconocés el <b>principio de multiplicación</b> cuando armás algo <b>por etapas sucesivas</b> y en cada etapa elegís una opción de un grupo, independientemente de lo que elegiste antes. Acá el menú se arma eligiendo una entrada, luego un principal, luego un postre: tres decisiones encadenadas. El concepto de fondo: el total de combinaciones posibles es el <b>producto</b> de la cantidad de opciones de cada etapa, y el diagrama de árbol lo hace visible porque cada nivel de ramas multiplica los caminos.",
  "pasos": [
   "Contá las opciones de cada etapa por separado. <b>Entrada:</b> empanada o matambre → 2 opciones.",
   "<b>Plato principal:</b> ravioles, carne al horno o milanesa → 3 opciones.",
   "<b>Postre:</b> flan o duraznos → 2 opciones.",
   "Aplicá el principio de multiplicación: como cada etapa es independiente (elegir la entrada no limita el principal ni el postre), el total de menús es el producto de las opciones: <code>2 · 3 · 2</code>.",
   "Calculá por partes: <code>2 · 3 = 6</code> (combinaciones de entrada+principal), luego <code>6 · 2 = 12</code> (agregando el postre).",
   "Interpretá el diagrama de árbol para confirmar: del nodo inicial salen <b>2 ramas</b> (una por entrada); de cada una de esas 2 salen <b>3 ramas</b> (los principales) → ya hay 2·3 = 6 caminos hasta ese nivel; de cada uno de esos 6 salen <b>2 ramas</b> (los postres).",
   "Las <b>hojas finales</b> del árbol (los caminos completos entrada→principal→postre) son <code>2·3·2 = 12</code>: contarlas una por una da 12 menús distintos."
  ],
  "resultado": "<b>12</b> menús distintos.",
  "verificar": "Contá las hojas del árbol: tienen que ser 12. <b>Chequeo de consistencia:</b> el número de hojas siempre coincide con el producto de las ramas de cada nivel; si contás las hojas y no te da 12, probablemente te olvidaste de expandir alguna rama del árbol."
 },
 {
  "id": "combi-p5",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 5",
  "titulo": "Rey Arturo y 7 caballeros en mesa redonda",
  "enunciado": "¿De cuántas formas distintas se pueden sentar el Rey Arturo y los 7 caballeros en la mesa redonda?",
  "idea": "Reconocés una <b>permutación circular</b> cuando hay que ordenar objetos <b>alrededor de un círculo</b> (una mesa redonda, una ronda) y no existe un asiento \"primero\" ni \"último\". La señal clave: si todos se corren un lugar hacia el mismo lado, el ordenamiento relativo <b>no cambió</b> (cada persona sigue teniendo a los mismos vecinos), así que esas rotaciones cuentan como una sola disposición. El concepto de fondo: tomás las n! permutaciones lineales y las dividís por las n rotaciones equivalentes, lo que da <code>(n−1)!</code>.",
  "pasos": [
   "Contá cuántas personas hay que ubicar: Arturo + 7 caballeros = <b>8 personas</b> (n=8).",
   "Reconocé que es una mesa <b>redonda</b>: no hay cabecera ni un asiento distinguido, así que lo que importa es el orden <b>relativo</b> (quién queda al lado de quién), no la posición absoluta.",
   "Entendé por qué no es n!: en una fila, las 8! ordenaciones son todas distintas; pero en un círculo, rotar a las 8 personas un lugar (y hay 8 rotaciones posibles) produce la MISMA disposición relativa. Entonces cada disposición circular fue contada 8 veces en el 8!.",
   "Aplicá la fórmula de permutación circular: <code>PC(n) = n!/n = (n−1)!</code>. El <code>/n</code> es justamente el dividir por las n rotaciones equivalentes.",
   "Reemplazá n=8: <code>PC(8) = (8−1)! = 7!</code>.",
   "Calculá <code>7!</code> por partes: <code>7·6 = 42</code>, <code>42·5 = 210</code>, <code>210·4 = 840</code>, <code>840·3 = 2520</code>, <code>2520·2 = 5040</code>, <code>5040·1 = 5040</code>.",
   "Concluí: hay <code>5040</code> formas distintas de sentarlos."
  ],
  "resultado": "<b>7! = 5040</b> formas.",
  "verificar": "En la calculadora, \"Circular (n−1)!\" con n=8 da 5040. <b>Error típico a evitar:</b> usar 8! = 40320 (permutación lineal). Eso contaría 8 veces cada disposición porque trataría las rotaciones como distintas; por eso se divide por n y queda (n−1)!."
 },
 {
  "id": "combi-p6",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 6",
  "titulo": "Diagrama de Venn: idiomas",
  "enunciado": "65 estudian francés, 45 alemán, 42 ruso, 20 francés y alemán, 25 francés y ruso, 15 alemán y ruso, y 8 los tres idiomas. ¿Cuántos estudian al menos un idioma?",
  "idea": "Reconocés un problema de <b>inclusión-exclusión</b> cuando te dan los tamaños de varios conjuntos que <b>se solapan</b> (comparten elementos) y te piden \"al menos uno\", que es el tamaño de la <b>unión</b>. La señal clave son los datos de intersecciones (\"francés y alemán\", \"los tres\"): si sumaras solo los individuales, contarías de más a quienes están en varios conjuntos. El concepto de fondo: sumás los individuales, restás las intersecciones dobles (que quedaron contadas dos veces) y volvés a sumar la triple (que se restó de más).",
  "pasos": [
   "Traducí el enunciado a conjuntos: F = francés (65), A = alemán (45), R = ruso (42). Dobles: |F∩A|=20, |F∩R|=25, |A∩R|=15. Triple: |F∩A∩R|=8. Te piden |F∪A∪R| (\"al menos un idioma\").",
   "Recordá la fórmula de inclusión-exclusión para 3 conjuntos: <code>|F∪A∪R| = (|F|+|A|+|R|) − (|F∩A|+|F∩R|+|A∩R|) + |F∩A∩R|</code>.",
   "Entendé el porqué de los signos: si sumás solo |F|+|A|+|R|, quien estudia 2 idiomas se contó 2 veces y quien estudia 3 se contó 3 veces. Al restar las dobles corregís los que están en 2, pero a los de 3 los restaste de más, por eso al final sumás la triple.",
   "Calculá la suma de individuales: <code>65+45+42 = 152</code>.",
   "Calculá la suma de dobles: <code>20+25+15 = 60</code>.",
   "Aplicá la fórmula: <code>152 − 60 + 8 = 100</code>.",
   "Verificalo llenando el Venn <b>desde el centro hacia afuera</b> (así no contás dos veces): el centro (los 3) = 8. Solo F∩A (sin R) = 20−8 = 12; solo F∩R = 25−8 = 17; solo A∩R = 15−8 = 7.",
   "Ahora las zonas de un solo idioma, restando todo lo que ya está adentro: solo F = 65−12−17−8 = 28; solo A = 45−12−7−8 = 18; solo R = 42−17−7−8 = 10.",
   "Sumá las 7 regiones disjuntas del Venn: <code>28+18+10+12+17+7+8 = 100</code>. Coincide con la fórmula."
  ],
  "resultado": "<b>100</b> estudiantes estudian al menos un idioma.",
  "verificar": "Ambos caminos (fórmula y llenado del Venn) dan 100: son verificaciones independientes. <b>Error típico a evitar:</b> restar directamente los datos de intersección \"tal cual\" sin acordarte de sumar la triple al final, o llenar el Venn de afuera hacia adentro (que lleva a contar dos veces). Siempre empezá el Venn por la intersección más chica (el centro)."
 },
 {
  "id": "combi-p7",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 7",
  "titulo": "Enteros de 1 a 600 no divisibles por 2, 3 ni 7",
  "enunciado": "Mediante un diagrama de Venn, ¿cuántos enteros entre 1 y 600 no son divisibles por 2, ni por 3, ni por 7?",
  "idea": "Reconocés que conviene contar por <b>complemento</b> cuando te piden los que \"NO\" cumplen varias condiciones: en vez de contar directamente los \"no divisibles\", es más fácil contar los que <b>sí</b> son divisibles por 2, 3 o 7 (la unión) y restarlos del total. Como los múltiplos se solapan (un número puede ser múltiplo de 2 y de 3 a la vez), la unión se calcula con <b>inclusión-exclusión</b>. El concepto de fondo: la cantidad de múltiplos de d entre 1 y N es <code>⌊N/d⌋</code> (parte entera), y para múltiplos comunes de dos números usás su producto (si son coprimos) o su mínimo común múltiplo.",
  "pasos": [
   "Planteá la estrategia del complemento: <code>(no divisibles por 2, 3 ni 7) = Total − (divisibles por 2, 3 o 7)</code>. El total es 600.",
   "Recordá que la cantidad de múltiplos de d en 1..N es <code>⌊N/d⌋</code> (cuántas veces entra d en N). Calculá los individuales: <code>⌊600/2⌋=300</code>, <code>⌊600/3⌋=200</code>, <code>⌊600/7⌋=85</code> (porque 7·85=595 ≤ 600 &lt; 602).",
   "Para las intersecciones, un número divisible por 2 y por 3 es divisible por su producto 6 (son coprimos), etc. Calculá: <code>⌊600/6⌋=100</code>, <code>⌊600/14⌋=42</code> (14=2·7), <code>⌊600/21⌋=28</code> (21=3·7).",
   "Para la triple, divisible por 2, 3 y 7 significa divisible por <code>2·3·7=42</code>: <code>⌊600/42⌋=14</code>.",
   "Aplicá inclusión-exclusión para la unión: <code>|div 2,3 o 7| = (300+200+85) − (100+42+28) + 14</code>.",
   "Resolvé cada paréntesis: individuales <code>300+200+85 = 585</code>; dobles <code>100+42+28 = 170</code>. Entonces <code>585 − 170 + 14 = 429</code>.",
   "Restá del total para obtener los que NO son divisibles: <code>600 − 429 = 171</code>."
  ],
  "resultado": "<b>171</b> enteros.",
  "verificar": "Contados uno por uno en 1..600, el resultado es 171. <b>Error típico a evitar:</b> para las intersecciones, usar la suma en vez del producto/mcm de los divisores (lo correcto para múltiplos comunes de a y b coprimos es dividir por a·b). Y no olvidar sumar la triple: sin ese +14 daría 415 y restarías mal."
 },
 {
  "id": "combi-p12",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 12",
  "titulo": "Bolsa con 8 galletitas de 4 gustos",
  "enunciado": "¿De cuántas formas se puede llenar una bolsa con 8 galletitas de chocolate, vainilla, miel y limón?",
  "idea": "Reconocés una <b>combinación con repetición</b> cuando <b>no importa el orden</b> (es una bolsa: solo importa cuántas de cada gusto, no en qué orden las metés) y <b>los tipos se pueden repetir</b> (podés llevar varias galletitas del mismo gusto). Es distinto de la combinación común porque ahí no se repetía. El concepto de fondo: estás repartiendo n objetos idénticos (las galletitas) entre m categorías (los gustos), y eso se cuenta con <code>CR(m,n) = C(m+n−1, n)</code>, que sale del truco de \"estrellas y barras\".",
  "pasos": [
   "Identificá que es una bolsa: <b>no importa el orden</b> en que están las galletitas, solo cuántas de cada gusto. Y como podés repetir gustos, es <b>combinación con repetición</b>.",
   "Identificá los datos: hay <b>m = 4 gustos</b> (chocolate, vainilla, miel, limón) y hay que elegir <b>n = 8 galletitas</b> en total.",
   "Recordá la fórmula: <code>CR(m,n) = C(m+n−1, n)</code>. La idea de \"estrellas y barras\": representás las 8 galletitas como estrellas y usás m−1 = 3 barras para separarlas en 4 grupos; el total de símbolos es 8+3 = 11 y elegís cuáles 8 son estrellas.",
   "Reemplazá m=4, n=8: <code>CR(4,8) = C(4+8−1, 8) = C(11, 8)</code>.",
   "Simplificá usando la propiedad de complementarios <code>C(n,k) = C(n, n−k)</code>: <code>C(11,8) = C(11, 11−8) = C(11,3)</code>. Conviene C(11,3) porque tiene menos factores.",
   "Calculá <code>C(11,3) = 11!/(3!·8!)</code>: arriba los 3 factores <code>11·10·9 = 990</code>, abajo <code>3! = 6</code> → <code>990/6 = 165</code>.",
   "Concluí: hay <code>165</code> formas de llenar la bolsa."
  ],
  "resultado": "<b>165</b> formas.",
  "verificar": "C(11,3) = 165 en la calculadora. <b>Error típico a evitar:</b> usar C(4,8) directamente (sin el m+n−1) o tratar de usar variaciones porque hay repetición. Recordá: repetición + no importa el orden = combinación CON repetición, y la fórmula agrega el término (m−1) de las barras."
 },
 {
  "id": "combi-cifras",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Final (modelo)",
  "titulo": "Números con los dígitos 1, 2, 3, 5, 8, 9",
  "enunciado": "Con los dígitos 1, 2, 3, 5, 8 y 9 sin repetirlos: ¿cuántos números de 4 cifras se pueden armar? ¿Y si se pudieran repetir? ¿Y de 3 cifras (sin repetir)?",
  "idea": "Reconocés que armar números es un problema de <b>variaciones</b> porque cada cifra ocupa una <b>posición ordenada</b> (el 12 no es lo mismo que el 21) y elegís k dígitos de los n disponibles. La distinción importante: <b>sin repetir</b> → variación V(n,k) = n!/(n−k)!; <b>con repetición</b> → variación con repetición VR(n,k) = nᵏ (porque cada posición vuelve a tener las n opciones). Un detalle a chequear siempre: si el 0 estuviera entre los dígitos, no podría ir en la primera cifra; acá <b>ninguno es 0</b> (son 1,2,3,5,8,9), así que no hay restricción y hay 6 dígitos libres para cualquier posición.",
  "pasos": [
   "Contá los dígitos disponibles: 1, 2, 3, 5, 8, 9 → son <b>n = 6</b> dígitos. Verificá que ninguno sea 0, así no hay que descontar casos que empiecen en 0.",
   "<b>Caso 4 cifras sin repetir:</b> importa el orden y no se repite → variación <code>V(6,4)</code>. Con la fórmula V(n,k) tomás los k=4 factores decrecientes desde n=6.",
   "Calculá <code>V(6,4) = 6·5·4·3</code>: <code>6·5 = 30</code>, <code>30·4 = 120</code>, <code>120·3 = 360</code>. → <b>360</b> números.",
   "<b>Caso 4 cifras con repetición:</b> ahora un dígito puede repetirse, así que cada una de las 4 posiciones tiene las 6 opciones disponibles → variación con repetición <code>VR(6,4) = 6⁴</code>.",
   "Calculá <code>6⁴</code>: <code>6·6 = 36</code>, <code>36·6 = 216</code>, <code>216·6 = 1296</code>. → <b>1296</b> números.",
   "<b>Caso 3 cifras sin repetir:</b> otra variación, ahora con k=3 → <code>V(6,3) = 6·5·4</code>.",
   "Calculá <code>6·5·4 = 120</code>. → <b>120</b> números.",
   "Resumí las tres respuestas: 360 (4 cifras sin repetir), 1296 (4 cifras con repetición) y 120 (3 cifras sin repetir)."
  ],
  "resultado": "<b>360</b> (4 cifras sin repetir), <b>1296</b> (con repetición), <b>120</b> (3 cifras sin repetir).",
  "verificar": "V(6,4)=360, 6⁴=1296, V(6,3)=120 en la calculadora. <b>Error típico a evitar:</b> restar los casos que empiezan en 0 — acá NO hace falta porque el 0 no está entre los dígitos. Si el enunciado incluyera el 0, la primera cifra tendría solo n−1 opciones y habría que ajustar."
 },
 {
  "id": "combi-mult10",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Final dic 2025",
  "titulo": "De 3 cifras (dígitos 1,2,3,5,8,9): ¿cuántos múltiplos de 10?",
  "enunciado": "De los números de 3 cifras armados con 1, 2, 3, 5, 8, 9 (sin repetir), ¿cuántos son múltiplos de 10?",
  "idea": "Reconocés este ejercicio como una \"trampa\" de <b>criterios de divisibilidad</b>: antes de ponerte a contar, chequeá si la condición es siquiera posible con los dígitos dados. El criterio clave: un número es <b>múltiplo de 10 si y solo si su última cifra es 0</b>. El concepto de fondo: no todo problema combinatorio tiene un número grande de soluciones; a veces la respuesta correcta es justificar que <b>no existe ningún caso</b> (el conjunto es vacío), y eso también vale como respuesta.",
  "pasos": [
   "Recordá el criterio de divisibilidad por 10: un número termina en 0 exactamente cuando es múltiplo de 10 (porque 10 = 2·5 y solo el 0 aporta ambos factores en la unidad).",
   "Deducí la condición necesaria: para que el número de 3 cifras sea múltiplo de 10, su <b>cifra de las unidades debe ser 0</b>.",
   "Revisá los dígitos disponibles: 1, 2, 3, 5, 8, 9. Fijate si está el 0.",
   "Constatá que <b>el 0 NO figura</b> entre los dígitos permitidos.",
   "Concluí que es imposible que la última cifra sea 0, así que ningún número armado con esos dígitos puede ser múltiplo de 10.",
   "Respondé con la justificación (no con un cálculo): la cantidad es <b>0</b> porque falta el dígito necesario."
  ],
  "resultado": "<b>0</b> (ninguno): es imposible sin el dígito 0.",
  "verificar": "Es un ejercicio \"trampa\": la respuesta correcta es justificar que no hay ninguno, no dar un número combinatorio. <b>Error típico a evitar:</b> arrancar a calcular variaciones o combinaciones por reflejo, sin chequear primero si la condición (terminar en 0) es realizable con los dígitos dados. Siempre revisá la factibilidad antes de contar."
 },
 {
  "id": "combi-mult6",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Modelo 2026",
  "titulo": "De 3 cifras (dígitos 0–7): múltiplos de 6 sin repetir",
  "enunciado": "Con los dígitos 0, 1, 2, 3, 4, 5, 6 y 7, ¿cuántos números de 3 cifras, sin repetir, son múltiplos de 6?",
  "idea": "Reconocés un problema de <b>conteo por casos con criterios de divisibilidad combinados</b>. La clave: 6 = 2·3, y como 2 y 3 son coprimos, un número es <b>múltiplo de 6 si y solo si es múltiplo de 2 Y de 3 a la vez</b>. Criterio de 2: la última cifra es par (0,2,4,6). Criterio de 3: la suma de todas las cifras es múltiplo de 3. Además, como es un número de 3 cifras, la <b>primera cifra no puede ser 0</b>. El concepto de fondo: cuando las condiciones son varias y hay un dígito \"problemático\" (el 0), conviene organizarse por casos (elegir primero qué dígitos usar según la suma, y después contar los ordenamientos válidos) en vez de buscar una única fórmula.",
  "pasos": [
   "Descomponé la condición: múltiplo de 6 ⇔ múltiplo de 2 <b>y</b> múltiplo de 3 (porque 6 = 2·3 con 2 y 3 coprimos). Vas a necesitar las dos condiciones simultáneas.",
   "Recordá los dos criterios: <b>por 2</b>, la última cifra debe ser par (0, 2, 4 o 6); <b>por 3</b>, la suma de las tres cifras elegidas debe ser múltiplo de 3.",
   "No olvides la restricción de posición: al ser un número de 3 cifras, la <b>primera cifra ≠ 0</b> (si no, sería en realidad de 2 cifras).",
   "Estrategia por casos, paso 1 — <b>elegir el conjunto de 3 dígitos</b>: de {0,1,2,3,4,5,6,7}, seleccioná las ternas cuya suma sea múltiplo de 3 (así se cumple el criterio de divisibilidad por 3, que depende solo de qué dígitos, no de su orden).",
   "Estrategia por casos, paso 2 — <b>para cada terna válida, contar ordenamientos</b>: contá cuántas permutaciones de esa terna terminan en cifra par (criterio de 2) y no empiezan en 0 (restricción de posición). Esto depende de cuántos pares tiene la terna y de si incluye o no al 0.",
   "Sumá los ordenamientos válidos de todas las ternas: llevando la cuenta caso por caso, el total da <b>54</b> números.",
   "Recomendación práctica para el examen: como es un conteo largo y propenso a errores, organizá los casos en una tabla (terna, si incluye 0, cantidad de pares, ordenamientos válidos) y sumá al final."
  ],
  "resultado": "<b>54</b> números.",
  "verificar": "Enumerados por computadora (permutaciones de 3 dígitos de 0..7, sin repetir, primera cifra ≠ 0 y divisibles por 6) el total es 54. <b>Error típico a evitar:</b> olvidarse de descontar los ordenamientos que empiezan en 0, o aplicar solo uno de los dos criterios (solo par, o solo suma divisible por 3) — hacen falta ambos a la vez para múltiplo de 6."
 },
 {
  "id": "combi-13usb",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Modelo 2026",
  "titulo": "Repartir 13 USB en 4 mesas",
  "enunciado": "Hay 13 USB (iguales) para repartir en 4 mesas de trabajo diferentes. ¿De cuántas maneras? ¿Y si en la primera mesa hay que poner mínimamente 4?",
  "idea": "Reconocés una <b>combinación con repetición</b> cuando repartís <b>objetos idénticos</b> (las USB son todas iguales, no se distinguen) entre <b>cajas distintas</b> (las mesas sí son diferentes) y solo importa <b>cuántas</b> van en cada caja. La fórmula de repartir n objetos iguales en m cajas es <code>CR(m,n) = C(n+m−1, n)</code>. El concepto de fondo: es equivalente a contar las soluciones enteras no negativas de una suma; y cuando aparece un <b>mínimo</b> en una caja, el truco es \"reservar\" primero esa cantidad fija y repartir libremente el resto.",
  "pasos": [
   "Identificá la estructura: 13 USB <b>idénticas</b> (los objetos no se distinguen entre sí) y 4 mesas <b>distintas</b> (las cajas sí se distinguen). Solo importa cuántas USB toca cada mesa → combinación con repetición.",
   "Fijá los datos de la fórmula: <b>m = 4 mesas</b> (cajas) y <b>n = 13 USB</b> (objetos). Fórmula: <code>CR(m,n) = C(n+m−1, n)</code>.",
   "<b>Parte 1 (sin restricción):</b> reemplazá → <code>CR(4,13) = C(13+4−1, 13) = C(16, 13)</code>.",
   "Simplificá con complementarios <code>C(16,13) = C(16, 16−13) = C(16,3)</code> (menos factores). Calculá <code>C(16,3) = 16·15·14 / (3·2·1)</code>: arriba <code>16·15 = 240</code>, <code>240·14 = 3360</code>; abajo <code>3! = 6</code> → <code>3360/6 = 560</code>.",
   "<b>Parte 2 (con mínimo de 4 en la mesa 1):</b> el truco es <b>reservar primero</b> las 4 USB obligatorias en la mesa 1. Al fijarlas, ya cumpliste la condición y te sobran <code>13 − 4 = 9</code> USB.",
   "Repartí esas 9 USB restantes <b>libremente</b> entre las 4 mesas (sin más restricciones, porque el mínimo ya está garantizado): <code>CR(4,9) = C(9+4−1, 9) = C(12, 9)</code>.",
   "Simplificá <code>C(12,9) = C(12,3)</code> y calculá: <code>12·11·10 = 1320</code> arriba, <code>6</code> abajo → <code>1320/6 = 220</code>."
  ],
  "resultado": "<b>560</b> maneras; con ≥4 en la primera mesa: <b>220</b>.",
  "verificar": "C(16,3)=560 y C(12,3)=220 en la calculadora. <b>Error típico a evitar:</b> en la parte del mínimo, no restar el mínimo del total (repartirías 13 en vez de 9) o restar mal la cantidad de cajas. El truco de \"reservar y repartir el resto\" solo funciona porque después las mesas pueden recibir 0 o más sin límite superior."
 },
 {
  "id": "combi-p8",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 8",
  "titulo": "Póker: escalera real y escalera de color",
  "enunciado": "Con las 52 cartas de la baraja inglesa (13 valores × 4 palos): a) ¿cuántas escaleras reales (10, J, Q, K, A del mismo palo) hay? b) ¿cuántas escaleras de color (5 consecutivas del mismo palo, sin contar la real)?",
  "idea": "Reconocés un <b>conteo por casos con principio de multiplicación</b> cuando la mano queda <b>completamente determinada</b> al fijar unos pocos parámetros (acá: el palo y la carta inicial de la escalera). Como las 5 cartas de una escalera están forzadas una vez que elegís por dónde empieza y de qué palo, no hay libertad adicional que contar. El concepto de fondo: contás cuántas \"posiciones de inicio\" hay y cuántos palos, multiplicás, y si el enunciado pide excluir un subconjunto (la escalera real, que también es de color), lo <b>restás</b> al final.",
  "pasos": [
   "<b>Parte a) Escalera real:</b> es la secuencia fija 10-J-Q-K-A. Notá que dentro de un palo hay una <b>única</b> forma de armarla (no hay elección de cartas).",
   "La única libertad es el <b>palo</b>: hay 4 palos (corazones, picas, diamantes, tréboles). Por el principio de multiplicación: <code>1 secuencia · 4 palos = 4</code> escaleras reales.",
   "<b>Parte b) Escalera de color:</b> son 5 cartas consecutivas del mismo palo. Contá primero cuántos <b>puntos de inicio</b> tiene una corrida de 5 consecutivas: puede arrancar en A,2,3,…,10 (si arrancara en J ya no habría 5 cartas por encima) → <b>10 comienzos</b> posibles por palo.",
   "Multiplicá por los 4 palos: <code>10 comienzos · 4 palos = 40</code> escaleras de color en total (incluyendo por ahora las reales).",
   "Ojo con la exclusión que pide el enunciado: la escalera real (10-J-Q-K-A) <b>también</b> es una escalera de color, y hay 4 de ellas (una por palo), que quedaron contadas dentro de esas 40.",
   "Restá las 4 reales para dejar solo las escaleras de color \"puras\": <code>40 − 4 = 36</code>."
  ],
  "resultado": "<b>4</b> escaleras reales · <b>36</b> escaleras de color (sin la real).",
  "verificar": "La guía da 4 y 36. <b>Error típico a evitar:</b> olvidar restar las 4 reales (daría 40) o contar 9 comienzos en vez de 10 (la corrida que arranca en As, A-2-3-4-5, es válida). Dato extra para contexto: las escaleras de cualquier palo pero sin ser de color son 10·4⁵ − 40 = 10200."
 },
 {
  "id": "combi-p9",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 9 y 10",
  "titulo": "Bolsita de 4 caramelos (2 o 3 gustos)",
  "enunciado": "Enumerar los escenarios para llenar una bolsita con 4 caramelos: (9) de 2 gustos (menta y ácido); (10) de 3 gustos (menta, ácido y dulce de leche).",
  "idea": "Reconocés una <b>combinación con repetición</b> porque es una bolsita (<b>no importa el orden</b>, solo cuántos de cada gusto) y los gustos <b>se repiten</b> (podés llevar varios del mismo). La fórmula es <code>CR(m,n) = C(m+n−1, n)</code>, con <b>m = cantidad de gustos</b> y <b>n = cantidad de caramelos</b>. El concepto de fondo: cada \"escenario\" es una manera de repartir n caramelos entre m gustos, o equivalentemente una solución entera no negativa de una suma donde cada sumando es cuántos caramelos hay de cada gusto.",
  "pasos": [
   "Reconocé el tipo: bolsita → no importa el orden; varios del mismo gusto → hay repetición. Es <b>combinación con repetición</b> <code>CR(m,n) = C(m+n−1, n)</code>.",
   "<b>Ejercicio 9 (2 gustos):</b> fijá m=2 (menta, ácido) y n=4 caramelos. Reemplazá: <code>CR(2,4) = C(2+4−1, 4) = C(5,4)</code>.",
   "Calculá <code>C(5,4) = C(5,1) = 5</code> (usando complementarios, elegir 4 de 5 = descartar 1 de 5). → <b>5</b> escenarios.",
   "Enumerá los escenarios como pares (menta, ácido) que suman 4: (4,0), (3,1), (2,2), (1,3), (0,4). Contalos: son 5, coincide.",
   "<b>Ejercicio 10 (3 gustos):</b> ahora m=3 (menta, ácido, dulce de leche) y n=4. Reemplazá: <code>CR(3,4) = C(3+4−1, 4) = C(6,4)</code>.",
   "Simplificá con complementarios <code>C(6,4) = C(6,2)</code> y calculá: <code>6·5 = 30</code> arriba, <code>2! = 2</code> abajo → <code>30/2 = 15</code>. → <b>15</b> escenarios.",
   "Interpretá: los 15 escenarios son todas las ternas (a, b, c) con <code>a+b+c=4</code> y a,b,c ≥ 0 (cuántos caramelos de cada gusto)."
  ],
  "resultado": "<b>5</b> escenarios con 2 gustos · <b>15</b> con 3 gustos.",
  "verificar": "C(5,4)=5, C(6,2)=15 en la calculadora. Podés confirmar el caso de 2 gustos listando los 5 pares a mano. <b>Error típico a evitar:</b> confundir m y n en la fórmula — m siempre es la cantidad de tipos/gustos y n la cantidad de objetos elegidos. (Ej. 11: es la definición de combinación con repetición; m = tipos de gusto, n = cantidad de caramelos.)"
 },
 {
  "id": "combi-p13",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 13 y 14",
  "titulo": "Soluciones no negativas de x+y+z = 5 (y = 15)",
  "enunciado": "Hallar la cantidad de casos para x, y, z no negativos tales que: (13) x+y+z=5; (14) x+y+z=15.",
  "idea": "Reconocés que contar <b>soluciones enteras no negativas</b> de una ecuación del tipo x+y+z=N es exactamente lo mismo que <b>repartir N unidades idénticas entre 3 variables</b> (cajas): cada variable es una caja y su valor es cuántas unidades le tocan. Por eso se resuelve con <b>combinaciones con repetición</b>: <code>C(N+3−1, N) = C(N+2, 2)</code> (con 3 variables, m=3). El concepto de fondo es \"estrellas y barras\": N estrellas y 2 barras (m−1) para separar en 3 grupos, y contás de cuántas formas se ubican.",
  "pasos": [
   "Traducí el problema: contar (x,y,z) enteros no negativos con x+y+z=N equivale a repartir N unidades iguales en 3 cajas (x, y, z). Es combinación con repetición con m=3 variables.",
   "Recordá la fórmula: <code>CR(m,N) = C(N+m−1, N)</code>. Con m=3 queda <code>C(N+3−1, N) = C(N+2, N) = C(N+2, 2)</code> (usando complementarios para dejar el 2, que es m−1).",
   "Entendé el porqué (estrellas y barras): ponés N estrellas en fila y elegís dónde van las 2 barras que las parten en 3 grupos; hay N+2 posiciones y elegís 2 para las barras → C(N+2, 2).",
   "<b>Ejercicio 13 (N=5):</b> reemplazá → <code>C(5+2, 2) = C(7,2)</code>. Calculá <code>7·6 / 2 = 42/2 = 21</code>. → <b>21</b> soluciones.",
   "<b>Ejercicio 14 (N=15):</b> reemplazá → <code>C(15+2, 2) = C(17,2)</code>. Calculá <code>17·16 / 2 = 272/2 = 136</code>. → <b>136</b> soluciones.",
   "Notá que la fórmula C(N+2, 2) crece rápido con N: por eso 15 da muchas más soluciones que 5."
  ],
  "resultado": "<b>21</b> soluciones para N=5 · <b>136</b> para N=15.",
  "verificar": "C(7,2)=21, C(17,2)=136 en la calculadora. <b>Error típico a evitar:</b> usar C(N, 2) olvidando el +2 (que viene de m−1 barras), o confundir el número de variables. Con 3 variables siempre es C(N+2, 2). (Los ej. 15 y 16 son la misma idea pero con mínimos por variable: se descuentan esos mínimos del total y se reparte el resto.)"
 },
 {
  "id": "combi-p15",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 15, 16 y 17",
  "titulo": "Soluciones de x+y+z=N con mínimos por variable",
  "enunciado": "Encontrar los casos para x, y, z no negativos con un mínimo por variable: (15) x+y+z=5 con mínimos que suman 3 (p.ej. x≥2, y≥1); (16) x+y+z=20 con mínimos que suman 9. (17) ¿Se pueden generalizar?",
  "idea": "Reconocés una <b>combinación con repetición CON restricciones de mínimo</b> cuando cada variable no arranca en 0 sino en un valor mínimo (x≥2, y≥1, etc.). El truco estándar: <b>reservar primero los mínimos</b> (darle a cada variable su piso obligatorio) y luego repartir <b>libremente</b> lo que sobra, que ya sí puede ir desde 0. El concepto de fondo: si los mínimos suman s, gastás s del total N y te queda N−s para repartir sin restricción con la fórmula habitual <code>C((N−s)+2, 2)</code>.",
  "pasos": [
   "Reconocé la restricción: cada variable tiene un mínimo (piso) en vez de arrancar en 0. No podés aplicar la fórmula base directamente hasta \"neutralizar\" esos mínimos.",
   "Aplicá el truco de cambio de variable: si x≥2, definís x' = x−2 (que ya es ≥0); igual para las demás. Al restar los mínimos, todas las variables nuevas arrancan en 0 y la ecuación pasa a sumar <code>N − s</code>, donde s es la suma de todos los mínimos.",
   "Regla general resultante: se reparte lo que queda, <code>N − s</code> unidades, sin restricción entre las 3 variables → <code>C((N−s)+2, 2)</code>.",
   "<b>Ejercicio 15 (N=5, mínimos suman s=3):</b> reservás 3, sobran <code>5 − 3 = 2</code>. Reemplazá: <code>C(2+2, 2) = C(4,2)</code>. Calculá <code>4·3/2 = 6</code>. → <b>6</b> soluciones.",
   "<b>Ejercicio 16 (N=20, mínimos suman s=9):</b> reservás 9, sobran <code>20 − 9 = 11</code>. Reemplazá: <code>C(11+2, 2) = C(13,2)</code>. Calculá <code>13·12/2 = 156/2 = 78</code>. → <b>78</b> soluciones.",
   "<b>Ejercicio 17 (generalización):</b> para x+y+z=N con mínimos que suman s, la cantidad de soluciones es siempre <code>C(N−s+2, 2)</code>. Es la fórmula base pero con N reemplazado por N−s.",
   "Chequeo de sensatez: si s>N no habría solución (los pisos ya superan el total); mientras N−s ≥ 0, la fórmula funciona."
  ],
  "resultado": "(15) <b>6</b> · (16) <b>78</b> · (17) fórmula general <b>C(N−s+2, 2)</b>.",
  "verificar": "Coincide con la clave de la guía (15→6, 16→78). <b>Error típico a evitar:</b> restar los mínimos de a uno y equivocarse en la cuenta, o restar los mínimos también de las barras (solo se restan del total N, la cantidad de variables no cambia). Recordá: reservás los pisos y después repartís el sobrante como si no hubiera restricción."
 },
 {
  "id": "combi-p11",
  "guia": "Combinatoria",
  "unidad": "U1",
  "num": "Práctica 11",
  "titulo": "¿Qué definición representan los problemas 9 y 10? (m y n)",
  "enunciado": "¿Cuál es la definición de combinatoria que representa los problemas 9 y 10 (bolsitas de caramelos)? ¿Qué representa m y qué representa n en el número combinatorio?",
  "idea": "Este ejercicio es <b>conceptual</b>: te pide nombrar la definición y explicar qué significa cada letra de la fórmula. Reconocés que es <b>combinación con repetición</b> por las mismas dos señales de siempre: en una bolsita <b>no importa el orden</b> y los gustos <b>se repiten</b>. El concepto de fondo que hay que dominar es la lectura de la fórmula <code>CR(m,n) = C(m+n−1, n)</code>: saber cuál es la cantidad de <b>tipos disponibles</b> (m) y cuál la cantidad de <b>elementos que se eligen</b> (n), porque confundirlas es el error más común.",
  "pasos": [
   "Repasá qué hacen los problemas 9 y 10: llenan una bolsita con caramelos de varios gustos. Dos características: (a) no importa el orden en que están, (b) un mismo gusto puede aparecer varias veces.",
   "Esas dos características (orden no importa + repetición permitida) definen una <b>combinación con repetición</b>. Descartá las otras: no es permutación ni variación (esas usan orden), ni combinación simple (esa no permite repetir).",
   "Escribí la fórmula: <code>CR(m,n) = C(m+n−1, n)</code>.",
   "Definí <b>m</b>: es la cantidad de <b>tipos/categorías disponibles</b> para elegir (en las bolsitas, los gustos de caramelo).",
   "Definí <b>n</b>: es la cantidad de <b>elementos que se seleccionan</b> en total (en las bolsitas, cuántos caramelos entran).",
   "Fijá la regla mnemotécnica: m = \"de cuántos tipos puedo elegir\", n = \"cuántos elijo\". El +(m−1) de la fórmula viene de las barras que separan los m grupos."
  ],
  "resultado": "Combinaciones con repetición. <b>m</b> = tipos/gustos disponibles; <b>n</b> = cantidad de elementos elegidos.",
  "verificar": "En el ej. 10: m=3 gustos, n=4 caramelos → CR(3,4)=C(6,2)=15, que coincide con el resultado enumerado. <b>Error típico a evitar:</b> intercambiar m y n (poner m=caramelos, n=gustos): daría otro número y estaría mal. Siempre m es la variedad disponible y n lo que se toma."
 },
 {
  "id": "palomar-1",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 1",
  "titulo": "3 palomares y 4 palomas",
  "enunciado": "Se tienen 3 palomares y 4 palomas. Escribir las formas en que las palomas pueden ocupar los palomares. ¿Cuántos escenarios posibles?",
  "idea": "Aunque el título mencione \"palomas\", este ejercicio <b>no es del principio del palomar</b> sino de <b>conteo</b>: te piden contar en cuántas configuraciones distintas se distribuyen. Reconocés una <b>combinación con repetición</b> porque las palomas se toman como <b>indistinguibles</b> (solo importa cuántas hay en cada palomar, no cuáles) y los palomares son <b>distintos</b> (cajas diferenciadas). Repartir n objetos iguales en m cajas es <code>CR(m,n) = C(n+m−1, n)</code>. El concepto de fondo: cada escenario es una solución de a+b+c = (cantidad de palomas) con a,b,c ≥ 0.",
  "pasos": [
   "Identificá la estructura: 4 palomas <b>iguales</b> (no se distinguen) que van a 3 palomares <b>distintos</b>. Solo importa cuántas palomas hay en cada palomar → combinación con repetición.",
   "Fijá los datos: m = 3 palomares (cajas), n = 4 palomas (objetos). Fórmula: <code>CR(m,n) = C(n+m−1, n)</code>.",
   "Reemplazá: <code>CR(3,4) = C(4+3−1, 4) = C(6,4)</code>.",
   "Simplificá con complementarios <code>C(6,4) = C(6,2)</code> y calculá: <code>6·5 = 30</code> arriba, <code>2! = 2</code> abajo → <code>30/2 = 15</code>.",
   "Concluí: hay <b>15</b> escenarios posibles.",
   "Enumerá para dar sentido: cada escenario es una terna (a, b, c) con a+b+c = 4, a,b,c ≥ 0, donde cada número es cuántas palomas hay en ese palomar. Ejemplos: (4,0,0), (0,4,0), (0,0,4), (3,1,0), (2,2,0), (2,1,1)… en total 15."
  ],
  "resultado": "<b>15</b> escenarios.",
  "verificar": "C(6,2)=15 en la calculadora. Podés enumerar las 15 ternas a mano como control. <b>Error típico a evitar:</b> tratar a las palomas como distinguibles (eso daría 3⁴ = 81, que sería \"funciones de 4 palomas a 3 palomares\", otro problema distinto). Acá las palomas son idénticas, por eso es combinación con repetición."
 },
 {
  "id": "palomar-2",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 2",
  "titulo": "13 profesores nacidos el mismo mes (V/F)",
  "enunciado": "Si en una sala hay 13 profesores, dos de ellos nacieron el mismo mes. ¿Verdadero o falso? Fundamentar.",
  "idea": "Reconocés el <b>principio del palomar</b> cuando tenés que meter un cierto número de \"objetos\" (palomas) en un número menor de \"categorías\" (casilleros) y te preguntan si forzosamente dos caen en la misma. El enunciado clásico: <b>si hay más palomas que casilleros, al menos un casillero tiene 2 o más palomas</b>. Acá las palomas son los 13 profesores y los casilleros son los 12 meses del año. El concepto de fondo: no depende del azar ni de las fechas concretas, es una garantía lógica que surge de que 13 &gt; 12.",
  "pasos": [
   "Identificá las palomas y los casilleros. <b>Palomas:</b> los 13 profesores. <b>Casilleros:</b> los 12 meses posibles de nacimiento.",
   "Recordá el principio del palomar (versión básica): si tenés n casilleros y al menos n+1 palomas, entonces algún casillero recibe 2 o más palomas.",
   "Compará las cantidades: hay 13 profesores y 12 meses. Como <code>13 = 12 + 1</code>, se cumple la hipótesis \"n+1 palomas para n casilleros\".",
   "Aplicá el principio: aunque repartieras a los profesores lo más disperso posible (uno por mes), después de cubrir los 12 meses el profesor número 13 cae necesariamente en un mes ya ocupado.",
   "Concluí: es imposible que los 13 tengan meses todos distintos → al menos 2 comparten mes. La afirmación es <b>Verdadera</b>."
  ],
  "resultado": "<b>Verdadero.</b> Con 13 personas y 12 meses, forzosamente 2 comparten mes.",
  "verificar": "Es el caso base del palomar: n+1 palomas en n casillas. <b>Error típico a evitar:</b> pensar que \"podría pasar que no\" — el principio del palomar no habla de probabilidad sino de una certeza lógica: con 13 en 12 casilleros SIEMPRE hay coincidencia, sin excepción."
 },
 {
  "id": "palomar-3",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 3",
  "titulo": "Mínimo para que 2 cumplan años el mismo día",
  "enunciado": "¿Cuál es el mínimo de estudiantes que tiene que haber en el aula para que 2 cumplan años el mismo día? Fundamentar.",
  "idea": "Reconocés un problema de <b>palomar \"al revés\"</b>: en vez de preguntarte si dos coinciden, te piden el <b>mínimo de palomas que GARANTIZA</b> una coincidencia. La regla: para asegurar que 2 caigan en el mismo casillero, hacen falta <b>(cantidad de casilleros + 1)</b> palomas, porque con exactamente esa cantidad ya no hay forma de evitar que dos compartan. Acá los casilleros son los días del año. El concepto de fondo: buscás el peor caso (repartir uno por casillero) y le sumás uno para forzar la repetición.",
  "pasos": [
   "Identificá los casilleros: los días posibles de cumpleaños. En un año no bisiesto hay <b>365 días</b> (casilleros).",
   "Pensá el peor caso (el que retrasa la coincidencia lo más posible): que cada estudiante caiga en un día distinto. Podés llegar hasta 365 estudiantes sin que se repita ninguno (uno por día).",
   "Aplicá la regla del palomar para garantizar 2 en un casillero: hacen falta <code>casilleros + 1</code> palomas.",
   "Reemplazá: <code>365 + 1 = 366</code> estudiantes. Con 366, aunque los primeros 365 ocupen un día cada uno, el 366 cae sí o sí en un día repetido.",
   "Concluí: el mínimo es <b>366</b> estudiantes.",
   "Considerá la aclaración de años bisiestos: si contás el 29 de febrero, hay 366 días → harían falta <code>366 + 1 = 367</code> estudiantes."
  ],
  "resultado": "<b>366</b> estudiantes (367 contando el 29/2).",
  "verificar": "Regla n+1 con n = 365. <b>Error típico a evitar:</b> responder 365 (esa es la cantidad de días, y con 365 todavía PODRÍA no haber coincidencia si cae uno por día). El mínimo que GARANTIZA la coincidencia es siempre casilleros+1, no casilleros."
 },
 {
  "id": "palomar-4",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 4",
  "titulo": "Mínimo para que 4 cumplan el mismo mes",
  "enunciado": "Encontrar el mínimo de estudiantes para que por lo menos 4 cumplan el mismo mes.",
  "idea": "Reconocés el <b>principio del palomar generalizado</b> cuando no te alcanza con que \"2\" coincidan sino que querés garantizar que <b>k+1 objetos</b> caigan en un mismo casillero. La regla se extiende así: para asegurar k+1 en alguna caja, hacen falta <b>k·n + 1</b> objetos (siendo n la cantidad de casilleros). El razonamiento del peor caso: podés poner hasta k en cada uno de los n casilleros (k·n objetos) sin llegar a k+1 en ninguno; el objeto siguiente fuerza el k+1. El concepto de fondo es el mismo peor caso, pero permitiendo hasta k por casillero antes de forzar.",
  "pasos": [
   "Traducí \"que 4 cumplan el mismo mes\" al lenguaje del palomar generalizado: querés k+1 = 4 en algún casillero, o sea <code>k = 3</code> (el máximo que podés tener en cada mes SIN llegar a 4).",
   "Identificá los casilleros: los meses del año → <code>n = 12</code>.",
   "Recordá la fórmula generalizada: para garantizar k+1 en alguna caja hacen falta <code>k·n + 1</code> objetos.",
   "Pensá el peor caso para convencerte: podrías tener 3 estudiantes en cada uno de los 12 meses = <code>3·12 = 36</code> estudiantes, y todavía ningún mes llegaría a 4.",
   "Sumá uno para forzar el cuarto: el estudiante número 37 cae inevitablemente en un mes que ya tenía 3, formando el grupo de 4.",
   "Calculá: <code>k·n + 1 = 3·12 + 1 = 36 + 1 = 37</code>. → mínimo <b>37</b> estudiantes."
  ],
  "resultado": "<b>37</b> estudiantes.",
  "verificar": "Con 36 podrían quedar 3 por mes (3·12) sin que ninguno llegue a 4; el 37 fuerza un cuarto en algún mes. <b>Error típico a evitar:</b> usar 4·12+1 en vez de 3·12+1. Ojo con el desfasaje: si querés 4 coincidencias, k+1=4, entonces k=3 (uno menos), y se multiplica k, no el 4."
 },
 {
  "id": "palomar-5",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 5",
  "titulo": "Copa Davis: parejas de dobles",
  "enunciado": "El equipo de Copa Davis tiene 5 jugadores. ¿De cuántas maneras se puede formar la pareja para jugar dobles?",
  "idea": "Reconocés una <b>combinación</b> cuando formás un grupo/pareja donde <b>no importa el orden</b> de sus integrantes: la pareja Ana-Juan es la misma que Juan-Ana. La señal es que estás <b>eligiendo un subconjunto</b> (aquí de 2) sin que las posiciones se distingan. El concepto de fondo: elegir k de n sin orden es <code>C(n,k)</code>, y para parejas (k=2) el resultado también aparece en la tercera diagonal del Triángulo de Pascal.",
  "pasos": [
   "Reconocé que una pareja de dobles no tiene orden interno (los dos juegan juntos, no hay \"jugador 1\" y \"jugador 2\" distinguibles) → es una <b>combinación</b>.",
   "Fijá los datos: elegir <b>k = 2</b> jugadores de un total de <b>n = 5</b>. Fórmula: <code>C(n,k) = n!/(k!·(n−k)!)</code>.",
   "Reemplazá: <code>C(5,2) = 5!/(2!·3!)</code>.",
   "Calculá tomando los 2 factores decrecientes arriba y 2! abajo: <code>5·4 = 20</code>, <code>2! = 2</code> → <code>20/2 = 10</code>.",
   "Concluí: hay <b>10</b> parejas posibles.",
   "Ubicalo en el Triángulo de Pascal: C(5,2) está en la fila 6 (si numerás desde 1), posición 3. Sirve como chequeo visual del valor 10."
  ],
  "resultado": "<b>10</b> parejas posibles.",
  "verificar": "C(5,2)=10 en la calculadora, y coincide con el valor del Triángulo de Pascal en (fila 6, posición 3). <b>Error típico a evitar:</b> usar variaciones V(5,2)=20 (que contaría Ana-Juan y Juan-Ana como distintas). En una pareja el orden no importa, por eso se divide por 2! y da la mitad."
 },
 {
  "id": "palomar-6",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 6",
  "titulo": "Equipo de 4 entre 11 estudiantes",
  "enunciado": "¿De cuántas maneras se puede formar un equipo de 4 entre 11 estudiantes?",
  "idea": "Reconocés una <b>combinación</b> porque un equipo es un <b>grupo sin orden interno</b>: da igual en qué orden nombres a sus 4 integrantes, es el mismo equipo. Estás eligiendo un subconjunto de 4 de un total de 11. El concepto de fondo: <code>C(n,k)</code> cuenta esos subconjuntos, y como equivale a elegir 4 \"que entran\" (o los 7 \"que quedan afuera\"), también aparece en el Triángulo de Pascal.",
  "pasos": [
   "Reconocé que un equipo no distingue orden entre sus miembros → es una <b>combinación</b> <code>C(n,k)</code>.",
   "Fijá los datos: elegir <b>k = 4</b> de <b>n = 11</b>. Fórmula: <code>C(11,4) = 11!/(4!·7!)</code>.",
   "Calculá el numerador con los 4 factores decrecientes desde 11: <code>11·10·9·8</code>. Por partes: <code>11·10 = 110</code>, <code>110·9 = 990</code>, <code>990·8 = 7920</code>.",
   "Calculá el denominador: <code>4! = 4·3·2·1 = 24</code>.",
   "Dividí: <code>7920 / 24 = 330</code>.",
   "Concluí: hay <b>330</b> equipos posibles. En el Triángulo de Pascal está en la fila 12 (numerando desde 1), posición 5."
  ],
  "resultado": "<b>330</b> equipos.",
  "verificar": "C(11,4)=330 en la calculadora, y coincide con Pascal en (fila 12, posición 5). <b>Chequeo alternativo:</b> por complementarios C(11,4) = C(11,7), así que elegir los 4 que entran o los 7 que quedan afuera da el mismo 330. <b>Error típico a evitar:</b> usar permutaciones/variaciones — el orden de los integrantes no cuenta."
 },
 {
  "id": "palomar-7",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 7",
  "titulo": "12 libros: llevar 5 (o dejar 7)",
  "enunciado": "Si tengo 12 libros, ¿de cuántas formas me puedo llevar 5? ¿Y de cuántas formas elijo los 7 que no me llevo?",
  "idea": "Reconocés la propiedad de <b>números combinatorios complementarios</b> cuando notás que <b>elegir cuáles llevar equivale a elegir cuáles dejar</b>: cada vez que decidís los 5 que te llevás, automáticamente quedan determinados los 7 que dejás. Por eso <code>C(12,5) = C(12,7)</code>. La propiedad general es <code>C(n,k) = C(n, n−k)</code>. El concepto de fondo: hay una correspondencia uno a uno entre los subconjuntos de tamaño k y los de tamaño n−k (cada uno es el complemento del otro), así que hay la misma cantidad.",
  "pasos": [
   "Reconocé que en ambas preguntas no importa el orden (es un subconjunto de libros) → son combinaciones.",
   "<b>Llevar 5 de 12:</b> <code>C(12,5) = 12!/(5!·7!)</code>. Calculá el numerador (5 factores desde 12): <code>12·11·10·9·8 = 95040</code>. Denominador: <code>5! = 120</code>. Dividí: <code>95040/120 = 792</code>.",
   "<b>Dejar 7 de 12:</b> <code>C(12,7) = 12!/(7!·5!)</code>. Observá que el denominador tiene los mismos factores 7! y 5! que antes, solo intercambiados.",
   "Concluí que da lo mismo: <code>C(12,7) = 792</code>, idéntico a C(12,5).",
   "Justificá el porqué con la propiedad de complementarios: <code>C(n,k) = C(n, n−k)</code>. Elegir cuáles 5 llevás \"es lo mismo\" que elegir cuáles 7 dejás, porque uno determina al otro.",
   "Concluí: en ambos casos hay <b>792</b> formas."
  ],
  "resultado": "<b>792</b> en ambos casos.",
  "verificar": "C(12,5) = C(12,7) = 792 en la calculadora. <b>Aprovechá la propiedad como atajo:</b> cuando k es más de la mitad de n, calculá C(n, n−k) que tiene menos factores (por ejemplo, C(12,7) conviene calcularlo como C(12,5)). <b>Error típico a evitar:</b> creer que llevar 5 y dejar 7 dan números distintos: la simetría del combinatorio garantiza que son iguales."
 },
 {
  "id": "palomar-8",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 8",
  "titulo": "Suma de las filas del Triángulo de Pascal",
  "enunciado": "¿Qué secuencia se encuentra en la suma de las filas del Triángulo de Pascal?",
  "idea": "Reconocés esta propiedad del <b>Triángulo de Pascal</b> al sumar cada fila completa: el resultado va duplicándose (1, 2, 4, 8, 16…), es decir, son <b>potencias de 2</b>. El concepto de fondo es la identidad <code>C(n,0)+C(n,1)+…+C(n,n) = 2ⁿ</code>, que se explica porque la suma de una fila cuenta <b>todos los subconjuntos</b> de un conjunto de n elementos (cada elemento entra o no entra → 2 opciones por elemento → 2ⁿ subconjuntos en total).",
  "pasos": [
   "Escribí las primeras filas del Triángulo de Pascal y sumá cada una. Fila 1: <code>1</code> → suma 1. Fila 2: <code>1 1</code> → suma 2. Fila 3: <code>1 2 1</code> → suma 4.",
   "Seguí: Fila 4: <code>1 3 3 1</code> → suma <code>1+3+3+1 = 8</code>. Fila 5: <code>1 4 6 4 1</code> → suma <code>1+4+6+4+1 = 16</code>.",
   "Observá el patrón de las sumas: 1, 2, 4, 8, 16, … Cada término es el doble del anterior → son <b>potencias de 2</b>.",
   "Expresá la regla: numerando las filas desde 1, la fila k suma <code>2^(k−1)</code> (fila 1 → 2⁰=1, fila 2 → 2¹=2, etc.). Si preferís numerar desde 0, la fila n suma <code>2ⁿ</code>.",
   "Entendé el porqué combinatorio: cada fila son los números <code>C(n,0), C(n,1), …, C(n,n)</code>, y sumarlos cuenta todos los subconjuntos posibles de un conjunto de n elementos.",
   "Justificá que eso es 2ⁿ: para cada uno de los n elementos hay 2 decisiones (está o no está en el subconjunto); por el principio de multiplicación, <code>2·2·…·2 = 2ⁿ</code> subconjuntos, que es exactamente la suma de la fila."
  ],
  "resultado": "Potencias de 2: la fila k suma <b>2^(k−1)</b> (o 2ⁿ si numerás desde n=0).",
  "verificar": "Sale de que Σ C(n,k) = 2ⁿ. <b>Chequeo rápido:</b> sumá cualquier fila del triángulo y comparala con la potencia de 2 correspondiente. <b>Error típico a evitar:</b> confundir el índice — si numerás las filas desde 1, la fórmula es 2^(k−1), no 2^k; conviene aclarar desde dónde numerás para no equivocarte por un factor de 2."
 },
 {
  "id": "palomar-9",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Palomar 9",
  "titulo": "Saludos en una fiesta",
  "enunciado": "¿Cuántos saludos hay en una fiesta si todas las personas se saludan, con 2, 3, 4, 5… personas? Indicar la diagonal del triángulo.",
  "idea": "Reconocés una <b>combinación de a 2</b> (\"apretones de manos\") cuando cada evento involucra a <b>una pareja de elementos y no importa el orden</b>: que A salude a B es el mismo saludo que B salude a A. Por eso el número de saludos entre n personas es <code>C(n,2)</code>. El concepto de fondo: es la cantidad de pares distintos que se pueden formar, y su fórmula cerrada <code>n(n−1)/2</code> aparece como la <b>tercera diagonal</b> del Triángulo de Pascal (los números triangulares 1, 3, 6, 10…).",
  "pasos": [
   "Reconocé que un saludo es una <b>pareja</b> de personas y no importa el orden (A saluda a B = B saluda a A) → es una combinación de 2.",
   "Escribí la fórmula general para n personas: <code>C(n,2) = n!/(2!·(n−2)!) = n(n−1)/2</code>. El porqué del n(n−1)/2: cada persona saluda a las otras n−1, eso da n(n−1) apretones, pero cada saludo se contó dos veces (una por cada participante), así que se divide por 2.",
   "Calculá para 2 personas: <code>C(2,2) = 2·1/2 = 1</code> saludo.",
   "Para 3 personas: <code>C(3,2) = 3·2/2 = 3</code> saludos.",
   "Para 4 personas: <code>C(4,2) = 4·3/2 = 6</code> saludos.",
   "Para 5 personas: <code>C(5,2) = 5·4/2 = 10</code> saludos.",
   "Observá la secuencia 1, 3, 6, 10, … : son los <b>números triangulares</b>, que forman la <b>tercera diagonal</b> del Triángulo de Pascal: C(2,2), C(3,2), C(4,2), C(5,2), …"
  ],
  "resultado": "<b>C(n,2)</b> saludos: 1, 3, 6, 10, … (para 2, 3, 4, 5 personas).",
  "verificar": "C(n,2) = n(n−1)/2. <b>Chequeo con casos chicos:</b> con 3 personas dibujá los saludos (A-B, A-C, B-C) y contá 3, coincide. <b>Error típico a evitar:</b> contar n(n−1) sin dividir por 2 (eso contaría cada saludo dos veces, como si el orden importara). El saludo es mutuo, por eso se divide entre 2."
 },
 {
  "id": "palomar-23amigos",
  "guia": "Palomar",
  "unidad": "U1",
  "num": "Final (modelo)",
  "titulo": "23 amigos en una fiesta (completar el enunciado)",
  "enunciado": "“En una fiesta se encuentran 23 amigos, es correcto afirmar que ……”. Completar con un concepto matemático visto.",
  "idea": "Reconocés que hay que aplicar el <b>principio del palomar</b> por la forma del enunciado: te dan un número de personas (23) y te piden completar con algo que sea <b>necesariamente cierto</b>. La aplicación clásica en estos ejercicios es contra los <b>12 meses del año</b>: como 23 &gt; 12, al menos dos comparten mes de nacimiento. El concepto de fondo: con el palomar generalizado se puede afinar cuántos coinciden como mínimo usando <code>⌈palomas/casilleros⌉</code>.",
  "pasos": [
   "Interpretá el enunciado abierto: te piden completar con una afirmación que sea <b>siempre verdadera</b> para 23 personas → apunta al principio del palomar.",
   "Elegí los casilleros más naturales para este contexto: los <b>12 meses</b> del año (casilleros = 12). Palomas = 23 amigos.",
   "Compará: como <code>23 &gt; 12</code>, se cumple con creces la hipótesis del palomar (hay más palomas que casilleros), así que al menos 2 caen en el mismo mes.",
   "Afiná con el palomar generalizado si querés ser más preciso: el mínimo garantizado en algún casillero es <code>⌈23/12⌉ = 2</code> (23 dividido 12 es 1,9…, redondeado hacia arriba da 2). Confirma que se garantizan al menos 2 en un mismo mes.",
   "Redactá la afirmación para completar: “…es correcto afirmar que al menos dos de ellos nacieron el mismo mes (por el principio del palomar, ya que hay 23 personas y solo 12 meses)”."
  ],
  "resultado": "“…al menos 2 nacieron el mismo mes.” (aplicación directa del principio del palomar).",
  "verificar": "Con 13 ya alcanzaba (13 > 12); con 23 la afirmación es aún más holgada. <b>Error típico a evitar:</b> afirmar de más, por ejemplo \"al menos 3 nacieron el mismo mes\" — eso NO está garantizado con 23 (haría falta 2·12+1 = 25 para asegurar 3). Con 23 lo único seguro es que al menos 2 coinciden."
 },
 {
  "id": "logica-1",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 1",
  "titulo": "¿Es proposición? Negar «2 + 5 = 19»",
  "enunciado": "Determine si la oración «2 + 5 = 19» es una proposición. Si lo es, escriba su negación (no se piden los valores de verdad).",
  "idea": "Este es un ejercicio de reconocimiento de proposiciones: hay que decidir si la oración es o no una proposición y, en caso afirmativo, negarla. La regla de fondo es la definición: una <b>proposición</b> es una oración declarativa a la que se le puede asignar exactamente un valor de verdad, verdadero (V) o falso (F), pero no ambos a la vez. Se reconoce el tipo de ejercicio porque pide «determinar si es proposición» y «escribir su negación». La negación de una proposición <code>p</code> se denota <code>¬p</code> y afirma justamente lo contrario.",
  "pasos": [
   "Primero identifico el <b>tipo de oración</b>: «2 + 5 = 19» es una oración <b>declarativa</b>, porque afirma un hecho (una igualdad aritmética) y no pregunta, ordena ni exclama.",
   "Aplico la <b>definición de proposición</b>: pregunto si se le puede asignar un único valor de verdad. Como una igualdad numérica es verdadera o falsa (nunca ambas), la respuesta es sí.",
   "Determino ese valor solo para convencerme: 2 + 5 = 7, y 7 no es 19, así que la oración es <b>falsa</b>. El hecho de que sea falsa no la descalifica: para ser proposición basta con tener un valor de verdad definido, sin importar cuál.",
   "Concluyo que <b>sí es una proposición</b> (falsa).",
   "Para negarla uso la regla de la <b>negación</b> <code>¬p</code>: la negación invierte el valor de verdad, así que debe afirmar lo contrario de la igualdad. El opuesto de «es igual» (=) es «no es igual» (≠).",
   "Escribo la negación cambiando el símbolo: <code>¬p</code> es «2 + 5 ≠ 19».",
   "Observo la coherencia: como <code>p</code> es falsa, su negación <code>¬p</code> debe ser verdadera, y en efecto «2 + 5 ≠ 19» es verdadera (7 ≠ 19). Esto confirma que negué bien."
  ],
  "resultado": "Es una proposición. Negación: 2 + 5 ≠ 19.",
  "verificar": "Coincide con la solución del libro (ej. 1). Comprobación: <code>p</code> es falsa y <code>¬p</code> resulta verdadera, tal como exige la negación (siempre invierte el valor). Error típico: creer que como la igualdad es falsa «no es proposición»; una proposición falsa sigue siendo proposición."
 },
 {
  "id": "logica-2",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 2",
  "titulo": "¿Es proposición? «Mesero, ¿serviría las nueces...?»",
  "enunciado": "Determine si la oración «Mesero, ¿serviría las nueces a los invitados?» es una proposición.",
  "idea": "Es un ejercicio de reconocimiento de proposiciones. La regla clave es que solo las oraciones <b>declarativas</b> (que afirman algo V o F) son proposiciones; las <b>preguntas</b>, las <b>órdenes</b> y las <b>exclamaciones</b> quedan excluidas porque no se les puede asignar un valor de verdad. Se reconoce el caso por la forma de la oración: si termina en «?» es interrogativa.",
  "pasos": [
   "Observo la <b>forma</b> de la oración: termina en signo de interrogación «?», por lo que es una <b>pregunta</b> (oración interrogativa).",
   "Aplico la definición de proposición: pregunto si puedo decir que la oración es verdadera o falsa.",
   "Analizo el porqué: una pregunta no <i>afirma</i> nada; solo solicita una acción o una respuesta. No tiene sentido decir que «¿serviría las nueces?» es «verdadera» o «falsa».",
   "Como no se le puede asignar un valor de verdad V o F, la oración <b>no cumple la definición</b> de proposición.",
   "Concluyo que <b>no es una proposición</b>.",
   "Por lo tanto tampoco corresponde escribir una negación (solo las proposiciones se niegan)."
  ],
  "resultado": "No es una proposición (es una pregunta).",
  "verificar": "No es declarativa, por eso se descarta. Prueba rápida: intentá anteponer «Es verdad que...»; con una pregunta suena mal («Es verdad que ¿serviría las nueces?»), lo que confirma que no es proposición. Error típico: confundir que la oración «tenga sentido» con que sea proposición; una pregunta tiene sentido pero no es V ni F."
 },
 {
  "id": "logica-3",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 3",
  "titulo": "¿Es proposición? Negar «Para algún n, 19340 = n·17»",
  "enunciado": "Determine si «Para algún entero positivo n, 19340 = n · 17» es una proposición y, si lo es, escriba su negación.",
  "idea": "Es un ejercicio de reconocimiento y negación con <b>cuantificadores</b>. La regla de fondo tiene dos partes: (1) una afirmación cuantificada («para algún n...») es una proposición porque, en conjunto, es verdadera o falsa; y (2) la negación de un cuantificador existencial ∃ («existe / para algún») es un cuantificador universal ∀ («para todo») con la propiedad interior negada: <code>¬(∃n P(n)) = ∀n ¬P(n)</code>. Se reconoce por la palabra «para algún», que indica existencia.",
  "pasos": [
   "Leo la estructura: «Para algún entero positivo n, 19340 = n · 17» dice que <b>existe</b> al menos un n que hace verdadera la igualdad. Es una afirmación cuantificada con ∃.",
   "Aplico la definición de proposición: la afirmación completa es verdadera o falsa (es verdadera exactamente si 17 divide a 19340), así que <b>es una proposición</b>.",
   "Identifico las piezas para negar: el cuantificador es <b>existencial</b> ∃ («para algún») y la propiedad interior es <code>P(n)</code>: «19340 = n · 17».",
   "Aplico la regla de negación de ∃: <code>¬(∃n P(n))</code> se transforma en <code>∀n ¬P(n)</code>. Es decir, el «para algún» se convierte en «para todo» y la igualdad interior se niega.",
   "Niego la propiedad interior: la negación de «19340 = n · 17» es «19340 ≠ n · 17».",
   "Armo la negación completa: «Para todo entero positivo n, 19340 ≠ n · 17», que en palabras significa «19340 no es múltiplo de 17».",
   "Chequeo el sentido: la original afirma que <i>algún</i> n funciona; su negación afirma que <i>ningún</i> n funciona, es decir, que <i>todos</i> fallan. Eso es exactamente «para todo n, 19340 ≠ n · 17»."
  ],
  "resultado": "Es una proposición. Negación: Para todo entero positivo n, 19340 ≠ n · 17.",
  "verificar": "La negación de ∃ es ∀ con la propiedad negada. Error típico: dejar el cuantificador como «para algún» y negar solo la igualdad («para algún n, 19340 ≠ n·17»); eso NO es la negación, porque negar «existe uno que cumple» exige decir «todos incumplen», no «existe uno que incumple»."
 },
 {
  "id": "logica-4",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 4",
  "titulo": "¿Es proposición? Negar «Audrey Meadows fue la Alice original»",
  "enunciado": "Determine si «Audrey Meadows fue la “Alice” original de la serie “The Honeymooners”» es una proposición y escriba su negación.",
  "idea": "Ejercicio de reconocimiento y negación de una proposición simple. La regla de fondo es que toda oración <b>declarativa</b> que afirma un hecho (aunque no sepamos si es cierto) es proposición, porque en la realidad es V o F. Para negar una proposición simple sin cuantificadores basta con <b>negar el verbo</b> (agregar «no»). Se reconoce el tipo porque afirma un hecho concreto y verificable.",
  "pasos": [
   "Identifico la forma: es una oración <b>declarativa</b> que afirma un hecho sobre quién interpretó a un personaje.",
   "Aplico la definición: aunque yo no conozca el dato, el hecho es objetivamente verdadero o falso, así que se le puede asignar un valor de verdad.",
   "Concluyo que <b>es una proposición</b>. (No hace falta saber su valor de verdad para afirmar que lo es.)",
   "Para negar, ubico el <b>verbo</b> principal: «fue» (era la Alice original).",
   "Aplico la regla de negación de una proposición simple: antepongo o inserto «no» junto al verbo, de modo que <code>¬p</code> afirme lo contrario.",
   "Escribo la negación: «Audrey Meadows no era la “Alice” original en “The Honeymooners”».",
   "Verifico la coherencia lógica: si la afirmación original fuera verdadera, su negación sería falsa, y viceversa; se cumple porque una sola de las dos («fue» / «no fue») puede ser cierta."
  ],
  "resultado": "Es una proposición. Negación: Audrey Meadows no era la “Alice” original en “The Honeymooners”.",
  "verificar": "Coincide con la solución del libro (ej. 4). Comprobación: exactamente una de «fue» y «no fue» es verdadera, como exige la relación <code>p</code> / <code>¬p</code>. Error típico: negar cambiando el nombre («otra actriz fue la Alice original»); la negación debe negar el verbo, no reemplazar el sujeto."
 },
 {
  "id": "logica-5",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 5",
  "titulo": "¿Es proposición? «Pélame una uva»",
  "enunciado": "Determine si la oración «Pélame una uva» es una proposición.",
  "idea": "Ejercicio de reconocimiento de proposiciones. La regla es la misma que separa afirmaciones de no-afirmaciones: las oraciones <b>imperativas</b> (órdenes, pedidos, mandatos) no son proposiciones porque no afirman un hecho V o F, sino que piden una acción. Se reconoce el caso por el verbo en modo imperativo («pélame», «compra», «cierra la puerta»).",
  "pasos": [
   "Analizo el verbo: «Pélame» está en modo <b>imperativo</b>, es decir, expresa una orden o un pedido dirigido a alguien.",
   "Clasifico la oración: es una <b>oración imperativa</b> (una orden), no una declarativa.",
   "Aplico la definición de proposición: pregunto si tiene sentido decir que la oración es verdadera o falsa.",
   "Razono el porqué: una orden no describe ningún hecho; no puedo decir que «Pélame una uva» sea «verdadera» ni «falsa». Podrá cumplirse o no, pero eso no es un valor de verdad.",
   "Como no admite un valor de verdad V o F, no cumple la definición.",
   "Concluyo que <b>no es una proposición</b> y, por lo tanto, no tiene negación proposicional."
  ],
  "resultado": "No es una proposición (es una orden).",
  "verificar": "Igual que la oración e) del texto («Compra dos boletos...»). Prueba rápida: anteponé «Es verdad que...»; con una orden queda raro («Es verdad que pélame una uva»), señal de que no es proposición. Error típico: pensar que por estar en modo imperativo «igual afirma algo»; una orden pide una acción, no afirma un hecho."
 },
 {
  "id": "logica-6",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 6",
  "titulo": "¿Es proposición? Negar «La línea “Tócala otra vez, Sam”...»",
  "enunciado": "Determine si «La línea “Tócala otra vez, Sam” corresponde a la película “Casablanca”» es una proposición y escriba su negación.",
  "idea": "Ejercicio de reconocimiento y negación de una proposición simple. La regla de fondo es la misma del ej. 4: una oración <b>declarativa</b> que afirma un hecho verificable es proposición (es V o F en la realidad), y se niega <b>negando el verbo</b>. Se reconoce porque afirma un dato concreto (qué frase pertenece a qué película), que puede confrontarse con la realidad.",
  "pasos": [
   "Identifico la forma: es una oración <b>declarativa</b> que afirma que cierta frase pertenece a cierta película.",
   "Aplico la definición: el hecho es objetivamente verdadero o falso (independientemente de si yo lo sé), así que se le puede asignar un valor de verdad.",
   "Concluyo que <b>es una proposición</b>.",
   "Localizo el <b>verbo</b> que voy a negar: «corresponde».",
   "Aplico la regla de negación de una proposición simple: inserto «no» junto al verbo para afirmar lo contrario.",
   "Escribo la negación: «La línea “Tócala otra vez, Sam” no corresponde a la película “Casablanca”».",
   "Chequeo coherencia: exactamente una de «corresponde» y «no corresponde» es verdadera, como debe ocurrir con <code>p</code> y <code>¬p</code>."
  ],
  "resultado": "Es una proposición. Negación: La línea “Tócala otra vez, Sam” no corresponde a la película “Casablanca”.",
  "verificar": "Se niega la afirmación completa. Comprobación: <code>p</code> y <code>¬p</code> tienen valores de verdad opuestos, así que solo una puede ser cierta. Error típico: reformular cambiando la película («corresponde a otra película») en lugar de negar el verbo; la negación correcta solo antepone «no»."
 },
 {
  "id": "logica-7",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 7",
  "titulo": "¿Es proposición? Negar «Todo entero par mayor que 4 es suma de dos primos»",
  "enunciado": "Determine si «Todo entero par mayor que 4 es la suma de dos primos» es una proposición y escriba su negación.",
  "idea": "Ejercicio de reconocimiento y negación con <b>cuantificador universal</b> ∀. La regla de fondo es doble: (1) un enunciado universal («todo x cumple P») es proposición porque en conjunto es V o F; y (2) la negación de ∀ es un existencial ∃ con la propiedad negada: <code>¬(∀x P(x)) = ∃x ¬P(x)</code>. Se reconoce por la palabra «todo», que indica universalidad. (Es la conjetura de Goldbach; su valor de verdad no se conoce, pero eso no impide que sea proposición.)",
  "pasos": [
   "Leo la estructura: «Todo entero par mayor que 4 es suma de dos primos» afirma que <b>para todos</b> los pares mayores que 4 se cumple una propiedad. Es una afirmación cuantificada con ∀.",
   "Aplico la definición de proposición: la afirmación completa es verdadera o falsa (aunque hoy no se sepa cuál), así que <b>es una proposición</b>.",
   "Identifico las piezas para negar: el cuantificador es <b>universal</b> ∀ («todo») y la propiedad es <code>P(x)</code>: «x es suma de dos primos».",
   "Aplico la regla de negación de ∀: <code>¬(∀x P(x))</code> se convierte en <code>∃x ¬P(x)</code>. El «todo» pasa a «existe / algún» y la propiedad interior se niega.",
   "Niego la propiedad: la negación de «es la suma de dos primos» es «no es la suma de dos primos».",
   "Armo la negación completa: «Un (algún) entero par mayor que 4 no es la suma de dos primos». Basta un solo contraejemplo para negar un «todo».",
   "Chequeo el sentido: para que falle «todos cumplen» alcanza con que <i>uno</i> falle; por eso la negación afirma la existencia de ese único par que incumple."
  ],
  "resultado": "Es una proposición. Negación: Un entero par mayor que 4 no es la suma de dos primos.",
  "verificar": "Coincide con la solución del libro (ej. 7). La negación de ∀ es ∃ con la propiedad negada. Error típico: negar diciendo «Todo entero par mayor que 4 no es suma de dos primos»; eso mantiene el «todo» y afirma algo mucho más fuerte (que ninguno cumple), no la negación. La negación solo pide UN contraejemplo."
 },
 {
  "id": "logica-8",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 8",
  "titulo": "¿Es proposición? «La diferencia de dos primos»",
  "enunciado": "Determine si «La diferencia de dos primos» es una proposición.",
  "idea": "Ejercicio de reconocimiento de proposiciones. La regla de fondo es que una proposición debe <b>afirmar</b> algo (tener un verbo que la vuelva V o F). Una simple <b>frase nominal</b> (un sujeto sin predicado que afirme nada) no es proposición porque no se le puede asignar valor de verdad. Se reconoce porque la expresión nombra un objeto («la diferencia de dos primos») pero no dice nada sobre él.",
  "pasos": [
   "Analizo la estructura gramatical: «La diferencia de dos primos» es solo un <b>sintagma / frase nominal</b>; nombra un número pero no lo predica ni afirma nada de él.",
   "Noto que <b>falta un verbo principal</b> que convierta la frase en una afirmación (por ejemplo, «...es par», «...es 2»).",
   "Aplico la definición de proposición: pregunto si puedo decir que «La diferencia de dos primos» es verdadera o falsa.",
   "Razono el porqué: como no se afirma nada, no hay nada que pueda ser V o F. La frase por sí sola no tiene valor de verdad.",
   "Concluyo que <b>no es una proposición</b>.",
   "Observo, para contrastar, que sí sería proposición si se completara con un predicado (p. ej. «La diferencia de dos primos es siempre par»); recién ahí habría algo V o F."
  ],
  "resultado": "No es una proposición (frase sin valor de verdad).",
  "verificar": "Falta un verbo que la convierta en afirmación. Prueba rápida: intentá anteponer «Es verdad que...»; queda incompleto («Es verdad que la diferencia de dos primos»), lo que confirma que no afirma nada. Error típico: confundir tener sentido/referirse a algo con ser proposición; una frase nominal se entiende, pero no es V ni F."
 },
 {
  "id": "logica-9",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 9",
  "titulo": "Negar «Salieron 10 caras» (moneda lanzada 10 veces)",
  "enunciado": "Una moneda se lanza 10 veces. Escriba la negación de la proposición «Salieron 10 caras».",
  "idea": "Ejercicio de negación en lenguaje natural (sin tabla). La regla clave es cuidar el <b>alcance</b> de la negación: «Salieron 10 caras» significa «las 10 fueron caras» (todas), así que su negación NO es «salieron 10 cruces», sino «no salieron las 10 caras». Se reconoce porque negar un «todas» equivale a «al menos una no», y aquí «al menos una no fue cara» = «al menos una cruz».",
  "pasos": [
   "Interpreto la proposición: «Salieron 10 caras» equivale a «los 10 lanzamientos fueron cara», es decir, <b>todas</b> caras.",
   "Aplico la negación: niego el hecho completo anteponiendo «no ocurrió que...»: «No ocurrió que los 10 fueran cara».",
   "Traduzco esa negación de «todas caras»: si NO todas fueron caras, entonces <b>al menos una no fue cara</b>.",
   "Como cada lanzamiento es cara o cruz, «al menos una no fue cara» significa <b>al menos una cruz</b>.",
   "Escribo la negación en forma natural: «No se obtuvieron 10 caras», o de manera equivalente «se obtuvo al menos una cruz».",
   "Compruebo con los casos extremos: si el resultado fuera 10 caras, la original es V y la negación F (correcto); si hubiera aunque sea 1 cruz, la original es F y la negación V (correcto)."
  ],
  "resultado": "No se obtuvieron 10 caras. (Alternativa: se obtuvo al menos una cruz).",
  "verificar": "Coincide con la solución del libro (ej. 9). Error típico grave: escribir «salieron 10 cruces» como negación; eso es demasiado fuerte, porque 9 caras y 1 cruz ya hace falsa la original pero no da 10 cruces. La negación correcta abarca todos los casos salvo el de las 10 caras."
 },
 {
  "id": "logica-10",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 10",
  "titulo": "Negar «Salieron algunas caras»",
  "enunciado": "Una moneda se lanza 10 veces. Escriba la negación de «Salieron algunas caras».",
  "idea": "Ejercicio de negación de un cuantificador existencial en lenguaje natural. La regla de fondo es <code>¬(∃) = ∀¬</code>: «algunas caras» significa «al menos una cara» (existe una cara), y su negación es «ninguna cara» (para toda tirada, no salió cara). Se reconoce por la palabra «algunas/alguna», que expresa existencia.",
  "pasos": [
   "Interpreto «Salieron algunas caras»: en lógica «algunas» = «al menos una», o sea <b>existe</b> al menos un lanzamiento con cara (∃).",
   "Identifico que voy a negar un existencial ∃.",
   "Aplico la regla <code>¬(∃x P(x)) = ∀x ¬P(x)</code>: la negación de «existe al menos una cara» es «para todas las tiradas, ninguna fue cara».",
   "Traduzco a lenguaje natural: <b>no salió ninguna cara</b>.",
   "Como cada tirada es cara o cruz, «ninguna cara» equivale a que <b>las 10 fueron cruces</b>.",
   "Escribo la negación: «No salió ninguna cara» (equivalente: «salieron 10 cruces»).",
   "Chequeo con casos: si hubo al menos una cara, la original es V y la negación F; si hubo cero caras (10 cruces), la original es F y la negación V. Coherente."
  ],
  "resultado": "No salió ninguna cara (salieron 10 cruces).",
  "verificar": "Negación de ∃ (al menos una) es ∀ negado (ninguna). Error típico: negar «algunas caras» con «algunas cruces»; son cosas distintas, porque 5 caras y 5 cruces tiene ambas «algunas» y no niega nada. La negación correcta es el caso extremo «cero caras»."
 },
 {
  "id": "logica-11",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 11",
  "titulo": "Negar «Salieron algunas caras y algunas cruces»",
  "enunciado": "Una moneda se lanza 10 veces. Escriba la negación de «Salieron algunas caras y algunas cruces».",
  "idea": "Ejercicio de negación de una <b>conjunción</b> con la ley de De Morgan. La regla de fondo es <code>¬(A ∧ B) = ¬A ∨ ¬B</code>: al negar un «y» se obtiene un «o» con cada parte negada. Se reconoce porque la proposición une dos afirmaciones con «y». Además cada parte lleva «algunas», así que al negarla se convierte en «ninguna».",
  "pasos": [
   "Identifico la estructura: es una <b>conjunción</b> A ∧ B, con A = «salieron algunas caras» y B = «salieron algunas cruces».",
   "Aplico la ley de De Morgan para la negación de un «y»: <code>¬(A ∧ B) = ¬A ∨ ¬B</code>. Ojo: el «y» se transforma en «o».",
   "Niego A: «algunas caras» = «al menos una cara»; su negación (por <code>¬∃ = ∀¬</code>) es «ninguna cara», es decir <b>10 cruces</b>. Entonces ¬A = «no salió ninguna cara».",
   "Niego B: «algunas cruces» = «al menos una cruz»; su negación es «ninguna cruz», es decir <b>10 caras</b>. Entonces ¬B = «no salió ninguna cruz».",
   "Uno ambas negaciones con «o» (por De Morgan): «no salió ninguna cara O no salió ninguna cruz».",
   "Interpreto el resultado: «ninguna cara» = 10 cruces; «ninguna cruz» = 10 caras. La negación describe justamente los dos casos en que salieron las 10 iguales.",
   "Chequeo con un caso: si hubo 3 caras y 7 cruces, la original (algunas de cada una) es V y la negación debe ser F; en efecto no es «ninguna cara» ni «ninguna cruz», así que el «o» es F. Coherente."
  ],
  "resultado": "No salió ninguna cara o no salió ninguna cruz (salieron las 10 iguales: 10 caras o 10 cruces).",
  "verificar": "Aplicación directa de De Morgan a una conjunción. Error típico número uno: dejar el «y» («no salió ninguna cara y no salió ninguna cruz»), que sería imposible (no puede haber a la vez 10 cruces y 10 caras). De Morgan obliga a cambiar ∧ por ∨."
 },
 {
  "id": "logica-12",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 12",
  "titulo": "Negar «Salió al menos una cara»",
  "enunciado": "Una moneda se lanza 10 veces. Escriba la negación de «Salió al menos una cara».",
  "idea": "Ejercicio de negación de un existencial en lenguaje natural. La regla es <code>¬(∃) = ∀¬</code>: «al menos una cara» significa «existe una cara», y su negación es «ninguna cara». Se reconoce por la frase «al menos una», que es la forma explícita del cuantificador existencial.",
  "pasos": [
   "Interpreto la proposición: «Salió al menos una cara» = «existe al menos un lanzamiento con cara» (∃).",
   "Reconozco que debo negar un existencial ∃.",
   "Aplico <code>¬(∃x P(x)) = ∀x ¬P(x)</code>: la negación de «al menos una cara» es «para todas las tiradas, no hubo cara», o sea <b>ninguna cara</b>.",
   "Traduzco a lenguaje natural: «no se obtuvieron caras».",
   "Como cada tirada es cara o cruz, «ninguna cara» equivale a que <b>las 10 fueron cruces</b>.",
   "Escribo la negación: «No se obtuvieron caras» (equivalente: «se obtuvieron 10 cruces»).",
   "Chequeo con casos: con 1 o más caras la original es V y la negación F; con 0 caras (10 cruces) la original es F y la negación V. Coherente."
  ],
  "resultado": "No se obtuvieron caras. (Alternativa: se obtuvieron 10 cruces).",
  "verificar": "Coincide con la solución del libro (ej. 12). Recordá: la negación de «al menos una» es «ninguna» (no «a lo sumo una» ni «alguna cruz»). Error típico: responder «salió a lo sumo una cara»; eso sigue permitiendo una cara y no niega la existencia."
 },
 {
  "id": "logica-13",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 13",
  "titulo": "Valor de verdad de p ∨ q (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si la proposición p ∨ q es verdadera o falsa.",
  "idea": "Ejercicio de <b>valuación</b>: hay valores fijos para p, q, r y se pide el valor de verdad de una fórmula. La regla de fondo es la semántica de la <b>disyunción</b> ∨: <code>p ∨ q</code> es verdadera si al menos una de las dos es verdadera, y solo es <b>falsa cuando ambas son falsas</b>. Se reconoce por el conectivo ∨ («o» inclusivo).",
  "pasos": [
   "Anoto los valores dados: p = F, q = V (r = F no se usa en esta fórmula).",
   "Sustituyo en la fórmula: <code>p ∨ q</code> se convierte en <code>F ∨ V</code>.",
   "Recuerdo la regla del conectivo ∨: la disyunción solo es F si <b>ambas</b> partes son F; en cualquier otro caso es V.",
   "Analizo el caso F ∨ V: hay una parte verdadera (q = V), así que no estamos en el único caso falso (F ∨ F).",
   "Concluyo que <code>F ∨ V = V</code>: la disyunción es <b>verdadera</b> gracias a q.",
   "Observo que basta una sola parte verdadera para que toda la disyunción sea verdadera, sin importar la otra."
  ],
  "resultado": "Verdadero.",
  "verificar": "Coincide con la solución del libro (ej. 13). ∨ solo es F si ambas son F. Error típico: pensar que como p es falsa toda la disyunción es falsa; en un «o» alcanza con que una parte (q) sea verdadera para que el conjunto sea verdadero."
 },
 {
  "id": "logica-14",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 14",
  "titulo": "Valor de verdad de ¬p ∨ ¬q (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si ¬p ∨ ¬q es verdadera o falsa.",
  "idea": "Ejercicio de valuación con <b>negaciones</b> dentro de una disyunción. Reglas de fondo: la negación ¬ <b>invierte</b> el valor (¬V = F, ¬F = V), y la disyunción ∨ es V salvo que ambas partes sean F. El orden correcto es: primero resolver cada ¬ y después el ∨. Se reconoce por los símbolos ¬ aplicados a las variables antes del ∨.",
  "pasos": [
   "Anoto los valores: p = F, q = V.",
   "Resuelvo primero las <b>negaciones</b> (van antes que ∨). La negación invierte: <code>¬p = ¬F = V</code>.",
   "Del mismo modo: <code>¬q = ¬V = F</code>.",
   "Sustituyo los resultados en la disyunción: <code>¬p ∨ ¬q = V ∨ F</code>.",
   "Aplico la regla de ∨: es V si al menos una parte es V; aquí ¬p = V, así que no estamos en el caso F ∨ F.",
   "Concluyo que <code>V ∨ F = V</code>: la disyunción es <b>verdadera</b>, sostenida por ¬p.",
   "Verifico el orden de operaciones: negué antes de disyuntar; si por error hubiera hecho ¬(p ∨ q) el resultado sería otro, pero la fórmula no tiene paréntesis, así que ¬ afecta solo a cada variable."
  ],
  "resultado": "Verdadero.",
  "verificar": "∨ es V si alguna parte es V. Comprobación: ¬p = V alcanza para que todo el ∨ sea V. Error típico: confundir <code>¬p ∨ ¬q</code> con <code>¬(p ∨ q)</code>; sin paréntesis, cada ¬ actúa solo sobre su variable."
 },
 {
  "id": "logica-15",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 15",
  "titulo": "Valor de verdad de ¬p ∨ q (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si ¬p ∨ q es verdadera o falsa.",
  "idea": "Ejercicio de valuación: una negación aplicada a p y luego una disyunción con q. Reglas de fondo: ¬ <b>invierte</b> el valor de p, y ∨ es V salvo que ambas partes sean F. Primero se resuelve la negación y después la disyunción. Se reconoce por el ¬ delante de p y el ∨ con q.",
  "pasos": [
   "Anoto los valores: p = F, q = V.",
   "Resuelvo primero la <b>negación</b> (tiene prioridad sobre ∨): <code>¬p = ¬F = V</code>, porque ¬ invierte el valor.",
   "Sustituyo en la disyunción: <code>¬p ∨ q = V ∨ q = V ∨ V</code>.",
   "Aplico la regla de ∨: es V si al menos una parte es V. Aquí ambas son V.",
   "Concluyo que <code>V ∨ V = V</code>: la disyunción es <b>verdadera</b> (de hecho, doblemente asegurada).",
   "Observo que incluso con solo una de las dos partes verdadera el resultado ya sería V; tener ambas V lo refuerza."
  ],
  "resultado": "Verdadero.",
  "verificar": "Ambas partes son V, de modo que ∨ es V. Comprobación: el único caso en que ∨ da F es F ∨ F, y aquí no ocurre. Error típico: aplicar la negación al resultado final en vez de solo a p; sin paréntesis, ¬ afecta únicamente a p."
 },
 {
  "id": "logica-16",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 16",
  "titulo": "Valor de verdad de ¬p ∨ ¬(q ∧ r) (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si ¬p ∨ ¬(q ∧ r) es verdadera o falsa.",
  "idea": "Ejercicio de valuación con <b>paréntesis y varias negaciones</b>. Reglas de fondo: se resuelve de <b>adentro hacia afuera</b> (primero el paréntesis, luego las negaciones, al final la disyunción). Semántica: ∧ es V solo si ambas son V; ¬ invierte; ∨ es V salvo que ambas sean F. Se reconoce por el paréntesis interno (q ∧ r) negado y la disyunción exterior.",
  "pasos": [
   "Anoto los valores: p = F, q = V, r = F.",
   "Resuelvo primero el <b>paréntesis interno</b> con ∧: <code>q ∧ r = V ∧ F</code>. La conjunción es V solo si ambas son V; como r = F, resulta <code>V ∧ F = F</code>.",
   "Aplico la negación sobre el paréntesis: <code>¬(q ∧ r) = ¬F = V</code> (¬ invierte el F en V).",
   "Resuelvo la otra negación: <code>¬p = ¬F = V</code>.",
   "Sustituyo en la disyunción exterior: <code>¬p ∨ ¬(q ∧ r) = V ∨ V</code>.",
   "Aplico la regla de ∨: con al menos una parte V el resultado es V; aquí ambas son V.",
   "Concluyo que <code>V ∨ V = V</code>: la fórmula es <b>verdadera</b>."
  ],
  "resultado": "Verdadero.",
  "verificar": "Coincide con la solución del libro (ej. 16). Comprobación del orden: primero (q ∧ r) = F, luego su negación V; por sí solo ese término ya hace V la disyunción. Error típico: olvidar el paréntesis y calcular ¬q ∧ r en vez de ¬(q ∧ r); los paréntesis mandan y cambian el resultado."
 },
 {
  "id": "logica-17",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 17",
  "titulo": "Valor de verdad de ¬(p ∨ q) ∧ (¬p ∨ r) (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si ¬(p ∨ q) ∧ (¬p ∨ r) es verdadera o falsa.",
  "idea": "Ejercicio de valuación de una <b>conjunción de dos bloques</b>. Regla clave: una conjunción ∧ es <b>falsa apenas uno de sus factores sea falso</b> (solo es V si ambos son V). Conviene evaluar un factor y, si da F, ya se concluye. Se resuelve de adentro hacia afuera cada bloque. Se reconoce por el ∧ central que une ¬(p ∨ q) con (¬p ∨ r).",
  "pasos": [
   "Anoto los valores: p = F, q = V, r = F.",
   "Evalúo el <b>primer factor</b> ¬(p ∨ q). Dentro: <code>p ∨ q = F ∨ V = V</code> (∨ es V porque q = V).",
   "Aplico la negación externa: <code>¬(p ∨ q) = ¬V = F</code>.",
   "Uso la regla del conectivo ∧: si un factor es F, toda la conjunción es F, sin importar el otro factor. El primer factor ya dio F.",
   "Concluyo que la fórmula es <b>falsa</b> (podría detenerme aquí).",
   "Comprobación del segundo factor por completitud: <code>¬p ∨ r = ¬F ∨ F = V ∨ F = V</code>.",
   "Junto ambos factores: <code>F ∧ V = F</code>, confirmando el resultado."
  ],
  "resultado": "Falso.",
  "verificar": "∧ es F si algún factor es F. Aquí el primer factor ¬(p ∨ q) es F, así que la conjunción es F aunque el segundo sea V. Error típico: negar solo p dentro del primer bloque (¬p ∨ q) en lugar de negar todo el paréntesis ¬(p ∨ q); el paréntesis cambia por completo el valor."
 },
 {
  "id": "logica-18",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 18",
  "titulo": "Valor de verdad de (p ∨ ¬r) ∧ ¬((q ∨ r) ∨ ¬(r ∨ p)) (p=F, q=V, r=F)",
  "enunciado": "Siendo p falsa, q verdadera y r falsa, determine si (p ∨ ¬r) ∧ ¬((q ∨ r) ∨ ¬(r ∨ p)) es verdadera o falsa.",
  "idea": "Ejercicio de valuación de una fórmula <b>anidada</b> con varios paréntesis. Reglas de fondo: evaluar de <b>adentro hacia afuera</b>, respetando cada paréntesis; ∨ es V salvo F ∨ F; ¬ invierte; y la conjunción ∧ final es F si algún factor es F. Se reconoce por la estructura A ∧ B con B fuertemente anidado.",
  "pasos": [
   "Anoto los valores: p = F, q = V, r = F.",
   "Evalúo el <b>primer factor</b> (p ∨ ¬r): primero <code>¬r = ¬F = V</code>, luego <code>p ∨ ¬r = F ∨ V = V</code>.",
   "Empiezo el <b>segundo factor</b> desde lo más interno. Calculo <code>q ∨ r = V ∨ F = V</code>.",
   "Calculo el otro interno <code>r ∨ p = F ∨ F = F</code> (∨ da F porque ambas son F), y su negación <code>¬(r ∨ p) = ¬F = V</code>.",
   "Combino dentro del paréntesis grande: <code>(q ∨ r) ∨ ¬(r ∨ p) = V ∨ V = V</code>.",
   "Aplico la negación externa de ese bloque: <code>¬(...) = ¬V = F</code>. Este es el segundo factor.",
   "Uno los dos factores con ∧: <code>V ∧ F = F</code> (la conjunción es F porque el segundo factor es F).",
   "Concluyo que la fórmula es <b>falsa</b>."
  ],
  "resultado": "Falso.",
  "verificar": "El segundo factor es F, de modo que la conjunción es F. Comprobación de la regla ∧: basta un factor F (aquí el segundo) para que todo sea F, aunque el primero valga V. Error típico: perder el hilo de los paréntesis anidados; conviene ir anotando el valor de cada sub-bloque de adentro hacia afuera para no confundir un ∨ con el ∨ exterior."
 },
 {
  "id": "logica-19",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 19",
  "titulo": "Tabla de verdad de p ∧ ¬q",
  "enunciado": "Escriba la tabla de verdad de la proposición p ∧ ¬q.",
  "idea": "Ejercicio de <b>tabla de verdad</b>: hay que mostrar el valor de la fórmula para TODAS las combinaciones de sus variables. Con 2 variables (p, q) hay <code>2² = 4</code> filas. Reglas de los conectivos: ¬ <b>invierte</b> el valor; y la conjunción ∧ es V <b>solo si ambas partes son V</b>. Se reconoce por el pedido de «escribir la tabla de verdad».",
  "pasos": [
   "Cuento las variables: hay 2 (p y q), así que la tabla tiene <code>2² = 4</code> filas con todas las combinaciones.",
   "Armo la <b>columna de p</b> y la <b>de q</b> listando las 4 combinaciones ordenadas: V-V, V-F, F-V, F-F.",
   "Agrego una <b>columna auxiliar ¬q</b>: como ¬ invierte, ¬q vale F donde q = V y V donde q = F. Queda ¬q = F, V, F, V para las cuatro filas.",
   "Agrego la <b>columna final p ∧ ¬q</b>: aplico la regla de ∧ tomando p y la columna ¬q. La conjunción es V solo si p = V y ¬q = V (es decir, p = V y q = F).",
   "Fila por fila: (V,V)→¬q=F→V∧F=F; (V,F)→¬q=V→V∧V=<b>V</b>; (F,V)→¬q=F→F∧F=F; (F,F)→¬q=V→F∧V=F.",
   "Reviso el resultado: hay una <b>única fila verdadera</b>, la segunda (p = V, q = F), que es justo cuando p es verdadera y q falsa.",
   "Ordeno todo en la tabla con las columnas p, q, ¬q y p ∧ ¬q."
  ],
  "resultado": "p q | ¬q | p∧¬q\nV V |  F |  F\nV F |  V |  V\nF V |  F |  F\nF F |  V |  F",
  "verificar": "Verificado con tabla; coincide con el libro (única V en la fila V-F). Comprobación conceptual: <code>p ∧ ¬q</code> pide «p verdadera Y q falsa» a la vez, y solo la fila V-F cumple ambas. Error típico: olvidar invertir q en la columna ¬q, o marcar V en filas donde p es F (con p falsa, la conjunción nunca puede ser V)."
 },
 {
  "id": "logica-20",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 20",
  "titulo": "Tabla de verdad de (¬p ∨ ¬q) ∨ p",
  "enunciado": "Escriba la tabla de verdad de (¬p ∨ ¬q) ∨ p.",
  "idea": "Ejercicio de <b>tabla de verdad</b> que además revela una <b>tautología</b> (fórmula V en todas las filas). Con 2 variables hay <code>2² = 4</code> filas. Reglas: ¬ invierte; ∨ es V salvo que ambas partes sean F. Se reconoce por el pedido de la tabla; y como la fórmula combina ¬p, ¬q y p con «o», conviene sospechar que siempre resulta V.",
  "pasos": [
   "Cuento las variables: 2 (p y q) → <code>2² = 4</code> filas. Listo las combinaciones V-V, V-F, F-V, F-F.",
   "Armo las <b>columnas auxiliares ¬p y ¬q</b> invirtiendo cada variable: ¬p = F,F,V,V y ¬q = F,V,F,V en las cuatro filas.",
   "Calculo el <b>bloque (¬p ∨ ¬q)</b> con la regla de ∨ (F solo si ambas son F): fila V-V → F∨F=F; V-F → F∨V=V; F-V → V∨F=V; F-F → V∨V=V. Queda F, V, V, V.",
   "Calculo la <b>columna final (¬p ∨ ¬q) ∨ p</b> uniendo el bloque anterior con p mediante ∨.",
   "Fila por fila: (V,V)→ bloque F, p=V → F∨V=<b>V</b>; (V,F)→ bloque V → V∨V=V; (F,V)→ bloque V, p=F → V∨F=V; (F,F)→ bloque V → V∨F=V.",
   "Observo el patrón clave: en la única fila donde el bloque daba F (p = V, q = V), justamente p = V «rescata» la disyunción y la vuelve V.",
   "Concluyo que la columna final es <b>V en las 4 filas</b>: la fórmula es una <b>tautología</b>."
  ],
  "resultado": "p q | ¬p∨¬q | (¬p∨¬q)∨p\nV V |   F   |    V\nV F |   V   |    V\nF V |   V   |    V\nF F |   V   |    V",
  "verificar": "Es una TAUTOLOGÍA (V en todas las filas). Comprobación conceptual: cuando el bloque ¬p ∨ ¬q vale F es porque p y q son ambas V; en ese caso p = V hace V la disyunción final. En las demás filas el bloque ya es V. Error típico: negar mal el bloque final o suponer que si ¬p ∨ ¬q es F la fórmula entera es F, olvidando el ∨ p que la completa."
 },
 {
  "id": "logica-21",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 21",
  "titulo": "Tabla de verdad de (p ∨ q) ∧ ¬p",
  "enunciado": "Escriba la tabla de verdad de (p ∨ q) ∧ ¬p.",
  "idea": "Se reconoce como una <b>tabla de verdad</b> porque piden desarrollar todos los valores posibles de una fórmula con conectivos. La regla de fondo es que el conectivo principal es la conjunción <code>∧</code>, que solo da <b>V</b> cuando <i>sus dos partes</i> son V a la vez; aquí esas partes son <code>(p ∨ q)</code> y <code>¬p</code>. Como <code>¬p</code> exige que p sea F, y a la vez <code>(p ∨ q)</code> necesita que algo sea V, la única salida es que p sea F y q sea V.",
  "pasos": [
   "Con 2 variables hay <code>2² = 4</code> filas. Se ordenan de forma estándar: VV, VF, FV, FF.",
   "<b>Columna p ∨ q</b> (disyunción, «o» inclusivo): es V si al menos una de p, q es V, y solo es F cuando ambas son F. Da: V, V, V, F.",
   "<b>Columna ¬p</b> (negación): invierte el valor de p. Como p vale V, V, F, F, entonces ¬p vale F, F, V, V.",
   "<b>Columna final (p ∨ q) ∧ ¬p</b>: la conjunción es V solo si <i>ambas columnas anteriores</i> son V en esa fila. Se compara fila por fila.",
   "Fila p=V, q=V: (p∨q)=V pero ¬p=F → V ∧ F = <b>F</b>. Fila p=V, q=F: V ∧ F = <b>F</b>.",
   "Fila p=F, q=V: (p∨q)=V y ¬p=V → V ∧ V = <b>V</b>. Fila p=F, q=F: (p∨q)=F y ¬p=V → F ∧ V = <b>F</b>.",
   "La columna final queda F, F, V, F: aparece <i>al menos una V y al menos una F</i>, así que se clasifica como <b>contingencia</b> (ni tautología ni contradicción)."
  ],
  "resultado": "p q | p∨q | ¬p | (p∨q)∧¬p\nV V |  V  |  F |    F\nV F |  V  |  F |    F\nF V |  V  |  V |    V\nF F |  F  |  V |    F",
  "verificar": "Contingencia (una sola V). Error típico: olvidar que ∧ exige que las <b>dos</b> columnas sean V y marcar V en la primera fila solo porque (p∨q) ya es V; hay que mirar también ¬p, que ahí es F."
 },
 {
  "id": "logica-22",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 22",
  "titulo": "Tabla de verdad de (p ∧ q) ∧ ¬p",
  "enunciado": "Escriba la tabla de verdad de (p ∧ q) ∧ ¬p.",
  "idea": "Es una <b>tabla de verdad</b> cuyo conectivo principal es la conjunción <code>∧</code>. La regla de fondo es que la fórmula pide <i>a la vez</i> dos cosas incompatibles: por el factor <code>(p ∧ q)</code> necesita que p sea V, y por el factor <code>¬p</code> necesita que p sea F. Como p no puede ser V y F simultáneamente, se anticipa que dará F en todas las filas, es decir, una <b>contradicción</b>.",
  "pasos": [
   "Con 2 variables hay <code>2² = 4</code> filas ordenadas: VV, VF, FV, FF.",
   "<b>Columna p ∧ q</b> (conjunción): es V solo cuando p y q son ambas V; en el resto es F. Da: V, F, F, F.",
   "<b>Columna ¬p</b> (negación): invierte p (que vale V, V, F, F), quedando F, F, V, V.",
   "<b>Columna final (p ∧ q) ∧ ¬p</b>: conjunción de las dos columnas anteriores; solo sería V donde ambas fueran V en la misma fila.",
   "Fila p=V, q=V: (p∧q)=V pero ¬p=F → V ∧ F = <b>F</b>. Justo donde (p∧q) es V, ¬p es F.",
   "Filas con p=F (F V y F F): allí ¬p=V, pero (p∧q)=F → F ∧ V = <b>F</b>. Y la fila V F ya tenía (p∧q)=F.",
   "La columna final es F, F, F, F: <i>ningún</i> caso da V, por lo tanto se clasifica como <b>contradicción</b>. Se confirma la incompatibilidad prevista entre exigir p verdadera y p falsa."
  ],
  "resultado": "p q | p∧q | ¬p | (p∧q)∧¬p\nV V |  V  |  F |    F\nV F |  F  |  F |    F\nF V |  F  |  V |    F\nF F |  F  |  V |    F",
  "verificar": "Es una <b>CONTRADICCIÓN</b> (F en todas las filas). Error típico: confundir esta fórmula con una contingencia por no notar que las columnas (p∧q) y ¬p nunca valen V en la misma fila."
 },
 {
  "id": "logica-23",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 23",
  "titulo": "Tabla de verdad de (p ∧ q) ∨ (¬p ∨ q)",
  "enunciado": "Escriba la tabla de verdad de (p ∧ q) ∨ (¬p ∨ q).",
  "idea": "Es una <b>tabla de verdad</b> cuyo conectivo principal es la disyunción <code>∨</code> que une los bloques <code>(p ∧ q)</code> y <code>(¬p ∨ q)</code>. La regla de fondo es que una disyunción solo es F cuando <i>las dos partes</i> son F; por eso conviene buscar dónde ambos bloques fallan a la vez, que ocurre únicamente con p=V y q=F.",
  "pasos": [
   "Con 2 variables hay <code>2² = 4</code> filas: VV, VF, FV, FF.",
   "<b>Columna p ∧ q</b>: V solo con p y q verdaderas → V, F, F, F.",
   "<b>Columna auxiliar ¬p</b>: invierte p (V,V,F,F) → F, F, V, V. Con ella se arma <b>¬p ∨ q</b>: V si ¬p o q es V; solo F cuando ¬p=F y q=F, es decir en la fila p=V, q=F. Da: V, F, V, V.",
   "<b>Columna final (p ∧ q) ∨ (¬p ∨ q)</b>: disyunción de las columnas (p∧q) y (¬p∨q); es F solo si ambas son F en la misma fila.",
   "Fila p=V, q=V: V ∨ V = <b>V</b>. Fila p=V, q=F: (p∧q)=F y (¬p∨q)=F → F ∨ F = <b>F</b>.",
   "Fila p=F, q=V: F ∨ V = <b>V</b>. Fila p=F, q=F: (p∧q)=F pero (¬p∨q)=V → F ∨ V = <b>V</b>.",
   "La columna final es V, F, V, V: hay Vs y una F, por lo tanto es <b>contingencia</b>. El único F coincide con la fila donde ambos bloques valían F."
  ],
  "resultado": "p q | p∧q | ¬p∨q | resultado\nV V |  V  |   V  |    V\nV F |  F  |   F  |    F\nF V |  F  |   V  |    V\nF F |  F  |   V  |    V",
  "verificar": "Contingencia (un solo F). Error típico: creer que ∨ es F apenas uno de los bloques sea F; en realidad se necesitan los <b>dos</b> bloques en F, cosa que solo pasa en p=V, q=F."
 },
 {
  "id": "logica-24",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 24",
  "titulo": "Tabla de verdad de ¬(p ∧ q) ∨ (r ∧ ¬p)",
  "enunciado": "Escriba la tabla de verdad de ¬(p ∧ q) ∨ (r ∧ ¬p) (tres variables p, q, r).",
  "idea": "Es una <b>tabla de verdad de tres variables</b>, así que tendrá <code>2³ = 8</code> filas. El conectivo principal es la disyunción <code>∨</code> entre <code>¬(p ∧ q)</code> y <code>(r ∧ ¬p)</code>. La regla de fondo: la disyunción solo es F cuando ambos bloques son F; el primer bloque <code>¬(p ∧ q)</code> es F únicamente cuando p y q son ambas V, y en ese caso p=V hace que <code>¬p</code>=F y por lo tanto <code>r ∧ ¬p</code> también sea F.",
  "pasos": [
   "Se listan las <code>2³ = 8</code> combinaciones de p, q, r en orden estándar (de VVV a FFF).",
   "<b>Columna p ∧ q</b> y luego <b>¬(p ∧ q)</b>: la conjunción p∧q es V solo en las filas con p=V y q=V (las dos primeras); al negar, ¬(p∧q) es F justo ahí y V en las otras seis.",
   "<b>Columna r ∧ ¬p</b>: primero ¬p (V cuando p=F); luego r ∧ ¬p es V solo cuando r=V y p=F a la vez. Eso ocurre en las filas F V V y F F V.",
   "<b>Columna final ¬(p ∧ q) ∨ (r ∧ ¬p)</b>: disyunción de los dos bloques; F solo si ambos son F en la misma fila.",
   "Filas VVV y VVF: ¬(p∧q)=F y, como p=V, (r∧¬p)=F → F ∨ F = <b>F</b> en ambas.",
   "Todas las demás filas tienen ¬(p∧q)=V (porque no cumplen p=V y q=V), y V ∨ (lo que sea) = <b>V</b>.",
   "La columna final da F, F, V, V, V, V, V, V: hay Vs y Fs, por lo tanto es <b>contingencia</b>. Los dos F son exactamente las filas con p=V y q=V."
  ],
  "resultado": "p q r | ¬(p∧q) | r∧¬p | resultado\nV V V |   F    |  F   |    F\nV V F |   F    |  F   |    F\nV F V |   V    |  F   |    V\nV F F |   V    |  F   |    V\nF V V |   V    |  V   |    V\nF V F |   V    |  F   |    V\nF F V |   V    |  V   |    V\nF F F |   V    |  F   |    V",
  "verificar": "Contingencia. Error típico: al armar r∧¬p olvidar la condición p=F y marcar V donde p es V; conviene recordar que ¬p ya es F en toda fila con p verdadera."
 },
 {
  "id": "logica-25",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 25",
  "titulo": "Tabla de verdad de (p∨q) ∧ (¬p∨q) ∧ (p∨¬q) ∧ (¬p∨¬q)",
  "enunciado": "Escriba la tabla de verdad de (p ∨ q) ∧ (¬p ∨ q) ∧ (p ∨ ¬q) ∧ (¬p ∨ ¬q).",
  "idea": "Es una <b>tabla de verdad</b> cuyo conectivo principal es la conjunción <code>∧</code> de cuatro factores. La regla de fondo es que estos cuatro factores son <i>las cuatro cláusulas posibles</i> que se pueden formar con p, q y sus negaciones; cada una prohíbe exactamente una de las cuatro filas. Como toda fila queda prohibida por al menos un factor, y la conjunción es F si cualquiera de sus factores es F, la fórmula resulta una <b>contradicción</b>.",
  "pasos": [
   "Con 2 variables hay <code>2² = 4</code> filas: VV, VF, FV, FF. Se evalúa cada una de las cuatro cláusulas (recordando que ∨ solo es F cuando sus dos partes son F).",
   "<b>p ∨ q</b>: F únicamente en la fila F F (ambas F). En las otras tres es V.",
   "<b>¬p ∨ q</b>: F únicamente cuando ¬p=F y q=F, o sea p=V y q=F (fila V F). En el resto es V.",
   "<b>p ∨ ¬q</b>: F únicamente cuando p=F y ¬q=F, o sea p=F y q=V (fila F V). En el resto es V.",
   "<b>¬p ∨ ¬q</b>: F únicamente cuando ¬p=F y ¬q=F, o sea p=V y q=V (fila V V). En el resto es V.",
   "<b>Columna final</b> (conjunción de las cuatro): en cada fila hay <i>exactamente una</i> cláusula que vale F, y basta un factor en F para que toda la conjunción sea <b>F</b>.",
   "Recorriendo: V V falla por (¬p∨¬q); V F falla por (¬p∨q); F V falla por (p∨¬q); F F falla por (p∨q). La columna final es F, F, F, F → <b>contradicción</b>."
  ],
  "resultado": "p q | p∨q | ¬p∨q | p∨¬q | ¬p∨¬q | resultado\nV V |  V  |  V   |  V   |   F   |    F\nV F |  V  |  F   |  V   |   V   |    F\nF V |  V  |  V   |  F   |   V   |    F\nF F |  F  |  V   |  V   |   V   |    F",
  "verificar": "Es una <b>CONTRADICCIÓN</b> (F en todas las filas). Coincide con el libro. Error típico: pensar que basta con que la mayoría de las cláusulas sean V; en una conjunción, <b>un solo factor en F</b> ya vuelve F toda la fila."
 },
 {
  "id": "logica-26",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 26",
  "titulo": "Tabla de verdad de ¬(p ∧ q) ∨ (¬q ∨ r)",
  "enunciado": "Escriba la tabla de verdad de ¬(p ∧ q) ∨ (¬q ∨ r) (tres variables p, q, r).",
  "idea": "Es una <b>tabla de verdad de tres variables</b>, con <code>2³ = 8</code> filas, cuyo conectivo principal es la disyunción <code>∨</code> entre <code>¬(p ∧ q)</code> y <code>(¬q ∨ r)</code>. La regla de fondo: la disyunción solo es F si ambos bloques son F; el primero pide p=V y q=V (para que p∧q sea V y su negación F), y con q=V el segundo bloque <code>¬q ∨ r</code> queda como <code>F ∨ r</code>, que solo es F si además r=F.",
  "pasos": [
   "Se listan las <code>2³ = 8</code> combinaciones de p, q, r en orden estándar (VVV … FFF).",
   "<b>Columna p ∧ q</b> y luego <b>¬(p ∧ q)</b>: p∧q es V solo con p=V y q=V (filas VVV y VVF); al negar, ¬(p∧q) es F ahí y V en las otras seis.",
   "<b>Columna ¬q ∨ r</b>: primero ¬q (V cuando q=F); la disyunción es F solo cuando ¬q=F y r=F, es decir q=V y r=F. Eso ocurre en las filas VVF y FVF.",
   "<b>Columna final ¬(p ∧ q) ∨ (¬q ∨ r)</b>: disyunción de los dos bloques; F solo si ambos son F en la misma fila.",
   "Fila VVF: ¬(p∧q)=F y (¬q∨r)=F → F ∨ F = <b>F</b> (única fila que cumple las dos condiciones a la vez).",
   "Fila FVF: aquí (¬q∨r)=F, pero ¬(p∧q)=V (porque p=F) → V ∨ F = <b>V</b>. Todas las demás tienen algún bloque en V.",
   "La columna final da V, F, V, V, V, V, V, V: hay Vs y una sola F, por lo tanto es <b>contingencia</b>. El único F es la fila p=V, q=V, r=F."
  ],
  "resultado": "p q r | ¬(p∧q) | ¬q∨r | resultado\nV V V |   F    |  V   |    V\nV V F |   F    |  F   |    F\nV F V |   V    |  V   |    V\nV F F |   V    |  V   |    V\nF V V |   V    |  V   |    V\nF V F |   V    |  F   |    V\nF F V |   V    |  V   |    V\nF F F |   V    |  V   |    V",
  "verificar": "Contingencia (un solo F). Error típico: marcar F también en la fila F V F por ver el segundo bloque en F, sin notar que ahí ¬(p∧q)=V salva la disyunción."
 },
 {
  "id": "logica-27",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 27",
  "titulo": "Simbolizar y evaluar «5 < 9 y 9 < 7»",
  "enunciado": "Con p: 5 < 9, q: 9 < 7, r: 5 < 7, represente simbólicamente «5 < 9 y 9 < 7» y diga si es verdadera o falsa.",
  "idea": "Es una <b>traducción de lenguaje coloquial a símbolos</b> más su evaluación. Se reconoce la conjunción por la palabra clave «y», que se simboliza con <code>∧</code>. La regla de fondo es que una conjunción es V únicamente cuando <i>sus dos componentes</i> son V; basta que uno sea F para que todo el «y» sea F.",
  "pasos": [
   "Se identifican las proposiciones dadas: «5 &lt; 9» es p y «9 &lt; 7» es q (r no interviene en esta frase).",
   "La palabra «y» une ambas proposiciones, y «y» se traduce como la conjunción <code>∧</code>.",
   "Simbólicamente, entonces: <code>p ∧ q</code>.",
   "Se asigna el valor de verdad de cada parte según la aritmética. p: «5 &lt; 9» es <b>V</b> (cinco sí es menor que nueve).",
   "q: «9 &lt; 7» es <b>F</b> (nueve no es menor que siete).",
   "Se aplica la regla de la conjunción: <code>p ∧ q</code> = V ∧ F. Como una de las dos partes es F, el resultado es <b>F</b>.",
   "Conclusión: la fórmula <code>p ∧ q</code> es <b>falsa</b>."
  ],
  "resultado": "p ∧ q; falso.",
  "verificar": "Coincide con la solución del libro (ej. 27). Error típico: leer «5 &lt; 9» como falso; recordar que «&lt;» es «menor que» y 5 sí es menor que 9, así que p es V y el que arrastra la falsedad es q."
 },
 {
  "id": "logica-28",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 28",
  "titulo": "Simbolizar y evaluar «No ocurre que (5 < 9 y 9 < 7)»",
  "enunciado": "Con p: 5 < 9, q: 9 < 7, represente «No ocurre que (5 < 9 y 9 < 7)» y diga si es verdadera o falsa.",
  "idea": "Es una <b>traducción coloquial→símbolos</b> con evaluación. La frase «No ocurre que (...)» es la señal de la negación <code>¬</code> aplicada a <i>todo el paréntesis</i>, y adentro la «y» es una conjunción. La regla de fondo es que la negación invierte el valor de verdad de lo que abarca: si el paréntesis es F, su negación es V, y viceversa.",
  "pasos": [
   "Dentro del paréntesis, «5 &lt; 9 y 9 &lt; 7» se simboliza como <code>p ∧ q</code> (la «y» es ∧).",
   "La expresión «No ocurre que (...)» niega ese bloque completo; el rol de los paréntesis es indicar que la negación cubre <i>toda</i> la conjunción, no solo p.",
   "Simbólicamente: <code>¬(p ∧ q)</code>.",
   "Se evalúa primero lo de adentro. p: «5 &lt; 9» es V; q: «9 &lt; 7» es F.",
   "Conjunción interna: <code>p ∧ q</code> = V ∧ F = <b>F</b>.",
   "Se aplica la negación externa a ese resultado: <code>¬(p ∧ q)</code> = ¬F = <b>V</b>.",
   "Conclusión: la fórmula es <b>verdadera</b>."
  ],
  "resultado": "¬(p ∧ q); verdadero.",
  "verificar": "Es la negación del ejercicio 27, así que el valor se invierte (allí F, aquí V). Error típico: negar solo p y escribir ¬p ∧ q; los paréntesis obligan a negar toda la conjunción."
 },
 {
  "id": "logica-29",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 29",
  "titulo": "Simbolizar y evaluar «5 < 9 o no ocurre que (9 < 7 y 5 < 7)»",
  "enunciado": "Con p: 5 < 9, q: 9 < 7, r: 5 < 7, represente «5 < 9 o no ocurre que (9 < 7 y 5 < 7)» y diga si es verdadera o falsa.",
  "idea": "Es una <b>traducción coloquial→símbolos</b> con evaluación, y combina tres conectivos. El «o» principal es la disyunción <code>∨</code>; «no ocurre que (...)» es la negación <code>¬</code> del paréntesis; y dentro la «y» es la conjunción <code>∧</code>. La regla de fondo es que una disyunción es V si <i>al menos una</i> de sus partes es V, así que si p ya es V, todo el «o» será V sin importar lo demás.",
  "pasos": [
   "Se identifican las piezas: «5 &lt; 9» es p, «9 &lt; 7» es q, «5 &lt; 7» es r.",
   "El bloque interno «9 &lt; 7 y 5 &lt; 7» se simboliza como <code>q ∧ r</code>, y «no ocurre que (...)» lo niega: <code>¬(q ∧ r)</code>. Los paréntesis fijan que la negación cubre toda la conjunción q∧r.",
   "El «o» principal une «5 &lt; 9» (o sea p) con ese bloque negado. Simbólicamente: <code>p ∨ ¬(q ∧ r)</code>.",
   "Se evalúan los valores: p: «5 &lt; 9» = V; q: «9 &lt; 7» = F; r: «5 &lt; 7» = V.",
   "Conjunción interna: <code>q ∧ r</code> = F ∧ V = F; su negación: <code>¬(q ∧ r)</code> = ¬F = V.",
   "Disyunción principal: <code>p ∨ ¬(q ∧ r)</code> = V ∨ V = <b>V</b>.",
   "Conclusión: la fórmula es <b>verdadera</b> (de hecho, como p ya es V, la disyunción quedaba V incluso sin calcular el segundo término)."
  ],
  "resultado": "p ∨ ¬(q ∧ r); verdadero.",
  "verificar": "Como p ya es V, la disyunción es V. Error típico: dejar que la negación abarque de más (por ejemplo negar también p) o confundir el «o» con un «y»; el conectivo principal aquí es ∨."
 },
 {
  "id": "logica-30",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 30",
  "titulo": "Traducir ¬p a palabras (p: Leo toma CS)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras la expresión simbólica ¬p.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> (el sentido inverso al de simbolizar). Se reconoce por pedir «exprese en palabras». La regla de fondo es que el conectivo <code>¬</code> (negación) se lee como «no» y niega el enunciado al que se aplica; el «no» se inserta de forma natural en la oración castellana.",
  "pasos": [
   "Se identifica el conectivo: <code>¬</code> es la negación, que se traduce como «no».",
   "Se toma el significado asignado a la letra: p = «Leo toma ciencias de la computación».",
   "La negación <code>¬p</code> afecta a toda esa proposición, es decir, niega el hecho de que Leo la tome.",
   "Para redactarlo en castellano correcto, el «no» se coloca delante del verbo «toma», no al principio de la frase de forma aislada.",
   "Resultado: «Leo <b>no</b> toma ciencias de la computación».",
   "Se comprueba el sentido: si p es «Leo toma CS», su negación debe describir exactamente el caso contrario, y así lo hace."
  ],
  "resultado": "Leo no toma ciencias de la computación.",
  "verificar": "Coincide con la solución del libro (ej. 30). Error típico: negar la frase entera con un artificial «No es cierto que Leo toma...»; es válido, pero lo natural es insertar el «no» junto al verbo."
 },
 {
  "id": "logica-31",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 31",
  "titulo": "Traducir p ∧ q a palabras (Leo)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras p ∧ q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b>. Se reconoce la conjunción por el conectivo <code>∧</code>, que se lee como «y». La regla de fondo es que <code>∧</code> une dos proposiciones afirmando que <i>ambas</i> se cumplen a la vez, y en castellano eso se expresa con la conjunción «y».",
  "pasos": [
   "Se identifica el conectivo: <code>∧</code> se traduce como «y».",
   "Se recuperan los significados: p = «Leo toma ciencias de la computación», q = «Leo toma matemáticas».",
   "La fórmula <code>p ∧ q</code> afirma las dos cosas simultáneamente, así que se enlazan p y q con «y».",
   "Se redacta cuidando la naturalidad del castellano: como el sujeto «Leo» se repite, puede sobreentenderse en la segunda parte para no sonar repetitivo.",
   "Resultado literal: «Leo toma ciencias de la computación y Leo toma matemáticas».",
   "Resultado pulido: «Leo toma ciencias de la computación y toma matemáticas» (mismo significado, más fluido)."
  ],
  "resultado": "Leo toma ciencias de la computación y toma matemáticas.",
  "verificar": "Conjunción traducida con «y». Error típico: cambiar «y» por «o», lo que convertiría la conjunción en disyunción y alteraría el significado."
 },
 {
  "id": "logica-32",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 32",
  "titulo": "Traducir p ∧ ¬q a palabras (Leo)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras p ∧ ¬q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> que combina dos conectivos: la conjunción <code>∧</code> («y») y la negación <code>¬</code> («no») aplicada solo a q. La regla de fondo es respetar el alcance de cada conectivo: el «no» afecta únicamente a q, mientras que el «y» enlaza p (afirmada) con q (negada).",
  "pasos": [
   "Se traduce primero la parte negada: <code>¬q</code> = «Leo no toma matemáticas» (el «no» va junto al verbo).",
   "Se conserva p tal cual, en afirmativo: p = «Leo toma ciencias de la computación».",
   "El conectivo principal <code>∧</code> une p con ¬q mediante «y».",
   "Es clave notar que la negación abarca solo q, no p: Leo sí toma CS, pero no matemáticas.",
   "Se arma la oración enlazando ambas partes con «y».",
   "Resultado: «Leo toma ciencias de la computación y no toma matemáticas»."
  ],
  "resultado": "Leo toma ciencias de la computación y no toma matemáticas.",
  "verificar": "Se niega solo q y se une con «y». Error típico: extender el «no» a toda la frase (como si fuera ¬(p ∧ q)); aquí p se afirma y únicamente q se niega."
 },
 {
  "id": "logica-33",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 33",
  "titulo": "Traducir p ∨ ¬q a palabras (Leo)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras p ∨ ¬q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> que mezcla la disyunción <code>∨</code> («o») con la negación <code>¬</code> («no») sobre q. La regla de fondo es leer <code>∨</code> como «o» inclusivo y mantener el «no» pegado únicamente a q, sin que alcance a p.",
  "pasos": [
   "Se traduce la parte negada: <code>¬q</code> = «Leo no toma matemáticas».",
   "Se conserva p en afirmativo: p = «Leo toma ciencias de la computación».",
   "El conectivo principal <code>∨</code> se traduce como «o» y une p con ¬q.",
   "El «o» aquí es inclusivo: basta con que se cumpla al menos una de las dos partes (o ambas).",
   "Se enlazan p y ¬q con «o», cuidando que la negación afecte solo a la segunda proposición.",
   "Resultado: «Leo toma ciencias de la computación o Leo no toma matemáticas»."
  ],
  "resultado": "Leo toma ciencias de la computación o Leo no toma matemáticas.",
  "verificar": "Coincide con la solución del libro (ej. 33). Error típico: cambiar el «o» por «y» o hacer que el «no» abarque toda la frase; el conectivo principal es ∨ y la negación es solo de q."
 },
 {
  "id": "logica-34",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 34",
  "titulo": "Traducir p ∨ q a palabras (Leo)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras p ∨ q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b>. Se reconoce la disyunción por el conectivo <code>∨</code>, que se lee como «o». La regla de fondo es que <code>∨</code> afirma que <i>al menos una</i> de las dos proposiciones se cumple (o inclusivo), y en castellano se expresa con «o».",
  "pasos": [
   "Se identifica el conectivo: <code>∨</code> se traduce como «o».",
   "Se recuperan los significados: p = «Leo toma ciencias de la computación», q = «Leo toma matemáticas».",
   "La fórmula <code>p ∨ q</code> enlaza ambas proposiciones con «o», sin ninguna negación de por medio.",
   "El «o» es inclusivo: se cumple si Leo toma CS, si toma matemáticas, o si toma ambas.",
   "Se redacta pudiendo sobreentender el sujeto «Leo» en la segunda parte para mayor fluidez.",
   "Resultado: «Leo toma ciencias de la computación o toma matemáticas»."
  ],
  "resultado": "Leo toma ciencias de la computación o toma matemáticas.",
  "verificar": "Disyunción traducida con «o». Error típico: confundir «o» con «y» (conjunción), lo que cambiaría el significado exigiendo que se cumplan ambas a la vez."
 },
 {
  "id": "logica-35",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 35",
  "titulo": "Traducir ¬p ∧ ¬q a palabras (Leo)",
  "enunciado": "Con p: Leo toma ciencias de la computación, q: Leo toma matemáticas, exprese en palabras ¬p ∧ ¬q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> con dos negaciones unidas por conjunción. Cada <code>¬</code> se lee «no» y el <code>∧</code> se lee «y». La regla de fondo es que negar ambas y unirlas con «y» equivale a la construcción castellana «ni... ni...», que afirma que ninguna de las dos cosas ocurre.",
  "pasos": [
   "Se traduce la primera parte negada: <code>¬p</code> = «Leo no toma ciencias de la computación».",
   "Se traduce la segunda parte negada: <code>¬q</code> = «Leo no toma matemáticas».",
   "El conectivo principal <code>∧</code> une ambas negaciones con «y».",
   "Se observa que negar las dos y conjuntarlas equivale a decir que Leo no toma ni una ni la otra materia.",
   "Redacción literal con «y»: «Leo no toma ciencias de la computación y no toma matemáticas».",
   "Forma equivalente idiomática: «Leo no toma ni ciencias de la computación ni matemáticas» (misma idea con «ni... ni...»)."
  ],
  "resultado": "Leo no toma ciencias de la computación y no toma matemáticas.",
  "verificar": "Conjunción de dos negaciones («ni... ni...»). Error típico: escribir una sola negación que abarque todo, ¬(p ∧ q), que significa algo distinto («no ocurre que tome ambas», y podría tomar una)."
 },
 {
  "id": "logica-36",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 36",
  "titulo": "Traducir p ∨ q a palabras (lunes / lluvia / calor)",
  "enunciado": "Con p: Hoy es lunes, q: Está lloviendo, r: Hace calor, exprese en palabras p ∨ q.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> con un nuevo diccionario de proposiciones. La disyunción <code>∨</code> se lee «o». La regla de fondo es que <code>∨</code> afirma que al menos una de las partes se cumple (o inclusivo); aquí interviene solo p y q, no r.",
  "pasos": [
   "Se identifica el conectivo: <code>∨</code> se traduce como «o».",
   "Se recuperan los significados: p = «Hoy es lunes», q = «Está lloviendo» (r = «Hace calor» no aparece en esta fórmula).",
   "La fórmula <code>p ∨ q</code> enlaza ambas proposiciones con «o».",
   "El «o» es inclusivo: se cumple si hoy es lunes, si está lloviendo, o si ambas cosas.",
   "Se redacta la oración uniendo p y q con «o».",
   "Resultado: «Hoy es lunes o está lloviendo»."
  ],
  "resultado": "Hoy es lunes o está lloviendo.",
  "verificar": "Coincide con la solución del libro (ej. 36). Error típico: incluir a r («hace calor») aunque no figura en la fórmula, o cambiar el «o» por «y»."
 },
 {
  "id": "logica-37",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 37",
  "titulo": "Traducir ¬(p ∨ q) ∧ r a palabras",
  "enunciado": "Con p: Hoy es lunes, q: Está lloviendo, r: Hace calor, exprese en palabras ¬(p ∨ q) ∧ r.",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> con tres conectivos. El <code>∧</code> principal («y») une dos bloques: por un lado <code>¬(p ∨ q)</code>, que es la negación «no ocurre que (...)» de una disyunción, y por otro <code>r</code>. La regla de fondo es respetar el paréntesis: la negación abarca <i>toda</i> la disyunción p ∨ q, y recién después se conjunta con r.",
  "pasos": [
   "Se traduce el interior del paréntesis: <code>p ∨ q</code> = «hoy es lunes o está lloviendo».",
   "Se aplica la negación al paréntesis completo: <code>¬(p ∨ q)</code> = «no ocurre que hoy es lunes o está lloviendo».",
   "El paréntesis es clave: sin él, la negación caería solo sobre p; con él, cubre toda la disyunción.",
   "Se traduce el otro bloque: <code>r</code> = «hace calor».",
   "El conectivo principal <code>∧</code> une ambos bloques con «y».",
   "Resultado: «No ocurre que (hoy es lunes o está lloviendo), y hace calor»."
  ],
  "resultado": "No ocurre que (hoy es lunes o está lloviendo), y hace calor.",
  "verificar": "La negación abarca todo el paréntesis (p ∨ q). Error típico: negar solo p («hoy no es lunes o está lloviendo y hace calor»), que corresponde a ¬p ∨ q y no a ¬(p ∨ q)."
 },
 {
  "id": "logica-38",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 38",
  "titulo": "Traducir ¬p ∧ (q ∨ r) a palabras",
  "enunciado": "Con p: Hoy es lunes, q: Está lloviendo, r: Hace calor, exprese en palabras ¬p ∧ (q ∨ r).",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> con tres conectivos. El <code>∧</code> principal («y») une <code>¬p</code> (una negación puntual) con el paréntesis <code>(q ∨ r)</code> (una disyunción). La regla de fondo es distinguir alcances: el «no» toca solo a p, mientras que el paréntesis agrupa a q y r bajo un «o» que se resuelve como un bloque.",
  "pasos": [
   "Se traduce la parte negada: <code>¬p</code> = «Hoy no es lunes».",
   "Se traduce el paréntesis: <code>q ∨ r</code> = «está lloviendo o hace calor».",
   "Los paréntesis indican que ese «o» funciona como una unidad, que luego se conjunta con ¬p.",
   "El conectivo principal <code>∧</code> une ¬p con (q ∨ r) mediante «y».",
   "Al redactar conviene conservar los paréntesis o una pausa para que se entienda que el «o» agrupa solo a q y r.",
   "Resultado: «Hoy no es lunes y (está lloviendo o hace calor)»."
  ],
  "resultado": "Hoy no es lunes y (está lloviendo o hace calor).",
  "verificar": "La negación afecta solo a p; el paréntesis agrupa la disyunción. Error típico: perder el paréntesis y escribir «hoy no es lunes y está lloviendo o hace calor», que vuelve ambigua la agrupación."
 },
 {
  "id": "logica-39",
  "guia": "Lógica",
  "unidad": "U1",
  "num": "Ejercicio 39",
  "titulo": "Traducir (p ∧ q) ∧ ¬(r ∨ p) a palabras",
  "enunciado": "Con p: Hoy es lunes, q: Está lloviendo, r: Hace calor, exprese en palabras (p ∧ q) ∧ ¬(r ∨ p).",
  "idea": "Es una <b>traducción de símbolos a lenguaje coloquial</b> con varios conectivos anidados. El <code>∧</code> principal («y») une dos bloques: <code>(p ∧ q)</code>, una conjunción, y <code>¬(r ∨ p)</code>, la negación «no ocurre que (...)» de una disyunción. La regla de fondo es traducir cada bloque por separado respetando sus paréntesis y unirlos con «y».",
  "pasos": [
   "Se traduce el primer bloque: <code>p ∧ q</code> = «hoy es lunes y está lloviendo».",
   "Se traduce el interior del segundo paréntesis: <code>r ∨ p</code> = «hace calor o hoy es lunes».",
   "Se aplica la negación a ese paréntesis completo: <code>¬(r ∨ p)</code> = «no ocurre que hace calor o que hoy es lunes».",
   "El paréntesis en ¬(r ∨ p) es esencial: la negación cubre toda la disyunción, no solo r.",
   "El conectivo principal <code>∧</code> une los dos bloques con «y».",
   "Resultado: «(Hoy es lunes y está lloviendo) y no ocurre que (hace calor o que hoy es lunes)»."
  ],
  "resultado": "(Hoy es lunes y está lloviendo) y no ocurre que (hace calor o que hoy es lunes).",
  "verificar": "Coincide con la solución del libro (ej. 39). Error típico: negar solo r dentro del segundo bloque; los paréntesis obligan a que ¬ cubra toda la disyunción r ∨ p (nótese que la fórmula afirma p en el primer bloque y lo niega dentro del segundo)."
 },
 {
  "id": "pim-3",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 3",
  "titulo": "Suma de los primeros n impares = n²",
  "enunciado": "Demostrar por PIM que 1 + 3 + 5 + … + (2n−1) = n² para todo n natural.",
  "idea": "Se reconoce porque hay una <b>sumatoria con cantidad variable de términos</b> (depende de n) igualada a una fórmula cerrada; ese es el patrón típico de PIM. El n-ésimo impar se escribe <code>2n−1</code> (n=1 da 1, n=2 da 3, n=3 da 5, …). El método de fondo es el <b>Principio de Inducción Matemática</b>: verificar el caso base, suponer que la fórmula vale para un h genérico (hipótesis) y probar que entonces también vale para h+1, sumándole a la hipótesis únicamente el término que se agrega.",
  "pasos": [
   "<b>Idea del esquema:</b> como la igualdad depende de n, no podemos probarla \"término a término\" para infinitos casos; usamos PIM. La estructura es siempre: <b>caso base → hipótesis → tesis → paso inductivo</b>.",
   "<b>Caso base (n=1):</b> el lado izquierdo (LHS) tiene un solo sumando, el primer impar, que es <code>2·1−1 = 1</code>. El lado derecho (RHS) es <code>1² = 1</code>. Como <code>1 = 1</code>, la fórmula vale para n=1. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos que para cierto natural h la igualdad es verdadera, es decir <code>1+3+5+…+(2h−1) = h²</code>. Esto NO se demuestra: se asume como punto de partida.",
   "<b>Tesis (n=h+1):</b> queremos probar que también vale al pasar al siguiente natural, o sea <code>1+3+…+(2h−1)+(2(h+1)−1) = (h+1)²</code>. El nuevo término es <code>2(h+1)−1 = 2h+2−1 = 2h+1</code>.",
   "<b>Paso inductivo (arranque):</b> tomamos el LHS de la tesis y separamos el último sumando: <code>[1+3+…+(2h−1)] + (2h+1)</code>. El corchete es exactamente lo que la hipótesis controla.",
   "<b>Uso de la hipótesis:</b> reemplazamos el corchete por <code>h²</code> (esto es lícito porque lo supusimos en el paso anterior): queda <code>h² + (2h+1)</code>.",
   "<b>Manipulación algebraica:</b> distribuimos y ordenamos: <code>h² + 2h + 1</code>. Reconocemos el <b>trinomio cuadrado perfecto</b>, que se factoriza como <code>(h+1)²</code> porque <code>(h+1)² = h²+2h+1</code>.",
   "<b>Cierre:</b> obtuvimos <code>(h+1)²</code>, que es justamente el RHS de la tesis. Por lo tanto, si la fórmula vale para h, vale para h+1.",
   "<b>Conclusión por PIM:</b> como vale para n=1 (base) y el paso h⇒h+1 es válido, por el principio de inducción la fórmula vale para <b>todo</b> n natural. ∎"
  ],
  "resultado": "Queda demostrado: <b>1+3+…+(2n−1) = n²</b> ∀n∈ℕ.",
  "verificar": "Chequeo numérico: n=3 → 1+3+5 = 9 = 3² ✔; n=4 → 1+3+5+7 = 16 = 4² ✔. <b>Error típico:</b> en el paso inductivo sumar mal el nuevo término (usar 2h−1 otra vez en lugar de 2h+1) o no factorizar h²+2h+1 y quedarse a mitad de camino. Truco visual: los impares apilan capas en forma de \"L\" que completan un cuadrado n×n."
 },
 {
  "id": "pim-1",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 1",
  "titulo": "n³ − n es divisible por 3",
  "enunciado": "Demostrar por PIM que n³ − n es divisible por 3 para todo n entero positivo.",
  "idea": "Se reconoce por la palabra <b>divisible</b> (o \"múltiplo de 3\"): son problemas de divisibilidad por inducción. La estrategia de fondo es traducir \"divisible por 3\" a \"se escribe como <code>3·(entero)</code>\", y en el paso inductivo lograr que la expresión en h+1 se reagrupe en un pedazo que es la hipótesis (por eso vale 3k) más un pedazo que evidentemente es múltiplo de 3.",
  "pasos": [
   "<b>Reformulación clave:</b> \"3 divide a X\" significa que existe un entero k con <code>X = 3k</code>. Toda la prueba consiste en fabricar ese k en el caso h+1.",
   "<b>Caso base (n=1):</b> <code>1³−1 = 1−1 = 0</code>. Y 3 divide a 0 porque <code>0 = 3·0</code> (k=0). Vale para n=1. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos que <code>h³−h = 3k</code> para algún entero k. Es lo que vamos a poder \"reemplazar\" más adelante.",
   "<b>Tesis (n=h+1):</b> queremos ver que <code>(h+1)³−(h+1)</code> es divisible por 3, es decir que se escribe como 3·(algún entero).",
   "<b>Desarrollo del cubo:</b> usamos <code>(h+1)³ = h³+3h²+3h+1</code>. Entonces <code>(h+1)³−(h+1) = h³+3h²+3h+1 − h − 1</code>.",
   "<b>Simplificación:</b> el <code>+1</code> y el <code>−1</code> se cancelan, y agrupamos los términos que forman la hipótesis: <code>= (h³−h) + 3h²+3h</code>.",
   "<b>Uso de la hipótesis:</b> reemplazamos <code>h³−h</code> por <code>3k</code>: queda <code>= 3k + 3h² + 3h</code>.",
   "<b>Factor común 3:</b> sacamos 3 de fábrica en todos los términos: <code>= 3(k + h² + h)</code>. Como <code>k+h²+h</code> es un entero, la expresión es múltiplo de 3. ✔",
   "<b>Conclusión por PIM:</b> vale la base (n=1) y el paso h⇒h+1; entonces 3 divide a <code>n³−n</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "<b>3 | (n³−n)</b> para todo n ≥ 1.",
  "verificar": "Chequeo: n=2 → 8−2 = 6 = 3·2 ✔; n=3 → 27−3 = 24 = 3·8 ✔. <b>Mirada alternativa:</b> <code>n³−n = n(n²−1) = (n−1)·n·(n+1)</code>, tres enteros consecutivos, y entre tres consecutivos siempre hay un múltiplo de 3. <b>Error típico:</b> desarrollar mal (h+1)³ (olvidar el 3h² o el 3h) o no reconocer que hay que agrupar (h³−h) para poder usar la hipótesis."
 },
 {
  "id": "pim-5",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 5",
  "titulo": "Suma de 3 enteros consecutivos, divisible por 3",
  "enunciado": "Demostrar que la suma de 3 enteros consecutivos es divisible por 3.",
  "idea": "Aunque el enunciado no exige inducción, conviene una <b>demostración directa</b>: se reconoce porque hablamos de \"consecutivos\", que se parametrizan como <code>n, n+1, n+2</code>. El método de fondo es puramente algebraico: sumar, simplificar y sacar factor común 3 para exhibir explícitamente el múltiplo.",
  "pasos": [
   "<b>Parametrización:</b> \"tres enteros consecutivos\" se escriben, tomando el primero como n, en la forma <code>n, n+1, n+2</code> (cada uno es el anterior más 1).",
   "<b>Planteo de la suma:</b> escribimos <code>S = n + (n+1) + (n+2)</code>.",
   "<b>Agrupo las n:</b> hay tres n's, así que <code>n + n + n = 3n</code>.",
   "<b>Agrupo las constantes:</b> <code>0 + 1 + 2 = 3</code>. Entonces <code>S = 3n + 3</code>.",
   "<b>Factor común 3:</b> <code>S = 3n + 3 = 3(n+1)</code>.",
   "<b>Conclusión:</b> como <code>n+1</code> es un entero, S es exactamente 3 por un entero, por lo tanto es divisible por 3. ✔",
   "<b>Interpretación:</b> el término del medio es <code>n+1</code>, que es el <b>promedio</b> de los tres; la suma es siempre 3 veces el número del medio (por eso da 3·(n+1))."
  ],
  "resultado": "La suma de 3 consecutivos es <b>3(n+1)</b>, múltiplo de 3.",
  "verificar": "Chequeo: 4+5+6 = 15 = 3·5 ✔ (el del medio es 5). <b>Cuidado con un error frecuente:</b> NO siempre es múltiplo de 6. Ejemplos: 1+2+3 = 6 sí es múltiplo de 6, pero 2+3+4 = 9 no lo es. La garantía firme es solo la divisibilidad por 3."
 },
 {
  "id": "pim-6b",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 6b",
  "titulo": "7ⁿ + 1 divisible por 8 (n impar)",
  "enunciado": "Demostrar por PIM que 7ⁿ + 1 es divisible por 8 para n impar. (Escribir el impar como n = 2i−1.)",
  "idea": "Es divisibilidad por inducción, pero con un detalle: la propiedad <b>solo se afirma para n impar</b>. Por eso la inducción no avanza de n a n+1 (eso daría un par), sino <b>de n a n+2</b>, saltando al siguiente impar. La técnica de fondo para exponenciales es reescribir <code>7^(h+2) = 49·7ʰ</code> y sumar y restar para que aparezca la hipótesis <code>7ʰ+1</code>.",
  "pasos": [
   "<b>Base de inducción sobre impares:</b> los impares son 1, 3, 5, 7, … (n = 2i−1). Por eso el caso base es n=1 y el paso conecta un impar h con el siguiente impar h+2.",
   "<b>Caso base (n=1):</b> <code>7¹+1 = 7+1 = 8</code>, y 8 divide a 8 porque <code>8 = 8·1</code>. Vale. ✔",
   "<b>Hipótesis inductiva (n=h, impar):</b> suponemos <code>7ʰ + 1 = 8k</code> para algún entero k.",
   "<b>Tesis (n=h+2, el siguiente impar):</b> queremos ver que <code>7^(h+2) + 1</code> es divisible por 8.",
   "<b>Reescritura de la potencia:</b> como <code>7^(h+2) = 7ʰ·7² = 49·7ʰ</code>, tenemos <code>7^(h+2)+1 = 49·7ʰ + 1</code>.",
   "<b>Truco de sumar y restar:</b> queremos que aparezca <code>(7ʰ+1)</code>. Escribimos <code>49·7ʰ + 1 = 49·(7ʰ+1) − 49 + 1 = 49·(7ʰ+1) − 48</code> (el −49 compensa el +49 que introduce el paréntesis, y −49+1 = −48).",
   "<b>Uso de la hipótesis:</b> reemplazamos <code>7ʰ+1 = 8k</code>: queda <code>= 49·8k − 48</code>.",
   "<b>Factor común 8:</b> <code>49·8k = 8·(49k)</code> y <code>48 = 8·6</code>, entonces <code>= 8·49k − 8·6 = 8·(49k − 6)</code>. Es múltiplo de 8. ✔",
   "<b>Conclusión por PIM:</b> vale la base (n=1) y el paso h⇒h+2 sobre impares; luego 8 divide a <code>7ⁿ+1</code> para todo n impar. ∎"
  ],
  "resultado": "<b>8 | (7ⁿ+1)</b> para todo n impar.",
  "verificar": "Chequeo: n=3 → 343+1 = 344 = 8·43 ✔; n=5 → 16807+1 = 16808 = 8·2101 ✔. <b>Error típico:</b> intentar el paso de n a n+1 (rompe la hipótesis de \"impar\") en vez de n a n+2; o equivocarse en el sumar-y-restar y no llegar al −48. <b>Ojo:</b> para n par la propiedad es FALSA (n=2: 49+1=50, no divisible por 8), por eso la restricción a impares es esencial."
 },
 {
  "id": "pim-final-18n",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Final dic 2025",
  "titulo": "6 + 24 + 42 + … + (18n−12) = 3n(3n−1)",
  "enunciado": "Demostrar por PIM que 6 + 24 + 42 + … + (18n − 12) = 3n(3n − 1) para todo n entero positivo.",
  "idea": "Sumatoria por inducción con término general <code>18n−12</code> (n=1 da 6, n=2 da 24, n=3 da 42; van de 18 en 18). El método es el de siempre: a la suma hasta h (que por hipótesis vale 3h(3h−1)) le agrego el término (h+1)-ésimo y compruebo que el resultado coincide con la fórmula evaluada en h+1. Conviene expandir ambos lados a un polinomio en h y verificar que son idénticos.",
  "pasos": [
   "<b>Lectura del término general:</b> el k-ésimo sumando es <code>18k−12</code>. Verificamos: k=1 → 6, k=2 → 24, k=3 → 42. La diferencia constante entre términos es 18 (progresión aritmética).",
   "<b>Caso base (n=1):</b> LHS = un solo término = <code>18·1−12 = 6</code>. RHS = <code>3·1·(3·1−1) = 3·(3−1) = 3·2 = 6</code>. Como <code>6 = 6</code>, vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>6+24+…+(18h−12) = 3h(3h−1)</code>.",
   "<b>Tesis (n=h+1):</b> la fórmula evaluada en h+1 debe dar <code>3(h+1)(3(h+1)−1) = 3(h+1)(3h+3−1) = 3(h+1)(3h+2)</code>. Ese es el objetivo.",
   "<b>Término que se agrega:</b> el (h+1)-ésimo sumando es <code>18(h+1)−12 = 18h+18−12 = 18h+6</code>.",
   "<b>Paso inductivo (arranque):</b> a la suma hasta h le sumo ese término y uso la hipótesis para el bloque anterior: <code>3h(3h−1) + (18h+6)</code>.",
   "<b>Expando el lado que construyo:</b> <code>3h(3h−1) = 9h²−3h</code>, así que <code>9h²−3h + 18h+6 = 9h²+15h+6</code> (junté <code>−3h+18h = 15h</code>).",
   "<b>Expando el objetivo (RHS de la tesis):</b> <code>3(h+1)(3h+2) = 3(3h²+2h+3h+2) = 3(3h²+5h+2) = 9h²+15h+6</code>.",
   "<b>Comparación:</b> ambos lados dan <code>9h²+15h+6</code>, o sea coinciden. Luego la fórmula vale para h+1. ✔",
   "<b>Conclusión por PIM:</b> por base + paso inductivo, la suma vale <code>3n(3n−1)</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "Demostrado: la suma vale <b>3n(3n−1)</b>.",
  "verificar": "Chequeo: n=2 → 6+24 = 30 y <code>3·2·(3·2−1) = 6·5 = 30</code> ✔; n=3 → 6+24+42 = 72 y <code>3·3·(9−1) = 9·8 = 72</code> ✔. <b>Error típico:</b> calcular mal el término que se agrega (usar 18h−12 en vez de 18(h+1)−12 = 18h+6), o no expandir ambos lados al mismo polinomio y \"suponer\" que coinciden."
 },
 {
  "id": "pim-6n1",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Final",
  "titulo": "6ⁿ − 1 divisible por 5",
  "enunciado": "Demostrar por PIM que 6ⁿ − 1 es divisible por 5 para todo n natural.",
  "idea": "Divisibilidad de una <b>exponencial</b> por inducción. La clave es factorizar la potencia siguiente: <code>6^(h+1) = 6·6ʰ</code>, y luego sumar-y-restar para que aparezca la hipótesis <code>6ʰ−1 = 5k</code>. El resto que sobra debe salir múltiplo de 5.",
  "pasos": [
   "<b>Reformulación:</b> \"5 divide a X\" equivale a <code>X = 5·(entero)</code>. Buscamos ese entero en el caso h+1.",
   "<b>Caso base (n=1):</b> <code>6¹−1 = 6−1 = 5</code>, y 5 divide a 5 (<code>5 = 5·1</code>). Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>6ʰ − 1 = 5k</code> para algún entero k.",
   "<b>Tesis (n=h+1):</b> queremos ver que <code>6^(h+1) − 1</code> es divisible por 5.",
   "<b>Factorizo la potencia:</b> <code>6^(h+1) = 6·6ʰ</code>, así que <code>6^(h+1) − 1 = 6·6ʰ − 1</code>.",
   "<b>Sumar y restar para armar la hipótesis:</b> quiero <code>(6ʰ−1)</code> adentro, así que escribo <code>6·6ʰ − 1 = 6·(6ʰ − 1) + 6 − 1</code> (el 6·(6ʰ−1) aporta <code>6·6ʰ − 6</code>, y le devuelvo el <code>+6</code>; con el <code>−1</code> queda <code>+6−1 = +5</code>).",
   "<b>Uso de la hipótesis:</b> reemplazo <code>6ʰ−1 = 5k</code>: <code>= 6·5k + 5</code>.",
   "<b>Factor común 5:</b> <code>6·5k = 5·(6k)</code> y el <code>+5 = 5·1</code>, entonces <code>= 5·6k + 5 = 5·(6k + 1)</code>. Múltiplo de 5. ✔",
   "<b>Conclusión por PIM:</b> base (n=1) + paso h⇒h+1 ⇒ 5 divide a <code>6ⁿ−1</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "<b>5 | (6ⁿ−1)</b> para todo n ≥ 1.",
  "verificar": "Chequeo: n=2 → 36−1 = 35 = 5·7 ✔; n=3 → 216−1 = 215 = 5·43 ✔. <b>Idea de fondo:</b> como <code>6 ≡ 1 (mód 5)</code>, entonces <code>6ⁿ ≡ 1ⁿ = 1</code> y por eso <code>6ⁿ−1 ≡ 0 (mód 5)</code>. <b>Error típico:</b> equivocar el sumar-y-restar y no llegar al <code>+5</code>, o factorizar mal 6^(h+1) (poner 6+6ʰ en vez de 6·6ʰ)."
 },
 {
  "id": "pim-frac",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Final (modelo)",
  "titulo": "1/(1·2) + … + 1/(n(n+1)) = n/(n+1)",
  "enunciado": "Demostrar por PIM que 1/(1·2) + 1/(2·3) + … + 1/(n(n+1)) = n/(n+1).",
  "idea": "Sumatoria <b>telescópica</b> por inducción: el término general es <code>1/(k(k+1))</code>. En el paso, a la hipótesis <code>h/(h+1)</code> le sumo el término (h+1)-ésimo <code>1/((h+1)(h+2))</code> y opero con <b>denominador común</b> <code>(h+1)(h+2)</code>; el numerador se factoriza y aparece la fórmula en h+1.",
  "pasos": [
   "<b>Lectura del término general:</b> el k-ésimo sumando es <code>1/(k(k+1))</code>: k=1 → 1/(1·2), k=2 → 1/(2·3), etc.",
   "<b>Caso base (n=1):</b> LHS = <code>1/(1·2) = 1/2</code>. RHS = <code>1/(1+1) = 1/2</code>. Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>1/(1·2)+…+1/(h(h+1)) = h/(h+1)</code>.",
   "<b>Tesis (n=h+1):</b> la fórmula en h+1 debe dar <code>(h+1)/((h+1)+1) = (h+1)/(h+2)</code>. Ese es el objetivo.",
   "<b>Término que se agrega:</b> el (h+1)-ésimo sumando es <code>1/((h+1)((h+1)+1)) = 1/((h+1)(h+2))</code>.",
   "<b>Paso inductivo (arranque):</b> uso la hipótesis para el bloque anterior y sumo el nuevo término: <code>h/(h+1) + 1/((h+1)(h+2))</code>.",
   "<b>Denominador común:</b> el mínimo común denominador es <code>(h+1)(h+2)</code>. Al primer término le falta un factor (h+2): <code>h/(h+1) = h(h+2)/((h+1)(h+2))</code>. Entonces <code>= [h(h+2) + 1] / [(h+1)(h+2)]</code>.",
   "<b>Simplifico el numerador:</b> <code>h(h+2) + 1 = h²+2h+1</code>, que es el <b>trinomio cuadrado perfecto</b> <code>(h+1)²</code>.",
   "<b>Cancelación:</b> queda <code>(h+1)² / [(h+1)(h+2)]</code>; cancelo un factor <code>(h+1)</code> arriba y abajo: <code>= (h+1)/(h+2)</code>. ✔",
   "<b>Conclusión por PIM:</b> base + paso ⇒ la suma vale <code>n/(n+1)</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "Demostrado: la suma vale <b>n/(n+1)</b>.",
  "verificar": "Chequeo: n=2 → <code>1/2 + 1/6 = 3/6 + 1/6 = 4/6 = 2/3</code> y <code>2/(2+1) = 2/3</code> ✔. <b>Mirada telescópica:</b> como <code>1/(k(k+1)) = 1/k − 1/(k+1)</code>, la suma se cancela en cascada y queda <code>1 − 1/(n+1) = n/(n+1)</code>. <b>Error típico:</b> equivocar el denominador común o no reconocer que <code>h²+2h+1 = (h+1)²</code> y por lo tanto no cancelar."
 },
 {
  "id": "pim-cubos",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Final 17-12-2025",
  "titulo": "Suma de los cubos de los n primeros impares = n²(2n²−1)",
  "enunciado": "Demostrar por PIM que 1³ + 3³ + 5³ + … + (2n−1)³ = n²(2n²−1).",
  "idea": "Sumatoria de cubos de impares por inducción; el k-ésimo impar es <code>2k−1</code>, así que el término (h+1)-ésimo es <code>(2(h+1)−1)³ = (2h+1)³</code>. El método es sumar ese cubo a la hipótesis y expandir <b>ambos lados</b> a un polinomio de grado 4 en h para comprobar la igualdad término a término.",
  "pasos": [
   "<b>Lectura del término general:</b> el k-ésimo sumando es <code>(2k−1)³</code> (cubo del k-ésimo impar). Para k=h+1 da <code>(2(h+1)−1)³ = (2h+2−1)³ = (2h+1)³</code>.",
   "<b>Caso base (n=1):</b> LHS = <code>1³ = 1</code>. RHS = <code>1²·(2·1²−1) = 1·(2−1) = 1·1 = 1</code>. Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>1³+3³+…+(2h−1)³ = h²(2h²−1)</code>.",
   "<b>Tesis (n=h+1):</b> la fórmula en h+1 debe dar <code>(h+1)²(2(h+1)²−1)</code>. Como <code>(h+1)² = h²+2h+1</code>, entonces <code>2(h+1)²−1 = 2(h²+2h+1)−1 = 2h²+4h+1</code>. El objetivo es <code>(h+1)²(2h²+4h+1)</code>.",
   "<b>Paso inductivo (arranque):</b> uso la hipótesis y sumo el nuevo cubo: <code>h²(2h²−1) + (2h+1)³</code>.",
   "<b>Expando el primer bloque:</b> <code>h²(2h²−1) = 2h⁴ − h²</code>.",
   "<b>Expando el cubo:</b> <code>(2h+1)³ = 8h³ + 12h² + 6h + 1</code> (usando (a+b)³ = a³+3a²b+3ab²+b³ con a=2h, b=1: <code>8h³ + 3·4h²·1 + 3·2h·1 + 1</code>).",
   "<b>Sumo todo:</b> <code>2h⁴ − h² + 8h³ + 12h² + 6h + 1 = 2h⁴ + 8h³ + 11h² + 6h + 1</code> (junté <code>−h²+12h² = 11h²</code>).",
   "<b>Expando el objetivo:</b> <code>(h+1)²(2h²+4h+1) = (h²+2h+1)(2h²+4h+1)</code>. Multiplicando: <code>2h⁴+4h³+h² + 4h³+8h²+2h + 2h²+4h+1 = 2h⁴ + 8h³ + 11h² + 6h + 1</code>.",
   "<b>Comparación:</b> ambos lados dan <code>2h⁴+8h³+11h²+6h+1</code>, coinciden. Vale para h+1. ✔",
   "<b>Conclusión por PIM:</b> base + paso ⇒ la suma vale <code>n²(2n²−1)</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "Demostrado: la suma vale <b>n²(2n²−1)</b>.",
  "verificar": "Chequeo: n=2 → <code>1³+3³ = 1+27 = 28</code> y <code>2²·(2·2²−1) = 4·(8−1) = 4·7 = 28</code> ✔. <b>Error típico:</b> expandir mal <code>(2h+1)³</code> (olvidar el 12h² o el 6h) o no llevar ambos lados al mismo polinomio de grado 4, que es donde se ve la igualdad."
 },
 {
  "id": "pim-n2-5n",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Final 18-12-2024",
  "titulo": "2 divide a n² + 5n",
  "enunciado": "Demostrar por PIM que 2 divide a n² + 5n para todo entero positivo n.",
  "idea": "Divisibilidad por 2, es decir <b>paridad</b>: probar que <code>n²+5n</code> siempre es par. Por inducción, se desarrolla <code>(h+1)²+5(h+1)</code> y se reagrupa para que aparezca la hipótesis <code>h²+5h = 2k</code>; lo que sobra debe salir múltiplo de 2.",
  "pasos": [
   "<b>Reformulación:</b> \"2 divide a X\" significa <code>X = 2·(entero)</code>, o sea X es par. Buscamos ese entero en h+1.",
   "<b>Caso base (n=1):</b> <code>1²+5·1 = 1+5 = 6</code>, y 2 divide a 6 (<code>6 = 2·3</code>). Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>h²+5h = 2k</code> para algún entero k.",
   "<b>Tesis (n=h+1):</b> queremos ver que <code>(h+1)²+5(h+1)</code> es divisible por 2.",
   "<b>Desarrollo:</b> <code>(h+1)² = h²+2h+1</code> y <code>5(h+1) = 5h+5</code>, así que <code>(h+1)²+5(h+1) = h²+2h+1+5h+5</code>.",
   "<b>Reagrupo para ver la hipótesis:</b> junto los términos de la hipótesis y aparte el resto: <code>= (h²+5h) + (2h+6)</code> (porque <code>2h+1+5 = 2h+6</code> y el <code>5h</code> lo sumé al <code>h²</code>... reordenando: <code>h²+5h</code> va junto, y sobran <code>2h+1+5 = 2h+6</code>).",
   "<b>Uso de la hipótesis:</b> reemplazo <code>h²+5h = 2k</code>: <code>= 2k + 2h + 6</code>.",
   "<b>Factor común 2:</b> <code>= 2(k + h + 3)</code>. Como <code>k+h+3</code> es entero, la expresión es múltiplo de 2. ✔",
   "<b>Conclusión por PIM:</b> base + paso ⇒ 2 divide a <code>n²+5n</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "<b>2 | (n²+5n)</b> para todo n ≥ 1.",
  "verificar": "Chequeo: n=2 → 4+10 = 14 = 2·7 ✔; n=3 → 9+15 = 24 = 2·12 ✔. <b>Prueba directa (sin inducción):</b> <code>n²+5n = n(n+5)</code>; los factores n y n+5 tienen <b>distinta paridad</b> (difieren en 5, que es impar), así que uno de los dos es par y el producto es par siempre. <b>Error típico:</b> no reagrupar bien y no aislar el bloque <code>h²+5h</code> que habilita la hipótesis."
 },
 {
  "id": "pim-2",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 2",
  "titulo": "Suma de Gauss: 1+2+…+n = n(n+1)/2",
  "enunciado": "Demostrar por PIM que 1 + 2 + 3 + … + n = n(n+1)/2 para todo n entero positivo.",
  "idea": "Es la clásica <b>suma de Gauss</b>: se reconoce por ser la suma de los primeros n naturales igualada a fórmula cerrada. El método de fondo es PIM: a la hipótesis <code>h(h+1)/2</code> se le suma el término siguiente <code>(h+1)</code> y se saca <b>factor común</b> <code>(h+1)</code> para llegar a la fórmula en h+1.",
  "pasos": [
   "<b>Caso base (n=1):</b> LHS = un solo sumando = <code>1</code>. RHS = <code>1·(1+1)/2 = 1·2/2 = 1</code>. Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>1+2+…+h = h(h+1)/2</code>.",
   "<b>Tesis (n=h+1):</b> la fórmula en h+1 debe dar <code>(h+1)((h+1)+1)/2 = (h+1)(h+2)/2</code>. Ese es el objetivo.",
   "<b>Término que se agrega:</b> el (h+1)-ésimo sumando es simplemente <code>(h+1)</code>.",
   "<b>Paso inductivo (arranque):</b> uso la hipótesis para el bloque anterior y sumo el nuevo término: <code>h(h+1)/2 + (h+1)</code>.",
   "<b>Factor común (h+1):</b> ambos términos tienen <code>(h+1)</code>, así que <code>= (h+1)·[h/2 + 1]</code>.",
   "<b>Sumo el corchete:</b> <code>h/2 + 1 = h/2 + 2/2 = (h+2)/2</code>. Entonces <code>= (h+1)·(h+2)/2 = (h+1)(h+2)/2</code>. ✔",
   "<b>Comparación:</b> obtuvimos exactamente el RHS de la tesis. Vale para h+1.",
   "<b>Conclusión por PIM:</b> base + paso ⇒ la suma vale <code>n(n+1)/2</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "1 + 2 + … + n = <b>n(n+1)/2</b>.",
  "verificar": "Chequeo: n=4 → 1+2+3+4 = 10 y <code>4·5/2 = 10</code> ✔. <b>Idea de Gauss (sin inducción):</b> sumando la lista al derecho y al revés se forman n pares que suman (n+1) cada uno; total <code>n(n+1)</code>, y como se contó dos veces, se divide por 2. <b>Error típico:</b> no sacar factor común (h+1) y perderse en cuentas, o sumar mal <code>h/2 + 1</code>."
 },
 {
  "id": "pim-4",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 4",
  "titulo": "1·2 + 2·3 + … + n(n+1) = n(n+1)(n+2)/3",
  "enunciado": "Demostrar por PIM que 1·2 + 2·3 + 3·4 + … + n(n+1) = n(n+1)(n+2)/3.",
  "idea": "Sumatoria por inducción cuyo término general es <code>k(k+1)</code> (productos de consecutivos); el (h+1)-ésimo es <code>(h+1)(h+2)</code>. La táctica de fondo es sacar <b>factor común</b> <code>(h+1)(h+2)</code> luego de sumar el nuevo término a la hipótesis, para llegar limpio a la fórmula en h+1.",
  "pasos": [
   "<b>Lectura del término general:</b> el k-ésimo sumando es <code>k(k+1)</code>: k=1 → 1·2, k=2 → 2·3, k=3 → 3·4. Para k=h+1 da <code>(h+1)(h+2)</code>.",
   "<b>Caso base (n=1):</b> LHS = <code>1·2 = 2</code>. RHS = <code>1·(1+1)·(1+2)/3 = 1·2·3/3 = 6/3 = 2</code>. Vale. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>1·2+…+h(h+1) = h(h+1)(h+2)/3</code>.",
   "<b>Tesis (n=h+1):</b> la fórmula en h+1 debe dar <code>(h+1)(h+2)(h+3)/3</code>. Ese es el objetivo.",
   "<b>Término que se agrega:</b> el (h+1)-ésimo sumando es <code>(h+1)(h+2)</code>.",
   "<b>Paso inductivo (arranque):</b> uso la hipótesis y sumo el nuevo término: <code>h(h+1)(h+2)/3 + (h+1)(h+2)</code>.",
   "<b>Factor común (h+1)(h+2):</b> ambos términos lo contienen, así que <code>= (h+1)(h+2)·[h/3 + 1]</code>.",
   "<b>Sumo el corchete:</b> <code>h/3 + 1 = h/3 + 3/3 = (h+3)/3</code>. Entonces <code>= (h+1)(h+2)·(h+3)/3 = (h+1)(h+2)(h+3)/3</code>. ✔",
   "<b>Comparación:</b> coincide con el RHS de la tesis. Vale para h+1.",
   "<b>Conclusión por PIM:</b> base + paso ⇒ la suma vale <code>n(n+1)(n+2)/3</code> para todo n ≥ 1. ∎"
  ],
  "resultado": "La suma vale <b>n(n+1)(n+2)/3</b>.",
  "verificar": "Chequeo: n=2 → 1·2 + 2·3 = 2+6 = 8 y <code>2·3·4/3 = 24/3 = 8</code> ✔; n=3 → 2+6+12 = 20 y <code>3·4·5/3 = 20</code> ✔. <b>Error típico:</b> no sacar factor común (h+1)(h+2) y expandir todo a mano (más largo y propenso a error), o sumar mal <code>h/3 + 1</code>."
 },
 {
  "id": "pim-6a",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 6a",
  "titulo": "Desigualdad: n! > 3^(n−2) para n ≥ 3",
  "enunciado": "Investigar por PIM si n! > 3^(n−2) para todo natural n ≥ 3.",
  "idea": "Es una <b>inducción con desigualdad</b>, no con igualdad: se reconoce por el símbolo &lt; (o >). El caso base arranca en n=3 (no en 1). En el paso, en vez de reemplazar por igual, se <b>encadena</b>: <code>(h+1)! = (h+1)·h!</code> y se acota <code>h!</code> por abajo con la hipótesis; después se usa que <code>(h+1) ≥ 4 > 3</code> para cerrar.",
  "pasos": [
   "<b>Dónde empezar:</b> la propiedad se afirma para n ≥ 3, así que el caso base es n=3 (probarlo en n=1 no tendría sentido, además 1! = 1 no supera 3^(−1)).",
   "<b>Caso base (n=3):</b> <code>3! = 6</code> y <code>3^(3−2) = 3¹ = 3</code>. Como <code>6 > 3</code>, la desigualdad vale. ✔",
   "<b>Hipótesis inductiva (n=h, con h ≥ 3):</b> suponemos <code>h! > 3^(h−2)</code>.",
   "<b>Tesis (n=h+1):</b> queremos ver <code>(h+1)! > 3^((h+1)−2) = 3^(h−1)</code>.",
   "<b>Descomposición del factorial:</b> <code>(h+1)! = (h+1)·h!</code> (definición de factorial).",
   "<b>Acoto con la hipótesis:</b> como <code>h! > 3^(h−2)</code> y <code>(h+1)</code> es positivo, multiplico ambos lados por <code>(h+1)</code> sin invertir la desigualdad: <code>(h+1)·h! > (h+1)·3^(h−2)</code>.",
   "<b>Uso h ≥ 3:</b> entonces <code>h+1 ≥ 4</code>, y en particular <code>h+1 > 3</code>. Por lo tanto <code>(h+1)·3^(h−2) > 3·3^(h−2)</code>.",
   "<b>Simplifico la potencia:</b> <code>3·3^(h−2) = 3^(h−2+1) = 3^(h−1)</code> (sumo exponentes). Encadenando todo: <code>(h+1)! > 3^(h−1)</code>. ✔",
   "<b>Conclusión por PIM:</b> vale la base (n=3) y el paso h⇒h+1; luego <code>n! > 3^(n−2)</code> para todo n ≥ 3. La respuesta a \"investigar si\" es: <b>sí, es verdadera</b>. ∎"
  ],
  "resultado": "<b>n! > 3^(n−2)</b> para todo n ≥ 3.",
  "verificar": "Chequeo: n=4 → <code>24 > 3² = 9</code> ✔; n=5 → <code>120 > 27</code> ✔; n=6 → <code>720 > 81</code> ✔. <b>Errores típicos:</b> arrancar el caso base en n=1 (fuera del dominio) en vez de n=3; en el paso usar \"=\" en lugar de encadenar \"&gt;\"; o no justificar por qué <code>(h+1) > 3</code> (que viene de h ≥ 3). En desigualdades no se sustituye por igual: se acota."
 },
 {
  "id": "pim-6c",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Práctica 6c",
  "titulo": "Propiedad de Stifel: C(n+1,k) = C(n,k−1) + C(n,k)",
  "enunciado": "Demostrar (si es posible) que el número combinatorio cumple C(n+1, k) = C(n, k−1) + C(n, k).",
  "idea": "Es la <b>regla de Pascal (Stifel)</b>, base del Triángulo de Pascal. No hace falta inducción: se demuestra <b>directamente</b> escribiendo los combinatorios con factoriales y sumando con denominador común. El objetivo es transformar el lado derecho hasta que quede idéntico a <code>C(n+1,k)</code>.",
  "pasos": [
   "<b>Fórmula de partida:</b> recordamos <code>C(n,r) = n! / [r!·(n−r)!]</code>. La aplicamos a los dos términos del lado derecho.",
   "<b>Escribo el RHS con factoriales:</b> <code>C(n,k−1) = n!/[(k−1)!(n−k+1)!]</code> y <code>C(n,k) = n!/[k!(n−k)!]</code>. Entonces el RHS es <code>n!/[(k−1)!(n−k+1)!] + n!/[k!(n−k)!]</code>.",
   "<b>Busco el denominador común:</b> uso las identidades <code>k! = k·(k−1)!</code> y <code>(n−k+1)! = (n−k+1)·(n−k)!</code>. Así el mínimo común denominador es <code>k!·(n−k+1)!</code>.",
   "<b>Reescribo cada fracción con ese denominador:</b> al primer término le falta el factor k arriba y abajo → <code>n!·k / [k!(n−k+1)!]</code>; al segundo le falta (n−k+1) → <code>n!·(n−k+1) / [k!(n−k+1)!]</code>.",
   "<b>Sumo los numeradores:</b> <code>= n!·[k + (n−k+1)] / [k!(n−k+1)!]</code>.",
   "<b>Simplifico el corchete:</b> <code>k + (n−k+1) = n+1</code> (las k se cancelan). Queda <code>= n!·(n+1) / [k!(n−k+1)!]</code>.",
   "<b>Compacto el numerador:</b> <code>n!·(n+1) = (n+1)!</code> (definición de factorial), y noto que <code>n−k+1 = (n+1)−k</code>. Entonces <code>= (n+1)! / [k!((n+1)−k)!]</code>.",
   "<b>Reconozco la fórmula:</b> eso es exactamente <code>C(n+1, k)</code>. Por lo tanto el RHS es igual al LHS. ✔",
   "<b>Conclusión:</b> la identidad <code>C(n+1,k) = C(n,k−1) + C(n,k)</code> queda probada directamente (sin inducción). ∎"
  ],
  "resultado": "<b>C(n+1,k) = C(n,k−1) + C(n,k)</b> (regla de Pascal), demostrada con factoriales.",
  "verificar": "Chequeo numérico: <code>C(5,2) = 10</code> y <code>C(4,1)+C(4,2) = 4+6 = 10</code> ✔. <b>Interpretación:</b> es la regla que arma el Triángulo de Pascal: cada número es la suma de los dos que tiene arriba. <b>Error típico:</b> equivocar el denominador común (no ver que <code>k! = k(k−1)!</code> y <code>(n−k+1)! = (n−k+1)(n−k)!</code>), o no reconocer <code>n!(n+1) = (n+1)!</code> al final."
 },
 {
  "id": "pim-binomio",
  "guia": "PIM",
  "unidad": "U2",
  "num": "Teorema del Binomio",
  "titulo": "Teorema del Binomio (de Newton) por inducción",
  "enunciado": "Demostrar por PIM el Teorema del Binomio: (a+b)ⁿ = Σ (k=0..n) C(n,k)·a^(n−k)·b^k.",
  "idea": "Inducción sobre el exponente n. Se reconoce porque hay que probar una fórmula general de <code>(a+b)ⁿ</code> válida para todo n. La clave del paso es multiplicar la hipótesis por <code>(a+b)</code>, reindexar las sumas y agrupar las potencias iguales; ahí aparece <code>C(h,k)+C(h,k−1)</code>, que por la <b>regla de Pascal</b> (ejercicio 6c) se colapsa en <code>C(h+1,k)</code>.",
  "pasos": [
   "<b>Qué es la fórmula:</b> afirma que <code>(a+b)ⁿ = Σ_{k=0}^{n} C(n,k)·a^(n−k)·b^k</code>, o sea una suma de términos con coeficientes combinatorios. Vamos por inducción en n.",
   "<b>Caso base (n=1):</b> el lado izquierdo es <code>(a+b)¹ = a + b</code>. El lado derecho es <code>C(1,0)a^1 b^0 + C(1,1)a^0 b^1 = 1·a + 1·b = a+b</code>. Coinciden. ✔",
   "<b>Hipótesis inductiva (n=h):</b> suponemos <code>(a+b)ʰ = Σ_{k=0}^{h} C(h,k) a^(h−k) b^k</code>.",
   "<b>Tesis (n=h+1):</b> queremos <code>(a+b)^(h+1) = Σ_{k=0}^{h+1} C(h+1,k) a^(h+1−k) b^k</code>.",
   "<b>Paso inductivo (arranque):</b> escribo <code>(a+b)^(h+1) = (a+b)·(a+b)ʰ</code> y reemplazo la hipótesis: <code>= (a+b)·Σ_{k} C(h,k) a^(h−k) b^k</code>.",
   "<b>Distribuyo el (a+b):</b> <code>= Σ_{k} C(h,k) a^(h+1−k) b^k + Σ_{k} C(h,k) a^(h−k) b^(k+1)</code> (la primera suma sale de multiplicar por a, la segunda por b).",
   "<b>Reindexo la segunda suma:</b> en <code>Σ C(h,k) a^(h−k) b^(k+1)</code> cambio j=k+1, quedando <code>Σ C(h,j−1) a^(h+1−j) b^j</code>. Ahora ambas sumas tienen el mismo patrón <code>a^(h+1−k) b^k</code>.",
   "<b>Agrupo el coeficiente de a^(h+1−k) b^k:</b> juntando ambas sumas, el coeficiente es <code>C(h,k) + C(h,k−1)</code>.",
   "<b>Aplico la regla de Pascal (ej. 6c):</b> <code>C(h,k−1) + C(h,k) = C(h+1,k)</code>. Entonces el coeficiente de cada término es <code>C(h+1,k)</code>.",
   "<b>Cierre:</b> por lo tanto <code>(a+b)^(h+1) = Σ_{k=0}^{h+1} C(h+1,k) a^(h+1−k) b^k</code>, que es la tesis. ✔",
   "<b>Conclusión por PIM:</b> base (n=1) + paso h⇒h+1 (usando Stifel) ⇒ el Teorema del Binomio vale para todo n natural. ∎"
  ],
  "resultado": "(a+b)ⁿ = Σ (k=0..n) C(n,k)·a^(n−k)·b^k, demostrado por inducción usando Stifel.",
  "verificar": "Chequeo: n=2 → <code>(a+b)² = a² + 2ab + b² = C(2,0)a² + C(2,1)ab + C(2,2)b²</code> (coeficientes 1, 2, 1) ✔; n=3 → coeficientes <code>C(3,0..3) = 1,3,3,1</code>, la fila del Triángulo de Pascal. <b>Error típico:</b> olvidar reindexar la segunda suma (y entonces no poder agrupar), o no reconocer que <code>C(h,k)+C(h,k−1)</code> es justamente Pascal. Este ejercicio depende del 6c."
 },
 {
  "id": "matrices-1",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 1",
  "titulo": "Matrices traspuestas",
  "enunciado": "Escriba las traspuestas de: a) A = [ 3,1 ; 2,5 ; 7,6 ] (3×2); b) B = [ 2,5,7 ; 4,1,0 ] (2×3).",
  "idea": "La <b>traspuesta</b> Aᵗ se obtiene intercambiando filas por columnas: la fila i de A se convierte en la columna i de Aᵗ (equivalentemente, el elemento en la posición (i,j) pasa a la posición (j,i)). Regla práctica: si A es de tamaño m×n, entonces Aᵗ es n×m.",
  "pasos": [
   "<b>Qué hace trasponer:</b> el elemento que está en la fila i, columna j de A pasa a estar en la fila j, columna i de Aᵗ. En consecuencia las filas se leen como columnas.",
   "<b>Tamaño de Aᵗ (parte a):</b> A es 3×2 (3 filas, 2 columnas), así que Aᵗ es 2×3 (se invierten las dimensiones).",
   "<b>Construyo Aᵗ:</b> la columna 1 de A es <code>(3,2,7)</code> y la columna 2 es <code>(1,5,6)</code>; esas columnas pasan a ser las <b>filas</b> de Aᵗ. Resultado: <code>Aᵗ = [ 3,2,7 ; 1,5,6 ]</code>.",
   "<b>Chequeo posición a posición (a):</b> A tenía el 7 en fila 3, columna 1 → en Aᵗ debe estar en fila 1, columna 3: efectivamente <code>Aᵗ[1,3] = 7</code>. ✔",
   "<b>Tamaño de Bᵗ (parte b):</b> B es 2×3, así que Bᵗ es 3×2.",
   "<b>Construyo Bᵗ:</b> la fila 1 de B es <code>(2,5,7)</code> y la fila 2 es <code>(4,1,0)</code>; esas filas pasan a ser las <b>columnas</b> de Bᵗ. Resultado: <code>Bᵗ = [ 2,4 ; 5,1 ; 7,0 ]</code>.",
   "<b>Chequeo posición a posición (b):</b> B tenía el 7 en fila 1, columna 3 → en Bᵗ debe estar en fila 3, columna 1: efectivamente <code>Bᵗ[3,1] = 7</code>. ✔"
  ],
  "resultado": "Aᵗ = [ 3,2,7 ; 1,5,6 ]  ·  Bᵗ = [ 2,4 ; 5,1 ; 7,0 ]",
  "verificar": "Propiedad de control: <b>(Aᵗ)ᵗ = A</b>, trasponer dos veces devuelve la matriz original (es el ejercicio 2). <b>Error típico:</b> confundir filas con columnas al escribir el resultado, o no invertir las dimensiones (dejar Aᵗ como 3×2 en vez de 2×3). Truco: la diagonal principal queda fija; los demás elementos se reflejan respecto de ella."
 },
 {
  "id": "matrices-3",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 3",
  "titulo": "Combinación lineal E = 2A − 3B + C − 2D",
  "enunciado": "Con A=[1,0,-2;4,1,-3], B=[-1,0,1;-4,1,3], C=[7,1,-1;8,-10,0], D=[-3,1,5;6,2,4], calcule E = 2A − 3B + C − 2D.",
  "idea": "Se reconoce porque es una <b>combinación lineal de matrices</b> del mismo tamaño (todas 2×3), es decir, sumas y restas afectadas por escalares. El método es puramente <b>elemento a elemento</b>: primero se multiplica cada matriz por su escalar y luego se combinan las cuatro entrada por entrada, sin ningún producto matricial. La clave es respetar el signo de cada término (<code>+2A</code>, <code>−3B</code>, <code>+C</code>, <code>−2D</code>).",
  "pasos": [
   "<b>Multiplico por los escalares.</b> <code>2A</code> multiplica cada entrada de A por 2: <code>2A = [2,0,-4;8,2,-6]</code>.",
   "<code>3B</code> multiplica B por 3: <code>3B = [-3,0,3;-12,3,9]</code>. Como en E va con signo menos, luego restaré esta matriz.",
   "<code>2D</code> multiplica D por 2: <code>2D = [-6,2,10;12,4,8]</code>. También entra restando.",
   "<b>Entrada (1,1):</b> tomo la posición fila 1, columna 1 de cada matriz: <code>2A</code>→2, <code>−3B</code>→−(−3)=+3, <code>C</code>→7, <code>−2D</code>→−(−6)=+6. Sumo: <code>2 + 3 + 7 + 6 = 18</code>.",
   "<b>Entrada (1,2):</b> <code>0 − 0 + 1 − 2 = -1</code>.  <b>Entrada (1,3):</b> <code>-4 − 3 + (-1) − 10 = -18</code>.",
   "<b>Entrada (2,1):</b> <code>8 − (-12) + 8 − 12 = 8 + 12 + 8 − 12 = 16</code>.",
   "<b>Entrada (2,2):</b> <code>2 − 3 + (-10) − 4 = -15</code>.  <b>Entrada (2,3):</b> <code>-6 − 9 + 0 − 8 = -23</code>.",
   "<b>Armo la matriz final</b> ordenando las 6 entradas: <code>E = [ 18, -1, -18 ; 16, -15, -23 ]</code>."
  ],
  "resultado": "E = [ 18, -1, -18 ; 16, -15, -23 ]",
  "verificar": "Chequeo rápido: recalculo una entrada aislada, por ejemplo (2,1) = 2·4 − 3·(−4) + 8 − 2·6 = 8 + 12 + 8 − 12 = 16 ✓. Coincide con la clave de la guía. <b>Error típico:</b> equivocar el signo al restar un número negativo (por ejemplo escribir −3B en (1,1) como −3 en lugar de +3), lo que descuadra toda la columna."
 },
 {
  "id": "matrices-5",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 5",
  "titulo": "Operaciones con A y B (2×2)",
  "enunciado": "Con A = [ -1,2 ; 1,3 ] y B = [ 0,1 ; 2,3 ], calcule A+B, B+A, A−B, 3A−2B, A·B y B·A.",
  "idea": "Se reconocen dos tipos de operación. La <b>suma, la resta y el producto por escalar</b> son elemento a elemento; el <b>producto matricial</b> es fila-por-columna. El punto didáctico central es que la suma <b>sí conmuta</b> (<code>A+B = B+A</code>) pero el producto <b>no</b> (<code>A·B ≠ B·A</code>), y este ejercicio lo muestra con números.",
  "pasos": [
   "<b>A+B:</b> sumo entrada por entrada: <code>(-1+0, 2+1 ; 1+2, 3+3) = [ -1,3 ; 3,6 ]</code>. Como la suma conmuta, <code>B+A</code> da lo mismo.",
   "<b>A−B:</b> resto entrada por entrada: <code>(-1-0, 2-1 ; 1-2, 3-3) = [ -1,1 ; -1,0 ]</code>.",
   "<b>3A</b> = <code>[ -3,6 ; 3,9 ]</code> y <b>2B</b> = <code>[ 0,2 ; 4,6 ]</code>. Entonces <code>3A−2B = [ -3-0, 6-2 ; 3-4, 9-6 ] = [ -3,4 ; -1,3 ]</code> (coincide con la clave 5d).",
   "<b>A·B, fila 1:</b> fila 1 de A = (−1, 2). Con columna 1 de B = (0, 2): <code>(-1)·0 + 2·2 = 4</code>. Con columna 2 de B = (1, 3): <code>(-1)·1 + 2·3 = 5</code>.",
   "<b>A·B, fila 2:</b> fila 2 de A = (1, 3). Con col 1: <code>1·0 + 3·2 = 6</code>. Con col 2: <code>1·1 + 3·3 = 10</code>. Resulta <code>A·B = [ 4, 5 ; 6, 10 ]</code>.",
   "<b>B·A, fila 1:</b> fila 1 de B = (0, 1). Con col 1 de A = (−1, 1): <code>0·(-1) + 1·1 = 1</code>. Con col 2 de A = (2, 3): <code>0·2 + 1·3 = 3</code>.",
   "<b>B·A, fila 2:</b> fila 2 de B = (2, 3). Con col 1: <code>2·(-1) + 3·1 = 1</code>. Con col 2: <code>2·2 + 3·3 = 13</code>. Resulta <code>B·A = [ 1, 3 ; 1, 13 ]</code>, distinto de A·B."
  ],
  "resultado": "A+B=[-1,3;3,6] · A−B=[-1,1;-1,0] · 3A−2B=[-3,4;-1,3] · A·B=[ 4, 5 ; 6, 10 ] · B·A=[ 1, 3 ; 1, 13 ]",
  "verificar": "3A−2B coincide con la respuesta de la guía; y comparando las dos matrices producto se ve <code>A·B = [4,5;6,10] ≠ [1,3;1,13] = B·A</code>. <b>Error típico:</b> confundir el producto fila-por-columna con multiplicar entrada por entrada, o multiplicar B·A creyendo que dará lo mismo que A·B; el orden de los factores importa."
 },
 {
  "id": "matrices-6",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 6",
  "titulo": "Comprobar que A·B ≠ B·A (3×3)",
  "enunciado": "Con A = [1,0,0;2,-1,2;2,2,1] y B = [2,1,4;3,0,-1;4,-1,5], compruebe que A·B ≠ B·A.",
  "idea": "El enunciado pide <b>comprobar la no conmutatividad</b> del producto de matrices 3×3. El método es directo: calcular ambos productos <b>fila por columna</b> (cada entrada es un producto escalar de una fila de la primera por una columna de la segunda) y exhibir aunque sea una entrada donde difieran. Con que una sola posición no coincida, ya queda probado que <code>A·B ≠ B·A</code>.",
  "pasos": [
   "<b>A·B fila 1</b> (fila (1,0,0) de A): con col 1 (2,3,4): <code>1·2+0·3+0·4 = 2</code>; col 2 (1,0,-1): <code>1</code>; col 3 (4,-1,5): <code>4</code>. → (2, 1, 4).",
   "<b>A·B fila 2</b> (fila (2,-1,2)): col 1: <code>2·2+(-1)·3+2·4 = 4-3+8 = 9</code>; col 2: <code>2·1+0+2·(-1) = 0</code>; col 3: <code>2·4+(-1)(-1)+2·5 = 8+1+10 = 19</code>. → (9, 0, 19).",
   "<b>A·B fila 3</b> (fila (2,2,1)): col 1: <code>2·2+2·3+1·4 = 14</code>; col 2: <code>2·1+0+1·(-1) = 1</code>; col 3: <code>2·4+2·(-1)+1·5 = 8-2+5 = 11</code>. → (14, 1, 11). Así <code>A·B = [ 2, 1, 4 ; 9, 0, 19 ; 14, 1, 11 ]</code>.",
   "<b>B·A fila 1</b> (fila (2,1,4) de B) por columnas de A. Col 1 de A = (1,2,2): <code>2·1+1·2+4·2 = 12</code>; col 2 = (0,-1,2): <code>2·0+1·(-1)+4·2 = 7</code>; col 3 = (0,2,1): <code>2·0+1·2+4·1 = 6</code>. → (12, 7, 6).",
   "<b>B·A fila 2</b> (fila (3,0,-1)): col 1: <code>3·1+0·2+(-1)·2 = 1</code>; col 2: <code>3·0+0·(-1)+(-1)·2 = -2</code>; col 3: <code>3·0+0·2+(-1)·1 = -1</code>. → (1, -2, -1).",
   "<b>B·A fila 3</b> (fila (4,-1,5)): col 1: <code>4·1+(-1)·2+5·2 = 12</code>; col 2: <code>4·0+(-1)(-1)+5·2 = 11</code>; col 3: <code>4·0+(-1)·2+5·1 = 3</code>. → (12, 11, 3). Así <code>B·A = [ 12, 7, 6 ; 1, -2, -1 ; 12, 11, 3 ]</code>.",
   "<b>Comparo:</b> ya en la entrada (1,1) tengo 2 (en A·B) contra 12 (en B·A). Como difieren, queda probado que <code>A·B ≠ B·A</code>."
  ],
  "resultado": "A·B = [ 2, 1, 4 ; 9, 0, 19 ; 14, 1, 11 ]  ≠  B·A = [ 12, 7, 6 ; 1, -2, -1 ; 12, 11, 3 ]",
  "verificar": "Basta señalar una entrada distinta: (1,1) da 2 frente a 12, así que la desigualdad está confirmada sin recalcular todo. <b>Error típico:</b> tomar filas por filas (en vez de fila de la primera por columna de la segunda), o cambiar el orden de los factores a mitad de camino; conviene fijar 'fila de la izquierda, columna de la derecha' antes de empezar."
 },
 {
  "id": "matrices-7",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 7",
  "titulo": "Hallar x, y, z, t en una igualdad de matrices",
  "enunciado": "Calcule x, y, z, t para que se cumpla [ 2,-1 ; 0,1 ] · [ x,y ; z,t ] = [ 5,1 ; 0,2 ].",
  "idea": "Es una <b>ecuación matricial</b> donde las incógnitas están dentro de un factor. El método es: <b>multiplicar</b> el lado izquierdo dejando las incógnitas indicadas, y luego usar que dos matrices son iguales si y solo si <b>coinciden entrada por entrada</b>. Eso convierte la igualdad de matrices en un sistemita de 4 ecuaciones muy simples.",
  "pasos": [
   "<b>Multiplico el lado izquierdo.</b> Fila 1 de la matriz de coeficientes = (2, −1). Con columna 1 de incógnitas (x, z): <code>2x − z</code>; con columna 2 (y, t): <code>2y − t</code>.",
   "Fila 2 de coeficientes = (0, 1). Con col 1: <code>0·x + 1·z = z</code>; con col 2: <code>0·y + 1·t = t</code>. Queda <code>[ 2x−z, 2y−t ; z, t ] = [ 5,1 ; 0,2 ]</code>.",
   "<b>Igualo entrada por entrada.</b> Posición (2,1): <code>z = 0</code>. Posición (2,2): <code>t = 2</code>.",
   "Posición (1,1): <code>2x − z = 5</code>. Reemplazo <code>z = 0</code>: <code>2x = 5</code> → <code>x = 5/2</code>.",
   "Posición (1,2): <code>2y − t = 1</code>. Reemplazo <code>t = 2</code>: <code>2y − 2 = 1</code> → <code>2y = 3</code> → <code>y = 3/2</code>.",
   "<b>Junto todo:</b> <code>x = 5/2, y = 3/2, z = 0, t = 2</code>."
  ],
  "resultado": "x = 5/2, y = 3/2, z = 0, t = 2",
  "verificar": "Reemplazo en el producto: <code>[2,-1;0,1]·[5/2,3/2;0,2] = [2·(5/2)−1·0, 2·(3/2)−1·2 ; 0+0, 0+2] = [5,1;0,2]</code> ✓, que es justo el lado derecho. <b>Error típico:</b> empezar por la fila 1 (con dos incógnitas mezcladas) en vez de la fila 2, que da z y t de una; conviene resolver primero las ecuaciones más simples y sustituir."
 },
 {
  "id": "matrices-8",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 8",
  "titulo": "Despejar la matriz X en 3X − 2A = 5B",
  "enunciado": "Con A = [ 3,0 ; 5,-1 ] y B = [ 0,6 ; 1,-3 ], encuentre X tal que 3X − 2A = 5B.",
  "idea": "Se reconoce como una <b>ecuación matricial lineal en X</b> con X multiplicada por un escalar (no por otra matriz), así que se despeja igual que una ecuación numérica. El método: pasar <code>−2A</code> al otro miembro sumando, obtener <code>3X = 5B + 2A</code>, y como el coeficiente 3 es un <b>escalar</b>, dividir toda la matriz por 3 (equivale a multiplicar por 1/3 cada entrada).",
  "pasos": [
   "<b>Despejo 3X.</b> De <code>3X − 2A = 5B</code> paso <code>−2A</code> sumando: <code>3X = 5B + 2A</code>.",
   "<b>Calculo los escalares por matriz.</b> <code>2A = [2·3,2·0;2·5,2·(-1)] = [6,0;10,-2]</code>.",
   "<code>5B = [5·0,5·6;5·1,5·(-3)] = [0,30;5,-15]</code>.",
   "<b>Sumo 5B + 2A</b> entrada por entrada: <code>(0+6, 30+0 ; 5+10, -15+(-2)) = [ 6,30 ; 15,-17 ]</code>.",
   "<b>Divido por el escalar 3</b> (multiplico cada entrada por 1/3): <code>X = (1/3)·[ 6,30 ; 15,-17 ]</code>.",
   "Entrada por entrada: <code>6/3 = 2</code>, <code>30/3 = 10</code>, <code>15/3 = 5</code>, <code>-17/3</code> (no es entero, queda fracción). Resulta <code>X = [ 2,10 ; 5,-17/3 ]</code>."
  ],
  "resultado": "X = [ 2, 10 ; 5, -17/3 ]",
  "verificar": "Reemplazo en la ecuación original: <code>3X = [6,30;15,-17]</code> y <code>3X − 2A = [6-6, 30-0 ; 15-10, -17-(-2)] = [0,30;5,-15] = 5B</code> ✓. <b>Error típico:</b> creer que 'no se puede dividir por matrices' y trabarse; acá el 3 es un escalar, y dividir por un escalar sí es válido y se hace entrada por entrada."
 },
 {
  "id": "matrices-9",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 9",
  "titulo": "Sistema con incógnitas matriciales (2X−3Y, X−Y)",
  "enunciado": "Resuelva el sistema cuyas incógnitas son matrices: 2X − 3Y = [ 1,5 ; 4,2 ] ; X − Y = [ -1,0 ; 3,6 ].",
  "idea": "Es un <b>sistema lineal 2×2 pero con matrices como incógnitas</b> (X e Y son matrices 2×2). Se resuelve con el método de <b>sustitución</b> exactamente como con números: de la ecuación más simple se despeja X, se reemplaza en la otra y se opera con las matrices dato entrada por entrada.",
  "pasos": [
   "<b>Despejo X de la 2ª ecuación</b> (la más simple): de <code>X − Y = [-1,0;3,6]</code> obtengo <code>X = Y + [-1,0;3,6]</code>.",
   "<b>Sustituyo en la 1ª:</b> <code>2(Y + [-1,0;3,6]) − 3Y = [1,5;4,2]</code>. Distribuyo el 2: <code>2Y + [-2,0;6,12] − 3Y</code>.",
   "<b>Agrupo Y:</b> <code>2Y − 3Y = −Y</code>, así que queda <code>−Y + [-2,0;6,12] = [1,5;4,2]</code>.",
   "<b>Despejo −Y</b> pasando la matriz restando: <code>−Y = [1,5;4,2] − [-2,0;6,12] = [1-(-2), 5-0 ; 4-6, 2-12] = [3,5;-2,-10]</code>.",
   "<b>Cambio de signo</b> para tener Y: <code>Y = -[3,5;-2,-10] = [ -3,-5 ; 2,10 ]</code>.",
   "<b>Recupero X</b> con la fórmula despejada: <code>X = Y + [-1,0;3,6] = [-3+(-1), -5+0 ; 2+3, 10+6] = [ -4,-5 ; 5,16 ]</code>."
  ],
  "resultado": "X = [ -4,-5 ; 5,16 ]  ·  Y = [ -3,-5 ; 2,10 ]",
  "verificar": "Chequeo las dos ecuaciones: <code>2X − 3Y = [-8,-10;10,32] − [-9,-15;6,30] = [1,5;4,2]</code> ✓ y <code>X − Y = [-4-(-3), -5-(-5) ; 5-2, 16-10] = [-1,0;3,6]</code> ✓. <b>Error típico:</b> olvidar el signo al pasar la matriz de restar (poner <code>[1,5;4,2]−[-2,0;6,12]</code> como <code>[-1,...]</code> en vez de <code>[3,...]</code>), o no distribuir el 2 sobre las dos matrices dentro del paréntesis."
 },
 {
  "id": "matrices-11",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 11",
  "titulo": "Sistemas por la regla de Cramer (a–f)",
  "enunciado": "Resuelva, si es posible, por Cramer: a) x−2y=5, x+y=7. b) x−3y+5z=−24, 2x−y+4z=−8, x+y=9. c) x+y+z=2, −2x+3y−z=4, x−y+2z=3. d) 2x+3y−z=4, 4x−y+z=2, x+2y−z=3. e) 4x−y=8, 2x+y+z=2, y+3z=−6. f) x+y+z=2, −2x+3y−z=4, −2x+8y=12.",
  "idea": "Se reconoce por el pedido explícito de <b>regla de Cramer</b>: cada incógnita se calcula como <code>xᵢ = det(Aᵢ)/det(A)</code>, donde <code>Aᵢ</code> es la matriz de coeficientes con la columna i reemplazada por el vector de términos independientes. Solo es aplicable si <code>det(A) ≠ 0</code>; si <code>det(A)=0</code> el método no sirve y hay que analizar por Gauss.",
  "pasos": [
   "<b>a)</b> <code>A=[1,-2;1,1]</code>, <code>D = 1·1−(-2)·1 = 3 ≠ 0</code>. <code>Dₓ=det[5,-2;7,1]=5·1−(-2)·7=19</code> → <code>x=19/3</code>. <code>Dy=det[1,5;1,7]=7−5=2</code> → <code>y=2/3</code>.",
   "<b>b)</b> por Sarrus, <code>D=det[1,-3,5;2,-1,4;1,1,0] = -1</code>. Reemplazando la columna del término independiente (−24,−8,9) da <code>Dₓ=-7, Dy=-2, D_z=5</code> → <code>x=(-7)/(-1)=7, y=(-2)/(-1)=2, z=5/(-1)=-5</code>.",
   "<b>c)</b> <code>D=det[1,1,1;-2,3,-1;1,-1,2] = 7 ≠ 0</code>. Con el término independiente (2,4,3): <code>Dₓ=-14, Dy=7, D_z=21</code> → <code>x=-2, y=1, z=3</code>.",
   "<b>d)</b> <code>D=det[2,3,-1;4,-1,1;1,2,-1] = 4 ≠ 0</code>. Con (4,2,3): <code>Dₓ=4, Dy=0, D_z=-8</code> → <code>x=1, y=0, z=-2</code>.",
   "<b>e)</b> <code>D=det[4,-1,0;2,1,1;0,1,3] = 14 ≠ 0</code>. Con (8,2,−6): <code>Dₓ=28, Dy=0, D_z=-28</code> → <code>x=2, y=0, z=-2</code>.",
   "<b>f)</b> <code>D=det[1,1,1;-2,3,-1;-2,8,0]</code>. Por Sarrus: <code>(1·3·0 + 1·(-1)·(-2) + 1·(-2)·8) − ((-2)·3·1 + 8·(-1)·1 + 0·(-2)·1) = (0+2-16) − (-6-8+0) = -14 − (-14) = 0</code>. Como <code>D=0</code>, <b>no se puede aplicar Cramer</b>: el sistema es SCI o SI y hay que estudiarlo por Gauss."
  ],
  "resultado": "a)(19/3,2/3) b)(7,2,−5) c)(−2,1,3) d)(1,0,−2) e)(2,0,−2) f) det=0, no aplica Cramer",
  "verificar": "Reemplazo de control en c): <code>x+y+z = -2+1+3 = 2</code> ✓ y <code>-2(-2)+3(1)-3 = 4</code> ✓. En f), como <code>D=0</code>, no tiene sentido calcular cocientes (dividiría por cero). <b>Error típico:</b> reemplazar la <b>fila</b> en vez de la <b>columna</b> i al armar Aᵢ, o intentar aplicar Cramer aunque el determinante dé 0 (ahí el método directamente no aplica)."
 },
 {
  "id": "matrices-12",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 12",
  "titulo": "Valor de k para poder aplicar Cramer",
  "enunciado": "Halle k para que se puedan resolver por Cramer: a) 3x−4y−8z=k, kx−5y+z=7, ky−z=−2. b) x+y=5, y−3z=k, x+z=1.",
  "idea": "La regla de Cramer exige <code>det(A) ≠ 0</code>. Como aquí el parámetro k puede aparecer en los coeficientes, el método es: escribir <code>det(A)</code> <b>en función de k</b>, igualarlo a 0 para hallar los k prohibidos, y quedarse con todos los demás. Ojo: si k solo figura en el término independiente, el determinante es constante y no impone restricción.",
  "pasos": [
   "<b>a) Armo la matriz de coeficientes</b> (k está en los coeficientes): <code>A = [3,-4,-8; k,-5,1; 0,k,-1]</code>.",
   "<b>Calculo det(A) por cofactores de la 1ª fila:</b> <code>3·det[-5,1;k,-1] − (-4)·det[k,1;0,-1] + (-8)·det[k,-5;0,k]</code>.",
   "Menores: <code>det[-5,1;k,-1] = 5 − k</code>; <code>det[k,1;0,-1] = -k</code>; <code>det[k,-5;0,k] = k²</code>. Entonces <code>det(A) = 3(5−k) + 4(−k) − 8k² = 15 − 3k − 4k − 8k² = -8k² − 7k + 15</code>.",
   "<b>Igualo a 0:</b> <code>-8k² − 7k + 15 = 0</code> ⇔ <code>8k² + 7k − 15 = 0</code>. Por la cuadrática: <code>k = (-7 ± √(49+480))/16 = (-7 ± 23)/16</code>, o sea <code>k = 1</code> o <code>k = -15/8</code>.",
   "Por lo tanto se puede aplicar Cramer si <b>k ≠ 1 y k ≠ −15/8</b> (son los únicos valores donde el determinante se anula).",
   "<b>b)</b> aquí k aparece <b>solo en el término independiente</b> (<code>y − 3z = k</code>), no en los coeficientes. La matriz de coeficientes es <code>[1,1,0; 0,1,-3; 1,0,1]</code> y su <code>det = 1(1·1 − (-3)·0) − 1(0·1 − (-3)·1) + 0 = 1 − 3 = -2</code>, constante.",
   "Como <code>det(A) = -2 ≠ 0</code> para todo k, en b) el sistema es siempre SCD y <b>se puede resolver por Cramer para cualquier k</b>."
  ],
  "resultado": "a) k ≠ 1 y k ≠ −15/8.  b) para todo k (det = −2 ≠ 0).",
  "verificar": "Control en a): reemplazo k=0 en <code>-8k²-7k+15</code> → 15 ≠ 0 (con k=0 sí se puede, y en efecto 0 no está entre las raíces) ✓; y las raíces 1 y −15/8 verifican <code>8k²+7k-15=0</code>. En b), el determinante no contiene k, por eso ningún valor lo anula. <b>Error típico:</b> meter el parámetro del término independiente dentro de la matriz de coeficientes; k solo importa para Cramer cuando aparece en A."
 },
 {
  "id": "matrices-2",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 2",
  "titulo": "Comprobar que (Aᵗ)ᵗ = A",
  "enunciado": "Compruebe que (Aᵗ)ᵗ = A y (Bᵗ)ᵗ = B (usando las matrices del ejercicio 1).",
  "idea": "Se reconoce como una <b>propiedad de la trasposición</b>: trasponer es intercambiar filas por columnas, y hacerlo <b>dos veces</b> devuelve la matriz de partida (es una operación <b>involutiva</b>). El método es concreto: trasponer una vez, trasponer el resultado y comprobar que se recupera A; y en general razonar sobre la posición genérica (i,j).",
  "pasos": [
   "<b>Tomo A = [ 3,1 ; 2,5 ; 7,6 ]</b> (matriz 3×2). Trasponer significa que la fila i pasa a ser la columna i.",
   "<b>Primera traspuesta:</b> la fila 1 de A, (3,1), se vuelve la columna 1; la fila 2, (2,5), la columna 2; la fila 3, (7,6), la columna 3. Queda <code>Aᵗ = [ 3,2,7 ; 1,5,6 ]</code> (ahora 2×3).",
   "<b>Segunda traspuesta:</b> ahora traspongo <code>Aᵗ</code>. Su fila 1 (3,2,7) vuelve a columna 1, y su fila 2 (1,5,6) a columna 2.",
   "<b>Reconstruyo:</b> columna 1 = (3,2,7) y columna 2 = (1,5,6) dan las filas <code>(3,1), (2,5), (7,6)</code>, es decir <code>(Aᵗ)ᵗ = [ 3,1 ; 2,5 ; 7,6 ] = A</code> ✔.",
   "<b>Argumento general (entrada genérica):</b> por definición <code>Aᵗ(j,i) = A(i,j)</code>. Aplicando trasposición otra vez, <code>(Aᵗ)ᵗ(i,j) = Aᵗ(j,i) = A(i,j)</code>.",
   "Como cada entrada de <code>(Aᵗ)ᵗ</code> coincide con la de A, la igualdad vale para cualquier matriz; con B (matriz del ejercicio 1) el razonamiento es idéntico, así que <code>(Bᵗ)ᵗ = B</code>."
  ],
  "resultado": "(Aᵗ)ᵗ = A (y (Bᵗ)ᵗ = B): trasponer dos veces devuelve la matriz original.",
  "verificar": "Basta seguir una entrada: el 6 estaba en A en posición (3,2); en Aᵗ pasa a (2,3); al trasponer de nuevo vuelve a (3,2) ✓. Cada elemento regresa a su lugar original. <b>Error típico:</b> confundir la traspuesta con otras transformaciones (dar vuelta las filas, rotar la matriz o calcular la inversa); trasponer es solo intercambiar el rol de filas y columnas, y el tamaño cambia de 3×2 a 2×3 y vuelve a 3×2."
 },
 {
  "id": "matrices-4",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 4",
  "titulo": "Todos los productos posibles entre A, B, C, D",
  "enunciado": "Con A (2×3), B (4×2), C (3×4) y D (3×3), efectúe todos los productos posibles (incluyendo D·D: son 6). A=[1,2,3;-2,5,1], B=[7,0;-1,1;0,1;3,4], C=[2,7,1,5;6,3,0,0;-2,-5,1,0], D=[1,-1,1;0,5,2;2,3,-3].",
  "idea": "La clave es el <b>criterio de compatibilidad</b>: un producto <code>M·N</code> existe solo si el número de <b>columnas de M</b> coincide con el número de <b>filas de N</b>, y el resultado tiene (filas de M)×(columnas de N). El método es primero <b>filtrar por dimensiones</b> cuáles de las 16 combinaciones son válidas (resultan 6) y recién ahí calcular esos productos fila por columna.",
  "pasos": [
   "<b>Filtro por dimensiones</b> (columnas de la 1ª = filas de la 2ª): <b>A·C</b> (2×3·3×4=2×4), <b>A·D</b> (2×3·3×3=2×3), <b>B·A</b> (4×2·2×3=4×3), <b>C·B</b> (3×4·4×2=3×2), <b>D·C</b> (3×3·3×4=3×4) y <b>D·D</b> (3×3·3×3=3×3). Son los 6 válidos.",
   "<b>A·C:</b> fila 1 de A=(1,2,3) por las 4 columnas de C: <code>1·2+2·6+3·(-2)=8</code>, <code>1·7+2·3+3·(-5)=-2</code>, <code>1·1+2·0+3·1=4</code>, <code>1·5+0+0=5</code>. Fila 2=(-2,5,1): <code>-4+30-2=24</code>, <code>-14+15-5=-4</code>, <code>-2+0+1=-1</code>, <code>-10+0+0=-10</code>. → <code>A·C = [ 8,-2,4,5 ; 24,-4,-1,-10 ]</code>.",
   "<b>A·D:</b> fila 1=(1,2,3) por columnas de D: <code>1·1+2·0+3·2=7</code>, <code>1·(-1)+2·5+3·3=18</code>, <code>1·1+2·2+3·(-3)=-4</code>. Fila 2=(-2,5,1): <code>-2+0+2=0</code>, <code>2+25+3=30</code>, <code>-2+10-3=5</code>. → <code>A·D = [ 7,18,-4 ; 0,30,5 ]</code>.",
   "<b>B·A:</b> cada fila de B (2 componentes) por columnas de A. Fila (7,0): <code>7·1+0·(-2)=7, 7·2+0·5=14, 7·3+0·1=21</code>. Fila (-1,1): <code>-1+(-2)=-3, -2+5=3, -3+1=-2</code>. Fila (0,1): <code>-2, 5, 1</code>. Fila (3,4): <code>3-8=-5, 6+20=26, 9+4=13</code>. → <code>B·A = [ 7,14,21 ; -3,3,-2 ; -2,5,1 ; -5,26,13 ]</code>.",
   "<b>C·B:</b> cada fila de C (4 componentes) por las 2 columnas de B, con col 1=(7,-1,0,3) y col 2=(0,1,1,4). Fila (2,7,1,5): <code>14-7+0+15=22</code>, <code>0+7+1+20=28</code>. Fila (6,3,0,0): <code>42-3+0+0=39</code>, <code>0+3+0+0=3</code>. Fila (-2,-5,1,0): <code>-14+5+0+0=-9</code>, <code>0-5+1+0=-4</code>. → <code>C·B = [ 22,28 ; 39,3 ; -9,-4 ]</code>.",
   "<b>D·C:</b> filas de D por columnas de C. Fila (1,-1,1): <code>1·2-1·6+1·(-2)=-6</code>, <code>7-3-5=-1</code>, <code>1-0+1=2</code>, <code>5-0+0=5</code>. Fila (0,5,2): <code>0+30-4=26</code>, <code>0+15-10=5</code>, <code>0+0+2=2</code>, <code>0</code>. Fila (2,3,-3): <code>4+18+6=28</code>, <code>14+9+15=38</code>, <code>2+0-3=-1</code>, <code>10</code>. → <code>D·C = [ -6,-1,2,5 ; 26,5,2,0 ; 28,38,-1,10 ]</code>.",
   "<b>D·D:</b> D por sí misma. Fila (1,-1,1): <code>1-0+2=3</code>, <code>-1-5+3=-3</code>, <code>1-2-3=-4</code>. Fila (0,5,2): <code>0+0+4=4</code>, <code>0+25+6=31</code>, <code>0+10-6=4</code>. Fila (2,3,-3): <code>2+0-6=-4</code>, <code>-2+15-9=4</code>, <code>2+6+9=17</code>. → <code>D·D = [ 3,-3,-4 ; 4,31,4 ; -4,4,17 ]</code>."
  ],
  "resultado": "6 productos: A·C, A·D, B·A, C·B, D·C y D·D (ver los valores en los pasos).",
  "verificar": "Chequeo de dimensiones: cada resultado tiene (filas de la izquierda)×(columnas de la derecha), p. ej. B·A es 4×3 y C·B es 3×2, lo que confirma que no se invirtió el orden. <b>Error típico:</b> intentar A·B (columnas de A=3 ≠ filas de B=4, imposible) o confundir el orden y calcular el producto que no existe; siempre conviene chequear primero las dimensiones antes de multiplicar."
 },
 {
  "id": "matrices-10",
  "guia": "Matrices",
  "unidad": "U3",
  "num": "TP Ej. 10",
  "titulo": "Sistema con incógnitas matriciales (A·X + B·Y = C, A·X = Y)",
  "enunciado": "Con A=[2,1;0,1], B=[1,0;1,2], C=[10,11;4,7], resuelva: A·X + B·Y = C ; A·X = Y.",
  "idea": "Es un <b>sistema matricial</b> donde X e Y aparecen multiplicadas por matrices, así que despejar exige <b>inversas</b>. El truco es sustituir <code>Y = A·X</code> (dada por la 2ª ecuación) y llamar <code>Z = A·X = Y</code>, con lo que la 1ª ecuación se factoriza como <code>(I + B)·Z = C</code>; luego se invierten <code>(I+B)</code> y <code>A</code> por el método de la adjunta.",
  "pasos": [
   "<b>Sustituyo.</b> Como <code>A·X = Y</code>, llamo <code>Z = A·X = Y</code>. La 1ª ecuación <code>A·X + B·Y = C</code> se vuelve <code>Z + B·Z = C</code>, o sea <code>(I + B)·Z = C</code> sacando Z como factor común por izquierda.",
   "<b>Armo I + B:</b> <code>[1,0;0,1] + [1,0;1,2] = [ 2,0 ; 1,3 ]</code>. Su determinante es <code>2·3 − 0·1 = 6 ≠ 0</code>, así que es invertible.",
   "<b>Inversa por adjunta</b> (2×2: <code>[a,b;c,d]⁻¹ = (1/det)[d,-b;-c,a]</code>): <code>(I+B)⁻¹ = (1/6)·[ 3,0 ; -1,2 ]</code>.",
   "<b>Despejo Z = (I+B)⁻¹·C:</b> <code>(1/6)·[3,0;-1,2]·[10,11;4,7]</code>. Producto interno: fila (3,0)→<code>(3·10+0·4, 3·11+0·7)=(30,33)</code>; fila (-1,2)→<code>(-10+8, -11+14)=(-2,3)</code>. Multiplico por 1/6: <code>Z = [ 30/6, 33/6 ; -2/6, 3/6 ] = [ 5, 11/2 ; -1/3, 1/2 ]</code>. Como <code>Y = Z</code>, ya tengo <b>Y = [ 5, 11/2 ; -1/3, 1/2 ]</b>.",
   "<b>Recupero X</b> de <code>Z = A·X</code> → <code>X = A⁻¹·Z</code>. Inversa de A=[2,1;0,1]: <code>det = 2</code>, <code>A⁻¹ = (1/2)·[ 1,-1 ; 0,2 ]</code>.",
   "<b>Calculo X = A⁻¹·Z:</b> <code>(1/2)·[1,-1;0,2]·[5,11/2;-1/3,1/2]</code>. Fila (1,-1): <code>(5−(-1/3), 11/2−1/2)=(16/3, 5)</code>; fila (0,2): <code>(0+2·(-1/3), 0+2·(1/2))=(-2/3, 1)</code>. Multiplico por 1/2: <code>X = [ 16/6, 5/2 ; -2/6, 1/2 ] = [ 8/3, 5/2 ; -1/3, 1/2 ]</code>."
  ],
  "resultado": "X = [ 8/3, 5/2 ; -1/3, 1/2 ]  ·  Y = [ 5, 11/2 ; -1/3, 1/2 ]",
  "verificar": "Reemplazo en la 1ª ecuación: <code>A·X = [2,1;0,1]·[8/3,5/2;-1/3,1/2] = [16/3-1/3, 5+1/2 ; -1/3, 1/2] = [5, 11/2 ; -1/3, 1/2] = Y</code> ✓ (confirma la 2ª); y <code>A·X + B·Y = Y + B·Y = [10,11;4,7] = C</code> ✔. <b>Error típico:</b> factorizar mal el orden (escribir <code>Z·(I+B)</code> en vez de <code>(I+B)·Z</code>) o multiplicar la inversa por el lado equivocado; con matrices el producto no conmuta, así que <code>(I+B)⁻¹</code> va por izquierda."
 },
 {
  "id": "sistemas-1",
  "guia": "Sistemas",
  "unidad": "U3",
  "num": "Ejercicio 1",
  "titulo": "¿Qué vector es solución de qué sistema?",
  "enunciado": "Determinar si alguno de los vectores a=(1;1;2;−3), b=(4,5;8;−0,5;9), c=(2;3;4;−1), d=(1;−1;2;7) es solución de alguno de los sistemas. A: { x₁+x₃=4 ; x₁−x₃=5 }.  B: { x₁+x₂+x₃=4 ; 3x₁+2x₂=5 ; x₁−2x₂+x₃=1 }.  C: { 4x₁+2x₂+3x₃+x₄=4 ; 3x₁−x₂+x₃−x₄=2 ; 4x₁−x₄=2 ; 3x₂+x₃=−3 }.",
  "idea": "Un vector es solución de un sistema si, al reemplazar, verifica <b>todas</b> sus ecuaciones, y además debe tener tantas componentes como incógnitas tiene ese sistema. Se puede chequear por sustitución vector por vector, pero lo más seguro y prolijo es <b>resolver cada sistema</b> (por sumas/restas o Gauss) y luego comparar con los vectores dados.",
  "pasos": [
   "<b>Sistema A</b> (2 incógnitas x₁, x₃): sumo las dos ecuaciones, <code>(x₁+x₃)+(x₁−x₃)=4+5</code> → <code>2x₁=9</code> → <code>x₁=9/2</code>. Resto: <code>(x₁+x₃)−(x₁−x₃)=4−5</code> → <code>2x₃=−1</code> → <code>x₃=−1/2</code>. Solución <code>(x₁, x₃) = (9/2, −1/2)</code>.",
   "<b>Sistema B</b> (3 incógnitas): de la 2ª <code>3x₁+2x₂=5</code> y trabajando con las otras dos por sustitución/Gauss se llega a <code>(x₁, x₂, x₃) = (1, 1, 2)</code>.",
   "<b>Sistema C</b> (4 incógnitas): por Gauss, usando <code>4x₁−x₄=2</code> y <code>3x₂+x₃=−3</code> junto con las dos primeras, sale <code>(x₁, x₂, x₃, x₄) = (1, −1, 0, 2)</code>.",
   "<b>Comparo por cantidad de incógnitas.</b> Un vector solo puede ser solución del sistema que tiene su misma cantidad de incógnitas: A necesita 2 componentes, B necesita 3 y C necesita 4. Así, (9/2, −1/2) es la solución de A y (1, 1, 2) la de B.",
   "<b>Reviso los vectores de 4 componentes</b> (a, b, c, d) contra la solución de C = (1, −1, 0, 2): a=(1,1,2,−3) no coincide, b=(4,5;8;−0,5;9) no, c=(2,3,4,−1) no, d=(1,−1,2,7) no (difiere en la 3ª y 4ª componente). Ninguno satisface C.",
   "<b>Conclusión:</b> las soluciones halladas son A=(9/2,−1/2), B=(1,1,2) y C=(1,−1,0,2); entre los vectores de 4 componentes ninguno resuelve C."
  ],
  "resultado": "Soluciones: <b>A = (9/2, −1/2)</b>, <b>B = (1, 1, 2)</b>, <b>C = (1, −1, 0, 2)</b>. Un vector es solución solo si iguala a la solución del sistema con esa cantidad de incógnitas.",
  "verificar": "Reemplazo de control: para C, <code>4·1 − x₄ = 2</code> exige <code>x₄=2</code>, y <code>3·(−1)+x₃=−3</code> exige <code>x₃=0</code>, coherente con (1,−1,0,2). Los vectores se leyeron de una imagen embebida en el .doc; confirmá los componentes exactos en el original y verificá reemplazando en cada ecuación. <b>Error típico:</b> comparar un vector con un sistema de distinta cantidad de incógnitas, o dar por solución un vector que cumple una o dos ecuaciones pero no <b>todas</b>. (Dato: la solución de B, (1,1,2), coincide con las primeras componentes de a.)"
 },
 {
  "id": "sistemas-2",
  "guia": "Sistemas",
  "unidad": "U3",
  "num": "Ejercicio 2",
  "titulo": "Clasificar los sistemas (SCD / SCI / SI)",
  "enunciado": "Clasificar, luego de resolver: A: { 3x+2y=5 ; 4y=−6x+10 }.  B: { 6x+4y=10 ; 3x+2y=7 }.  C: { 4x−2y=6 ; 5x+y=4 ; 2x+3y=2 }.",
  "idea": "Clasificar un SEL es decidir cuántas soluciones tiene: <b>SCD</b> si hay solución única, <b>SCI</b> si hay infinitas (ecuaciones que representan la misma recta) y <b>SI</b> si no hay ninguna (rectas paralelas o una contradicción). El método es resolver o comparar las ecuaciones normalizándolas para ver si son la misma, proporcionales o incompatibles.",
  "pasos": [
   "<b>A.</b> Reescribo la 2ª: <code>4y = −6x + 10</code> ⇔ <code>6x + 4y = 10</code>; dividiendo por 2, <code>3x + 2y = 5</code>. Es <b>idéntica</b> a la primera ecuación.",
   "Como ambas son la misma recta, todo punto de esa recta es solución → infinitas soluciones → <b>SCI</b>.",
   "<b>B.</b> Normalizo la 1ª: <code>6x + 4y = 10</code> ⇔ (÷2) <code>3x + 2y = 5</code>. Pero la otra dice <code>3x + 2y = 7</code>.",
   "Mismo lado izquierdo, distinto resultado (5 vs 7): imposible que 3x+2y valga 5 y 7 a la vez → rectas paralelas → <b>SI</b> (incompatible).",
   "<b>C.</b> Resuelvo las dos primeras: de <code>5x + y = 4</code> despejo <code>y = 4 − 5x</code>; sustituyo en <code>4x − 2y = 6</code>: <code>4x − 2(4 − 5x) = 6</code> → <code>4x − 8 + 10x = 6</code> → <code>14x = 14</code> → <code>x = 1</code>, luego <code>y = 4 − 5 = −1</code>.",
   "<b>Verifico en la 3ª ecuación</b> (que sobra): <code>2(1) + 3(−1) = 2 − 3 = −1 ≠ 2</code>. El punto (1,−1) no la cumple, así que no hay solución común a las tres → <b>SI</b> (incompatible)."
  ],
  "resultado": "<b>A → SCI</b> (infinitas) · <b>B → SI</b> (incompatible) · <b>C → SI</b> (incompatible).",
  "verificar": "A: al normalizar, las dos ecuaciones son literalmente <code>3x+2y=5</code>, misma recta. B: mismo coeficiente (3,2) pero términos 5 y 7, contradicción. C: (1,−1) sale de dos ecuaciones pero falla la tercera (−1 ≠ 2). <b>Error típico:</b> clasificar mirando solo dos de las tres ecuaciones de C (darían SCD) y olvidar chequear la tercera, o confundir SCI con SI cuando el lado izquierdo es proporcional: si además coincide el término independiente es SCI, si no, es SI."
 },
 {
  "id": "sistemas-3",
  "guia": "Sistemas",
  "unidad": "U3",
  "num": "Ejercicio 3",
  "titulo": "Codificar un problema como sistema (dulces de Ana)",
  "enunciado": "Ana hace dulce con bananas (b), manzanas (m) y naranjas (n): el triple de la cantidad de dulce de bananas es igual al doble de la cantidad de dulce de manzanas y naranjas juntos. Envasa en frascos de ½ kg. Codificar como sistema.",
  "idea": "Es un problema de <b>modelado</b>: traducir cada frase del enunciado a una ecuación lineal. El método es definir con claridad las variables (kg de cada dulce), convertir cada condición verbal en una igualdad y descartar los datos que no son restricciones sobre las cantidades (como los precios).",
  "pasos": [
   "<b>Defino variables:</b> <code>b, m, n</code> = kilos de dulce de banana, manzana y naranja dentro del frasco (cantidades, no precios).",
   "<b>Traduzco la 1ª condición:</b> «el triple de bananas = el doble de (manzanas + naranjas)» → <code>3b = 2(m + n)</code>.",
   "<b>Paso todo a un lado</b> para dejarla en forma estándar: <code>3b − 2m − 2n = 0</code>.",
   "<b>Traduzco la 2ª condición:</b> «el frasco es de ½ kg» significa que la suma de los tres dulces pesa medio kilo → <code>b + m + n = 1/2</code>.",
   "<b>Descarto datos económicos:</b> los precios ($30/$35/$25/$40) son información de costo, no restricciones sobre las cantidades, así que no entran en el sistema.",
   "<b>Armo el SEL:</b> queda un sistema de <b>2 ecuaciones con 3 incógnitas</b> <code>{ 3b − 2m − 2n = 0 ; b + m + n = 1/2 }</code>, con la condición física <code>b, m, n ≥ 0</code>."
  ],
  "resultado": "Sistema: { 3b − 2m − 2n = 0 ; b + m + n = 1/2 }, con b, m, n ≥ 0. Es SCI: b = 1/5 kg y m + n = 3/10 kg (queda un parámetro libre).",
  "verificar": "Compruebo el valor de b: de <code>3b = 2(m+n)</code> y <code>m+n = 1/2 − b</code> resulta <code>3b = 2(1/2 − b) = 1 − 2b</code> → <code>5b = 1</code> → <code>b = 1/5</code>, y entonces <code>m + n = 1/2 − 1/5 = 3/10</code> ✓. Con 2 ecuaciones independientes y 3 incógnitas el sistema es Compatible Indeterminado (un grado de libertad). <b>Error típico:</b> incluir los precios como una ecuación más, o interpretar «manzanas y naranjas juntos» como dos condiciones separadas en vez de la suma <code>(m+n)</code>."
 },
 {
  "id": "arit-euclides146",
  "guia": "Aritmética",
  "unidad": "U4",
  "num": "Final",
  "titulo": "¿146 y 291 son coprimos? (Euclides)",
  "enunciado": "Verificar, con el algoritmo de Euclides, si 146 y 291 son coprimos.",
  "idea": "Se reconoce porque piden decidir coprimalidad y nombran a Euclides: la herramienta es el algoritmo de divisiones sucesivas. El concepto de fondo es que <b>dos números son coprimos si y solo si su MCD vale 1</b>, es decir, no comparten ningún factor primo. Euclides se apoya en que MCD(a, b) = MCD(b, r), donde r es el resto de dividir a por b, así que ir reemplazando el par por (divisor, resto) no cambia el MCD y termina rápido. El último resto no nulo de la cadena es exactamente ese MCD.",
  "pasos": [
   "Ordeno el par de mayor a menor: a = 291, b = 146. Divido el grande por el chico: <code>291 = 1 · 146 + 145</code> (cociente 1, resto 145, porque 291 − 146 = 145).",
   "Reemplazo el par por (divisor, resto) = (146, 145) y vuelvo a dividir: <code>146 = 1 · 145 + 1</code> (cociente 1, resto 1, porque 146 − 145 = 1).",
   "Repito con (145, 1): <code>145 = 145 · 1 + 0</code> (145 entra 145 veces exacto en sí mismo, resto 0).",
   "El algoritmo se detiene cuando el resto llega a 0. El <b>último resto no nulo</b> fue 1, en el paso anterior.",
   "Por lo tanto MCD(146, 291) = <b>1</b>.",
   "Como el MCD es 1, no comparten ningún divisor común mayor que 1: son coprimos (primos entre sí)."
  ],
  "resultado": "<b>Sí son coprimos</b> (MCD = 1).",
  "verificar": "En el Verificador de Euclides: MCD(146,291)=1. Error típico: confundirse y tomar el 0 como MCD; el MCD es el ÚLTIMO resto NO nulo, nunca el 0."
 },
 {
  "id": "arit-euclides34-510",
  "guia": "Aritmética",
  "unidad": "U4",
  "num": "Final 18-12-2024",
  "titulo": "¿34 y 510 son coprimos? (Euclides)",
  "enunciado": "Indagar, con el algoritmo de Euclides, si 34 y 510 son coprimos.",
  "idea": "Igual que el anterior: piden coprimalidad con Euclides, y coprimos ⇔ MCD = 1. La particularidad aquí es que uno divide exactamente al otro, así que el algoritmo termina en un solo paso. Cuando el número chico divide al grande, el MCD es directamente el número chico, porque un número es su propio divisor más grande y también divide al otro.",
  "pasos": [
   "Ordeno de mayor a menor: a = 510, b = 34. Divido: 510 ÷ 34 da cociente 15 y resto 0, porque 34 · 15 = 510 exacto. Escribo <code>510 = 15 · 34 + 0</code>.",
   "El resto es 0 ya en el primer paso, así que el algoritmo se detiene inmediatamente.",
   "El último resto no nulo es el divisor de este paso, es decir 34. Entonces MCD(34, 510) = <b>34</b>.",
   "Interpretación: como 34 divide a 510, sí comparten factores (de hecho todos los de 34). En primos, 34 = 2·17 y 510 = 2·3·5·17, así que comparten 2 y 17.",
   "Como MCD = 34 ≠ 1, los números NO son coprimos."
  ],
  "resultado": "<b>No son coprimos</b>: MCD(34, 510) = 34 (34 divide a 510).",
  "verificar": "510/34 = 15 exacto, sin resto. Error típico: dar el MCD como 1 por costumbre; cuando el resto es 0 en el primer paso, el MCD es el divisor, no 1."
 },
 {
  "id": "arit-phi",
  "guia": "Aritmética",
  "unidad": "U4",
  "num": "Final",
  "titulo": "φ de Euler: φ(19·7) y φ(23·13)",
  "enunciado": "Siendo t = p·q con p, q primos, hallar φ(t) para: (a) p=19, q=7; (b) p=23, q=13. ¿Qué significa?",
  "idea": "Se reconoce por la letra φ y por escribir t como producto de dos primos: es un cálculo de la función φ (indicatriz) de Euler. El concepto de fondo es que φ cuenta cuántos enteros positivos menores que t son coprimos con t, y que φ es multiplicativa entre coprimos, con φ(p) = p−1 para p primo. Por eso, cuando t = p·q con p y q primos distintos, vale la fórmula directa <code>φ(p·q) = (p−1)(q−1)</code>. Esta cantidad es la que RSA usa para fabricar las claves.",
  "pasos": [
   "(a) Primero calculo el módulo: t = 19·7 = 133.",
   "(a) Como 19 y 7 son primos distintos, aplico φ(p·q) = (p−1)(q−1): <code>φ(133) = (19−1)(7−1) = 18·6</code>.",
   "(a) Multiplico: 18·6 = 108. Entonces φ(133) = 108.",
   "(b) Calculo el módulo: t = 23·13 = 299.",
   "(b) Otra vez ambos son primos, así que <code>φ(299) = (23−1)(13−1) = 22·12</code>.",
   "(b) Multiplico: 22·12 = 264. Entonces φ(299) = 264.",
   "Significado: de los enteros de 1 a 132 hay 108 coprimos con 133; de 1 a 298 hay 264 coprimos con 299. En RSA, φ(t) es el módulo con el que se relacionan las claves pública y privada (e·d ≡ 1 mód φ(t))."
  ],
  "resultado": "<b>φ(19·7) = 108</b> · <b>φ(23·13) = 264</b>.",
  "verificar": "Calculadora de φ de Euler: φ(133)=108, φ(299)=264. Error típico: usar (p−1)(q−1) cuando p o q NO son primos, o restar 1 al producto en vez de a cada factor: es (p−1)·(q−1), no p·q−1."
 },
 {
  "id": "arit-conceptual",
  "guia": "Aritmética",
  "unidad": "U4",
  "num": "Pregunta conceptual (Ej. 5)",
  "titulo": "Relación entre aritmética modular y la ciberseguridad",
  "enunciado": "Describir en ≤10 renglones la relación entre la aritmética modular / la matemática vista y su aplicación en Sistemas (ciberseguridad). No se piden definiciones.",
  "idea": "Se reconoce porque no hay números para operar: es una consigna de redacción que pide relacionar temas, no una cuenta. El concepto de fondo es tejer un hilo entre las herramientas vistas (congruencias módulo n, primos, coprimalidad, φ de Euler, teorema de Fermat/Euler) y su uso concreto en seguridad informática (RSA, HTTPS, firmas digitales). La clave para responder bien es NO definir cada término por separado, sino mostrar CÓMO se encadenan para que exista el cifrado.",
  "pasos": [
   "Idea central que ordena todo: la <b>aritmética modular</b> (trabajar con restos y congruencias módulo n) permite operar con números enormes sin desbordarse y es la base del cifrado asimétrico.",
   "Segundo eslabón: en <b>RSA</b> se eligen dos primos grandes p y q; su producto n = p·q se publica, pero factorizarlo (recuperar p y q) es computacionalmente inviable con números grandes.",
   "Tercer eslabón: con φ(n) = (p−1)(q−1) se calculan las claves. El exponente público e se elige coprimo con φ(n) y el privado d cumple e·d ≡ 1 (mód φ(n)).",
   "Cuarto eslabón: el <b>Pequeño Teorema de Fermat / Euler</b> garantiza que ciertas potencias módulo n \"vuelven\" al mensaje original, lo que hace que cifrar y descifrar sean operaciones inversas exactas.",
   "Cierre práctico: cada vez que se usa HTTPS, una firma digital o autenticación, por debajo hay aritmética modular, primos y coprimalidad protegiendo la información.",
   "Modelo de respuesta (≈8 renglones): «La aritmética modular es el fundamento de la criptografía que usamos en Sistemas. Al trabajar con congruencias módulo n podemos operar con números muy grandes quedándonos siempre con el resto. RSA aprovecha que multiplicar dos primos grandes p·q=n es fácil, pero factorizar n es prácticamente imposible; con la función φ(n)=(p−1)(q−1) se generan las claves pública y privada. El teorema de Euler asegura que elevar el mensaje a las claves módulo n devuelve el original, permitiendo cifrar y descifrar. Por eso, cada vez que usamos HTTPS, firmas digitales o autenticación, estamos aplicando aritmética modular, primos y coprimalidad para proteger la información.»"
  ],
  "resultado": "Respuesta conceptual lista para escribir en ≤10 renglones (ver el modelo del último paso).",
  "verificar": "Cae en el Ej. 5 de casi todos los finales. Practicá escribirla 2 veces con tus palabras. Error típico: llenar el renglonaje con definiciones sueltas (\"módulo es…\", \"primo es…\"); el enunciado pide RELACIÓN, no definiciones."
 },
 {
  "id": "pl-metodo",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Método",
  "titulo": "Cómo resolver un problema de programación lineal",
  "enunciado": "Pasos generales para resolver cualquier ejercicio de programación lineal (Ej. 3 del final).",
  "idea": "Se reconoce un problema de programación lineal cuando hay que maximizar o minimizar una cantidad (beneficio, costo, número de unidades) sujeta a límites expresados como desigualdades lineales. El concepto de fondo es el <b>teorema fundamental de la PL</b>: si la región factible (la que cumple todas las restricciones) no es vacía y está acotada, el óptimo de una función lineal se alcanza siempre en un vértice (una esquina) de esa región. Por eso alcanza con evaluar los vértices, sin probar infinitos puntos interiores.",
  "pasos": [
   "<b>1) Variables:</b> definí con claridad qué representan x e y (por ejemplo, cantidad de cada producto) e indicá que son ≥ 0 y, si corresponde, enteras.",
   "<b>2) Función objetivo:</b> escribí Z = p·x + q·y, donde p y q son el aporte de cada variable, y aclará si se maximiza o minimiza.",
   "<b>3) Restricciones:</b> traducí cada condición del enunciado a una inecuación lineal y no olvides las de no negatividad x ≥ 0, y ≥ 0.",
   "<b>4) Graficar:</b> dibujá cada recta límite (con ≥/≤ va recta llena porque el borde entra; con >/< va punteada) y sombreá el semiplano correcto probando un punto testigo, típicamente el (0,0). Si al despejar dividís por un número negativo, se invierte el sentido de la desigualdad.",
   "<b>5) Vértices:</b> hallá las esquinas de la región factible resolviendo los sistemas de a pares (intersección de dos rectas) y las intersecciones con los ejes; descartá los puntos que no cumplan TODAS las restricciones.",
   "<b>6) Evaluar:</b> calculá Z en cada vértice, armá una tabla y elegí el mayor (si es máximo) o el menor (si es mínimo).",
   "<b>7) Ajustar si hace falta:</b> si la solución debe ser entera y el vértice da decimales, buscá los enteros factibles cercanos, evaluá Z en ellos y justificá cuál conviene."
  ],
  "resultado": "El óptimo se lee en el vértice donde Z es mayor (máx) o menor (mín).",
  "verificar": "Chequeá vértices y óptimo con el Graficador de programación lineal de la app. Errores típicos: olvidar x≥0, y≥0; no invertir la desigualdad al dividir por negativo; evaluar Z en un punto que en realidad no está en la región."
 },
 {
  "id": "pl-1",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Práctica 1",
  "titulo": "Profes de teatro y arte (maximizar beneficio)",
  "enunciado": "Actividad solidaria con docentes de teatro y arte. La cantidad de profes de teatro debe ser ≤ la mitad de los de arte. Hay 15 profes de teatro y 10 de arte disponibles. Se recibe $1500 por cada profe de teatro y $1200 por cada uno de arte por día. ¿Cuántos de cada uno para beneficio máximo?",
  "idea": "Es un problema de PL de maximización: hay un beneficio por unidad y límites de disponibilidad, más una condición que relaciona ambas variables. Se reconoce por \"¿cuántos de cada uno para beneficio máximo?\". El concepto de fondo es armar la función objetivo con los ingresos por profe y trasladar cada límite a una inecuación, recordando que el óptimo cae en un vértice de la región factible.",
  "pasos": [
   "<b>Variables:</b> x = cantidad de profes de teatro, y = cantidad de profes de arte (ambas ≥ 0 y enteras).",
   "<b>Función objetivo:</b> cada profe de teatro deja $1500 y cada uno de arte $1200, así que Z = 1500x + 1200y y se MAXIMIZA.",
   "<b>Restricciones:</b> \"teatro ≤ mitad de arte\" ⇒ x ≤ y/2, o equivalentemente <code>2x ≤ y</code>; disponibilidad de teatro x ≤ 15; disponibilidad de arte y ≤ 10; más x ≥ 0, y ≥ 0.",
   "<b>Analizo la región:</b> como y ≤ 10 y además x ≤ y/2, resulta x ≤ 10/2 = 5. Es decir, aunque haya 15 profes de teatro, la condición y la falta de profes de arte lo limitan a 5.",
   "<b>Vértices de la región factible:</b> (0,0); (0,10); y la esquina donde se juntan y = 10 con 2x = y, que da x = 5, y = 10, es decir (5,10).",
   "<b>Evalúo Z en cada vértice:</b> (0,0) → 0; (0,10) → 1500·0 + 1200·10 = 12000; (5,10) → 1500·5 + 1200·10 = 7500 + 12000 = <b>19500</b>.",
   "El mayor valor es Z = 19500, alcanzado en (5, 10)."
  ],
  "resultado": "<b>5 profes de teatro y 10 de arte</b>, con beneficio máximo de <b>$19 500</b> por día.",
  "verificar": "(5,10) cumple 5 ≤ 10/2 = 5 ✓ (justo en el borde), 5 ≤ 15 ✓, 10 ≤ 10 ✓. Mismo modelo que el final de dic 2025 (Mate/EPyA). Error típico: usar x ≤ 15 como límite real de teatro e ignorar que 2x ≤ y ya lo baja a 5."
 },
 {
  "id": "pl-combos",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Final 4-12-2024",
  "titulo": "Combos A y B con plaquetas y sensores",
  "enunciado": "Un emprendedor tiene 200 plaquetas y 300 sensores. El combo A usa 2 plaquetas y 2 sensores (gana $30); el combo B usa 1 plaqueta y 3 sensores (gana $15). ¿Cuántos combos de cada tipo para beneficio máximo?",
  "idea": "PL de maximización con dos recursos limitados (plaquetas y sensores) que se reparten entre dos productos. Se reconoce por el stock fijo de insumos y el beneficio por combo. El concepto de fondo es que cada recurso genera una restricción del tipo \"consumo total ≤ stock\", y que el óptimo está en un vértice; aquí además aparece el caso interesante de <b>óptimo múltiple</b>, donde toda una arista da el mismo Z.",
  "pasos": [
   "<b>Variables:</b> x = cantidad de combos A, y = cantidad de combos B (≥ 0, enteras).",
   "<b>Función objetivo:</b> Z = 30x + 15y, a MAXIMIZAR.",
   "<b>Restricciones:</b> plaquetas — A usa 2 y B usa 1: <code>2x + y ≤ 200</code>; sensores — A usa 2 y B usa 3: <code>2x + 3y ≤ 300</code>; más x ≥ 0, y ≥ 0.",
   "<b>Vértices sobre los ejes:</b> con y=0, la plaqueta manda (2x ≤ 200 ⇒ x ≤ 100) → (100,0); con x=0, el sensor manda (3y ≤ 300 ⇒ y ≤ 100) → (0,100); y el origen (0,0).",
   "<b>Intersección de las dos rectas:</b> resto 2x+y=200 de 2x+3y=300 ⇒ 2y = 100 ⇒ y = 50; reemplazo en 2x+50=200 ⇒ 2x=150 ⇒ x = 75 → vértice (75,50).",
   "<b>Evalúo Z:</b> (0,0)→0; (100,0)→30·100 = 3000; (0,100)→15·100 = 1500; (75,50)→30·75 + 15·50 = 2250 + 750 = 3000.",
   "Hay empate en Z = 3000 entre (100,0) y (75,50). Como ambos son vértices vecinos con el mismo valor, TODA la arista que los une también da 3000: es un óptimo múltiple.",
   "El máximo es <b>Z = 3000</b>, alcanzado en (100, 0), en (75, 50) y en cualquier punto entero de la arista entre ellos."
  ],
  "resultado": "Beneficio máximo <b>$3000</b>: por ejemplo 100 combos A y 0 B, o 75 A y 50 B.",
  "verificar": "En el Graficador ambos vértices dan Z=3000 (óptimo múltiple sobre la arista). Chequeo (75,50): plaquetas 2·75+50 = 200 ✓, sensores 2·75+3·50 = 300 ✓. Error típico: elegir solo un vértice y no notar que el objetivo es paralelo a una restricción, lo que produce múltiples soluciones."
 },
 {
  "id": "pl-2",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Práctica 2",
  "titulo": "Dibujar el recinto y verificar puntos",
  "enunciado": "a) Dibujar el recinto que cumple: y ≤ 4 ; y − x ≥ −1 ; y − 2x ≤ 0. b) Determinar si los puntos (0,0), (−2,2), (1,0), (0,2), (1,1), (2,−2) y (1,3) son parte de las soluciones.",
  "idea": "No hay que optimizar nada: solo dibujar la región factible y testear puntos. Se reconoce por \"dibujar el recinto\" y \"determinar si los puntos son solución\". El concepto de fondo es que cada inecuación define un semiplano y el recinto es la intersección de los tres; un punto pertenece a la solución solo si cumple LAS TRES condiciones simultáneamente (basta que falle una para descartarlo).",
  "pasos": [
   "Reescribo cada condición como recta y semiplano: y ≤ 4 (por debajo de la horizontal y=4); y − x ≥ −1 ⇒ y ≥ x − 1 (por encima de y = x−1); y − 2x ≤ 0 ⇒ y ≤ 2x (por debajo de y = 2x). Las tres rectas van llenas porque las desigualdades son ≤/≥.",
   "El recinto es la región donde se solapan los tres semiplanos a la vez.",
   "Testeo <b>(0,0):</b> 0≤4 ✔ ; 0 ≥ 0−1 = −1 ✔ ; 0 ≤ 2·0 = 0 ✔ → cumple las tres → SÍ es solución.",
   "Testeo <b>(1,0):</b> 0≤4 ✔ ; 0 ≥ 1−1 = 0 ✔ ; 0 ≤ 2·1 = 2 ✔ → SÍ.",
   "Testeo <b>(1,1):</b> 1≤4 ✔ ; 1 ≥ 1−1 = 0 ✔ ; 1 ≤ 2·1 = 2 ✔ → SÍ.",
   "Testeo <b>(−2,2):</b> y−x = 2−(−2) = 4 ≥ −1 ✔ ; pero y−2x = 2−2·(−2) = 2+4 = 6 ≤ 0 es FALSO ✗ → NO.",
   "Testeo <b>(0,2):</b> y−2x = 2−0 = 2 ≤ 0 es FALSO ✗ → NO. Testeo <b>(2,−2):</b> y−x = −2−2 = −4 ≥ −1 es FALSO ✗ → NO. Testeo <b>(1,3):</b> y−2x = 3−2 = 1 ≤ 0 es FALSO ✗ → NO."
  ],
  "resultado": "Son solución: <b>(0,0), (1,0) y (1,1)</b>. Los demás no.",
  "verificar": "Cada punto se probó en las tres inecuaciones; basta que falle una para descartarlo. Error típico: dar por válido un punto que cumple dos de tres condiciones; se necesitan las TRES."
 },
 {
  "id": "pl-3",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Práctica 3",
  "titulo": "Analizar condiciones (región vacía) y verificar puntos",
  "enunciado": "a) ¿Qué se puede comentar de las condiciones: y ≥ 6 ; y + x ≤ −1 ; y − x ≤ −4? b) Determinar si (0,0), (−2,2), (1,3), (1,−2) y (2,7) son parte de las soluciones.",
  "idea": "Se reconoce por el pedido de \"comentar las condiciones\": antes de graficar conviene analizar si son compatibles, porque pueden no compartir ningún punto (recinto vacío). El concepto de fondo es combinar algebraicamente las desigualdades para deducir cotas sobre una variable; si esas cotas se contradicen (por ejemplo x muy negativo y a la vez x muy positivo), el sistema no tiene solución y cualquier punto queda descartado de antemano.",
  "pasos": [
   "Parto de y ≥ 6. Combinado con y + x ≤ −1 despejo x: x ≤ −1 − y. Como y ≥ 6, entonces −y ≤ −6, así que x ≤ −1 − 6 = −7. Conclusión parcial: x ≤ −7 (x muy negativo).",
   "Ahora uso y − x ≤ −4, que da x ≥ y + 4. Como y ≥ 6, entonces x ≥ 6 + 4 = 10. Conclusión parcial: x ≥ 10 (x muy positivo).",
   "Junto ambas conclusiones: no puede ser al mismo tiempo x ≤ −7 y x ≥ 10. Son incompatibles.",
   "Por lo tanto <b>el sistema no tiene solución: el recinto es vacío</b>. No hay ningún punto del plano que cumpla las tres condiciones.",
   "En consecuencia, ninguno de los puntos dados puede ser solución. Verifico los que \"parecen\" cercanos: (2,7) cumple y ≥ 6 (7 ≥ 6 ✔) pero y+x = 7+2 = 9 ≤ −1 es FALSO ✗ → NO.",
   "El resto ni siquiera pasa la primera condición: (0,0), (−2,2), (1,3) y (1,−2) tienen y < 6, así que fallan y ≥ 6 → NO."
  ],
  "resultado": "El recinto es <b>vacío</b> (condiciones incompatibles): <b>ningún punto</b> es solución.",
  "verificar": "(2,7): y≥6 ✔ pero y+x=9 ≤ −1 ✗ → no. Igual para el resto. Error típico: lanzarse a graficar sin notar la incompatibilidad y \"forzar\" una región que no existe."
 },
 {
  "id": "pl-4",
  "guia": "Programación lineal",
  "unidad": "U5",
  "num": "Práctica 4",
  "titulo": "Nutricionista: minimizar el gasto",
  "enunciado": "Se necesitan al menos 80 mg de sustancia A y 150 mg de B. El preparado X aporta 6 mg de A y 50 mg de B ($120); el preparado Y aporta 10 mg de A y 10 mg de B ($150). ¿Qué cantidades de cada uno para gastar lo mínimo?",
  "idea": "PL de MINIMIZACIÓN, que se reconoce por \"al menos\" (aportes mínimos) y \"gastar lo mínimo\". A diferencia de los de maximizar, las restricciones de requerimiento van con ≥ y la región factible es abierta hacia arriba; el óptimo de costo se alcanza igual en un vértice, típicamente en la intersección de dos rectas de requerimiento o sobre un eje.",
  "pasos": [
   "<b>Variables:</b> x = cantidad de preparado X, y = cantidad de preparado Y (≥ 0).",
   "<b>Función objetivo:</b> Z = 120x + 150y, a MINIMIZAR (es el gasto total).",
   "<b>Restricciones:</b> sustancia A — X aporta 6 e Y aporta 10, se pide al menos 80: <code>6x + 10y ≥ 80</code>; sustancia B — X aporta 50 e Y aporta 10, se pide al menos 150: <code>50x + 10y ≥ 150</code>; más x ≥ 0, y ≥ 0.",
   "<b>Vértices candidatos sobre los ejes:</b> con y=0, la más exigente en A da 6x ≥ 80 ⇒ x = 40/3 ≈ 13,33 → (40/3, 0); con x=0, la más exigente en A da 10y ≥ 80 ⇒ y = 8, pero hay que chequear B: 50·0+10·8 = 80 < 150 ✗, no alcanza; con x=0 y B: 10y ≥ 150 ⇒ y = 15 → (0,15) (que sí cumple A: 10·15=150 ≥ 80 ✔).",
   "<b>Intersección de las dos rectas de requerimiento:</b> resto 6x+10y=80 de 50x+10y=150 ⇒ 44x = 70 ⇒ x = 70/44 = 35/22 ≈ 1,59; reemplazo en 6·(35/22)+10y = 80 ⇒ 210/22 + 10y = 80 ⇒ 10y = 80 − 9,545 = 70,45 ⇒ y = 155/22 ≈ 7,05 → vértice (35/22, 155/22).",
   "<b>Evalúo Z:</b> (40/3, 0) → 120·40/3 = 1600; (0,15) → 150·15 = 2250; (35/22, 155/22) → 120·35/22 + 150·155/22 = 4200/22 + 23250/22 = 27450/22 = 13725/11 ≈ 1247,7.",
   "El menor gasto es Z ≈ $1247,7 en (35/22, 155/22) ≈ (1,59 ; 7,05)."
  ],
  "resultado": "Mínimo gasto ≈ <b>$1247,7</b> comprando ≈ 1,59 de X y 7,05 de Y (exacto: 35/22 y 155/22).",
  "verificar": "Chequealo en el Graficador de PL. En (35/22,155/22): A = 6·35/22+10·155/22 = (210+1550)/22 = 80 ✔ ; B = 50·35/22+10·155/22 = (1750+1550)/22 = 150 ✔ (ambos al borde). Error típico: tomar (0,15) o (40/3,0) por ser \"enteros\" y perder el óptimo real, que está en la intersección. Si los preparados vienen en unidades enteras, se redondea hacia arriba y se justifica."
 },
 {
  "id": "f2024-e1",
  "guia": "Final modelo 2024",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Combinatoria: números de 3 cifras divisibles por 5",
  "enunciado": "a) Con las cifras 2, 3, 4, 5 y 0, ¿cuántos números de 3 cifras divisibles por 5 se forman sin repetir cifras? b) Completar: \"En una fiesta se encuentran 23 amigos, es correcto afirmar que…\".",
  "idea": "El ítem a) es conteo con condiciones cruzadas: se reconoce porque piden \"cuántos números\" con una regla de divisibilidad y sin repetir. El truco es separar en casos según la última cifra (un número es divisible por 5 si termina en 0 o en 5) y cuidar que la primera cifra no sea 0. El ítem b) es el clásico Principio del Palomar (casillero): con más objetos que cajas, dos comparten caja; aquí 23 personas y 12 meses.",
  "pasos": [
   "a) Para ser divisible por 5, la cifra de las unidades debe ser 0 o 5. Separo en dos casos disjuntos y al final sumo.",
   "CASO termina en 0: fijo la unidad en 0 (1 forma). Para las centenas y decenas elijo entre las 4 cifras restantes {2,3,4,5}; como el 0 ya está usado, no hay riesgo de cero adelante: 4 opciones para las centenas y 3 para las decenas → 4·3 = 12 números.",
   "CASO termina en 5: fijo la unidad en 5. Ahora las centenas NO pueden ser 0, así que elijo entre {2,3,4} (3 opciones); para las decenas quedan 3 cifras disponibles (las 2 no usadas más el 0) → 3·3 = 9 números.",
   "Sumo los casos: total = 12 + 9 = 21 números de 3 cifras divisibles por 5 sin repetir.",
   "b) Aplico el Principio del Palomar: las \"cajas\" son los 12 meses del año y las \"palomas\" son las 23 personas.",
   "Como 23 &gt; 12, es imposible repartir 23 personas en 12 meses sin que al menos un mes reciba 2 o más. Por lo tanto, al menos dos amigos cumplen años el mismo mes.",
   "Respuesta tipo para completar: \"…es correcto afirmar que al menos dos cumplen años en el mismo mes\"."
  ],
  "resultado": "a) 21 números divisibles por 5. b) Por el Principio del Palomar, al menos dos de los 23 amigos cumplen años el mismo mes.",
  "verificar": "Verificado por enumeración exhaustiva de permutaciones: termina en 0 → 12, termina en 5 → 9, total 21. En b) 23 &gt; 12 meses garantiza la coincidencia. Error típico en a): olvidar que en el caso \"termina en 5\" el 0 no puede ir en las centenas."
 },
 {
  "id": "f2024-e2",
  "guia": "Final modelo 2024",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "Matriz adjunta e inversa por determinantes",
  "enunciado": "Dada A = (1 2 3 ; 3 2 1 ; 1 0 1): A) Hallar la matriz adjunta de A. B) Calcular A⁻¹ usando determinantes.",
  "idea": "Se reconoce por \"adjunta\" e \"inversa usando determinantes\": es el método de cofactores. El concepto de fondo es que A⁻¹ = adj(A)/det(A), válido solo si det(A) ≠ 0. La receta es: calcular el determinante; formar la matriz de cofactores Cᵢⱼ = (−1)^(i+j)·Mᵢⱼ (con Mᵢⱼ el menor: determinante que queda al tapar la fila i y columna j); trasponer para obtener la adjunta; y dividir por el determinante.",
  "pasos": [
   "Calculo det(A) desarrollando por la primera fila: det(A) = 1·(2·1 − 1·0) − 2·(3·1 − 1·1) + 3·(3·0 − 2·1) = 1·2 − 2·2 + 3·(−2) = 2 − 4 − 6 = −8. Como −8 ≠ 0, la inversa existe.",
   "Calculo los 9 cofactores (menor con su signo (−1)^(i+j)): C11=+(2·1−1·0)=2 ; C12=−(3·1−1·1)=−2 ; C13=+(3·0−2·1)=−2.",
   "Segunda fila de cofactores: C21=−(2·1−3·0)=−2 ; C22=+(1·1−3·1)=−2 ; C23=−(1·0−2·1)=+2.",
   "Tercera fila de cofactores: C31=+(2·1−3·2)=−4 ; C32=−(1·1−3·3)=+8 ; C33=+(1·2−2·3)=−4.",
   "Armo la matriz de cofactores C = (2 −2 −2 ; −2 −2 2 ; −4 8 −4).",
   "La adjunta es la TRASPUESTA de C (filas por columnas): adj(A) = (2 −2 −4 ; −2 −2 8 ; −2 2 −4).",
   "Finalmente A⁻¹ = adj(A)/det(A) = (1/−8)·(2 −2 −4 ; −2 −2 8 ; −2 2 −4) = (−1/4 1/4 1/2 ; 1/4 1/4 −1 ; 1/4 −1/4 1/2)."
  ],
  "resultado": "adj(A) = (2 −2 −4 ; −2 −2 8 ; −2 2 −4). A⁻¹ = (−1/4 1/4 1/2 ; 1/4 1/4 −1 ; 1/4 −1/4 1/2).",
  "verificar": "Verificado numéricamente: A·A⁻¹ = I (matriz identidad). det = −8. Errores típicos: equivocar el patrón de signos (+ − + / − + − / + − +), o no trasponer la matriz de cofactores antes de dividir."
 },
 {
  "id": "f2024-e3",
  "guia": "Final modelo 2024",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "PIM: 7ⁿ + 1 divisible por 8 (n impar)",
  "enunciado": "Demostrar por el PIM si es válido que P(n) = 7ⁿ + 1 es divisible por 8. Sug.: considerar n = 2i−1.",
  "idea": "Se reconoce por \"demostrar por el PIM\" (Principio de Inducción Matemática) una propiedad de divisibilidad. Ojo con la letra chica: la propiedad NO vale para todo n (por ejemplo n=2 da 7²+1=50, que no es múltiplo de 8), sino solo para n impar. La sugerencia n = 2i−1 justamente recorre los impares 1,3,5,… con i=1,2,3,…, así que la inducción se hace sobre i. La técnica de fondo es factorizar el término de n+1 para hacer aparecer el de n (hipótesis) por un lado y un múltiplo de 8 por otro.",
  "pasos": [
   "Reformulo con la sugerencia: para i∈ℕ, defino P(i): 8 | 7^(2i−1) + 1. Al variar i por 1,2,3,… esto cubre exactamente los n impares 1,3,5,…",
   "CASO BASE (i=1, o sea n=1): 7¹ + 1 = 8, y claramente 8 | 8. Verdadero.",
   "HIPÓTESIS INDUCTIVA: supongo que para cierto i vale 8 | 7^(2i−1) + 1, es decir, existe k∈ℤ con 7^(2i−1) + 1 = 8k.",
   "TESIS (lo que quiero probar): 8 | 7^(2(i+1)−1) + 1, que es 7^(2i+1) + 1.",
   "PASO INDUCTIVO: observo que 7^(2i+1) = 7² · 7^(2i−1) = 49 · 7^(2i−1). Entonces 7^(2i+1) + 1 = 49·7^(2i−1) + 1.",
   "Sumo y resto para hacer aparecer la hipótesis: 49·7^(2i−1) + 1 = 49·(7^(2i−1) + 1) − 49 + 1 = 49·(7^(2i−1)+1) − 48. Reemplazo (7^(2i−1)+1) = 8k: = 49·(8k) − 48 = 8·(49k) − 8·6 = 8·(49k − 6).",
   "Como 49k − 6 es entero, 7^(2i+1) + 1 = 8·(49k−6) es múltiplo de 8. ∎ Por el PIM, 7ⁿ + 1 es divisible por 8 para todo n impar."
  ],
  "resultado": "La afirmación es válida solo para n impar (n = 2i−1); demostrado por inducción. Para n par es falsa (ej. n=2 da 50).",
  "verificar": "Verificado: 49k−48 = 8(49k−6). Chequeo numérico n=1,3,5,7 → 8, 344, 16808, 823544, todos múltiplos de 8; n=2 da 50 (no). Error típico: afirmar que vale para TODO n sin notar la restricción a impares que impone la sugerencia n=2i−1."
 },
 {
  "id": "f2024-e4",
  "guia": "Final modelo 2024",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Programación lineal: Zapatillín patrocina equipos",
  "enunciado": "Cada equipo de fútbol usa 120 pares; cada equipo de básquet, 32 pares. Entrenador de fútbol cuesta $300.000, de básquet $1.000.000 (presupuesto $30.000.000). Hay 4000 cc de suplemento: cada par de básquet usa 3 cc y cada de fútbol 1 cc. Maximizar el número de equipos patrocinados.",
  "idea": "PL de maximización cuya función objetivo es simplemente contar equipos (coeficientes 1 y 1). Se reconoce por \"maximizar el número de equipos\". El punto delicado es armar bien los consumos: el suplemento se gasta por PAR, así que hay que multiplicar pares por equipo por cc por par. Como la solución debe ser entera y el vértice cae en decimales, hay que buscar los enteros factibles cercanos.",
  "pasos": [
   "Variables: f = cantidad de equipos de fútbol ≥ 0, b = cantidad de equipos de básquet ≥ 0 (enteras).",
   "Función objetivo: MAX Z = f + b (queremos la mayor cantidad total de equipos).",
   "Restricción de presupuesto: 300000·f + 1000000·b ≤ 30000000. Divido todo por 100000 ⇒ 3f + 10b ≤ 300.",
   "Restricción de suplemento: fútbol usa 120 pares · 1 cc = 120 cc por equipo; básquet usa 32 pares · 3 cc = 96 cc por equipo. Entonces 120·f + 96·b ≤ 4000. Divido por 8 ⇒ 15f + 12b ≤ 500.",
   "Vértices sobre los ejes: con b=0, manda el suplemento (15f ≤ 500 ⇒ f ≤ 33,3) → (33,0); con f=0, manda el presupuesto (10b ≤ 300 ⇒ b ≤ 30) → (0,30); y (0,0).",
   "Intersección de 3f+10b=300 con 15f+12b=500: de la primera f = (300−10b)/3; multiplico la primera por 5 (15f+50b=1500) y resto la segunda ⇒ 38b = 1000 ⇒ b ≈ 26,3, f ≈ 12,3 → punto ≈ (12,3 ; 26,3), no entero.",
   "Como f y b deben ser enteros, evalúo Z = f+b en los enteros factibles cercanos a la intersección: (12,26)→38 (chequeo: 3·12+10·26 = 296 ≤ 300 ✔, 15·12+12·26 = 492 ≤ 500 ✔); (13,25)→38; (14,24)→38. En los ejes: (33,0)→33; (0,30)→30.",
   "El máximo entero es Z = 38 equipos, alcanzado en (12,26), (13,25) y (14,24)."
  ],
  "resultado": "Máximo 38 equipos. Se logra con (fútbol, básquet) = (12,26), (13,25) o (14,24), todas con Z=38. Ej.: 12 de fútbol y 26 de básquet.",
  "verificar": "Verificado por búsqueda entera exhaustiva: el óptimo entero es 38 (tres soluciones). Chequeo (12,26): presupuesto = $29.600.000 ≤ 30M; suplemento = 3936 cc ≤ 4000. OK. Error típico: computar el suplemento por equipo en vez de por par (olvidar multiplicar por 120 y por 32), o quedarse con el vértice decimal sin ajustar a enteros."
 },
 {
  "id": "f2024-e5",
  "guia": "Final modelo 2024",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Función φ de Euler y encriptación (RSA)",
  "enunciado": "B) Siendo p=23, q=13 y t = p·q, hallar φ(t). Justificar. ¿Qué significa? Relación con la encriptación. (Alternativa A: relación entre la matemática y su aplicación en Sistemas.)",
  "idea": "Se reconoce por φ, por t = p·q con p y q primos, y por el pedido de justificar y relacionar con RSA. El concepto de fondo es doble: φ es multiplicativa entre coprimos y φ de un primo es (primo−1), de donde φ(p·q) = (p−1)(q−1); y esa cantidad es la que RSA usa como módulo para vincular las claves. La justificación no es solo la cuenta: hay que decir POR QUÉ vale la fórmula (primos ⇒ multiplicatividad).",
  "pasos": [
   "Calculo el módulo: t = 23·13 = 299.",
   "Justifico la fórmula: como 23 y 13 son primos distintos, son coprimos entre sí, y φ es multiplicativa para coprimos, así que φ(t) = φ(23)·φ(13). Además φ de un primo p es p−1 (todos los menores que p son coprimos con él).",
   "Aplico: φ(t) = (23−1)·(13−1) = 22·12.",
   "Multiplico: 22·12 = 264. Entonces φ(299) = 264.",
   "Significado: φ(t) cuenta cuántos enteros entre 1 y t comparten factor 1 con t, es decir, cuántos son coprimos con t. Aquí hay 264 números en [1,299] coprimos con 299.",
   "Relación con RSA: se eligen dos primos p, q, se publica n = p·q y se calcula φ(n) = (p−1)(q−1). El exponente público e se toma con 1 &lt; e &lt; φ(n) y coprimo con φ(n); el privado d cumple e·d ≡ 1 (mód φ(n)).",
   "La seguridad se basa en que, sin conocer p y q, factorizar n para recuperar φ(n) (y así deducir d) es computacionalmente inviable con números grandes."
  ],
  "resultado": "φ(299) = (23−1)(13−1) = 22·12 = 264. Cuenta los coprimos con t y es la base del cálculo de las claves en RSA.",
  "verificar": "Verificado por conteo directo: exactamente 264 enteros en [1,299] tienen mcd(k,299)=1. Error típico: escribir φ(t)=t−1 (eso vale solo si t es primo) en vez de (p−1)(q−1)."
 },
 {
  "id": "fdic25-e1",
  "guia": "Final primer llamado — diciembre 2025",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Combinatoria con dígitos 1,2,3,5,8,9",
  "enunciado": "Con los dígitos 1,2,3,5,8,9 sin repetir: A) ¿Cuántos números de 4 cifras? ¿Y si se pudieran repetir? B) ¿Y de 3 cifras? ¿Cuántos de esos son múltiplos de 10?",
  "idea": "Conteo puro: se reconoce por \"¿cuántos números?\" con y sin repetición. El concepto de fondo distingue dos herramientas: SIN repetir se usan variaciones (arreglos) V(n,k) = n·(n−1)·…, porque cada elección descuenta una opción; CON repetición se usa la potencia n^k, porque cada posición vuelve a tener las n opciones. La pregunta trampa de los múltiplos de 10 se resuelve notando que exigen terminar en 0, dígito que no está en el conjunto.",
  "pasos": [
   "Observo el conjunto: hay 6 dígitos {1,2,3,5,8,9} y ninguno es 0, así que la primera cifra nunca puede quedar prohibida (no hay problema de \"cero adelante\").",
   "A) 4 cifras SIN repetir: elijo ordenadamente 4 de 6, descontando en cada paso: V(6,4) = 6·5·4·3 = 360.",
   "A) 4 cifras CON repetición: cada una de las 4 posiciones tiene las 6 opciones disponibles: 6⁴ = 6·6·6·6 = 1296.",
   "B) 3 cifras SIN repetir: elijo ordenadamente 3 de 6: V(6,3) = 6·5·4 = 120.",
   "Múltiplos de 10: un número es múltiplo de 10 si y solo si su última cifra es 0.",
   "Como el conjunto {1,2,3,5,8,9} NO contiene el 0, ningún número formado puede terminar en 0. Por lo tanto la cantidad de múltiplos de 10 es 0."
  ],
  "resultado": "A) 360 sin repetir; 1296 con repetición. B) 120 números de 3 cifras; 0 son múltiplos de 10 (no hay dígito 0).",
  "verificar": "Verificado: perm(6,4)=360, 6⁴=1296, perm(6,3)=120. Al no existir el 0, los múltiplos de 10 son 0. Error típico: confundir múltiplo de 10 (termina en 0) con múltiplo de 5 (termina en 0 o 5) y contar los terminados en 5."
 },
 {
  "id": "fdic25-e2",
  "guia": "Final primer llamado — diciembre 2025",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: 6 + 24 + 42 + … + (18n − 12) = 3n(3n − 1)",
  "enunciado": "Demostrar por el PIM que 6 + 24 + 42 + … + (18n − 12) = 3n(3n − 1) para todo entero positivo n.",
  "idea": "Se reconoce por \"demostrar por el PIM\" una igualdad de suma con término general lineal. El concepto de fondo del método: verificar el caso base, suponer cierta la fórmula para n (hipótesis inductiva) y probarla para n+1 sumando el siguiente término. Antes conviene identificar el término general aₙ observando la diferencia constante entre términos (es una progresión aritmética de razón 18).",
  "pasos": [
   "Identifico el término general: a₁ = 6, a₂ = 24, a₃ = 42; la diferencia es 18 constante, así que aₙ = 6 + 18(n−1) = 18n − 12 (coincide con el enunciado).",
   "CASO BASE (n=1): lado izquierdo = a₁ = 6. Lado derecho = 3·1·(3·1 − 1) = 3·(3−1) = 3·2 = 6. Coinciden, se cumple.",
   "HIPÓTESIS INDUCTIVA: supongo que para cierto n vale Sₙ = 6 + 24 + … + (18n − 12) = 3n(3n − 1).",
   "TESIS: probar que S_(n+1) = 3(n+1)·(3(n+1) − 1) = 3(n+1)(3n+2).",
   "PASO INDUCTIVO: parto de S_(n+1) = Sₙ + a_(n+1). El término siguiente es a_(n+1) = 18(n+1) − 12 = 18n + 6. Uso la hipótesis: S_(n+1) = 3n(3n−1) + (18n + 6) = 9n² − 3n + 18n + 6 = 9n² + 15n + 6.",
   "Desarrollo el objetivo para comparar: 3(n+1)(3n+2) = 3·(3n² + 2n + 3n + 2) = 3·(3n² + 5n + 2) = 9n² + 15n + 6.",
   "Ambas expresiones dan 9n² + 15n + 6, así que S_(n+1) coincide con la fórmula. ∎ Por el PIM, la igualdad vale para todo n entero positivo."
  ],
  "resultado": "La fórmula es válida ∀n∈ℤ⁺: Sₙ = 3n(3n − 1). Demostrado por inducción.",
  "verificar": "Verificado numéricamente n=1..4: sumas 6, 30, 72, 132 = 3n(3n−1). Paso inductivo: 9n²+15n+6 = 3(n+1)(3n+2). OK. Error típico: sumar el término n-ésimo (18n−12) en lugar del (n+1)-ésimo (18n+6) en el paso inductivo."
 },
 {
  "id": "fdic25-e3",
  "guia": "Final primer llamado — diciembre 2025",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Programación lineal: actividad solidaria de docentes",
  "enunciado": "Profes de Mate ≤ mitad de los de arte (EPyA). Disponibles: 15 de Mate y 10 de EPyA. El Lab recibe $150 mil/día por cada Mate y $120 mil por cada EPyA. Maximizar el beneficio: ¿cuántos de cada modalidad?",
  "idea": "PL de maximización idéntico en estructura al de teatro/arte: hay ingreso por profe, topes de disponibilidad y la condición \"Mate ≤ mitad de arte\". Se reconoce por \"maximizar el beneficio\". La condición que relaciona ambas variables (x ≤ y/2) es la que suele limitar de verdad, más que la disponibilidad de Mate.",
  "pasos": [
   "Variables: x = cantidad de profes de Mate ≥ 0, y = cantidad de profes de EPyA (arte) ≥ 0 (enteras).",
   "Función objetivo: MAX Z = 150x + 120y (en miles de pesos por día).",
   "Restricciones: \"Mate ≤ mitad de arte\" ⇒ x ≤ y/2, es decir 2x ≤ y; disponibilidad de Mate x ≤ 15; disponibilidad de EPyA y ≤ 10; más x, y ≥ 0.",
   "Analizo el límite real de x: como y ≤ 10 y x ≤ y/2, resulta x ≤ 10/2 = 5. Así que el tope de 15 en Mate no llega a activarse.",
   "Vértices de la región factible: (0,0); (0,10); y la esquina donde 2x = y con y = 10, que da x = 5 → (5,10).",
   "Evalúo Z: (0,0)→0; (0,10)→150·0 + 120·10 = 1200; (5,10)→150·5 + 120·10 = 750 + 1200 = 1950.",
   "El máximo es Z = 1950 (miles) en (x,y) = (5,10)."
  ],
  "resultado": "Máximo beneficio $1.950.000/día con 5 profes de Mate y 10 de EPyA (arte).",
  "verificar": "Verificado por búsqueda entera: óptimo (5,10) con Z=1950 (miles). Cumple 2·5 = 10 ≤ 10, x=5 ≤ 15, y=10 ≤ 10. Error típico: creer que se pueden tomar hasta 15 de Mate; la condición 2x ≤ y con y ≤ 10 lo baja a 5."
 },
 {
  "id": "fdic25-e4",
  "guia": "Final primer llamado — diciembre 2025",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Sistema por Gauss y ecuación matricial",
  "enunciado": "Resolver por Gauss/Gauss-Jordan y expresar como ecuación matricial: { x − 2y − z = 2 ; y + z = 1 ; −2x = y }.",
  "idea": "Se reconoce por \"resolver por Gauss\" y \"expresar como ecuación matricial\": es eliminación gaussiana. El concepto de fondo es escribir la matriz ampliada [A | B], triangularla con operaciones elementales de fila (sumar a una fila un múltiplo de otra) hasta dejar ceros debajo de la diagonal, y luego despejar por sustitución hacia atrás. La forma matricial es A·X = B. Ojo: la tercera ecuación hay que reordenarla como −2x − y = 0.",
  "pasos": [
   "Ordeno el sistema dejando todas las incógnitas de un lado: (1) x − 2y − z = 2 ; (2) 0x + y + z = 1 ; (3) −2x = y ⇒ −2x − y + 0z = 0.",
   "Escribo la forma matricial A·X = B: A = (1 −2 −1 ; 0 1 1 ; −2 −1 0), X = (x ; y ; z), B = (2 ; 1 ; 0).",
   "Armo la matriz ampliada [A|B] = (1 −2 −1 | 2 ; 0 1 1 | 1 ; −2 −1 0 | 0).",
   "Elimino la x de la fila 3 con F3 → F3 + 2·F1: (−2+2·1, −1+2·(−2), 0+2·(−1) | 0+2·2) = (0, −5, −2 | 4). La matriz queda (1 −2 −1 | 2 ; 0 1 1 | 1 ; 0 −5 −2 | 4).",
   "Elimino la y de la fila 3 con F3 → F3 + 5·F2: (0, −5+5·1, −2+5·1 | 4+5·1) = (0, 0, 3 | 9). Esto da la ecuación 3z = 9 ⇒ z = 3.",
   "Sustitución hacia atrás en F2: y + z = 1 ⇒ y + 3 = 1 ⇒ y = −2.",
   "Sustitución en F1: x − 2y − z = 2 ⇒ x − 2·(−2) − 3 = 2 ⇒ x + 4 − 3 = 2 ⇒ x = 1. El sistema es compatible determinado (det A = 3 ≠ 0), solución única."
  ],
  "resultado": "x = 1, y = −2, z = 3. Ecuación matricial: (1 −2 −1 ; 0 1 1 ; −2 −1 0)·(x;y;z) = (2;1;0).",
  "verificar": "Verificado por Cramer/determinantes (det A = 3). Chequeo: 1−2(−2)−3 = 2 ✓; −2+3 = 1 ✓; −2·1 = −2 = y ✓. Error típico: dejar la tercera ecuación como −2x = y sin pasar la y al lado izquierdo, lo que desarma la matriz A."
 },
 {
  "id": "fdic25-e5",
  "guia": "Final primer llamado — diciembre 2025",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Aritmética modular y su aplicación en Sistemas",
  "enunciado": "Describir en ≤10 renglones la relación entre la aritmética modular y su aplicación en Sistemas (sin definiciones).",
  "idea": "Consigna de redacción, no de cálculo: se reconoce porque pide \"describir\" en pocos renglones y \"sin definiciones\". El concepto de fondo es mostrar que la aritmética modular (operar con el resto respecto de un módulo) es cíclica y acotada, y que esa propiedad la vuelve ideal para múltiples mecanismos de Sistemas: criptografía, hashing, dígitos verificadores, PRNG y particionado. La clave es enumerar aplicaciones concretas encadenadas, no definir cada concepto.",
  "pasos": [
   "Arranco con la propiedad que explica todo: la aritmética modular trabaja con los restos respecto de un módulo, y por eso es cíclica y acotada, lo que la hace ideal para representar información en computadoras (aritmética de enteros con desborde, relojes, contadores).",
   "Aplicación estrella — criptografía: en RSA y otros esquemas asimétricos, cifrar y descifrar son exponenciaciones módulo n, y la clave privada se obtiene resolviendo e·d ≡ 1 (mód φ(n)).",
   "Más aplicaciones cotidianas: sustenta las funciones de hash y checksums, los generadores de números pseudoaleatorios, los dígitos verificadores (CUIT, tarjetas, IBAN) y las tablas hash (índice = clave mód tamaño).",
   "En infraestructura: aparece en el particionado por módulo (sharding) de bases de datos y en la asignación balanceada de recursos en redes.",
   "Cierre integrador: permite construir mecanismos seguros, eficientes y verificables aprovechando que las operaciones \"dan la vuelta\" dentro de un rango finito. Todo esto entra holgado en ≤10 renglones eligiendo 3 o 4 ejemplos."
  ],
  "resultado": "Respuesta conceptual: la aritmética modular es la base de la criptografía (RSA), hashing, dígitos verificadores, PRNG y particionado, por su naturaleza cíclica y acotada, muy afín a Sistemas.",
  "verificar": "Pregunta conceptual: no requiere cálculo. Mantener la respuesta breve (≤10 renglones) y sin definiciones formales, como pide el enunciado. Error típico: definir \"congruencia\" o \"módulo\" en vez de dar ejemplos de USO en Sistemas."
 },
 {
  "id": "f1712-e1",
  "guia": "Final 17-12-2025",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Combinatoria: fuerza bruta sobre claves",
  "enunciado": "Una clave tiene 4 letras seguidas de 3 dígitos (25 letras, 10 dígitos posibles, con repetición). Si probar cada código lleva 2 ms: A) ¿cuánto tarda en chequear todas y descifrarla con seguridad? B) ¿Alcanza con un día?",
  "idea": "Combina conteo con repetición y conversión de unidades de tiempo, con sabor a ciberseguridad (ataque de fuerza bruta). Se reconoce por \"probar todas las combinaciones\" y \"cuánto tarda\". El concepto de fondo: por el principio de multiplicación, el total de claves es (opciones por posición) elevado a la cantidad de posiciones, tratando letras y dígitos por separado; luego se multiplica por el tiempo unitario y se compara con la ventana disponible (un día = 86.400 s).",
  "pasos": [
   "Cuento las claves con el principio de multiplicación: 4 letras, cada una con 25 opciones (con repetición) → 25⁴; y 3 dígitos, cada uno con 10 opciones → 10³. Total = 25⁴ · 10³.",
   "Calculo: 25⁴ = 390.625 y 10³ = 1000, así que hay 390.625 · 1000 = 390.625.000 claves posibles.",
   "A) Tiempo total en el peor caso (probar todas): 390.625.000 × 2 ms = 781.250.000 ms.",
   "Convierto a segundos: 781.250.000 ms ÷ 1000 = 781.250 s.",
   "Convierto a horas: 781.250 ÷ 3600 ≈ 217,01 h. Y a días: 217,01 ÷ 24 ≈ 9,04 días.",
   "B) Comparo con un día: 1 día = 86.400 s = 86.400.000 ms. Como 781.250.000 ms &gt; 86.400.000 ms, NO alcanza con un día.",
   "De hecho hacen falta ≈ 9 días (unas 217 horas) para garantizar el descifrado por fuerza bruta en el peor caso."
  ],
  "resultado": "A) 781.250.000 ms ≈ 781.250 s ≈ 217 h ≈ 9,04 días. B) No, un día es insuficiente (se necesitan ~9 días).",
  "verificar": "Verificado: 25⁴·10³ = 390.625.000; ×2 ms = 7,8125·10⁸ ms; /86,4·10⁶ ms por día ≈ 9,04 días &gt; 1. Error típico: sumar 25⁴+10³ en vez de multiplicar, o mezclar ms con s al comparar con el día."
 },
 {
  "id": "f1712-e2",
  "guia": "Final 17-12-2025",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: suma de cubos de impares = n²(2n² − 1)",
  "enunciado": "Demostrar por el PIM que la suma de los cubos de los n primeros impares es n²·(2n² − 1). Generalizar simbólicamente y demostrar.",
  "idea": "Se reconoce por \"demostrar por el PIM\" y por pedir \"generalizar simbólicamente\": primero hay que escribir la suma con notación Σ y término general, y luego inducir. El k-ésimo impar es (2k−1), así que la suma es Σ(2k−1)³. El método es el de siempre: base n=1, hipótesis para n, y paso a n+1 sumando el término (2n+1)³ y verificando que se llega a la fórmula con n+1.",
  "pasos": [
   "Generalización simbólica: el k-ésimo número impar es 2k−1, así que la afirmación es Σ_{k=1}^{n} (2k−1)³ = n²·(2n² − 1).",
   "CASO BASE (n=1): lado izquierdo = (2·1−1)³ = 1³ = 1. Lado derecho = 1²·(2·1² − 1) = 1·(2−1) = 1. Coinciden.",
   "HIPÓTESIS INDUCTIVA: supongo que para cierto n vale Σ_{k=1}^{n} (2k−1)³ = n²(2n² − 1).",
   "TESIS: probar Σ_{k=1}^{n+1} (2k−1)³ = (n+1)²·(2(n+1)² − 1). Desarrollo el paréntesis derecho: 2(n+1)²−1 = 2(n²+2n+1)−1 = 2n²+4n+1, así que el objetivo es (n+1)²(2n²+4n+1).",
   "PASO INDUCTIVO: el término (n+1)-ésimo es (2(n+1)−1)³ = (2n+1)³. Lo expando: (2n+1)³ = 8n³ + 12n² + 6n + 1. Entonces S_(n+1) = Sₙ + (2n+1)³ = n²(2n²−1) + (8n³+12n²+6n+1).",
   "Sumo: n²(2n²−1) = 2n⁴ − n², así que S_(n+1) = 2n⁴ − n² + 8n³ + 12n² + 6n + 1 = 2n⁴ + 8n³ + 11n² + 6n + 1.",
   "Verifico que el objetivo da lo mismo: (n+1)²(2n²+4n+1) = (n²+2n+1)(2n²+4n+1) = 2n⁴ + 4n³ + n² + 4n³ + 8n² + 2n + 2n² + 4n + 1 = 2n⁴ + 8n³ + 11n² + 6n + 1. Coincide. ∎ Por el PIM vale para todo n∈ℕ."
  ],
  "resultado": "Σ_{k=1}^{n}(2k−1)³ = n²(2n² − 1), válido ∀n∈ℕ. Demostrado por inducción.",
  "verificar": "Verificado n=1..4: sumas 1, 28, 153, 496 = n²(2n²−1). Paso inductivo: n²(2n²−1)+(2n+1)³ = (n+1)²(2(n+1)²−1) = 2n⁴+8n³+11n²+6n+1. OK. Error típico: usar (2n−1)³ como término nuevo en el paso, cuando el siguiente impar es (2n+1)³."
 },
 {
  "id": "f1712-e3",
  "guia": "Final 17-12-2025",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Sistema de ecuaciones matriciales y existencia de inversa",
  "enunciado": "A) Resolver X·Y = (1 −3 ; 3 −4). B) ¿Se puede calcular X⁻¹ e Y⁻¹? Dato: (3 0 ; 3 1)·X = (3 −3 ; 5 −4).",
  "idea": "Se reconoce por ecuaciones donde la incógnita es una matriz (X, Y) y hay que despejar usando inversas. El concepto de fondo: en M·X = R se despeja X = M⁻¹·R (multiplicando por la izquierda por M⁻¹); en X·Y = C se despeja Y = X⁻¹·C. Para una matriz 2×2 (a b ; c d), la inversa existe si det = ad−bc ≠ 0 y vale (1/det)·(d −b ; −c a). El orden importa: como no conmutan, hay que multiplicar del lado correcto.",
  "pasos": [
   "Primero hallo X desde M·X = R con M = (3 0 ; 3 1) y R = (3 −3 ; 5 −4). Calculo det(M) = 3·1 − 0·3 = 3 ≠ 0, así que M⁻¹ existe: M⁻¹ = (1/3)·(1 0 ; −3 3) = (1/3 0 ; −1 1).",
   "Despejo X = M⁻¹·R multiplicando por la izquierda: X = (1/3·3 + 0·5 , 1/3·(−3) + 0·(−4) ; −1·3 + 1·5 , −1·(−3) + 1·(−4)) = (1 , −1 ; 2 , −1). Es decir X = (1 −1 ; 2 −1).",
   "Verifico X: M·X = (3 0 ; 3 1)·(1 −1 ; 2 −1) = (3·1+0·2, 3·(−1)+0·(−1) ; 3·1+1·2, 3·(−1)+1·(−1)) = (3 −3 ; 5 −4) ✓.",
   "Ahora hallo Y desde X·Y = C con C = (1 −3 ; 3 −4). Calculo det(X) = 1·(−1) − (−1)·2 = −1 + 2 = 1 ≠ 0, así que X⁻¹ = (1/1)·(−1 1 ; −2 1) = (−1 1 ; −2 1).",
   "Despejo Y = X⁻¹·C: Y = (−1·1 + 1·3 , −1·(−3) + 1·(−4) ; −2·1 + 1·3 , −2·(−3) + 1·(−4)) = (2 , −1 ; 1 , 2). Es decir Y = (2 −1 ; 1 2).",
   "B) X⁻¹ existe porque det(X) = 1 ≠ 0 (ya la calculé). Para Y: det(Y) = 2·2 − (−1)·1 = 4 + 1 = 5 ≠ 0, así que Y⁻¹ existe y vale Y⁻¹ = (1/5)·(2 1 ; −1 2)."
  ],
  "resultado": "X = (1 −1 ; 2 −1), Y = (2 −1 ; 1 2). Ambas admiten inversa: det X = 1 y det Y = 5 (≠ 0). X⁻¹ = (−1 1 ; −2 1), Y⁻¹ = (1/5)(2 1 ; −1 2).",
  "verificar": "Verificado: M·X = (3 −3 ; 5 −4) ✓ y X·Y = (1 −3 ; 3 −4) ✓. Determinantes det X=1, det Y=5, ambos no nulos. Error típico: despejar por el lado equivocado (poner R·M⁻¹ o C·X⁻¹); como no conmutan, en M·X=R va X=M⁻¹·R por la izquierda."
 },
 {
  "id": "f1712-e4",
  "guia": "Final 17-12-2025",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Principio del Palomar (suma 31) y ciberseguridad",
  "enunciado": "A) De los números 11 al 20 selecciono 6 y aseguro que hay al menos un par que suma 31. Justificar el grado de veracidad. B) Reflexionar sobre la matemática y su relación con la encriptación y la ciberseguridad.",
  "idea": "El ítem A) es una aplicación directa del Principio del Palomar (o del casillero): se reconoce por \"selecciono 6 y aseguro que…\". La estrategia es construir las cajas de modo que caer dos en la misma caja fuerce la propiedad buscada; aquí las cajas son los pares que suman 31. El ítem B) es la reflexión conceptual sobre matemática y ciberseguridad, similar a los Ej. 5.",
  "pasos": [
   "A) Del 11 al 20 hay 10 números. Formo cajas emparejando los que suman 31: {11,20}, {12,19}, {13,18}, {14,17}, {15,16}. Son exactamente 5 cajas que reparten los 10 números sin dejar ninguno afuera.",
   "Cada número pertenece a UNA sola de esas cajas (11 va con 20, 12 con 19, etc.).",
   "Aplico el Palomar: tengo 6 números elegidos (palomas) y solo 5 cajas (nidos). Como 6 &gt; 5, por fuerza al menos una caja recibe 2 números.",
   "Los dos números que caen en la misma caja son, por construcción, un par que suma 31. Por lo tanto la afirmación es VERDADERA: con 6 seleccionados siempre aparece un par que suma 31.",
   "Muestro que 6 es el mínimo: con solo 5 números podría fallar tomando uno de cada caja (por ejemplo 11,12,13,14,15), donde ningún par suma 31. Por eso el 6 es óptimo.",
   "B) Modelo de respuesta: la matemática (aritmética modular, teoría de números, álgebra, probabilidad) es la base de la ciberseguridad. RSA y la criptografía asimétrica dependen de la dificultad de factorizar y del cálculo de φ(n); las funciones de hash, las firmas digitales y los protocolos de intercambio de claves se apoyan en propiedades algebraicas. La seguridad no viene del secreto del algoritmo, sino de la complejidad computacional de ciertos problemas matemáticos."
  ],
  "resultado": "A) VERDADERO: 5 cajas de pares que suman 31 y 6 elementos ⇒ por el Palomar hay un par que suma 31. B) La matemática (aritmética modular y teoría de números) sostiene la criptografía y la ciberseguridad.",
  "verificar": "Verificado: exactamente 5 pares suman 31 (11+20, …, 15+16); 6 &gt; 5 fuerza la coincidencia. Con 5 puede evitarse, así que el 6 es óptimo. Error típico: armar las cajas mal (por ejemplo por paridad) y no lograr que \"misma caja\" implique \"suma 31\"."
 },
 {
  "id": "f1712-e5",
  "guia": "Final 17-12-2025",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Programación lineal: productos web y mobile",
  "enunciado": "Una industria desarrolla hasta 60 productos web ($5 millones c/u) y 70 mobile ($7 millones c/u), pero procesa como máximo 100 productos en total (web + mobile). Maximizar el beneficio.",
  "idea": "PL de maximización con dos topes individuales (web ≤ 60, mobile ≤ 70) más un tope conjunto (web + mobile ≤ 100). Se reconoce por \"maximizar el beneficio\". El concepto de fondo es que, como el mobile deja más beneficio por unidad ($7M &gt; $5M), conviene empujarlo a su máximo y completar con web; formalmente esto se confirma evaluando los vértices de la región.",
  "pasos": [
   "Variables: w = cantidad de productos web ≥ 0, m = cantidad de productos mobile ≥ 0 (enteras).",
   "Función objetivo: MAX Z = 5w + 7m (en millones de pesos).",
   "Restricciones: w ≤ 60 (tope web); m ≤ 70 (tope mobile); w + m ≤ 100 (capacidad total); más w, m ≥ 0.",
   "Vértices de la región factible: (0,0); (60,0); (60,40) — con w=60 el tope conjunto deja m ≤ 100−60 = 40; (30,70) — con m=70 queda w ≤ 100−70 = 30; y (0,70).",
   "Evalúo Z en cada vértice: (0,0)→0; (60,0)→5·60 = 300; (60,40)→5·60 + 7·40 = 300 + 280 = 580; (30,70)→5·30 + 7·70 = 150 + 490 = 640; (0,70)→7·70 = 490.",
   "El mayor valor es Z = 640, alcanzado en (w,m) = (30,70).",
   "Interpretación: conviene llevar el mobile a su tope (70, por ser el de mayor margen) y completar con 30 web hasta agotar la capacidad de 100."
  ],
  "resultado": "Máximo beneficio $640 millones fabricando 30 productos web y 70 mobile.",
  "verificar": "Verificado por búsqueda entera: óptimo (30,70) con Z=640. Cumple 30 ≤ 60, 70 ≤ 70, 30+70 = 100 ≤ 100. El mobile (mayor margen) se lleva al tope. Error típico: maximizar el web por ser el tope más chico, o pasarse de 100 al sumar ambos."
 },
 {
  "id": "ffeb25-e1",
  "guia": "Final febrero 2025",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Seguridad de claves + Euclides",
  "enunciado": "a) ¿Qué clave es más segura? La de 4 dígitos seguidos de 3 vocales, o la de 3 consonantes seguidas de 2 dígitos (en ningún caso hay repetición). b) Verificar si 146 y 291 son coprimos a partir del algoritmo de Euclides.",
  "idea": "Se reconoce por dos disparadores: 'clave más segura' (comparar cantidad de claves posibles) y 'no hay repetición' (variaciones sin repetición, no potencias). Cuantas más combinaciones tenga una clave, más resistente es a la fuerza bruta, así que basta contar cada opción y comparar. Para b), el disparador es 'coprimos por Euclides': dos números son coprimos si y solo si su <b>MCD</b> es <b>1</b>, y Euclides lo calcula con divisiones sucesivas tomando restos. El método clave es el principio de multiplicación por bloques.",
  "pasos": [
   "a) Estructura de la Clave 1 = 4 dígitos + 3 vocales, sin repetir dentro de cada bloque. Al ser posiciones ordenadas y sin repetición, cada bloque es una variación (importa el orden y no se reutiliza el símbolo elegido).",
   "Cuento los dígitos: hay 10 símbolos (0–9). Elijo 4 sin repetir, así que en cada posición queda uno menos: <code>10·9·8·7 = 5040</code>. El porqué de restar 1 cada vez es que el dígito usado ya no está disponible.",
   "Cuento las vocales: hay 5 (a, e, i, o, u). Elijo 3 sin repetir: <code>5·4·3 = 60</code>. Igual criterio: cada vocal usada sale del conjunto.",
   "Multiplico los bloques (principio de multiplicación, porque elegir dígitos y elegir vocales son etapas independientes): Clave 1 = <code>5040·60 = 302400</code> combinaciones.",
   "Estructura de la Clave 2 = 3 consonantes + 2 dígitos. En el alfabeto español hay 27 letras y 5 vocales, así que las consonantes son 27−5 = 22.",
   "Cuento consonantes, 3 sin repetir: <code>22·21·20 = 9240</code>. Cuento dígitos, 2 sin repetir: <code>10·9 = 90</code>. Multiplico los bloques: Clave 2 = <code>9240·90 = 831600</code>.",
   "Comparo las dos cantidades: como <code>831600 &gt; 302400</code>, la clave con MÁS combinaciones es la de 3 consonantes + 2 dígitos, por lo tanto es la MÁS segura (más casos que probar por fuerza bruta).",
   "b) Aplico el algoritmo de Euclides a 146 y 291: divido el mayor por el menor y sigo con (divisor, resto) hasta resto 0. Primer paso: <code>291 = 1·146 + 145</code> (resto 145).",
   "Segundo paso: <code>146 = 1·145 + 1</code> (resto 1). Tercer paso: <code>145 = 145·1 + 0</code> (resto 0, me detengo). El último resto no nulo es el MCD.",
   "El último resto no nulo es 1, entonces <code>MCD(146, 291) = 1</code>; por definición, SÍ son coprimos."
  ],
  "resultado": "a) La más segura es la de 3 consonantes + 2 dígitos: 831600 combinaciones contra 302400 de la otra. b) MCD(146,291)=1, son coprimos.",
  "verificar": "Verificado: 5040·60=302400 y 9240·90=831600. Error típico: usar potencias (10⁴ o 22³) como si hubiera repetición, cuando el enunciado dice que NO se repite dentro de cada bloque. Nota: si el curso considera 21 consonantes (alfabeto de 26 letras), la clave 2 da 21·20·19·90=718200, que igual supera a 302400, así que la conclusión no cambia. Euclides confirmado (mcd=1): también se ve directo porque 146=2·73 y 291=3·97, sin factores comunes."
 },
 {
  "id": "ffeb25-e2",
  "guia": "Final febrero 2025",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: suma telescópica 1/(k(k+1))",
  "enunciado": "Demostrar por el PIM que 1/(1·2) + 1/(2·3) + 1/(3·4) + … + 1/(n(n+1)) = n/(n+1), para todo n∈N.",
  "idea": "Se reconoce por la consigna 'demostrar por el PIM que una suma con puntos suspensivos es igual a una fórmula cerrada'. El método es el Principio de Inducción Matemática: se verifica el caso base, se supone la igualdad para n=k (hipótesis) y se prueba para n=k+1 (tesis) usando la hipótesis. El truco propio de este ejercicio es que el término general <code>1/(k(k+1))</code> se combina con la fracción acumulada y colapsa (suma telescópica), por lo que el paso inductivo se reduce a operar fracciones y factorizar.",
  "pasos": [
   "<b>Caso base (n=1):</b> evalúo ambos miembros para el primer natural. LHS = <code>1/(1·2) = 1/2</code>. RHS = <code>1/(1+1) = 1/2</code>. Coinciden, así que la propiedad P(1) es verdadera.",
   "<b>Hipótesis inductiva (n=k):</b> supongo verdadera la igualdad para un k genérico: <code>1/(1·2) + … + 1/(k(k+1)) = k/(k+1)</code>. Esto es lo que voy a poder reemplazar más adelante.",
   "<b>Tesis (n=k+1):</b> escribo lo que hay que probar reemplazando n por k+1: <code>1/(1·2) + … + 1/((k+1)(k+2)) = (k+1)/(k+2)</code>. Meta clara antes de operar.",
   "<b>Paso inductivo:</b> la suma hasta k+1 es la suma hasta k más el término nuevo. Aplico la hipótesis a la parte hasta k: <code>k/(k+1) + 1/((k+1)(k+2))</code>. Acá se usa la hipótesis (por eso la inducción funciona).",
   "Llevo a común denominador <code>(k+1)(k+2)</code>: el primer término se amplifica por (k+2). Queda <code>[k(k+2) + 1] / [(k+1)(k+2)]</code>. El porqué del denominador es que (k+1) es factor común y falta el (k+2).",
   "Desarrollo el numerador: <code>k(k+2) + 1 = k² + 2k + 1 = (k+1)²</code> (trinomio cuadrado perfecto). Entonces la fracción es <code>(k+1)² / [(k+1)(k+2)]</code>.",
   "Simplifico un factor (k+1) arriba y abajo: <code>(k+1)/(k+2)</code>. Esto es exactamente la tesis, así que P(k) ⇒ P(k+1).",
   "Como valen el caso base y el paso inductivo, por el PIM la igualdad se cumple para todo n∈N."
  ],
  "resultado": "Queda demostrado por inducción que la suma es n/(n+1) para todo n natural.",
  "verificar": "Verificado numéricamente n=1..5: LHS = 1/2, 2/3, 3/4, 4/5, 5/6, coincide con n/(n+1). El colapso k(k+2)+1=(k+1)² es la clave del paso inductivo. Error típico: al sumar el término k+1 usar de nuevo el denominador de la suma anterior o no amplificar bien el primer sumando, con lo que el numerador no cierra en (k+1)²."
 },
 {
  "id": "ffeb25-e3",
  "guia": "Final febrero 2025",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Programación lineal: micro y nano",
  "enunciado": "Una empresa fabrica micro y nano. El micro necesita 2 trabajadores durante 20 h, beneficio $3000/unidad. El nano implica 3 obreros durante 10 h, beneficio $2000/unidad. Dispone de 60 empleados durante 480 h. ¿Qué cantidades de cada componente para máximo beneficio?",
  "idea": "Se reconoce como Programación Lineal porque hay que 'maximizar un beneficio' sujeto a recursos limitados (empleados y horas). El método: definir variables, escribir la función objetivo lineal y las restricciones de tipo ≤, y como el óptimo de un problema lineal siempre está en un vértice de la región factible, se hallan los vértices y se evalúa Z en cada uno. Detalle propio: la restricción de horas se puede simplificar dividiendo por 10 para trabajar con números chicos.",
  "pasos": [
   "Defino las variables de decisión: x = cantidad de micro, y = cantidad de nano. Son las incógnitas que la empresa controla.",
   "<b>Función objetivo (maximizar):</b> el beneficio total es <code>Z = 3000x + 2000y</code>, porque cada micro aporta $3000 y cada nano $2000.",
   "<b>Restricción de trabajadores:</b> cada micro ocupa 2 y cada nano 3, con 60 disponibles: <code>2x + 3y ≤ 60</code>. Es ≤ porque no puedo usar más empleados de los que hay.",
   "<b>Restricción de horas:</b> cada micro 20 h y cada nano 10 h, con 480 h: <code>20x + 10y ≤ 480</code>. Divido todo por 10 para simplificar: <code>2x + y ≤ 48</code>.",
   "No negatividad (no se fabrican cantidades negativas): <code>x ≥ 0 , y ≥ 0</code>.",
   "<b>Vértices de la región factible:</b> el origen (0,0); el corte del eje x por la recta de horas (24,0); el corte del eje y por trabajadores (0,20); y la intersección de las dos rectas activas.",
   "Intersección de <code>2x+y=48</code> y <code>2x+3y=60</code>: despejo y=48−2x de la primera y reemplazo: 2x+3(48−2x)=60 → 2x+144−6x=60 → −4x=−84 → <code>x=21</code>, y=48−42=<code>6</code>.",
   "<b>Evalúo Z en cada vértice</b> (el óptimo está entre ellos): (0,0)→0 ; (24,0)→72000 ; (0,20)→40000 ; (21,6)→3000·21+2000·6 = 63000+12000 = 75000.",
   "El mayor valor de Z es 75000, alcanzado en (21, 6): esa es la producción óptima."
  ],
  "resultado": "Fabricar 21 micro y 6 nano, con beneficio máximo de $75.000.",
  "verificar": "Verificado con búsqueda exhaustiva: el máximo es Z=75000 en (x,y)=(21,6), que cumple 2·21+3·6=60 (usa todos los empleados) y 20·21+10·6=480 (usa todas las horas). Ambas restricciones activas. Error típico: olvidar dividir la restricción de horas o evaluar Z solo en (24,0) sin calcular la intersección de las rectas, perdiendo el vértice ganador."
 },
 {
  "id": "ffeb25-e4",
  "guia": "Final febrero 2025",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Sistema 3×3 por Gauss-Jordan",
  "enunciado": "Explicitar el sistema, expresarlo como matriz ampliada y resolver por Gauss-Jordan: 2x + y − z = 8 ; 2z − y = 3x − 11 ; 2z + y = 2x − 3.",
  "idea": "Se reconoce por 'expresar como matriz ampliada y resolver por Gauss-Jordan'. El primer paso es ordenar cada ecuación pasando TODAS las incógnitas al primer miembro y los términos independientes al segundo, respetando el orden x, y, z. Luego se arma la matriz ampliada [A | b] y se aplican operaciones elementales de fila hasta llegar a la identidad (Gauss-Jordan), lo que deja la solución leída directamente. Si det(A)≠0 el sistema es compatible determinado (solución única).",
  "pasos": [
   "<b>Ordeno la Ec1</b> (ya está en forma estándar): 2x + y − z = 8. La dejo tal cual.",
   "<b>Ordeno la Ec2:</b> 2z − y = 3x − 11. Paso las incógnitas a la izquierda: <code>−3x − y + 2z = −11</code>. Multiplico por −1 para dejar el x positivo: <code>3x + y − 2z = 11</code>.",
   "<b>Ordeno la Ec3:</b> 2z + y = 2x − 3. Paso términos: <code>−2x + y + 2z = −3</code>.",
   "<b>Armo la matriz ampliada</b> [A | b] con los coeficientes de x, y, z y el independiente: [ 2 1 −1 | 8 ; 3 1 −2 | 11 ; −2 1 2 | −3 ].",
   "Antes de reducir, chequeo consistencia calculando el determinante de A: da <code>det(A) = 1 ≠ 0</code>, así que el sistema es compatible determinado (tiene solución única).",
   "Aplico operaciones elementales de fila (Gauss-Jordan): uso la fila 1 para anular la columna 1 en las filas 2 y 3, luego el pivote 2 para limpiar la columna 2, y finalmente el pivote 3; escalo cada pivote a 1 hasta obtener la identidad en el bloque de coeficientes.",
   "Al llegar a la identidad, el bloque de independientes da la solución: <code>x = 2 , y = 3 , z = −1</code>.",
   "<b>Verifico en las ecuaciones originales:</b> Ec1: 2·2+3−(−1)=4+3+1=8 ✓ ; Ec2: 3·2+3−2·(−1)=6+3+2=11 ✓ ; Ec3: −2·2+3+2·(−1)=−4+3−2=−3 ✓."
  ],
  "resultado": "Solución única: x = 2, y = 3, z = −1.",
  "verificar": "Verificado: determinante = 1 (≠0, sistema compatible determinado) y la terna (2,3,−1) satisface las tres ecuaciones originales. Error típico: al pasar términos de un miembro a otro equivocar un signo (sobre todo en Ec2 y Ec3), lo que descoloca toda la matriz; conviene reordenar con cuidado antes de reducir."
 },
 {
  "id": "ffeb25-e5",
  "guia": "Final febrero 2025",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Función φ de Euler + existencia de inversa",
  "enunciado": "a) Siendo p=19, q=7 y t=p·q, hallar φ(t). Justificar. ¿De qué función se trata y qué significa? b) Justificar el valor de verdad: 'si consideramos la matriz de incógnitas del ej. 4 (sin los términos independientes) se puede hallar su matriz inversa'.",
  "idea": "Se reconoce por el nombre 'φ(t)' y por ser t=p·q con p, q primos (contexto RSA). φ es la indicatriz de Euler: cuenta cuántos enteros de 1 a t son coprimos con t; cuando t es producto de dos primos distintos vale la fórmula <code>φ(p·q)=(p−1)(q−1)</code>. Para b), el criterio es que una matriz cuadrada admite inversa si y solo si su determinante es distinto de cero, así que basta reusar el det ya conocido de la matriz de coeficientes del Ej. 4.",
  "pasos": [
   "<b>a)</b> Calculo t multiplicando los dos primos: t = p·q = <code>19·7 = 133</code>.",
   "Como 19 y 7 son primos distintos, aplico la fórmula multiplicativa de Euler: <code>φ(t) = (p−1)(q−1) = 18·6 = 108</code>. (El porqué: entre 1 y pq los únicos no coprimos son los múltiplos de p y los de q, y restarlos deja (p−1)(q−1).)",
   "<b>Qué función es:</b> φ(t) es la función φ (fi) de Euler, la indicatriz. Cuenta la cantidad de números naturales entre 1 y t que son coprimos con t (no comparten factores primos con t).",
   "<b>Qué significa / para qué sirve:</b> es la base del sistema RSA de encriptación asimétrica. El exponente público e se elige coprimo con φ(t), y φ(t) permite calcular la clave privada d como inverso modular de e (e·d ≡ 1 mód φ(t)).",
   "<b>b)</b> Recupero la matriz de coeficientes del Ej. 4 (sin la columna de independientes): M = [ 2 1 −1 ; 3 1 −2 ; −2 1 2 ].",
   "Uso el determinante ya calculado en el Ej. 4: <code>det(M) = 1</code>.",
   "Aplico el criterio de inversibilidad: como <code>det(M) = 1 ≠ 0</code>, la matriz SÍ admite inversa (es no singular).",
   "Por lo tanto la afirmación del enunciado es VERDADERA."
  ],
  "resultado": "a) φ(133) = 108. Es la función φ de Euler (cantidad de coprimos con 133), clave en RSA. b) VERDADERO: la matriz de coeficientes tiene det=1≠0, así que es inversible.",
  "verificar": "Verificado: (19−1)(7−1)=18·6=108. Determinante de la matriz de coeficientes = 1 ≠ 0, confirma la existencia de inversa. La afirmación del ítem b es verdadera. Error típico: calcular φ(133) como 133−1 (fórmula de primos) en vez de (p−1)(q−1); 133 NO es primo, así que esa fórmula no aplica."
 },
 {
  "id": "f0412-e1",
  "guia": "Final 4-12-2024",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "PIM: 7ⁿ + 1 divisible por 8 (n impar)",
  "enunciado": "Demostrar por el PIM que P(n): 7ⁿ + 1 es divisible por 8 (cuando i=1,2,3…, sucede que n=1,3,5,…) → considerar 7^(2i−1) + 1 divisible por 8.",
  "idea": "Se reconoce como inducción sobre divisibilidad, pero con una trampa: la propiedad NO vale para todo n (por ejemplo 7²+1=50 no es múltiplo de 8), solo para n impar. Por eso se reescribe <code>n=2i−1</code> y se induce sobre i∈N. El método es el PIM aplicado a divisibilidad: en el paso inductivo se separa 7^(2k+1) como 7²·7^(2k−1) y se sustituye la hipótesis para sacar factor 8. La clave es 'crear' el 8 usando 49=48+1.",
  "pasos": [
   "Reescribo n como impar: <code>n = 2i−1</code> con i∈N, y demuestro por inducción sobre i que <code>7^(2i−1) + 1</code> es divisible por 8. Así la variable de inducción recorre solo los impares.",
   "<b>Caso base (i=1, n=1):</b> <code>7¹ + 1 = 8 = 8·1</code>. Es divisible por 8. ✓",
   "<b>Hipótesis inductiva (i=k):</b> supongo que <code>7^(2k−1) + 1 = 8·m</code> para algún entero m; equivalentemente <code>7^(2k−1) = 8m − 1</code>. Esta última forma es la que voy a reemplazar.",
   "<b>Tesis (i=k+1):</b> hay que probar que <code>7^(2(k+1)−1) + 1 = 7^(2k+1) + 1</code> es divisible por 8.",
   "<b>Paso inductivo:</b> separo el exponente sumando 2: <code>7^(2k+1) + 1 = 7² · 7^(2k−1) + 1 = 49 · 7^(2k−1) + 1</code>. Esto conecta con la hipótesis, que habla de 7^(2k−1).",
   "Sustituyo 7^(2k−1) = 8m − 1: <code>49·(8m − 1) + 1 = 392m − 49 + 1 = 392m − 48</code>.",
   "Factorizo 8: <code>392m − 48 = 8·(49m − 6)</code>. Como 49m−6 es entero, el resultado es múltiplo de 8. Queda probada la tesis.",
   "Por el PIM, <code>7^(2i−1)+1</code> es divisible por 8 para todo i∈N, es decir, para todo n impar."
  ],
  "resultado": "Queda demostrado que 7ⁿ+1 es divisible por 8 para todo n impar (n=2i−1).",
  "verificar": "Verificado: i=1→8, i=2(n=3)→344=8·43, i=3(n=5)→16808=8·2101, i=4(n=7)→823544=8·102943. La aclaración n=2i−1 es imprescindible: para n par la propiedad falla (7²+1=50). Error típico: intentar la inducción con n en vez de i (paso n→n+1) sin restringir a impares; ahí el enunciado es falso y la prueba no cierra."
 },
 {
  "id": "f0412-e2",
  "guia": "Final 4-12-2024",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "Programación lineal: combos A y B",
  "enunciado": "Un emprendedor cuenta con 200 plaquetas y 300 sensores para armar dos combos. El combo A lleva 2 plaquetas y 2 sensores; el combo B, 1 plaqueta y 3 sensores. Por cada combo A gana $30 y por cada B $15. ¿Cuántos combos de cada tipo vender para beneficio máximo? Plantear FO y resolver analítica y gráficamente.",
  "idea": "Es Programación Lineal (maximizar beneficio con recursos limitados: plaquetas y sensores). Se definen variables, la función objetivo y dos restricciones ≤, y se evalúa Z en los vértices de la región factible porque el óptimo lineal vive en un vértice. Particularidad de este ejercicio: la función objetivo resulta paralela a una de las restricciones, así que aparecen soluciones múltiples (empate en dos vértices y todo el segmento entre ellos).",
  "pasos": [
   "Defino variables: x = combos A, y = combos B (lo que se decide producir).",
   "<b>Función objetivo (maximizar):</b> <code>Z = 30x + 15y</code>, porque cada A deja $30 y cada B $15.",
   "<b>Restricción de plaquetas:</b> A usa 2 y B usa 1, hay 200: <code>2x + y ≤ 200</code>.",
   "<b>Restricción de sensores:</b> A usa 2 y B usa 3, hay 300: <code>2x + 3y ≤ 300</code>.",
   "No negatividad: <code>x ≥ 0 , y ≥ 0</code>.",
   "<b>Vértices de la región factible:</b> (0,0); corte de plaquetas con el eje x (100,0); corte de sensores con el eje y (0,100); e intersección de ambas rectas.",
   "Intersección de <code>2x+y=200</code> y <code>2x+3y=300</code>: resto la primera de la segunda → (2x+3y)−(2x+y)=300−200 → 2y=100 → <code>y=50</code>; reemplazo → 2x+50=200 → <code>x=75</code>.",
   "<b>Evalúo Z:</b> (0,0)→0 ; (100,0)→3000 ; (0,100)→1500 ; (75,50)→30·75+15·50 = 2250+750 = 3000.",
   "El máximo Z=3000 se alcanza en DOS vértices, (100,0) y (75,50): hay solución múltiple (todo el segmento entre ellos también es óptimo)."
  ],
  "resultado": "Beneficio máximo $3000. Se alcanza en dos soluciones: 100 combos A y 0 combos B, o bien 75 combos A y 50 combos B (solución múltiple).",
  "verificar": "Verificado por búsqueda exhaustiva: hay EMPATE en Z=3000 entre (100,0) y (75,50) porque la FO es paralela a la arista plaquetas 2x+y=200 (Z/15 = 2x+y). Todo el segmento entre esos dos vértices es óptimo. Conviene aclararlo: por administración/aprovechamiento de sensores suele preferirse (75,50). Error típico: dar una sola solución y no advertir el empate."
 },
 {
  "id": "f0412-e3",
  "guia": "Final 4-12-2024",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Sistema por Gauss-Jordan + combinatoria de examen",
  "enunciado": "a) Resolver por Gauss/Gauss-Jordan: 2y − 3 = 2z − x ; x − y + 4z = −3 ; −2z + y = 4 + x. b) Un examen consta de 6 preguntas y se evalúa sobre 10. Cada pregunta debe valer como mínimo un punto, y aunque hay una que se puntúa con 3, ¿de cuántas maneras se puede asignar el valor de cada pregunta?",
  "idea": "Dos partes. a) Sistema lineal: se ordena pasando incógnitas al primer miembro y se resuelve por eliminación de Gauss-Jordan (solución única si det≠0). b) Se reconoce como reparto de enteros positivos con una condición fijada: una pregunta ya vale 3, así que las 5 restantes deben sumar 7 con cada una ≥1. Es 'estrellas y barras' (combinaciones con repetición) tras el cambio de variable que baja el mínimo a 0.",
  "pasos": [
   "<b>a) Ordeno la Ec1:</b> 2y−3=2z−x → paso todo al primer miembro → <code>x + 2y − 2z = 3</code>.",
   "<b>Ec2</b> ya está ordenada: <code>x − y + 4z = −3</code>. <b>Ordeno la Ec3:</b> −2z+y=4+x → <code>−x + y − 2z = 4</code>.",
   "Armo la matriz ampliada [ 1 2 −2 | 3 ; 1 −1 4 | −3 ; −1 1 −2 | 4 ] y reduzco por filas (Gauss-Jordan): con la fila 1 anulo la columna 1 en las otras dos, luego limpio la columna 2 y la 3.",
   "Al llevar a la identidad obtengo <code>x = −2 , y = 3 , z = 1/2</code> (solución única).",
   "<b>Verificación:</b> Ec1: −2+2·3−2·(1/2)=−2+6−1=3 ✓ ; Ec2: −2−3+4·(1/2)=−2−3+2=−3 ✓ ; Ec3: −(−2)+3−2·(1/2)=2+3−1=4 ✓.",
   "<b>b)</b> Una pregunta ya está fijada en 3 puntos. Restan 10−3 = 7 puntos para repartir entre las otras 5 preguntas, con cada una ≥ 1 punto entero.",
   "Cambio de variable para bajar el mínimo a 0: y_i = x_i − 1 ≥ 0. Entonces la suma pasa a <code>y₁+…+y₅ = 7 − 5 = 2</code>, buscando soluciones enteras no negativas.",
   "Aplico estrellas y barras (repartir 2 unidades idénticas en 5 cajas): <code>C(2 + 5 − 1, 5 − 1) = C(6, 4) = 15</code>.",
   "Por lo tanto hay 15 formas de asignar los puntajes."
  ],
  "resultado": "a) x = −2, y = 3, z = 1/2. b) 15 maneras de asignar los valores.",
  "verificar": "Verificado: la terna (−2, 3, 1/2) satisface las tres ecuaciones. Combinatoria: fijando 3 puntos en una pregunta, las otras 5 deben sumar 7 con cada una ≥1 → C(6,4)=15 (equivale a repartir 2 puntos extra entre 5 preguntas). Error típico en b): olvidar el mínimo de 1 punto (usar suma=7 con y≥0 da C(11,4)) o no descontar los 3 puntos ya asignados."
 },
 {
  "id": "f0412-e4",
  "guia": "Final 4-12-2024",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Desencriptación con matriz inversa",
  "enunciado": "Se utilizó la matriz B para encriptar una clave; la clave encriptada es −189; 35; −177; 31. Usando matrices y el diccionario (A=1, B=2, …), hallar la clave original. Justificar analíticamente. B = (−5 −6 ; 1 1).",
  "idea": "Se reconoce como encriptación matricial: se cifró multiplicando bloques del mensaje por B, así que se descifra multiplicando por B⁻¹. El método: calcular det(B) e invertir con la fórmula 2×2, agrupar la clave encriptada en vectores columna de a pares, aplicar B⁻¹ a cada uno y traducir los números resultantes a letras con el diccionario A=1, B=2, … La justificación es que B⁻¹·(B·v)=v, se recupera el mensaje.",
  "pasos": [
   "<b>Calculo det(B):</b> B = [−5 −6 ; 1 1], det = (−5)(1) − (−6)(1) = −5 + 6 = <code>1</code>. Como det=1≠0, B es inversible.",
   "<b>Invierto B</b> con la fórmula 2×2: para [a b ; c d], B⁻¹ = (1/det)·[d −b ; −c a] = (1/1)·[1 6 ; −1 −5] = <code>[1 6 ; −1 −5]</code>.",
   "<b>Agrupo la clave encriptada de a pares</b> como vectores columna (el cifrado fue en bloques de 2): v₁ = (−189 ; 35) y v₂ = (−177 ; 31).",
   "<b>Desencripto v₁:</b> B⁻¹·v₁ = [1·(−189)+6·35 ; −1·(−189)+(−5)·35] = [−189+210 ; 189−175] = <code>(21 ; 14)</code>.",
   "<b>Desencripto v₂:</b> B⁻¹·v₂ = [1·(−177)+6·31 ; −1·(−177)+(−5)·31] = [−177+186 ; 177−155] = <code>(9 ; 22)</code>.",
   "Ordeno los números obtenidos según los vectores: 21, 14, 9, 22.",
   "<b>Traduzco con el diccionario A=1, B=2, … (Z=27 con Ñ):</b> 21→U, 14→N, 9→I, 22→V. Cada número cae entre 1 y 27, así que son letras válidas.",
   "La clave original es <b>UNIV</b> (por ejemplo inicio de UNIVERSIDAD / UNIVERSITARIO)."
  ],
  "resultado": "La clave original es U-N-I-V (21, 14, 9, 22): 'UNIV'.",
  "verificar": "Verificado: det(B)=1, B⁻¹=[1 6 ; −1 −5]. Comprobación inversa (re-encripto): B·(21;14)=(−5·21−6·14 ; 21+14)=(−105−84 ; 35)=(−189;35) ✓ y B·(9;22)=(−5·9−6·22 ; 9+22)=(−45−132 ; 31)=(−177;31) ✓. Los números 21,14,9,22 dan letras válidas (1..27) y forman 'UNIV'. Error típico: agrupar los números por filas en vez de por columnas, o equivocar un signo en B⁻¹ (el término −c es −1)."
 },
 {
  "id": "f0412-e5",
  "guia": "Final 4-12-2024",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5 (aritmética modular)",
  "titulo": "Ecuación modular 11X ≡ 5 (mód 7)",
  "enunciado": "A) i) Siendo mcd(a,n)=1 y a·X ≡ b(n), resolver 11·X ≡ 5(7) usando propiedades de la aritmética modular. ii) Enunciar el Teorema de Euler y su aplicación a la encriptación asimétrica.",
  "idea": "Se reconoce como congruencia lineal a·X ≡ b (mód n). Como mcd(11,7)=1, hay solución única módulo 7. El método: reducir el coeficiente módulo n, hallar el inverso multiplicativo de ese coeficiente (número que multiplicado da 1 mód n) y multiplicar ambos miembros por él para despejar X. Para ii) se enuncia el Teorema de Euler y se conecta con RSA (elección de exponentes e·d ≡ 1 mód φ(n)).",
  "pasos": [
   "<b>i)</b> Verifico que hay solución: <code>mcd(11,7)=1</code>, así que la congruencia tiene solución única módulo 7.",
   "Reduzco el coeficiente módulo 7 para simplificar: <code>11 ≡ 4 (mód 7)</code> (porque 11=7+4). La ecuación equivale a <code>4X ≡ 5 (mód 7)</code>.",
   "Busco el inverso multiplicativo de 4 módulo 7 (un c con 4c≡1): pruebo 4·2 = 8 = 7+1 ≡ 1 (mód 7). Entonces <code>4⁻¹ ≡ 2 (mód 7)</code>.",
   "Multiplico ambos miembros por 2 para despejar X: <code>X ≡ 5·2 = 10 ≡ 3 (mód 7)</code> (porque 10=7+3).",
   "<b>Solución:</b> X ≡ 3 (mód 7), es decir la clase X ∈ {…, 3, 10, 17, 24, …}.",
   "<b>Comprobación:</b> 11·3 = 33 = 4·7 + 5, así que 33 ≡ 5 (mód 7). ✓",
   "<b>ii) Teorema de Euler:</b> si mcd(a, n) = 1, entonces <code>a^φ(n) ≡ 1 (mód n)</code>, donde φ(n) es la función indicatriz de Euler.",
   "<b>Aplicación a RSA (encriptación asimétrica):</b> las claves pública e y privada d cumplen <code>e·d ≡ 1 (mód φ(n))</code>. Al cifrar C=Mᵉ y descifrar Cᵈ = M^(e·d) = M^(1+kφ(n)) = M·(M^φ(n))ᵏ ≡ M (mód n) por Euler, recuperando el mensaje original."
  ],
  "resultado": "i) X ≡ 3 (mód 7). ii) Teorema de Euler: a^φ(n) ≡ 1 (mód n) si mcd(a,n)=1; es la base que garantiza que descifrar en RSA devuelve el mensaje original.",
  "verificar": "Verificado: 11≡4 (mód7), inverso de 4 es 2 (4·2=8≡1), X=5·2=10≡3. Chequeo directo 11·3=33≡5 (mód7). Correcto. Error típico: dividir por 4 como si fueran reales (no existe la división en Zₙ); hay que multiplicar por el INVERSO modular. También cuidar que el inverso solo existe porque mcd(coef,n)=1."
 },
 {
  "id": "f1812-e1",
  "guia": "Final 18-12-2024",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Tiempo de fuerza bruta + contraseña",
  "enunciado": "a) Recuperar una clave de 3 letras seguidas de 4 números; cada código lleva 1 ms. ¿Cuánto tiempo para chequear todas y descifrarla con seguridad? ¿Y si no se pudieran repetir números ni letras? (23 letras, 10 dígitos). b) Una contraseña de 5 cifras comienza con 0 o 6 y es múltiplo de 5. ¿Cuántas opciones si las cifras no se repiten?",
  "idea": "a) Se reconoce como conteo de claves y tiempo de fuerza bruta: se cuenta el total de claves con el principio de multiplicación y se multiplica por 1 ms. Con repetición cada posición es independiente (potencias); sin repetición se usan variaciones (se descuenta 1 por posición). b) Es conteo con casos: 'empieza con 0 o 6' y 'múltiplo de 5' (última cifra 0 o 5), sin repetir cifras; conviene separar por casos según la primera cifra porque el 0 interfiere con la condición de la última.",
  "pasos": [
   "<b>a) Con repetición:</b> 3 letras (23 opciones cada una) y 4 dígitos (10 cada uno), posiciones independientes → potencias: <code>23³ · 10⁴ = 12167 · 10000 = 121.670.000</code> claves.",
   "Tiempo con repetición = 121.670.000 claves · 1 ms = 121.670.000 ms = 121.670 s ≈ 2027,8 min ≈ <b>33,8 horas</b> (≈ 1 día y 9,8 h).",
   "<b>Sin repetir letras ni números:</b> las letras se vuelven variaciones 23·22·21 y los dígitos 10·9·8·7 (cada símbolo usado sale del conjunto): <code>23·22·21 · 10·9·8·7 = 10626 · 5040 = 53.555.040</code> claves.",
   "Tiempo sin repetir = 53.555.040 ms ≈ 53.555 s ≈ 892,6 min ≈ <b>14,88 horas</b>.",
   "Comparo con un día (86.400.000 ms): con repetición NO alcanza chequear todo en un día (121,67 M > 86,4 M); sin repetir SÍ alcanza (53,56 M < 86,4 M).",
   "<b>b)</b> Contraseña de 5 cifras distintas, que empieza con 0 o 6 y es múltiplo de 5 (⇒ termina en 0 o 5). Separo por casos según la primera cifra.",
   "<b>Caso empieza en 0:</b> el 0 ya está usado, así que la última no puede ser 0 → debe ser 5. Fijadas primera (0) y última (5), las 3 del medio se eligen sin repetir de las 8 cifras restantes: <code>1 · (8·7·6) · 1 = 336</code>.",
   "<b>Caso empieza en 6:</b> el 6 no es 0 ni 5, así que la última puede ser 0 o 5 (2 opciones). Las 3 del medio, de las 8 restantes: <code>1 · (8·7·6) · 2 = 672</code>.",
   "Sumo los casos (son excluyentes): Total = 336 + 672 = <b>1008</b> opciones."
  ],
  "resultado": "a) Con repetición 121.670.000 claves ≈ 33,8 h (más de un día). Sin repetir 53.555.040 claves ≈ 14,88 h (menos de un día). b) 1008 contraseñas posibles.",
  "verificar": "Verificado: 23³·10⁴=121.670.000 y 23·22·21·10·9·8·7=53.555.040. Comparado con 1 día=86.400.000 ms: el caso con repetición supera el día (no alcanza chequearlas en 24 h), el caso sin repetir no lo supera. b) fuerza bruta confirmó 1008 = 336 + 672. Error típico en b): no separar por casos y contar la última como '0 o 5' siempre, olvidando que si empieza en 0 la última ya no puede ser 0."
 },
 {
  "id": "f1812-e2",
  "guia": "Final 18-12-2024",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: 2 divide a n² + 5n",
  "enunciado": "Demostrar por el PIM que 2 divide a n² + 5n, siendo n cualquier entero positivo.",
  "idea": "Se reconoce como inducción sobre divisibilidad: probar que n²+5n es siempre par. Se aplica el PIM (caso base, hipótesis para n=k, tesis para n=k+1). El truco del paso inductivo es desarrollar (k+1)²+5(k+1), reconocer adentro el bloque de la hipótesis (k²+5k) y ver que lo que sobra, 2k+6, es par; la suma de dos pares es par. Alternativa conceptual: n(n+5) siempre tiene un factor par.",
  "pasos": [
   "<b>Caso base (n=1):</b> evalúo la expresión: <code>1² + 5·1 = 1 + 5 = 6 = 2·3</code>. Es divisible por 2. ✓",
   "<b>Hipótesis inductiva (n=k):</b> supongo que <code>k² + 5k = 2·m</code> para algún entero m (es decir, k²+5k es par).",
   "<b>Tesis (n=k+1):</b> hay que probar que <code>(k+1)² + 5(k+1)</code> es divisible por 2.",
   "<b>Paso inductivo:</b> desarrollo (k+1)² + 5(k+1) = k² + 2k + 1 + 5k + 5. Reagrupo para hacer aparecer la hipótesis: <code>(k² + 5k) + (2k + 6)</code>.",
   "Uso la hipótesis en el primer paréntesis (k²+5k = 2m) y observo el segundo: <code>2k + 6 = 2(k + 3)</code>, que es par.",
   "Sumo: <code>2m + 2(k+3) = 2·(m + k + 3)</code>. Como m+k+3 es entero, la expresión es múltiplo de 2. Queda probada la tesis.",
   "Por el PIM, 2 divide a n²+5n para todo entero positivo n.",
   "<b>Observación (chequeo conceptual):</b> n²+5n = n(n+5); n y n+5 tienen distinta paridad (difieren en 5, impar), así que uno de los dos es par y el producto siempre es par."
  ],
  "resultado": "Queda demostrado por inducción que n² + 5n es par (divisible por 2) para todo entero positivo n.",
  "verificar": "Verificado: n=1→6, n=2→14, n=3→24, n=4→36, n=5→50, todos pares. El incremento entre términos consecutivos es 2(k+3), par, lo que cierra el paso inductivo. Error típico: al desarrollar (k+1)² olvidar el doble producto 2k, o no reagrupar para exhibir el bloque k²+5k de la hipótesis."
 },
 {
  "id": "f1812-e3",
  "guia": "Final 18-12-2024",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Programación lineal: electricistas y mecánicos",
  "enunciado": "En un taller trabajan electricistas y mecánicos. Debe haber igual o más mecánicos que electricistas, y la cantidad de mecánicos no debe superar el doble de electricistas. Hay 30 electricistas y 20 mecánicos disponibles. Se gana $15.000 por electricista y $12.000 por mecánico por jornada. ¿Cuántos de cada clase para máximo beneficio?",
  "idea": "Es Programación Lineal, pero acá las restricciones no son de recursos sino de RELACIÓN entre las variables: 'igual o más mecánicos que electricistas' (y≥x) y 'mecánicos no más del doble' (y≤2x), más los topes de disponibilidad (x≤30, y≤20). Se maximiza Z evaluando en los vértices. El detalle fino es traducir bien las frases a desigualdades y ubicar los vértices donde se cruzan las rectas de relación con los topes.",
  "pasos": [
   "Defino variables: x = electricistas, y = mecánicos empleados.",
   "<b>Función objetivo (maximizar):</b> <code>Z = 15000x + 12000y</code>, según lo que se gana por cada uno.",
   "<b>Restricciones de relación:</b> 'igual o más mecánicos que electricistas' → <code>y ≥ x</code>; 'mecánicos no superan el doble de electricistas' → <code>y ≤ 2x</code>.",
   "<b>Disponibilidad (topes):</b> <code>x ≤ 30 , y ≤ 20</code>, con <code>x ≥ 0 , y ≥ 0</code>.",
   "<b>Vértices de la región factible:</b> (0,0); el punto donde <code>y=2x</code> corta el tope <code>y=20</code> → 20=2x → x=10 → (10,20); y donde <code>y=x</code> corta <code>y=20</code> → (20,20).",
   "Chequeo de validez: no se puede pasar de y=20 (tope de mecánicos); sobre y=x con y=20 da x=20 ≤ 30, así que (20,20) es factible.",
   "<b>Evalúo Z:</b> (0,0)→0 ; (10,20)→15000·10+12000·20 = 150000+240000 = 390000 ; (20,20)→15000·20+12000·20 = 300000+240000 = 540000.",
   "El máximo es Z = 540.000 en (20, 20): conviene emplear 20 electricistas y 20 mecánicos."
  ],
  "resultado": "Conviene emplear 20 electricistas y 20 mecánicos, con beneficio máximo de $540.000 por jornada.",
  "verificar": "Verificado por búsqueda exhaustiva: máximo Z=540000 en (x,y)=(20,20). Cumple y≥x (20≥20), y≤2x (20≤40), x≤30, y≤20. La restricción y≤20 es la que topa el óptimo. Error típico: invertir las desigualdades de relación (poner x≥y o y≥2x) al traducir el enunciado, lo que cambia por completo la región factible."
 },
 {
  "id": "f1812-e4",
  "guia": "Final 18-12-2024",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Sistema por Gauss + valor de 'a' sin inversa",
  "enunciado": "A) Resolver por Gauss/Gauss-Jordan: 7x − 4y = −2z ; 2x − 5y + 3z + 12 = 0 ; 3x − 5z = 1 − 2y. B) Indicar para qué valor(es) de 'a' la matriz A no admite inversa. A = (−1 4 2a ; 2 −3 1 ; −2 a 9).",
  "idea": "Dos partes. A) Sistema lineal: se ordena (incógnitas a la izquierda, independiente a la derecha) y se resuelve por Gauss-Jordan; si det≠0 hay solución única. B) Se reconoce por 'para qué valor de a NO admite inversa': una matriz no es inversible exactamente cuando su determinante es 0, así que se calcula det(A) en función de 'a' (desarrollo por cofactores) y se resuelve det(A)=0, que aquí queda una cuadrática en 'a'.",
  "pasos": [
   "<b>A) Ordeno la Ec1:</b> 7x−4y=−2z → <code>7x − 4y + 2z = 0</code>.",
   "<b>Ordeno Ec2:</b> 2x−5y+3z+12=0 → <code>2x − 5y + 3z = −12</code>. <b>Ordeno Ec3:</b> 3x−5z=1−2y → <code>3x + 2y − 5z = 1</code>.",
   "Armo la matriz ampliada [ 7 −4 2 | 0 ; 2 −5 3 | −12 ; 3 2 −5 | 1 ]. Calculo el det de coeficientes: da <code>95 ≠ 0</code>, así que el sistema es compatible determinado.",
   "Reduzco por filas (Gauss-Jordan) hasta la identidad y obtengo <code>x = 2 , y = 5 , z = 3</code>.",
   "<b>Verificación:</b> Ec1: 7·2−4·5+2·3=14−20+6=0 ✓ ; Ec2: 2·2−5·5+3·3=4−25+9=−12 ✓ ; Ec3: 3·2+2·5−5·3=6+10−15=1 ✓.",
   "<b>B) Calculo det(A)</b> desarrollando por la primera fila (A = [−1 4 2a ; 2 −3 1 ; −2 a 9]): det = −1·[(−3)(9)−(1)(a)] − 4·[(2)(9)−(1)(−2)] + 2a·[(2)(a)−(−3)(−2)].",
   "Desarrollo cada menor: = −1·(−27−a) − 4·(18+2) + 2a·(2a−6) = (27 + a) − 4·(20) + (4a² − 12a) = 27 + a − 80 + 4a² − 12a = <code>4a² − 11a − 53</code>.",
   "Igualo a cero (condición de no inversibilidad): <code>4a² − 11a − 53 = 0</code>. Resuelvo la cuadrática: a = (11 ± √(121+848))/8 = (11 ± √969)/8.",
   "Como √969 ≈ 31,13: <code>a ≈ 5,27</code> o <code>a ≈ −2,52</code>. Para esos valores det(A)=0 y la matriz NO admite inversa."
  ],
  "resultado": "A) x = 2, y = 5, z = 3. B) La matriz no tiene inversa cuando 4a²−11a−53=0, es decir a = (11 ± √969)/8 ≈ 5,27 o ≈ −2,52.",
  "verificar": "A) Verificado: det=95≠0 y (2,5,3) satisface las tres ecuaciones. B) det(A)=4a²−11a−53 comprobado evaluando (a=0→−53, a=1→4−11−53=−60). ATENCIÓN: el discriminante 969 no es cuadrado perfecto, así que los valores de 'a' son IRRACIONALES; es inusual en un final (suele dar entero), conviene revisar la transcripción de la matriz por si algún signo/coeficiente difiere, pero con los datos dados el resultado es el indicado. Error típico: equivocar el signo del cofactor central (el término de 4 va restando) o el producto de la diagonal en el menor de 2a."
 },
 {
  "id": "f1812-e5",
  "guia": "Final 18-12-2024",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Euclides (34 y 510) + Pequeño Teorema de Fermat",
  "enunciado": "B) i) Indagar mediante el algoritmo de Euclides si 34 y 510 son coprimos. ii) Explicar en qué consiste el Pequeño Teorema de Fermat.",
  "idea": "i) Se reconoce por 'coprimos mediante Euclides': dos números son coprimos si su MCD es 1; se aplica el algoritmo de divisiones sucesivas hasta resto 0 y el último resto no nulo es el MCD. Acá 34 divide exacto a 510, así que Euclides termina en un solo paso. ii) Se pide enunciar el Pequeño Teorema de Fermat, que es el caso particular del Teorema de Euler cuando el módulo es primo (φ(p)=p−1).",
  "pasos": [
   "<b>i) Aplico el algoritmo de Euclides a 510 y 34:</b> divido el mayor por el menor: 510 ÷ 34.",
   "<code>510 = 15·34 + 0</code>: el cociente es 15 y el resto es 0 en el primer paso (34·15=510 exacto).",
   "Cuando el resto es 0, el MCD es el último divisor usado, es decir el último resto no nulo, que aquí es 34: <code>MCD(34, 510) = 34</code>.",
   "Como el MCD es 34 (≠1), los números NO son coprimos. De hecho <code>510 = 15·34</code>, o sea 34 divide a 510 (comparten el factor 34).",
   "<b>ii) Pequeño Teorema de Fermat:</b> si p es primo y a es un entero no divisible por p (equivalente a mcd(a,p)=1), entonces <code>a^(p−1) ≡ 1 (mód p)</code>.",
   "Forma equivalente válida para todo entero a (sin la condición de coprimalidad): <code>aᵖ ≡ a (mód p)</code>.",
   "Es un caso particular del Teorema de Euler: cuando n=p es primo, φ(p)=p−1, y a^φ(n) ≡ 1 se convierte en a^(p−1) ≡ 1.",
   "Aplicación: se usa en tests de primalidad (Fermat) y en la aritmética modular que sustenta la encriptación asimétrica (RSA)."
  ],
  "resultado": "i) MCD(34,510)=34, por lo tanto NO son coprimos (34 divide a 510). ii) Pequeño Teorema de Fermat: si p es primo y mcd(a,p)=1, entonces a^(p−1) ≡ 1 (mód p).",
  "verificar": "Verificado: 510 = 15·34 exacto, mcd=34, no coprimos. El algoritmo de Euclides termina en un solo paso porque 34 | 510. Fermat enunciado correctamente como caso particular de Euler. Error típico: confundir el enunciado a^(p−1)≡1 (que exige mcd(a,p)=1) con aᵖ≡a (que vale para todo a), o pedir que p sea primo y olvidarlo."
 },
 {
  "id": "fjul24-e1",
  "guia": "Final julio 2024",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Códigos IATA (combinatoria) + PIM 7ⁿ+1 divisible por 8",
  "enunciado": "a) IATA asigna a cada aeropuerto un código de tres letras (EZE, BCN…). ¿Cuántos códigos distintos se podrían asignar usando sólo 18 letras del alfabeto? b) Demostrar por el PIM que P(n): 7ⁿ+1 es divisible por 8 (n = 2i−1).",
  "idea": "a) Se reconoce por dos señales: <b>el orden importa</b> (EZE ≠ EEZ) y <b>se puede repetir</b> (podría existir un código AAA), así que es una <b>variación con repetición</b>: <code>18</code> opciones en cada una de las <code>3</code> posiciones, dando <code>18³</code>. b) La pista <code>n=2i−1</code> te avisa de que la propiedad vale sólo para los <b>impares</b>; por eso NO se hace inducción sobre n corrido sino sobre <code>i=1,2,3,…</code>, saltando de un impar al siguiente (de <code>2i−1</code> a <code>2i+1</code>). El motor del paso es factorizar un 8 usando la hipótesis.",
  "pasos": [
   "a) Modelo: cada posición del código es una casilla independiente. Por el principio de multiplicación, si la 1ª casilla tiene 18 opciones, la 2ª otras 18 y la 3ª otras 18 (se permite repetir), el total es el producto: <code>18·18·18 = 18³</code>.",
   "a) Cálculo: <code>18³ = 18·18·18 = 324·18 = 5832</code> códigos distintos. (Interpretación: alcanzan de sobra para muchísimos aeropuertos.)",
   "b) Traduzco el enunciado: para cada <code>i∈ℕ</code>, la expresión <code>n=2i−1</code> genera los impares (i=1→n=1, i=2→n=3, i=3→n=5, …). Entonces defino la propiedad sobre i: <code>Q(i): 8 | 7^(2i−1)+1</code>, y hago inducción sobre i.",
   "b) <b>Caso base i=1</b> (es decir n=1): <code>7¹+1 = 7+1 = 8 = 8·1</code>. Como 8 divide a 8, <code>Q(1)</code> es verdadera. ✔",
   "b) <b>Hipótesis inductiva (H)</b>: supongo que <code>Q(i)</code> vale, o sea <code>7^(2i−1)+1 = 8k</code> para algún <code>k∈ℤ</code>. De aquí despejo la forma que voy a usar: <code>7^(2i−1) = 8k−1</code>.",
   "b) <b>Tesis (T)</b>: debo probar <code>Q(i+1)</code>, es decir <code>8 | 7^(2(i+1)−1)+1</code>. El exponente se simplifica: <code>2(i+1)−1 = 2i+1</code>, así que hay que ver que <code>7^(2i+1)+1</code> es múltiplo de 8.",
   "b) <b>Paso inductivo</b>: conecto el nuevo exponente con el viejo sacando <code>7²</code> de factor (subo de golpe dos unidades el exponente porque salteo el par intermedio): <code>7^(2i+1) = 7²·7^(2i−1) = 49·7^(2i−1)</code>. Reemplazo <code>7^(2i−1)=8k−1</code> de la hipótesis.",
   "b) Opero: <code>7^(2i+1)+1 = 49·(8k−1)+1 = 392k − 49 + 1 = 392k − 48</code>. Factorizo 8: <code>392k − 48 = 8·(49k − 6)</code>.",
   "b) Como <code>49k−6 ∈ ℤ</code>, la expresión es un múltiplo de 8, luego <code>Q(i+1)</code> es verdadera. Por el <b>PIM</b>, <code>Q(i)</code> vale para todo <code>i∈ℕ</code>, es decir <code>7ⁿ+1</code> es divisible por 8 para todo n impar."
  ],
  "resultado": "a) 5832 códigos posibles. b) Queda demostrado por inducción que 7ⁿ+1 es divisible por 8 para todo n impar (n=2i−1).",
  "verificar": "a) <code>18³=5832</code> ✔. b) Chequeo los primeros impares: <code>7¹+1=8=8·1</code>, <code>7³+1=344=8·43</code>, <code>7⁵+1=16808=8·2101</code>, todos divisibles por 8 ✔. <b>Error típico</b>: probar sólo con n par o hacer inducción de n en n; para n par NO es divisible (p.ej. <code>7²+1=50</code> no es múltiplo de 8), por eso el enunciado restringe a <code>n=2i−1</code> y la inducción es sobre i saltando de 2 en 2 en el exponente."
 },
 {
  "id": "fjul24-e2",
  "guia": "Final julio 2024",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "Región del plano por sistema de inecuaciones",
  "enunciado": "a) Hallar (analítica y gráficamente) la región del plano según: { x ≥ −2 ; y+1 ≥ 0 ; 2x+y ≤ 3 ; y−2x > −1 }. b) Si la región es acotada, indicar los vértices.",
  "idea": "Cada inecuación lineal define un <b>semiplano</b> (todo lo que queda a un lado de una recta), y la región buscada es la <b>intersección</b> de los cuatro. El método es siempre el mismo: (1) convertir cada inecuación en su recta frontera (cambiando el signo por <code>=</code>), (2) usar un <b>punto de prueba</b> para decidir de qué lado queda cada semiplano, y (3) hallar los <b>vértices</b> como intersección de las rectas que efectivamente bordean la región. Ojo con las desigualdades <b>estrictas</b> (&lt;, &gt;): esa frontera queda excluida (línea punteada).",
  "pasos": [
   "Escribo cada frontera y su lado. <code>L1: x=−2</code> (semiplano <code>x≥−2</code>, a la derecha). <code>L2: y=−1</code> (semiplano <code>y≥−1</code>, arriba). <code>L3: 2x+y=3</code> (semiplano <code>2x+y≤3</code>, abajo-izquierda). <code>L4: y=2x−1</code> (semiplano <code>y&gt;2x−1</code>, <b>ESTRICTO</b>, arriba de la recta).",
   "Uso un punto de prueba interior para confirmar orientaciones. Tomo <code>(−1,0)</code>: <code>x=−1≥−2</code> ✔; <code>y=0≥−1</code> ✔; <code>2(−1)+0=−2≤3</code> ✔; <code>0−2(−1)=2&gt;−1</code> ✔. Como cumple las cuatro, el <code>(−1,0)</code> está dentro y las orientaciones elegidas son correctas.",
   "Busco los vértices intersecando de a pares las fronteras que bordean la región (resuelvo cada sistema 2×2). <code>L1∩L2</code>: <code>x=−2, y=−1</code> ⇒ <b>(−2,−1)</b>. <code>L1∩L3</code>: con <code>x=−2</code>, de <code>2x+y=3</code> sale <code>y=3−2(−2)=7</code> ⇒ <b>(−2,7)</b>.",
   "Sigo con los otros dos vértices. <code>L2∩L4</code>: con <code>y=−1</code>, de <code>y=2x−1</code> sale <code>−1=2x−1</code> ⇒ <code>x=0</code> ⇒ <b>(0,−1)</b>. <code>L3∩L4</code>: sumo <code>2x+y=3</code> con <code>−2x+y=−1</code> ⇒ <code>2y=2</code> ⇒ <code>y=1</code>, y de ahí <code>x=1</code> ⇒ <b>(1,1)</b>.",
   "Uno los vértices en orden: la región es un <b>cuadrilátero</b> de vértices <code>(−2,−1)</code>, <code>(−2,7)</code>, <code>(1,1)</code> y <code>(0,−1)</code>. Al estar limitada por las cuatro rectas y no extenderse al infinito, es <b>acotada</b>.",
   "<b>Detalle fino de la desigualdad estricta</b>: como <code>y−2x&gt;−1</code> es estricta, el lado que apoya sobre <code>L4</code> (el segmento de <code>(0,−1)</code> a <code>(1,1)</code>) NO forma parte de la región. Ese borde se dibuja punteado y los dos vértices sobre L4 son puntos límite excluidos. Las otras tres desigualdades son con <code>≥</code> o <code>≤</code>, así que sus bordes sí se incluyen (línea llena)."
  ],
  "resultado": "La región es un cuadrilátero ACOTADO de vértices (−2,−1), (−2,7), (1,1) y (0,−1). Es acotada pero no cerrada: el lado que apoya sobre y=2x−1 queda excluido por ser la desigualdad estricta.",
  "verificar": "Pruebo puntos claramente interiores: <code>(−1,0)</code>, <code>(−2,3)</code>, <code>(0,0)</code> satisfacen las 4 condiciones ✔. <b>Error típico</b>: incluir el borde estricto. Los vértices sobre L4 —<code>(0,−1)</code> y <code>(1,1)</code>— cumplen <code>y−2x=−1</code> (igualdad), así que NO satisfacen <code>y−2x&gt;−1</code>: pertenecen a la frontera pero no a la región. Otro control útil: reemplazar el punto de prueba en cada inecuación por separado para no equivocar el lado del semiplano."
 },
 {
  "id": "fjul24-e3",
  "guia": "Final julio 2024",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Sistema 3×3 por Gauss-Jordan + conteo (examen de 5 preguntas)",
  "enunciado": "a) Resolver el sistema por Gauss o Gauss-Jordan: { y − 3/2 = z − ½x ; x − y + 4z = −3 ; −2z + y = 4 + x }. b) Un examen consta de 5 preguntas y se evalúa sobre 10. Cada pregunta debe ser un entero, valer como mínimo un punto, y hay una que se puntúa con 2: ¿de cuántas maneras se puede asignar el valor de cada pregunta?",
  "idea": "a) Antes de aplicar Gauss hay que <b>ordenar</b> cada ecuación a la forma estándar <code>ax+by+cz=d</code> y sacar las fracciones (multiplicar por 2 la primera). Luego se triangula la matriz ampliada con operaciones de fila hasta despejar z, y = y x hacia atrás. b) Se reconoce como <b>composición de un entero</b>: fijada la pregunta que vale 2, las otras 4 son enteros <code>≥1</code> que suman 8; con el cambio <code>yᵢ=xᵢ−1</code> se vuelve un problema de <b>combinaciones con repetición</b> (estrellas y barras).",
  "pasos": [
   "a) Ordeno cada ecuación. Ec.1: <code>y−3/2 = z−x/2</code>; paso todo a un lado y multiplico ×2: <code>x+2y−2z=3</code>. Ec.2 ya está: <code>x−y+4z=−3</code>. Ec.3: <code>−2z+y=4+x</code> ⇒ <code>−x+y−2z=4</code>.",
   "a) Armo la matriz ampliada (coeficientes | términos): <code>[1 2 −2 | 3 ; 1 −1 4 | −3 ; −1 1 −2 | 4]</code>. El objetivo es hacer ceros bajo la diagonal.",
   "a) Uso la fila 1 como pivote. <code>F2→F2−F1</code>: <code>[0 −3 6 | −6]</code>. <code>F3→F3+F1</code>: <code>[0 3 −4 | 7]</code>. Con esto ya hay ceros en la primera columna debajo del pivote.",
   "a) Normalizo y elimino en la 2ª columna. <code>F2→F2/(−3)</code>: <code>[0 1 −2 | 2]</code>. <code>F3→F3−3·F2</code>: <code>[0 0 2 | 1]</code>, que dice <code>2z=1</code> ⇒ <code>z=1/2</code>.",
   "a) <b>Sustitución hacia atrás</b>. De F2: <code>y−2z=2</code> ⇒ <code>y=2+2·(1/2)=3</code>. De F1: <code>x+2y−2z=3</code> ⇒ <code>x=3−2·3+2·(1/2)=3−6+1=−2</code>.",
   "a) Solución única: <code>x=−2, y=3, z=1/2</code>. Como la triangulación no dejó filas nulas ni contradicciones, el sistema es <b>compatible determinado</b>.",
   "b) Modelo del conteo. Una pregunta vale fijo 2 puntos; quedan <code>10−2=8</code> puntos para las otras 4 preguntas, cada una entera <code>≥1</code>: <code>x₁+x₂+x₃+x₄=8</code>. Para usar estrellas y barras necesito variables <code>≥0</code>, así que sustituyo <code>yᵢ=xᵢ−1</code>, con lo que <code>y₁+y₂+y₃+y₄=8−4=4</code>, <code>yᵢ≥0</code>.",
   "b) Combinaciones con repetición: número de soluciones <code>≥0</code> de <code>y₁+…+y₄=4</code> es <code>C(4+4−1, 4−1) = C(7,3) = 35</code>. (Nota: si la pregunta que vale 2 no estuviera prefijada sino que hubiera que elegirla, se multiplicaría por las posiciones; con el enunciado dado se toma fija.)"
  ],
  "resultado": "a) x=−2, y=3, z=1/2. b) 35 maneras de asignar los puntajes.",
  "verificar": "a) Reemplazo en las tres ecuaciones ordenadas: <code>x+2y−2z=−2+6−1=3</code> ✔; <code>x−y+4z=−2−3+2=−3</code> ✔; <code>−x+y−2z=2+3−1=4</code> ✔. Además <code>det</code> de la matriz de coeficientes es <code>−6≠0</code>, lo que confirma la solución única. b) <b>Error típico</b>: olvidar el <code>−1</code> por pregunta (el mínimo de 1 punto) o no restar los 2 puntos fijos. Control por otra vía: contar 4-tuplas enteras <code>≥1</code> que suman 8 da <code>35 = C(7,3)</code> ✔."
 },
 {
  "id": "fjul24-e4",
  "guia": "Final julio 2024",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Desencriptar clave con matriz inversa",
  "enunciado": "La profesora usó la matriz B para encriptar; la clave encriptada es −189; 35; −177; 31. Usando matrices y el diccionario del cuadro (A=1, B=2, …), hallar la clave original. Justificar. B = (−5 −6 ; 1 1).",
  "idea": "Este es el esquema clásico de <b>cifrado de Hill</b>: se encripta con <code>C = B·M</code>, donde M son los números del mensaje puestos en columnas de 2. Para <b>desencriptar</b> se despeja <code>M = B⁻¹·C</code>: hay que invertir B, agrupar el criptograma en vectores columna, multiplicar y traducir cada número resultante a letra con <code>A=1,…,Z=26</code>. Que <code>det(B)≠0</code> garantiza que B es inversible y el descifrado es posible y único.",
  "pasos": [
   "Calculo el determinante de B (para saber si es inversible y para la fórmula): <code>det(B) = (−5)·(1) − (−6)·(1) = −5+6 = 1</code>. Al ser <code>≠0</code>, B tiene inversa.",
   "Aplico la fórmula de la inversa 2×2: si <code>B=(a b ; c d)</code>, entonces <code>B⁻¹=(1/det)·(d −b ; −c a)</code>. Aquí <code>a=−5, b=−6, c=1, d=1</code>, así que <code>B⁻¹=(1/1)·(1 6 ; −1 −5) = (1 6 ; −1 −5)</code>.",
   "Agrupo el criptograma en vectores columna de 2 (respetando el orden dado): <code>v₁=(−189 ; 35)</code> y <code>v₂=(−177 ; 31)</code>. Cada uno dará un par de letras.",
   "Descifro el primer bloque: <code>M₁ = B⁻¹·v₁</code>. Fila 1: <code>1·(−189)+6·35 = −189+210 = 21</code>. Fila 2: <code>−1·(−189)−5·35 = 189−175 = 14</code>. Luego <code>M₁=(21 ; 14)</code>.",
   "Descifro el segundo bloque: <code>M₂ = B⁻¹·v₂</code>. Fila 1: <code>1·(−177)+6·31 = −177+186 = 9</code>. Fila 2: <code>−1·(−177)−5·31 = 177−155 = 22</code>. Luego <code>M₂=(9 ; 22)</code>.",
   "Traduzco los números a letras con el diccionario <code>A=1, B=2, …</code>: <code>21→U</code>, <code>14→N</code>, <code>9→I</code>, <code>22→V</code>. Leyendo en orden se arma la palabra <b>UNIV</b>."
  ],
  "resultado": "La clave original es UNIV (U=21, N=14, I=9, V=22).",
  "verificar": "Re-encripto para chequear (aplico <code>B</code> al mensaje recuperado). <code>B·(21;14)=(−5·21−6·14 ; 21+14)=(−105−84 ; 35)=(−189;35)</code> ✔. <code>B·(9;22)=(−5·9−6·22 ; 9+22)=(−45−132 ; 31)=(−177;31)</code> ✔. Además todos los números caen en el rango <code>1..26</code>, o sea son letras válidas (si diera 0 o &gt;26 habría error de agrupamiento o de inversa). <b>Error típico</b>: equivocar el orden de las columnas o usar <code>A=0</code> en lugar de <code>A=1</code>."
 },
 {
  "id": "fjul24-e5",
  "guia": "Final julio 2024",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "RSA: coprimalidad del exponente e con φ(n)",
  "enunciado": "En RSA: '…seleccionamos un número entero e, llamado exponente de encriptación, tal que 1 < e < φ(n) y coprimo con φ(n)'. ¿Qué significa que sea coprimo con φ(n)? ¿Qué significa φ(n)?",
  "idea": "Es un ítem <b>conceptual</b> de RSA, no de cálculo. Se reconoce porque pide 'qué significa': hay que definir la <b>función φ de Euler</b> (cuenta coprimos) y explicar por qué la condición <b>mcd(e, φ(n))=1</b> es imprescindible. La clave del argumento es que esa coprimalidad es exactamente lo que garantiza que exista el <b>inverso multiplicativo</b> <code>d</code> de e módulo <code>φ(n)</code>, es decir, la clave privada con la que se descifra.",
  "pasos": [
   "Defino <code>φ(n)</code> (función indicatriz o <b>totiente de Euler</b>): es la cantidad de enteros positivos <code>≤ n</code> que son coprimos con n (o sea con <code>mcd=1</code> respecto de n). Cuenta 'cuántos números por debajo de n no comparten factores con n'.",
   "Caso RSA: como <code>n=p·q</code> con p, q primos distintos, hay una fórmula cómoda: <code>φ(n)=(p−1)·(q−1)</code>. (Sale de descontar los múltiplos de p y de q entre 1 y n.)",
   "Explico 'e coprimo con φ(n)': significa <code>mcd(e, φ(n)) = 1</code>, es decir, e y <code>φ(n)</code> no comparten ningún factor primo en común.",
   "¿Por qué se exige eso? Porque para descifrar hace falta un entero <code>d</code> (la clave privada) tal que <code>e·d ≡ 1 (mód φ(n))</code>. Ese d es el <b>inverso multiplicativo</b> de e módulo <code>φ(n)</code>.",
   "Teorema de aritmética modular (con identidad de Bézout): <code>e</code> tiene inverso módulo <code>φ(n)</code> <b>si y sólo si</b> <code>mcd(e, φ(n))=1</code>. Sin coprimalidad NO existiría d y RSA no podría descifrar: por eso la condición es obligatoria, no un capricho.",
   "Encaje con el resto: la condición <code>1 &lt; e &lt; φ(n)</code> acota e a un rango útil; junto con la coprimalidad define un exponente público válido. Se cifra con <code>C ≡ Mᵉ (mód n)</code> y se descifra con <code>M ≡ Cᵈ (mód n)</code>; funciona por el <b>Teorema de Euler</b>, que aprovecha justamente que <code>e·d≡1 (mód φ(n))</code>. El par <code>(e,n)</code> es la clave pública y <code>(d,n)</code> la privada."
  ],
  "resultado": "φ(n) = cantidad de enteros de 1 a n coprimos con n (para n=p·q es (p−1)(q−1)). Que e sea coprimo con φ(n) (mcd=1) garantiza la existencia del inverso d = e⁻¹ mód φ(n), es decir, de la clave privada que permite descifrar. Es la condición matemática que hace que RSA sea reversible.",
  "verificar": "Consistencia teórica: el inverso modular existe ⇔ <code>mcd(e,φ(n))=1</code> (identidad de Bézout). <b>Ejemplo numérico</b>: <code>p=3, q=11</code> ⇒ <code>n=33</code>, <code>φ(33)=2·10=20</code>; con <code>e=3</code> (coprimo con 20) existe <code>d=7</code> porque <code>3·7=21≡1 (mód 20)</code> ✔. <b>Contraejemplo</b>: <code>e=4</code> tiene <code>mcd(4,20)=4≠1</code>, luego NO tiene inverso módulo 20 y no serviría como exponente. Error típico: confundir φ(n) con n, o pensar que cualquier e sirve."
 },
 {
  "id": "f2026a-e1",
  "guia": "Modelo 2026 — A",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Distribución de USB (combinaciones con repetición) + números múltiplos de 6",
  "enunciado": "a) En un curso de hardware se tienen 13 USB para repartir en cuatro mesas de trabajo diferentes. ¿De cuántas maneras podrían repartirse? ¿Y si en la primera mesa se colocan mínimamente 4? b) Con los dígitos 0,1,2,3,4,5,6,7, ¿cuántos números de 3 cifras sin repetir y múltiplos de 6 se pueden formar?",
  "idea": "a) Los 13 USB son <b>idénticos</b> (no distinguibles) y las 4 mesas son <b>distintas</b>: eso es reparto de objetos iguales en cajas diferentes, o sea <b>estrellas y barras</b> (combinaciones con repetición) resolviendo <code>x₁+x₂+x₃+x₄=13</code> con <code>xᵢ≥0</code>. Para el mínimo, se reservan 4 en la primera mesa y se reparte el resto. b) 'Múltiplo de 6' se descompone en dos criterios simultáneos: <b>par</b> (última cifra 0,2,4,6) <b>y</b> suma de cifras divisible por 3; se cuenta por casos según la última cifra, cuidando no repetir dígitos y que la primera cifra no sea 0.",
  "pasos": [
   "a) Planteo estrellas y barras: reparto 13 USB iguales en 4 mesas ⇒ soluciones enteras <code>≥0</code> de <code>x₁+x₂+x₃+x₄=13</code>. La fórmula es <code>C(objetos+cajas−1, cajas−1) = C(13+4−1, 4−1) = C(16,3)</code>.",
   "a) Calculo: <code>C(16,3) = (16·15·14)/(3·2·1) = 3360/6 = 560</code> maneras.",
   "a) Con la condición 'primera mesa <code>≥4</code>': fijo de entrada 4 USB en la mesa 1 (así garantizo el mínimo) y reparto los <code>13−4=9</code> restantes libremente entre las 4 mesas (la mesa 1 puede recibir más). Esto es <code>x₁'+x₂+x₃+x₄=9</code>, <code>≥0</code>.",
   "a) Calculo: <code>C(9+4−1, 4−1) = C(12,3) = (12·11·10)/6 = 1320/6 = 220</code> maneras.",
   "b) Traduzco 'múltiplo de 6' = par Y múltiplo de 3. Par ⇒ la <b>última cifra</b> es 0, 2, 4 o 6. Múltiplo de 3 ⇒ la <b>suma de las 3 cifras</b> es divisible por 3. Restricciones: dígitos del conjunto <code>{0,…,7}</code>, sin repetir, y primera cifra <code>≠0</code> (si no, no sería de 3 cifras).",
   "b) Cuento por casos según la última cifra. Para cada opción par fijada, elijo las otras dos cifras (distintas entre sí y de la última, con la primera ≠0) exigiendo que la <b>suma total sea múltiplo de 3</b>. Este filtro por clases de resto módulo 3 va dando, respectivamente, los subtotales de cada terminación.",
   "b) Desglose por última cifra: terminados en <b>0</b> → 14; en <b>2</b> → 15; en <b>4</b> → 12; en <b>6</b> → 13. Sumo: <code>14+15+12+13 = 54</code> números."
  ],
  "resultado": "a) 560 maneras de repartir; con mínimo 4 en la primera mesa, 220 maneras. b) 54 números de 3 cifras (sin repetir) múltiplos de 6.",
  "verificar": "a) <code>C(16,3)=560</code> y <code>C(12,3)=220</code> ✔. <b>Error típico</b>: tratar los USB como distinguibles (daría <code>4¹³</code>, que es otro problema) o olvidar restar los 4 fijos en el segundo caso. b) Control por conteo exhaustivo: hay <code>7·7·6=294</code> ternas válidas (primera ≠0, sin repetir); exactamente <code>54</code> resultan múltiplos de 6, coincidiendo con <code>14+15+12+13</code> ✔. Otro error típico: chequear sólo paridad y olvidar el criterio de múltiplo de 3, o permitir que la primera cifra sea 0."
 },
 {
  "id": "f2026a-e2",
  "guia": "Modelo 2026 — A",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: suma telescópica 1/(k(k+1)) = n/(n+1)",
  "enunciado": "Demostrar por inducción matemática que 1/(1·2)+1/(2·3)+1/(3·4)+…+1/(n(n+1)) = n/(n+1), ∀n∈ℕ.",
  "idea": "Es una <b>igualdad de sumatoria</b>: se demuestra por inducción sobre n con el esquema estándar (caso base, hipótesis, tesis, paso). El paso inductivo consiste en <b>sumar el término siguiente</b> (<code>k=n+1</code>) a la hipótesis y operar algebraicamente hasta llegar a la forma de la tesis. Conviene tener en cuenta la descomposición <code>1/(k(k+1))=1/k−1/(k+1)</code>, que revela el carácter <b>telescópico</b> (los términos se cancelan en cascada) y sirve de verificación independiente.",
  "pasos": [
   "<b>Caso base n=1</b>: lado izquierdo <code>= 1/(1·2) = 1/2</code>; lado derecho <code>= n/(n+1) = 1/(1+1) = 1/2</code>. Coinciden, así que la propiedad vale para n=1 ✔.",
   "<b>Hipótesis inductiva (H)</b>: supongo cierta la igualdad para n, es decir <code>1/(1·2)+1/(2·3)+…+1/(n(n+1)) = n/(n+1)</code>.",
   "<b>Tesis (T)</b>: quiero probarla para n+1, o sea <code>1/(1·2)+…+1/(n(n+1)) + 1/((n+1)(n+2)) = (n+1)/(n+2)</code>. (Reemplacé n por n+1 en ambos lados.)",
   "<b>Paso inductivo</b>: arranco del lado izquierdo de T. Los primeros n términos son exactamente la suma de la hipótesis, así que los reemplazo por <code>n/(n+1)</code>: queda <code>n/(n+1) + 1/((n+1)(n+2))</code>.",
   "Saco común denominador <code>(n+1)(n+2)</code>: <code>= [n·(n+2) + 1] / ((n+1)(n+2))</code>. Desarrollo el numerador: <code>n·(n+2)+1 = n²+2n+1</code>.",
   "Reconozco el trinomio cuadrado perfecto <code>n²+2n+1 = (n+1)²</code>. Entonces <code>= (n+1)² / ((n+1)(n+2))</code>, y simplifico un factor <code>(n+1)</code>: <code>= (n+1)/(n+2)</code>, que es justo el lado derecho de T ✔.",
   "Como el caso base es verdadero y de la validez para n se deduce la validez para n+1, por el <b>Principio de Inducción Matemática</b> la igualdad vale para todo <code>n∈ℕ</code>."
  ],
  "resultado": "Queda demostrado por inducción que 1/(1·2)+1/(2·3)+…+1/(n(n+1)) = n/(n+1) para todo n natural.",
  "verificar": "Chequeos numéricos: <code>n=1→1/2</code>; <code>n=2→1/2+1/6=4/6=2/3</code> y <code>n/(n+1)=2/3</code> ✔; <code>n=3→2/3+1/12=9/12=3/4</code> ✔; <code>n=5→5/6</code> ✔. <b>Verificación conceptual</b>: la descomposición telescópica <code>1/(k(k+1))=1/k−1/(k+1)</code> hace que la suma colapse a <code>1−1/(n+1)=n/(n+1)</code>, confirmando el resultado. Error típico: en el paso, no reemplazar los primeros n términos por la hipótesis (usar la H es el corazón de la inducción)."
 },
 {
  "id": "f2026a-e3",
  "guia": "Modelo 2026 — A",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Ecuación matricial con incógnita X=(a;b) + producto ½·Aᵀ·D",
  "enunciado": "a) Hallar X=(a;b) tal que (2 1;2 0;0 2)·X + (2 1;2 0;0 2)·X = (6;5;8). b) Considerando A y D, realizar ½·Aᵀ·D e indicar la Dim del resultado. A=(1 1 3;4 −1 0;0 1 2), D=(1;2;−1).",
  "idea": "a) El primer miembro es la <b>misma matriz por X sumada dos veces</b>, o sea <code>2·(M·X)</code> con <code>M=(2 1;2 0;0 2)</code> de tamaño 3×2 y <code>X</code> de 2×1: al hacer el producto queda un <b>sistema de 3 ecuaciones con 2 incógnitas</b> (a,b), es decir sobredeterminado; hay que verificar si es compatible. b) Es cálculo matricial directo: se <b>transpone</b> A (3×3), se multiplica por D (3×1) dando un vector 3×1, y se escala por ½. La dimensión sale de la regla <code>(m×p)·(p×q)=m×q</code>.",
  "pasos": [
   "a) Sumo los dos términos idénticos: <code>M·X + M·X = 2·(M·X) = (6;5;8)</code>. Divido por 2 ambos lados: <code>M·X = (3 ; 5/2 ; 4)</code>.",
   "a) Hago el producto con <code>X=(a;b)</code>: <code>(2 1;2 0;0 2)·(a;b) = (2a+1b ; 2a+0b ; 0a+2b) = (2a+b ; 2a ; 2b)</code>. Igualo componente a componente con <code>(3 ; 5/2 ; 4)</code>.",
   "a) Uso las filas más simples primero. Fila 2: <code>2a = 5/2</code> ⇒ <code>a = 5/4</code>. Fila 3: <code>2b = 4</code> ⇒ <code>b = 2</code>.",
   "a) Verifico con la fila 1 (que actúa de condición de consistencia): <code>2a+b = 2·(5/4)+2 = 5/2+2 = 9/2 = 4,5</code>, pero debía valer 3. Como <code>9/2 ≠ 3</code>, las tres ecuaciones no pueden cumplirse a la vez ⇒ el sistema es <b>INCOMPATIBLE</b>: no existe <code>X=(a;b)</code> que lo satisfaga.",
   "b) Transpongo A (intercambio filas por columnas): de <code>A=(1 1 3;4 −1 0;0 1 2)</code> resulta <code>Aᵀ=(1 4 0 ; 1 −1 1 ; 3 0 2)</code>.",
   "b) Multiplico <code>Aᵀ·D</code> (fila de Aᵀ por la columna D). Fila 1: <code>1·1+4·2+0·(−1)=1+8+0=9</code>. Fila 2: <code>1·1+(−1)·2+1·(−1)=1−2−1=−2</code>. Fila 3: <code>3·1+0·2+2·(−1)=3+0−2=1</code>. Luego <code>Aᵀ·D=(9 ; −2 ; 1)</code>.",
   "b) Escalo por ½: <code>½·Aᵀ·D = (9/2 ; −1 ; 1/2)</code>. La dimensión: <code>(3×3)·(3×1)=3×1</code>, y multiplicar por un escalar no la cambia, así que el resultado es una <b>matriz columna 3×1</b>."
  ],
  "resultado": "a) El sistema es INCOMPATIBLE: no existe X=(a;b) que verifique las tres igualdades (las filas 2 y 3 fijan a=5/4 y b=2, pero la fila 1 no se satisface). b) ½·Aᵀ·D = (9/2 ; −1 ; 1/2), de dimensión 3×1.",
  "verificar": "a) Es un sistema 3×2 (sobredeterminado): con dos incógnitas quedan determinadas por 2 filas y la tercera actúa de condición de consistencia, que aquí falla (<code>4,5≠3</code>) ⇒ incompatible. <b>Ojo con el enunciado</b>: si el objetivo era una solución única, el término independiente de la fila 1 debería haber sido <code>9/2</code> (o plantearse con otra matriz). b) Dimensión: <code>(3×3)·(3×1)=3×1</code> ✔; el producto recomputado da <code>(9;−2;1)</code> y su mitad <code>(9/2;−1;1/2)</code> ✔. Error típico: transponer mal A o multiplicar D por A sin transponer."
 },
 {
  "id": "f2026a-e4",
  "guia": "Modelo 2026 — A",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Precios de tres licencias: sistema 3×3",
  "enunciado": "Por la licencia de tres software se pagó en total $290.000. El costo de dos licencias del primero equipara el de tres del segundo. El costo del tercero es la mitad del costo del primero y el segundo juntos, menos $10.000. Plantear como sistema, escribir la matriz ampliada y resolver por Gauss, Gauss-Jordan o determinantes.",
  "idea": "Es un <b>problema de planteo</b> que se resuelve con un sistema lineal 3×3. La técnica: nombrar variables <code>x, y, z</code> = precios del 1°, 2° y 3° software, <b>traducir cada frase</b> a una ecuación lineal (cuidando 'equipara/equivale' = igualdad y 'menos $10.000' como resta), armar la matriz ampliada y resolver por Gauss-Jordan, verificando al final con el determinante.",
  "pasos": [
   "Defino variables: <code>x</code>=precio del 1° software, <code>y</code>=precio del 2°, <code>z</code>=precio del 3°.",
   "Traduzco cada frase a una ecuación. Total: <code>(1) x+y+z=290000</code>. 'Dos del primero equiparan tres del segundo': <code>2x=3y</code> ⇒ <code>(2) 2x−3y=0</code>. 'El tercero es la mitad del primero y el segundo juntos, menos 10000': <code>z=(x+y)/2−10000</code>; multiplico ×2 y ordeno ⇒ <code>2z=x+y−20000</code> ⇒ <code>(3) x+y−2z=20000</code>.",
   "Armo la matriz ampliada: <code>[1 1 1 | 290000 ; 2 −3 0 | 0 ; 1 1 −2 | 20000]</code>.",
   "Elimino en la primera columna usando F1 como pivote. <code>F2→F2−2F1</code>: <code>[0 −5 −2 | −580000]</code>. <code>F3→F3−F1</code>: <code>[0 0 −3 | −270000]</code>, que da <code>−3z=−270000</code> ⇒ <code>z=90000</code>.",
   "Sustituyo hacia atrás en F2: <code>−5y−2z=−580000</code> ⇒ <code>−5y=−580000+2·90000=−580000+180000=−400000</code> ⇒ <code>y=80000</code>.",
   "Sustituyo en F1: <code>x=290000−y−z=290000−80000−90000=120000</code>. Precios: <code>x=120000, y=80000, z=90000</code>."
  ],
  "resultado": "El primer software cuesta $120.000, el segundo $80.000 y el tercero $90.000.",
  "verificar": "Reviso las tres condiciones del enunciado con los valores hallados. Suma: <code>120000+80000+90000=290000</code> ✔. Dos del primero vs. tres del segundo: <code>2·120000=240000=3·80000</code> ✔. Tercero: <code>(120000+80000)/2−10000=100000−10000=90000</code> ✔. Además <code>det</code> de la matriz de coeficientes es <code>15≠0</code> ⇒ solución única (compatible determinado). <b>Error típico</b>: escribir la ecuación (3) sin sacar la fracción o restar 10000 del lado equivocado."
 },
 {
  "id": "f2026a-e5",
  "guia": "Modelo 2026 — A",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Matriz inversa 3×3 (con verificación A·A⁻¹=I)",
  "enunciado": "Si la matriz A admite inversa, hallarla. Justificar y verificar. A = (1 2 −2 ; 0 −1 3 ; −2 2 1).",
  "idea": "Una matriz A es <b>inversible ⇔ det(A)≠0</b>: por eso lo primero es calcular el determinante. Si no es nulo, se usa el método de la <b>adjunta</b>: se calculan los cofactores <code>Cᵢⱼ</code>, se forma la matriz de cofactores, se la <b>transpone</b> para obtener la adjunta <code>adj(A)</code>, y finalmente <code>A⁻¹ = adj(A)/det(A)</code>. Se cierra verificando que <code>A·A⁻¹=I</code>.",
  "pasos": [
   "Calculo <code>det(A)</code> desarrollando por la primera fila: <code>1·[(−1)(1)−(3)(2)] − 2·[(0)(1)−(3)(−2)] + (−2)·[(0)(2)−(−1)(−2)]</code>. Cada corchete es un menor 2×2.",
   "Opero los menores: <code>1·(−1−6) − 2·(0+6) + (−2)·(0−2) = 1·(−7) − 2·(6) − 2·(−2) = −7 −12 +4 = −15</code>. Como <code>det=−15≠0</code>, A admite inversa.",
   "Calculo los <b>cofactores</b> <code>Cᵢⱼ = (−1)^{i+j}·menor</code>: <code>C11=−7, C12=−6, C13=−2 ; C21=−6, C22=−3, C23=−6 ; C31=4, C32=−3, C33=−1</code>.",
   "Formo la <b>adjunta</b> transponiendo la matriz de cofactores (fila i de cofactores pasa a columna i): <code>adj(A) = (−7 −6 4 ; −6 −3 −3 ; −2 −6 −1)</code>.",
   "Aplico <code>A⁻¹ = adj(A)/det(A) = adj(A)/(−15)</code>: divido cada entrada de la adjunta por <code>−15</code> (los signos se invierten porque el divisor es negativo).",
   "Resultado: <code>A⁻¹ = ( 7/15  2/5  −4/15 ; 2/5  1/5  1/5 ; 2/15  2/5  1/15 )</code>. (Por ejemplo <code>−7/−15=7/15</code>, <code>4/−15=−4/15</code>, <code>−6/−15=2/5</code>, <code>−3/−15=1/5</code>.)"
  ],
  "resultado": "A es inversible (det=−15). A⁻¹ = ( 7/15  2/5  −4/15 ; 2/5  1/5  1/5 ; 2/15  2/5  1/15 ).",
  "verificar": "Compruebo <code>A·A⁻¹=I₃</code>. Elemento (1,1): <code>1·7/15+2·2/5+(−2)·2/15 = 7/15+12/15−4/15 = 15/15 = 1</code> ✔; los elementos fuera de la diagonal dan 0 (por ejemplo la fila 1 por la columna 2 cancela). <code>det=−15≠0</code> confirma la inversibilidad. <b>Errores típicos</b>: olvidar el signo <code>(−1)^{i+j}</code> en algún cofactor, o no transponer la matriz de cofactores antes de dividir por el determinante."
 },
 {
  "id": "f2026b-e1",
  "guia": "Modelo 2026 — B",
  "unidad": "Ej. 1",
  "num": "Ejercicio 1",
  "titulo": "Permutaciones (familia en un banco) + Principio del Palomar",
  "enunciado": "a) Una familia (los padres y tres hijos) va a una peña y se sientan en un banco ocupando cinco lugares consecutivos. ¿De cuántas maneras distintas pueden sentarse? ¿Y si se sientan en una mesa rectangular? b) ¿Cuántas personas debe haber en una fiesta para asegurar que al menos dos cumplan años el mismo día de la semana (independientemente de la fecha)?",
  "idea": "a) Sentar 5 personas distintas en 5 lugares donde <b>el orden importa y no hay repetición</b> es una <b>permutación</b>: <code>5!</code>. En una mesa rectangular los asientos siguen siendo posiciones distinguibles (hay cabeceras y lados), así que también es <code>5!</code>; sólo si se interpretara como disposición <b>circular</b> (importa únicamente el orden relativo) sería <code>(5−1)!</code>. b) Es <b>Principio del Palomar</b>: hay 7 'casilleros' (los días de la semana) y para <b>asegurar</b> una coincidencia se necesita un objeto más que casilleros, o sea <code>7+1</code>.",
  "pasos": [
   "a) Banco (fila de 5 lugares): las 5 personas ocupan 5 posiciones distinguibles, sin repetir. Es la permutación de 5 elementos: <code>P₅ = 5! = 5·4·3·2·1 = 120</code> maneras.",
   "a) Mesa rectangular: los asientos de una mesa rectangular también son posiciones fijas y distinguibles (las cabeceras y los costados no son intercambiables), así que igualmente hay <code>5! = 120</code> formas. <b>Aclaración</b>: si el criterio del curso fuera 'mesa como ronda' (sólo cuenta quién está al lado de quién, no la orientación), se fija una persona de referencia y se ordenan las otras 4: <code>(5−1)! = 4! = 24</code>.",
   "b) Identifico los 'casilleros' (palomares): son los <b>7 días de la semana</b> (lunes…domingo).",
   "b) Aplico el Principio del Palomar. Con 7 personas es posible (en el peor caso) que cada una caiga en un día distinto, sin ninguna coincidencia. Para <b>garantizar</b> que dos coincidan, hace falta una persona más que días.",
   "b) Por lo tanto se necesitan <code>7+1 = 8</code> personas: con 8, por más repartidas que estén, al menos dos comparten día de la semana."
  ],
  "resultado": "a) En el banco: 120 maneras (5!). En la mesa rectangular: 120 maneras (asientos distinguibles); si se la tomara como disposición circular, 24 maneras (4!). b) 8 personas garantizan que al menos dos cumplan el mismo día de la semana.",
  "verificar": "a) <code>5!=120</code> y <code>4!=24</code> ✔. La respuesta de la mesa depende del criterio (rectangular con asientos fijos = 120; ronda/circular = 24): conviene aclarar cuál usa la cátedra. b) Palomar con 7 días: con 7 personas puede no haber coincidencia (contraejemplo con una por día), pero con 8 es inevitable, ya que <code>⌈8/7⌉=2</code> ✔. <b>Error típico</b>: responder 7 (que sólo llena los casilleros sin forzar la coincidencia)."
 },
 {
  "id": "f2026b-e2",
  "guia": "Modelo 2026 — B",
  "unidad": "Ej. 2",
  "num": "Ejercicio 2",
  "titulo": "PIM: 6ⁿ − 1 divisible por 5",
  "enunciado": "Demostrar por inducción matemática que 6ⁿ − 1 es divisible por 5, ∀n∈ℕ.",
  "idea": "Es una <b>propiedad de divisibilidad</b> que se prueba por inducción sobre n. Esquema estándar: caso base <code>n=1</code>; hipótesis <code>6ⁿ−1=5k</code>; y en el paso inductivo se escribe <code>6^(n+1)−1</code> en función de <code>6ⁿ</code> (multiplicando por 6) y se usa la hipótesis para <b>factorizar un 5</b>. El truco recurrente es despejar <code>6ⁿ=5k+1</code> de la hipótesis y sustituir.",
  "pasos": [
   "<b>Caso base n=1</b>: <code>6¹−1 = 6−1 = 5 = 5·1</code>. Como 5 divide a 5, la propiedad vale para n=1 ✔.",
   "<b>Hipótesis inductiva (H)</b>: supongo <code>6ⁿ−1 = 5k</code> para algún <code>k∈ℤ</code>. Despejo la forma útil: <code>6ⁿ = 5k+1</code>.",
   "<b>Tesis (T)</b>: quiero probar <code>5 | 6^(n+1)−1</code>.",
   "<b>Paso inductivo</b>: escribo el nuevo caso en función del anterior sacando un 6: <code>6^(n+1)−1 = 6·6ⁿ − 1</code>. Sustituyo <code>6ⁿ=5k+1</code> de la hipótesis: <code>= 6·(5k+1) − 1 = 30k + 6 − 1 = 30k + 5</code>.",
   "Factorizo 5: <code>30k + 5 = 5·(6k+1)</code>. Como <code>6k+1 ∈ ℤ</code>, <code>6^(n+1)−1</code> es múltiplo de 5 ✔.",
   "Verificado el caso base y el paso, por el <b>Principio de Inducción Matemática</b> concluyo que <code>6ⁿ−1</code> es divisible por 5 para todo <code>n∈ℕ</code>."
  ],
  "resultado": "Queda demostrado por inducción que 6ⁿ−1 es divisible por 5 para todo n natural.",
  "verificar": "Chequeos numéricos: <code>n=1→5</code>; <code>n=2→35=5·7</code>; <code>n=3→215=5·43</code>; <code>n=4→1295=5·259</code>, todos múltiplos de 5 ✔. <b>Idea de fondo (verificación modular)</b>: como <code>6≡1 (mód 5)</code>, entonces <code>6ⁿ≡1ⁿ=1</code> y por tanto <code>6ⁿ−1≡0 (mód 5)</code>, lo que confirma el resultado. Error típico: en el paso, no sustituir <code>6ⁿ</code> por <code>5k+1</code> (sin usar la hipótesis la inducción no cierra)."
 },
 {
  "id": "f2026b-e3",
  "guia": "Modelo 2026 — B",
  "unidad": "Ej. 3",
  "num": "Ejercicio 3",
  "titulo": "Lógica proposicional: valores de verdad y traducción coloquial",
  "enunciado": "a) Sabiendo que p es verdadera, q es falsa y r es falsa, indicar el valor de verdad de: i) ¬r ∨ (p∧q) ; ii) (p∨q) → (¬r) ; iii) ¬(p∨q) ∨ q. b) Expresar en lenguaje coloquial siendo p: ayer fue martes, q: hoy hay parcial, r: estudié mucho. i) (p∧q)→r ; ii) ¬p ∨ (q∧¬r).",
  "idea": "a) Se <b>evalúan</b> los conectivos reemplazando <code>p=V, q=F, r=F</code> y respetando la <b>precedencia</b>: primero <code>¬</code>, luego <code>∧</code>, luego <code>∨</code>, y por último <code>→</code>. Clave a recordar: el condicional <code>A→B</code> es <b>falso sólo</b> cuando A es V y B es F (en todo otro caso es V). b) Se <b>traduce</b> cada fórmula a una oración castellana con el diccionario <code>∧='y'</code>, <code>∨='o'</code>, <code>¬='no'</code>, <code>→='si… entonces…'</code>.",
  "pasos": [
   "a-i) <code>¬r ∨ (p∧q)</code>: primero las negaciones y conjunciones. <code>¬r = ¬F = V</code>; <code>(p∧q) = V∧F = F</code>. Ahora la disyunción: <code>V ∨ F = V</code>. Resultado: <b>VERDADERO</b>.",
   "a-ii) <code>(p∨q) → (¬r)</code>: evalúo antecedente y consecuente. <code>(p∨q) = V∨F = V</code>; <code>¬r = V</code>. Condicional: <code>V → V = V</code>. Resultado: <b>VERDADERO</b>.",
   "a-iii) <code>¬(p∨q) ∨ q</code>: <code>(p∨q)=V</code> ⇒ <code>¬(p∨q)=F</code>; y <code>q=F</code>. Disyunción: <code>F ∨ F = F</code>. Resultado: <b>FALSO</b>.",
   "b-i) <code>(p∧q)→r</code>: traduzco antecedente 'p y q' y consecuente 'r'. Queda: <b>'Si ayer fue martes y hoy hay parcial, entonces estudié mucho.'</b>",
   "b-ii) <code>¬p ∨ (q∧¬r)</code>: <code>¬p</code>='ayer no fue martes', <code>(q∧¬r)</code>='hoy hay parcial y no estudié mucho', unidos por 'o'. Queda: <b>'Ayer no fue martes, o bien hoy hay parcial y no estudié mucho.'</b>"
  ],
  "resultado": "a) i) V ; ii) V ; iii) F. b) i) 'Si ayer fue martes y hoy hay parcial, entonces estudié mucho.' ii) 'Ayer no fue martes, o (hoy hay parcial y no estudié mucho).'",
  "verificar": "Reevalúo con <code>p=V, q=F, r=F</code>: i) <code>V∨F=V</code> ✔; ii) <code>V→V=V</code> ✔; iii) <code>F∨F=F</code> ✔. <b>Control del condicional</b>: <code>A→B</code> sólo sería falso con antecedente V y consecuente F; en ii) el consecuente <code>¬r=V</code>, así que no puede ser falso. <b>Errores típicos</b>: aplicar mal la precedencia (evaluar <code>∨</code> antes que <code>∧</code>) o poner el paréntesis del <code>¬</code> en el lugar equivocado (no es lo mismo <code>¬(p∨q)</code> que <code>¬p∨q</code>)."
 },
 {
  "id": "f2026b-e4",
  "guia": "Modelo 2026 — B",
  "unidad": "Ej. 4",
  "num": "Ejercicio 4",
  "titulo": "Precios de procesador, disco y mother: sistema 3×3",
  "enunciado": "Por la compra de un procesador, un disco sólido y una mother se pagan $95.000. El precio de 4 discos iguala al de un procesador. El precio de 6 mother equivale al de un procesador más 4 discos. Plantear como sistema, escribir la matriz ampliada y resolver por Gauss, Gauss-Jordan o determinantes.",
  "idea": "Problema de planteo con sistema lineal 3×3. Método: nombrar <code>x, y, z</code> = precios de procesador, disco y mother, <b>traducir cada condición</b> a una ecuación (interpretando 'iguala'/'equivale' como igualdad), armar la matriz ampliada y resolver por Gauss-Jordan, controlando con el determinante que la solución sea única.",
  "pasos": [
   "Defino variables: <code>x</code>=precio del procesador, <code>y</code>=precio del disco sólido, <code>z</code>=precio de la mother.",
   "Traduzco cada frase. Total pagado: <code>(1) x+y+z=95000</code>. '4 discos igualan a un procesador': <code>4y=x</code> ⇒ <code>(2) x−4y=0</code>. '6 mother equivalen a un procesador más 4 discos': <code>6z=x+4y</code> ⇒ <code>(3) x+4y−6z=0</code>.",
   "Armo la matriz ampliada: <code>[1 1 1 | 95000 ; 1 −4 0 | 0 ; 1 4 −6 | 0]</code>.",
   "Elimino en la primera columna con F1 de pivote. <code>F2→F2−F1</code>: <code>[0 −5 −1 | −95000]</code>. <code>F3→F3−F1</code>: <code>[0 3 −7 | −95000]</code>.",
   "Elimino la 2ª columna en F3 combinando con F2. <code>F3→F3+(3/5)F2</code>: en la 3ª columna <code>−7+(3/5)(−1)=−7−3/5=−38/5</code>, y en el término independiente <code>−95000+(3/5)(−95000)=−95000−57000=−152000</code>. Queda <code>[0 0 −38/5 | −152000]</code> ⇒ <code>z=(−152000)/(−38/5)=152000·5/38=20000</code>.",
   "Sustituyo hacia atrás. F2: <code>−5y−z=−95000</code> ⇒ <code>−5y=−95000+20000=−75000</code> ⇒ <code>y=15000</code>. F1: <code>x=95000−y−z=95000−15000−20000=60000</code>."
  ],
  "resultado": "El procesador cuesta $60.000, el disco sólido $15.000 y la mother $20.000.",
  "verificar": "Chequeo las condiciones con los valores. Suma: <code>60000+15000+20000=95000</code> ✔. '4 discos = procesador': <code>4·15000=60000</code> ✔. '6 mother = procesador + 4 discos': <code>6·20000=120000</code> y <code>60000+4·15000=60000+60000=120000</code> ✔. Además <code>det</code> de la matriz de coeficientes es <code>38≠0</code> ⇒ solución única (compatible determinado). <b>Error típico</b>: escribir (2) como <code>x=4y</code> con el 4 en el lado equivocado, o confundir 'un procesador más 4 discos' con 'un procesador por 4 discos'."
 },
 {
  "id": "f2026b-e5",
  "guia": "Modelo 2026 — B",
  "unidad": "Ej. 5",
  "num": "Ejercicio 5",
  "titulo": "Matriz inversa 3×3 con verificación",
  "enunciado": "Hallar la matriz inversa de A y verificar, siendo A = (1 1 1 ; 1 −1 2 ; −2 −1 3).",
  "idea": "A tiene inversa <b>si y sólo si det(A)≠0</b>, así que se empieza calculando el determinante. Si no es nulo, se usa el método de la <b>adjunta</b>: cofactores <code>Cᵢⱼ</code>, matriz de cofactores, su <b>transpuesta</b> (la adjunta) y <code>A⁻¹ = adj(A)/det(A)</code>. Se cierra verificando <code>A·A⁻¹=I</code>.",
  "pasos": [
   "Calculo <code>det(A)</code> por la primera fila: <code>1·[(−1)(3)−(2)(−1)] − 1·[(1)(3)−(2)(−2)] + 1·[(1)(−1)−(−1)(−2)]</code>. Cada corchete es un menor 2×2.",
   "Opero: <code>1·(−3+2) − 1·(3+4) + 1·(−1−2) = 1·(−1) − 1·(7) + 1·(−3) = −1 −7 −3 = −11</code>. Como <code>det=−11≠0</code>, existe <code>A⁻¹</code>.",
   "Calculo los <b>cofactores</b> <code>Cᵢⱼ=(−1)^{i+j}·menor</code>: <code>C11=−1, C12=−7, C13=−3 ; C21=−4, C22=5, C23=−1 ; C31=3, C32=−1, C33=−2</code>.",
   "Formo la <b>adjunta</b> transponiendo la matriz de cofactores: <code>adj(A) = (−1 −4 3 ; −7 5 −1 ; −3 −1 −2)</code>.",
   "Aplico <code>A⁻¹ = adj(A)/det(A) = adj(A)/(−11)</code>: divido cada entrada por <code>−11</code> (los signos se invierten al dividir por un negativo).",
   "Resultado: <code>A⁻¹ = ( 1/11  4/11  −3/11 ; 7/11  −5/11  1/11 ; 3/11  1/11  2/11 )</code>. (Por ejemplo <code>−1/−11=1/11</code>, <code>−4/−11=4/11</code>, <code>3/−11=−3/11</code>.)"
  ],
  "resultado": "A es inversible (det=−11). A⁻¹ = ( 1/11  4/11  −3/11 ; 7/11  −5/11  1/11 ; 3/11  1/11  2/11 ).",
  "verificar": "Compruebo <code>A·A⁻¹=I₃</code>. Elemento (1,1): <code>1·1/11+1·7/11+1·3/11 = 11/11 = 1</code> ✔. Elemento (1,2): <code>1·4/11+1·(−5/11)+1·1/11 = 0</code> ✔; el resto de los productos también arma la identidad. <code>det=−11≠0</code> confirma la inversibilidad. <b>Errores típicos</b>: olvidar el signo <code>(−1)^{i+j}</code> de algún cofactor, o dividir por el determinante sin haber transpuesto primero la matriz de cofactores."
 }
];
