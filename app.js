/* =========================================================================
   Workspace — Final Matemática Discreta (UNLa) — v2
   ========================================================================= */

const DEFAULT_EXAM = '2026-07-31';

/* ---- Links de video ---- */
const V = {
  loidi:     { t: 'Cátedra 2021 — Prof. Laura Loidi (33 videos)', u: 'https://www.youtube.com/playlist?list=PLbJxARuJQQZnvSkJC8jFE9zJJJDPjdedn' },
  combi:     { t: 'Combinaciones, Permutaciones y Variaciones — profe Alex', u: 'https://www.youtube.com/playlist?list=PLeySRPnY35dFF_kWyWL893posL7DNlFHa' },
  logica:    { t: 'Tablas de verdad / Lógica proposicional — profe Alex', u: 'https://www.youtube.com/playlist?list=PLeySRPnY35dHBYcVHPisjBCVHBa954rMZ' },
  induccion: { t: 'Demostraciones por inducción — MateFacil', u: 'https://www.youtube.com/playlist?list=PL9SnRnlzoyX3oUb5UGzhVeZCKxhcypfKu' },
  matrices:  { t: 'Matrices (Curso COMPLETO) — profe Alex', u: 'https://www.youtube.com/playlist?list=PLeySRPnY35dEr2XewNdOjOl7Ft0tLIlKI' },
  sistemas:  { t: 'Sistemas de ecuaciones 3×3 (incluye Cramer) — profe Alex', u: 'https://www.youtube.com/playlist?list=PLeySRPnY35dGyuZPOjrL_Rhm2k5y-FB5T' },
  pl1:       { t: 'Programación lineal 2021 (grabación 1)', u: 'https://www.youtube.com/watch?v=pr7zmFRg0uI' },
  pl2:       { t: 'Programación lineal 2021 (grabación 2)', u: 'https://www.youtube.com/watch?v=xIIySgHPzLk' },
  palomar:   { t: 'Principio del palomar', u: 'https://www.youtube.com/watch?v=Pcw-rI_oOMY' },
};

/* ---- Roadmap ---- */
const WEEKS = [
  { id:'w1', color:'#6d5dfc', title:'Semana 1 — U1: Combinatoria + Lógica', sub:'Ejercicio 1 del final', days:[
    { id:'d1', date:'2026-06-30', wd:'Mar 30/06', title:'Conteo básico, factorial y principio de multiplicación',
      theory:'Principio de multiplicación, factorial (n!) y las 4 preguntas: ¿importa el orden? ¿hay repetición? ¿uso todos o k de n? ¿caso especial?',
      videos:[{...V.loidi,n:'clases iniciales de combinatoria'},{...V.combi,n:'videos 1–6'}],
      ex:['Práctica 1 — strings con ABCD sin repetir (¿qué definición los cuenta? nº para n letras)','Práctica 2 — tuplas de 3 letras de {A,B,C,D} (rta: 24)','Práctica 3 — libros 6 Mate / 5 Prog / 8 OO: comprar 3+2+4 (rta: 14000)'],
      goal:'Distinguir cuándo importa el orden y cuándo hay repetición.' },
    { id:'d2', date:'2026-07-01', wd:'Mié 01/07', title:'Variaciones y permutaciones (con y sin repetición)',
      theory:'Variaciones V(n,k)=n!/(n−k)!, con repetición nᵏ, permutaciones n! y circulares (n−1)!.',
      videos:[{...V.combi,n:'videos 7–14'}],
      ex:['Práctica 4 — menú con diagrama de árbol','Práctica 5 — Rey Arturo + 7 caballeros en mesa redonda (rta: 7!)','Final — con 1,2,3,5,8,9 sin repetir: nº de 4 cifras; con repetición; de 3 cifras'],
      goal:'Resolver números de N cifras en sus 3 variantes (con/sin repetición, total).' },
    { id:'d3', date:'2026-07-02', wd:'Jue 02/07', title:'Combinaciones, múltiplos y diagramas de Venn',
      theory:'Combinaciones C(n,k), triángulo de Pascal, combinaciones con repetición e inclusión-exclusión.',
      videos:[{...V.combi,n:'videos 15–23'}],
      ex:['Práctica 6 y 7 — diagramas de Venn (idiomas / no divisibles por 2,3,7)','Práctica 12 — 8 galletitas de 4 gustos (rta: 165)','Modelo — dígitos 0–7, nº de 3 cifras múltiplos de 6 sin repetir','Final dic 2025 — múltiplos de 10'],
      goal:'Filtrar por "múltiplos de…" y resolver inclusión-exclusión con Venn.' },
    { id:'d4', date:'2026-07-03', wd:'Vie 03/07', title:'Principio del palomar',
      theory:'Palomar: con n casillas, garantizar k+1 en alguna requiere k·n+1 objetos.',
      videos:[{...V.loidi,n:'clase de principio del palomar'},{...V.palomar,n:'refuerzo'}],
      ex:['Palomar 1–9 (palomas/palomares, 13 profesores y meses, cumpleaños, Copa Davis, equipos, saludos)','Final — 13 USB en 4 mesas','Final — 23 amigos en una fiesta'],
      goal:'Reconocer cuándo es palomar y aplicar k·n+1.' },
    { id:'d5', date:'2026-07-06', wd:'Lun 06/07', title:'Lógica proposicional y tablas de verdad',
      theory:'Conectivos, tablas de verdad, equivalencias, valor de verdad de proposiciones compuestas.',
      videos:[{...V.logica,n:'videos 1–11'}],
      ex:['Lógica — ej. 1–8 (¿es proposición? + negación)','Lógica — ej. 13–18 (valor de verdad con p=F, q=V, r=F)','Lógica — ej. 19–26 (armar tablas de verdad)','Lógica — ej. 30–40 (traducir símbolos ↔ palabras)'],
      goal:'Construir tablas de verdad y decidir valor de verdad.' },
    { id:'d6', date:'2026-07-07', wd:'Mar 07/07', title:'Mini-repaso U1',
      theory:'Consolidación de la unidad antes de pasar a PIM.', videos:[],
      ex:['Rehacer SIN MIRAR el Ej. 1 del final dic 2025','Rehacer SIN MIRAR el Ej. 1 de un modelo 2026','Anotar lo que te trabó para repasarlo'],
      goal:'Resolver el Ej. 1 completo sin ayuda.' },
  ]},
  { id:'w2', color:'#2f9e6f', title:'Semana 2 — U2: PIM / Inducción', sub:'Ejercicio 2 del final', days:[
    { id:'d7', date:'2026-07-08', wd:'Mié 08/07', title:'El método paso a paso',
      theory:'Las 4 partes: caso base → hipótesis inductiva → tesis → paso inductivo.', videos:[{...V.induccion,n:'videos 1–4'}],
      ex:['PIM ej. 3 — suma de los primeros n impares = n² (modelo guiado)'], goal:'Escribir las 4 partes de toda demostración por inducción.' },
    { id:'d8', date:'2026-07-09', wd:'Jue 09/07', title:'Inducción con sumatorias',
      theory:'Manipular el término (n+1) hasta llegar a la tesis.', videos:[{...V.induccion,n:'suma gaussiana / fórmulas de suma'}],
      ex:['PIM ej. 2 y 4','Final dic 2025 — 6+24+…+(18n−12) = 3n(3n−1)','Modelo — 1/(1·2)+…+1/(n(n+1)) = n/(n+1)'], goal:'Cerrar una sumatoria por inducción.' },
    { id:'d9', date:'2026-07-10', wd:'Vie 10/07', title:'Inducción con divisibilidad',
      theory:'Sacar factor común para mostrar la divisibilidad en el paso n+1.', videos:[{...V.induccion,n:'divisibilidad por inducción'}],
      ex:['PIM ej. 1 — n³−n divisible por 3','PIM ej. 5 — suma de 3 consecutivos divisible por 3','PIM ej. 6b — 7ⁿ+1 divisible por 8 (sug. n impar)','Final — 6ⁿ−1 divisible por 5'], goal:'Demostrar divisibilidad mostrando expresión = (algo)·(divisor).' },
    { id:'d10', date:'2026-07-13', wd:'Lun 13/07', title:'Generalizar y relaciones',
      theory:'De un patrón numérico a la fórmula general. Repaso de relaciones (reflexiva, simétrica, transitiva).', videos:[],
      ex:['PIM ej. 6c','Modelo dic 2025 — suma de cubos de impares y generalizar simbólicamente','Repasar "Relaciones y propiedades…pdf"'], goal:'Pasar de un patrón a la fórmula general y demostrarla.' },
    { id:'d11', date:'2026-07-14', wd:'Mar 14/07', title:'Mini-repaso U2',
      theory:'Dos demostraciones completas en birome cuidando justificar cada paso.', videos:[],
      ex:['Una sumatoria completa en birome','Una divisibilidad completa en birome'], goal:'Demostraciones impecables con cada paso justificado.' },
  ]},
  { id:'w3', color:'#d98a2b', title:'Semana 3 — U3: Matrices y Sistemas', sub:'Ejercicio 4 · tu apuesta más segura', days:[
    { id:'d12', date:'2026-07-15', wd:'Mié 15/07', title:'Operaciones con matrices',
      theory:'Tipos de matrices, suma, producto por escalar, traspuesta. Cuidar signos.', videos:[{...V.matrices,n:'videos 1–12'}],
      ex:['TP ej. 1 — traspuestas','TP ej. 2 — propiedades','TP ej. 3 — E = 2A−3B+C−2D','TP ej. 5 — sumas y restas'], goal:'Operar y trasponer sin errores de signo.' },
    { id:'d13', date:'2026-07-16', wd:'Jue 16/07', title:'Producto, determinantes e inversa',
      theory:'Producto de matrices, determinante 2×2 y 3×3 (Sarrus/cofactores), adjunta e inversa.', videos:[{...V.matrices,n:'videos 13–24'}],
      ex:['TP ej. 6 — productos','TP ej. 7 — hallar x,y,z,t en una igualdad de matrices','Final mayo 2026 — inversa de A 3×3 y verificar A·A⁻¹=I','Mirar capturas paso a paso (carpeta "matriz equacion, inversa 16-9")'], goal:'Calcular determinante 3×3 e inversa por adjunta, y verificar.' },
    { id:'d14', date:'2026-07-17', wd:'Vie 17/07', title:'Sistemas por Gauss y Gauss-Jordan',
      theory:'Matriz ampliada, escalonar, clasificar SCD / SCI / SI.', videos:[{...V.sistemas,n:'videos 1–7'}],
      ex:['Sistemas ej. 1 — ¿el vector es solución?','Sistemas ej. 2 — clasificar SCD/SCI/SI tras resolver','Sistemas ej. 3 — codificar un problema como SEL','Final dic 2025 / modelo 2024 — resolver por Gauss-Jordan'], goal:'Llevar a forma escalonada y clasificar el sistema.' },
    { id:'d15', date:'2026-07-20', wd:'Lun 20/07', title:'Cramer y ecuación matricial',
      theory:'Regla de Cramer (≤3 incógnitas, det≠0) y ecuación matricial X·A=B.', videos:[{...V.sistemas,n:'videos 8–11 (Cramer)'}],
      ex:['TP ej. 10 — resolver sistema con matrices','TP ej. 11 — Cramer','TP ej. 12 — valor de k para poder usar Cramer','Final mayo 2026 — ecuación matricial X·A=B despejando X'], goal:'Resolver por Cramer y despejar la ecuación matricial.' },
    { id:'d16', date:'2026-07-21', wd:'Mar 21/07', title:'Problemas que se modelan como sistema',
      theory:'Traducir un enunciado a sistema → matriz ampliada → resolver → verificar.', videos:[],
      ex:['Final — precios de 3 licencias de software ($290.000)','Final — procesador/disco/mother','Final — micro/nano'], goal:'Traducir un enunciado a sistema y resolverlo entero.' },
    { id:'d17', date:'2026-07-22', wd:'Mié 22/07', title:'Mini-repaso U3 + GeoGebra',
      theory:'GeoGebra SOLO para verificar (no reemplaza el procedimiento).', videos:[],
      ex:['Ej. 4 de dos finales','Verificar inversa y solución con GeoGebra'], goal:'Resolver el Ej. 4 completo y chequearlo.' },
  ]},
  { id:'w4', color:'#d65745', title:'Semana 4 — U5 Prog. lineal + U4 Aritmética', sub:'Ejercicios 3 y 5 del final', days:[
    { id:'d18', date:'2026-07-23', wd:'Jue 23/07', title:'Programación lineal: región factible',
      theory:'Graficar inecuaciones, recta llena (≥/≤) vs punteada (>/<), sombrear la región factible. Si dividís por un negativo, se invierte la desigualdad.', videos:[{...V.loidi,n:'clase de programación lineal'},{...V.pl1,n:''},{...V.pl2,n:''}],
      ex:['Guía ej. 2 — dibujar el recinto y verificar qué puntos son solución','Guía ej. 3 — analizar condiciones + puntos','Releer "notas programacion lineal y videos 2021.txt"'], goal:'Graficar inecuaciones y sombrear bien la región factible.' },
    { id:'d19', date:'2026-07-24', wd:'Vie 24/07', title:'Función objetivo, restricciones y óptimo',
      theory:'Variables → FO → restricciones (incl. ≥0) → graficar → evaluar vértices → elegir máx/mín.', videos:[],
      ex:['Guía ej. 1 — profes de teatro/arte (¡casi idéntico al del final!)','Guía ej. 4 — nutricionista (minimizar gasto)','Finales — Zapatillín, web/mobile, mezclas A/B ("ejercicio video 2.txt")'], goal:'Plantear FO + restricciones, evaluar vértices y decidir máx/mín.' },
    { id:'d20', date:'2026-07-27', wd:'Lun 27/07', title:'Aritmética: divisibilidad, MCD y Euclides',
      theory:'Algoritmo de Euclides: divisiones sucesivas hasta resto 0. Coprimos ⇔ MCD=1.', videos:[{...V.loidi,n:'clase de teoría de números / aritmética modular'}],
      ex:['Doc "Teoría de números. Encriptación" — Tema 1','Final — ¿146 y 291 coprimos? (Euclides)'], goal:'Calcular MCD por Euclides y decidir coprimalidad.' },
    { id:'d21', date:'2026-07-28', wd:'Mar 28/07', title:'Función φ de Euler y RSA',
      theory:'φ(p·q) = (p−1)(q−1) con p,q primos. Caso primo: φ(p)=p−1. Rol en RSA.', videos:[{...V.loidi,n:'parte de criptografía / RSA'}],
      ex:['Final — p=19, q=7, t=p·q, hallar φ(t)','Final — p=23, q=13 → φ(p·q)','Apuntes "ACTUALIDAD EN LA ENCRIPTACION" y "https"'], goal:'Calcular φ(p·q) y explicar su rol en RSA.' },
    { id:'d22', date:'2026-07-29', wd:'Mié 29/07', title:'Pregunta conceptual + repaso final',
      theory:'Respuesta conceptual (≤10 renglones) sobre aritmética modular ↔ ciberseguridad, con tus palabras.', videos:[],
      ex:['Redactar la pregunta conceptual 2 veces hasta que salga fluida','Repasar TODA la hoja de fórmulas'], goal:'Tener lista la respuesta conceptual y las fórmulas frescas.' },
  ]},
];

/* ---- Metadata por día: recursos + herramienta + quiz + tiempos ---- */
const TOOLS={
  combi:{el:'cb-n',label:'Calculadora de combinatoria'},
  matrices:{el:'mat-A',label:'Calculadora de matrices 3×3'},
  pl:{el:'pl-cons',label:'Graficador de programación lineal'},
  euclides:{el:'eu-a',label:'Verificador de Euclides (MCD)'},
  phi:{el:'phi-p',label:'Calculadora de φ de Euler'},
};
const DAYMETA={
  d1:{u:'u1',ap:'ap1',fin:'cifras',tool:'combi',quiz:'u1',mins:[20,55]},
  d2:{u:'u1',ap:'ap1',fin:'mesa',tool:'combi',quiz:'u1',mins:[20,55]},
  d3:{u:'u1',ap:'ap1',fin:'múltiplos',tool:'combi',quiz:'u1',mins:[20,55]},
  d4:{u:'u1',ap:'ap1',fin:'palomar',tool:'combi',quiz:'u1',mins:[15,45]},
  d5:{u:'u1',ap:'ap2',fin:'verdad',tool:null,quiz:'u1',mins:[25,55]},
  d6:{u:'u1',ap:'ap1',fin:'cifras',tool:'combi',quiz:'u1',mins:[10,70]},
  d7:{u:'u2',ap:'ap4',fin:'demostrar',tool:null,quiz:'u2',mins:[25,45]},
  d8:{u:'u2',ap:'ap4',fin:'demostrar',tool:null,quiz:'u2',mins:[20,55]},
  d9:{u:'u2',ap:'ap4',fin:'divisible',tool:null,quiz:'u2',mins:[20,55]},
  d10:{u:'u2',ap:'ap5',fin:'demostrar',tool:null,quiz:'u2',mins:[20,50]},
  d11:{u:'u2',ap:'ap4',fin:'demostrar',tool:null,quiz:'u2',mins:[10,70]},
  d12:{u:'u3',ap:'ap6',fin:'matriz',tool:'matrices',quiz:'u3',mins:[20,55]},
  d13:{u:'u3',ap:'ap6',fin:'inversa',tool:'matrices',quiz:'u3',mins:[20,55]},
  d14:{u:'u3',ap:'ap7',fin:'Gauss',tool:'matrices',quiz:'u3',mins:[20,55]},
  d15:{u:'u3',ap:'ap7',fin:'matricial',tool:'matrices',quiz:'u3',mins:[20,55]},
  d16:{u:'u3',ap:'ap7',fin:'sistema',tool:'matrices',quiz:'u3',mins:[15,60]},
  d17:{u:'u3',ap:'ap6',fin:'inversa',tool:'matrices',quiz:'u3',mins:[10,70]},
  d18:{u:'u5',ap:'ap9',fin:'programación',tool:'pl',quiz:'u5',mins:[25,50]},
  d19:{u:'u5',ap:'ap9',fin:'beneficio',tool:'pl',quiz:'u5',mins:[20,55]},
  d20:{u:'u4',ap:'ap8',fin:'Euclides',tool:'euclides',quiz:'u4',mins:[20,45]},
  d21:{u:'u4',ap:'ap8',fin:'φ',tool:'phi',quiz:'u4',mins:[20,45]},
  d22:{u:'u4',ap:'ap8',fin:'encriptación',tool:'phi',quiz:'u4',mins:[15,45]},
};

/* ---- Mapeo ejercicio del día → resolución paso a paso (soluciones.html) ---- */
const EXSOL={
  d1:['combi-p1','combi-p2','combi-p3'],
  d2:['combi-p4','combi-p5','combi-cifras'],
  d3:['combi-p6','combi-p12','combi-mult6','combi-mult10'],
  d4:['palomar-1','combi-13usb','palomar-23amigos'],
  d7:['pim-3'],
  d8:['pim-2','pim-final-18n','pim-frac'],
  d9:['pim-1','pim-5','pim-6b','pim-6n1'],
  d10:[null,'pim-cubos',null],
  d11:['pim-final-18n','pim-n2-5n'],
  d5:['logica-1','logica-13','logica-19','logica-30'],
  d12:['matrices-1',null,'matrices-3','matrices-5'],
  d13:['matrices-6','matrices-7',null,null],
  d14:['sistemas-1','sistemas-2','sistemas-3',null],
  d15:['matrices-9','matrices-11','matrices-12',null],
  d18:['pl-2','pl-3',null],
  d19:['pl-1','pl-4','pl-combos'],
  d20:[null,'arit-euclides146'],
  d21:['arit-phi','arit-phi',null],
  d22:['arit-conceptual',null],
};
function solLink(dayId,i){ const arr=EXSOL[dayId]; const id=arr&&arr[i]; return id?` <a class="sol-link" href="soluciones.html?ej=${id}" target="_blank" rel="noopener">resolución ↗</a>`:''; }

/* ---- Fórmulas ---- */
const FORMULAS = [
  { id:'u1', t:'Combinatoria', items:[
    'Variaciones sin repetición: <code>V(n,k) = n!/(n−k)!</code>','Variaciones con repetición: <code>VR(n,k) = nᵏ</code>',
    'Permutaciones: <code>P(n) = n!</code> · circulares: <code>(n−1)!</code>','Combinaciones: <code>C(n,k) = n!/(k!·(n−k)!)</code>',
    'Palomar: garantizar k+1 en n casillas requiere <code>k·n + 1</code> objetos','Inclusión-exclusión: <code>|A∪B∪C| = Σ|A| − Σ|A∩B| + |A∩B∩C|</code>' ]},
  { id:'u2', t:'PIM (esquema fijo)', items:[
    '1) Caso base: verificar para n=1','2) Hipótesis: suponer válido para n=h','3) Tesis: qué probar para n=h+1',
    '4) Paso inductivo: de la hipótesis llegar a la tesis','Divisibilidad: expresión en h+1 = <code>(algo)·(divisor)</code>' ]},
  { id:'u3', t:'Matrices y Sistemas', items:[
    'Determinante 3×3: Sarrus o cofactores','Inversa: <code>A⁻¹ = (1/det A)·adj(A)</code>, solo si <code>det A ≠ 0</code>. Verificar <code>A·A⁻¹ = I</code>',
    'Cramer: <code>xᵢ = det(Aᵢ)/det(A)</code>','Clasificación: det≠0 → SCD; det=0 → SCI o SI' ]},
  { id:'u4', t:'Aritmética modular', items:[
    'φ de Euler con p, q primos: <code>φ(p·q) = (p−1)·(q−1)</code>','Caso primo: <code>φ(p) = p−1</code>','Coprimos ⇔ <code>MCD = 1</code> (Euclides)' ]},
  { id:'u5', t:'Programación lineal', items:[
    'Pasos: variables → FO → restricciones (incl. ≥0) → graficar → evaluar vértices → elegir máx/mín',
    'Al graficar: ≥/≤ recta llena; >/< punteada','Si dividís por un <strong>negativo</strong>, se invierte la desigualdad' ]},
];

/* ---- Recursos ---- */
const RESOURCES = [
  { u:'⭐ Recurso principal', links:[ {k:'vid',t:V.loidi.t,s:'Misma cátedra, misma notación',h:V.loidi.u} ]},
  { u:'U1 — Lógica y Combinatoria', links:[
    {k:'vid',t:'Combinatoria — profe Alex',s:'23 videos',h:V.combi.u},{k:'vid',t:'Tablas de verdad — profe Alex',s:'11 videos',h:V.logica.u},
    {k:'pdf',t:'Apunte Combinatoria + Palomar',s:'guía de práctica',h:'1 logica y combinatoria clase 1 y 2/MD . CS BS - u1 - Apunte Teór-Práct  Combinatoria. Principio del Palomar.pdf'},
    {k:'pdf',t:'Ejercicios de lógica',s:'ej. 1–40',h:'1 logica y combinatoria clase 1 y 2/Matematicas discretas ejercicios logica.pdf'},
    {k:'pdf',t:'U1 — Lógica Teó-Práct (virtual)',s:'teoría',h:'1 logica y combinatoria clase 1 y 2/U1– Lógica Teó-Práct   MD-CsBs  VIRTUAL    doc.pdf'},
    {k:'doc',t:'U1 resolución',s:'.docx',h:'1 logica y combinatoria clase 1 y 2/U1 resolucion.docx'} ]},
  { u:'U2 — PIM / Inducción', links:[
    {k:'vid',t:'Demostraciones por inducción — MateFacil',s:'24 videos',h:V.induccion.u},
    {k:'pdf',t:'PIM. Teoría y Práctica',s:'guía principal',h:'2 pim/PIM. Teoría y Práctica.pdf'},
    {k:'pdf',t:'Relaciones y propiedades',s:'reflex/simétrica/transitiva',h:'2 pim/Relaciones y propiedades definidas en un conjunto.pdf'} ]},
  { u:'U3 — Matrices y Sistemas', links:[
    {k:'vid',t:'Matrices — profe Alex',s:'36 videos',h:V.matrices.u},{k:'vid',t:'Sistemas 3×3 (Cramer) — profe Alex',s:'11 videos',h:V.sistemas.u},
    {k:'pdf',t:'Matrices y Determinantes',s:'TP',h:'3 matrices/Matrices y Determinantes.pdf'},
    {k:'doc',t:'Sistemas de ecuaciones lineales',s:'guía',h:'3 matrices/Sistemas de ecuaciones lineales.doc'},
    {k:'doc',t:'Matrices — material teórico',s:'teoría',h:'3 matrices/Matrices. Material teórico.doc'} ]},
  { u:'U4 — Aritmética / Encriptación', links:[
    {k:'doc',t:'Teoría de números. Encriptación',s:'TP por temas',h:'4 tp aritmetica/Teoría de números . Encriptación.doc'},
    {k:'doc',t:'Actualidad en la encriptación',s:'.docx',h:'4 tp aritmetica/ACTUALIDAD EN LA ENCRIPTACION.docx'},
    {k:'doc',t:'HTTPS',s:'.docx',h:'4 tp aritmetica/https.docx'} ]},
  { u:'U5 — Programación lineal', links:[
    {k:'vid',t:'Prog. lineal 2021 (grabación 1)',s:'video',h:V.pl1.u},{k:'vid',t:'Prog. lineal 2021 (grabación 2)',s:'video',h:V.pl2.u},
    {k:'pdf',t:'Programación lineal',s:'guía',h:'5 programacion lineal 28-10/Programación lineal.pdf'},
    {k:'txt',t:'Ejercicio video 2',s:'mezclas A/B',h:'5 programacion lineal 28-10/ejercicio video 2.txt'},
    {k:'txt',t:'Notas prog. lineal y videos 2021',s:'tips de graficado',h:'5 programacion lineal 28-10/notas programacion lineal y videos 2021.txt'} ]},
];

/* ---- Clases de la cátedra (Prof. Loidi) mapeadas ---- */
const LOIDI = [
  { n:1, date:'31/03', topic:'Lógica proposicional e introducción a Combinatoria', u:'U1', parts:['v55sZtmn0CI','PDl1cwRWds8','2zEEqSZMYu0'] },
  { n:2, date:'07/04', topic:'Combinatoria (variaciones, permutaciones, combinaciones, Venn) y palomar', u:'U1', parts:['GiNibzBG8IM','xphFlxdU5vw','oF5uuM4pFLs','Za-cq6mxRRM'] },
  { n:3, date:'14/04', topic:'Combinatoria con repetición, Stifel, Pascal e inicio de Inducción', u:'U1 → U2', parts:['VZrhkXdz4wk','OhbYHOWz__c','Mbj2TO4DVoY'] },
  { n:4, date:'21/04', topic:'Inducción (divisibilidad), palomar y Relaciones', u:'U2', parts:['IfI6LFRiOv4','OxIYxa8Q3lw','hOClaBXkCBo'] },
  { n:5, date:'28/04', topic:'Inducción con sumatorias, Relaciones e inicio de Sistemas', u:'U2 → U3', parts:['rN8qmQ7Iow4','7XwTBdzrVVU','2bLuTW9qlZw','PuPrEsErZVg'] },
  { n:6, date:'05/05', topic:'Matrices, matriz ampliada, escalonamiento y determinantes', u:'U3', parts:['4nyBg1TTh2A','PGA0cmM9pSM','zW16MmodC8A'] },
  { n:7, date:'12/05', topic:'Determinantes (Cramer), inversa por adjunta y Gauss-Jordan', u:'U3', parts:['GxPWhugd0Ek','cMRIACTl5OU','yd-6eCBe6ng'] },
  { n:8, date:'19/05', topic:'Inversa, método matricial e inicio de Programación lineal (P3)', u:'U3 → U5', parts:['dFd3bWrWP-0','snQwUYK8rIA','pr7zmFRg0uI'] },
  { n:9, date:'26/05', topic:'Programación lineal (P1) y repaso del parcial', u:'U5', parts:['xIIySgHPzLk','5NKSIM87ljs','ZAjGR6_fZfo'] },
  { n:10, date:'09/06', topic:'Encriptación con matrices y aritmética modular (congruencia)', u:'U4', parts:['JLPErhQcEEg','1ucDsu6pntU'] },
  { n:11, date:'16/06', topic:'Pequeño Teorema de Fermat, potencias modulares y φ de Euler', u:'U4', parts:['Ep1HV54hwBQ','QJrWrc2yJpk'] },
];
const LOIDI_LIST='PLbJxARuJQQZnvSkJC8jFE9zJJJDPjdedn';
const ytL=id=>`https://www.youtube.com/watch?v=${id}&list=${LOIDI_LIST}`;

/* ---- Videos puntuales por día (profe Alex / MateFacil) — links exactos ---- */
const PL={ combi:'PLeySRPnY35dFF_kWyWL893posL7DNlFHa', logica:'PLeySRPnY35dHBYcVHPisjBCVHBa954rMZ', matrices:'PLeySRPnY35dEr2XewNdOjOl7Ft0tLIlKI', sistemas:'PLeySRPnY35dGyuZPOjrL_Rhm2k5y-FB5T', induccion:'PL9SnRnlzoyX3oUb5UGzhVeZCKxhcypfKu' };
const yv=(id,pl)=>`https://www.youtube.com/watch?v=${id}&list=${pl}`;
const DAYVIDS={
  d1:{label:'Combinatoria (profe Alex)',pl:'combi',items:[[1,'ec8TQjfQrGY','Qué es la combinatoria'],[2,'BKHBESHjGEA','Factorial y sus propiedades'],[3,'T8b8CYdL-4M','Operaciones con factoriales'],[5,'nz0dpuQP5xc','Principio de multiplicación (conteo)'],[6,'cAJTPxZT4zY','¿Importa o no el orden?']]},
  d2:{label:'Combinatoria (profe Alex)',pl:'combi',items:[[12,'iczs93s3k1I','Permutaciones: explicación completa (lineal, circular, repetición)'],[13,'dSDah0e5Pqo','Permutación lineal — Ejemplo 1'],[15,'IbriKkbgXNU','Variación con y sin repetición — Ej 1'],[16,'EJhi0N8uzpA','Variación con y sin repetición — Ej 2'],[17,'NZsxmLyr7eI','Variaciones: placas de auto']]},
  d3:{label:'Combinatoria (profe Alex)',pl:'combi',items:[[7,'dRN15Or4o00','Diferenciar combinación / permutación / variación'],[18,'owNUiMd7kRY','Combinación con y sin repetición'],[20,'SpcJGUiehws','Combinaciones — Ej 1 (lotería)'],[21,'MNrwZX-9RxU','Combinaciones — Ej 2'],[22,'YUKwtyCwXjg','Combinaciones — Ej 3']]},
  d5:{label:'Lógica y tablas de verdad (profe Alex)',pl:'logica',items:[[1,'vKe0UKSpNQQ','Lógica proposicional — Introducción'],[2,'kGCeqy9m2po','Conectivos lógicos'],[3,'8gCoQCkx9A0','Conectivos y tablas de verdad'],[4,'ZK8QUphO4MA','Tablas de verdad — Ejemplo 1'],[11,'M-rS-ZTsSRY','Tautología, contradicción y contingencia']],more:'Ejemplos 5 a 10 (más tablas de verdad) en la misma playlist.'},
  d7:{label:'Inducción (MateFacil)',pl:'induccion',items:[[1,'sMaz5UU9xl0','Suma de naturales (suma de Gauss)'],[2,'RpF9Z3I1cv0','Suma de los cuadrados']]},
  d8:{label:'Inducción (MateFacil)',pl:'induccion',items:[[1,'sMaz5UU9xl0','Suma de naturales (Gauss)'],[2,'RpF9Z3I1cv0','Suma de los cuadrados'],[3,'ZTledCV8bQs','Suma de los cubos'],[6,'QQbmattbUHk','Progresión geométrica']]},
  d9:{label:'Inducción (MateFacil)',pl:'induccion',items:[[7,'L47ENIt6Xqw','n²+n es par'],[8,'CfQ-SyXPYjU','8ⁿ − 3ⁿ es divisible por 5']]},
  d10:{label:'Inducción (MateFacil)',pl:'induccion',items:[[10,'pPIpL2e8eOw','Fórmula de Pascal (demostración)'],[11,'nABscJsDW6c','Suma de coeficientes binomiales'],[13,'FuwP1RGusCE','Binomio de Newton por inducción']]},
  d12:{label:'Matrices (profe Alex)',pl:'matrices',items:[[1,'RJ96S2Pt3qU','¿Qué es una matriz?'],[3,'GyrQmbxk7ds','Tipos de matrices'],[5,'aTsgBk34zyY','Matriz transpuesta'],[6,'S89lkpvajyU','Suma de matrices'],[8,'-ArUqjhQIBM','Producto por un escalar']]},
  d13:{label:'Matrices (profe Alex)',pl:'matrices',items:[[9,'Tjrm3HsqBXE','Multiplicación de matrices'],[11,'hfztTmI-U_w','Producto de matrices 3x3'],[16,'8OnOZvc5rFQ','Determinante 3x3 (regla de Sarrus)'],[17,'ks0b0jufI7Y','Menor complementario y adjunta'],[25,'ZDiZUrfG_MI','Inversa por adjunto / cofactores']]},
  d14:{label:'Sistemas 3x3 (profe Alex)',pl:'sistemas',items:[[1,'5bZ1j6wom-0','Sistemas 3x3 — Introducción'],[7,'iMCkKatIAw8','Método de Gauss — Ejemplo 1'],[8,'Tg0ou5wzR6I','Método de Gauss — Ejemplo 2'],[9,'dFmGzr1j6eY','Gauss-Jordan — Ejemplo 1'],[10,'a5FOMHC5ZNc','Gauss-Jordan — Ejemplo 2']]},
  d15:{label:'Sistemas 3x3 — Cramer (profe Alex)',pl:'sistemas',items:[[5,'8Vx3KQj7bd0','Determinantes — Cramer 1'],[6,'7d5f4PIeeBM','Determinantes — Cramer 2']]},
};

/* ---- Clase(s) de la cátedra (Loidi) a mirar cada día ---- */
const DAYLOIDI={
  d1:[1,2], d2:[2], d3:[2,3], d4:[2], d5:[1], d6:[1,2],
  d7:[3,5], d8:[5], d9:[4], d10:[4,5], d11:[3,4,5],
  d12:[6], d13:[7], d14:[6,7], d15:[7,8], d16:[7], d17:[6,7,8],
  d18:[8,9], d19:[9], d20:[10], d21:[11], d22:[10,11],
};
function loidiDayHTML(dayId){
  const cls=DAYLOIDI[dayId]; if(!cls||typeof LOIDI==='undefined')return '';
  return `<div class="day-section-label">🎬 Clase(s) de la cátedra (Loidi) para hoy</div><div class="vid-list">${cls.map(cn=>{const c=LOIDI.find(x=>x.n===cn);return c?`<div class="vid-item"><strong>Clase ${c.n}</strong> · ${c.date} — ${c.topic}<br><span class="loidi-parts-inline">${c.parts.map((id,i)=>`<a href="${ytL(id)}" target="_blank" rel="noopener">▶ Parte ${i+1}</a>`).join(' ')}</span></div>`:'';}).join('')}</div>`;
}

/* ---- Simulacros ---- */
const SIMS = [
  {id:'s1',t:'Modelo final 2024',s:'Simulacro 1 · completo cronometrado',h:'final/modelo final 2024.jpg'},
  {id:'s2',t:'Final primer llamado dic 2025',s:'Simulacro 2',h:'final/final primer llamado dic 2025.jpg'},
  {id:'s3',t:'Final 17-12-2025',s:'Simulacro 3',h:'final/final 17-12-2025.jpeg'},
  {id:'s4',t:'Final febrero 2025',s:'Simulacro 4 (opcional)',h:'final/febrero 2025.jpeg'},
  {id:'s5',t:'Final 4-12-2024',s:'práctica extra',h:'final/4-12-2024.jpg'},
  {id:'s6',t:'Final 18-12-2024',s:'práctica extra',h:'final/18-12-2024.jpg'},
  {id:'s7',t:'Final julio 2024 (o antes)',s:'práctica extra',h:'final/final julio 2024 o antes.jpg'},
  {id:'s8',t:'Modelos de examen (mayo 2026)',s:'carpeta de imágenes',h:'modelos de examen/'},
];

/* ---- Formato examen ---- */
const EXAM_FORMAT = [
  ['1','Combinatoria + Lógica','Nº de N cifras, múltiplos, repartir objetos, palomar, tabla de verdad'],
  ['2','PIM (Inducción)','Demostrar una sumatoria o una divisibilidad'],
  ['3','Programación lineal','Plantear FO + restricciones, graficar y hallar el óptimo'],
  ['4','Matrices y sistemas','Gauss / Gauss-Jordan / Cramer / inversa / ecuación matricial'],
  ['5','Aritmética / Encriptación','φ de Euler, Euclides, RSA o la pregunta conceptual'],
];
const EXAM_CHECK = [
  'Leer TODO el examen antes de arrancar y empezar por los 2–3 temas más firmes',
  'Justificar cada paso (la cátedra penaliza la cuenta sin explicación)','Resolver todo en birome',
  'GeoGebra solo para verificar, no como respuesta','Objetivo mínimo: 2 ejercicios impecables. Meta real: 3–4 sólidos',
  'Saber de memoria: V/P/C, esquema PIM, det e inversa 3×3, Cramer, φ(p·q)=(p−1)(q−1), pasaje de inecuaciones',
];

/* ---- Quiz ---- */
const QUIZ = {
  u1: { name:'U1 Combinatoria + Lógica', q:[
    { q:'Con los dígitos 1,2,3,5,8,9 (sin repetir), ¿cuántos números de 4 cifras hay?', o:['6⁴ = 1296','V(6,4) = 360','C(6,4) = 15','4! = 24'], c:1, e:'Importa el orden y no se repite → variaciones V(6,4)=6·5·4·3=360.' },
    { q:'¿De cuántas formas se sientan 8 personas en una mesa redonda?', o:['8!','7!','8·7','C(8,2)'], c:1, e:'Permutación circular: (n−1)! = 7!.' },
    { q:'¿Cuántos strings distintos se forman con ABCD sin repetir?', o:['4³','C(4,2)','4! = 24','4²'], c:2, e:'Permutación de 4 elementos distintos = 4! = 24.' },
    { q:'Para garantizar que 2 personas cumplan el mismo mes, ¿cuántas hacen falta como mínimo?', o:['12','13','24','2'], c:1, e:'Palomar: 12 casillas (meses) → 12+1 = 13.' },
    { q:'Si p=F, q=V, ¿cuál es el valor de p → q?', o:['Falso','Verdadero','Indeterminado','Depende de r'], c:1, e:'F → V es Verdadero (el condicional solo es falso con V→F).' },
    { q:'¿Cuándo se usan combinaciones en vez de variaciones?', o:['Cuando importa el orden','Cuando NO importa el orden','Cuando hay repetición','Siempre'], c:1, e:'Combinaciones = selección sin que importe el orden.' },
  ]},
  u2: { name:'U2 PIM / Inducción', q:[
    { q:'¿Cuál es el primer paso de toda demostración por inducción?', o:['La tesis','El caso base','El paso inductivo','La hipótesis'], c:1, e:'Se verifica el caso base (n=1 normalmente).' },
    { q:'En la hipótesis inductiva uno…', o:['Demuestra para n+1','Supone verdadero para n=h','Verifica n=1','Generaliza'], c:1, e:'Se SUPONE que la propiedad vale para n=h.' },
    { q:'Para probar que 7ⁿ+1 es divisible por 8, en el paso n+1 conviene…', o:['Dividir por 7','Escribir 7^(h+1)=7·7^h y usar la hipótesis','Probar con n=2','Usar la fórmula de Gauss'], c:1, e:'Se reescribe 7^(h+1)=7·7^h para sacar factor común y usar la hipótesis.' },
    { q:'La suma de los primeros n números impares es igual a…', o:['n','n²','n(n+1)/2','2n'], c:1, e:'1+3+5+…+(2n−1) = n².' },
    { q:'En divisibilidad, el paso inductivo termina mostrando que la expresión es…', o:['Un número primo','Igual a (algo)·(divisor)','Mayor que 0','Par'], c:1, e:'Se muestra que es múltiplo del divisor: (algo)·(divisor).' },
  ]},
  u3: { name:'U3 Matrices y Sistemas', q:[
    { q:'¿Cuándo existe la inversa de A?', o:['Siempre','Si det A ≠ 0','Si A es cuadrada','Si det A = 0'], c:1, e:'A⁻¹ existe sólo si el determinante es distinto de 0.' },
    { q:'Si det A = 0, el sistema A·x=b es…', o:['SCD','SCI o SI','Siempre incompatible','Siempre compatible'], c:1, e:'Con det=0 puede ser SCI (infinitas) o SI (sin solución).' },
    { q:'En Cramer, xᵢ = …', o:['det(A)/det(Aᵢ)','det(Aᵢ)/det(A)','det(Aᵢ)·det(A)','1/det(A)'], c:1, e:'xᵢ = det(Aᵢ)/det(A), reemplazando la columna i por b.' },
    { q:'La fórmula de la inversa por adjunta es…', o:['A⁻¹ = adj(A)·det(A)','A⁻¹ = (1/det A)·adj(A)','A⁻¹ = Aᵀ','A⁻¹ = det(A)/adj(A)'], c:1, e:'A⁻¹ = (1/det A)·adj(A).' },
    { q:'Un sistema con solución única se clasifica como…', o:['SI','SCI','SCD','Indeterminado'], c:2, e:'SCD = Sistema Compatible Determinado (única solución).' },
  ]},
  u4: { name:'U4 Aritmética / Encriptación', q:[
    { q:'Con p=19 y q=7 primos, φ(p·q) = …', o:['133','108','126','12'], c:1, e:'φ = (19−1)(7−1) = 18·6 = 108.' },
    { q:'Dos números son coprimos cuando…', o:['Su MCD = 1','Son primos','Su suma es par','Uno divide al otro'], c:0, e:'Coprimos ⇔ MCD = 1.' },
    { q:'El algoritmo de Euclides calcula…', o:['El MCM','El MCD','Los divisores','φ(n)'], c:1, e:'Euclides halla el MCD por divisiones sucesivas hasta resto 0.' },
    { q:'φ de un primo p es…', o:['p','p−1','p+1','2p'], c:1, e:'Todos los menores que p son coprimos con él → φ(p)=p−1.' },
    { q:'En RSA, φ(p·q) sirve para…', o:['Cifrar el mensaje','Calcular las claves','Romper el sistema','Nada'], c:1, e:'φ(p·q) interviene en el cálculo de las claves (exponentes) de RSA.' },
  ]},
  u5: { name:'U5 Programación lineal', q:[
    { q:'En una restricción con ≤, la recta se dibuja…', o:['Punteada','Llena','No se dibuja','Doble'], c:1, e:'≥/≤ → recta llena (incluye el borde). >/< → punteada.' },
    { q:'El óptimo de un problema de PL se encuentra…', o:['En el centro de la región','En un vértice de la región factible','Fuera de la región','En el origen siempre'], c:1, e:'El máx/mín está en un vértice de la región factible.' },
    { q:'Si dividís una desigualdad por un número negativo…', o:['No cambia','Se invierte el sentido','Se vuelve igualdad','Se anula'], c:1, e:'Al multiplicar/dividir por negativo se invierte ≤ ↔ ≥.' },
    { q:'¿Qué evaluás en cada vértice?', o:['Las restricciones','La función objetivo','El determinante','El factorial'], c:1, e:'Se evalúa la función objetivo Z en cada vértice y se compara.' },
    { q:'Las restricciones x≥0, y≥0 representan…', o:['El primer cuadrante','Todo el plano','Una recta','Un punto'], c:0, e:'x≥0 e y≥0 limitan al primer cuadrante.' },
  ]},
};

/* ---- Flashcards ---- */
const FLASH = {
  u1:[ {f:'Variaciones sin repetición V(n,k)',b:'n! / (n−k)!'},{f:'Variaciones con repetición',b:'nᵏ'},{f:'Permutaciones de n',b:'n!'},
       {f:'Permutación circular (mesa redonda)',b:'(n−1)!'},{f:'Combinaciones C(n,k)',b:'n! / (k!·(n−k)!)'},{f:'Palomar: garantizar k+1 en n casillas',b:'k·n + 1 objetos'} ],
  u2:[ {f:'Las 4 partes del PIM',b:'Caso base → Hipótesis → Tesis → Paso inductivo'},{f:'Suma de los primeros n impares',b:'n²'},{f:'Divisibilidad: cómo cierra el paso n+1',b:'Mostrar expresión = (algo)·(divisor)'} ],
  u3:[ {f:'¿Cuándo existe A⁻¹?',b:'Si det A ≠ 0'},{f:'Inversa por adjunta',b:'A⁻¹ = (1/det A)·adj(A)'},{f:'Regla de Cramer',b:'xᵢ = det(Aᵢ)/det(A)'},
       {f:'det≠0 / det=0',b:'det≠0 → SCD · det=0 → SCI o SI'},{f:'Verificar la inversa',b:'A·A⁻¹ = I'} ],
  u4:[ {f:'φ(p·q) con p,q primos',b:'(p−1)·(q−1)'},{f:'φ(p) con p primo',b:'p − 1'},{f:'Coprimos ⇔',b:'MCD = 1'},{f:'¿Cómo se halla el MCD?',b:'Algoritmo de Euclides (divisiones hasta resto 0)'} ],
  u5:[ {f:'Recta llena vs punteada',b:'≥/≤ llena · >/< punteada'},{f:'¿Dónde está el óptimo?',b:'En un vértice de la región factible'},{f:'Dividir por negativo',b:'Invierte el sentido de la desigualdad'},{f:'Pasos de PL',b:'Variables → FO → restricciones → graficar → evaluar vértices → elegir máx/mín'} ],
};

/* ---- Banco de ejercicios resueltos ---- */
const BANCO = [
  { u:'U1', t:'Números de 4 cifras con 1,2,3,5,8,9 (sin repetir)', sol:'<p><strong>Orden:</strong> importa · <strong>Repetición:</strong> no · <strong>Uso:</strong> 4 de 6.</p><p>→ Variaciones V(6,4) = 6·5·4·3 = <strong>360</strong>.</p><p>Con repetición: 6⁴ = 1296. De 3 cifras sin repetir: V(6,3)=6·5·4=120.</p>' },
  { u:'U2', t:'Demostrar que 7ⁿ+1 es divisible por 8 (n impar)', sol:'<p><strong>Base (n=1):</strong> 7¹+1 = 8, divisible por 8. ✔</p><p><strong>Hipótesis:</strong> 7ʰ+1 = 8k.</p><p><strong>Tesis:</strong> 7^(h+2)+1 divisible por 8 (impar→impar suma 2).</p><p><strong>Paso:</strong> 7^(h+2)+1 = 49·7ʰ+1 = 49(7ʰ+1) − 48 = 49·8k − 48 = 8(49k−6). ✔ Múltiplo de 8.</p>' },
  { u:'U3', t:'Resolver sistema 3×3 por Cramer', sol:'<p>Escribí A (coeficientes) y b (términos). Calculá det(A).</p><p>Si det(A)≠0: xᵢ = det(Aᵢ)/det(A), donde Aᵢ es A con la columna i reemplazada por b.</p><p>Verificá reemplazando la solución en las 3 ecuaciones. (Usá la <em>Herramienta de matrices</em> para chequear.)</p>' },
  { u:'U4', t:'¿146 y 291 son coprimos? (Euclides)', sol:'<p>291 = 1·146 + 145<br>146 = 1·145 + 1<br>145 = 145·1 + 0</p><p>Último resto no nulo = <strong>MCD = 1</strong> → <strong>SÍ son coprimos.</strong></p>' },
  { u:'U4', t:'φ(t) con p=19, q=7', sol:'<p>t = 19·7 = 133.</p><p>φ(t) = (p−1)(q−1) = 18·6 = <strong>108</strong>.</p><p>Significa que hay 108 números menores que 133 coprimos con él; se usa para generar las claves en RSA.</p>' },
  { u:'U5', t:'Maximizar Z=3x+2y con x+y≤4, x+3y≤6, x,y≥0', sol:'<p>Vértices de la región: (0,0), (4,0), (3,1), (0,2).</p><p>Z(0,0)=0 · Z(4,0)=12 · Z(3,1)=11 · Z(0,2)=4.</p><p>Máximo Z = <strong>12</strong> en (4,0). (Verificalo con la <em>Herramienta de PL</em>.)</p>' },
];

/* ---- Finales reales transcriptos ---- */
const FINALS = [
  { tag:'2024', t:'Modelo final 2024', file:'final/modelo final 2024.jpg', ex:[
    'a) Con las cifras 2,3,4,5 y 0, ¿cuántos números de 3 cifras divisibles por 5 (sin repetir las cifras)? b) Completar: "En una fiesta se encuentran 23 amigos, es correcto afirmar que…" (concepto matemático).',
    'Demostrar por PIM que P(n)=7ⁿ+1 es divisible por 8, ∀ natural. Sug: considerar n=2i−1.',
    'Zapatillín (básquet/fútbol): fútbol 120 pares y básquet 32 pares por equipo; entrenadores fútbol $300.000 y básquet $1.000.000 (presup. $30.000.000); 4000 cc de suplemento, básquet 3cc y fútbol 1cc por par. a) FO y restricciones. b) Gráfico. c) Máximo de equipos de cada tipo.',
    'Dada A=(1 2 3 ; 3 2 1 ; 1 0 1): A) hallar la adjunta de A. B) calcular A⁻¹ usando determinantes.',
    'Resolver A) o B). A) ≤15 renglones: relación matemática–tema–Sistemas. B) p=23, q=13, t=p·q, hallar φ(t); justificar, qué significa y relación con la encriptación.' ]},
  { tag:'dic-2025', t:'Final primer llamado — diciembre 2025', file:'final/final primer llamado dic 2025.jpg', ex:[
    'Con 1,2,3,5,8 y 9 sin repetir: A) ¿cuántos números de 4 cifras? ¿y si se pudieran repetir? B) ¿y de 3 cifras? ¿cuántos de estos son múltiplos de 10?',
    'Analizar/demostrar por PIM que 6+24+42+…+(18n−12)=3n(3n−1), ∀ n entero positivo.',
    'Actividad solidaria del Lab de software con docentes de Mate y EPyA: los de Mate ≤ la mitad de los de arte; hay 15 de Mate y 10 de EPyA; el Lab recibe $150 mil por Mate y $120 mil por EPyA por día. Máximo beneficio: FO, restricciones, graficar y responder.',
    'Resolver por Gauss/Gauss-Jordan y expresar como ecuación matricial: { x−2y−z=2 ; y+z=1 ; −2x=y }.',
    '≤10 renglones: relación entre la aritmética modular y su aplicación en Sistemas (sin definiciones).' ]},
  { tag:'17-dic-25', t:'Final 17-12-2025', file:'final/final 17-12-2025.jpeg', ex:[
    'a) Clave de 4 letras seguidas de 3 dígitos; cada código tarda 2 ms. A) ¿cuánto tiempo para chequear todas y descifrar con seguridad? B) ¿alcanza un día? (25 letras, 10 dígitos).',
    'PIM: la suma de los cubos de los n primeros impares es n²·(2n²−1). Generalizar simbólicamente y demostrar.',
    'Sistema de ecuaciones matriciales. A) Resolver X·Y=(1 −3 ; 3 −4). B) ¿se puede calcular la inversa de X e Y? Siendo (3 0 ; 3 1)·X=(3 −3 ; 5 −4).',
    'a) De los números 11 al 20 elijo 6 y aseguro que hay un par que suma 31: justificar la veracidad (palomar). b) Reflexión: matemática y su relación con encriptación/ciberseguridad.',
    'En un año: hasta 60 productos web ($5 M c/u) y 70 mobile ($7 M c/u); procesa máximo 100 (web+mobile). Programación lineal: ¿cuántas unidades de cada uno para máximo beneficio?' ]},
  { tag:'feb-2025', t:'Final febrero 2025', file:'final/febrero 2025.jpeg', ex:[
    'a) ¿Qué clave es más segura: 4 dígitos + 3 vocales, o 3 consonantes + 2 dígitos? (sin repetición). b) ¿146 y 291 son coprimos? Algoritmo de Euclides.',
    'PIM: 1/(1·2)+1/(2·3)+…+1/(n(n+1)) = n/(n+1), ∀n∈N.',
    'Empresa fabrica micro (2 trabajadores × 20 h, $3000/u) y nano (3 obreros × 10 h, $2000/u); dispone de 60 empleados durante 480 h. ¿Cantidades de cada uno para máximo beneficio?',
    'Tres ecuaciones forman un sistema 3×3: explicitarlo, escribir matriz ampliada y resolver por Gauss-Jordan: 2x+y−z=8 ; 2z−y=3x−11 ; 2z+y=2x−3.',
    'a) p=19, q=7, t=p·q, hallar φ(t); justificar, qué función es y qué significa. b) Valor de verdad: "la matriz de incógnitas del ej.4 (sin términos independientes) admite inversa".' ]},
  { tag:'2024', t:'Final 4-12-2024', file:'final/4-12-2024.jpg', ex:[
    'PIM: P(n)=7ⁿ+1 divisible por 8 (i=1,2,3… → n=1,3,5…); considerar 7^(2i−1)+1.',
    'Emprendedor: 200 plaquetas y 300 sensores. Combo A=2 plaquetas+2 sensores ($30); combo B=1 plaqueta+3 sensores ($15). Máximo beneficio: FO y resolver analítica y gráficamente (programación lineal).',
    'a) Resolver por Gauss/Gauss-Jordan: 2y−3=2z−x ; x−y+4z=−3 ; −2z+y=4+x. b) Examen de 6 preguntas sobre 10, cada una ≥1 punto y una vale 3: ¿de cuántas maneras asignar el valor de cada pregunta?',
    'Se encriptó una clave con la matriz B; la clave encriptada es −189; 35; −177; 31. Con matrices y el diccionario (A=1, B=2…), hallar la clave original. B=(−5 −6 ; 1 1).',
    'A) i) mcd(a,n)=1 y a·X≡b(n): resolver 11·X≡5(7) con aritmética modular. ii) Enunciar el Teorema de Euler y su aplicación a la encriptación asimétrica. C) Tema a elección sobre aritmética modular/encriptación.' ]},
  { tag:'2024', t:'Final 18-12-2024', file:'final/18-12-2024.jpg', ex:[
    'a) Clave de 3 letras seguidas de 4 números; cada código tarda 1 ms: ¿cuánto para chequear todas y descifrar? ¿y sin repetir letras ni números? (23 letras, 10 dígitos). b) Contraseña de 5 cifras que empieza con 0 o 6 y es múltiplo de 5, sin repetir: ¿cuántas opciones?',
    'PIM: 2 divide a n²+5n, ∀ n entero positivo.',
    'Taller con electricistas y mecánicos: mecánicos ≥ electricistas y mecánicos ≤ doble de electricistas; hay 30 electricistas y 20 mecánicos; jornada $15.000 electricista y $12.000 mecánico. ¿Cuántos de cada clase para máximo beneficio? (PL).',
    'A) Resolver por Gauss/Gauss-Jordan: 7x−4y=−2z ; 2x−5y+3z+12=0 ; 3x−5z=1−2y. B) ¿Para qué valor/es de "a" la matriz A no admite inversa? A=(−1 4 2a ; 2 −3 1 ; −2 a 9).',
    'A) ≤15 renglones: relación matemática–tema–Sistemas. B) i) ¿34 y 510 coprimos? (Euclides). ii) Explicar el Pequeño Teorema de Fermat.' ]},
  { tag:'jul-2024', t:'Final julio 2024 (o antes)', file:'final/final julio 2024 o antes.jpg', ex:[
    'a) IATA asigna a cada aeropuerto un código de 3 letras (EZE, BCN…): ¿cuántos códigos distintos usando sólo 18 letras? b) PIM: P(n)=7ⁿ+1 divisible por 8 (n=2i−1).',
    'a) Hallar (analítica y gráficamente) la región del plano: { x≥−2 ; y+1≥0 ; 2x+y≤3 ; y−2x>−1 }. b) Si es acotada, indicar los vértices.',
    'a) Resolver por Gauss/Gauss-Jordan: { y−3/2=z−½x ; x−y+4z=−3 ; −2z+y=4+x }. b) Examen de 5 preguntas sobre 10, cada una entero ≥1 y una vale 2: ¿de cuántas maneras asignar el valor de cada una?',
    'Se encriptó con la matriz M; la clave encriptada es −189; 35; −177; 31. Con matrices y el diccionario, hallar la clave original. B=(−5 −6 ; 1 1).',
    'A) o B). A) RSA: "e tal que 1<e<φ(n) y coprimo con φ(n)". ¿Qué significa que sea coprimo con φ(n)? ¿Qué significa φ(n)? B) Aritmética modular e implicancias en la encriptación asimétrica.' ]},
  { tag:'2026', t:'Modelo 2026 — A (19/05)', file:'modelos de examen/WhatsApp Image 2026-05-19 at 10.42.26.jpeg', ex:[
    'a) 13 USB para repartir en 4 mesas distintas: ¿de cuántas maneras? ¿y si en la primera mesa van mínimo 4? b) Con 0,1,2,3,4,5,6 y 7: ¿cuántos números de 3 cifras sin repetir múltiplos de 6?',
    'Inducción: 1/(1·2)+1/(2·3)+…+1/(n(n+1)) = n/(n+1), ∀n∈N.',
    'a) Hallar X=(a ; b) tal que (2 1 ; 2 0 ; 0 2)·X+(2 1 ; 2 0 ; 0 2)·X=(6 ; 5 ; 8). b) Realizar ½·Aᵀ·D e indicar la Dim del resultado. A=(1 1 3 ; 4 −1 0 ; 0 1 2), D=(1 ; 2 ; −1).',
    'Por 3 software se pagó $290.000. 2 licencias del 1º = 3 del 2º. El 3º = la mitad del (1º+2º) menos $10.000. a) Plantear sistema + matriz ampliada. b) Resolver (Gauss/Gauss-Jordan/determinantes).',
    'Si A admite inversa, hallarla; justificar y verificar. A=(1 2 −2 ; 0 −1 3 ; −2 2 1).' ]},
  { tag:'2026', t:'Modelo 2026 — B (21/05)', file:'modelos de examen/WhatsApp Image 2026-05-21 at 14.29.54.jpeg', ex:[
    'a) Familia (padres + 3 hijos) en un banco de 5 lugares consecutivos: ¿de cuántas maneras se sientan? ¿y en una mesa rectangular? b) ¿Cuántas personas en una fiesta para asegurar que 2 cumplan el mismo día de la semana? (palomar).',
    'Inducción: 6ⁿ−1 es divisible por 5, ∀n∈N.',
    'a) p verdadera, q falsa, r falsa: valor de verdad de i) ¬r∨(p∧q) ii) (p∨q)→(¬r) iii) ¬(p∨q)∨q. b) Pasar a lenguaje coloquial (p: ayer fue martes, q: hoy hay parcial, r: estudié mucho): i) (p∧q)→r ii) ¬p∨(q∧¬r).',
    'Procesador + disco sólido + mother = $95.000. 4 discos = 1 procesador. 6 mother = 1 procesador + 4 discos. a) Sistema + matriz ampliada. b) Resolver (Gauss/Gauss-Jordan/determinantes).',
    'Hallar A⁻¹ y verificar, siendo A=(1 1 1 ; 1 −1 2 ; −2 −1 3).' ]},
];

/* ---- Glosario ---- */
const GLOSARIO = [
  ['SCD','Sistema Compatible Determinado: tiene una única solución (det≠0).'],
  ['SCI','Sistema Compatible Indeterminado: infinitas soluciones (det=0).'],
  ['SI','Sistema Incompatible: no tiene solución.'],
  ['Coprimos','Dos números cuyo MCD es 1 (no comparten factores primos).'],
  ['φ (indicatriz de Euler)','Cantidad de números menores que n y coprimos con n. Para p,q primos: φ(p·q)=(p−1)(q−1).'],
  ['Algoritmo de Euclides','Método para hallar el MCD por divisiones sucesivas hasta resto 0.'],
  ['Variación','Selección ordenada de k elementos de n (importa el orden).'],
  ['Combinación','Selección NO ordenada de k elementos de n.'],
  ['Permutación','Ordenamiento de todos los elementos. Circular: (n−1)!.'],
  ['Principio del palomar','Si hay más objetos que casillas, alguna casilla tiene ≥2. Generalizado: k·n+1 → alguna con k+1.'],
  ['Caso base','Primer valor que se verifica en una demostración por inducción.'],
  ['Hipótesis inductiva','Suponer la propiedad válida para n=h.'],
  ['Determinante','Número asociado a una matriz cuadrada; si es ≠0 la matriz es invertible.'],
  ['Adjunta','Matriz de cofactores traspuesta; sirve para calcular la inversa.'],
  ['Región factible','Conjunto de puntos que cumplen todas las restricciones en PL.'],
  ['Función objetivo','Expresión Z a maximizar o minimizar en programación lineal.'],
  ['RSA','Sistema de cifrado asimétrico basado en la dificultad de factorizar p·q y en φ(p·q).'],
  ['Matriz ampliada','Matriz de coeficientes con la columna de términos independientes añadida.'],
];

/* =========================================================================
   Estado
   ========================================================================= */
const STORE_KEY = 'md_workspace_v2';
let state = load();
function load(){ try{ return Object.assign(blank(), JSON.parse(localStorage.getItem(STORE_KEY))||{}); }catch{ return blank(); } }
function blank(){ return { ex:{}, days:{}, notes:{}, exNotes:{}, sims:{}, simScores:{}, examChk:{}, pomoCount:0, pomoDate:'', theme:'light',
  studyDates:[], studyMinutes:{}, confidence:{}, examDate:DEFAULT_EXAM, dateOverrides:{}, lastBackup:'', quizBest:{}, flash:{} }; }
function save(){ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

let TOTAL_EX=0; WEEKS.forEach(w=>w.days.forEach(d=>TOTAL_EX+=d.ex.length));

/* helpers */
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const enc=p=>p.split('/').map(encodeURIComponent).join('/');
const todayISO=()=>{ const d=new Date(); return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10); };
const examDate=()=>state.examDate||DEFAULT_EXAM;
const dayDate=d=>state.dateOverrides[d.id]||d.date;
function fmtDate(iso){ const[y,m,dd]=iso.split('-'); const me=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']; return `${dd} ${me[+m-1]} ${y}`; }
function addDays(iso,n){ const d=new Date(iso+'T00:00:00'); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }
function markStudyToday(){ const t=todayISO(); if(!state.studyDates.includes(t)){ state.studyDates.push(t); save(); } }

/* =========================================================================
   Render principal
   ========================================================================= */
function render(){ renderRoadmap(); renderFormulas(); renderRecursos(); renderSimulacros(); renderExamen();
  renderCalendar(); renderGlosario(); renderQuizUnits(); buildFlashUnitSelect(); renderBanco(); renderFinales(); renderVideos(); renderApuntes(); renderSimChecklist(); renderSimHistory();
  renderDashboard(); updateProgress(); checkBackupBanner(); }
const exId=(d,i)=>`${d}_${i}`;

function renderRoadmap(){
  const root=$('#roadmap'); root.innerHTML='';
  WEEKS.forEach(w=>{
    const total=w.days.reduce((a,d)=>a+d.ex.length,0);
    const done=w.days.reduce((a,d)=>a+d.ex.filter((_,i)=>state.ex[exId(d.id,i)]).length,0);
    const wk=document.createElement('div'); wk.className='week';
    wk.innerHTML=`<div class="week-head"><span class="week-dot" style="background:${w.color}"></span>
      <h3>${w.title}</h3><span class="wk-prog">${done}/${total}</span><span class="caret">▸</span></div>
      <div class="week-body">${w.days.map(dayHTML).join('')}</div>`;
    wk.querySelector('.week-head').addEventListener('click',()=>wk.classList.toggle('open'));
    root.appendChild(wk);
  });
  bindDayEvents(root); applyRoadFilter();
}
function dayHTML(d){
  const isToday=dayDate(d)===todayISO(), dd=state.days[d.id];
  const dv=DAYVIDS[d.id];
  const loidiH=loidiDayHTML(d.id);
  // videos sueltos de refuerzo (no playlists, no la playlist de Loidi, y no los ids que ya salen en las clases de Loidi)
  const extra=d.videos.filter(v=>!/PLeySRPnY35|PL9SnRnlzoyX|PLbJxARuJQQZ|pr7zmFRg0uI|xIIySgHPzLk/.test(v.u));
  const extraH=extra.length?`<div class="day-section-label">🎬 Video de refuerzo</div><div class="vid-list">${extra.map(v=>`<div class="vid-item"><a href="${v.u}" target="_blank" rel="noopener">${v.t}${v.n?` — <em>${v.n}</em>`:''}</a></div>`).join('')}</div>`:'';
  const vidsExact=dv?`<div class="day-section-label">🎬 Videos puntuales — ${dv.label} · <a href="https://www.youtube.com/playlist?list=${PL[dv.pl]}" target="_blank" rel="noopener">curso completo</a></div><div class="vid-list">${dv.items.map(it=>`<div class="vid-item"><a href="${yv(it[1],PL[dv.pl])}" target="_blank" rel="noopener"><strong>${it[0]}.</strong> ${it[2]}</a></div>`).join('')}${dv.more?`<div class="vid-item muted" style="padding-left:18px">${dv.more}</div>`:''}</div>`:'';
  const vids=loidiH+extraH+vidsExact;
  const exs=`<div class="day-section-label">📝 Ejercicios</div><ul class="ex-list">${d.ex.map((e,i)=>{const id=exId(d.id,i);return `<li class="ex-item"><input type="checkbox" id="${id}" data-ex="${id}" ${state.ex[id]?'checked':''}><label for="${id}">${e}${solLink(d.id,i)}</label></li>`;}).join('')}</ul>`;
  const m=DAYMETA[d.id];
  const estim=m?`<span class="day-estim">⏱ ~${m.mins[0]+m.mins[1]} min</span>`:'';
  const sessBtn=m?`<button class="btn sess-open-btn" onclick="openSession('${d.id}')">▶ Empezar sesión guiada</button>`:'';
  return `<div class="day-block ${isToday?'is-today':''} ${dd?'done':''}" data-day="${d.id}" data-search="${(d.title+' '+d.theory+' '+d.ex.join(' ')).toLowerCase()}">
    <div class="day-top"><div class="day-meta"><div class="day-date">${d.wd}${dayDate(d)!==d.date?' (movido)':''} ${estim}</div>
    <div class="day-title">${d.title}${isToday?'<span class="badge-today">Hoy</span>':''}</div><div class="day-theory">${d.theory}</div>${sessBtn}</div></div>
    ${vids}${exs}${dayHoyRow(d)}<div class="goal">🎯 <span><strong>Meta:</strong> ${d.goal}</span></div>
    <textarea class="note-area" data-note="${d.id}" placeholder="Notas, dudas o resultados…">${state.notes[d.id]||''}</textarea>
    <label class="day-check"><input type="checkbox" data-day-done="${d.id}" ${dd?'checked':''}> Marcar día como completado</label></div>`;
}
function bindDayEvents(root){
  root.querySelectorAll('[data-ex]').forEach(cb=>cb.addEventListener('change',e=>{state.ex[e.target.dataset.ex]=e.target.checked; if(e.target.checked)markStudyToday(); save(); updateProgress(); refreshWeekCounts(); applyRoadFilter();}));
  root.querySelectorAll('[data-day-done]').forEach(cb=>cb.addEventListener('change',e=>{state.days[e.target.dataset.dayDone]=e.target.checked; save(); e.target.closest('.day-block').classList.toggle('done',e.target.checked); renderCalendar();}));
  root.querySelectorAll('[data-note]').forEach(ta=>ta.addEventListener('input',e=>{state.notes[e.target.dataset.note]=e.target.value; save();}));
}
function refreshWeekCounts(){ $$('#roadmap .week').forEach((wk,i)=>{const w=WEEKS[i];const total=w.days.reduce((a,d)=>a+d.ex.length,0);const done=w.days.reduce((a,d)=>a+d.ex.filter((_,j)=>state.ex[exId(d.id,j)]).length,0); wk.querySelector('.wk-prog').textContent=`${done}/${total}`;}); }

/* filtros + buscador */
let roadFilter='all';
function applyRoadFilter(){
  const term=($('#roadSearch')?.value||'').toLowerCase();
  $$('#roadmap .day-block').forEach(b=>{
    const done=b.classList.contains('done');
    let ok = roadFilter==='all' || (roadFilter==='done'&&done) || (roadFilter==='pending'&&!done);
    if(ok && term) ok = b.dataset.search.includes(term);
    b.style.display = ok?'':'none';
  });
}

/* =========================================================================
   Fórmulas / Recursos / Simulacros / Examen / Glosario
   ========================================================================= */
function renderFormulas(){ $('#formulas').innerHTML=FORMULAS.map(f=>`<div class="formula-card"><h3>${f.t}</h3><ul>${f.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`).join(''); }
function renderRecursos(){
  const loidi=`<details class="banco-item" open style="margin-bottom:18px"><summary>⭐ Clases de la cátedra — Prof. Loidi (11 clases mapeadas)</summary>
    <p class="muted" style="margin:8px 0">Tema estimado por orden de fechas + ancla confirmada de Programación lineal (19/05 y 26/05). Verificá abriendo el primer minuto. <a href="${enc('CLASES-LOIDI.md')}" target="_blank">Ver documento completo</a></p>
    ${LOIDI.map(c=>`<div class="loidi-row"><div class="loidi-meta"><strong>Clase ${c.n}</strong> · ${c.date} <span class="tag-u">${c.u}</span><br><span class="muted">${c.topic}</span></div><div class="loidi-parts">${c.parts.map((id,i)=>`<a href="${ytL(id)}" target="_blank" rel="noopener" class="part-link">▶ P${i+1}</a>`).join('')}</div></div>`).join('')}</details>`;
  const rest=RESOURCES.map(r=>`<div class="res-unit"><h3>${r.u}</h3><div class="res-links">${r.links.map(l=>{const href=l.k==='vid'?l.h:enc(l.h);const ic={vid:'▶',pdf:'PDF',doc:'DOC',img:'IMG',txt:'TXT'}[l.k];return `<a class="res-link" href="${href}" target="_blank" rel="noopener"><span class="ic ${l.k}">${ic}</span><span>${l.t}<small>${l.s}</small></span></a>`;}).join('')}</div></div>`).join('');
  $('#recursos').innerHTML=loidi+rest;
}
function renderSimulacros(){
  $('#simulacros').innerHTML=SIMS.map(s=>{const done=state.sims[s.id]?'done':'';return `<div class="sim-item ${done}" data-sim="${s.id}"><input type="checkbox" data-sim-chk="${s.id}" ${state.sims[s.id]?'checked':''}><div class="sim-body"><strong>${s.t}</strong><div class="muted">${s.s}</div></div><input type="number" class="sim-score-in" min="0" max="10" step="0.5" placeholder="nota" data-sim-score="${s.id}" value="${state.simScores[s.id]??''}"><a class="sim-open res-link" style="box-shadow:none" href="${enc(s.h)}" target="_blank" rel="noopener">Abrir ↗</a></div>`;}).join('');
  $$('[data-sim-chk]').forEach(cb=>cb.addEventListener('change',e=>{state.sims[e.target.dataset.simChk]=e.target.checked; save(); e.target.closest('.sim-item').classList.toggle('done',e.target.checked); renderSimHistory();}));
  $$('[data-sim-score]').forEach(inp=>inp.addEventListener('change',e=>{const v=e.target.value; state.simScores[e.target.dataset.simScore]=v===''?undefined:parseFloat(v); save(); renderSimHistory();}));
}
function renderExamen(){
  $('#examFormat').innerHTML=`<table class="exam-table"><tr><th>Ej.</th><th>Tema</th><th>Qué piden</th></tr>${EXAM_FORMAT.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table><p class="muted" style="margin-top:12px">Se aprueba resolviendo bien <strong>2 de 5</strong>. Hay que justificar todo y resolver en birome.</p>`;
  $('#examChecklist').innerHTML=EXAM_CHECK.map((c,i)=>{const id='chk'+i;return `<li><input type="checkbox" data-exam-chk="${id}" ${state.examChk[id]?'checked':''}><span>${c}</span></li>`;}).join('');
  $$('[data-exam-chk]').forEach(cb=>cb.addEventListener('change',e=>{state.examChk[e.target.dataset.examChk]=e.target.checked; save();}));
}
function renderGlosario(){
  const term=($('#gloSearch')?.value||'').toLowerCase();
  $('#glosario').innerHTML=GLOSARIO.filter(g=>!term||g[0].toLowerCase().includes(term)||g[1].toLowerCase().includes(term)).map(g=>`<div class="glo-item"><h4>${g[0]}</h4><p>${g[1]}</p></div>`).join('');
}

/* =========================================================================
   Dashboard
   ========================================================================= */
function renderDashboard(){
  $('#todayStr').textContent='Hoy es '+new Date().toLocaleDateString('es-AR',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  const left=Math.ceil((new Date(examDate()+'T00:00:00')-new Date(todayISO()+'T00:00:00'))/86400000);
  $('#daysLeft').textContent=left>=0?left:'✓'; $('#examDateStr').textContent='Límite del plan: '+fmtDate(examDate())+' · examen: 1ª semana de agosto';
  $('#streakNum').textContent=computeStreak();
  const mins=Object.values(state.studyMinutes).reduce((a,b)=>a+b,0); $('#totalTime').textContent=mins>=60?`${Math.floor(mins/60)} h ${mins%60} min`:`${mins} min`;
  $('#exDone').textContent=Object.values(state.ex).filter(Boolean).length+' / '+TOTAL_EX;
  $('#unitBars').innerHTML=WEEKS.map(w=>{const total=w.days.reduce((a,d)=>a+d.ex.length,0);const done=w.days.reduce((a,d)=>a+d.ex.filter((_,i)=>state.ex[exId(d.id,i)]).length,0);const pct=total?Math.round(done/total*100):0;const name=w.title.split('—')[1].trim();return `<div class="ubar"><div class="ubar-top"><span>${name}</span><span>${pct}%</span></div><div class="ubar-track"><div class="ubar-fill" style="width:${pct}%;background:${w.color}"></div></div></div>`;}).join('');
  renderConfidence(); renderTodayBlock();
}
function computeStreak(){
  const set=new Set(state.studyDates); let s=0, cur=todayISO();
  if(!set.has(cur)) cur=addDays(cur,-1); // permití que la racha siga si hoy aún no estudiaste
  while(set.has(cur)){ s++; cur=addDays(cur,-1); } return s;
}
function renderConfidence(){
  const order=['gray','red','yellow','green'];
  $('#confidence').innerHTML=WEEKS.map(w=>{const lvl=state.confidence[w.id]||'gray';const name=w.title.split('—')[1].trim();return `<div class="conf-row"><span>${name}</span><button class="conf-btn ${lvl}" data-conf="${w.id}" title="Clic para cambiar"></button></div>`;}).join('');
  $$('[data-conf]').forEach(b=>b.addEventListener('click',e=>{const id=e.target.dataset.conf;const cur=state.confidence[id]||'gray';const next=order[(order.indexOf(cur)+1)%order.length];state.confidence[id]=next; save(); e.target.className='conf-btn '+next;}));
}
function renderTodayBlock(){
  const t=todayISO(); let day=null,week=null,isNext=false;
  WEEKS.forEach(w=>w.days.forEach(d=>{if(dayDate(d)===t){day=d;week=w;}}));
  if(!day){ const all=WEEKS.flatMap(w=>w.days.map(d=>({d,w}))); const up=all.find(x=>dayDate(x.d)>=t); if(up){day=up.d;week=up.w;isNext=true;} }
  const box=$('#todayBlock');
  if(!day){ box.innerHTML='<p class="muted">¡Terminaste el cronograma! Pasá a los simulacros. 🎉</p>'; return; }
  box.innerHTML=`${isNext?'<p class="muted" style="margin-bottom:8px">No hay sesión para hoy (día comodín). Tu próxima sesión:</p>':''}
    <div class="day-date" style="color:${week.color}">${day.wd} · ${week.sub}</div>
    <div class="day-title" style="font-size:1.2rem;margin:4px 0 8px">${day.title}</div><div class="day-theory">${day.theory}</div>
    <div class="day-section-label">📝 Ejercicios de hoy</div><ul class="ex-list">${day.ex.map(e=>`<li class="ex-item" style="cursor:default"><span>•</span><label style="cursor:default">${e}</label></li>`).join('')}</ul>
    <div class="goal" style="margin-top:14px">🎯 <span><strong>Meta:</strong> ${day.goal}</span></div>
    <button class="btn" style="margin-top:14px" onclick="goRoadmap('${day.id}')">Ir a este día →</button>`;
}
window.goRoadmap=function(id){ switchView('roadmap'); const i=WEEKS.findIndex(w=>w.days.some(d=>d.id===id)); $$('#roadmap .week')[i].classList.add('open'); setTimeout(()=>{const el=$(`.day-block[data-day="${id}"]`); el&&el.scrollIntoView({behavior:'smooth',block:'center'});},120); };

function updateProgress(){ const done=Object.values(state.ex).filter(Boolean).length; const pct=TOTAL_EX?Math.round(done/TOTAL_EX*100):0; $('#ringPct').textContent=pct+'%'; const c=2*Math.PI*34; $('#ringFg').style.strokeDashoffset=c-c*pct/100; if($('#view-dashboard').classList.contains('active'))renderDashboard(); }

/* =========================================================================
   Calendario
   ========================================================================= */
function renderCalendar(){
  const root=$('#calendar'); if(!root)return;
  const map={}; WEEKS.forEach(w=>w.days.forEach(d=>map[dayDate(d)]={d,w}));
  const months=[{y:2026,m:5},{y:2026,m:6}]; // jun, jul (0-index)
  const dow=['Lu','Ma','Mi','Ju','Vi','Sá','Do']; const t=todayISO(); const ex=examDate();
  root.innerHTML=months.map(({y,m})=>{
    const first=new Date(y,m,1); let start=(first.getDay()+6)%7; const days=new Date(y,m+1,0).getDate();
    let cells=''; for(let i=0;i<start;i++)cells+='<div class="cal-cell empty"></div>';
    for(let dn=1;dn<=days;dn++){ const iso=`${y}-${String(m+1).padStart(2,'0')}-${String(dn).padStart(2,'0')}`;
      let cls='cal-cell', tag='', click='';
      if(iso===ex){ cls+=' exam'; tag='EXAMEN'; }
      else if(map[iso]){ const {d,w}=map[iso]; const done=state.days[d.id]; cls+=' has '+(done?'done':'pending'); tag=d.title.slice(0,22); click=`onclick="goRoadmap('${d.id}')"`; }
      else if(![0,6].includes(new Date(y,m,dn).getDay())){ } else { cls+=' free'; }
      if(iso===t)cls+=' today';
      cells+=`<div class="${cls}" ${click}><span class="cal-num">${dn}</span>${tag?`<span class="cal-tag">${tag}</span>`:''}${map[iso]&&iso!==ex?'<span class="cal-bar"></span>':''}</div>`;
    }
    return `<div class="cal-month"><h3>${first.toLocaleDateString('es-AR',{month:'long',year:'numeric'})}</h3><div class="cal-grid">${dow.map(x=>`<div class="cal-dow">${x}</div>`).join('')}${cells}</div></div>`;
  }).join('');
}

/* =========================================================================
   Herramientas
   ========================================================================= */
function fact(n){ if(n<0)return NaN; let r=1; for(let i=2;i<=n;i++)r*=i; return r; }
function nCk(n,k){ if(k<0||k>n)return 0; return Math.round(fact(n)/(fact(k)*fact(n-k))); }
function setupTools(){
  // Combinatoria
  $('#cb-go').addEventListener('click',()=>{
    const n=+$('#cb-n').value,k=+$('#cb-k').value;
    const rows=[['n!',fact(n)],['V(n,k) = n!/(n−k)!',k<=n?Math.round(fact(n)/fact(n-k)):'—'],['VR(n,k) = nᵏ',Math.pow(n,k)],['P(n) = n!',fact(n)],['Circular (n−1)!',fact(n-1)],['C(n,k)',nCk(n,k)]];
    $('#cb-out').innerHTML=`<table>${rows.map(r=>`<tr><td>${r[0]}</td><td class="res-big">${r[1]}</td></tr>`).join('')}</table>`;
  });
  // Euclides
  $('#eu-go').addEventListener('click',()=>{
    let a=+$('#eu-a').value,b=+$('#eu-b').value; const A=a,B=b; let steps=[];
    while(b>0){ const q=Math.floor(a/b),r=a%b; steps.push(`${a} = ${q}·${b} + ${r}`); [a,b]=[b,r]; }
    const co=a===1;
    $('#eu-out').innerHTML=`<div class="step">${steps.join('<br>')}</div><p style="margin-top:8px">MCD(${A}, ${B}) = <span class="res-big">${a}</span> → ${co?'<span class="ok">son coprimos ✔</span>':'<span class="bad">no son coprimos</span>'}</p>`;
  });
  // phi p*q
  $('#phi-go').addEventListener('click',()=>{
    const p=+$('#phi-p').value,q=+$('#phi-q').value; const pp=isPrime(p),pq=isPrime(q);
    $('#phi-out').innerHTML=`<p>t = p·q = ${p*q}</p><p>φ(t) = (p−1)(q−1) = ${p-1}·${q-1} = <span class="res-big">${(p-1)*(q-1)}</span></p>${(!pp||!pq)?`<p class="bad">⚠️ ${!pp?p+' no es primo. ':''}${!pq?q+' no es primo.':''} La fórmula (p−1)(q−1) sólo vale para primos.</p>`:'<p class="ok">p y q son primos ✔</p>'}`;
  });
  $('#phin-go').addEventListener('click',()=>{
    const n=+$('#phi-n').value; const {phi,fac}=eulerPhi(n);
    $('#phin-out').innerHTML=`<p>n = ${n} = ${fac} → φ(${n}) = <span class="res-big">${phi}</span></p>`;
  });
  // matrices: construir inputs
  const A=$('#mat-A'); A.innerHTML=''; const defA=[2,1,1,1,3,2,1,0,0];
  for(let i=0;i<9;i++){ const inp=document.createElement('input'); inp.type='number'; inp.value=defA[i]; inp.dataset.a=i; A.appendChild(inp); }
  const b=$('#mat-b'); b.innerHTML=''; const defb=[4,5,1];
  for(let i=0;i<3;i++){ const inp=document.createElement('input'); inp.type='number'; inp.value=defb[i]; inp.dataset.b=i; b.appendChild(inp); }
  const getA=()=>{const v=[...$$('#mat-A input')].map(x=>+x.value); return [[v[0],v[1],v[2]],[v[3],v[4],v[5]],[v[6],v[7],v[8]]];};
  const getb=()=>[...$$('#mat-b input')].map(x=>+x.value);
  $('#mat-det').addEventListener('click',()=>{ const d=det3(getA()); $('#mat-out').innerHTML=`<p>det(A) = <span class="res-big">${round(d)}</span> ${d===0?'<span class="bad">(no invertible / sistema no SCD)</span>':'<span class="ok">(invertible)</span>'}</p>`; });
  $('#mat-inv').addEventListener('click',()=>{ const M=getA(),d=det3(M); if(d===0){$('#mat-out').innerHTML='<p class="bad">det(A)=0 → A no tiene inversa.</p>';return;} const inv=inv3(M); $('#mat-out').innerHTML=`<p>det(A) = ${round(d)}</p><p>A⁻¹ =</p><div class="matrix-out">${inv.map(r=>r.map(x=>round(x).toString().padStart(8)).join(' ')).join('\n')}</div>`; });
  $('#mat-solve').addEventListener('click',()=>{ const M=getA(),bb=getb(),d=det3(M); if(d===0){$('#mat-out').innerHTML='<p class="bad">det(A)=0 → no es SCD. El sistema es SCI o SI; resolvelo por Gauss-Jordan a mano.</p>';return;} const sol=[0,1,2].map(i=>{const Mi=M.map(r=>r.slice()); for(let r=0;r<3;r++)Mi[r][i]=bb[r]; return det3(Mi)/d;}); $('#mat-out').innerHTML=`<p>det(A)=${round(d)} → <span class="ok">SCD</span></p><p>x = <span class="res-big">${round(sol[0])}</span>, y = <span class="res-big">${round(sol[1])}</span>, z = <span class="res-big">${round(sol[2])}</span></p><p class="step">(por Cramer: xᵢ = det(Aᵢ)/det(A))</p>`; });
  // PL
  $('#pl-go').addEventListener('click',solvePL);
  solvePL();
}
function isPrime(n){ if(n<2)return false; for(let i=2;i*i<=n;i++)if(n%i===0)return false; return true; }
function eulerPhi(n){ let r=n,m=n,fac=[]; for(let p=2;p*p<=m;p++){ if(m%p===0){ fac.push(p); r-=r/p; while(m%p===0)m/=p; } } if(m>1){ fac.push(m); r-=r/m; } return {phi:Math.round(r),fac:fac.length?fac.map(f=>f).join(' · ')+' (primos)':'1'}; }
function det3(m){ return m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1]) - m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0]) + m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]); }
function inv3(m){ const d=det3(m); const c=(r,col)=>{const mm=[0,1,2].filter(x=>x!==r).map(x=>[0,1,2].filter(y=>y!==col).map(y=>m[x][y])); return (mm[0][0]*mm[1][1]-mm[0][1]*mm[1][0])*((r+col)%2?-1:1);}; const adj=[]; for(let i=0;i<3;i++){adj.push([]);for(let j=0;j<3;j++)adj[i].push(c(j,i)/d);} return adj; }
function round(x){ return Math.round(x*1000)/1000; }

/* Programación lineal (2 variables) */
function solvePL(){
  const cv=$('#pl-canvas'),ctx=cv.getContext('2d'),W=cv.width,H=cv.height;
  ctx.clearRect(0,0,W,H);
  const p=+$('#pl-p').value,q=+$('#pl-q').value,opt=$('#pl-opt').value;
  const cons=parseCons($('#pl-cons').value);
  if(!cons.length){ $('#pl-out').innerHTML='<p class="bad">No pude leer las restricciones.</p>'; return; }
  // vértices: intersección de cada par de rectas (incl. ejes)
  const lines=cons.map(c=>({a:c.a,b:c.b,c:c.c}));
  let pts=[];
  for(let i=0;i<lines.length;i++)for(let j=i+1;j<lines.length;j++){ const P=intersect(lines[i],lines[j]); if(P)pts.push(P); }
  // filtrar factibles
  const feas=pts.filter(P=>cons.every(c=>satisfy(c,P)) && P.x>=-1e-9 && P.y>=-1e-9);
  // escala
  const maxX=Math.max(10,...feas.map(P=>P.x))*1.15, maxY=Math.max(10,...feas.map(P=>P.y))*1.15;
  const sx=x=>40+x/maxX*(W-60), sy=y=>H-40-y/maxY*(H-60);
  // ejes
  ctx.strokeStyle='#999'; ctx.beginPath(); ctx.moveTo(40,H-40); ctx.lineTo(W-10,H-40); ctx.moveTo(40,H-40); ctx.lineTo(40,10); ctx.stroke();
  // región factible (convex hull de feas)
  if(feas.length>=3){ const hull=convex(feas); ctx.fillStyle='rgba(109,93,252,.18)'; ctx.beginPath(); hull.forEach((P,i)=>{const X=sx(P.x),Y=sy(P.y); i?ctx.lineTo(X,Y):ctx.moveTo(X,Y);}); ctx.closePath(); ctx.fill(); ctx.strokeStyle='#6d5dfc'; ctx.stroke(); }
  // rectas
  ctx.strokeStyle='rgba(120,120,120,.5)'; ctx.lineWidth=1;
  cons.forEach(c=>{ if(c.a===0&&c.b===0)return; ctx.beginPath(); let p1,p2; if(c.b!==0){ p1={x:0,y:c.c/c.b}; p2={x:maxX,y:(c.c-c.a*maxX)/c.b}; } else { p1={x:c.c/c.a,y:0}; p2={x:c.c/c.a,y:maxY}; } ctx.moveTo(sx(p1.x),sy(p1.y)); ctx.lineTo(sx(p2.x),sy(p2.y)); ctx.stroke(); });
  // vértices y óptimo
  let best=null; feas.forEach(P=>{ const z=p*P.x+q*P.y; if(best===null|| (opt==='max'?z>best.z:z<best.z)) best={...P,z}; });
  ctx.fillStyle='#d65745'; feas.forEach(P=>{ ctx.beginPath(); ctx.arc(sx(P.x),sy(P.y),4,0,7); ctx.fill(); });
  if(best){ ctx.fillStyle='#2f9e6f'; ctx.beginPath(); ctx.arc(sx(best.x),sy(best.y),7,0,7); ctx.fill(); }
  const vtx=feas.map(P=>`(${round(P.x)}, ${round(P.y)}) → Z=${round(p*P.x+q*P.y)}`).join('<br>');
  $('#pl-out').innerHTML=`<p class="step">Vértices factibles:<br>${vtx||'—'}</p>${best?`<p style="margin-top:8px">Óptimo (${opt==='max'?'máximo':'mínimo'}): <span class="res-big">Z = ${round(best.z)}</span> en (${round(best.x)}, ${round(best.y)}) <span style="color:#2f9e6f">●</span></p>`:'<p class="bad">Región no acotada o vacía.</p>'}`;
}
function parseCons(txt){
  return txt.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>{
    let op = l.includes('<=')?'<=':l.includes('>=')?'>=':l.includes('=')?'=':null; if(!op)return null;
    const [lhs,rhs]=l.split(op); const c=parseFloat(rhs);
    let a=0,b=0; const xm=lhs.match(/(-?\d*\.?\d*)\s*x/); const ym=lhs.match(/(-?\d*\.?\d*)\s*y/);
    if(xm)a=xm[1]===''||xm[1]==='+'?1:xm[1]==='-'?-1:parseFloat(xm[1]); if(ym)b=ym[1]===''||ym[1]==='+'?1:ym[1]==='-'?-1:parseFloat(ym[1]);
    return {a,b,c,op};
  }).filter(Boolean);
}
function satisfy(c,P){ const v=c.a*P.x+c.b*P.y; const e=1e-6; return c.op==='<='?v<=c.c+e:c.op==='>='?v>=c.c-e:Math.abs(v-c.c)<e; }
function intersect(l1,l2){ const D=l1.a*l2.b-l2.a*l1.b; if(Math.abs(D)<1e-12)return null; return {x:(l1.c*l2.b-l2.c*l1.b)/D, y:(l1.a*l2.c-l2.a*l1.c)/D}; }
function convex(pts){ const ps=pts.slice().sort((a,b)=>a.x-b.x||a.y-b.y); const cross=(o,a,b)=>(a.x-o.x)*(b.y-o.y)-(a.y-o.y)*(b.x-o.x); const lo=[]; for(const p of ps){while(lo.length>=2&&cross(lo[lo.length-2],lo[lo.length-1],p)<=0)lo.pop();lo.push(p);} const up=[]; for(let i=ps.length-1;i>=0;i--){const p=ps[i];while(up.length>=2&&cross(up[up.length-2],up[up.length-1],p)<=0)up.pop();up.push(p);} lo.pop();up.pop(); return lo.concat(up); }

/* =========================================================================
   Quiz
   ========================================================================= */
function renderQuizUnits(){
  $('#quizUnits').innerHTML=Object.entries(QUIZ).map(([id,u])=>`<button class="quiz-unit-btn" data-quiz="${id}">${u.name}${state.quizBest[id]!=null?`<span class="best">Mejor: ${state.quizBest[id]}/${u.q.length}</span>`:''}</button>`).join('');
  $$('[data-quiz]').forEach(b=>b.addEventListener('click',()=>startQuiz(b.dataset.quiz)));
}
let quizState=null;
function startQuiz(id){ quizState={id,i:0,score:0}; showQ(); }
function showQ(){
  const u=QUIZ[quizState.id], q=u.q[quizState.i];
  $('#quizArea').innerHTML=`<div class="q-card"><div class="q-progress">${u.name} · Pregunta ${quizState.i+1}/${u.q.length}</div>
    <div class="q-question">${q.q}</div><div id="qOpts">${q.o.map((o,i)=>`<button class="q-opt" data-opt="${i}">${o}</button>`).join('')}</div>
    <div id="qExpl"></div><div class="q-foot"><span></span><button class="btn" id="qNext" style="display:none">Siguiente →</button></div></div>`;
  $$('#qOpts .q-opt').forEach(b=>b.addEventListener('click',()=>answer(+b.dataset.opt)));
  $('#qNext').addEventListener('click',nextQ);
}
function answer(i){
  const u=QUIZ[quizState.id],q=u.q[quizState.i];
  $$('#qOpts .q-opt').forEach((b,j)=>{ b.disabled=true; if(j===q.c)b.classList.add('correct'); if(j===i&&i!==q.c)b.classList.add('wrong'); });
  if(i===q.c)quizState.score++;
  $('#qExpl').innerHTML=`<div class="q-expl">${i===q.c?'✅ Correcto. ':'❌ '}${q.e}</div>`;
  $('#qNext').style.display='';
  markStudyToday();
}
function nextQ(){
  quizState.i++;
  const u=QUIZ[quizState.id];
  if(quizState.i>=u.q.length){
    if(state.quizBest[quizState.id]==null||quizState.score>state.quizBest[quizState.id]){ state.quizBest[quizState.id]=quizState.score; save(); renderQuizUnits(); }
    $('#quizArea').innerHTML=`<div class="q-card"><div class="q-question">Resultado: ${quizState.score}/${u.q.length}</div><p class="muted">${quizState.score===u.q.length?'¡Perfecto! 🎉':quizState.score>=u.q.length*0.6?'Bien, repasá lo que falló.':'A reforzar este tema 💪'}</p><button class="btn" onclick="startQuiz('${quizState.id}')">Reintentar</button></div>`;
  } else showQ();
}
window.startQuiz=startQuiz;

/* =========================================================================
   Flashcards (Leitner simple sé/no sé)
   ========================================================================= */
let flashState=null;
function buildFlashUnitSelect(){ $('#flashUnit').innerHTML=Object.keys(FLASH).map(id=>`<option value="${id}">${QUIZ[id].name}</option>`).join(''); startFlash(); $('#flashUnit').addEventListener('change',startFlash); }
function startFlash(){ const id=$('#flashUnit').value||'u1'; if(!FLASH[id])return; flashState={id,i:0,cards:FLASH[id].slice()}; showFlash(); }
function showFlash(){
  const c=flashState.cards[flashState.i]; $('#flashcard').classList.remove('flipped');
  $('#flashFront').textContent=c.f; $('#flashBack').textContent=c.b;
  $('#flashProgress').textContent=`${flashState.i+1} / ${flashState.cards.length}`;
}
function advanceFlash(){ flashState.i=(flashState.i+1)%flashState.cards.length; showFlash(); markStudyToday(); }
function setupFlash(){
  $('#flashFlip').addEventListener('click',()=>$('#flashcard').classList.toggle('flipped'));
  $('#flashYes').addEventListener('click',advanceFlash);
  $('#flashNo').addEventListener('click',()=>{ flashState.cards.push(flashState.cards[flashState.i]); advanceFlash(); }); // la que no sabés vuelve a aparecer
}

/* =========================================================================
   Banco
   ========================================================================= */
function renderBanco(){ $('#banco').innerHTML=BANCO.map(b=>`<details class="banco-item"><summary><span class="tag-u">${b.u}</span> · ${b.t}</summary><div class="sol">${b.sol}</div></details>`).join(''); }

/* Apuntes de ejercicios prácticos (transcripción de las guías) */
const escH=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function renderApuntes(){
  const root=$('#apuntes'); if(!root)return;
  if(typeof APUNTES==='undefined'||!APUNTES.length){ root.innerHTML='<p class="muted">No se cargaron los apuntes.</p>'; return; }
  const term=($('#apSearch')?.value||'').toLowerCase();
  const byU={}; APUNTES.forEach(a=>{ (byU[a.unidad]=byU[a.unidad]||[]).push(a); });
  let html='';
  Object.keys(byU).forEach(unidad=>{
    const items=byU[unidad].filter(a=>!term||(a.titulo+' '+a.texto).toLowerCase().includes(term));
    if(!items.length)return;
    html+=`<div class="res-unit"><h3>${unidad}</h3>${items.map(a=>`<details class="banco-item" data-ap="${a.id}"${term?' open':''}><summary>${a.titulo} <span class="tag-u">${a.tipo.toUpperCase()}</span></summary><div class="sol"><a class="res-link" style="box-shadow:none;display:inline-flex;margin-bottom:10px" href="${enc(a.archivo)}" target="_blank" rel="noopener"><span class="ic ${a.tipo==='pdf'?'pdf':'doc'}">${a.tipo.toUpperCase()}</span><span>Abrir archivo original ↗</span></a><pre class="apunte-text">${escH(a.texto)}</pre></div></details>`).join('')}</div>`;
  });
  root.innerHTML=html||'<p class="muted">Sin resultados para esa búsqueda.</p>';
}

/* ===== "Todo para hoy" + navegadores contextuales ===== */
function videoListHTML(d){
  const dv=DAYVIDS[d.id];
  let h=loidiDayHTML(d.id);
  const extra=d.videos.filter(v=>!/PLeySRPnY35|PL9SnRnlzoyX|PLbJxARuJQQZ|pr7zmFRg0uI|xIIySgHPzLk/.test(v.u));
  if(extra.length) h+=extra.map(v=>`<div class="vid-item"><a href="${v.u}" target="_blank" rel="noopener">${v.t}${v.n?` — <em>${v.n}</em>`:''}</a></div>`).join('');
  if(dv){ h+=`<div class="vid-item muted" style="margin-top:6px">Videos puntuales (${dv.label}):</div>`+dv.items.map(it=>`<div class="vid-item"><a href="${yv(it[1],PL[dv.pl])}" target="_blank" rel="noopener"><strong>${it[0]}.</strong> ${it[2]}</a></div>`).join(''); }
  return h;
}
function dayHoyRow(d){
  const m=DAYMETA[d.id]; if(!m)return '';
  const links=[];
  const a=(typeof APUNTES!=='undefined')?APUNTES.find(x=>x.id===m.ap):null;
  if(a) links.push(`<button class="hoy-link" onclick="openApunte('${m.ap}')">📄 Apunte del tema</button>`);
  if(m.fin) links.push(`<button class="hoy-link" onclick="openFinales('${m.fin}')">✎ Finales de este tema</button>`);
  if(m.tool) links.push(`<button class="hoy-link" onclick="openTool('${m.tool}')">🧮 ${TOOLS[m.tool].label}</button>`);
  return links.length?`<div class="day-section-label">🔗 Todo para hoy</div><div class="hoy-links">${links.join('')}</div>`:'';
}
function selectSub(name){ $$('.subtab').forEach(x=>x.classList.toggle('active',x.dataset.sub===name)); $$('.subview').forEach(v=>v.classList.toggle('active',v.id==='sub-'+name)); }
window.openApunte=function(id){ switchView('apuntes'); setTimeout(()=>{ const el=$(`[data-ap="${id}"]`); if(el){ el.open=true; el.scrollIntoView({behavior:'smooth',block:'center'}); } },120); };
window.openFinales=function(term){ switchView('practica'); selectSub('finales'); const s=$('#finSearch'); if(s){ s.value=term; } renderFinales(); };
window.openTool=function(key){ switchView('herramientas'); setTimeout(()=>{ const el=$('#'+TOOLS[key].el); if(el) el.scrollIntoView({behavior:'smooth',block:'center'}); },120); };

/* ===== Sesión guiada del día ===== */
const SESS_STEPS=['Teoría y video','Resolvé','Verificá','Cierre'];
let sess={dayId:null,step:0};
window.openSession=function(dayId){
  const found=WEEKS.flatMap(w=>w.days.map(d=>({d,w}))).find(x=>x.d.id===dayId);
  if(!found)return;
  sess={dayId,step:0,week:found.w,day:found.d};
  if(!pomo.running){ pomo.min=25; pomo.mode='Foco'; pomo.sec=25*60; $$('.pomo-modes .chip').forEach(c=>c.classList.toggle('active',+c.dataset.min===25&&c.dataset.mode==='Foco')); pomo.running=true; $('#pomoStart').textContent='⏸ Pausar'; clearInterval(pomo.timer); pomo.timer=setInterval(pomoTick,1000); }
  markStudyToday();
  $('#sessionModal').hidden=false; renderSession();
};
window.closeSession=function(){ $('#sessionModal').hidden=true; };
function dayProg(d){ const t=d.ex.length; const done=d.ex.filter((_,i)=>state.ex[exId(d.id,i)]).length; return {t,done,pct:t?Math.round(done/t*100):0}; }
function renderSession(){
  const d=sess.day,w=sess.week,m=DAYMETA[d.dayId||d.id];
  $('#sessDate').textContent=`${d.wd} · ${w.sub}`;
  $('#sessTitle').textContent=d.title;
  const p=dayProg(d); $('#sessProgFill').style.width=p.pct+'%';
  $('#sessSteps').innerHTML=SESS_STEPS.map((s,i)=>`<button class="sess-step ${i===sess.step?'active':''} ${i<sess.step?'done':''}" onclick="sessGo(${i})">${i+1}. ${s}</button>`).join('');
  $('#sessBody').innerHTML=sessStepHTML(sess.step);
  bindSessEvents();
  $('#sessPrev').style.visibility=sess.step===0?'hidden':'visible';
  $('#sessNext').textContent=sess.step===SESS_STEPS.length-1?'Cerrar':'Siguiente →';
}
window.sessGo=function(i){ sess.step=i; renderSession(); };
const UNIT_EXIDX={u1:0,u2:1,u5:2,u3:3,u4:4}; // qué ejercicio del final corresponde a cada unidad
function sessFormulaHTML(u){ const f=(typeof FORMULAS!=='undefined')?FORMULAS.find(x=>x.id===u):null; return f?`<div class="sess-section day-section-label">ƒ Fórmulas del tema</div><div class="sess-formula"><h4>${f.t}</h4><ul>${f.items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`:''; }
function sessFinalesHTML(u){ if(typeof FINALS==='undefined')return ''; const idx=UNIT_EXIDX[u]; if(idx==null)return ''; const rows=FINALS.map(f=>({t:f.t,ex:f.ex[idx],file:f.file})).filter(r=>r.ex); return rows.length?`<div class="sess-section day-section-label">✎ Este ejercicio en los finales reales</div>${rows.map(r=>`<div class="sess-fin"><div class="sess-fin-t">${r.t}</div><p>${r.ex}</p></div>`).join('')}`:''; }

function sessStepHTML(step){
  const d=sess.day,m=DAYMETA[d.id];
  if(step===0){
    return `<p class="sess-hint">⏱ Sugerido: ~${m.mins[0]} min. Mirá el/los video(s) y repasá la teoría. Después pasá a resolver.</p>
      <div class="sess-section day-section-label">📖 De qué va</div>
      <div class="day-theory" style="font-size:.98rem">${d.theory}</div>
      <div class="sess-section day-section-label">🎬 Clase / videos</div><div class="vid-list">${videoListHTML(d)}</div>
      ${sessFormulaHTML(m.u)}
      ${m.ap&&typeof APUNTES!=='undefined'&&APUNTES.find(x=>x.id===m.ap)?`<button class="hoy-link" style="margin-top:16px" onclick="openApunte('${m.ap}')">📄 Abrir el apunte completo del tema</button>`:''}`;
  }
  if(step===1){
    const bancos=(typeof BANCO!=='undefined')?BANCO.filter(b=>b.u===m.u.toUpperCase()):[];
    const ap=(typeof APUNTES!=='undefined')?APUNTES.find(x=>x.id===m.ap):null;
    return `<p class="sess-hint">⏱ ~${m.mins[1]} min. Resolvé <strong>en birome</strong>. Marcá cada ejercicio y anotá dudas.</p>
      <div class="sess-section day-section-label">📝 Ejercicios de hoy</div>
      <ul class="ex-list">${d.ex.map((e,i)=>{const id=exId(d.id,i);return `<li class="sess-ex"><label class="ex-item" style="padding:0"><input type="checkbox" data-sess-ex="${id}" ${state.ex[id]?'checked':''}><span>${e}${solLink(d.id,i)}</span></label><input class="ex-note" data-exnote="${id}" placeholder="nota / duda…" value="${(state.exNotes[id]||'').replace(/"/g,'&quot;')}"></li>`;}).join('')}</ul>
      ${sessFinalesHTML(m.u)}
      ${bancos.length?`<div class="sess-section day-section-label">💡 Soluciones modelo del tema</div>${bancos.map(b=>`<details class="banco-item"><summary>${b.t}</summary><div class="sol">${b.sol}</div></details>`).join('')}`:''}
      ${ap?`<div class="sess-section day-section-label">📄 Apunte del tema (${ap.tipo.toUpperCase()})</div><details class="banco-item"><summary>Ver la guía transcripta acá mismo</summary><div class="sol"><a class="hoy-link" href="${enc(ap.archivo)}" target="_blank" rel="noopener" style="display:inline-block;margin-bottom:8px">Abrir archivo original ↗</a><pre class="sess-apunte">${escH(ap.texto)}</pre></div></details>`:''}`;
  }
  if(step===2){
    const fh=sessFormulaHTML(m.u);
    if(!m.tool) return `<p class="sess-hint">Este tema (${m.u.toUpperCase()}) se corrige a mano / comparando con la clase; no tiene calculadora. Revisá tu procedimiento contra las soluciones modelo del paso anterior.</p>${fh}`;
    return `<p class="sess-hint">Primero resolvé a mano; recién <strong>después</strong> verificá. En el examen las calculadoras/GeoGebra son solo para chequear.</p>
      <div class="sess-section day-section-label">🧮 Verificá tu resultado</div>
      <button class="btn" onclick="openTool('${m.tool}')">Abrir ${TOOLS[m.tool].label} →</button>
      <p class="muted" style="margin-top:10px">Se abre en la sección Herramientas. Volvé a la sesión cuando termines.</p>
      ${fh}`;
  }
  // cierre
  const lvl=state.confidence[sess.week.id]||'gray';
  const p=dayProg(d);
  const notas=d.ex.filter((_,i)=>state.exNotes[exId(d.id,i)]).length;
  const best=state.quizBest[m.quiz];
  return `<div class="sess-resumen">
      <div><strong>${p.done}/${p.t}</strong>ejercicios hechos</div>
      <div><strong>${notas}</strong>notas tomadas</div>
      <div><strong>${state.pomoCount||0}</strong>pomodoros hoy</div>
    </div>
    <div class="sess-section day-section-label">🚦 ¿Cómo te sentís con ${sess.week.title.split('—')[1].trim()}?</div>
    <div class="conf-picker">${['red','yellow','green'].map(c=>`<button class="conf-btn ${c} ${lvl===c?'sel':''}" data-sess-conf="${c}" title="${c==='red'?'Flojo':c==='yellow'?'Más o menos':'Sólido'}"></button>`).join('')}</div>
    <div class="sess-section day-section-label">🎯 Mini-quiz del tema${best!=null?` · mejor: ${best}/${QUIZ[m.quiz].q.length}`:''}</div>
    <div id="sessQuizBox"></div>
    <button class="btn" style="margin-top:20px" onclick="sessComplete()">✅ Marcar día completo ${nextDayId(d.id)?'y pasar al siguiente día':''}</button>`;
}
function bindSessEvents(){
  $$('[data-sess-ex]').forEach(cb=>cb.addEventListener('change',e=>{ state.ex[e.target.dataset.sessEx]=e.target.checked; if(e.target.checked)markStudyToday(); save(); updateProgress(); refreshWeekCounts(); const p=dayProg(sess.day); $('#sessProgFill').style.width=p.pct+'%'; }));
  $$('[data-exnote]').forEach(inp=>inp.addEventListener('input',e=>{ state.exNotes[e.target.dataset.exnote]=e.target.value; save(); }));
  $$('[data-sess-conf]').forEach(b=>b.addEventListener('click',e=>{ state.confidence[sess.week.id]=e.target.dataset.sessConf; save(); $$('[data-sess-conf]').forEach(x=>x.classList.remove('sel')); e.target.classList.add('sel'); renderConfidence&&renderConfidence(); }));
  if($('#sessQuizBox')){ sessQuizState={unit:DAYMETA[sess.dayId].quiz,i:0,score:0}; renderSessQuiz(); }
}

/* Mini-quiz embebido en la sesión */
let sessQuizState=null;
function renderSessQuiz(){
  const box=$('#sessQuizBox'); if(!box||!sessQuizState)return;
  const u=QUIZ[sessQuizState.unit], q=u.q[sessQuizState.i];
  if(sessQuizState.i>=u.q.length){
    if(state.quizBest[sessQuizState.unit]==null||sessQuizState.score>state.quizBest[sessQuizState.unit]){ state.quizBest[sessQuizState.unit]=sessQuizState.score; save(); }
    box.innerHTML=`<div class="sq-expl">Resultado: <strong>${sessQuizState.score}/${u.q.length}</strong>. ${sessQuizState.score>=u.q.length*0.6?'¡Bien! 💪':'A reforzar este tema.'} <button class="hoy-link" onclick="sessQuizRestart()">Reintentar</button></div>`;
    return;
  }
  box.innerHTML=`<div class="sq-q">${sessQuizState.i+1}. ${q.q}</div><div id="sqOpts">${q.o.map((o,i)=>`<button class="sq-opt" data-sq="${i}">${o}</button>`).join('')}</div><div id="sqExpl"></div><div class="sq-foot"><span>Pregunta ${sessQuizState.i+1} de ${u.q.length}</span><button class="hoy-link" id="sqNext" style="display:none">Siguiente →</button></div>`;
  $$('#sqOpts .sq-opt').forEach(b=>b.addEventListener('click',()=>sessQuizAnswer(+b.dataset.sq)));
  const nx=$('#sqNext'); if(nx)nx.addEventListener('click',()=>{ sessQuizState.i++; renderSessQuiz(); });
}
function sessQuizAnswer(i){
  const u=QUIZ[sessQuizState.unit], q=u.q[sessQuizState.i];
  $$('#sqOpts .sq-opt').forEach((b,j)=>{ b.disabled=true; if(j===q.c)b.classList.add('correct'); if(j===i&&i!==q.c)b.classList.add('wrong'); });
  if(i===q.c)sessQuizState.score++;
  $('#sqExpl').innerHTML=`<div class="sq-expl">${i===q.c?'✅ Correcto. ':'❌ '}${q.e}</div>`;
  $('#sqNext').style.display=''; markStudyToday();
}
window.sessQuizRestart=function(){ sessQuizState={unit:sessQuizState.unit,i:0,score:0}; renderSessQuiz(); };
function nextDayId(id){ const all=WEEKS.flatMap(w=>w.days); const i=all.findIndex(d=>d.id===id); return i>=0&&i<all.length-1?all[i+1].id:null; }
window.sessQuiz=function(){ const m=DAYMETA[sess.dayId]; closeSession(); switchView('practica'); selectSub('quiz'); startQuiz(m.quiz); };
window.sessComplete=function(){ state.days[sess.dayId]=true; save(); renderRoadmap(); renderCalendar(); renderDashboard(); const nx=nextDayId(sess.dayId); if(nx&&confirm('Día marcado como completo ✔  ¿Pasar al siguiente día?')){ openSession(nx); } else { closeSession(); } };

/* Clases en video (módulo Loidi con análisis) */
function renderVideos(){
  const root=$('#videosList'); if(!root)return;
  if(typeof VIDEOS==='undefined'||!VIDEOS.length){ root.innerHTML='<p class="muted">Cargando análisis de las clases…</p>'; return; }
  const term=($('#vidSearch')?.value||'').toLowerCase();
  // agrupar por clase
  const byClass={}; VIDEOS.forEach(v=>{ (byClass[v.clase]=byClass[v.clase]||[]).push(v); });
  let html='';
  Object.keys(byClass).map(Number).sort((a,b)=>a-b).forEach(cl=>{
    const vids=byClass[cl];
    const matches=vids.filter(v=>!term||(v.temaClase+' '+v.resumen+' '+v.temas.join(' ')+' '+v.conceptos.join(' ')+' '+v.ejemplos.join(' ')).toLowerCase().includes(term));
    if(!matches.length)return;
    const c=vids[0];
    html+=`<div class="vclass"><div class="vclass-head"><span class="tag-u">Clase ${cl} · ${c.fecha} · ${c.unidad}</span><h3>${c.temaClase}</h3></div>
      <div class="vcards">${matches.map(v=>`<button class="vcard" onclick="openVideoDetail('${v.id}')">
        <span class="vcard-play">▶</span><span class="vcard-body"><strong>Parte ${v.parte}</strong><small>${v.resumen}</small></span></button>`).join('')}</div></div>`;
  });
  root.innerHTML=html||'<p class="muted">Sin resultados.</p>';
  $('#videoDetail').hidden=true; root.hidden=false;
}
window.openVideoDetail=function(id){
  const v=VIDEOS.find(x=>x.id===id); if(!v)return;
  const d=$('#videoDetail');
  const sec=(h,items)=> items&&items.length?`<div class="vd-sec"><h4>${h}</h4><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></div>`:'';
  d.innerHTML=`<button class="ghost-btn" style="margin-bottom:14px" onclick="closeVideoDetail()">← Volver a la lista</button>
    <div class="card">
      <span class="card-tag">Clase ${v.clase} · Parte ${v.parte} · ${v.fecha} · ${v.unidad}</span>
      <h2 style="font-size:1.4rem;margin-bottom:6px">${v.temaClase}</h2>
      <p class="muted" style="margin-bottom:14px">${v.resumen}</p>
      <a class="btn" href="${ytL(v.id)}" target="_blank" rel="noopener" style="display:inline-block;text-decoration:none">▶ Ver el video</a>
      ${sec('📚 Temas tratados', v.temas)}
      ${sec('🔑 Conceptos y definiciones clave', v.conceptos)}
      ${sec('✏️ Ejemplos resueltos en clase', v.ejemplos)}
      ${v.paraFinal?`<div class="goal" style="margin-top:14px">🎯 <span><strong>Para el final:</strong> ${v.paraFinal}</span></div>`:''}
    </div>`;
  $('#videosList').hidden=true; d.hidden=false; window.scrollTo({top:0});
};
window.closeVideoDetail=function(){ $('#videoDetail').hidden=true; $('#videosList').hidden=false; };

/* Finales reales */
const FINSLUG={'Modelo final 2024':'f2024','Final primer llamado — diciembre 2025':'fdic25','Final 17-12-2025':'f1712','Final febrero 2025':'ffeb25','Final 4-12-2024':'f0412','Final 18-12-2024':'f1812','Final julio 2024 (o antes)':'fjul24','Modelo 2026 — A (19/05)':'f2026a','Modelo 2026 — B (21/05)':'f2026b'};
function renderFinales(){
  const term=($('#finSearch')?.value||'').toLowerCase();
  const list=FINALS.filter(f=>!term||(f.t+' '+f.ex.join(' ')).toLowerCase().includes(term));
  $('#finales').innerHTML=list.length?list.map(f=>{const sl=FINSLUG[f.t];return `<details class="banco-item"><summary><span class="tag-u">${f.tag}</span> · ${f.t}</summary><div class="sol"><ol class="fin-ol">${f.ex.map((e,i)=>`<li>${e}${sl?` <a class="sol-link" href="soluciones.html?ej=${sl}-e${i+1}" target="_blank" rel="noopener">resolución ↗</a>`:''}</li>`).join('')}</ol><a class="res-link" style="box-shadow:none;display:inline-flex;margin-top:10px" href="${enc(f.file)}" target="_blank" rel="noopener"><span class="ic img">IMG</span><span>Abrir original ↗</span></a></div></details>`;}).join(''):'<p class="muted">Sin resultados para esa búsqueda.</p>';
}

/* =========================================================================
   Modo simulacro
   ========================================================================= */
let simInt=null, simSec=2*3600;
function fmtHMS(s){ const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60; return `${h}:${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`; }
function renderSimChecklist(){ $('#simChecklist').innerHTML=EXAM_FORMAT.map(r=>`<li class="ex-item"><input type="checkbox"><label>Ej. ${r[0]} — ${r[1]}</label></li>`).join(''); }
function setupSim(){
  $('#simTimer').textContent=fmtHMS(simSec);
  $('#simStart').addEventListener('click',()=>{ if(simInt){clearInterval(simInt);simInt=null;$('#simStart').textContent='▶ Reanudar';return;} markStudyToday(); $('#simStart').textContent='⏸ Pausar'; simInt=setInterval(()=>{ simSec--; $('#simTimer').textContent=fmtHMS(simSec); if(simSec<=0){clearInterval(simInt);simInt=null;beep();alert('¡Se acabó el tiempo del simulacro!');} },1000); });
  $('#simReset').addEventListener('click',()=>{ clearInterval(simInt); simInt=null; simSec=2*3600; $('#simTimer').textContent=fmtHMS(simSec); $('#simStart').textContent='▶ Iniciar simulacro'; });
  $('#simSave').addEventListener('click',()=>{ const v=parseFloat($('#simScore').value); if(isNaN(v))return; const k='sim_'+todayISO()+'_'+Object.keys(state.simScores).length; state.simScores[k]=v; save(); renderSimHistory(); $('#simScore').value=''; alert('Nota guardada ✔'); });
}
function renderSimHistory(){
  const el=$('#simHistory'); if(!el)return;
  const entries=Object.entries(state.simScores).filter(([k,v])=>v!=null);
  if(!entries.length){ el.innerHTML='<p class="muted">Todavía no guardaste notas.</p>'; return; }
  el.innerHTML='<div class="card-tag" style="margin-top:8px">Tus notas</div>'+entries.map(([k,v])=>{ const sim=SIMS.find(s=>s.id===k); const label=sim?sim.t:k.replace('sim_',''); return `<div class="h-row"><span>${label}</span><strong style="color:${v>=4?'var(--green)':'var(--red)'}">${v}</strong></div>`; }).join('');
}

/* =========================================================================
   Navegación / subtabs
   ========================================================================= */
function switchView(name){ $$('.view').forEach(v=>v.classList.remove('active')); $('#view-'+name).classList.add('active'); $$('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===name)); $('#sidebar').classList.remove('open'); window.scrollTo({top:0}); if(name==='calendario')renderCalendar(); }
$$('.nav-btn').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));
$('#menuBtn').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$$('.subtab').forEach(t=>t.addEventListener('click',()=>{ $$('.subtab').forEach(x=>x.classList.remove('active')); t.classList.add('active'); $$('.subview').forEach(v=>v.classList.remove('active')); $('#sub-'+t.dataset.sub).classList.add('active'); }));

/* roadmap toolbar */
$('#roadSearch').addEventListener('input',applyRoadFilter);
$$('.filters .chip').forEach(c=>c.addEventListener('click',()=>{ $$('.filters .chip').forEach(x=>x.classList.remove('active')); c.classList.add('active'); roadFilter=c.dataset.filter; applyRoadFilter(); }));
$('#toggleAll').addEventListener('click',()=>{ const open=$$('#roadmap .week.open').length<WEEKS.length; $$('#roadmap .week').forEach(w=>w.classList.toggle('open',open)); $('#toggleAll').textContent=open?'Colapsar todo':'Expandir todo'; });
$('#gloSearch').addEventListener('input',renderGlosario);
$('#finSearch').addEventListener('input',renderFinales);
$('#vidSearch').addEventListener('input',renderVideos);
$('#apSearch').addEventListener('input',renderApuntes);
$('#sessClose').addEventListener('click',closeSession);
$('#sessPrev').addEventListener('click',()=>{ if(sess.step>0){sess.step--;renderSession();} });
$('#sessNext').addEventListener('click',()=>{ if(sess.step<SESS_STEPS.length-1){sess.step++;renderSession();} else closeSession(); });
$('#sessionModal').addEventListener('click',e=>{ if(e.target.id==='sessionModal')closeSession(); });

/* fecha examen + re-agendar */
function setupReschedule(){
  $('#examDateInput').value=examDate();
  $('#examDateInput').addEventListener('change',e=>{ state.examDate=e.target.value||DEFAULT_EXAM; save(); renderDashboard(); renderCalendar(); });
  $('#reschedBtn').addEventListener('click',()=>{
    if(!confirm('Esto reordena los días NO completados desde mañana hasta el examen (saltando fines de semana). ¿Seguir?'))return;
    const pend=WEEKS.flatMap(w=>w.days).filter(d=>!state.days[d.id]);
    let cur=addDays(todayISO(),1); const ex=examDate(); const ov={};
    for(const d of pend){ while([0,6].includes(new Date(cur+'T00:00:00').getDay()) || cur>ex){ if(cur>ex)break; cur=addDays(cur,1); } ov[d.id]=cur>ex?ex:cur; cur=addDays(cur,1); }
    state.dateOverrides=ov; save(); renderRoadmap(); renderCalendar(); renderDashboard(); alert('Días pendientes re-agendados ✔');
  });
  $('#reschedReset').addEventListener('click',()=>{ state.dateOverrides={}; save(); renderRoadmap(); renderCalendar(); renderDashboard(); });
}

/* =========================================================================
   Tema
   ========================================================================= */
function applyTheme(){ document.documentElement.setAttribute('data-theme',state.theme); $('#themeBtn').textContent=state.theme==='dark'?'☀️ Tema':'🌙 Tema'; $('#themeBtnM').textContent=state.theme==='dark'?'☀️':'🌙'; }
function toggleTheme(){ state.theme=state.theme==='dark'?'light':'dark'; save(); applyTheme(); }
$('#themeBtn').addEventListener('click',toggleTheme); $('#themeBtnM').addEventListener('click',toggleTheme);

/* =========================================================================
   Pomodoro (con sonido real)
   ========================================================================= */
let pomo={sec:25*60,running:false,timer:null,min:25,mode:'Foco'};
function beep(){ try{ const a=new (window.AudioContext||window.webkitAudioContext)(); const o=a.createOscillator(),g=a.createGain(); o.connect(g); g.connect(a.destination); o.type='sine'; o.frequency.value=880; g.gain.setValueAtTime(.001,a.currentTime); g.gain.exponentialRampToValueAtTime(.4,a.currentTime+.02); g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.9); o.start(); o.stop(a.currentTime+.9); }catch(e){} }
function pomoRender(){ const t=`${String(Math.floor(pomo.sec/60)).padStart(2,'0')}:${String(pomo.sec%60).padStart(2,'0')}`; $('#pomoTime').textContent=t; const st=$('#sessTimer'); if(st)st.textContent=t; }
function pomoTick(){
  if(pomo.sec<=0){ clearInterval(pomo.timer); pomo.running=false; $('#pomoStart').textContent='▶ Iniciar';
    if(pomo.mode!=='Pausa'){ if(state.pomoDate!==todayISO()){state.pomoDate=todayISO();state.pomoCount=0;} state.pomoCount++; state.studyMinutes[todayISO()]=(state.studyMinutes[todayISO()]||0)+pomo.min; markStudyToday(); save(); $('#pomoCount').textContent=state.pomoCount; renderDashboard(); }
    beep(); alert(pomo.mode+' terminado ✔'); pomo.sec=pomo.min*60; pomoRender(); return; }
  pomo.sec--; pomoRender();
}
$('#pomoStart').addEventListener('click',()=>{ if(pomo.running){clearInterval(pomo.timer);pomo.running=false;$('#pomoStart').textContent='▶ Reanudar';} else {pomo.running=true;$('#pomoStart').textContent='⏸ Pausar';pomo.timer=setInterval(pomoTick,1000);} });
$('#pomoReset').addEventListener('click',()=>{ clearInterval(pomo.timer); pomo.running=false; pomo.sec=pomo.min*60; pomoRender(); $('#pomoStart').textContent='▶ Iniciar'; });
$$('.pomo-modes .chip').forEach(c=>c.addEventListener('click',()=>{ $$('.pomo-modes .chip').forEach(x=>x.classList.remove('active')); c.classList.add('active'); pomo.min=+c.dataset.min; pomo.mode=c.dataset.mode; pomo.sec=pomo.min*60; clearInterval(pomo.timer); pomo.running=false; $('#pomoStart').textContent='▶ Iniciar'; pomoRender(); }));

/* =========================================================================
   Export / Import / Reset / Backup
   ========================================================================= */
function doExport(){ state.lastBackup=todayISO(); save(); const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`progreso-discreta-${todayISO()}.json`; a.click(); checkBackupBanner(); }
$('#exportBtn').addEventListener('click',doExport);
$('#bannerExport').addEventListener('click',doExport);
$('#bannerClose').addEventListener('click',()=>$('#backupBanner').hidden=true);
$('#importBtn').addEventListener('click',()=>$('#importFile').click());
$('#importFile').addEventListener('change',e=>{ const f=e.target.files[0]; if(!f)return; const r=new FileReader(); r.onload=()=>{ try{ state=Object.assign(blank(),JSON.parse(r.result)); save(); init(); alert('Progreso importado ✔'); }catch{ alert('Archivo inválido'); } }; r.readAsText(f); });
$('#resetBtn').addEventListener('click',()=>{ if(confirm('¿Reiniciar TODO el progreso? Esto borra checkboxes y notas.')){ state=blank(); save(); init(); } });
function checkBackupBanner(){ if(!state.lastBackup){ $('#backupBanner').hidden=true; return; } const diff=(new Date(todayISO())-new Date(state.lastBackup))/86400000; $('#backupBanner').hidden=diff<7; }

/* =========================================================================
   PWA
   ========================================================================= */
if('serviceWorker' in navigator){ window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{})); }

/* =========================================================================
   Init
   ========================================================================= */
function init(){
  if(state.pomoDate!==todayISO())state.pomoCount=0;
  applyTheme();
  $('#pomoCount').textContent=state.pomoCount||0;
  pomo.sec=pomo.min*60; pomoRender();
  render();
}
setupTools(); setupFlash(); setupSim(); setupReschedule();
init();
