import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Issue } from './issues.interface';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  options = {
    headers: new HttpHeaders().append(
      'Authorization',
      'Basic ' + btoa('garlife:b35cc448095e92f3b0fff222b3a9b1384d6d6ecf')
    ),
  };

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get(
      'https://api.github.com/repos/garlife/hw-lesson10/issues'
    );
  }

  postIssue(issue: Issue) {
    this.http
      .post('https://api.github.com/repos/garlife/hw-lesson10/issues', {
        ...issue,
        owner: 'garlife',
        repo: 'hw-lesson10',
        // title: 'Проверка',
        // body: 'Проверка body',
      })
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('Добавление', data);
      });
  }
  closeIssure(issueNumber): void {
    this.http
      .put(
        'https://api.github.com/repos/garlife/hw-lesson10/issues/' +
          issueNumber +
          '/lock',
        {
          owner: 'garlife',
          repo: 'hw-lesson10',
          issue_Number: issueNumber,
          lock_reasson: 'resolved',
        }
      )
      .subscribe((data) => {
        console.log(data);
      });

    this.http
      .patch(
        'https://api.github.com/repos/garlife/hw-lesson10/issues/' +
          issueNumber,
        {
          owner: 'garlife',
          repo: 'hw-lesson10',
          issue_Number: issueNumber,
          state: 'closed',
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  addComent(issueNumber, body): void {
    this.http
      .post(
        'https://api.github.com/repos/garlife/hw-lesson10/issues/' +
          issueNumber +
          '/comments',
        {
          owner: 'garlife',
          repo: 'hw-lesson10',
          issue_Number: issueNumber,
          body: body,
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
