import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  formData: FormGroup = this.formBuider.group({
    name: ['', Validators.required],
    age: [null, Validators.required],
  });

  constructor(private common: CommonService, private formBuider: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit(): void {
    this.common.submitData(this.formData.value);
  }
}
