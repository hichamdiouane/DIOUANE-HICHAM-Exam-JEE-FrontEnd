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

import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MyCreditsComponent } from './my-credits/my-credits.component';
import { NewCreditRequestComponent } from './new-credit-request/new-credit-request.component';
import { CreditDetailsComponent } from './credit-details/credit-details.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: ClientDashboardComponent },
  { path: 'credits', component: MyCreditsComponent },
  { path: 'credits/new', component: NewCreditRequestComponent },
  { path: 'credits/:id', component: CreditDetailsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    ClientDashboardComponent,
    MyCreditsComponent,
    NewCreditRequestComponent,
    CreditDetailsComponent,
    ProfileComponent
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
export class ClientModule { } 