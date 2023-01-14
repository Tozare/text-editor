import {
  FIELD_TYPES,
  FACILITY_TYPES,
  FIELD_ROOM_TYPES,
  COVERING_TYPES,
} from "../config";
import { Values } from '@src/shared/typings/object-values';

interface Address {
  country: string,
  region: string,
  city: string,
  street: string,
  building: string,
}

interface Price {
  value: number,
  currency: string,
}

interface Facility {
  type: Values<typeof FACILITY_TYPES>,
  value: string,
}


interface FieldInit {
  type: Values<typeof FIELD_TYPES>,
  name: string,
  address: Address,
  rating: number,
  price: Price,
  facilities: Facility[],
  size: string,
  roomType: Values<typeof FIELD_ROOM_TYPES>,
  coveringType: Values<typeof COVERING_TYPES>,
  media: string[],
}

export interface FootballField extends FieldInit {
  type: typeof FIELD_TYPES.FOOTBALL,
}

export interface BasketballField extends FieldInit {
  type: typeof FIELD_TYPES.BASKETBALL,
}

export interface TennisField extends FieldInit {
  type: typeof FIELD_TYPES.TENNIS,
}

export interface VolleyballField extends FieldInit {
  type: typeof FIELD_TYPES.VOLLEYBALL,
}

export type Field = FootballField;
// export type Fields = Array<FootballField | BasketballField | TennisField | VolleyballField>