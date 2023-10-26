import { Component, OnInit, inject } from '@angular/core';
import { AppAbilityService } from './casl/appAbility.service';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly appAbilityService = inject(AppAbilityService);

  readonly title = 'typed-able-pipe';
  readonly now$ = timer(0, 1000).pipe(map(() => new Date()));

  ngOnInit(): void {
    this.appAbilityService.update();
  }
}
