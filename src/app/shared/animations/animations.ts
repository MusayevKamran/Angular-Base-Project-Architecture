import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ backgroundColor: 'black', opacity: 0 })),
  transition(':enter, :leave', [ // 'void => *, * => void'
      animate(2000)
  ])
]);
