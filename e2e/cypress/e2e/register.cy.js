import RegisterPage from '../pages/RegisterPage';

describe('Register test suite', () => {
  beforeEach(function () { 
    cy.fixture('data').as('data')
  });
    
  it('Should test a successful Register', function () { 
    RegisterPage.navigate();
    RegisterPage.fillName(this.data.name);
    RegisterPage.fillPhone(this.data.phone);
    RegisterPage.fillEmail(this.data.newEmail); 
    RegisterPage.fillPassword(this.data.password);
    RegisterPage.fillConfirmPassword(this.data.password);
    RegisterPage.submit();
    cy.wait(2000);
    RegisterPage.sucessfulMessage().contains('Cadastro feito com sucesso!');
  });

  it('Should test a existing email', function () { 
    RegisterPage.navigate();
    RegisterPage.fillName(this.data.name);
    RegisterPage.fillPhone(this.data.phone);
    RegisterPage.fillEmail(this.data.email); 
    RegisterPage.fillPassword(this.data.password);
    RegisterPage.fillConfirmPassword(this.data.password);
    RegisterPage.submit();
    cy.wait(2000);
    RegisterPage.errorMessage().contains('Este e-mail já está em uso. Tente fazer login ou use outro e-mail.');
  });

  it('Should test a wrong password confirm', function () { 
    RegisterPage.navigate();
    RegisterPage.fillName(this.data.name);
    RegisterPage.fillPhone(this.data.phone);
    RegisterPage.fillEmail(this.data.email); 
    RegisterPage.fillPassword('wrongpassword');
    RegisterPage.fillConfirmPassword(this.data.password);
    RegisterPage.submit();
    cy.wait(2000);
    RegisterPage.errorPassword().contains('As senhas não coincidem.');
});
});
