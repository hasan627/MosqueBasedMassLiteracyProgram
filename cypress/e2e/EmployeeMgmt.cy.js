import { EmployeePage } from "../pages/Employee Management/EmployeePage";
const employeepage = new EmployeePage()
describe('Employee Management', function(){
    it('Employee Add', function(){
        cy.login("admin@gmail.com", "IFAdmin123#")
        employeepage.ExpandIcon().click()
        employeepage.Menu().click()
        employeepage.EmployeeID().type('2')
        employeepage.EmployeeNameEN().type('Employee Name English')
        employeepage.EmployeeNameBN().type('Employee Name Bangla')
        employeepage.FatherName().type('Father Name')
        employeepage.MotherName().type('Mother Name')
        employeepage.NID().type('8526589636')
        employeepage.EmployeeType().click().type('স্থায়ী').type('{enter}')
        employeepage.Office().click().type('Head Office (Bn)').type('{enter}')
        employeepage.Designation().type('ডাইরেক্টরেট জেনারেল').type('{enter}')
        employeepage.Email().type('test@gmail.com')
        employeepage.MobileNo().type('01627558596')
        employeepage.Photo().selectFile('cypress//fixtures//mosque.jpg')
        cy.get('form').submit()
    })
})