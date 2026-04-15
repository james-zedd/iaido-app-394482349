import React, { useState } from 'react';
import Login from './Login';
import Search from './Search';
import Details from './Details';
import axios from 'axios';

const Main = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [techniqueId, setTechniqueId] = useState('');
    const [technique, setTechnique] = useState({});
    const [isOmoteUra, setIsOmoteUra] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const authenticateUser = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        let { email, password } = document.forms[0];

        try {
            await axios.post(
                '/api/auth',
                { email: email.value, password: password.value },
                { headers: { 'Content-Type': 'application/json' } }
            );

            return setAuthenticated(true);
        } catch (err) {
            return setErrorMessage(
                err.response.data.message || err.response.data.errors[0].msg
            );
        }
    };

    const findTechnique = async (id) => {
        try {
            const fndTech = await axios.get(`/api/techniques/${id}`);

            const tch = fndTech.data.data[0];

            setIsOmoteUra(tch.omote_to_ura[0]);
            setTechnique(tch);
            setTechniqueId(tch._id);
            // BUG FIX NEEDED
            // search component re-renders on every change of techniqueId.
            // if this is not set last, it will cause an error when trying to view details component.
        } catch (err) {
            console.log(err);
            return;
        }
    };

    const logout = async () => {
        await axios.get('/api/auth/logout');

        return setAuthenticated(false);
    };

    const clearTechnique = () => {
        setTechniqueId('');
        setTechnique({});
    };

    const RenderPage = () => {
        if (authenticated && techniqueId) {
            return (
                <Details
                    technique={technique}
                    isOmoteUra={isOmoteUra}
                    handleClick={clearTechnique}
                />
            );
        } else if (authenticated) {
            return <Search findTech={findTechnique} />;
        } else {
            return (
                <Login
                    authenticate={authenticateUser}
                    errorMessage={errorMessage}
                />
            );
        }
    };

    return (
        <>
            {authenticated && (
                <button
                    type='button'
                    className='bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white'
                    onClick={logout}
                >
                    Logout
                </button>
            )}
            <RenderPage />
        </>
    );
};

export default Main;
