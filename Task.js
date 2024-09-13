const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['todo', 'in_progress', 'done'], default: 'todo' },
  dependencies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  deadline: Date,
  comments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String, date: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('Task', taskSchema);
