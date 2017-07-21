import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const appRoutes: Routes = [
  { path: 'list',
    component: ListComponent
  },
  { path: 'details/:id',
    component: DetailsComponent
  },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
