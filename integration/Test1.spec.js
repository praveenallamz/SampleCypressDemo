///<reference types="cypress"/>
///<reference types="cypress-xpath"/>

describe('My First Test', () => {
   
  it('Visits the Google Page and enter text in search box', () => {
      cy.visit('https://google.com')
      //cy.get('.gLFyf').type('Hello Cypress{enter}')
      cy.xpath("//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]").type('Hello Cypress{enter}')
     })

     it('Visits the Google Page and enter text in search box', () => {
      cy.visit('https://google.com')
      cy.get('.gLFyf').type('TestingXperts{enter}')
     // cy.xpath("//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[1]/div[1]/div[2]/input[1]").type('Hello Cypress{enter}')
     })
       
  })