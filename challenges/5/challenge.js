/*
 * Paginação
 */

/* ENUNCIADO
 *
 *  Você deve escrever uma função de paginação de listas que receba o número da página e o número de itens por página como parâmetros
 *  e retorne no seguinte formato:
 * 
 * 
 *  {
        currentPage: 1,
        perPage: 10,
        total: 20,
        totalPages: 2,
        data: [
            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur (...)"
            },
            [...]
        ]
    }
 */

/*
 O Enunciado aqui estava diferente dos testes, fiz esse exercício com o que imaginei que
 fosse a entrada e comportamentos esperados
 */
const paginate = (posts, pageNumber = 1, itemsPerPage = 10) => {
  if (!Array.isArray(posts)) {
    throw `Expect array and got ${typeof posts}`
  }

  return {
    currentPage: pageNumber,
    perPage: itemsPerPage,
    total: posts.length,
    totalPages: Math.ceil(posts.length / itemsPerPage),
    data: posts.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage),
  }
}

module.exports = paginate
