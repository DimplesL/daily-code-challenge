/**
 * Company: Google
 *
 * Given a string of words delimited by spaces, reverse the words in string.
 * For example, given "hello world here", return "here world hello"
 *
 * Follow-up: given a mutable string representation, can you perform this
 * operation in-place?
 */
function reverseWords(str) {
  return str
    .trim()
    .split(' ')
    .filter(w => w !== '')
    .reverse()
    .join(' ');
}
