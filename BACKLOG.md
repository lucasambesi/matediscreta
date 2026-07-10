# 🗂 Backlog — Workspace Matemática Discreta

> Ideas para mejorar/ampliar el workspace de estudio (`index.html` + `styles.css` + `app.js`).
> Prioridad: **P0** = alto impacto / poco esfuerzo · **P1** = buen valor · **P2** = nice to have.
> Esfuerzo: 🟢 chico · 🟡 medio · 🔴 grande.

---

## 🎯 Herramientas de estudio (lo que más mueve la aguja)

- [x] **P0 🟢 Calculadora de combinatoria** — inputs n y k → V(n,k), VR(n,k), P(n), C(n,k) y factorial, para verificar el Ej. 1 a mano.
- [x] **P0 🟢 Verificador de Euclides + φ de Euler** — ingresás dos números → MCD paso a paso (¿coprimos?) y φ(p·q). Cubre el Ej. 5.
- [x] **P0 🟡 Calculadora de matrices** — determinante 3×3, inversa por adjunta y verificación A·A⁻¹=I; resolver sistema 3×3 (Gauss-Jordan / Cramer). Cubre el Ej. 4.
- [x] **P1 🟡 Mini-quiz de autoevaluación por unidad** — 5–8 preguntas por tema (opción múltiple + "mostrar solución"), con puntaje. Detecta temas flojos.
- [x] **P1 🟡 Flashcards de fórmulas** — repaso rápido tipo tarjeta (frente: concepto / dorso: fórmula), con repetición espaciada simple (sé / no sé).
- [x] **P1 🟡 Banco de ejercicios resueltos paso a paso** — al menos 1 modelo por ejercicio del final, con solución desplegable (como el Ej. 1 que ya hicimos).
- [x] **P1 🟢 Modo simulacro cronometrado** — botón "Simulacro": timer de ~2 h, lista los 5 ejercicios y al final te deja autocorregir y guardar la nota.
- [x] **P2 🟡 Graficador de programación lineal** — ingresás restricciones → dibuja la región factible y evalúa la FO en los vértices. Cubre el Ej. 3.

## 📊 Seguimiento y motivación

- [x] **P0 🟢 Racha (streak) de días estudiados** — cuenta días consecutivos con al menos 1 ejercicio o 1 pomodoro; se ve en el panel.
- [x] **P1 🟢 Semáforo de confianza por tema** — marcar cada unidad como 🔴/🟡/🟢 según cómo la sentís; ayuda a priorizar el repaso final.
- [x] **P1 🟢 Vista calendario mensual** — grilla de julio con los días pintados (hecho / pendiente / hoy / comodín).
- [x] **P1 🟢 Registro de notas de simulacros** — guardar el puntaje de cada simulacro y ver la evolución.
- [x] **P2 🟢 Tiempo total estudiado** — sumar minutos de pomodoros por día/semana.

## 🧭 Roadmap y planificación

- [x] **P1 🟡 Re-agendado automático si te atrasás** — si un día queda sin completar, correr el cronograma y recalcular fechas hasta el examen.
- [x] **P1 🟢 Fecha de examen editable desde la UI** — hoy está fija en `app.js` (`EXAM_DATE`); pasarla a un input que recalcula todo.
- [x] **P1 🟢 Filtro del roadmap** — ver solo "pendientes", "hechos" o "esta semana".
- [x] **P2 🟢 Botón "expandir/colapsar todo"** en el roadmap.
- [x] **P2 🟢 Buscador global** — encontrar un tema/ejercicio por palabra clave.

## 📚 Contenido a completar (datos que faltan del plan)

- [x] **P1 🟢 Identificar el video pendiente** `https://www.youtube.com/watch?v=Pcw-rI_oOMY` y ubicarlo en el día que corresponda.
- [ ] **P1 🔴 Mapear las 33 clases de la Prof. Loidi** a cada día/unidad (hoy linkeamos la playlist entera).
- [ ] **P2 🟡 Reemplazar los rangos "videos 1–6" de profe Alex** por el link al video exacto de cada tema.
- [ ] **P1 🟡 Transcribir las imágenes de finales** (`final/`, `modelos de examen/`) a texto buscable, para tener un banco de práctica real dentro de la app.
- [x] **P2 🟢 Glosario de términos** (SCD/SCI/SI, coprimo, indicatriz, etc.).

## 🔧 Robustez y técnico

- [x] **P0 🟢 Sonido real del Pomodoro** — el beep actual es un base64 silencioso; reemplazar por un tono audible o usar la Web Audio API.
- [x] **P1 🟢 Auto-exportar / recordar respaldo** — avisar cada X días para que exportes el `.json` (el localStorage se puede borrar al limpiar el navegador).
- [x] **P1 🔴 PWA instalable + offline** — manifest + service worker para abrirlo como app y que funcione sin conexión.
- [ ] **P2 🟡 Sync real entre dispositivos** — más allá del export/import manual (ej. guardar el JSON en un Gist o en la nube).
- [x] **P2 🟢 Accesibilidad y teclado** — navegación con tab, `aria-*`, foco visible.
- [x] **P2 🟢 Versión imprimible / PDF** de la hoja de fórmulas y del checklist del examen.

---

## ✅ Ya hecho (v1)
- Panel con cuenta regresiva, progreso por unidad y sesión de hoy automática.
- Roadmap completo (4 semanas / 22 días) con teoría, videos, ejercicios marcables y notas por día.
- Hoja de fórmulas, recursos con links a archivos, simulacros y checklist del examen.
- Pomodoro, modo claro/oscuro, export/import de progreso, persistencia en localStorage.

## ✅ Ya hecho (v2)
- **Herramientas:** calculadora de combinatoria, MCD/Euclides, φ de Euler (p·q y n general), matrices 3×3 (det/inversa/Cramer) y graficador de programación lineal (todas verificadas con tests).
- **Práctica:** quiz por unidad (25 preguntas) con mejor puntaje, flashcards con "sé/no sé", banco de 6 ejercicios resueltos y modo simulacro cronometrado (2 h) con registro de notas.
- **Seguimiento:** racha de días, tiempo total estudiado, semáforo de confianza por tema, vista calendario (jun–jul) y notas de simulacros.
- **Roadmap:** buscador, filtros (todos/pendientes/hechos), expandir/colapsar todo, fecha de examen editable y re-agendado de pendientes.
- **Contenido:** video pendiente identificado (*"Principio del palomar"* → Día 4) y glosario (18 términos).
- **Técnico:** sonido real del Pomodoro (Web Audio), recordatorio de respaldo, PWA instalable + offline (`manifest.json` + `sw.js`), versión imprimible y foco accesible.

---

## ✅ Ya hecho (v3)
- **Videos exactos:** 48 links directos (profe Alex / MateFacil) en 12 días del roadmap, reemplazando los rangos.
- **Módulo Apuntes prácticos:** las 9 guías de las 5 unidades con link al archivo + transcripción a texto buscable (`apuntes.js` + `📄 Apuntes prácticos`).
- **Límite del plan:** 31/07/2026 (examen: 1ª semana de agosto).

## ✅ Ya hecho (v4 — experiencia por día)
- **Sesión guiada del día:** botón "Empezar sesión" → flujo de 4 pasos (Teoría/Video → Resolvé → Verificá → Cierre) con Pomodoro automático y barra de progreso del día.
- **Todo para hoy en un lugar:** cada día linkea inline su apunte, sus finales por tema y la herramienta de verificación que corresponde.
- **Cierre del día:** autoevaluación 🔴🟡🟢 que alimenta el semáforo, mini-quiz del tema y "marcar completo + siguiente día".
- **Micro-detalles:** tiempo estimado por día, notas por ejercicio y soluciones modelo del tema (del banco) dentro de la sesión.
- Probado con simulación DOM: carga OK + sesión guiada renderiza en los 22 días.

## ⏳ Pendiente (necesita datos externos / decisión)
- [x] **P1 🔴 Mapear las 33 clases de la Prof. Loidi** ✅ HECHO — 11 clases (33 partes) mapeadas en `CLASES-LOIDI.md` e integradas en Recursos. Tema estimado por fecha + ancla de PL confirmada (conviene verificar abriendo cada clase).
- [x] **P2 🟡 Reemplazar los rangos "videos 1–6" de profe Alex** ✅ HECHO — 48 links exactos (título + video) en 12 días del roadmap, con el playlist real de cada tema (combinatoria, lógica, inducción, matrices, sistemas).
- [x] **P1 🟡 Transcribir las imágenes de finales** ✅ HECHO — 9 finales transcriptos en `FINALES-TRANSCRIPTOS.md` e integrados en la app (Práctica → "Finales reales", buscable).
- [ ] **P2 🟡 Sync real entre dispositivos** — guardar el JSON en la nube/Gist (por ahora está export/import manual).
