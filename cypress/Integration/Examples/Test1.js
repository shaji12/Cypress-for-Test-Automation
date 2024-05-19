/// <reference types="Cypress" />

//const { find } = require("cypress/types/lodash");

describe('my first testcase', function()
{
    it('my first case',function(){


        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get(".product:visible").should('have.length',4)

        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').as('productLoactor')
        cy.get('@productLoactor').find('.product').eq('2').contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })

        cy.get('@productLoactor').find('.product').each(($el, index, $list) => {
            const textveg=$el.find('h4.product-name').text()
            if (textveg.includes('Cashews'))
            {
             cy.wrap($el).find('button').click()
            }

        })
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })

    })
})