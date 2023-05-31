import Login from "../pageObject/Login"



describe('Login Tests', function () {

    beforeEach(()=>{
            cy.visit('/')
          })

          it('InValid login with wrong email text',()=>{
            cy.fixture('invalidlogin').then(function(data){
                const ln=new Login();
                ln.setUserName(data[0].username);
                ln.setPassword(data[0].password);
                ln.clickSubmit();
                cy.get('.Toastify__toast-body').should('have.text',"Cannot read property 'email' of undefined")
            })  
        })

          it('InValid login with wrong password text',()=>{
            cy.fixture('invalidlogin').then(function(data){
                const ln=new Login();
                ln.setUserName(data[1].username);
                ln.setPassword(data[1].password);
                ln.clickSubmit();
                cy.get('.Toastify__toast-body').should('have.text','Please check password.')
            })  
        })

       
        
    
      it('valid login text',()=>{
        cy.fixture('validLogin').then(function(data){
            const ln=new Login();
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            cy.get('.d-flex > ul > :nth-child(1)').should('be.visible',' Sequent Admin')
        })  
    })
})



describe('accontpage', function () {
    beforeEach(()=>{
    cy.visit('/')
    cy.login('K@gmail.com','K@123')
  })

  it('account screen visible',()=>{
    cy.get('.linkItemColor').click()
    cy.get('.table-col').should('be.visible')
})

it('invoice toggle off that time invoice toggle off',()=>{
  cy.get(':nth-child(10) > [width="15%"] > .tableUl > :nth-child(1) > .switch-outer > .switch > .slider').click()
})

it('account search dropdown text',()=>{
  cy.get('.business > #dropdownMenuButton').click()
        cy.get('.dropdown-menu > :nth-child(5)').click()
})

it('pms search dropdown text',()=>{
    cy.get('.pms > #dropdownMenuButton').click()
    cy.get('.open > .dropdown-menu > :nth-child(3)').click()
})

it('account view text',()=>{
  cy.get(':nth-child(10) > [width="15%"] > .tableUl > :nth-child(2) > .success').click()
  cy.get(':nth-child(1) > .inputModal').should('have.text', '33242')
})

it('add new account check',()=>{
        cy.get('#root > div > div.customWrapper > div > div > div > div > div.screen-header.justify-content-between.align-items-center.flex-wrap > div.d-flex.align-items-center.select-outer > button').click()
        cy.get('.form-cont-1').type('27964')
        cy.get('.bt-sub').click()
        cy.get(':nth-child(1) > .idDetail > :nth-child(2)').should('have.text', '27964')
})

it('schedule test case',()=>{
      cy.get('[title="Schedule"] > .sideitem').click()
      cy.get('.screen-body').should('be.visible')
}) 

it('schedule add new text',()=>
{  
  cy.get('[title="Schedule"] > .sideitem').click()    
  cy.get('.btn').click()
  cy.get(':nth-child(1) > .container-fluid > .card-body > :nth-child(1) > :nth-child(1) > .control-label').should('have.text','Search Client *')
})


it('schedule view text',()=>{
  cy.get('[title="Schedule"] > .sideitem').click()    
  cy.get(':nth-child(7) > [width="17%"] > .tableUl > :nth-child(2) > .success').click()
  cy.get(':nth-child(1) > .inputModal').should('have.text', '33199')
})


it('schedule edit text',()=>{
  cy.get('[title="Schedule"] > .sideitem').click()    
  cy.get(':nth-child(8) > [width="17%"] > .tableUl > :nth-child(3) > .edit').click();
  cy.get('.screen > .container-fluid > .card-body > :nth-child(3) > :nth-child(1) > .control-label').should('have.text', 'Schedule Job Range *')
})

})