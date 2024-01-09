import { ReactNode } from "react";
import { PATH_AUTH, PATH_LOGIN } from "./routes.path";

export interface IRoute {
    path: string;
    element: ReactNode;
    name?: string;
    icon?: ReactNode;
    isChildRoute?: boolean;
    hidden?: boolean;
}

const publicRoutes: IRoute[] = [
    {
        path: PATH_LOGIN,
        element: ''
    }
]

export const routes = [
    { mainPath: PATH_AUTH, childPath: publicRoutes, mustLogin: false}
]