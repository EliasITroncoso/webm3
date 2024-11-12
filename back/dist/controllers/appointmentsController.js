"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentCancel = exports.appointmentSchedule = exports.getAppointmentsById = exports.getAllAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appoint = yield (0, appointmentsService_1.getAppointments)();
        res.status(200).json(appoint);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appoint = yield (0, appointmentsService_1.getAppointmentById)(Number(id));
        res.status(200).json(appoint);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.getAppointmentsById = getAppointmentsById;
const appointmentSchedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, status, description, userId } = req.body;
        const newAppoint = yield (0, appointmentsService_1.createAppointment)({ date, time, status, description, userId });
        res.status(200).json(newAppoint);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.appointmentSchedule = appointmentSchedule;
const appointmentCancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelAppoint = yield (0, appointmentsService_1.cancelAppointment)(Number(id));
        res.status(200).json(cancelAppoint);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.appointmentCancel = appointmentCancel;
