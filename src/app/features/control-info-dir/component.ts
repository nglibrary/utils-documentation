import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
  } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styles: [
    `section.cover{
          min-height: 100px;
    }`
  ]
})
export class ControlInfoDirComponent implements OnInit {
  ph: TemplateRef<any>;
  reactiveForm: FormGroup;
  email;
  password;
  constructor(
    public sanitize: DomSanitizer,
    public fb: FormBuilder
  ) { }
  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  tags(longString) {
    const html = longString.split(' ').map(a => `<span class="label label-primary ${a}">.${a}</span>`).join('');
    return this.sanitize.bypassSecurityTrustHtml(html);
  }
}
