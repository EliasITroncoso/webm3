export const validateRegister = (values) => {
    const errors = {};
 
   if (!values.username) {
    errors.username = "Nombre de usuario requerido"
   } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/.test(values.username)) {
    errors.username = "El usuario debe contener al menos un numero, una minuscula y una mayuscula.Sin espacios"
   } else if (values.name && !values.password) {
     errors.password = "La contraseña no puede estar vacia"
    } else if (values.username && !/^(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
      errors.password = "La contraseña debe contener un numero, y una longitud de, al menos, 8 caracteres"
   } else if (values.username && values.password && !/^[A-Z][a-z]+ [A-Z][a-z]+$/.test(values.name)) {
    errors.name = "Deben comenzar con mayusculas, separado por un espacio"
   } else if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email invalido';
  } else if (values.birthdate && !/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(values.birthdate)) {
    errors.birthdate = "Formato de fecha invalido (DD/MM/AAAA)"
  }
  
   return errors;
  };
  
  export const validateLogin = (values) => {
    const errors = {};
    
    if (values.password && !/^.{8,}$/.test(values.password)) {
      errors.password="La contraseña debe tener al menos 8 caracteres"
    }
    
    return errors;
  };
  
  export const isFormValid = ({errors, formData}) => {
     return (
         Object.keys(errors).length === 0 &&
         Object.values(formData).every(value => value !== "")
     );
  };
  
  export const diaSemana = (dateString) => {
    const date = new Date(dateString);
  const diaSemana = date.getDay();
  return diaSemana !==5 && diaSemana !==6  // 5=Domingo  6=Sabado
  };

export const isValidTime = (timeString) => {
  const [hour , min] = timeString.split(":").map(Number)

  if (hour < 8 || hour > 20 || (hour === 20 && min > 0)) {
    return false
  } else {
    return true
  }
  };

export const validateNewAppoint = (values) => {
    const errors = {};
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const [year, month, day] = values.date.split('-').map(Number);
    const selectedDate = new Date(year, month -1 , day );
    selectedDate.setHours(0, 0, 0, 0);

  if(values.date && !diaSemana(values.date)) {
    errors.date= "Seleccione un dia entre lunes y viernes"
  } else if (selectedDate.getTime() === today.getTime()) {
    errors.date = "Los turnos se reservan con al menos 1 día de anticipación";
  } else if (selectedDate < today) {
    errors.date = "No se pueden reservar turnos para días anteriores";
  } else if (values.time && !isValidTime(values.time)) {
    errors.time= "Nuestro horario de atención es de 8 a 20 hs"
  } else if (!values.description && values.date && values.time) {
    errors.description= "La descripcion de su turno no puede estar vacia"
  } 

  return errors;
  }