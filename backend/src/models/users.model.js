// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose-type-email');
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    email : {
      type: mongooseClient.SchemaTypes.Email,
      unique: true,
      required: [true, 'Email is required']
    },
    employeeNo : {
      type: String,
      unique: true,
      required: [true, 'Employee No is required']
    },

    password: { type: String,
      required: [true, 'Password is required'],
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('users', users);
};