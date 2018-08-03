import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from './components/content/content.module';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { QuickPanelModule } from './components/quick-panel/quick-panel.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    RouterModule,

    FuseSharedModule,
    FuseSidebarModule,

    ContentModule,
    FooterModule,
    NavbarModule,
    QuickPanelModule,
    ToolbarModule
  ],
  exports: [LayoutComponent],
  declarations: [LayoutComponent]
})
export class LayoutModule {}
