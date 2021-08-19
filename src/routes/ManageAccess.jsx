import React from 'react';
import { Route } from 'react-router';

export default function ManageAccess({path, exact, component: Component, ...rest}) {
    
    return <Route path={path} exact {...rest} component={() => <Component />} />
}