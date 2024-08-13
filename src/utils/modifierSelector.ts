const modifierSelector =
  (style: { readonly [key: string]: string }, initialClass: string) =>
  (...modifiers: (string | boolean)[]) =>
    [initialClass, ...modifiers.map((modifier) => `${initialClass}${modifier}`)]
      .filter((selector) => typeof selector === "string" && selector.length)
      .map((selector) => style[selector])
      .join(" ");

export default modifierSelector;
