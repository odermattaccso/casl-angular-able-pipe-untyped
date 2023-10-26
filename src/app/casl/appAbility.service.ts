import { Injectable } from '@angular/core';
import { AbilityBuilder } from '@casl/ability';
import { AppAbility } from './appAbility';

@Injectable({
  providedIn: 'root',
})
export class AppAbilityService {
  constructor(private ability: AppAbility) {}

  update() {
    const { can, cannot, rules } = new AbilityBuilder<AppAbility>(AppAbility);

    can('read', 'View');
    cannot('edit', 'View');
    // can('edit', 'View');

    this.ability.update(rules);
  }
}
