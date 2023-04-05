/// <reference types="cypress"/>
export class DistrictPage{

    ExpandIcon(){
        return cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
    }

    Menu(){
        return cy.get('[href="/admin/system-configuration/district"] > .MuiButtonBase-root')
    }
    CreateBtn(){
        return cy.get('.exportSec > :nth-child(2) > .MuiButtonBase-root')
    }

    SelectDivision(){
        return cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    NameEN(){
        return cy.get('#nameEnglish')
    }
    NameBN(){
        return cy.get('#nameBangla')
    }
    Submit(){
        return cy.get('.addBtn > .MuiButtonBase-root')
    }

    EdidIcon(){
        return cy.get(':nth-child(1) > :nth-child(6) > .actionField > a.MuiButtonBase-root > .MuiButton-startIcon > img')
    }

    UpdateBtn(){
        return cy.get('.addBtn > .MuiButtonBase-root')
    }

    DeleteIcon(){
        return cy.get(':nth-child(1) > :nth-child(6) > .actionField > button.MuiButtonBase-root > .MuiButton-startIcon')
    }

    DeleteYes(){
        return cy.get('.css-1p07y8n > :nth-child(3)')
    }


}