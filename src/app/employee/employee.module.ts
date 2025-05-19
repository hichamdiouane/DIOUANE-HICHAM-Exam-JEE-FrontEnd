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

import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { CreditRequestsComponent } from './credit-requests/credit-requests.component';
import { CreditReviewComponent } from './credit-review/credit-review.component';
import { ClientListComponent } from './client-list/client-list.component';
import { RemboursementListComponent } from './remboursement-list/remboursement-list.component';

const routes: Routes = [
  { path: '', component: EmployeeDashboardComponent },
  { path: 'credit-requests', component: CreditRequestsComponent },
  { path: 'credit-requests/:id', component: CreditReviewComponent },
  { path: 'clients', component: ClientListComponent },
  { path: 'remboursements', component: RemboursementListComponent }
];

@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    CreditRequestsComponent,
    CreditReviewComponent,
    ClientListComponent,
    RemboursementListComponent
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
export class EmployeeModule { } 