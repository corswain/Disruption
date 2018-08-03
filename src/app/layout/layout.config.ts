import { FuseConfig } from '@fuse/types';

export const mainConfig: FuseConfig = {
  layout: {
    style: 'vertical-layout-1',
    width: 'fullwidth',
    navbar: {
      background: 'mat-fuse-dark-800-bg',
      folded: true,
      hidden: false,
      position: 'left',
      variant: 'vertical-style-2'
    },
    toolbar: {
      background: 'mat-white-500-bg',
      hidden: false,
      position: 'below-fixed'
    },
    footer: {
      background: 'mat-white-500-bg',
      hidden: false,
      position: 'below-static'
    },
    sidepanel: {
      hidden: true,
      position: 'right'
    }
  },
  customScrollbars: true
};
