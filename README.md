# La Carlota
> Cartera de Locales Colimota


El repo esta divido en 2:

* `sanity/`: Aqui se encuentra todo el "backend" (usando [sanity.io](https://www.sanity.io))
* `la-carlota-site`: Aqui se encuentra todo el "storefront" de esta app, hecho con [gatsbyjs](https://www.gatsbyjs.com)

Dentro de cada carpeta se encuentra todo lo necesario para correr la aplicacion.

### Development

1.- Clona el repo

2.- Instala deps (ndentro de cada carpeta `sanity`, `la-carlota-site`): `npm install`

3.- Corre cada app.


### Sanity

Para correr el _"backend"_ es muy sencillo:

```bash
npm start
```

Con ese comando vas a tener Sanity Studio corriendo en `http://localhost:3333`.

Listo, es todo.

----

### La Carlota Site

Ya que tengas corriendo el server de sanity en otra tab posicionate en la carpeta `la-carlota-site/`, y para correr el servidor de development usa el mismo comando:

```bash
npm start
```

Va a levantar el sitio de la carlota y va a hacer sourcing de todos los datos dentro de sanity, una vez que termine el proceso de _build_, vamos tener corriendo nuestra app en `http://localhost:8000`

#### Netlify

Para el poco procesamiento que necesitamos (registro de nuevos lugares) estamos usando una funcion lambda que corre en netlify, las funciones estan definidas dentro de la carpeta `functions/`. Para probar todo ese proceso, en lugar de correr `npm start`, tenemos que usar:

```bash
npm run netlify
```

Este comando internamente corre el build de gatsby, pero tambien levanta las lambda de manera local. Despues de este comando vas a tener tu aplicacion corriendo en otro puerto en lugar del `8000`, ahora seria `http://localhost:8888` y las funciones lambda corren en `http://localhost:8888/.netlify/functions`
