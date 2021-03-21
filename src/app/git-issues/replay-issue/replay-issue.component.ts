import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GitService } from '../git.service';

@Component({
  selector: 'app-replay-issue',
  templateUrl: './replay-issue.component.html',
  styleUrls: ['./replay-issue.component.css'],
})
export class ReplayIssueComponent implements OnInit {
  body: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public num: number,
    public issuesService: GitService
  ) {}

  addComment() {
    console.log('Комент', this.body);
    this.issuesService.addComent(this.num, this.body);
  }

  closeIssure() {
    this.issuesService.closeIssure(this.num);
  }

  ngOnInit(): void {}
}
