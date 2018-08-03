import { SharedModule } from 'app/shared/shared.module';

import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatProgressBarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseCountdownModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { LandingComponent } from './landing.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { TokenComponent } from './token/token.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,

    FuseSharedModule,
    FuseCountdownModule
  ],
  declarations: [
    LandingComponent,
    IntroComponent,
    AboutComponent,
    TokenComponent,
    RoadmapComponent,
    WhitepaperComponent,
    TeamComponent,
    FaqComponent,
    ContactComponent,
    HeaderComponent
  ]
})
export class LandingModule {}
