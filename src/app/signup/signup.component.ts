import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  email:string = '';
  password:string = '';

  constructor(public af: AngularFireAuth, private router: Router) { }

  ngOnInit() {}

  onsubmit(formData){
    if(formData.valid){
      console.log(formData.value);
      this.email = formData.value.email;
      this.password = formData.value.password;

      this.af.auth.createUserWithEmailAndPassword(this.email, this.password).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/login']);
        }
      ).catch(
        (err) => {
          console.log(err);
          this.error = err;
        }
      )
    }
  }

}
