class Login
{
    textUserName=cy.get(':nth-child(3) > .form-control');
    textUserPassword=cy.get(':nth-child(4) > .form-control');
    btnLogin= cy.get('.mt-2').click()

    setUserName(username)
    {
       this.textUserName.clear().type(username);
    }
    
    setPassword(password)
    {
        this.textUserPassword.clear().type(password);
    }

    clickSubmit()
    {
        this.btnLogin.click();
    }
}

export default Login;