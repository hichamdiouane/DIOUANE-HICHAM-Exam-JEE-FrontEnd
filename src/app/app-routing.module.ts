import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {authenticationGuard} from './guards/authentication.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';
import {authorizationGuard} from './guards/authorization.guard';
import {OperationsComponent} from './operations/operations.component';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { UserRole } from './model/auth.model';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "not-authorized", component: NotAuthorizedComponent },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ROLE_ADMIN] }
  },
  {
    path: "client",
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ROLE_CLIENT] }
  },
  {
    path: "employee",
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [AuthGuard],
    data: { roles: [UserRole.ROLE_EMPLOYE] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
