/// <reference types="Cypress" />

//const { find } = require("cypress/types/lodash");

describe('my second testcase', function()
{
    it('my second case',function(){


        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        cy.get('.products').as('productLoactor')

        cy.get('@productLoactor').find('.product').each(($el, index, $list) => {
            const textveg=$el.find('h4.product-name').text()
            if (textveg.includes('Cashews'))
            {
             cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

    })
})