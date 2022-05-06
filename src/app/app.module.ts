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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SecondaryPageComponent } from './secondary-page/secondary-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserProfileComponent,
    NavbarComponent,
    SecondaryPageComponent,
  ],
  imports: [
    MatToolbarModule,

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
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
