import { DistrictPage } from "../pages/System Configuration/districtpage"

const districtpage = new DistrictPage();

describe('District Test Case', function(){


it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    districtpage.ClickDivision().click()
    districtpage.SelectDivision().type('বরিশাল').type('{enter}')
    districtpage.NameEN().type('Barishal');
    districtpage.NameBN().type('বরিশাল')
    districtpage.Submit().click()
    cy.contains('Barishal').should('contain', 'Barishal')
    //Edit Function
    districtpage.EdidIcon().click()
    cy.wait(1000)
    districtpage.UpdateBtn().click()

    //DeleteFunction
    districtpage.DeleteIcon().click()
    districtpage.DeleteYes().click()

})


it('DistrictAdd', function(){
    cy.login("admin@gmail.com", "IFAdmin123#")
    districtpage.ExpandIcon().click()
    districtpage.Menu().click();
    cy.wait(1000)
    districtpage.CreateBtn().click()
    districtpage.ClickDivision().click()
    districtpage.SelectDivision().type('বরিশাল').type('{enter}')
    districtpage.NameEN().type('Barishal');
    districtpage.NameBN().type('বরিশাল')
    districtpage.Submit().click()
    cy.contains('Barishal').should('contain', 'Barishal')

})
})