/// <reference types="cypress" />
import { DivisionPage } from "../pages/System Configuration/divisionpage";

const divisionpage = new DivisionPage();

describe('Division Testing Data', function(){

it('DivisionCreate', function(){
  cy.login("admin@gmail.com", "IFAdmin123#")
    divisionpage.ExpandIcon();
    divisionpage.Menu();
    divisionpage.CreateBtn().click()
    divisionpage.NameEN().type('Mymensingh')
    divisionpage.NameBN().type('ময়মনসিংহ')
    divisionpage.Submit();
    cy.contains('Mymensingh').should('contain', 'Mymensingh')
    //Edit Code
    cy.get(':nth-child(1) > :nth-child(5) > .actionField > a.MuiButtonBase-root > .MuiButton-startIcon > img').click()
    cy.get('.addBtn > .MuiButtonBase-root').click()
    //Delete Code
    cy.get(':nth-child(1) > :nth-child(5) > .actionField > button.MuiButtonBase-root > .MuiButton-startIcon').click()
    cy.get('.css-1p07y8n > :nth-child(3)').click()
  })

  it('DivisionCreate2nd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    divisionpage.ExpandIcon();
    divisionpage.Menu();
    divisionpage.CreateBtn().click()
    divisionpage.NameEN().type('Mymensingh')
    divisionpage.NameBN().type('ময়মনসিংহ')
    divisionpage.Submit();
    cy.contains('Mymensingh').should('contain', 'Mymensingh')
    
  })
})