import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StatisticsComponent } from './cmps/statistics/statistics.component'

const routes: Routes = [
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
