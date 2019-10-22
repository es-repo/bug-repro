import { BehaviorSubject } from 'rxjs';
import createObservable from 'lib';

const subject = new BehaviorSubject(undefined);
createObservable().subscribe(subject);

subject.subscribe(v => {
  console.log('value: ' + v)
  console.log('getValue(): ' + subject.getValue())
});
