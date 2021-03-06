const mongoose = require ('mongoose');

const { Schema } = mongoose;
//const Schema = mongoose.Schema;
//this says in mongoose, there is a property called schema. take that property and put it in to variable named schema. only works if property and new variable name is the same
//that is why you need curly braces, in order to take the same name property of that library and put it around the new variable name 
//called ES5 javascript de-structuring
//this is test. some more test. more test

const userSchema = new Schema ({
    googleId: String,
    credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
//using mongoose to create a new collection of users
//mongoose won't overwrite existing collections, will just create new ones 
//our model class