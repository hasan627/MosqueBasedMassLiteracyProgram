/// <reference types="cypress" />
export class DivisionPage{
    ExpandIcon(){
        return cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    }

    Menu(){
        return cy.get('[href="/admin/system-configuration/division"] > .MuiButtonBase-root').click();
    }
    CreateBtn(){
        return cy.get('.exportSec > :nth-child(2) > .MuiButtonBase-root').click()
    }
    NameEN(){
        return cy.get('#nameEnglish').type('Barishal1')
    }
    NameBN(){
        return cy.get('#nameBangla').type('বরিশাল1')
    }
    Submit(){
        return cy.get('.addBtn > .MuiButtonBase-root').click()
    }
}