/// <reference types="Cypress" />

describe("Simple tests", () => {

    beforeEach( () => {
        cy.visit("https://www.medipment.pl/");
        cy.url().should('contain', 'https://www.medipment.pl/');
    
    })
       
        it("Zaloguj", () => {
                cy.get('.signup-btn').should('contain','Zaloguj')
        })
                 
        it("Produkty", () => {
                    cy.get('.dropdown-toggle').should('contain','Produkty')
                
        })

        it("Dystrybutorzy", () => {
        cy.get('.nav > :nth-child(2) > a').should('contain','Dystrybutorzy')
    })

    it("Serwis", () => {
        cy.get('.nav > :nth-child(3) > a').should('contain','Serwis')
    })

    it("Blog", () => {
        cy.get('.nav > :nth-child(4) > a').should('contain','Blog')
    })

    it("Zapytanie", () => {
        cy.get('.nav > :nth-child(6) > a').should('contain','Zapytanie')
    })

    it("Kontakt", () => {
        cy.get('.nav > :nth-child(7) > a').should('contain','Kontakt')
    })

    it("Inwestycje", () => {
        cy.get('.nav > :nth-child(8) > a').should('contain','Inwestycje')
    })

    it("Select", () => {
        cy.get('#inputGroupSelect_1').should('contain','produktach i dystrybutorach')
    })
    
        it("Search bar", () => {
            cy.get('#searchPhrase_1').click().type("Blumed");
            cy.get('#btnSearchOnPortal_1 > .fa').click();
            cy.get('.h2').should('contain','Wyniki wyszukiwania')
            cy.get(':nth-child(1) > :nth-child(2) > b > a').should('contain','Blumed')
        })
    })

  