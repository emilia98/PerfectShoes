module.exports = {
    'development': {
        port: process.env.PORT || 8080,
        connectionString: 'mongodb://localhost:27017/perfectshoes-db'
    },
    'production': {}
}