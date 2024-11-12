import { appointmentModel, userModel } from "../config/data-source";
import IAppointmentDto from "../dtos/IAppointmentDto";
import { Appointment } from "../entities/Appointment";
//import IAppointment from "../interfaces/IAppointment";

// const appointments: IAppointment[] = [];
// let appointmentId: number = 1;

//!Implementar una función que pueda retornar el arreglo completo de turnos.
// export const getAppointments = async (): Promise<IAppointment[]> => {
//     const allAppointments: IAppointment[] = appointments;
//     return allAppointments;
// };

export const getAppointments = async (): Promise<Appointment[]> => {
    const allAppointments: Appointment[] = await appointmentModel.find();
    return allAppointments;
};

//! Implementar una función que pueda obtener el detalle de un turno por ID.
// export const getAppointmentById = async (id: number): Promise<IAppointment>  => {
//     const foundAppointment: IAppointment | undefined = appointments.find(apoint => apoint.id === id)

//     if(!foundAppointment) throw Error("Turno no existente");

//     return foundAppointment;
// }

export const getAppointmentById = async (appointmentId: number): Promise<Appointment>  => {
    const foundAppointment: Appointment | null = await appointmentModel.findOneBy({id: appointmentId})

    if(!foundAppointment) throw Error("Turno no existente");

    return foundAppointment;
}

//! Implementar una función que pueda crear un nuevo turno, 
//! siempre guardando, además, el ID del usuario que ha creado dicho turno. 
//! NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 
// export const createAppointment = async (createAppointDTO: IAppointmentDto) => {

//     const newAppointment = {
//         id: appointmentId++,
//         date: createAppointDTO.date,
//         time: createAppointDTO.time,
//         status: createAppointDTO.status,
//         description: createAppointDTO.description,
//         userId: createAppointDTO.userId
//     }

//     appointments.push(newAppointment);
//     return newAppointment;
// }
export const createAppointment = async (createAppointDTO: IAppointmentDto) => {
    const newAppointment: Appointment = appointmentModel.create(createAppointDTO);
    const user = await userModel.findOneBy({ id: createAppointDTO.userId });
    if (!user) {
        throw new Error('User not found');
    }
    newAppointment.user = user;
    await appointmentModel.save(newAppointment);
    return newAppointment;
};


//! Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, 
//! cambiar su estado a “cancelled”.
// export const cancelAppointment = async (id: number) => {
//     const appointIndex = appointments.findIndex(appoint => appoint.id === id)

//     if(appointIndex != -1) {
//         appointments[appointIndex].status = "cancelled";    
//     } else {
//         throw new Error ("No se encontró un turno con el ID")
//     }
// }

export const cancelAppointment = async (id: number) => {
    const appoint = await appointmentModel.findOneBy({ id })
    if(!appoint) throw Error("Turno inexistente")
    appoint.status = "Cancelled"
    await appointmentModel.save(appoint)
    return appoint;
}