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

export type {
    OnRouteBeforeResType,
    OnRouteBeforeType
}