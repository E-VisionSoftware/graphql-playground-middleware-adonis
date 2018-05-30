'use strict'

const { renderPlaygroundPage } = use('graphql-playground-html')
const { playgroundVersion } = require('../package.json')

const graphQLPlayground = function graphQLPlayground (options) {
  const graphqlPlaygroundHandler = ctx => {
    const middlewareOptions = {
      ...options,
      version: playgroundVersion
    }
    const { request, response } = ctx
    const playground = renderPlaygroundPage(middlewareOptions)
    response.type('text/html').send(playground)
  }
  return graphqlPlaygroundHandler
}

module.exports = graphQLPlayground
