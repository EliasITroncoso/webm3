"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = (0, express_1.Router)();
//! Rutas
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", appointmentsController_1.getAllAppointments);
// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", appointmentsController_1.getAppointmentsById);
// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsController_1.appointmentSchedule);
// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.post("/cancel/:id", appointmentsController_1.appointmentCancel);
exports.default = appointmentsRouter;
