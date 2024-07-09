import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  number: {type: Number, required: true},
  message: {type: String, required: true},
  isSolved: {type: Boolean, default: false},
});

export default mongoose.model('Contact', contactSchema);
