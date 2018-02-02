const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SocialInfoSchema = new Schema({
    email: String,
    phone: Number,
    hobby: [String],
    relation: {
      friends: [String],
      family: [String],
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
SocialInfoSchema.pre('save', function (next) {
  if (this.isNew) {
    this.extra.createdAt = this.extra.updatedAt = Date.now()
  } else {
    this.extra.updatedAt = Date.now()
  }
  next()
});
mongoose.model('SocialInfo', SocialInfoSchema);