import $ from 'jquery';

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const btn = $('#btn');

const btnStream$ = fromEvent(btn, 'click');

// subscribe gonna take 3 arguments : the data received, an error if any, a complete function.
// the only required function is the first one.

btnStream$.subscribe(($event) => {
        return console.log('clicked', $event);
    }, (err) => {
        return console.error(err);
    },
    () => {
    return console.log('completed');
});
