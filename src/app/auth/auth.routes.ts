import { Router, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const AUTH_ROUTERS:Routes=[
    {
        path:'',component:LayoutComponent,children:
        [{
            path:'login',component:LoginComponent
        },
        {
            path:'registro',component:RegisterComponent
        },
        {
            path:'**',redirectTo:''
        }
    ]
    }
]