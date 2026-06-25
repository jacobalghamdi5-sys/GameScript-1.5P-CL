# GameScript v1.5 Pro Syntax Guide

## 1. Core Structural Block `<gs-1.5p>`
The compiler will ignore any advanced asynchronous functions unless wrapped completely inside the modern engine tags.

## 2. Element Functional Nesting
To mutate elements dynamically on click events without reloading the thread, nesting commands must sequence linearly:
1. **Element Core**: `<button>`
2. **Behavior Bridge**: `<button-function>`
3. **Action Execution**: `<button-click>`
4. **State Transformer**: `<button-changer>`

## 3. Global System Overrides
The `_` partition (single underscore) acts as a high-priority structural breaker for critical termination hooks like `<stopautoclick-button>` as a sub-button to `<autoclick-button>`.
