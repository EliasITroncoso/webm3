import styles from "./Login.module.css";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { validateLogin } from "../../helpers/validate";
import axios from "axios";
import { useUser } from "../../context/userContext";

const Login = () => {

  const navigate = useNavigate();

  const {setUserActive} = useUser();

  const postData = async (formData) => {
    try {
        const response = await axios.post("http://localhost:3000/users/login", formData)
        if (response.status === 201 || response.status === 200) {
            alert("Usuario logeado con exito!")
            setUserActive(response.data.user)
            navigate("/home")
        }
      } catch (error) {
        alert("Ha ocurrido un error. Usuario o contraseña incorrectos")
        console.log("Error del servidor: ", error)
    }
}

    return (
     <div>
         <h2>LOGIN DE USUARIO</h2>

        <Formik
          initialValues={{
            username: "",
            password: ""
          }}
          onSubmit={(values) => {
            postData(values);
          }}
          validate={validateLogin}
        >
          {
          ({ errors }) => (
            <Form className={styles.form_login}>
              <div>
                <label>Usuario:</label>
                <Field type="text" name="username" className={styles.input_login}/>
                <ErrorMessage name="username" component="div" />
              </div>

              <div>
                <label>Contraseña:</label>
                <Field type="password" name="password" className={styles.input_login}/>
                <ErrorMessage name="password" component="div" className={styles.messageError} />
              </div>
              <button type="submit" className={styles.button_login} 
              disabled={errors.password || errors.username}>Iniciar sesión</button>
            </Form>
          )}
        </Formik>

         <span className={styles.register}>
           ¿No tienes usuario?
           <Link to={"/register"}>
             <p className={styles.register_esp}>
               Regístrate
             </p>
           </Link>
         </span>
       </div>
   );
};

export default Login;


// const Login = () => {

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     navigate("/home");
// };

//   return (
//     <div>
//         <h2>
//         LOGIN DE USUARIO
//         </h2>

//         <form className={styles.form_login} onSubmit={handleSubmit}>
//             <label>Usuario</label>
//             <input type="text" className={styles.input_login} />
            
//             <label>Contraseña</label>
//             <input type="password" className={styles.input_login} />
//             <button className={styles.button_login}>Enviar</button>
//         </form>

//         <span className={styles.register}>
//           ¿No tienes usuario?
//           <Link to={"/register"}>
//             <p className={styles.register_esp}>
//               Registrate
//             </p>
//           </Link>
//         </span>
//       </div>
//   )
// }

// export default Login;