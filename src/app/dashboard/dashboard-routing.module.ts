import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard.component';
import { DegreeCertificationComponent } from './degree-certification/degree-certification.component';
import { EducationsComponent } from './educations/educations.component';
import { NewsComponent } from './news/news.component';
import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: 'news',
            component: NewsComponent
        },
        {
          path: 'degree-certification',
          component: DegreeCertificationComponent
        },
        {
            path: 'education',
            component: EducationsComponent
        },
        {
          path: 'workshops',
          component: WorkshopsComponent
        },
        {
          path: 'courses',
          component: CoursesComponent
        },
        {
          path: 'announcement',
          component: AnnouncementComponent
        },
        {
            path: '**',
            redirectTo: 'news'
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }