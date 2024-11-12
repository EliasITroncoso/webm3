import { Request, Response } from "express";
import { cancelAppointment, createAppointment, getAppointmentById, getAppointments } from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appoint: Appointment[] = await getAppointments();
            res.status(200).json(appoint);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const appoint: Appointment = await getAppointmentById(Number(id));
            res.status(200).json(appoint);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}

export const appointmentSchedule = async (req: Request, res: Response) => {
    try {
        const {date, time, status, description, userId} = req.body
        const newAppoint: Appointment = await createAppointment({date, time, status, description, userId});
            res.status(200).json(newAppoint);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}

export const appointmentCancel = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const cancelAppoint: Appointment = await cancelAppointment(Number(id));
            res.status(200).json(cancelAppoint);
        } catch (error: any) {
            res.status(400).json(error.message)
        }
}