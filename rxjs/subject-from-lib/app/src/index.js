import { BehaviorSubject } from 'rxjs';
import createSubject from 'lib';

const observer = new BehaviorSubject(undefined);
createSubject().subscribe(observer);

observer.subscribe(v => {
  console.log('value: ' + v)
  console.log('getValue(): ' + observer.getValue())
});
