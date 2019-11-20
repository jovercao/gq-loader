import './gql-init'
import main from './gql/main.gql'

(async function() {
    const author = await main.getAuthor({ id: 1 })
    console.log(author)

    const posts = await main.getPosts({ id: 1 })
    console.log(posts)
})()
