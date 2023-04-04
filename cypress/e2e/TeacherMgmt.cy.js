///<reference types="cypress"/>
import { Teacher, TeacherPage } from "../pages/Teacher Management/TeacherPage";
const teacherpage = new TeacherPage();

describe('Teacher Management', function(){
    it('Teacher Add', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        teacherpage.ExpandIcon().click()
        teacherpage.ExpandIcon2nd().click()
        teacherpage.Menu().click()
        teacherpage.CenterCode().click().type('GAZ1').type('{enter}')
        teacherpage.NameEN().type('Mr. X')
        teacherpage.NameBN().type('Name Bangla')
        teacherpage.TeacherClusterId().type('123456')
        teacherpage.Gender().click().type('পুরুষ').type('{enter}')
        teacherpage.NID().type('1234568590')
        teacherpage.FatherName().type('Test')
        teacherpage.MotherName().type('Test')
        teacherpage.DoB().click()
        teacherpage.SelectDoB()
        teacherpage.MobileNo().type('0162755896')
        teacherpage.JoiningDateClick().click()
        teacherpage.TeacherIs().type('ইমাম{enter}')
        teacherpage.DegreeName().type('এসএসসি{enter}')
        teacherpage.Group().type('Science')
        teacherpage.InstituteName().type('Rupachara Safi Ullah High School')
        teacherpage.Board().type('কুমিল্লা{enter}')
        teacherpage.PassingYear().type('২০২৩{enter}')
        teacherpage.Cgpa().type('3.33')
        cy.get('form').submit()

    })
})