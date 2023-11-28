import React from 'react';
import { RouteObject } from 'react-router-dom';
import { OnRouteBeforeResType } from './types';
type RouterWaiterProps = {
    routes: RouteObject[];
    onRouteBefore?: OnRouteBeforeResType;
};
declare const RouterWaiter: React.FC<RouterWaiterProps>;
export default RouterWaiter;
