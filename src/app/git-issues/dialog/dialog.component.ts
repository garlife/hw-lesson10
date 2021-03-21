import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GitService } from '../git.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  issueForm: FormGroup;

  panelOpenState = false;

  constructor(fb: FormBuilder, public issueService: GitService) {
    this.issueForm = fb.group({
      title: fb.control(''),
      body: fb.control(''),
    });
  }
 
  ngOnInit(): void {
 ;
  }
  send(): void {

    
    if (!this.issueForm.value.title) {
      this.issueForm.get('title').setValue(this.issueForm.value.body);
    }

    this.issueService.postIssue(this.issueForm.value);
    console.log(this.issueForm.value);
  }

  resetForm() {
    this.issueForm.reset();
  }
  

}
