export default {

    get: function (url) {
        browser.get(url);
    },

    enterFirstNumber: function (firstNo) {
        element(by.model('first')).sendKeys(firstNo);
    },

    enterSecondNumber: function (secondNo) {
        element(by.model('second')).sendKeys(secondNo);
    },

    clickGo: function () {
        element(by.css('#gobutton')).click();
    },

    verifyResult: function (result) {
        let output = element(by.css('.ng-binding'));
        expect(output.getText()).toEqual(result);
    }
};