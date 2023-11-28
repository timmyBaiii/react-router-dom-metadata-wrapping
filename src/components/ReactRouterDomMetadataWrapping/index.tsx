import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

// utils
import { isExternal } from '@/utils/validate';

// types
import { OnRouteBeforeResType, ReactRouterDomMetadataWrappingProps } from './types';

const resolvePath = (routePath: any, basePath: string) => {
    if (isExternal(routePath)) {
        return routePath;
    }

    if (isExternal(basePath)) {
        return basePath;
    }

    if (routePath.indexOf('/') !== -1) {
        return basePath + routePath;
    }
    else {
        return basePath + '/' + routePath;
    }
};

const RouterWaiter: React.FC<ReactRouterDomMetadataWrappingProps> = ({ routes, onRouteBefore }) => {
    const element = useRoutes(routes);
    const location = useLocation();

    const extractRoutes = (routes: any, parentPath = '') => {
        const result = [];

        for (const route of routes) {
            const { path, children, meta } = route;

            const fullPath = resolvePath(path, parentPath);

            if (children) {
                const childRoutes: any = extractRoutes(children, fullPath);
                result.push(...childRoutes);
            }
            else {
                result.push({
                    fullPath,
                    meta
                });
            }
        }

        return result;
    };

    useEffect(() => {
        if (element?.props?.match?.route?.children && element?.props?.match?.pathnameBase && onRouteBefore) {
            const routeList = extractRoutes(element?.props?.match?.route.children, element?.props?.match.pathnameBase);

            let activeRoute = 0;
            for (let i = 0; i < routeList.length; i++) {
                if (routeList[i].fullPath === location.pathname) {
                    activeRoute = i;
                    break;
                }
            }

            onRouteBefore(routeList[activeRoute]);
        }
        else {
            const pathnameBase = element?.props?.match?.pathnameBase;
            const meta = element?.props?.match?.route?.meta;

            if (pathnameBase && meta && onRouteBefore) {
                const result = {
                    pathname: pathnameBase,
                    meta: meta
                };

                onRouteBefore(result);
            }
        }
    }, [location.pathname]);

    return element;
};

export default RouterWaiter;
