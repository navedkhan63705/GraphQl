import mongoose from 'mongoose';
import db from '../db.js';

const EmployeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    salary: Number
});

const Employee  = db.model('Employee', EmployeeSchema);

export default Employee;