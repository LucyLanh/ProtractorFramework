import homepage from '../pages/homepages';

describe('demo calculator test', function () {

    it('addition tests', function () {
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');

        //element(by.model('second')).sendKeys('2');
        homepage.enterSecondNumber('3');

        // element(by.css('[ng-click="doAddition()"]')).click();
        //element(by.css('button')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding', '6'));
        // expect(result.getText()).toEqual('6');  

        homepage.verifyResult('5');

        browser.sleep(2000);


    });

});