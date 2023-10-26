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
  readonly unorderedPeople = [
    { name: 'John', age: 20 },
    { name: 'Smith', age: 21 },
    { name: 'Jane', age: 19 },
  ];

  ngOnInit(): void {
    this.appAbilityService.update();
  }
}
