import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { RandevualComponent } from './Components/randevual/randevual.component';
import { RandevularComponent } from './Components/randevular/randevular.component';
import { RandevularimComponent } from './Components/randevularim/randevularim.component';

const routes: Routes = [
  { path: 'anasayfa', component: HomeComponent },
  { path: 'hakkimizda', component: AboutComponent },
  { path: 'randevual', component: RandevualComponent },
  { path: 'randevular', component: RandevularComponent },
  { path: 'randevularim', component: RandevularimComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
