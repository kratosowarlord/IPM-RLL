import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { ApplyPolicyComponent } from './apply-policy/apply-policy.component';
import { UserPolicyStatusComponent } from './user-policy-status/user-policy-status.component';
import { BackgroundComponent } from './background/background.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { QuestionComponent } from './question/question.component';
import { AdminCheckingApplyPolicyComponent } from './admin-checking-apply-policy/admin-checking-apply-policy.component';
import { AdminApprovingPolicyComponent } from './admin-approving-policy/admin-approving-policy.component';

// import { LoginComponent } from './login/login.component';
// import { UserApplyPolicyComponent } from './user-apply-policy/user-apply-policy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnswerComponent } from './answer/answer.component';
import { QueansComponent } from './queans/queans.component';
import { QueansAdminComponent } from './queans-admin/queans-admin.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RegisterComponent,
    AdminDashboardComponent,
    AdminPolicyComponent,
    AddPolicyComponent,
    UpdatePolicyComponent,
    ViewPolicyComponent,
    DeletePolicyComponent,
    UserDashboardComponent,
    UserPolicyComponent,
    ApplyPolicyComponent,
    UserPolicyStatusComponent,
    BackgroundComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    QuestionComponent,
    AdminCheckingApplyPolicyComponent,
    AdminApprovingPolicyComponent,
    ChangeUserPasswordComponent,
    ChangeAdminPasswordComponent,
    AboutUsComponent,
    AnswerComponent,
    QueansComponent,
    QueansAdminComponent,
    ContactComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,MatSidenavModule,MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
   ],
  providers: [],
   
  // declarations: [ AppComponent, HelloComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
