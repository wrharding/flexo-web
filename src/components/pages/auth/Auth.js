import React, { useEffect, useState } from 'react';
import Input from '../../atoms/input/Input';
import { fetchData } from '../../../services/api';
import HomePage from '../home-page/HomePage';

const Auth = () => {
  const [secret, setSecret] = useState(null);
  const [secretConfirmed, setSecretConfirmed] = useState(false);

  useEffect(() => {
    const sessionSecret = window.sessionStorage.getItem('ccdc-auth');
    sessionSecret && setSecret(sessionSecret);
  }, []);
  const handleInputChange = (value) => {
    setSecret(value);
  };
  const handleSubmit = async () => {
    const getOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secret}`,
      },
    };
    const confirmSecret = await fetchData('categories', getOptions);

    console.log('ConfirmSecret res: ', confirmSecret);
    confirmSecret && window.sessionStorage.setItem('ccdc-auth', secret);
    confirmSecret && setSecretConfirmed(true);
  };

  return (
    <>
      <label>
        <h4>Input Secret</h4>
        <Input name={'auth'} type={'text'} handleInputChange={handleInputChange} />
        <button type={'submit'} onClick={handleSubmit}>
          Submit
        </button>
      </label>
      {secretConfirmed && <HomePage secret={secret} />}
    </>
  );
};

export default Auth;
