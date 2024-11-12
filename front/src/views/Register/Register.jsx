import { isFormValid, validateRegister } from "../../helpers/validate.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import axios from "axios";
import Swal from "sweetalert2";
 
const Register = () => {

    const navigate = useNavigate();

    const valueInitial = {
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: ""
    }

    const [formData, formDataState] = useState (valueInitial);
    const [errors, setErrors] = useState (valueInitial);

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        formDataState({
            ...formData,
            [name]: value
        });
    };

     useEffect( () => {
         const errors = validateRegister(formData);
         setErrors(errors);
     }, [formData])


    const postData = async () => {
        try {
            const response = await axios.post("http://localhost:3000/users/register", formData)
            console.log(response)
            console.log("lo que estoy enviando: ", formData)
            if (response.status === 201 || response.status === 200) {
                Swal.fire({
                    title: "Registro exitoso!",
                    text: "Usuario registrado con exito!",
                    icon: "success"
                  });
                navigate("/login")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algo salio mal.. reintenta"
                  });
            }
        } catch (error) {
            console.log("Error del servidor: ", error)
            console.log("lo que estoy enviando: ", formData)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postData();
        navigate("/")
    };

    const backButton = () => {
        navigate("/login")
    }

    const formValid = isFormValid({errors, formData})

  return (
    <div>
        <h2>
        FORMULARIO DE REGISTRO
        </h2>

        <form className={styles.form_register} onSubmit={handleSubmit}>

            <h3>Usuario</h3>
            <label>Usuario</label>
            <input type="text"
            className={styles.input_register}
            placeholder="JuanPerez"
            value={formData.username}
            name="username"
            onChange={handleInputChange}
            />
            {errors.username && <span className={styles.messageError}>{errors.username}</span>}
            

            <label>Contraseña</label>
            <input type="password"
            className={styles.input_register}
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            />
            {errors.password && <span className={styles.messageError}>{errors.password}</span>}

            <br />
            <br />

            <h3>Datos personales</h3>
            <label>Nombre y apellido</label>
            <input type="text"
            className={styles.input_register}
            placeholder="Juan Perez"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
            />
            {errors.name && <span className={styles.messageError}>{errors.name}</span>}

            <label>Email</label>
            <input type="text"
            className={styles.input_register}
            placeholder="JuanPerez@mail.com"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
            />
            {errors.email && <span className={styles.messageError}>{errors.email}</span>}

            <label>Fecha de nacimiento</label>
            <input type="text"
            className={styles.input_register}
            placeholder="DD/MM/AAAA"
            value={formData.birthdate}
            name="birthdate"
            onChange={handleInputChange}
            />
            {errors.birthdate && <span className={styles.messageError}>{errors.birthdate}</span>}

            <label>Nro DNI</label>
            <input type="number"
            className={styles.input_register}
            placeholder="12345678"
            value={formData.nDni}
            name="nDni"
            onChange={handleInputChange}
            />
            {errors.nDni && <span className={styles.messageError}>{errors.nDni}</span>}

            <div>
                <button className={styles.button_register} onClick={backButton}>Atras</button>
                <button className={styles.button_register} disabled={!formValid}>Enviar</button>
            </div>
        </form>
    </div>
  )
}

export default Register;