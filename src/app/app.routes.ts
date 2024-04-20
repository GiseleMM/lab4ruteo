import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadChildren:()=>import("./admin/admin.routes").then(a=>a.ADMIN_ROUTERS)
    },
    {
        path:'auth',
        loadChildren:()=>import("./auth/auth.routes").then(a=>a.AUTH_ROUTERS)
    },
    {
        path:'**',
        loadChildren:()=>import("./others/others.routes").then(a=>a.OTHERS_ROUTERS)
    }

];
