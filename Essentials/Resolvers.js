const post = require('../models/Schema');
const resolvers = {
    Query: {
      hello: () => 'Hello world!',
      getall: async () =>
      {
        return post.find();

      }
    },
    Mutation:
    {
      createPost: async (parent , args , context, info )=>
      {
        const {email, mobile, title, firstName, lastName , isActive, createdAt, updatedAt} = args.post
        const posting = await new post({email, mobile, title , firstName, lastName, isActive , createdAt, updatedAt }).save();
        return posting;


      },
      updatePost: async (parent, args, context, info)=>
      {
        const { id } = args;
        const {email, mobile, title, firstName, lastName , isActive, createdAt, updatedAt} = args.posting;
        const posting = await post.findOneAndUpdate(id,{
          email,
          mobile,
          firstName,
          lastName,
          isActive,
          createdAt,
          updatedAt,

        }, {new : true });

        return posting;
        
      },

      deletePost: async (parent, args, context, info) =>
      {
        const { id } = args;
        await post.findOneAndDelete(id);
        return "Element is deleted successfully";
      }
    }
  };

  
  module.exports = resolvers;