import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { FooterComponent } from '@layout/components/footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    FuseSharedModule
  ],
  exports: [FooterComponent]
})
export class FooterModule {}
