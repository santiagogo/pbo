Don Javier, venga yo le explico.

1. Layout.html es donde se definienen el header y el footer. 
2. Las rutas estan dentro de lib en router.js
3. Cada template solo tiene que ponerle el mismo nombre que esta en la ruta y guardarlo como un html, y para links
use el {{pathFor 'template'}}, en donde template es el html con las cosas.  