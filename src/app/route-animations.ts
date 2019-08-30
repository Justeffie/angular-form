import {animate, group, query, stagger, style, transition, trigger} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
  transition('login => signup', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
    query(':leave', [
      style({transform: 'translateY(0%)', opacity: 1}),
      animate('1s ease-in-out', style({transform: 'translateY(-100%)', opacity: 0}))
    ], { optional: true}),
    query(':enter', [
      style({transform: 'translateX(-100%)', opacity: 0}),
      stagger(-50, animate('1s ease-in-out', style({transform: 'translateX(0%)', opacity: 1})))
      ], {optional: true})
    ])
  ]),
  transition('signup => login', [
    query(':leave, :enter ', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    group([
    query(':leave', [
      style({transform: 'translateX(0%)', opacity: 1}),
      animate('1s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0}))
    ], { optional: true}),
    query(':enter', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        stagger(-50, [animate('1s ease-in-out', style({transform: 'translateY(0%)', opacity: 1}))])
      ], {optional: true})
  ])
  ])
  ]);
