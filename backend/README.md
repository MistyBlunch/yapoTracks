## Requisitos:

- Node JS: versión 18.13.0
- Yarn
- MongoDB

## Pasos para ejecutar el backend

1. Reemplazamos las variables de entorno.
2. Instalamos las dependencias `yarn install`
3. Copiar el contenido de `.env.example` a `.env` y completar todos los campos.
4. Para correr el servidor ejecutar `yarn dev`

## Detalles del servidor

### Paths-Casos de uso

- **GET:** /tracksByApi

  - Input

    Query Parameters:

    - term

  - Output

    ```json
    {
      "resultCount": 1,
      "results": [
        {
          "name": "",
          "collectionName": "",
          "previewUrl": "",
          "releaseDate": "",
          "trackPrice": 1.29,
          "imageUrl100": "",
          "primaryGenreName": ""
        }
      ]
    }
    ```

- **GET:** /tracks

  - Output

    ```json
      [
        {
        	"_id": "",
        	"name": "",
        	"collectionName": "",
        	"previewUrl": "",
        	"releaseDate": "",
        	"trackPrice": 1,
        	"imageUrl100": "",
        	"primaryGenreName": ""
        }
      ]
    ```

- **POST:** /track

  - Input

    ```json
    {
      "collectionName": "",
      "imageUrl100": "",
      "previewUrl": "",
      "primaryGenreName": "",
      "name": "",
      "releaseDate": "",
      "trackPrice": 3
    }
    ```
