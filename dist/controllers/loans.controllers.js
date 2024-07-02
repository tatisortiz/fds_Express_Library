"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLoansById = exports.updateLoansById = exports.createLoans = void 0;
const createLoans = (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: 'CREATE LOANS'
    });
};
exports.createLoans = createLoans;
const updateLoansById = (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: `LOANS UPDATED with id ${req.params.id}`
    });
};
exports.updateLoansById = updateLoansById;
const deleteLoansById = (req, res) => {
    res.json({
        success: true,
        message: `LOANS DELETED With id: ${req.params.id}`
    });
};
exports.deleteLoansById = deleteLoansById;
