import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

type OnRouteBeforeResType = OnRouteBeforeType

interface OnRouteBeforeType {
    (payload: {
        pathname: string
        meta: MetaType
    }): OnRouteBeforeResType | Promise<OnRouteBeforeResType>
}

interface MetaType {
    [propName: string]: any;
}

interface ReactRouterDomMetadataWrappingPropsType {
    routes: RouteObject[];
    onRouteBefore?: OnRouteBeforeResType
}

interface ReactRouterDomMetadataWrappingType {
    (payload: ReactRouterDomMetadataWrappingPropsType): ReactNode;
}

declare const ReactRouterDomMetadataWrapping: ReactRouterDomMetadataWrappingType;

export type {
    OnRouteBeforeResType,
    OnRouteBeforeType,
    ReactRouterDomMetadataWrappingPropsType,
    ReactRouterDomMetadataWrappingType
}


export default ReactRouterDomMetadataWrapping;