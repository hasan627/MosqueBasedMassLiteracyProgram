/// <reference types="cypress" />
import { StudentMonthlyAssessmentPage } from "../pages/Student/studentMonthlyAssessmentPage";
const MonthlyAssessment = new StudentMonthlyAssessmentPage();

describe('Student Monthly Assessment Entry', function(){
    
    it('MontlyAssessment', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        MonthlyAssessment.ExpandIcon().click()
        MonthlyAssessment.ExpandIcon2().click()
        MonthlyAssessment.Menu().click()
        MonthlyAssessment.CenterCode().type('লক্ষীপুর কেন্দ্রীয় জামে মসজিদ - LAX1').type('{downarrow}').type('{enter}')
        MonthlyAssessment.SearchBtn().click()
        MonthlyAssessment.Attendance().type('10').each()
        MonthlyAssessment.Bangla().type('10').each()
        MonthlyAssessment.Math().type('10')
        MonthlyAssessment.Arabic().type('10')
        MonthlyAssessment.English().type('10')
        MonthlyAssessment.Others().type('10')
        MonthlyAssessment.HandWriting().type('10')
        MonthlyAssessment.Cleanliness().type('5')
        MonthlyAssessment.Overall().type('10')
        MonthlyAssessment.VariousKnowledge().type('5')
        
    
    })

})