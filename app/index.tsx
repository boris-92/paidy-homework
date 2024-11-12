import { Redirect } from 'expo-router';
import React, { FC } from 'react';

const Root: FC = () => {
  const isAuthorized = false;

  return <Redirect href={isAuthorized ? '/home' : '/login'} />;
};

export default Root;
