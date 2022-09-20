import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StatisticsComponent } from './cmps/statistics/statistics.component'
import { ContactPageComponent } from './pages/contact-page/contact-page/contact-page.component'

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
