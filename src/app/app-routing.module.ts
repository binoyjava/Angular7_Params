import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealerDetailComponent } from "src/app/dealer-detail/dealer-detail.component";
import { DealerListComponent } from "src/app/dealer-list/dealer-list.component";


const routes: Routes = [
  {path:"", component:DealerListComponent},
  {path:"dealer", component:DealerListComponent},
  {path:"dealerDetail/:id", component:DealerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }