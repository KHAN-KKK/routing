import { Routes } from "@angular/router";

import {routes as UserRoutes} from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes : Routes = [
    {
        path:'users/:userId',  //: colon means dynamic value
        component: UserTasksComponent,
        children : UserRoutes,
    },
    {
        path:'',
        component: NoTaskComponent,
    },
    {
        path : '**',
        component : NotFoundComponent,
    }
];