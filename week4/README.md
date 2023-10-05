# Week 4

## Creating Elements in JavaScript

```js
const div = document.createElement("div");
document.body.appendChild(div); // Need to actually add element to page somewhere
```

## Modifying classes

```js
div.classList.add("card");
div.classList.remove("card");
div.classList.toggle("card");
```

## Attributes

```js
div.setAttribute("class", "card");
div.getAttribute("class");
```
