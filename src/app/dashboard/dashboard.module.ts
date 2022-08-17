import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { EducationsComponent } from './educations/educations.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NewsComponent } from './news/news.component';
import { CoursesComponent } from './courses/courses.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { DegreeCertificationComponent } from './degree-certification/degree-certification.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { LaborMarketTrendsComponent } from './labor-market-trends/labor-market-trends.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EducationsComponent,
    NewsComponent,
    CoursesComponent,
    WorkshopsComponent,
    DegreeCertificationComponent,
    AnnouncementComponent,
    LaborMarketTrendsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
