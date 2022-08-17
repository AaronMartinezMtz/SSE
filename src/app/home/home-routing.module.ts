import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
            path: '',
            component: MainComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: '**',
            redirectTo: ''
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }