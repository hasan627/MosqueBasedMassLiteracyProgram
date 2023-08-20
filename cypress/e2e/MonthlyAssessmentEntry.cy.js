/// <reference types="cypress" />
import { StudentMonthlyAssessmentPage } from "../pages/Student/studentMonthlyAssessmentPage";
const MonthlyAssessment = new StudentMonthlyAssessmentPage();

describe('Student Monthly Assessment Entry', function(){
    
    it('MontlyAssessment', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        MonthlyAssessment.ExpandIcon().click()
        MonthlyAssessment.ExpandIcon2().click()
        MonthlyAssessment.Menu().click()
        cy.wait(2000)
        MonthlyAssessment.Month().clear().type('এপ্রিল').type('{downarrow}').type('{enter}')
        MonthlyAssessment.CenterCode().type('লক্ষীপুর কেন্দ্রীয় জামে মসজিদ - LAX1').type('{downarrow}').type('{enter}')
        MonthlyAssessment.SearchBtn().click()
        
        cy.get('tbody input').each(($input) =>{
            const randomValue = generateRandomValue();
            cy.wrap($input).type(randomValue)
        })

        function generateRandomValue() {
            // Generate a random string or number as your input value
            // For example, generating a random string of 5 characters
            const characters = '56789';
            let randomValue = '';
            
            for (let i = 0; i < 1; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              randomValue += characters[randomIndex];
            }
            
            return randomValue;
          }
   
        // MonthlyAssessment.Attendance().type('10')
        // MonthlyAssessment.Bangla().type('10')
        // MonthlyAssessment.Math().type('10')
        // MonthlyAssessment.Arabic().type('10')
        // MonthlyAssessment.English().type('10')
        // MonthlyAssessment.Others().type('10')
        // MonthlyAssessment.HandWriting().type('10')
        // MonthlyAssessment.Cleanliness().type('5')
        // MonthlyAssessment.Overall().type('10')
        // MonthlyAssessment.VariousKnowledge().type('5')
        //MonthlyAssessment.Draft().click()
        MonthlyAssessment.SubmitBtn().click()
    
    })

})