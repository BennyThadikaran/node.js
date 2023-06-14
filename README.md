# Node.js

A tiny helper library for dynamically generating HTML Elements.

Written in vanilla javascript and fully tested.

## Usage

```javascript
import node from "./node.js";
```

---

**Node.js has just 3 public methods: `create, append, remove`**

`node.create` takes 3 arguments:

- Element name,
- Object of attribute key-values pairs [Optional],
- Text content to be added [Optional]

```javascript
let p = node.create("p");
// HTMLElement <p></p>

p = node.create("p", null, "Test Title");
// HTMLElement <p>Test Title</p>

const h1 = node.create(
  "h1",
  {
    id: "title",
    class: "blog-title",
  },
  "Test title"
);
// HTMLElement <h1 id="title" class="blog-title">Test title</h1>
```

---

**`node.append` takes 2 arguments**

- An array of elements to be appended.
- The parent element to append to.

```javascript
// create some empty nodes
const h1 = node.create("h1");
const h2 = node.create("h2");
const p = node.create("p");

const div = node.create("div");

node.append([h1, h2, p], div);
// returns a div HTMLElement with child elements appended
```

---

**`node.remove` takes a single argument**

- Element to be removed

```HTML
<div>
  <h1 id="title" class="blog-title">DOMGenerator</h1>
</div>
```

```javascript
var h1 = document.getElementById("title");

node.remove(h1);
```

**Both `node.create` and `node.append` returns an HTML Element allowing them to be combined with other functions.**

```javascript
const div = node.append(
  [
    node.create("p", null, "Para 1"),
    node.create("p", null, "Para 2"),
    node.create("p", null, "Para 3"),
  ],
  node.create("div")
);

document.body.appendChild(node.create("div"));
```
