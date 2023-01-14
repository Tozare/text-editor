import { createEvent, createStore, sample } from 'effector';
import { elementsModel } from "@src/entities/elements";
export const pageMounted = createEvent();
export const pageUnmounted = createEvent();

export const loadingStarted = createEvent();
export const loadingFinished = createEvent();
export const $isLoading = createStore(false);
$isLoading
  .on(loadingFinished, () => false)
  .on(loadingStarted, () => true);

sample({
  clock: pageMounted,
  target: elementsModel.getElementFx,
})