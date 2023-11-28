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

type ReactRouterDomMetadataWrappingProps = {
    routes: RouteObject[];
    onRouteBefore?: OnRouteBeforeResType
}

declare const ReactRouterDomMetadataWrapping: React.FC<ReactRouterDomMetadataWrappingProps>;

export type {
    OnRouteBeforeResType,
    OnRouteBeforeType,
    ReactRouterDomMetadataWrappingProps,
    ReactRouterDomMetadataWrapping
}


export default ReactRouterDomMetadataWrapping;