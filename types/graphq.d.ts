import { GraphqlRequest } from '@jovercao/graphql.js'

declare module '*.gql' {
    const __default: GraphqlRequest
    export default __default
}

declare module '*.graphql' {
    const __default: GraphqlRequest
    export default __default
}
