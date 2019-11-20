import gql from '@jovercao/gql-js'

gql.init({
    defaults: 'main',
    basePath: __dirname,
    clients: {
        main: {
            pattern: 'gql/**',
            url: 'http://localhost:8003/graphql'
        }
    }
})
