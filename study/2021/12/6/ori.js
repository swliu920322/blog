import { of} from 'rxjs'
import {first, take} from 'rxjs/operators'

of(1,2,3).pipe(source => {
    return source.pipe((source1, subscriber) => {
        console.log(source1)
        return source
    })
}).subscribe(i => {
    console.log(i)
})
