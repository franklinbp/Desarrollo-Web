# Maleskin: Sistema de Gestión de Licencias

## 📋 Descripción del Proyecto
Maleskin es un sistema integral para la gestión de venta de licencias digitales, diseñado para optimizar la comercialización de software, cuentas de streaming y videojuegos.

## 🛠️ Requisitos Previos
- XAMPP (Apache, MySQL, PHP)
- Node.js (v20+)
- Git
- Visual Studio Code (recomendado)

## 📦 Estructura del Proyecto
```
maleskin/
│
├── backend/           # Código de backend (PHP)
│   ├── config/        # Configuraciones
│   ├── controllers/   # Controladores
│   ├── models/        # Modelos de datos
│   ├── routes/        # Rutas de API
│   └── utils/         # Utilidades
│
├── frontend/          # Aplicación Next.js
│   ├── src/
│   ├── public/
│   ├── components/
│   └── pages/
│
├── database/          # Scripts de base de datos
│   ├── migrations/
│   └── seeds/
│
├── docs/              # Documentación
│
└── .htaccess         # Configuraciones Apache
```

## 🚀 Pasos de Implementación

### 1. Configuración Inicial

#### 1.1 Clonar Repositorio
```bash
# Navegar a directorio de XAMPP
cd C:\xampp\htdocs

# Clonar repositorio
git clone https://github.com/tu-usuario/maleskin.git
cd maleskin
```

### 2. Configuración de Base de Datos

#### 2.1 Crear Base de Datos
1. Abrir phpMyAdmin (http://localhost/phpmyadmin)
2. Crear nueva base de datos
```sql
-- Crear base de datos
CREATE DATABASE maleskin;

-- Crear usuario
CREATE USER 'maleskin_user'@'localhost' IDENTIFIED BY 'maleskin_pass';
GRANT ALL PRIVILEGES ON maleskin.* TO 'maleskin_user'@'localhost';
FLUSH PRIVILEGES;
```

#### 2.2 Ejecutar Migraciones
```bash
# Ejecutar scripts de migración
php backend/database/migrate.php
```

### 3. Configuración de Backend (PHP)

#### 3.1 Configurar Conexión de Base de Datos
Editar `backend/config/database.php`:
```php
<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'maleskin';
    private $username = 'maleskin_user';
    private $password = 'maleskin_pass';
    
    // ... resto de la configuración
}
```

#### 3.2 Instalar Dependencias (Opcional)
```bash
# Si usas Composer
cd backend
composer install
```

### 4. Configuración de Frontend (Next.js)

#### 4.1 Instalar Dependencias
```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install

# Copiar archivo de ejemplo de variables de entorno
cp .env.example .env.local
```

#### 4.2 Configurar Variables de Entorno
Editar `.env.local`:
```env
# Backend API
NEXT_PUBLIC_API_URL=http://localhost/maleskin/backend

# Otras configuraciones
NEXTAUTH_SECRET=tu_secreto_aleatorio
DATABASE_URL=mysql://maleskin_user:maleskin_pass@localhost:3306/maleskin
```

### 5. Seguridad

#### 5.1 Configurar .htaccess
En la raíz del proyecto (`C:\xampp\htdocs\maleskin\.htaccess`):
```apache
# Bloquear acceso a directorios sensibles
<FilesMatch "^(backend|database|docs)">
    Order Allow,Deny
    Deny from all
</FilesMatch>

# Habilitar reescritura de URL
RewriteEngine On
RewriteBase /maleskin/

# Redirigir solicitudes API
RewriteRule ^api/(.*)$ backend/routes/$1.php [L]
```

### 6. Iniciar Desarrollo

#### 6.1 Iniciar Servicios
1. Abrir Panel de Control de XAMPP
2. Iniciar Apache y MySQL

#### 6.2 Iniciar Frontend (Desarrollo)
```bash
# En el directorio frontend
npm run dev
```

### 7. Pruebas

#### 7.1 Pruebas de Backend
```bash
# Ejecutar pruebas PHP
php backend/tests/run_tests.php
```

#### 7.2 Pruebas de Frontend
```bash
# En el directorio frontend
npm test
```

## 📝 Flujo de Trabajo

### Etapas de Desarrollo
1. Configurar entorno local
2. Configurar base de datos
3. Implementar modelos de backend
4. Crear APIs
5. Desarrollar frontend
6. Añadir autenticación
7. Implementar lógica de negocio
8. Realizar pruebas
9. Preparar despliegue

## 🔧 Solución de Problemas Comunes

### Errores de Conexión
- Verificar servicios de XAMPP
- Comprobar credenciales de base de datos
- Revisar configuraciones de red

### Errores de Dependencias
```bash
# Reinstalar dependencias
cd backend
composer install

cd ../frontend
npm install
```

## 📚 Recursos

### Documentación
- [XAMPP](https://www.apachefriends.org/docs/)
- [PHP](https://www.php.net/manual/es/)
- [Next.js](https://nextjs.org/docs)
- [MySQL](https://dev.mysql.com/doc/)

## 🚨 Notas Importantes
- Mantener actualizadas las dependencias
- Realizar copias de seguridad regularmente
- Seguir buenas prácticas de seguridad
- Documentar cambios y modificaciones

## 📋 Changelog
- v0.1.0: Configuración inicial del proyecto
- v0.2.0: Implementación de modelos básicos
- (Continuar actualizando)

## 📄 Licencia
[Especificar tipo de licencia]

**Nota Final**: Esta documentación es una guía dinámica. Actualízala constantemente con nuevos conocimientos y mejoras.