import { useEffect, useState } from "react";
import myAppointment from "../../helpers/myAppointments";
import Appointment from "../../components/Appointment/Appointment";
import styles from "./MyAppointments.module.css"
import axios from "axios";
import { useUser } from "../../context/userContext";
import { useNavigate, Link } from "react-router-dom";

const MyAppointments = () => {
    // const [appointments, setAppointments] = useState(myAppointment);

    const {userActive, userAppointments, setUserAppointments} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async  () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${userActive.id}`)
                setUserAppointments(response.data.appointments)
            } catch (error) {
                console.log("Error en fetchData: ", error)
                console.log("Esto se está enviando. ERROR", response.data)
            };
        };

     !userActive.name ? navigate("/") : fetchData();
       
    }, [])

    return (
        <section>
            <h2>MIS TURNOS</h2>
            
            <div className={styles.border}>
                {
                    userAppointments.length ? (
                        userAppointments.map ( ({time, date, status, description, id}) => {
                            return (
                                <Appointment key={id} time={time} date={date} status={status} description={description} id={id} />
                            )
                        })
                    ) : (
                        <div> No tienes turnos para mostrar </div>
                    )
                }
            <Link to="/nAppoint" className={styles.button}>
                Agendar nuevo turno
            </Link>
            </div>
            
        </section>
    );
}

export default MyAppointments;
