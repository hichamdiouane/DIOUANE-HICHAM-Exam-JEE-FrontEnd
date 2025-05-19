import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientListComponent } from './client-list/client-list.component';
import { CreditListComponent } from './credit-list/credit-list.component';
import { CreditDetailsComponent } from './credit-details/credit-details.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewCreditComponent } from './new-credit/new-credit.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'clients/new', component: NewClientComponent },
  { path: 'credits', component: CreditListComponent },
  { path: 'credits/new', component: NewCreditComponent },
  { path: 'credits/:id', component: CreditDetailsComponent }
];

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ClientListComponent,
    CreditListComponent,
    CreditDetailsComponent,
    NewClientComponent,
    NewCreditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class AdminModule { } 