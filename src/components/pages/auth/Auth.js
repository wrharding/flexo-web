import React, { useEffect, useState } from 'react';
import Input from '../../atoms/input/Input';
import { fetchData } from '../../../services/api';
import HomePage from '../home-page/HomePage';
const encryptor = require('simple-encryptor')('ccdc-auth-bullshit');

const Auth = () => {
  const [secret, setSecret] = useState(null);
  const [secretConfirmed, setSecretConfirmed] = useState(false);

  useEffect(() => {
    const asyncSecretDecryption = async () => {
      const sessionSecret = await window.sessionStorage.getItem('ccdc-auth');

      console.log(sessionSecret);
      console.log('DecryptedSessionSecret: ', encryptor.decrypt(sessionSecret));
      sessionSecret && setSecret(encryptor.decrypt(sessionSecret));
    };
    asyncSecretDecryption();
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

    console.log('Secret: ', secret);
    const encryptedSecret = encryptor.encrypt(secret);
    console.log('encrypted: ', encryptedSecret);
    console.log('decrypted: ', encryptor.decrypt(encryptedSecret));
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
