import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import { TranslateModule } from '@ngx-translate/core';

import { SampleComponent } from './sample.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent
  }
];

@NgModule({
  declarations: [SampleComponent],
  imports: [RouterModule.forChild(routes), TranslateModule, FuseSharedModule],
  exports: [SampleComponent]
})
export class SampleModule {}
