/// <reference types="cypress"/>
import { ResourceCenterPage } from "../pages/Center Management/ResourceCenterPage"
const resourcenterpage = new ResourceCenterPage()
describe('ResourceCenterMgmt', function(){
    //for(let i=0; i<2; i++){
    it('ResourceCenterAdd', function(){

        function ResCenCode(){
            var text = "Resource Center";
            var possible = "0123456789"
            for (var i=0; i<5; i++){
                text += possible.charAt(Math.random() * possible.length)
    
                return text;
            }
        }

        cy.login("admin@gmail.com", "IFAdmin123#")
        resourcenterpage.ExpandIcon().click()
        resourcenterpage.ExpandIcon2nd().click()
        resourcenterpage.Menu().click()
        for(let i=0; i<2; i++){
        resourcenterpage.CenterCode().type(ResCenCode())
        resourcenterpage.CenterNameBN().type(ResCenCode())
        resourcenterpage.CenterNameEN().type(ResCenCode())
        resourcenterpage.CenterType().type('মডেল রিসোর্স কেন্দ্র{enter}')
        resourcenterpage.SelectDivision().type('চট্টগ্রাম{enter}')
        resourcenterpage.SelectDistrict().type('লক্ষ্মীপুর{enter}')
        resourcenterpage
        resourcenterpage.SelectUpazila_Citycorporation().type('সিটি কর্পোরেশন{enter}')
        cy.wait(1000)
        resourcenterpage.SelectCityCorporation().click().type('বরিশাল সিটি কর্পোরেশন{enter}')
        resourcenterpage.Union().type('13')
        resourcenterpage.Area().type('Area')
        resourcenterpage.FileSelect().selectFile('cypress/fixtures/mosque.jpg')
        cy.wait(2000)
        cy.get('form').submit()
        resourcenterpage.YesNoBtn().click()
        }
    })
//}
})


