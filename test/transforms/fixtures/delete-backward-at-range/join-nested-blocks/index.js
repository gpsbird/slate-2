
export default function (state) {
  const { document, selection } = state
  const texts = document.getTextNodes()
  const second = texts.last()
  const range = selection.merge({
    anchorKey: second.key,
    anchorOffset: 0,
    focusKey: second.key,
    focusOffset: 0
  })

  return state
    .transform()
    .deleteBackwardAtRange(range)
    .apply()
}