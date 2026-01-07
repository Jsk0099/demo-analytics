import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    { path: '', component: ProductComponent },
    { path: 'view', component: ViewComponent },
    { path: '**', redirectTo: '' }
];
