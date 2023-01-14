import { createEffect, createEvent, createStore, sample } from 'effector';
import { fieldsApi } from "@src/shared/api";
import type { Field } from "../typings";

export const $fieldsList = createStore<Field[]>([]);
export const fieldsListChanged = createEvent<Field[]>();

$fieldsList.on(fieldsListChanged, (_, fields) => fields);

export const getFieldsListFx = createEffect(async () => {
  const fieldsRes = await fieldsApi.getFieldsList({});
  return fieldsRes.data as Field[];
});

sample({
  clock: getFieldsListFx.doneData,
  target: fieldsListChanged,
})

