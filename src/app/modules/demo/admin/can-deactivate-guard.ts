import { CanDeactivateFn } from '@angular/router';
import { Admin } from './admin';
import { inject } from '@angular/core';

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate();
};
