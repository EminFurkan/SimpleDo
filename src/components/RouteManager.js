import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthValue } from '../context';

export const RouteManager = ({ component: RouteComponent, ...rest }) => {
  const { currentUser } = useAuthValue();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to='users/showLogin'/>
        )
      }
    />
  );
};
