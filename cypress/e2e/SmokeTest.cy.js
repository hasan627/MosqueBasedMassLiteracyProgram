/// <reference types="cypress" />
import { DivisionPage } from "../pages/System Configuration/divisionpage";
const divisionpage = new DivisionPage();
import { DistrictPage } from "../pages/System Configuration/districtpage"
const districtpage = new DistrictPage();



describe('Smoke Test', function(){

    //Division Test Case

    it('DivisionCreate', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
          divisionpage.ExpandIcon();
          divisionpage.Menu();
          divisionpage.CreateBtn();
          divisionpage.NameEN();
          divisionpage.NameBN();
          divisionpage.Submit();
          cy.contains('Barishal').should('contain', 'Barishal')
          //Edit Code
          //cy.get(':nth-child(1) > :nth-child(5) > .actionField > a.MuiButtonBase-root > .MuiButton-startIcon > img').click()
          //cy.get('.addBtn > .MuiButtonBase-root').click()
          //Delete Code
          //cy.get(':nth-child(1) > :nth-child(5) > .actionField > button.MuiButtonBase-root > .MuiButton-startIcon').click()
          //cy.get('.css-1p07y8n > :nth-child(3)').click()
        })
  

//District TestCase

it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    districtpage.ClickDivision().click()
    cy.wait(1000)
    districtpage.SelectDivision().type('বরিশাল').type('{enter}')
    districtpage.NameEN().type('Barishal');
    districtpage.NameBN().type('বরিশাল')
    districtpage.Submit().click()
    cy.contains('Barishal').should('contain', 'Barishal')
    //Edit Function
    //districtpage.EdidIcon().click()
    //cy.wait(1000)
    //districtpage.UpdateBtn().click()

})

//Upazila TestCase
it('Create Upazila', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    upazilapage.ExpandIcon().click()
    upazilapage.Menu().click()
    upazilapage.CreateBtn().click()
    cy.wait(1000)
    upazilapage.SelectDivision().type('বরিশাল').type('{enter}')
    upazilapage.SelectDistrict().type('বরিশাল').type('{enter}')
    upazilapage.NameEn().type('Barishal Sadar')
    upazilapage.NameBN().type('বরিশাল সদর')
    cy.get('form').submit()
    cy.contains('Barishal Sadar ').should('contain', 'Barishal Sadar')

})
      

})

