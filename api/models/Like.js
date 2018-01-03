/**
 * Like.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:
    {
      type:"integer", 
      required: true,
      autoIncrement:true
    },
    post:  {
             model:"post",       
             unique: true
          },
    user: {model:"user"}
  }
};
