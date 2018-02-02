const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;
  UserSchema = new Schema({
    name: String,
    gender: String,
    age: Number,
    socialInfo: {
      type: ObjectId,
      ref: 'SocialInfo'
    },
    extra: {
      createdAt: {
        type: Date,
        default: Date.now()
      },
      updatedAt: {
        type: Date,
        default: Date.now()
      }
    }
  });

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.extra.createdAt = this.extra.updatedAt = Date.now()
  } else {
    this.extra.updatedAt = Date.now()
  }
  next()
});

mongoose.model('User', UserSchema);