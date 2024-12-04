import Pages from '../pages/Pages';

describe('Should Test List Component', () => {

    it('Should test navigate to Home', function () {  
        Pages.navigate();
        Pages.navigateProducts();
    });

    it('Should test navigate to About', function () {  
        Pages.navigate();
        Pages.navigateAbout();
    });

    it('Should test navigate to Home', function () {  
        Pages.navigate();
        Pages.navigateHome();
    });

    it('Should test navigate to Register', function () {  
        Pages.navigate();
        Pages.navigateRegister();
    });

    it('Should test navigate to Login', function () {  
        Pages.navigate();
        Pages.navigateLogin();
    });
});