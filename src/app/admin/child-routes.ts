export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { icon: 'shopping_cart', text: 'Purchasing' }
  },
  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('./charts/charts.module').then(m => m.ChartsModule),
  //   data: { icon: 'bar_chart', text: 'Sales' }
  // },
  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('./charts/charts.module').then(m => m.ChartsModule),
  //   data: { icon: 'shopping_cart', text: 'Purchasing' }
  // },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'manage_accounts', text: 'Accounting' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'fire_truck', text: 'Logistics' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'event_available', text: 'Availability' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'list_alt', text: 'Reports' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'home_work', text: 'Phonix' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'card_giftcard', text: 'Phonix Purchasing' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'hub', text: 'OSV' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'local_florist', text: 'PBS' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'celebration', text: 'VFS' }
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('./charts/charts.module').then(m => m.ChartsModule),
    data: { icon: 'admin_panel_settings', text: 'Administration' }
  },
  // {
  //   path: 'charts',
  //   loadChildren: () =>
  //     import('./charts/charts.module').then(m => m.ChartsModule),
  //   data: { icon: 'bar_chart', text: 'Charts' }
  // },

  // {
  //   path: 'tables',
  //   loadChildren: () =>
  //     import('./tables/tables.module').then(m => m.TablesModule),
  //   data: { icon: 'table_chart', text: 'Tables' }
  // },
  // {
  //   path: 'forms',
  //   loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
  //   data: { icon: 'assignment', text: 'Forms' }
  // },
  // {
  //   path: 'mat-grid',
  //   loadChildren: () =>
  //     import('./mat-grid/mat-grid.module').then(m => m.MatGridModule),
  //   data: { icon: 'grid_on', text: 'Flex Grid' }
  // },
  // {
  //   path: 'mat-components',
  //   loadChildren: () =>
  //     import('./mat-components/mat-components.module').then(
  //       m => m.MatComponentsModule
  //     ),
  //   data: { icon: 'code', text: 'Material Components' }
  // },
  // {
  //   path: 'animations',
  //   loadChildren: () =>
  //     import('./animations/animations.module').then(m => m.AnimationsModule),
  //   data: { icon: 'perm_media', text: 'Animations' }
  // },
  // {
  //   path: 'google-maps',
  //   loadChildren: () =>
  //     import('./google-map-demo/google-map-demo.module').then(
  //       m => m.GoogleMapDemoModule
  //     ),
  //   data: { icon: 'place', text: 'Google Maps' }
  // }
];
