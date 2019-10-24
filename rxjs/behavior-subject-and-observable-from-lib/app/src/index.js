import { BehaviorSubject, interval } from 'rxjs';
import createObservable from 'lib';

const subject1 = new BehaviorSubject(undefined);
createObservable().subscribe(subject1);

const subject2 = new BehaviorSubject(undefined);
interval(1000).subscribe(subject2);

subject1.subscribe(v => {
  console.log(`Observable from lib: value=${v} getValue()=${subject1.getValue()}`);
});

subject2.subscribe(v => {
  console.log(`Observable from app: value=${v} getValue()=${subject2.getValue()}`);
});
