import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;
  email: string = '';
  password: string = '';

  constructor(public af: AngularFireAuth,private router: Router) { 
    this.af.authState.subscribe(auth => { 
      if(auth) {
        this.router.navigateByUrl('/members');
      }
    });
  }

  ngOnInit() {}

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.email = formData.value.email;
      this.password = formData.value.password;

      this.af.auth.signInWithEmailAndPassword(this.email, this.password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
    }
  }

}
