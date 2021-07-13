/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {InteractiveCanvas} from './interactive-canvas';

/**
 * A representation of Interactive Canvas events that appear in the History tab
 */
export interface CanvasHistory {
  type: 'text' | 'state';
  timestamp: number;
  label: string;
}

/**
 * An extension of the browser `window` with additional fields pertaining
 * to this extension.
 */
export interface InteractiveCanvasWindow extends Window {
  interactiveCanvas: InteractiveCanvas;
  interactiveCanvasExists: boolean;
  interactiveCanvasHistory: CanvasHistory[];
}