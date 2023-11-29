import React from 'react';
import { useRoutes } from 'react-router-dom';

// types
import { ReactRouterDomMetadataWrappingPropsType } from './types';

function ReactRouterDomMetadataWrapping({ routes, onRouteBefore }: ReactRouterDomMetadataWrappingPropsType) {
    const element = useRoutes(routes);

    return element;
};

export default ReactRouterDomMetadataWrapping;
