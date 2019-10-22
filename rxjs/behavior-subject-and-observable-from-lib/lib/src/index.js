import { interval } from 'rxjs';

export default function createObservable() {
  return interval(1000);
}