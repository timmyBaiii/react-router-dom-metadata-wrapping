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

type ReactRouterDomMetadataWrappingPropsType = {
    routes: RouteObject[];
    onRouteBefore?: OnRouteBeforeResType
}

interface ReactRouterDomMetadataWrappingType {
    (payload: ReactRouterDomMetadataWrappingPropsType): JSX.Element;
}

declare const ReactRouterDomMetadataWrapping: ReactRouterDomMetadataWrappingType;

export type {
    OnRouteBeforeResType,
    OnRouteBeforeType,
    ReactRouterDomMetadataWrappingPropsType,
    ReactRouterDomMetadataWrappingType
}


export default ReactRouterDomMetadataWrapping;