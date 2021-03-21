import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Overlay } from '@angular/cdk/overlay';
import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { GitService } from './git.service';
import { Issue, Issues } from './issues.interface';
import { ReplayIssueComponent } from './replay-issue/replay-issue.component';

@Component({
  selector: 'app-git-issues',
  templateUrl: './git-issues.component.html',
  styleUrls: ['./git-issues.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  providers: [DatePipe, MatDialog, Overlay],
})
export class GitIssuesComponent implements OnInit, AfterViewInit {
  issues;
  formUser: FormGroup;
  dataSource;
  displayedColumns: string[] = [
    'number',
    'state',
    'created',
    'title',
    'url',
    'profile',
    'action',
  ];
  expandedElement: Issue | null;
  // , 'action']
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private issueService: GitService,
    private fb: FormBuilder,
    public pipe: DatePipe,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  public refresh() {
    this.issueService.getIssues().subscribe((issues: Issues) => {
      this.formUser = this.fb.group({
        issues: this.fb.array([]),
      });
      issues.forEach((issue, index) =>
        (this.formUser.get('issues') as FormArray).insert(
          index,
          this.fb.group({
            state: this.fb.control(issue.state),
            created: this.fb.control(issue.created_at),
            // created: this.fb.control(
            //   this.pipe.transform(issue.created_at, 'dd/MM/yyyy HH:mm')
            // ),
            title: this.fb.control(issue.title),
            url: this.fb.control(issue.url),
            body: this.fb.control(issue.body),
            number: this.fb.control(issue.number),
            profile: this.fb.control(issue.user.login),
            profile_url: this.fb.control(issue.profile),
          })
        )
      );

      this.dataSource = new MatTableDataSource(
        (this.formUser.get('issues') as FormArray).controls
      );
    });
  }

  ngAfterViewInit(): void {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogLog = this.dialog.open(DialogComponent);
    dialogLog.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  replayDialog(issueIndex: any) {
    this.dialog.open(ReplayIssueComponent, {
      data: issueIndex,
    });
  }
}
