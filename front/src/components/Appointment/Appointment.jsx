import styles from "./Appointment.module.css";
import axios from "axios";
import { useUser } from "../../context/userContext";

const Appointment = ({date, time, description, status, id}) => {
  const formattedDate = date.split("T")[0];
  const formattedTime = time.slice(0, 5);

const {userAppointments, setUserAppointments} = useUser();

const cancelAppointment = async () => {
      try {
        const response = await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
        const newAppoint = userAppointments?.map(appointment => {
          if (appointment.id === id) {
            return {...appointment, status: "Cancelled"}
          }
          return appointment;
        })
        setUserAppointments(newAppoint)

        alert("Turno cancelado con exito")

    } catch (error) {
        alert("Cancelacion de turno erronea")
        console.log("Error del servidor: ", error)
        console.log("lo que estoy enviando: ", formData)
    }
}

  return (
    <div className={styles.conteiner}>
        <h3>Fecha: {formattedDate}</h3>
        <p>Hora: {formattedTime}</p>
        <p>{description}</p>
        <p className={status === "Cancelled" ? styles.text_red : styles.text_green}> Estado: {status}</p>
        <button disabled={status !== 'Active' || new Date(date) <= new Date()} className={styles.button} onClick={cancelAppointment}>Cancelar turno</button>
    </div>
  )
}

export default Appointment;