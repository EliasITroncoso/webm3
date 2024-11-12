import { useUser } from "../../context/userContext";
import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Navbar = () => {
    const {userActive, setUserActive} = useUser();
    const navigate = useNavigate();

    const logout = () => {
        Swal.fire({
            title: "Estas seguro que quieres salir?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, salir"
          }).then((result) => {
            if (result.isConfirmed) {
                setUserActive(null); // Limpia el estado de usuario activo
                navigate("/login");
            }
          });

    }

    return (
        <nav className={styles.Navbar}>
            <img src="/centro-logo.png" alt="logo centro med" className={styles.img_logo}></img>


            <div className={styles.nav_center}>

                <Link to={"/home"}>
                    <p>Home</p>
                </Link>

                <Link to={"/about"}>
                    <p>About</p>
                </Link>


                {userActive.name && (
                        <Link to={"/appointments"}>
                            <p>Mis turnos</p>
                        </Link>
                )}


                
            </div>

            {
                userActive.name ? (
                    <div className = {styles.nav_r}>
                        <p>Hola, {userActive.name}</p>
                        <button onClick={logout} className={styles.logoutButton}>Salir</button>           
                    </div>
                ) : (
                    <Link to={"/login"}>
                        <p>Login</p>
                    </Link>
                )
            }
            
        </nav>
    )
}

export default Navbar;