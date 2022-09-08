import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpResponseBase } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { EhomeComponent } from './ehome/ehome.component';
import { LeaveaddComponent } from './leaveadd/leaveadd.component';
import { LeaveviewComponent } from './leaveview/leaveview.component';
import { AttendComponent } from './attend/attend.component';

export const routes: Routes = [
  { path: '', component: EhomeComponent, pathMatch: 'full'},
  { path: 'view', component: ViewComponent},
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'ehome', component: EhomeComponent},
  { path: 'leaveadd', component: LeaveaddComponent},
  { path: 'leaveview', component: LeaveviewComponent},
  { path: 'attend', component: AttendComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    EhomeComponent,
    LeaveaddComponent,
    LeaveviewComponent,
    AttendComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
