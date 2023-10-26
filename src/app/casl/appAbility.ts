import {
  Ability,
  AbilityClass,
  MatchConditions,
  PureAbility,
} from '@casl/ability';
import { CaslActions } from './caslActions';
import { CaslSubjects } from './caslSubjects';

// https://casl.js.org/v6/en/package/casl-angular#type-script-support
// https://casl.js.org/v6/en/advanced/typescript#application-ability
export type AppAbility = PureAbility<
  [CaslActions, CaslSubjects],
  MatchConditions
>;

// should be PureAbility but then there is a cyclic dependency at runtime
export const AppAbility = Ability as AbilityClass<AppAbility>;
