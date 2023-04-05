/// <reference types="cypress" />
export class DivisionPage{
    ExpandIcon(){
        return cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click();
    }

    Menu(){
        return cy.get('[href="/admin/system-configuration/division"] > .MuiButtonBase-root').click();
    }
    CreateBtn(){
        return cy.get('.exportSec > :nth-child(2) > .MuiButtonBase-root')
    }
    NameEN(){
        return cy.get('#nameEnglish')
    }
    NameBN(){
        return cy.get('#nameBangla')
    }
    Submit(){
        return cy.get('.addBtn > .MuiButtonBase-root').click()
    }
}