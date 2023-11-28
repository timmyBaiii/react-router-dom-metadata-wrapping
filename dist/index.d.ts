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

export interface ReactRouterDomMetadataWrappingPropsType {
    routes: RouteObject[];
    onRouteBefore?: OnRouteBeforeResType
}

export interface ReactRouterDomMetadataWrappingType {
    (payload: ReactRouterDomMetadataWrappingPropsType): JSX.Element | null;
}

declare const ReactRouterDomMetadataWrapping: ReactRouterDomMetadataWrappingType;

export type {
    OnRouteBeforeResType,
    OnRouteBeforeType,
    // ReactRouterDomMetadataWrappingPropsType,
    // ReactRouterDomMetadataWrappingType
}


export default ReactRouterDomMetadataWrapping;