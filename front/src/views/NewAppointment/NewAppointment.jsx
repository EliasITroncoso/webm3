import axios from "axios";
import styles from "./NewAppointment.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { diaSemana, isFormValid, isValidTime, validateNewAppoint } from "../../helpers/validate";

const NewAppointment = () => {

    const {userActive} = useUser();
    const navigate = useNavigate();
   // {date, time, status, description, userId} = req.body

    const valueInitial = {
        date: "",
        time: "",
        description: ""
    }

    const [formData, formDataState] = useState (valueInitial);
    const [errors, setErrors] = useState (valueInitial);
    
    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/appointments/schedule", {
                date: formData.date,
                time: formData.time,
                description: formData.description,
                userId: userActive.id
            })
            alert("Su turno fue reservado con exito!")
            navigate("/appointments")
         } catch (error) {
            alert("El turno no se agendo correctamente")
             console.log("Error del servidor: ", error)
             console.log("lo que estoy enviando: ", formData)
         }
     }

    useEffect( () => {
        !userActive.name && navigate("/login")
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
    };
    
    
    const backButton = () => {
        navigate("/appointments")
    }
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;

        formDataState({
            ...formData,
            [name]: value
        });
    };

    useEffect( () => {
       const errors = validateNewAppoint(formData);
       setErrors(errors)
    }, [formData])

   const formValid = isFormValid({errors, formData})

  return (
    <div>
        <h2>
        AGENDAR NUEVO TURNO
        </h2>

        <form className={styles.form_new} onSubmit={handleSubmit}>

            <label>Fecha</label>
            <input type="date"
            className={errors.date ? styles.input_error : styles.input_new}
            placeholder="DD/MM/AAAA"
            value={formData.date}
            name="date"
            onChange={handleInputChange}
            />
            {errors.date && <span className={styles.messageError}>{errors.date}</span>}
            

            <label>Hora</label>
            <input type="time"
            className={errors.time ? styles.input_error : styles.input_new}
            value={formData.time}
            name="time"
            onChange={handleInputChange}
            />
            {errors.time && <span className={styles.messageError}>{errors.time}</span>}

            <label>Descripcion</label>
            <input type="text"
            className={styles.input_new}
            placeholder="Turno para:"
            value={formData.description}
            name="description"
            onChange={handleInputChange}
            />
            {errors.description && <span className={styles.messageError}>{errors.description}</span>}

            <div>
                <button className={styles.button_new} onClick={backButton}>Atras</button>
                <button className={styles.button_new} disabled={!formValid}>Agendar</button>
            </div>
        </form>
    </div>
  )
}

export default NewAppointment;