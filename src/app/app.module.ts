import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthService } from './auth.service';
import { routes } from './app.routes';


export const firebaseConfig = {
  apiKey: 'AIzaSyDO_PG1JAqXqnK10E7Znft-S7oHLoIAUK0',
  authDomain: 'personal-page-61d5b.firebaseapp.com',
  databaseURL: 'https://personal-page-61d5b.firebaseio.com',
  storageBucket: 'personal-page-61d5b.appspot.com',
  messagingSenderId: '403988672319'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
