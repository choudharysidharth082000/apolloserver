const {gql} = require('apollo-server-express')
const typeDefs = gql`
type user 
{
        id: ID
        email: String!
        mobile: Int
        title: specify
        firstName: String
        lastName: String
        isActive: Boolean
        createdAt: Int
        updatedAt: Int

}
enum specify
{
        Mr
        Mrs
        Ms
}
input userInput 
{
        
        email: String!
        mobile: Int
        title: specify
        firstName: String
        lastName: String
        isActive: Boolean
        createdAt: Int
        updatedAt: Int


}

  
  type Query {
    
        hello: String
        getall: [user]


    
    
    
  }

  type Mutation
  {
    createPost(post: userInput): user
    updatePost(userId: String, posting: userInput): user

    deletePost(userId: String): String
  }
`;
module.exports = typeDefs;