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
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAppointments = void 0;
const appointments = [];
let appointmentId = 1;
//Implementar una función que pueda retornar el arreglo completo de turnos.
const getAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = appointments;
    return allAppointments;
});
exports.getAppointments = getAppointments;
// Implementar una función que pueda obtener el detalle de un turno por ID.
const getAppointmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundAppointment = appointments.find(apoint => apoint.id === id);
    if (!foundAppointment)
        throw Error("Turno no existente");
    return foundAppointment;
});
exports.getAppointmentById = getAppointmentById;
// Implementar una función que pueda crear un nuevo turno, 
// siempre guardando, además, el ID del usuario que ha creado dicho turno. 
// NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
const createAppointment = (createAppointDTO) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = {
        id: appointmentId++,
        date: createAppointDTO.date,
        time: createAppointDTO.time,
        status: createAppointDTO.status,
        description: createAppointDTO.description,
        userId: createAppointDTO.userId
    };
    appointments.push(newAppointment);
    return newAppointment;
});
exports.createAppointment = createAppointment;
// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, 
// cambiar su estado a “cancelled”.
const cancelAppointment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointIndex = appointments.findIndex(appoint => appoint.id === id);
    if (appointIndex != -1) {
        appointments[appointIndex].status = "cancelled";
    }
    else {
        throw new Error("No se encontró un turno con el ID");
    }
});
exports.cancelAppointment = cancelAppointment;
