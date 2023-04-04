describe('Login Test with fixtures', function () {
    //part of before hook
    before(function(){
       //access fixture data
       cy.fixture('example').then(function(signInData){
          this.signInData = signInData
       })
    })
    // test case
    it('data driven testing.', function (){
       // launch URL
       cy.visit("http://3.109.139.226:3006/admin")
       //data driven from fixture
       cy.get("[name='identifier']")
       .type(this.signInData.email)
       cy.get("[name='password']").type(this.signInData.password)
       cy.get('.MuiButtonBase-root').click()
       //expect(cy.get('.jss9 > img')).exist
       cy.get('.jss9 > img').should('exist')
       cy.url().should('eq', 'http://3.109.139.226:3006/admin')
    });
 });