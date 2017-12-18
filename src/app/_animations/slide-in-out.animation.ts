import { trigger, state, animate, transition, style } from '@angular/animations';

// This animation makes the details slide in and out.
export const slideInOutAnimation =
    trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            position: 'fixed',
            width: '100%',
            top: 0,
            bottom: 0,
            zIndex: 5
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: '-400%',
                zIndex: 5
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                right: 0,
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            style({
                position: 'fixed',
                top: 0,
                bottom: 0,
                right: 0,
                zIndex: 5
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                right: '-400%',
            }))
        ])
    ]);
