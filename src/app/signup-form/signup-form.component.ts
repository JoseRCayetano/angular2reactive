import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  user: FormGroup;


  constructor() { }

  ngOnInit() {

    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)] ),
      account: new FormGroup({
        email: new FormControl('', [Validators.required]),
        confirm: new FormControl('', [Validators.required])
      })
    });

  }

  /**
   * Methods
   */
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    console.log(value, valid);

  }


}
