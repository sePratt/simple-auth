import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-auth';
  user$: Observable<User | null | undefined> | undefined;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.user$ = this.auth.user$;
  }
}
