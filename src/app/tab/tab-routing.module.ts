import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: '',
    redirectTo:'upload'
  },
  
  {
    path: '',
    component: TabPage,
    children: [
      {
        path: 'upload',
        loadChildren: () =>
          import('../upload/upload.module').then(
            (m) => m.UploadPageModule
          ),
      },

    ],
  }  
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
