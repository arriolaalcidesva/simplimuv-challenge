<img src="https://github.com/damiancipolat/node-bff/blob/master/doc/node.png?raw=true" width="150px" align="right" />

# Node Developer Applicant Interview Test

### **Configuración**:
Dentro del directorio /config se encuentran los archivos json de cada entorno, por defecto se usa "default.json".

```console
{
  xxxxx
}
```

### **Comandos** (Windows 10):

- Crear imagén de docker:
```console
 docker compose up -d
```

- Ejecutar contenedor de la ultima imagén subida:
```console
 docker run xxxx
```
- Ejecutar test:
```console
 npm run test
```
- Ejecutar revisión de cobertura de codigo:
```console
 npm run test:cov
```
- Ejecutar servidor:
```console
 npm start
```

### **Stack usado**:
- Node.js v18.12.0
- Swagger-ui-express
- Docker
- Test: Jest
  (Opte por usar estas librerias por que me resulta más cómodo trabajar con ellas que las recomendadas).
- config: Para manejar diferentes archivos de configuración por cada entorno.
- Nest.js
- xxxx
- xxxx.

### **API REST**
Para observar la documentacion del api rest, el proyecto cuenta con un modulo de swagger, puede accederlo desde:
http://127.0.0.1:3003/doc/

### **Decisiones de arquitectura**
El api fue dividida en estas capas:
```bash

├── src
    ├── constants               // Para valores mantenidos en el tiempo
    ├── config                  // Contiene la configuración de conexión a la Base de datos
    ├── config                  // Contiene la configuración de conexión a la Base de datos
    ├── config                  // Contiene la configuración de conexión a la Base de datos
    ├── auth                    // Módulo para autenticación
              ├── services      // Contiene la lógica de negocio
              ├── controllers   // Contiene la declaración de endpoints
              ├── dto           // Patrón de diseño de datos para el requerimiento y respuesta
              ├── mock          // Datos para pruebas
    ├── simplimuv               // Modulo que contiene los submódulos de products y createlead
          ├── products          // Módulo para productos de Motocycle
              ├── services      // Contiene la lógica de negocio
              ├── controllers   // Contiene la declaración de endpoints
              ├── repository    // Contiene la lógica de trabajo con la base de datos
              ├── dto           // Patrón de diseño de datos para el requerimiento y respuesta
              ├── entities      // Contiene las clases para mapear en tablas con la base de datos
              ├── mock          // Datos para pruebas
          ├── createlead        // Modulo para Lead
              ├── services      // Contiene la lógica de negocio
              ├── controllers   // Contiene la declaración de endpoints
              ├── repository    // Contiene la lógica de trabajo con la base de datos
              ├── dto           // Patrón de diseño para validar datos tanto para el requerimiento como su respuesta
              ├── entities      // Contiene las clases para mapear en tablas con la base de datos
              ├── mock          // Datos para pruebas
```

Se opto por dividir la comunicación a travez de red de la logica de negocio por este motivo /products y /createlead estan al mismo nivel, este diseño esta pensado para que en un escenario productivo poder cambiar la forma en que se comunica un microservicio sin tener que realizar mayores cambios.

### Endpoints

| Verb| Endpoint                        | Description                                              |
|:----|:--------------------------------|:---------------------------------------------------------|
| GET | /health                         | Información de salud en el servidor |
| GET | /products/motorcycles           | Listado de motorcycles |
| GET | /products/motorcycles/:uuid     | Obtiene motorcycle por su id |
| GET | /products/accessories           | Listado de accessories |
| GET | /products/accessories/:uuid     | Obtiene accessory por su uuid |
| POST| /createlead                     | Endpoint para crear Leads |

**Middlewares**:
- Swagger: Genera un sandbox de prueba del api.
- Errores: Este fue desarrollado para resolver en un único punto todos las excepciones recibidas.

### **Versionado**:
Utilizo el campo "version" del archivo package.json del proyecto para registrar los cambios de versiones en el proyecto, este campo es el unico lugar en donde se registra la versión en todo el proyecto.

**Docker**: Al momento de buildear la imagén de docker, se puede observar en el archivo package.json
```console
docker run xxxx

### Unit test:
El proyecto contiene un script de analisis y reporte de cobertura del codigo usando el modulo npm "nyc" de istanbuljs.

```console
 npm run test:cov

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------|---------|----------|---------|---------|-------------------

-------------------|---------|----------|---------|---------|-------------------
```

El unit test es ejecutado.