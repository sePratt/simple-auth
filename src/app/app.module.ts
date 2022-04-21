import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  AuthModule,
  AuthHttpInterceptor,
  HttpMethod,
} from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, MainComponent, UserProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'financial-freedom-test.auth0.com',
      clientId: 'fom87FyLKwxzIa8VtvBqOIIJJJaUmvUX',
      // audience: 'https://preneed.administrativesystems.com/api/',
      httpInterceptor: {
        allowedList: [
          { httpMethod: HttpMethod.Get, uri: `${environment.apiUrl}*` },
          { httpMethod: HttpMethod.Post, uri: `${environment.apiUrl}*` },
        ],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
