import {
  ELEMENT_TYPES,
  TEXT_ALIGN_TYPES
} from "../config";
import { Values } from '@src/shared/typings/object-values';

interface ElementInit {
  type: Values<typeof ELEMENT_TYPES>,
  width: number,
  height: number,
  x: number,
  y: number,
}

export interface TextElement extends ElementInit {
  type: typeof ELEMENT_TYPES.TEXT,
  fontFamily: string,
  fontWeight: number,
  fontSize: number,
  color: string,
  letterSpacing: number,
  lineHeight: number,
  textAlign: Values<typeof TEXT_ALIGN_TYPES>,
  text: string,
}

export type Element = TextElement;