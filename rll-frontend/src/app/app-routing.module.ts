import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { AdminApprovingPolicyComponent } from './admin-approving-policy/admin-approving-policy.component';
import { AdminCheckingApplyPolicyComponent } from './admin-checking-apply-policy/admin-checking-apply-policy.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPolicyComponent } from './admin-policy/admin-policy.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AnswerComponent } from './answer/answer.component';
import { ApplyPolicyComponent } from './apply-policy/apply-policy.component';
import { BackgroundComponent } from './background/background.component';
import { ChangeAdminPasswordComponent } from './change-admin-password/change-admin-password.component';
import { ChangeUserPasswordComponent } from './change-user-password/change-user-password.component';
import { ContactComponent } from './contact/contact.component';
import { DeletePolicyComponent } from './delete-policy/delete-policy.component';
import { LoginComponent } from './login/login.component';
import { QueansAdminComponent } from './queans-admin/queans-admin.component';
import { QueansComponent } from './queans/queans.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
// import { UserApplyPolicyComponent } from './user-apply-policy/user-apply-policy.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserPolicyStatusComponent } from './user-policy-status/user-policy-status.component';
import { UserPolicyComponent } from './user-policy/user-policy.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';

const routes: Routes = [
  {path:"user-dashboard/question",component:QuestionComponent},
  {path:"admin-dashboard/answer",component:AnswerComponent},
{path:"user-dashboard/quesans",component:QueansComponent},
{path:"admin-dashboard/quesans-admin",component:QueansAdminComponent},
  {path:"signup", component:RegisterComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact/background",component:BackgroundComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactComponent},
  {path:"login/register",component:RegisterComponent},
  {path:"adminlogin/change-admin-password",component:ChangeAdminPasswordComponent},
  {path:"login/register/login",component:LoginComponent},
  {path:"admin-dashboard/adminregister",component:AdminRegisterComponent},
  {path:"user-dashboard/question",component:QuestionComponent},
  {path:"admin-dashboard/admin-checking-policy",component:AdminCheckingApplyPolicyComponent},
  {path:"admin-dashboard/admin-checking-policy/admin-approving-policy",component:AdminApprovingPolicyComponent},
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"admin-dashboard",component:AdminDashboardComponent},
  {path:"admin-dashboard/background",component:BackgroundComponent},
  {path:"user-dashboard/background",component:BackgroundComponent},
  {path:"admin-dashboard/admin-policy",component:AdminPolicyComponent},
  {path:"admin-dashboard/admin-policy/addPolicy",component:AddPolicyComponent},
  {path:"admin-dashboard/admin-policy/updatePolicy",component:UpdatePolicyComponent},
  {path:"admin-dashboard/admin-policy/viewPolicy",component:ViewPolicyComponent},
  {path:"admin-dashboard/admin-policy/deletePolicy",component:DeletePolicyComponent},
  {path:"user-dashboard",component:UserDashboardComponent},
  {path:"user-dashboard/userPolicy", component:UserPolicyComponent},
  // {path:"user-dashboard/userPolicy/user-apply-policy",component:UserApplyPolicyComponent}
  {path:"user-dashboard/userPolicy/apply-policy",component:ApplyPolicyComponent},
  {path:"user-dashboard/user-policy-status",component:UserPolicyStatusComponent},
  {path:"background",component:BackgroundComponent},
  {path:"login/change-user-password",component:ChangeUserPasswordComponent},
  // {path:"adminlogin/change-admin-password",component:ChangeAdminPasswordComponent}
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
