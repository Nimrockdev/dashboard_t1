import { loginWithEmailPassword } from '../dataWareHouse/provider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';





export const useAuthStore = () => {

    //Only test
    const tokenTest = 'tokentest:2524dsdsds2v5s5x2ss2d62sd6wf4s515sf5sd';

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const checkingAuthentication = () => {
        return async (dispatch) => {

            //dispatch(onCheckingCredentials());

        }
    }

    const startLogin = async ({ user, password }) => {
        //dispatch(onCheckingCredentials());
        try {
            //Only test
            if ((user == 'user') && (password == '1234')) {

                localStorage.setItem('token', tokenTest);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(onLogin({ name: user, uid: user }));

            } else {

                dispatch(onLogout('Credenciales incorrectas'));
            }


        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            /*
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());*/

            //se comprueba la validez del token, usuario...

            if (token == tokenTest) {
                dispatch(onLogin({ name: user, uid: user }));
            } else {

                localStorage.clear();
                dispatch(onLogout());
            }

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startRegister = async ({ email, password, name }) => {
        /*dispatch(onChecking());
        try {
            const { data } = await calendarApi.post('/auth/new', { email, password, name });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));

        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }*/
    }




    const startLogout = () => {
        localStorage.clear();
        //dispatch(onLogoutCalendar());
        dispatch(onLogout());
    }



    return {
        //* Propiedades
        errorMessage,
        status,
        user,

        //* Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
        checkingAuthentication,



    }

}