# API de Gestión de Notificaciones con Express

Este proyecto es una API de gestión de notificaciones construida con Node.js, Express, TypeScript y Nodemailer. La API permite enviar correos electrónicos y está estructurada en tres capas: controladores, servicios y componentes.


## Requisitos

- Node.js (>= 14.x)
- npm (>= 6.x)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-gestion-notificaciones-express.git
   cd api-gestion-notificaciones-express

2. Instala las dependencias:
   ```bash
   npm install

## Configuración

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

    SMTP_USER=tu-email@dominio.com
    SMTP_PASS=tu-contraseña
    SMTP_HOST=smtp.dominio.com
    SMTP_PORT=587

## Scripts Disponibles

1. npm run build: Compila el proyecto TypeScript a JavaScript.
2. npm start: Inicia el servidor en modo producción.
3. npm run dev: Inicia el servidor en modo desarrollo con recarga en caliente.
4. npm test: Ejecuta las pruebas con Jest.

## Uso

Haz una solicitud POST a /api/send-email con el siguiente cuerpo JSON:
    
    {
      "email": "destinatario@dominio.com",
      "asunto": "Asunto del correo",
      "mensaje": "Contenido del mensaje"
    }


