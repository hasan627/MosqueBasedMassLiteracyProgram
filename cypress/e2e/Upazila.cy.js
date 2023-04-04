import { UPazilaPage } from "../pages/System Configuration/Upazilapage";
const upazilapage = new UPazilaPage()

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
})
