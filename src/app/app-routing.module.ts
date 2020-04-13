import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IssuesComponent } from './issues/issues.component';


const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'requirements', component: RequirementsComponent },
{ path: 'technologies', component: TechnologiesComponent },
{ path: 'challenges', component: IssuesComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
