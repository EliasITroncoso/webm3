import {Router} from "express";
import { appointmentCancel, appointmentSchedule, getAllAppointments, getAppointmentsById } from "../controllers/appointmentsController";

const appointmentsRouter: Router = Router();

//! Rutas
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/", getAllAppointments)

// GET /appointments => Obtener el detalle de un turno específico.
appointmentsRouter.get("/:id", getAppointmentsById)

// POST /appointments/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentSchedule)

// PUT /appointments/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", appointmentCancel)

export default appointmentsRouter;