/**
 * Extracts plain text from a PayloadCMS (Lexical) Rich Text object.
 * @param {Object} node - The root or child node of the rich text.
 * @returns {string} - The concatenated plain text.
 */
export function extractPlainText(node) {
  // 1. If there's no node, return an empty string
  if (!node) return '';

  // 2. If this is a text node, return its text content
  if (node.type === 'text' && node.text) {
    return node.text;
  }

  // 3. If it's a linebreak, return a newline character
  if (node.type === 'linebreak') {
    return '\n';
  }

  // 4. If the node has children, recursively extract text from them
  if (node.children && Array.isArray(node.children)) {
    return node.children
      .map(child => extractPlainText(child))
      .join('');
  }

  return '';
}
