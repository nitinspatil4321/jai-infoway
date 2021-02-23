import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './src/login/login.component';
import { RegisterComponent } from './src/register/register.component';
import { ComapnyservicesComponent } from './src/comapnyservices/comapnyservices.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ComapnyservicesComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);