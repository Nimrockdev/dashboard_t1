export const loginWithEmailPassword = async ({ user, password }) => {

    try {
        //const resp = Validar
        //Aqui validariamos los datos de entrada  con algún servicio y comprobariamos si son correctos
        //Si son correctos devolvemos los datos que necesitamos

        if ((user === 'user') || (password === '1234')) {

            return {
                ok: true,
                user
            }

        } else {
            return {
                ok: false,
                errorMessage: 'Credenciales incorrectas'
            }
        }


    } catch (error) {
        return { ok: false, errorMessage: error.message }
    }
}