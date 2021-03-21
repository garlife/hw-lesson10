import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { GitIssuesComponent } from './git-issues.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { concatInterceptor } from './concat.interceptor';
import { GitService } from './git.service';
import { MatInputModule } from '@angular/material/input';
import { ReplayIssueComponent } from './replay-issue/replay-issue.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [GitIssuesComponent, DialogComponent, ReplayIssueComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule

  ],
  exports: [GitIssuesComponent, DialogComponent, ReplayIssueComponent],
  providers: [GitService, {provide: HTTP_INTERCEPTORS, useClass: concatInterceptor, multi: true}],

})
export class GitIssuesModule { }
