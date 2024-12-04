import LoginPage from '../pages/LoginPage';

describe('Logon test suite', () => {
  beforeEach(function () { 
    cy.fixture('data').as('data')
  });
    
  it('Should test a successful login', function () { 
    LoginPage.navigate();
    LoginPage.fillEmail(this.data.email); 
    LoginPage.fillPassword(this.data.password);
    LoginPage.submit();
    cy.wait(2000);
    LoginPage.sucessfulMessage().contains('Login feito com sucesso!');
  });

  it('Should test a failed login', function () { 
    LoginPage.navigate();
    LoginPage.fillEmail(this.data.email); 
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submit();
    cy.wait(2000);
    LoginPage.errorMessage().contains('Senha ou E-mail Invalido.');


  });
});
