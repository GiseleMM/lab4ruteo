import { Routes } from "@angular/router"
import { ErrorComponent } from "./error/error.component"


// export const OTHERS_ROUTERS:Routes=[
//     {
//         path:'',component:ErrorComponent
//     }
// ];
export const OTHERS_ROUTERS:Routes=[
    {
        path:'',
        loadComponent:()=>import("./error/error.component").then(c=>c.ErrorComponent)
    }
]