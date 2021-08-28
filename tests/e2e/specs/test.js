// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
    cy.get('input[type="text"]').type('Hello, World') // Type 'Hello, World' into the 'input'
    // cy.get('form').submit() // Submit a form
    cy.contains('p', 'Hello, World')
  })
})
