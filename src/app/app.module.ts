import 'hammerjs';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '@app/app-routing.module';
import { FakeDbService } from '@app/fake-db/fake-db.service';
import { CoreModule } from '@core/core.module';
import { FuseProgressBarModule } from '@fuse/components';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { mainConfig } from '@layout/layout.config';
import { LayoutModule } from '@layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule.forRoot(),

    TranslateModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // Fuse modules
    FuseModule.forRoot(mainConfig),
    FuseProgressBarModule,
    FuseSharedModule,

    // App modules
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
