import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import epic from '../home.epic';
import * as types from '../home.actionType';

describe('Home Component - epics', () => {
  const action$ = ActionsObservable.of({
    type: types.HOME_TEST,
    payload: '/api/test',
  });

  it('successfully gets test action result', (done) => {
    const getJSON = () => Observable.of({});
    const expectedOutputActions = [{ type: types.HOME_TEST_SUCCESS, payload: {} }];
    epic(action$, null, { getJSON })
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).toEqual(expectedOutputActions);
        done();
      });
  });

  it('fails to get test action result', (done) => {
    const getJSON = () => Observable.throw('failed');
    const expectedOutputActions = [
      { type: types.HOME_TEST_ERROR, payload: 'failed' }
    ];
    epic(action$, null, { getJSON, of: Observable.of })
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).toEqual(expectedOutputActions);
        done();
      });
  });
});
