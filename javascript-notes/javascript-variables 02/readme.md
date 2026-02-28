# JavaScript Variables (var, let, const)

A variable is a container used to store data (values) in a program.
Example: name, age, marks, etc.

## 1) Why do we need variables?
- To store data and use it later
- To write reusable and readable code
- To avoid repeating the same value again and again

Example:
Instead of writing "Sandhya" many times, we can store it in a variable.

---

## 2) How to declare a variable in JavaScript?
JavaScript provides 3 keywords to declare variables:
- var
- let
- const

---

## 3) var (Old way)
### Features of var:
- Function scoped (not block scoped)
- Can be re-declared (same name again allowed)
- Can be re-assigned (value can change)
- Hoisted (moved to top) but initialized as `undefined`

### When to use?
Mostly NOT recommended in modern JavaScript.
We prefer let/const.

---

## 4) let (Modern way)
### Features of let:
- Block scoped (works inside { } block)
- Cannot be re-declared in the same scope
- Can be re-assigned (value can change)
- Hoisted but in "Temporal Dead Zone" (cannot use before declaration)

### When to use?
Use let when the value needs to change.
Example: counter, loop index, user input updates

---

## 5) const (Modern way)
### Features of const:
- Block scoped
- Cannot be re-declared
- Cannot be re-assigned
- Must be initialized at the time of declaration

### Important Note:
If const is an object or array, we can change its inside values,
but we cannot assign a completely new object/array to it.

### When to use?
Use const by default when value should not change.
Example: fixed settings, URLs, config values

---

## 6) Scope (Very Important)
### What is scope?
Scope means: Where a variable can be accessed.

- Block scope: inside { } only (let, const)
- Function scope: inside a function (var)

---

## 7) Best Practice
- Use `const` by default
- Use `let` when you need to re-assign
- Avoid `var` in modern JavaScript

