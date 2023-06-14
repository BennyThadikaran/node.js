import node from "./node.js";

describe("Node.create", () => {
  test("It generates and returns a HTMLElement", () => {
    const p = node.create("p");
    const input = node.create("input");

    expect(p instanceof HTMLElement).toBe(true);
    expect(input instanceof HTMLInputElement).toBe(true);
    expect(p.tagName).toBe("P");
    expect(input.tagName).toBe("INPUT");
  });

  test("It sets attributes on HTML Element", () => {
    const el = node.create("input", { type: "text", name: "fname" });

    expect(el.getAttribute("type")).toBe("text");
    expect(el.getAttribute("name")).toBe("fname");
  });

  test("It sets text content on HTML element", () => {
    const el = node.create("p", null, "Test string");

    expect(el.textContent).toBe("Test string");
  });
});

describe("Node.append", () => {
  it("It appends the child HTMLElement to the parent HTMLElement and returns the parent", () => {
    const childElementsArray = [
      node.create("p", null, "para 1"),
      node.create("p", null, "para 2"),
      node.create("p", null, "para 3"),
    ];

    const parentElement = node.create("div");

    const el = node.append(childElementsArray, parentElement);

    expect(el instanceof HTMLElement).toBe(true);
    expect(el.childElementCount).toBe(3);
    expect(el.firstElementChild.textContent).toBe("para 1");
    expect(el.lastElementChild.textContent).toBe("para 3");
  });
});

describe("Node.remove", () => {
  it("It removes an element.", () => {
    const childElementsArray = [
      node.create("p", null, "para 1"),
      node.create("p", null, "para 2"),
    ];

    const parentElement = node.create("div");
    const el = node.append(childElementsArray, parentElement);

    node.remove(el.firstElementChild);
    expect(el.firstElementChild.textContent).toBe("para 2");
  });
});
