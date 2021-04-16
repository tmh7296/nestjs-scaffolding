module.exports = {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "local",
    "password": "123456",
    "database": "localdb",
    "synchronize": true,
    "logging": true,
    "entities": [
       "dist/**/*.entity.js"
    ],
    "migrations": [
       "dist/migrations/**/*.js"
    ],
    "cli": {
        "migrationsDir": "dist/migrations"
    }
} 