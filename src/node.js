/**
 * node module
 * A helper utility for generating HTML elements
 * @namespace node
 */
const node = (function () {
  /**
   * Create an element with specified attributes and text
   * @public
   * @param {String} elem HTML element name
   * @param {Object} attributes attributes to be added as key value pair
   * @param {String} text text content to be added
   * @return {HTMLElement}
   * @memberof node
   */
  function create(elem, attributes, text) {
    const el = document.createElement(elem);

    if (attributes instanceof Object) {
      for (const [key, value] of Object.entries(attributes)) {
        el.setAttribute(key, value);
      }
    }

    if (text) el.textContent = text;
    return el;
  }

  /**
   * Append all elements to the parent node
   * @public
   * @param {Array.<HTMLElement>} elemsArray Array of html elements
   * @param {HTMLElement} parent Parent element to append to
   * @return {HTMLElement}
   * @memberof node
   */
  function append(elemsArray, parent) {
    for (const elem of elemsArray) {
      parent.appendChild(elem);
    }
    return parent;
  }

  /**
   * Remove an element from the DOM
   * @public
   * @param {HTMLElement} el html element to be removed
   * @memberof node
   */
  function remove(el) {
    el.parentNode.removeChild(el);
  }

  return Object.freeze({
    create: create,
    append: append,
    remove: remove,
  });
})();

export default node;
