# EP1 - Primer pipeline de despliegue
### User Service con NestJS
---
<p align="center">
  Microservicio backend desarrollado con 
  NestJS-TypeScript para la gestión básica de 
  usuarios sin persistencia en base de datos.
</p>

<p align="center">
  Este proyecto implementa prácticas DevOps como 
  control de versiones con GitFlow, trabajo 
  colaborativo mediante Pull Requests y 
  automatización con GitHub Actions.
</p>

---

![CI](https://github.com/USUARIO/REPO/actions/workflows/ci.yml/badge.svg)

## Descripción del proyecto

El sistema permite realizar operaciones CRUD sobre usuarios, usando el almacenamiento en memoria.

### Funcionalidades base
- Listar usuarios
- Obtener usuario por ID
- Crear usuario
- Actualizar usuario
- Eliminar usuario

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Modelo de ramificación seleccionado: GitFlow

Se utiliza **GitFlow** como estrategia de trabajo.

### Estructura de ramas

- `main`: para versión estable
- `develop`: integración de desarrollo
- `feature/*`: agregar nuevas funcionalidades
- `hotfix/*`: correcciones urgentes en [ main ]
- `bugfix/*`: para corregir errores en [ develop ]

Se eligió GitFlow porque:

Principalmente es la que mejor se ajusta a la 
estructura solicitada en la actividad, por otro lado 
nos permite organizar el desarrollo en etapas claras.
Ademas mejora la trazabilidad mediante los Pull 
Requests; con el plus de la estructura en ramas y 
commits, finalmente facilita el mantenimiento del 
proyecto a largo plazo y el trabajo colaborativo entre 
multiples desarrolladores

---

## Tecnologías utilizadas

- Node.js
- NestJS
- TypeScript
- Git
- GitHub
- GitHub Actions