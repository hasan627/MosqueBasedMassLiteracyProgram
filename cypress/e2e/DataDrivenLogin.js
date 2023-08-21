describe('Data-Driven Test Example', () => {
    const testData = [
      { username: 'admin@gmail.com', password: 'IFAdmin123#' },
      { username: 'hasan.simec@gmail.com', password: '1234561' },
      { username: 'hasan@gmail.com', password: '1234561' },
      // Add more test data here
    ];
  

    it('should redirect users correctly', () => {
        cy.visit('/login');
        testData.forEach(data => {
            cy.get("[name='identifier']").clear().type(data.username);
            cy.get("[name='password']").clear().type(data.password);
            cy.get('.MuiButtonBase-root').click()
            cy.wait(2000)
      
         if(data.username=='admin@gmail.com' && data.password=='IFAdmin123#'){
            cy.get('.MuiAvatar-img').click()
            cy.get('.MuiPaper-root > .MuiList-root > :nth-child(3)').click()
         }else{
            cy.get('.error').should('have.text', "Email/Mobile Number or Password doesn't match")
            cy.get('.error').should('have.text', "user not found")
         }
      
         
        });
      });
      
      
   
  });
  
  