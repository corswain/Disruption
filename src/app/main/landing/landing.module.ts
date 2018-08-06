import { SharedModule } from 'app/shared/shared.module';

import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatCardModule, MatExpansionModule, MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule, MatToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { FuseCountdownModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { NguCarouselModule } from '@ngu/carousel';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { LandingComponent } from './landing.component';
import { LandingService } from './landing.service';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { TeamComponent } from './team/team.component';
import { TokenComponent } from './token/token.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    resolve: {
      faq: LandingService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,

    NguCarouselModule,

    MatIconModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatExpansionModule,

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
    HeaderComponent,
    FooterComponent
  ],
  providers: [LandingService]
})
export class LandingModule {}
