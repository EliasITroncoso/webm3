// id: ID numérico que identifica al par de credenciales.

// username:username del usuario que posee las credenciales.

// password: password del usuario que posee las credenciales.

interface ICredencial {
    id: number;
    username: string;
    password: string
}

export default ICredencial;