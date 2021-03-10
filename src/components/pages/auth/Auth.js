import React, { useState } from 'react';
import Input from '../../atoms/input/Input';
import { fetchData } from '../../../services/api';
import HomePage from '../home-page/HomePage';

const Auth = () => {
  const [secret, setSecret] = useState(null);
  const [secretConfirmed, setSecretConfirmed] = useState(false);

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
