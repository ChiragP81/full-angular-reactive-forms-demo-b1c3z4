import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  FormBuilder,
  FormArray,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ValidatePassword } from './must-match/validate-password';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  public myForm: FormGroup;
  lNameEmail1 = false;
  lNameEmail2 = false;
  myFormProperty1 = {
    fname: new FormControl('', Validators.required),
  };

  myFormProperty2 = {
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl(''),
  };
  myFormProperty3 = {
    fname: new FormControl('', Validators.required),
    lname2: new FormControl('', Validators.required),
    email2: new FormControl(''),
  };

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group(this.myFormProperty1);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  formGrp1() {
    alert('Form 1 enable');

    this.lNameEmail1 = true;
    this.lNameEmail2 = false;

    this.myForm = this.fb.group(this.myFormProperty2);

    this.myForm.valueChanges.subscribe((data) =>
      console.log('form object ====' + JSON.stringify(data))
    );
  }
  formGrp2() {
    alert('Form 2 enable');
    this.lNameEmail1 = false;
    this.lNameEmail2 = true;

    this.myForm = this.fb.group(this.myFormProperty3);

    this.myForm.valueChanges.subscribe((data) =>
      console.log('form object ====' + JSON.stringify(data))
    );
  }
  onSubmit() {
    console.log('Form submitted Value==' + JSON.stringify(this.myForm.value));
  }
}
