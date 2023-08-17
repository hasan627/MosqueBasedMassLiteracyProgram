///<reference types="cypress"/>
import { Teacher, TeacherPage } from "../pages/Teacher Management/TeacherPage";
const teacherpage = new TeacherPage();

describe('Teacher Management', function(){
    it('Teacher Add', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        teacherpage.ExpandIcon().click()
        teacherpage.ExpandIcon2nd().click()
        teacherpage.Menu().click()
        teacherpage.AttachWithoutNID().click().type('এনআইডি নম্বর ছাড়া').type('{downarrow}').type('{enter}')
        teacherpage.CenterCode().click().type('সাহাপুর সিরাজউদ্দিন গাজী মেমোরিয়াল উচ্চ বিদ্যালয়').type('{downarrow}').type('{enter}')
        teacherpage.NameEN().type('Md Azad Mia')
        teacherpage.NameBN().type('মোঃ আজাদ মিয়া')
        teacherpage.TeacherClusterId().type('123456')
        teacherpage.Gender().click().type('পুরুষ').type('{downarrow}').type('{enter}')
        teacherpage.NID().type('1234568590')
        teacherpage.FatherName().type('Rafiqul Islam')
        teacherpage.MotherName().type('Amena Begum')
        teacherpage.DoB().click()
        teacherpage.SelectDoB()
        teacherpage.MobileNo().type('0162755896')
        teacherpage.JoiningDateClick().click()
        teacherpage.TeacherIs().type('ইমাম{enter}')
        teacherpage.Email().type('email@gmail.com')
        teacherpage.Password().type('123456')

        //How to store input value
        cy.get('#email').invoke('val').then((inputValue) => {
            const storedEmailValue = inputValue;
        cy.log('Store Value is:', storedEmailValue)
        })
        //How to store dropdown value
        teacherpage.DegreeName().type('অনার্স').type('{downarrow}').type('{enter}')
        cy.xpath("//input[@value='অনার্স']").invoke('val').then((selectedValue) => {
            const storedDegreeValue = selectedValue;
        cy.log('Selected Value is:', storedDegreeValue)

        //If else statement
        if(storedDegreeValue =='এসএসসি/দাখিল' || storedDegreeValue == 'এইচএসসি/আলিম'){
            teacherpage.Group().should('be.visible')
            teacherpage.Group().click()
            cy.get('[data-value="Arts"]').click()
            teacherpage.Board().type('কুমিল্লা').type('{downarrow}').type('{enter}')
            teacherpage.InstituteName().type('Rupachara Safi Ullah High School');
            teacherpage.PassingYear().type('২০২৩').type('{downarrow}').type('{enter}')
            teacherpage.CGPAType().click()
            cy.get('.MuiList-root > [tabindex="-1"]').click()
            teacherpage.Cgpa().type('3.33')
            cy.get('form').submit()
        }else{
            cy.get('#Department').type('CSE')
            teacherpage.Board().type('ঢাকা বিশ্ববিদ্যালয়').type('{downarrow}').type('{enter}')
            teacherpage.PassingYear().type('২০২৩').type('{downarrow}').type('{enter}')
            teacherpage.CGPAType().click()
            cy.get('.MuiList-root > [tabindex="0"]').click()
            teacherpage.Division().should('be.visible')
            teacherpage.Division().click()
            cy.get('.MuiList-root > [tabindex="0"]').click()
            cy.get('form').submit()
        }

        })
           

    })
})