import React, { FC } from 'react';
import { Redirect } from 'expo-router';

import { useAuth } from '@/context/authContext';

const Root: FC = () => {
  const { isAuthorized } = useAuth();

  return <Redirect href={isAuthorized ? '/home' : '/login'} />;
};

export default Root;
