import { animate, keyframes, state, style, transition, trigger } from '@angular/core';

export const fadeInDown =
    trigger('fadeInDown', [
        transition(':enter', animate('1s 250ms', keyframes([
            style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: '1', transform: 'none', offset: 1})
        ]))),
        transition(':leave', animate(750, keyframes([
            style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({opacity: '1', transform: 'none', offset: 1})
        ])))
    ]);
