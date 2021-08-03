pushd "%~dp0"
set PATH
del /s /q allure-report
del /s /q allure-results
npm test