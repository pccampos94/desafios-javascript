/*
 * Regex
 */

/* ENUNCIADO
 *
 * Escreva uma função que busque no texto os valores de "height" e "width"
 * e retorne um objeto { "height": x, "width": y } contendo esses valores ignorando sua medida (px, %, em).
 *
 * Ex:1
 * [INPUT]
 * "<div style="height: 20px; width: 60px;">"
 * [OUTPUT]
 * {
 *   height: 20,
 *   width: 60
 * }
 *
 * Ex: 2
 * [INPUT] String
 * "<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>"
 * [OUTPUT] Object
 * {
 *   width: 120,
 *   height: 20
 * }
 */

const matchWithWord = (field, word) => {
  const baseRegexp = new RegExp(`${field}:\\s?(\\d+)`, 'g')
  const baseMatch = word.match(baseRegexp)

  return baseMatch && baseMatch[0].match(`(?!${field}:\\s?)(\\d+)`)
}

const extractSize = (htmlTemplate) => {
  const height = matchWithWord('height', htmlTemplate)
  const width = matchWithWord('width', htmlTemplate)

  return {
    height: height ? +height[0] : 0,
    width: width ? +width[0] : 0,
  }
}

module.exports = extractSize
