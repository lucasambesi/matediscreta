/* Análisis de las clases en video de la Prof. Loidi — generado de los subtítulos reales */
const VIDEOS = [
 {
  "id": "v55sZtmn0CI",
  "clase": 1,
  "parte": 1,
  "fecha": "31/03",
  "unidad": "U1",
  "temaClase": "Lógica proposicional e introducción a Combinatoria",
  "resumen": "Tras una introducción administrativa, la clase repasa proposiciones, conectivos lógicos y construcción de tablas de verdad para negación, conjunción y disyunción, e inicia combinatoria.",
  "temas": [
   "Presentación de los temas del año (lógica, matrices, programación lineal, aritmética modular/encriptación)",
   "Qué es una proposición y qué no lo es (preguntas, órdenes, exclamaciones)",
   "Conectivos lógicos: negación, conjunción, disyunción, implicación",
   "Tablas de verdad de la negación y la conjunción",
   "Antecedente y consecuente",
   "Introducción a combinatoria: variaciones, permutaciones, combinaciones",
   "Diferencia clave: si importa o no el orden"
  ],
  "conceptos": [
   "Proposición: enunciado del que se puede decir si es verdadero o falso; preguntas, órdenes y exclamaciones no son proposiciones",
   "Negación (~p): invierte el valor de verdad",
   "Conjunción (p y q): solo verdadera cuando ambas son verdaderas",
   "Antecedente y consecuente: primera y segunda proposición, relevantes en la implicación",
   "Tabla de verdad: todas las combinaciones de valores de verdad",
   "Combinatoria: cuenta y organiza los elementos de un conjunto",
   "Permutaciones vs combinaciones: en combinaciones no importa el orden; en variaciones y permutaciones sí"
  ],
  "ejemplos": [
   "Proposiciones: 'la pizarra es blanca', '5 es mayor o igual que 3', '2+2=4'",
   "No-proposiciones: '¿la noche está fresca?', '¡qué lindo!', una orden"
  ],
  "paraFinal": "Sienta la base de lógica y combinatoria del Ejercicio 1 del final."
 },
 {
  "id": "PDl1cwRWds8",
  "clase": 1,
  "parte": 2,
  "fecha": "31/03",
  "unidad": "U1",
  "temaClase": "Lógica proposicional e introducción a Combinatoria",
  "resumen": "Completa las tablas de verdad de disyunción e implicación, resuelve una tabla combinada de tres proposiciones, y arranca combinatoria con variaciones y permutaciones.",
  "temas": [
   "Tabla de verdad de la disyunción (único caso falso: ambas falsas)",
   "Tabla de verdad de la implicación (único caso falso: V implica F)",
   "Resolución por partes de una expresión lógica de 3 proposiciones (8 filas)",
   "Traducción de expresiones lógicas al coloquial",
   "Variaciones simples: definición y fórmula",
   "Permutaciones simples y factorial",
   "Combinaciones simples y números combinatorios"
  ],
  "conceptos": [
   "Disyunción (p o q): verdadera salvo cuando ambas son falsas",
   "Implicación (p→q): falsa solo cuando antecedente V y consecuente F",
   "Cantidad de filas: 2 elevado al número de proposiciones (3 props = 8 filas)",
   "Variaciones V(m,n)=m!/(m-n)!: importa el orden, sin repetir, no se usan todos",
   "Permutaciones P(m)=m!: se ordenan todos los elementos",
   "Combinaciones C(m,n)=m!/(n!(m-n)!): no importa el orden"
  ],
  "ejemplos": [
   "Tabla de (~p y q)→r con 8 filas",
   "Variaciones: 4 cuadros en 2 lugares = 4!/2! = 12; permutaciones de 4 = 4! = 24",
   "Combinaciones: equipos de 2 entre 8 = C(8,2) = 28"
  ],
  "paraFinal": "Tablas de verdad y los tres arreglos simples, núcleo del Ejercicio 1."
 },
 {
  "id": "2zEEqSZMYu0",
  "clase": 1,
  "parte": 3,
  "fecha": "31/03",
  "unidad": "U1",
  "temaClase": "Lógica proposicional e introducción a Combinatoria",
  "resumen": "Resuelve combinaciones simples, distingue cuándo importa el orden, y desarrolla las permutaciones circulares con su fórmula (n-1)!.",
  "temas": [
   "Combinaciones simples y tecla nCr",
   "Cuándo importa el orden: equipo vs presidente/vocal/tesorero",
   "Variaciones aplicadas a premios",
   "Permutaciones circulares: deducción de la fórmula",
   "Mesa circular vs barra lineal",
   "Propiedades de los factoriales"
  ],
  "conceptos": [
   "Combinaciones (no importa el orden): 'Ana y Juan' = 'Juan y Ana', se cuenta una vez",
   "Variaciones (importa el orden): presidente, vocal y tesorero son arreglos distintos",
   "Permutaciones circulares: en mesa redonda no hay primer ni último lugar",
   "Fórmula circular: PC(n)=(n-1)!, porque cada ordenamiento se repite n veces",
   "Barra lineal: tiene principio y fin → permutaciones simples (n!)"
  ],
  "ejemplos": [
   "Combinaciones: 2 entre 8 = C(8,2) = 28",
   "Variaciones: 3 premios entre 30 = 30·29·28",
   "Permutaciones circulares de 5 en mesa = 4! = 24",
   "Circulares de 4 = 3! = 6"
  ],
  "paraFinal": "Profundiza arreglos combinatorios incluyendo permutaciones circulares (Ejercicio 1)."
 },
 {
  "id": "GiNibzBG8IM",
  "clase": 2,
  "parte": 1,
  "fecha": "07/04",
  "unidad": "U1",
  "temaClase": "Combinatoria (variaciones, permutaciones, combinaciones, Venn) y palomar",
  "resumen": "Resuelve negación de proposiciones y su traducción al coloquial, la precedencia de operadores lógicos, y corrige ejercicios de combinatoria identificando variaciones con repetición.",
  "temas": [
   "Negación de una conjunción en lenguaje coloquial",
   "Negación de desigualdades (negar 'mayor que' da 'menor o igual')",
   "Valor de verdad de una afirmación y su negación",
   "Precedencia: negación, conjunción, disyunción",
   "Uso de paréntesis para prioridad",
   "Corrección de combinatoria simple",
   "Variaciones con repetición"
  ],
  "conceptos": [
   "Negar una conjunción: 'no es cierto que...' o negar cada parte",
   "Negación de desigualdad: la de 'mayor que' es 'menor o igual que'",
   "Precedencia: primero negación, luego conjunción, luego disyunción",
   "Variación con repetición: importa el orden y los elementos pueden repetirse"
  ],
  "ejemplos": [
   "Negación de 'hoy es un lunes lluvioso y no caluroso' (ej. 39)",
   "Ej. 2: grupos de 3 letras con a,b,c,d (variaciones de 4 tomadas de a 3)",
   "Aclaración: la respuesta del ej. 3 es 14.000"
  ],
  "paraFinal": "Refuerza negación lógica y el tipo de arreglo combinatorio (Ejercicio 1)."
 },
 {
  "id": "xphFlxdU5vw",
  "clase": 2,
  "parte": 2,
  "fecha": "07/04",
  "unidad": "U1",
  "temaClase": "Combinatoria (variaciones, permutaciones, combinaciones, Venn) y palomar",
  "resumen": "Corrige ejercicios con producto de números combinatorios, teorema fundamental del conteo, diagramas de Venn, y variaciones y permutaciones con repetición.",
  "temas": [
   "Producto de números combinatorios (varios grupos)",
   "Teorema fundamental del conteo",
   "Permutaciones circulares (mesa del rey Arturo)",
   "Diagramas de Venn con 3 conjuntos y universal",
   "'Por lo menos uno' = total menos ninguno",
   "Variaciones con repetición (códigos de letras)",
   "Permutaciones con repetición (letras repetidas)"
  ],
  "conceptos": [
   "Producto de combinaciones: elegir de varias categorías multiplica los combinatorios de cada grupo",
   "Teorema fundamental del conteo: 3 remeras · 2 pantalones · 2 zapatillas = 12",
   "Diagrama de Venn: el rectángulo exterior es el universal (U)",
   "'Por lo menos uno' = total menos los que no estudian ninguno",
   "Variaciones con repetición: VR(m,n)=m^n",
   "Permutaciones con repetición: m! dividido por el factorial de cada repetición"
  ],
  "ejemplos": [
   "Ej. 3: C(6,3)·C(5,2)·C(8,4) = 14.000",
   "Rey Arturo y 7 caballeros en mesa = 7!",
   "Venn: francés, alemán y ruso; al menos un idioma",
   "VR: códigos de 3 letras con 5 disponibles = 5^3",
   "'casa' = 4!/2! (la A se repite); 7 elementos con A×3 y B×2 = 7!/(3!·2!)"
  ],
  "paraFinal": "Amplía combinatoria con repetición, conteo y Venn (Ejercicio 1)."
 },
 {
  "id": "oF5uuM4pFLs",
  "clase": 2,
  "parte": 3,
  "fecha": "07/04",
  "unidad": "U1",
  "temaClase": "Combinatoria (variaciones, permutaciones, combinaciones, Venn) y palomar",
  "resumen": "Parte breve que formaliza las combinaciones con repetición (ejemplo de la pizzería y técnica de separadores) y los números combinatorios complementarios.",
  "temas": [
   "Combinaciones con repetición: ejemplo pizzería",
   "Técnica de los separadores",
   "Transformación a combinaciones simples",
   "Fórmula de combinaciones con repetición",
   "Números combinatorios complementarios"
  ],
  "conceptos": [
   "Combinaciones con repetición: no importa el orden y los elementos pueden repetirse",
   "Separadores: para k gustos se usan k-1 palitos divisores",
   "Fórmula: CR(m,n)=C(m+n-1, n)",
   "Complementarios: C(m,n)=C(m,m-n)"
  ],
  "ejemplos": [
   "Pizzería: 5 personas, 3 gustos = CR(3,5)=C(7,2)",
   "Complementarios: C(5,1)=C(5,4); C(12,4)=C(12,8)"
  ],
  "paraFinal": "Cierra combinaciones con repetición y números combinatorios (Ejercicio 1)."
 },
 {
  "id": "Za-cq6mxRRM",
  "clase": 2,
  "parte": 4,
  "fecha": "07/04",
  "unidad": "U1",
  "temaClase": "Combinatoria (variaciones, permutaciones, combinaciones, Venn) y palomar",
  "resumen": "Resuelve un ejercicio de palomas en palomares y desarrolla el principio del palomar, su generalización y aplicaciones reales.",
  "temas": [
   "Palomas en palomares (combinaciones con repetición)",
   "Enunciado del principio del palomar",
   "Generalización (k·n+1 implica al menos k+1)",
   "Aplicaciones: cumpleaños, lockers, asientos",
   "Razonamiento del caso extremo",
   "Triángulo de Pascal (tarea)"
  ],
  "conceptos": [
   "Principio del palomar: si n casillas tienen n+1 o más palomas, alguna tiene 2 o más",
   "Generalización: con k·n+1 palomas, alguna casilla tiene k+1 o más",
   "Cumpleaños: con 13+ personas, 2 cumplen el mismo mes; con 25, al menos 3",
   "4 palomas en 3 palomares = CR(3,4)=C(6,2)"
  ],
  "ejemplos": [
   "4 palomas en 3 palomares = C(6,4)=C(6,2)",
   "23 personas: 2 cumplen el mismo mes",
   "Más de 7 personas: 2 cumplen el mismo día de la semana",
   "30 lockers y 31 personas: alguien comparte",
   "25 personas: al menos 3 el mismo mes"
  ],
  "paraFinal": "Principio del palomar, posible en el Ejercicio 1."
 },
 {
  "id": "VZrhkXdz4wk",
  "clase": 3,
  "parte": 1,
  "fecha": "14/04",
  "unidad": "U1 → U2",
  "temaClase": "Combinatoria con repetición, Stifel, Pascal e inicio de Inducción",
  "resumen": "Cierre de combinaciones con repetición (ecuaciones x+y+z=n con y sin restricciones) e inicio de la demostración de la propiedad de Stifel con factoriales.",
  "temas": [
   "Combinaciones con repetición",
   "Ecuaciones x+y+z=N con bolitas y cajas",
   "Fórmula CR(m,n) como combinación simple",
   "Restricciones (x≥2, y≥1) descontando del total",
   "Números combinatorios complementarios",
   "Propiedad de Stifel C(m,n-1)+C(m,n)=C(m+1,n)",
   "Operatoria con factoriales"
  ],
  "conceptos": [
   "Combinaciones con repetición: repartir N unidades idénticas en k categorías, fórmula C(m+n-1, n)",
   "Restricciones de mínimo: si x≥2, y≥1, se descuentan esas unidades antes de repartir el resto",
   "Complementarios: C(m,n)=C(m,m-n)",
   "Propiedad de Stifel: C(m,n-1)+C(m,n)=C(m+1,n), demostrable con factoriales",
   "Un ejemplo no demuestra una propiedad general; un contraejemplo sí la refuta"
  ],
  "ejemplos": [
   "x+y+z=15 (incl. 0): CR(3,15)=C(17,2)",
   "x+y+z=5 con x≥2,y≥1: se descuentan 3, quedan 2 → C(4,2)",
   "x+y+z=20 con x≥5,y≥3,z≥3: se descuentan 9 → C(13,11)",
   "Stifel con m=4,n=2: C(5,1)+C(5,2) operando factoriales"
  ],
  "paraFinal": "Distribución de N unidades en k cajas con restricciones y complementarios: herramientas del Ejercicio 1."
 },
 {
  "id": "OhbYHOWz__c",
  "clase": 3,
  "parte": 2,
  "fecha": "14/04",
  "unidad": "U1 → U2",
  "temaClase": "Combinatoria con repetición, Stifel, Pascal e inicio de Inducción",
  "resumen": "Completa la demostración de Stifel sacando factor común m! e introduce el triángulo de Pascal, su relación con los combinatorios y el Principio de Inducción.",
  "temas": [
   "Cierre de la demostración de Stifel",
   "Triángulo de Pascal y su construcción",
   "Relación del triángulo con C(m,n)",
   "Simetría y suma de filas = potencias de 2",
   "Introducción al Principio de Inducción Matemática (PIM)",
   "Función proposicional y dominio",
   "Estructura del PIM: caso base e hipótesis"
  ],
  "conceptos": [
   "Triángulo de Pascal: cada número es la suma de los dos de arriba; bordes 1 y simétrico",
   "Relación con combinatorios: el elemento de fila (m+1), posición (n+1) es C(m,n)",
   "Suma de cada fila = potencia de 2",
   "Función proposicional S(n): según n es verdadera o falsa; dominio: naturales",
   "PIM: si S(1) es verdadera y S(k)⇒S(k+1), entonces vale para todo n≥1"
  ],
  "ejemplos": [
   "Copa Davis: parejas de 5 jugadores → C(5,2), fila 6 posición 3",
   "Equipo de 4 entre 11 → C(11,4)",
   "Sumas de filas: 1,2,4,8,16,32",
   "PIM caso base Σi²: n=1 da 1 y la fórmula 1·2·3/6=1"
  ],
  "paraFinal": "El esquema del PIM (caso base, hipótesis, paso n→n+1) es el método del Ejercicio 2."
 },
 {
  "id": "Mbj2TO4DVoY",
  "clase": 3,
  "parte": 3,
  "fecha": "14/04",
  "unidad": "U1 → U2",
  "temaClase": "Combinatoria con repetición, Stifel, Pascal e inicio de Inducción",
  "resumen": "Completa dos demostraciones por inducción: suma de cuadrados Σi²=n(n+1)(2n+1)/6 y suma de Gauss Σi=n(n+1)/2, detallando el paso n→n+1.",
  "temas": [
   "Paso inductivo: sumar el término (k+1)",
   "Hipótesis inductiva como verdadera a priori",
   "Suma de cuadrados de los primeros n naturales",
   "Suma de Gauss 1+2+...+n",
   "Denominador común y cuadrado del binomio",
   "Verificación de que ambos miembros coinciden",
   "Inducción a veces empieza en n≥3"
  ],
  "conceptos": [
   "Paso inductivo: a S(k) se le suma el término siguiente y se debe llegar a la fórmula en k+1",
   "Hipótesis: se asume válida S(k) y se reemplaza la suma de los primeros k términos",
   "Cierre: si tras operar ambos miembros coinciden, queda demostrado",
   "Hipótesis falsa: si lleva a un absurdo, la propiedad NO se cumple",
   "La inducción no siempre arranca en n=1"
  ],
  "ejemplos": [
   "Σi²=n(n+1)(2n+1)/6: base n=1 da 1; paso suma (k+1)² → (k+1)(k+2)(2k+3)/6",
   "Suma de Gauss Σi=n(n+1)/2: base n=1 da 1; paso suma (k+1) → (k+1)(k+2)/2",
   "Gauss sumando 1 a 100 = 5050"
  ],
  "paraFinal": "Las sumas Σi y Σi² con su demostración son plantillas del Ejercicio 2."
 },
 {
  "id": "IfI6LFRiOv4",
  "clase": 4,
  "parte": 1,
  "fecha": "21/04",
  "unidad": "U2",
  "temaClase": "Inducción (divisibilidad), palomar y Relaciones",
  "resumen": "Demostraciones por inducción de divisibilidad: n³−n divisible por 3, y planteo de 7^(impar)+1 divisible por 8 con el impar como 2h−1; casos donde la propiedad es falsa.",
  "temas": [
   "Divisibilidad simbólica (3 | expresión)",
   "n³−n divisible por 3 por inducción",
   "Escribir 'a divisible por b' como b·(entero)",
   "Desarrollo del cubo de un binomio",
   "Factor común para aislar la hipótesis",
   "Casos donde la propiedad resulta falsa",
   "Representar un impar como 2h−1"
  ],
  "conceptos": [
   "Divisibilidad: b | expr equivale a expr = b·(entero); ej. 3|21 porque 21=3·7",
   "n³−n divisible por 3: base n=1 da 0; paso desarrolla (k+1)³−(k+1) y por hipótesis (k³−k)=3q → 3(q+k²+k)",
   "Aislar la hipótesis: reagrupar para que aparezca S(k) y reemplazar por b·(entero)",
   "Conclusión: si la expresión final = 3·(entero), es divisible por 3",
   "Un impar se escribe 2h−1 (no 2h+1) para incluir al 1 con h≥1"
  ],
  "ejemplos": [
   "n³−n: n=1 → 0; paso → 3q+3k²+3k = 3(q+k²+k)",
   "21=3·7",
   "Suma de 3 consecutivos = 3(n+1): n=1 da 9, múltiplo de 3 pero NO de 6 (propiedad falsa)",
   "7^(2h−1)+1: base h=1 → 7+1=8, 8|8"
  ],
  "paraFinal": "La técnica de inducción para divisibilidad (escribir como b·entero) es central en los Ejercicios 2 y 5."
 },
 {
  "id": "OxIYxa8Q3lw",
  "clase": 4,
  "parte": 2,
  "fecha": "21/04",
  "unidad": "U2",
  "temaClase": "Inducción (divisibilidad), palomar y Relaciones",
  "resumen": "Completa la demostración de que 7^(2h−1)+1 es divisible por 8 manipulando potencias (distribuir y sumar/restar un mismo término para sacar factor común).",
  "temas": [
   "Propiedades de potencias en inducción",
   "Distribuir la base para reconstruir la hipótesis",
   "Sumar y restar un mismo término (7²)",
   "Factor común 7² para aislar S(k)",
   "Reemplazo de la hipótesis (8·q)",
   "Conclusión: expresión = 8·(entero)"
  ],
  "conceptos": [
   "Manejo de potencias: 7^(2(k+1)−1) se reescribe como 7^(2k−1)·7²",
   "Truco de sumar y restar 7² para sacar factor común 8",
   "Sustitución: el paréntesis que coincide con S(k) se reemplaza por 8·q",
   "Cierre: queda 8·(7²·q − 6) = 8·(entero), divisible por 8"
  ],
  "ejemplos": [
   "7^(2h−1)+1: paso → 7²·(8q) + 49 − 49 = 8·(7²·q − 6)",
   "49+1−49 = −48 = 8·(−6)"
  ],
  "paraFinal": "Inducción con potencias (reescribir exponentes y sumar/restar): aplica al Ejercicio 2 y se conecta con el 5."
 },
 {
  "id": "hOClaBXkCBo",
  "clase": 4,
  "parte": 3,
  "fecha": "21/04",
  "unidad": "U2",
  "temaClase": "Inducción (divisibilidad), palomar y Relaciones",
  "resumen": "Corrección de palomar y combinatoria (permutaciones con padres en los extremos) e introducción a relaciones: reflexiva, simétrica, transitiva y de equivalencia/orden.",
  "temas": [
   "Principio del palomar (pares que suman 9)",
   "Permutaciones con restricción de posición",
   "Relaciones definidas en un conjunto",
   "Pares ordenados de una relación",
   "Propiedad reflexiva, simétrica y transitiva",
   "Relación de equivalencia",
   "Relación de orden",
   "Clases de equivalencia (preludio a módulos)"
  ],
  "conceptos": [
   "Palomar: con 4 pares que suman 9 entre 1–8, al elegir 5 números dos suman 9",
   "Permutación con restricción: padres en los extremos → 2·4! = 48",
   "Reflexiva: todo elemento se relaciona consigo mismo (todos los (x,x))",
   "Simétrica: si (x,y) entonces (y,x)",
   "Transitiva: si (x,y) e (y,z) entonces (x,z)",
   "Equivalencia: cumple las tres y genera una partición en clases (base de congruencia módulo n)"
  ],
  "ejemplos": [
   "Pares que suman 9 entre 1–8: (1,8)(2,7)(3,6)(4,5); con 5 elegidos siempre hay uno",
   "6 personas: 6!=720; con padres en extremos: 2·4!=48",
   "'Igual de alto que': reflexiva, simétrica, transitiva → equivalencia",
   "'Más alto que': solo transitiva → orden",
   "{(2,4),(4,8),(2,8)}: transitiva, no reflexiva, no simétrica"
  ],
  "paraFinal": "Palomar y permutaciones con restricción (Ejercicio 1); relaciones de equivalencia preparan la congruencia del Ejercicio 5."
 },
 {
  "id": "rN8qmQ7Iow4",
  "clase": 5,
  "parte": 1,
  "fecha": "28/04",
  "unidad": "U2 → U3",
  "temaClase": "Inducción con sumatorias, Relaciones e inicio de Sistemas",
  "resumen": "Demostración por PIM de una propiedad de suma y de una identidad con sumatoria, enfatizando cómo recuperar la hipótesis inductiva al desdoblar el término siguiente.",
  "temas": [
   "Principio de Inducción Matemática (PIM)",
   "Caso base (n=1)",
   "Hipótesis inductiva (n=k)",
   "Paso inductivo (n=k+1)",
   "Sumatorias y desdoblamiento del término k+1",
   "Producto de potencias de igual base",
   "Errores frecuentes: pasaje de términos"
  ],
  "conceptos": [
   "PIM en tres etapas: caso base, suponer S(k) (hipótesis) y demostrar S(k+1)",
   "Hipótesis: la igualdad supuesta para n=k que se reemplaza en n=k+1",
   "Desdoblar la sumatoria: suma hasta k+1 = suma hasta k (hipótesis) + término k+1",
   "Producto de potencias: al multiplicar se suman exponentes (3^(k+1)·3 = 3^(k+2))",
   "Error a evitar: no hacer pasaje de términos ni omitir los primeros términos"
  ],
  "ejemplos": [
   "6+24+...+(18n-12)=3n(3n-1); paso k+1 llega a 9k²+15k+6 en ambos miembros",
   "Σ(2i-1)·3^i=(n-1)·3^(n+1)+3; base n=1: 3=3; paso reagrupa con factor 3^(k+1)",
   "Potencias: 3^(h+1)·3 = 3^(h+2)"
  ],
  "paraFinal": "Modelo directo del Ejercicio 2: las tres etapas del PIM y el desdoblamiento de la sumatoria."
 },
 {
  "id": "7XwTBdzrVVU",
  "clase": 5,
  "parte": 2,
  "fecha": "28/04",
  "unidad": "U2 → U3",
  "temaClase": "Inducción con sumatorias, Relaciones e inicio de Sistemas",
  "resumen": "Cierre de sumatorias y pase a relaciones binarias: reflexividad, simetría, antisimetría y transitividad sobre pares ordenados concretos.",
  "temas": [
   "Producto de potencias de igual base",
   "Relaciones binarias en un conjunto",
   "Propiedad reflexiva",
   "Propiedad simétrica y antisimétrica",
   "Propiedad transitiva",
   "Análisis sobre pares ordenados",
   "Relación definida por x²≥y"
  ],
  "conceptos": [
   "Reflexiva: todos los pares (x,x) presentes",
   "Simétrica: si (x,y) está, también (y,x)",
   "Antisimétrica: si (x,y) e (y,x) están, entonces x=y (típica de orden ≤,≥)",
   "Transitiva: si (x,y) e (y,z) entonces (x,z)",
   "Una relación puede ser transitiva aunque solo algunos subconjuntos la verifiquen, si ninguno la viola"
  ],
  "ejemplos": [
   "X={1,2,3}, R={(1,1),(1,2),(1,3),(2,3),(3,2)}: no reflexiva, no simétrica, sí transitiva",
   "X={1,2,3,4} con x²≥y: reflexiva, no simétrica, transitiva"
  ],
  "paraFinal": "Relaciones que pueden combinarse en el Ejercicio 1: identificar reflexiva, simétrica, antisimétrica y transitiva."
 },
 {
  "id": "2bLuTW9qlZw",
  "clase": 5,
  "parte": 3,
  "fecha": "28/04",
  "unidad": "U2 → U3",
  "temaClase": "Inducción con sumatorias, Relaciones e inicio de Sistemas",
  "resumen": "Cierre de relaciones e introducción a ecuaciones lineales y sistemas, con métodos de resolución y un sistema 4x4 reducido por sustitución.",
  "temas": [
   "Ecuación lineal (primer grado)",
   "Coeficientes y término independiente",
   "Sistema de ecuaciones lineales",
   "Solución como vector / n-upla",
   "Métodos: reducción, sustitución, igualación, determinantes, gráfico",
   "Manipulación para eliminar incógnitas"
  ],
  "conceptos": [
   "Ecuación lineal: a₁x₁+...+aₙxₙ=b, todas las variables con exponente 1",
   "Sistema: ecuaciones que se resuelven simultáneamente",
   "Solución como vector ordenado (n-upla)",
   "Métodos: reducción, sustitución, igualación, determinantes y gráfico (2x2)",
   "Una ecuación con varias incógnitas tiene infinitas soluciones",
   "Estrategia: combinar ecuaciones para eliminar incógnitas"
  ],
  "ejemplos": [
   "Ecuación lineal: (7/3)x₁+2x₂-√7·x₃=√3/3",
   "Sistema 4x4 que al manipularse da infinitas soluciones por falta de información independiente"
  ],
  "paraFinal": "Base del Ejercicio 4: reconocer una ecuación lineal, plantear un sistema y elegir método."
 },
 {
  "id": "PuPrEsErZVg",
  "clase": 5,
  "parte": 4,
  "fecha": "28/04",
  "unidad": "U2 → U3",
  "temaClase": "Inducción con sumatorias, Relaciones e inicio de Sistemas",
  "resumen": "Modelado y resolución por sustitución de un problema de palabras como sistema 3x3, mostrando cómo ordenar variables, combinar ecuaciones y validar la solución frente a la realidad.",
  "temas": [
   "Planteo de un problema como sistema",
   "Definición de variables",
   "Sistema 3x3",
   "Resolución por sustitución y reducción",
   "Ecuaciones equivalentes",
   "Ordenar incógnitas en columnas",
   "Interpretación de la solución (viabilidad real)"
  ],
  "conceptos": [
   "Modelado: traducir condiciones verbales a ecuaciones",
   "Ecuaciones equivalentes: multiplicar/dividir por un real ≠0, o sumar/restar, no cambia la solución",
   "Ordenar incógnitas en columnas facilita eliminar variables",
   "Solución única vs incompatible (absurdo 5=3) vs indeterminado (0=0)",
   "Validación: una solución matemática puede no aplicar al problema real (cantidad negativa)"
  ],
  "ejemplos": [
   "Variables y ecuaciones tipo 3B=2(M+N)",
   "Tras sustituir, surgen valores negativos que no son viables aunque el sistema sea compatible"
  ],
  "paraFinal": "Practica el Ejercicio 4: traducir un enunciado a un sistema 3x3, resolverlo e interpretar la viabilidad."
 },
 {
  "id": "4nyBg1TTh2A",
  "clase": 6,
  "parte": 1,
  "fecha": "05/05",
  "unidad": "U3",
  "temaClase": "Matrices, matriz ampliada, escalonamiento y determinantes",
  "resumen": "Repaso de sistemas equivalentes e introducción a matrices: matriz asociada y ampliada, operaciones elementales de fila y método de Gauss.",
  "temas": [
   "Sistemas equivalentes (mismo conjunto solución)",
   "Matriz asociada a un sistema",
   "Matriz ampliada",
   "Matriz escalonada",
   "Operaciones elementales de fila",
   "Método de Gauss",
   "Tipos de solución: única, infinitas o sin solución"
  ],
  "conceptos": [
   "Sistemas equivalentes: comparten el mismo conjunto solución",
   "Matriz asociada: coeficientes; ampliada agrega los términos independientes tras una línea",
   "Escalonada: cada fila con un cero más que la anterior; se resuelve hacia atrás",
   "Operaciones válidas: multiplicar fila por real ≠0, sumar/restar filas, intercambiar",
   "Tipos: única, infinitas (fila de ceros, se parametriza) o sin solución (absurdo)"
  ],
  "ejemplos": [
   "Sistema 3x3 con matriz ampliada [[2,3,1|7],[1,-2,1|0],[1,1,2|7]]",
   "F3→F3−F2 genera un cero; escalonando llega a 10z=28 → z=2,8",
   "Multiplicar una ecuación por 3: x+y+2z=7 → 3x+3y+6z=21"
  ],
  "paraFinal": "Núcleo del Ejercicio 4: armar la matriz ampliada y resolver por escalonamiento (Gauss)."
 },
 {
  "id": "PGA0cmM9pSM",
  "clase": 6,
  "parte": 2,
  "fecha": "05/05",
  "unidad": "U3",
  "temaClase": "Matrices, matriz ampliada, escalonamiento y determinantes",
  "resumen": "Sistemas con infinitas soluciones, orden/dimensión de una matriz, tipos de matrices y operaciones de suma y producto.",
  "temas": [
   "Resolución por escalonamiento (verificación)",
   "Sistemas con infinitas soluciones (parametrización)",
   "Orden o dimensión de una matriz",
   "Notación a_ij",
   "Tipos de matrices (fila, columna, cuadrada, nula, diagonal, triangular, identidad, escalar)",
   "Suma de matrices",
   "Producto de matrices y compatibilidad"
  ],
  "conceptos": [
   "Orden m×n: m filas y n columnas; a_ij está en la fila i, columna j",
   "Cuadrada: igual filas y columnas; nula: todos ceros",
   "Identidad: unos en la diagonal; escalar: un mismo número en la diagonal",
   "Suma: solo entre matrices del mismo orden, elemento a elemento",
   "Producto: fila por columna sumando productos",
   "Condición para multiplicar: columnas de la 1ª = filas de la 2ª"
  ],
  "ejemplos": [
   "Solución parametrizada: (x, 3/5·x, -1/2·x)",
   "Órdenes: 3×2, fila 1×5, columna 4×1, cuadrada 2×2",
   "Producto 2×2: [[3,-1],[5,2]]·[[-1,3],[1,4]] = [[-4,5],[-3,23]]",
   "Una 3×3 por una 3×2 da una 3×2"
  ],
  "paraFinal": "Refuerza el Ejercicio 4: tipos de matrices y la condición de compatibilidad del producto."
 },
 {
  "id": "zW16MmodC8A",
  "clase": 6,
  "parte": 3,
  "fecha": "05/05",
  "unidad": "U3",
  "temaClase": "Matrices, matriz ampliada, escalonamiento y determinantes",
  "resumen": "Tras recordar la transpuesta, calcula el determinante 3x3 por Sarrus y por desarrollo de Laplace (cofactores), con la matriz de signos.",
  "temas": [
   "Matriz transpuesta",
   "Determinante de una matriz cuadrada",
   "Regla de Sarrus",
   "Desarrollo de Laplace por fila o columna",
   "Menores y cofactores",
   "Matriz de signos (-1)^(i+j)",
   "Conveniencia de filas/columnas con ceros"
  ],
  "conceptos": [
   "Transpuesta: intercambia filas por columnas",
   "Determinante: número que caracteriza a una matriz cuadrada",
   "Sarrus (3×3): repetir dos filas, sumar diagonales en un sentido y restar las del otro",
   "Laplace: elegir fila/columna y sumar elemento·(-1)^(i+j)·menor",
   "Menor: determinante al quitar la fila y columna del elemento; cofactor: menor con su signo",
   "Matriz de signos: patrón +,-,+...; conviene la fila/columna con más ceros"
  ],
  "ejemplos": [
   "Matriz 3×3 que por Sarrus da −32",
   "Por Laplace desarrollando la primera fila se llega al mismo −32 usando la matriz de signos +,-,+"
  ],
  "paraFinal": "Apoya el Ejercicio 4: determinantes 3×3 por Sarrus o Laplace eligiendo filas/columnas con ceros."
 },
 {
  "id": "GxPWhugd0Ek",
  "clase": 7,
  "parte": 1,
  "fecha": "12/05",
  "unidad": "U3",
  "temaClase": "Determinantes (Cramer), inversa por adjunta y Gauss-Jordan",
  "resumen": "Repaso de sistemas 3x3 por determinantes (Cramer/Sarrus), incluyendo determinantes con incógnitas, y planteo del método matricial con inversa y de Gauss.",
  "temas": [
   "Determinantes 3x3 por Sarrus",
   "Regla de Cramer",
   "Determinante del sistema y de x, y, z",
   "Determinantes con incógnitas (cuadráticas)",
   "Determinante nulo (sin solución única)",
   "Método matricial A·X=B e inversa",
   "Introducción a Gauss con matriz ampliada"
  ],
  "conceptos": [
   "Cramer: cada incógnita = su determinante (columna reemplazada por independientes) / determinante del sistema",
   "Determinante del sistema: solo coeficientes de las incógnitas",
   "Determinante nulo: si una fila es múltiplo de otra, da cero y no hay solución única",
   "Método matricial: A·X=B → X=A⁻¹·B (multiplicar por la inversa a izquierda; no es conmutativa)",
   "La identidad surge de A⁻¹·A y permite despejar"
  ],
  "ejemplos": [
   "Sistema: det=-13, det_x=-21 → x=-21/-13",
   "Determinante con incógnita b=-5 → cuadrática b²+5b-4=0, raíces -1 y -4",
   "Sistema 2x+3y=5..."
  ],
  "paraFinal": "Para el Ejercicio 4: dominar Cramer (det del sistema y de cada incógnita) y el planteo X=A⁻¹·B."
 },
 {
  "id": "cMRIACTl5OU",
  "clase": 7,
  "parte": 2,
  "fecha": "12/05",
  "unidad": "U3",
  "temaClase": "Determinantes (Cramer), inversa por adjunta y Gauss-Jordan",
  "resumen": "Cálculo de la inversa de una 3x3 por la adjunta (cofactores, transpuesta y división por el determinante), con verificación A·A⁻¹=I.",
  "temas": [
   "Método de la adjunta",
   "Determinante 3x3",
   "Cofactores y menores",
   "Signos (-1)^(i+j)",
   "Matriz adjunta",
   "Transposición",
   "División por el determinante",
   "Verificación A·A⁻¹=I"
  ],
  "conceptos": [
   "Adjunta: A⁻¹=(1/det A)·(adjunta transpuesta)",
   "Cofactor: menor con signo (-1)^(i+j)",
   "Menor: determinante al eliminar la fila y columna del elemento",
   "Signos alternados según la posición",
   "Verificación: A·A⁻¹ debe dar la identidad"
  ],
  "ejemplos": [
   "Matriz con det=9 → inversa con factor 1/9",
   "Cofactores que arman la adjunta",
   "Verificación: ceros fuera de la diagonal y 9/9=1 en la diagonal"
  ],
  "paraFinal": "Para el Ejercicio 4: calcular la inversa por adjunta y verificar con A·A⁻¹=I."
 },
 {
  "id": "yd-6eCBe6ng",
  "clase": 7,
  "parte": 3,
  "fecha": "12/05",
  "unidad": "U3",
  "temaClase": "Determinantes (Cramer), inversa por adjunta y Gauss-Jordan",
  "resumen": "Resolución de un sistema 4x4 por operaciones de fila sobre la matriz ampliada: primero Gauss (escalonada) y luego Gauss-Jordan (identidad), con verificación.",
  "temas": [
   "Matriz ampliada 4x4",
   "Operaciones elementales entre filas",
   "Método de Gauss (escalonada)",
   "Intercambio de filas para pivotes",
   "Método de Gauss-Jordan (identidad)",
   "Lectura directa de la solución",
   "Verificación"
  ],
  "conceptos": [
   "Matriz ampliada: coeficientes + términos independientes",
   "Operaciones válidas: combinar filas (resta, multiplicar por constante) sin alterar la solución",
   "Gauss: matriz escalonada con un cero más por fila",
   "Intercambio de filas para ubicar pivotes",
   "Gauss-Jordan: continúa hasta unos en la diagonal y ceros alrededor (identidad)",
   "Con la identidad, los términos independientes son la solución"
  ],
  "ejemplos": [
   "Sistema 4x4; operaciones F2=F2-F1, F3=F3-2·F1, F4=F4-3·F1",
   "Solución: w=3, z=5, x=-2, y=9",
   "Verificación reemplazando en las ecuaciones"
  ],
  "paraFinal": "Para el Ejercicio 4: practicar Gauss y Gauss-Jordan sobre la matriz ampliada hasta la identidad."
 },
 {
  "id": "dFd3bWrWP-0",
  "clase": 8,
  "parte": 1,
  "fecha": "19/05",
  "unidad": "U3 → U5",
  "temaClase": "Determinantes por cofactores, inversa, método matricial e inicio de Programación lineal",
  "resumen": "Clase breve sobre el cálculo de determinantes desarrollando por una fila o columna con cofactores, eligiendo la que tenga más ceros.",
  "temas": [
   "Determinantes por cofactores",
   "Desarrollo por fila o columna",
   "Elección con más ceros",
   "Signo (-1)^(i+j)",
   "Menores",
   "Relación con Cramer"
  ],
  "conceptos": [
   "Desarrollo por cofactores: elegir fila/columna y sumar elemento·cofactor",
   "Elegir la fila/columna con más ceros porque esos términos se anulan",
   "Signo (-1)^(i+j) según fila y columna",
   "Menor: al eliminar la fila y columna del elemento",
   "El resultado es el mismo sin importar la fila/columna elegida"
  ],
  "ejemplos": [
   "Matriz 3x3 con ceros en la primera columna, desarrollada por esa columna",
   "Resultado del determinante: 6"
  ],
  "paraFinal": "Para el Ejercicio 4: desarrollar un determinante por cofactores eligiendo la fila/columna con más ceros."
 },
 {
  "id": "snQwUYK8rIA",
  "clase": 8,
  "parte": 2,
  "fecha": "19/05",
  "unidad": "U3 → U5",
  "temaClase": "Determinantes por cofactores, inversa, método matricial e inicio de Programación lineal",
  "resumen": "Ejercicios de inversas: cálculo de elementos desde A·A⁻¹=I, propiedad (A·B)⁻¹=B⁻¹·A⁻¹, y resolución de un sistema por X=A⁻¹·B.",
  "temas": [
   "Elementos de la inversa desde A·A⁻¹=I",
   "Planteo como sistema con incógnitas a,b,c,d",
   "Inversa por Gauss-Jordan [A|I]",
   "Propiedad (A·B)⁻¹=B⁻¹·A⁻¹ y no conmutatividad",
   "Método matricial X=A⁻¹·B",
   "Planteo de sistemas desde enunciados"
  ],
  "conceptos": [
   "Inversa: A·A⁻¹=I permite plantear ecuaciones componente a componente",
   "Inversa por Gauss-Jordan: operar [A|I] hasta que A sea la identidad",
   "Propiedad del producto: (A·B)⁻¹=B⁻¹·A⁻¹ (orden invertido)",
   "No conmutatividad: en general A⁻¹·B⁻¹≠B⁻¹·A⁻¹",
   "Método matricial: para A·X=B se calcula X=A⁻¹·B"
  ],
  "ejemplos": [
   "A=(3,1,-2,1), inversa con incógnitas: de 3b-2d=0 sale b=(2/3)d",
   "(A·B)⁻¹=B⁻¹·A⁻¹ verificado con calculadora",
   "Sistema x+y-z=-4, 2y+z=-4, x-3z=10 por método matricial → x=1, y=-3, z=2"
  ],
  "paraFinal": "Para el Ejercicio 4: dominar X=A⁻¹·B y la propiedad (A·B)⁻¹=B⁻¹·A⁻¹, planteando el sistema desde el enunciado."
 },
 {
  "id": "pr7zmFRg0uI",
  "clase": 8,
  "parte": 3,
  "fecha": "19/05",
  "unidad": "U3 → U5",
  "temaClase": "Determinantes por cofactores, inversa, método matricial e inicio de Programación lineal",
  "resumen": "Cierre de sistemas desde enunciados (parábola por 3 puntos, rectángulo) y arranque de Programación lineal con un problema de costos de transporte resuelto gráficamente.",
  "temas": [
   "Planteo de sistemas desde enunciados (parábola)",
   "Problema del rectángulo (no lineal)",
   "Introducción a Programación lineal",
   "Función objetivo",
   "Restricciones y no negatividad",
   "Región factible en el primer cuadrante",
   "Resolución gráfica e intersección de rectas",
   "Evaluación de la FO en los vértices"
  ],
  "conceptos": [
   "Parábola por 3 puntos: con f(x)=ax²+bx+c se arma un sistema en a,b,c",
   "Los sistemas no lineales no se resuelven con matrices (requieren exponente 1)",
   "Programación lineal: sistema de ecuaciones + restricciones que acotan",
   "Función objetivo: lineal, a minimizar (costo) o maximizar (ganancia)",
   "Restricciones: desigualdades, más x,y≥0 y soluciones enteras",
   "Región factible: zona del primer cuadrante; los vértices son candidatos",
   "Se evalúa la FO en cada vértice para hallar el óptimo"
  ],
  "ejemplos": [
   "Parábola por (1,-3),(2,2),(-1,1) → sistema a+b+c=-3, 4a+2b+c=2, a-b+c=1",
   "Rectángulo: base·altura=24 y base=altura-1.5 (no lineal)",
   "Camiones: A (10 refrig + 20 no, $50 mil) y B (15+15, $60 mil); 10x+15y≥1500, 20x+15y≥2000",
   "Vértices (0,133.3),(50,66.6),(150,0); intersección x=50,y=66.6; busca el mínimo costo"
  ],
  "paraFinal": "Base directa del Ejercicio 3: FO, restricciones con desigualdades y no negatividad, región factible y evaluar vértices."
 },
 {
  "id": "xIIySgHPzLk",
  "clase": 9,
  "parte": 1,
  "fecha": "26/05",
  "unidad": "U5",
  "temaClase": "Programación lineal y repaso del parcial",
  "resumen": "Resolución de un problema de PL para minimizar el costo de una dieta con dos preparados: restricciones, función objetivo y gráfico para hallar el mínimo. Cierre con instrucciones del parcial.",
  "temas": [
   "Programación lineal",
   "Función objetivo (minimización)",
   "Restricciones e inecuaciones lineales",
   "Graficar rectas y región factible",
   "Evaluación de vértices",
   "Ajuste de la solución a la realidad",
   "Organización de datos en tabla"
  ],
  "conceptos": [
   "Incógnitas: cantidad de preparado X e Y a comprar gastando lo mínimo",
   "Restricciones: inecuaciones que relacionan el aporte de cada alimento con el mínimo, más x≥0, y≥0",
   "Función objetivo: costo total a minimizar, evaluado en los vértices",
   "Región factible: zona del primer cuadrante que cumple todas las restricciones",
   "Vértices: intersecciones entre rectas y con los ejes",
   "Ajuste a la realidad: si no se fracciona, redondear a enteros y justificar"
  ],
  "ejemplos": [
   "Dieta: mín. 150 g de A y 150 g de B. Preparado X=10A+50B ($100); Y=50A+10B ($300)",
   "Restricciones: 10x+50y≥150 y 50x+10y≥150, x,y≥0",
   "Vértices (0,15),(15,0),(2.5,2.5)",
   "Costo=100x+300y: f(0,15)=4500, f(15,0)=1500, f(2.5,2.5)=750 (mínimo); ajustado f(3,3)"
  ],
  "paraFinal": "Modelo completo del Ejercicio 3: incógnitas, restricciones, FO, graficar, evaluar vértices y ajustar a la realidad."
 },
 {
  "id": "5NKSIM87ljs",
  "clase": 9,
  "parte": 2,
  "fecha": "26/05",
  "unidad": "U5",
  "temaClase": "Programación lineal y repaso del parcial",
  "resumen": "Corrección de ejercicios de práctica del parcial: determinantes, combinatoria, palomar y propiedades de la inducción. Es repaso, no tema nuevo.",
  "temas": [
   "Determinante de matriz triangular",
   "Variaciones sin repetición",
   "Principio del palomar",
   "Permutaciones simples y circulares",
   "Propiedades de determinantes",
   "Principio de inducción",
   "Estrategia de examen"
  ],
  "conceptos": [
   "Determinante de matriz triangular/diagonal: producto de la diagonal",
   "Variaciones sin repetición: se reduce lo disponible en cada posición",
   "Palomar: para asegurar un par hay que elegir uno más que la cantidad de pares",
   "Permutación circular: n en mesa = (n-1)!",
   "Determinante con dos filas/columnas iguales = 0",
   "Inducción: probar P(1) y P(k)⇒P(k+1)"
  ],
  "ejemplos": [
   "Matriz diagonal: det = producto = 15",
   "Claves con 8 letras distintas de DISCRETA + 2 dígitos → V(8,3) y 2·2",
   "Palomar: del 3 al 12, pares que suman 15 son 5 → elegir 6",
   "6 en barra = 6!; mesa circular de 5 = 4! = 24",
   "[[2,1],[2,1]]: det = 0"
  ],
  "paraFinal": "Repaso de los Ejercicios 1, 2 y 4: det de triangular y verificar con un caso particular."
 },
 {
  "id": "ZAjGR6_fZfo",
  "clase": 9,
  "parte": 3,
  "fecha": "26/05",
  "unidad": "U5",
  "temaClase": "Programación lineal y repaso del parcial",
  "resumen": "Continuación del repaso: análisis de verdad/falsedad de afirmaciones sobre el PIM y su diferencia con la demostración por el absurdo. Repaso y aclaraciones del examen.",
  "temas": [
   "Principio de inducción matemática",
   "Estructura de la demostración por inducción",
   "Demostración por el absurdo",
   "Demostraciones en los naturales",
   "Validez a partir de cierto n",
   "Interpretación de consignas"
  ],
  "conceptos": [
   "Estructura: probar P(1) y que P(k)⇒P(k+1)",
   "La inducción se usa en N (naturales), no en los reales",
   "Absurdo e inducción son métodos distintos y complementarios",
   "La inducción puede demostrar a partir de cierto n (no solo desde 1)",
   "El n es el natural genérico; pares/impares/múltiplos es otra cuestión"
  ],
  "ejemplos": [
   "Afirmación correcta: probar P(1) y P(k)⇒P(k+1)",
   "Propiedad válida para n≥10: la inducción demuestra desde cierto n, no en un rango cerrado"
  ],
  "paraFinal": "Refuerza el Ejercicio 2: caso base + paso inductivo y que la validez puede empezar en un n distinto de 1."
 },
 {
  "id": "JLPErhQcEEg",
  "clase": 10,
  "parte": 1,
  "fecha": "09/06",
  "unidad": "U4",
  "temaClase": "Encriptación con matrices y aritmética modular (congruencia)",
  "resumen": "Corrección de un desencriptado con matrices (sistema e inversa) y comienzo de aritmética modular: estructuras algebraicas, conjuntos numéricos y congruencia módulo n con clases de equivalencia.",
  "temas": [
   "Encriptación/desencriptación con matrices",
   "Sistema de ecuaciones y matriz inversa",
   "Estructuras algebraicas y leyes de composición",
   "Conjuntos numéricos y ley de cierre",
   "Aritmética modular",
   "Congruencia módulo n",
   "Clases de equivalencia"
  ],
  "conceptos": [
   "Desencriptado: si A·X=mensaje, se despeja X resolviendo el sistema o con X=A⁻¹·mensaje",
   "El mensaje se agrupa de a pares para formar matrices columna",
   "Inversa con determinante 1: se intercambia la diagonal y se cambia el signo de los otros",
   "Ley de cierre: operar dos elementos da un resultado del mismo conjunto",
   "Ampliación de conjuntos: N→Z→Q→R→C",
   "Estructuras: grupo, grupo abeliano o cuerpo según las propiedades",
   "Congruencia módulo n: a≡b si n divide a (b−a); dejan el mismo resto al dividir por n",
   "Clases de equivalencia: la congruencia parte a Z en n clases"
  ],
  "ejemplos": [
   "Sistema del desencriptado: 8x+5y=238 y 3x+2y=91",
   "Días de la semana (módulo 7): miércoles=3; 3+15=18≡4",
   "Clase del 0 módulo 7: {...,-7,0,7,14,...}",
   "83 módulo 7: resto 6 → 83≡6",
   "-23 módulo 7: -23+28=5 → -23≡5"
  ],
  "paraFinal": "Base del Ejercicio 5: congruencia módulo n, algoritmo de la división y desencriptado con matriz inversa."
 },
 {
  "id": "1ucDsu6pntU",
  "clase": 10,
  "parte": 2,
  "fecha": "09/06",
  "unidad": "U4",
  "temaClase": "Encriptación con matrices y aritmética modular (congruencia)",
  "resumen": "Aritmética modular: definición de congruencia, representante canónico, propiedades de la suma (grupo abeliano), elemento opuesto y existencia del inverso multiplicativo.",
  "temas": [
   "Congruencia módulo n y notación",
   "Representante canónico",
   "Algoritmo de la división",
   "Propiedades de la suma modular",
   "Grupo abeliano",
   "Elemento simétrico (opuesto)",
   "Multiplicación modular e inverso"
  ],
  "conceptos": [
   "Congruencia módulo n: a≡b si dejan el mismo resto al dividir por n; n divide a (b−a)",
   "Algoritmo de la división: a=b·cociente+resto",
   "Representante canónico: el resto entre 0 y n-1 que identifica la clase",
   "Suma modular: conmutativa, asociativa, neutro (0) y simétrico → grupo abeliano",
   "Opuesto modular: s tal que a+s≡0; s=n−a (no siempre −a)",
   "Multiplicación modular: asociativa, conmutativa, distributiva, neutro (1), pero el inverso no siempre existe",
   "Módulo 10/100: el representante son las últimas cifras",
   "Par: n≡0 (mód 2); impar: n≡1 (mód 2)"
  ],
  "ejemplos": [
   "26≡12 (mód 7): ambos dejan resto 5",
   "7 divide a (12−26)=−14",
   "Simétrico de 1 en módulo 7 es 6 (1+6=7≡0)",
   "257≡7 (mód 10); módulo 100 mira las dos últimas cifras",
   "Examen: 2 temas con 3 opciones y 3 con 4 → 3·3·4·4·4"
  ],
  "paraFinal": "Esencial para el Ejercicio 5: congruencia, representante canónico, opuesto modular (n−a) e inverso multiplicativo (clave de RSA)."
 },
 {
  "id": "Ep1HV54hwBQ",
  "clase": 11,
  "parte": 1,
  "fecha": "16/06",
  "unidad": "U4",
  "temaClase": "Pequeño Teorema de Fermat, potencias modulares y φ de Euler",
  "resumen": "Aritmética modular: congruencia módulo 10/100, pares/impares, divisibilidad, primos y compuestos, factorización y enunciado del Pequeño Teorema de Fermat para coprimos.",
  "temas": [
   "Congruencia módulo 10 y 100",
   "Pares e impares en congruencia",
   "Divisibilidad",
   "Números primos y compuestos",
   "Factorización en primos",
   "Pequeño Teorema de Fermat",
   "Números coprimos (MCD=1)",
   "Anticipo de RSA"
  ],
  "conceptos": [
   "Módulo 100: el representante son las dos últimas cifras",
   "Par: n≡0 (mód 2); impar: n≡1 (mód 2)",
   "Primo: únicos divisores 1 y él mismo; compuesto: se descompone en primos",
   "Factorización: descomponer un compuesto como producto de primos",
   "Coprimos: MCD=1",
   "Fermat (forma 1): si p es primo, a^p≡a (mód p)",
   "Fermat (forma 2): si a y p son coprimos (p primo), a^(p-1)≡1 (mód p)",
   "Permite calcular potencias grandes en congruencia sin computar la potencia"
  ],
  "ejemplos": [
   "257≡7 (mód 10)",
   "Factorizar 12 = 2·2·3",
   "Coprimos: MCD(7,5)=1; MCD(15,16)=1",
   "7^32≡1 (mód 5): como 7^4≡1, 7^32=(7^4)^8≡1"
  ],
  "paraFinal": "Núcleo del Ejercicio 5: el Pequeño Teorema de Fermat y la reducción de potencias en módulo n, base de φ de Euler y RSA."
 },
 {
  "id": "QJrWrc2yJpk",
  "clase": 11,
  "parte": 2,
  "fecha": "16/06",
  "unidad": "U4",
  "temaClase": "Pequeño Teorema de Fermat, potencias modulares y φ de Euler",
  "resumen": "Cálculo de potencias grandes en aritmética modular aplicando Fermat, mostrando por qué la calculadora no sirve y cómo reducir el exponente. Menciona la función φ de Euler para encriptación.",
  "temas": [
   "Pequeño Teorema de Fermat",
   "Cálculo de potencias en congruencia",
   "Limitaciones de la calculadora",
   "Propiedades de la potenciación",
   "Reducción de exponentes con primos",
   "Función φ de Euler (mención)",
   "Aplicación a RSA"
  ],
  "conceptos": [
   "Las potencias grandes no se resuelven con calculadora (notación científica), por eso se reduce con Fermat",
   "Reducción del exponente: usar a^(p-1)≡1 (mód p)",
   "Descomponer a^m como potencia de potencia y reducir cada factor",
   "Función φ de Euler: mencionada para investigar en encriptación",
   "Trabajar potencias con primos es la base de RSA"
  ],
  "ejemplos": [
   "7^32 (mód 5): 7 y 5 coprimos, 7^4≡1; 7^32=(7^4)^8≡1",
   "7^2=49≡4 (mód 5); 4^2=16≡1 → 7^32≡1",
   "7^32 tiene ~28 cifras: la calculadora no da el resto exacto"
  ],
  "paraFinal": "Aplica al Ejercicio 5: reducir potencias modulares con Fermat y la función φ de Euler, pasos centrales del RSA."
 }
];
