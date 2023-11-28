export type OnRouteBeforeResType = OnRouteBeforeType;
export interface OnRouteBeforeType {
    (payload: {
        pathname: string;
        meta: MetaType;
    }): OnRouteBeforeResType | Promise<OnRouteBeforeResType>;
}
interface MetaType {
    [propName: string]: any;
}
export {};
