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
        teacherpage.NameEN().type('Mr. X')
        teacherpage.NameBN().type('Name Bangla')
        teacherpage.TeacherClusterId().type('123456')
        teacherpage.Gender().click().type('পুরুষ').type('{downarrow}').type('{enter}')
        teacherpage.NID().type('1234568590')
        teacherpage.FatherName().type('Test')
        teacherpage.MotherName().type('Test')
        teacherpage.DoB().click()
        teacherpage.SelectDoB()
        teacherpage.MobileNo().type('0162755896')
        teacherpage.JoiningDateClick().click()
        teacherpage.TeacherIs().type('ইমাম{enter}')
        teacherpage.Email().type('email@gmail.com')
        teacherpage.Password().type('123456')
        teacherpage.DegreeName().type('এসএসসি/দাখিল').type('{downarrow}').type('{enter}')
        teacherpage.Group().should('be.visible')
        teacherpage.Group().click()
        cy.get('[data-value="Arts"]').click()
        teacherpage.Board().type('কুমিল্লা').type('{downarrow}').type('{enter}')
        teacherpage.InstituteName().type('Rupachara Safi Ullah High School');
        teacherpage.PassingYear().type('২০২৩').type('{downarrow}').type('{enter}')
        teacherpage.CGPAType().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        //teacherpage.Cgpa().type('3.33')
        teacherpage.Division().should('be.visible')
        teacherpage.Division().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('form').submit()

    })
})