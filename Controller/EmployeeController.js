const EmployeeService = require('../Model/Employee');

const EmployeeController = {
    async getAllEmployees(req, res) {
        try {
            const employees = await EmployeeService.getAllEmployees();
            res.json(employees);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getEmployeeById(req, res) {
        try {
            const employee = await EmployeeService.getEmployeeById(req.params.id);
            if (!employee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json(employee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createEmployee(req, res) {
        try {
            const newEmployee = await EmployeeService.createEmployee(req.body);
            res.status(201).json(newEmployee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateEmployee(req, res) {
        try {
            const updatedEmployee = await EmployeeService.updateEmployee(req.params.id, req.body);
            if (!updatedEmployee) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json(updatedEmployee);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteEmployee(req, res) {
        try {
            const deleted = await EmployeeService.deleteEmployee(req.params.id);
            if (!deleted) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            res.json({ message: 'Employee deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = EmployeeController;