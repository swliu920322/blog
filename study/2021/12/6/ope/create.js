

import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2; // the argument
const merged = merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x));

// 0 - day1 - day2 - 3 - 4 - 5 - 6 - 7 - 8 - 9
// 0 -     day1       day2       3       4        5
//                                      0 123 4 5 6  7  8 9
