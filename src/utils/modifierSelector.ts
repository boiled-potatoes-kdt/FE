const modifierSelector =
  (style: { readonly [key: string]: string }, initialClass: string) =>
  (...modifiers: string[]) =>
    [initialClass, ...modifiers.map((modifier) => `${initialClass}${modifier}`)]
      .map((selector) => style[selector])
      .join(" ");

export default modifierSelector;
