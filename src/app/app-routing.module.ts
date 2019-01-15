import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-list/question-form/question-form.component';
import { SingleQuestionComponent } from './question-list/single-question/single-question.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'questions',canActivate: [AuthGuardService] ,component: QuestionListComponent },
  { path: 'questions/new',canActivate: [AuthGuardService], component: QuestionFormComponent },
  { path: 'questions/view/:id',canActivate: [AuthGuardService], component: SingleQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
