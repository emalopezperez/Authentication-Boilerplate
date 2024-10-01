# Authentication Boilerplate

## Descripción

**Authentication Boilerplate** es una plantilla base diseñada para la rápida implementación de autenticación y gestión de roles en aplicaciones Next.js. Soporta autenticación con proveedores externos como Google, GitHub, y mediante credenciales de usuario (email y contraseña), usando tecnologías como PostgreSQL, Prisma, NextAuth, Tailwind CSS y Zod.

Este boilerplate te permitirá clonar el repositorio y tener una solución completa de autenticación lista para ser integrada en tus aplicaciones, sin necesidad de configurar todo desde cero.

## Características

- **Autenticación con Proveedores Externos**: Google, GitHub.
- **Autenticación con Credenciales**: Inicio de sesión mediante correo y contraseña.
- **Gestión de Roles**: Asigna roles a los usuarios (e.g. Admin, User) y maneja permisos fácilmente.
- **Validación de Formularios**: Usando **Zod** y **React Hook Form** para una validación robusta.
- **Interfaz Personalizable**: Incluye **Tailwind CSS** para que puedas modificar fácilmente la apariencia.
- **Base de Datos PostgreSQL**: Usa **Prisma ORM** para gestionar la base de datos con PostgreSQL.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/emalopezperez/Authentication-Boilerplate.git
   cd authentication-boilerplate
   ```

2. Instala las dependencias:
   `npm install`

3. Configura las variables de entorno creando un archivo .env en la raíz del proyecto y añadiendo las siguientes variables:

# Base de Datos

DATABASE_URL="postgresql://user:password@localhost:5432/mydb"

# Proveedores de Autenticación

GITHUB_ID="tu-github-id"
GITHUB_SECRET="tu-github-secret"

AUTH_GOOGLE_ID="tu-google-id"
AUTH_GOOGLE_SECRET="tu-google-secret"

# NextAuth Config

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="tu-secreto-nextauth"

# JWT Config

JWT_SECRET="tu-jwt-secreto"

4. Ejecuta las migraciones de Prisma para preparar la base de datos:

```
npx prisma migrate dev --name init

```

5. Inicia el servidor de desarrollo:

```
  npm run dev

```

Tecnologías Utilizadas

    Next.js: Framework de React para aplicaciones web con renderizado del lado del servidor.
    NextAuth: Manejo de autenticación con proveedores externos y credenciales de usuario.
    Prisma: ORM para trabajar con bases de datos relacionales como PostgreSQL.
    PostgreSQL: Base de datos relacional.
    Tailwind CSS: Framework de CSS para estilizar componentes de manera rápida y eficiente.
    Zod: Librería para la validación de datos.
    React Hook Form: Manejo de formularios y validación en React.

Cómo Contribuir

Si deseas contribuir, por favor sigue estos pasos:

    Haz un fork del repositorio.
    Crea una nueva rama con tu funcionalidad: git checkout -b mi-nueva-funcionalidad.
    Realiza los cambios necesarios y haz commit: git commit -m 'Añadir nueva funcionalidad'.
    Envía tu rama: git push origin mi-nueva-funcionalidad.
    Crea un Pull Request para revisar tus cambios.
