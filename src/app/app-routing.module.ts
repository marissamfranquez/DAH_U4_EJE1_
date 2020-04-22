import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '', redirectTo: 'newstudent', pathMatch: 'full'
  },
  {
    path: 'newstudent',
    loadChildren: () => import('./pages/new-student/new-student.module').then( m => m.NewStudentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
