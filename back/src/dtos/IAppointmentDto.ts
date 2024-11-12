interface IAppointmentDto {
    date: string;
    time: string;
    description: string;
    status: "Active" | "Cancelled" | "Completed";
    userId: number;
}

export default IAppointmentDto;