import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isOnHistoryPage = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        if (this.route.snapshot.firstChild) {
          this.isOnHistoryPage =
            this.route.snapshot.firstChild.url[0]?.path === 'history';
        } else {
          this.isOnHistoryPage = this.route.snapshot.url[0]?.path === 'history';
        }
      });
  }
}
