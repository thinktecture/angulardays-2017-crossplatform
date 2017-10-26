import {animate, group, query, style, transition, trigger} from '@angular/animations';

export const routeTransition = trigger('routeTransition', [
  transition('starwars => home, pokemon => home, mirror => home', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(100%)'}))
      ], {optional: true})
    ])
  ]),
  transition('* <=> *', [
    query(':enter, :leave', style({position: 'fixed', width: '100%'}), {optional: true}),
    group([
      query(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
      ], {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0)'}),
        animate('.5s ease-in-out', style({transform: 'translateX(-100%)'}))
      ], {optional: true})
    ])
  ]),
]);
