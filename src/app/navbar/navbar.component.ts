import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private auth: AuthService, private router: Router) {
    // this.router.events.pipe(filter((event) => event instanceof GuardsCheckEnd)).subscribe((event) => {
    // 	// activatedRoute doesn't carry data when shouldReuseRoute returns false
    // 	// use the event data with GuardsCheckEnd as workaround
    // 	// Check for shouldActivate in case where the authGuard returns false the breadcrumbs shouldn't be changed
    // 	if (event instanceof GuardsCheckEnd && event.shouldActivate) {
    // 		this.setupDisplay(event.state.root);
    // 	}
    // });
  }

  logout() {
    this.auth.logout({ returnTo: document.location.origin });
  }
}
