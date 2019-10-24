import { BehaviorSubject, interval } from 'rxjs';
import createObservable from 'lib';

const subject1 = new BehaviorSubject(undefined);
createObservable().subscribe(subject1);

const subject2 = new BehaviorSubject(undefined);
interval(1000).subscribe(subject2);

subject1.subscribe(v => {
  console.log('lib value: ' + v)
  console.log('lib getValue(): ' + subject1.getValue())
});

subject2.subscribe(v => {
  console.log('app value: ' + v)
  console.log('app getValue(): ' + subject2.getValue())
});
