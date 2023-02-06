import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'social-media', loadChildren: () => import('./social-media/social-media.module').then(m => m.SocialMediaModule) },
  { path: 'complex-form', loadChildren: () => import('./complex-form/complex-form.module').then(n => n.ComplexFormModule) },
  { path: 'reactive-state', loadChildren: () => import('./reactive-state/reactive-state.module').then(n => n.ReactiveStateModule) },
  { path: '**', redirectTo: 'social-media' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
