import config from "../config"
import Home from "../pages/Home"



interface IRouter {
    path: string ,
    component: React.ComponentType<any> ,
    layout?:  React.ComponentType<any> | null
}
const publicRoutes: IRouter[] = [
    { path: config.routes.home, component: Home },
]

// const privateRoutes: IRouter[] = []

export { publicRoutes }
