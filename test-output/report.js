$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddUser.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Add User Details feature",
  "description": "",
  "id": "adminlte-add-user-details-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "AdminLTE Add User Details Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in Add user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Add title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Add user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in Add user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Add user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Add user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Add user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Add user enters users details \"\u003cusername\u003e\" and \"\u003cmobile\u003e\" and \"\u003cuseremail\u003e\" and \"\u003cgender\u003e\" and \"\u003cstate\u003e\" and \"\u003cuserpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Add user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Add close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "username",
        "mobile",
        "useremail",
        "gender",
        "state",
        "userpassword"
      ],
      "line": 17,
      "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Sachin Wankhade",
        "12346789",
        "sachin@gmail.com",
        "Male",
        "Maharashtra",
        "098765"
      ],
      "line": 18,
      "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;2"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Nilesh Mulekar",
        "98754764",
        "nilesh@gmail.com",
        "Male",
        "Punjab",
        "124743"
      ],
      "line": 19,
      "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;3"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "kishor Bhagwat",
        "12386579",
        "kishor@gmail.com",
        "Male",
        "Maharashtra",
        "067765"
      ],
      "line": 20,
      "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;4"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456",
        "Janvhi",
        "18765789",
        "janu@gmail.com",
        "Female",
        "Maharashtra",
        "098765"
      ],
      "line": 21,
      "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22102935474,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "AdminLTE Add User Details Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in Add user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Add title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Add user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in Add user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Add user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Add user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Add user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Add user enters users details \"Sachin Wankhade\" and \"12346789\" and \"sachin@gmail.com\" and \"Male\" and \"Maharashtra\" and \"098765\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Add user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Add close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8747100335,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "duration": 16404028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 20
    },
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "AddUserStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 428930829,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 3207987827,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 24863065,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "duration": 777043643,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "duration": 1665307770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin Wankhade",
      "offset": 34
    },
    {
      "val": "12346789",
      "offset": 56
    },
    {
      "val": "sachin@gmail.com",
      "offset": 71
    },
    {
      "val": "Male",
      "offset": 94
    },
    {
      "val": "Maharashtra",
      "offset": 105
    },
    {
      "val": "098765",
      "offset": 123
    }
  ],
  "location": "AddUserStepDefinition.user_enters_users_details(String,String,String,String,String,String)"
});formatter.result({
  "duration": 2006586689,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 947838387,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2209456345,
  "status": "passed"
});
formatter.after({
  "duration": 736977334,
  "status": "passed"
});
fformatter.before({
  "duration": 43905497683,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "AdminLTE Add User Details Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in Add user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Add title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Add user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in Add user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Add user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Add user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Add user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Add user enters users details \"Nilesh Mulekar\" and \"98754764\" and \"nilesh@gmail.com\" and \"Male\" and \"Punjab\" and \"124743\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Add user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Add close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_already_on_login_page()"
});fformatter.result({
  "duration": 59923093124,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "duration": 38276065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 20
    },
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "AddUserStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 582408128,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_sign_in_button()"
});fformatter.result({
  "duration": 15385606650,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 26452956,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "duration": 535105431,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "duration": 283652420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nilesh Mulekar",
      "offset": 34
    },
    {
      "val": "98754764",
      "offset": 55
    },
    {
      "val": "nilesh@gmail.com",
      "offset": 70
    },
    {
      "val": "Male",
      "offset": 93
    },
    {
      "val": "Punjab",
      "offset": 104
    },
    {
      "val": "124743",
      "offset": 117
    }
  ],
  "location": "AddUserStepDefinition.user_enters_users_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 664786137,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 113184310,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2484349419,
  "status": "passed"
});
formatter.after({
  "duration": 1694951216,
  "status": "passed"
}forformatter.before({
  "duration": 24495895869,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "AdminLTE Add User Details Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in Add user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Add title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Add user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in Add user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Add user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Add user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Add user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Add user enters users details \"kishor Bhagwat\" and \"12386579\" and \"kishor@gmail.com\" and \"Male\" and \"Maharashtra\" and \"067765\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Add user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Add close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 11233875865,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "duration": 13356329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 20
    },
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "AddUserStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 303584728,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 6402968271,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 6886550,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "duration": 1015172454,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "duration": 287364544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kishor Bhagwat",
      "offset": 34
    },
    {
      "val": "12386579",
      "offset": 55
    },
    {
      "val": "kishor@gmail.com",
      "offset": 70
    },
    {
      "val": "Male",
      "offset": 93
    },
    {
      "val": "Maharashtra",
      "offset": 104
    },
    {
      "val": "067765",
      "offset": 122
    }
  ],
  "location": "AddUserStepDefinition.user_enters_users_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 652493603,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 106573971,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 2345321247,
  "status": "passed"
});
formatter.after({
  "duration": 1454440470,
  "status": "passedformatformatter.before({
  "duration": 23836416209,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "AdminLTE Add User Details Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "in Add user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Add title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Add user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "in Add user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Add user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Add user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Add user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Add user enters users details \"Janvhi\" and \"18765789\" and \"janu@gmail.com\" and \"Female\" and \"Maharashtra\" and \"098765\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Add user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Add close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 61118660797,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "duration": 7727234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 20
    },
    {
      "val": "123456",
      "offset": 42
    }
  ],
  "location": "AddUserStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 313300774,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "duration": 33092650048,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "duration": 14822170,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "duration": 13321259150,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "duration": 367104039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Janvhi",
      "offset": 34
    },
    {
      "val": "18765789",
      "offset": 47
    },
    {
      "val": "janu@gmail.com",
      "offset": 62
    },
    {
      "val": "Female",
      "offset": 83
    },
    {
      "val": "Maharashtra",
      "offset": 96
    },
    {
      "val": "098765",
      "offset": 114
    }
  ],
  "location": "AddUserStepDefinition.user_enters_users_details(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 646911807,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "duration": 97475051,
  "status": "passed"
});
formatter.match({
  "location": "AddUserStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 19547434110,
  "status": "passed"
});
formatter.after({
  "duration": 136903551707,
  "status": "passed"
});
formatter.uri("DataTableAproach.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Add User Details feature",
  "description": "",
  "id": "adminlte-add-user-details-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 120064864225,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir1172_1086982395}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49928}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 8411f685ca120fdd10ddf21b10fe6f80\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.adminLTE.qa.stepDefinitions.HooksStepDefinition.set_up_Environment(HooksStepDefinition.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "AdminLTE Add User Details using DataTable Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-using-datatable-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "in Table Approach user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Table Approach title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Table Approach user enters email and password",
  "rows": [
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 7
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "in Table Approach user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Table Approach user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Table Approach user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Table Approach user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Table Approach user enters users details",
  "rows": [
    {
      "cells": [
        "sachin wankhade",
        "123466544",
        "sachin@gmail.com",
        "Male",
        "Maharashtra",
        "sachin@123"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "in Table Approach user click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "in Table Approach close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_enters_users_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4315970523,
  "status": "passed"
});
formatter.uri("DataTableWithMapApproach.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Add User Details feature",
  "description": "",
  "id": "adminlte-add-user-details-feature",
  "keyword": "Feature"
});
cktrace: Backtrace:\n\tOrdinal0 [0x01507C93+1473683]\n\tOrdinal0 [0x0148ADB1+961969]\n\tOrdinal0 [0x014142E3+475875]\n\tOrdinal0 [0x013AF2C1+62145]\n\tOrdinal0 [0x013ABC77+48247]\n\tOrdinal0 [0x013C9149+168265]\n\tOrdinal0 [0x013C8D1D+167197]\n\tOrdinal0 [0x013C742B+160811]\n\tOrdinal0 [0x013B0AE6+68326]\n\tOrdinal0 [0x013B1BF0+72688]\n\tOrdinal0 [0x013B1B89+72585]\n\tOrdinal0 [0x014A4B77+1067895]\n\tGetHandleVerifier [0x015A6875+506677]\n\tGetHandleVerifier [0x015A6610+506064]\n\tGetHandleVerifier [0x015AD1B8+533624]\n\tGetHandleVerifier [0x015A704A+508682]\n\tOrdinal0 [0x0149C266+1032806]\n\tOrdinal0 [0x0149C0DF+1032415]\n\tOrdinal0 [0x014A6A8B+1075851]\n\tOrdinal0 [0x014A6BF3+1076211]\n\tOrdinal0 [0x014A5BA5+1072037]\n\tBaseThreadInitThunk [0x75F833CA+18]\n\tRtlInitializeExceptionChain [0x772B9ED2+99]\n\tRtlInitializeExceptionChain [0x772B9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$24(ProtocolHandshake.java:359)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:362)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:136)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:255)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:237)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:138)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:178)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:167)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat com.adminLTE.qa.stepDefinitions.AddUserUsingTableStepDefinition.user_is_already_on_login_page(AddUserUsingTableStepDefinition.java:28)\r\n\tat ✽.Given in Table Approach user is already on login page(DataTableAproach.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_enters_users_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.user_click_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserUsingTableStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 15143964285,
  "status": "passed"
});
formatter.uri("DataTableWithMapApproach.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Add User Details feature",
  "description": "",
  "id": "adminlte-add-user-details-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 101248911775,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir2384_410662224}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49949}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: fd71b054561a6db5d9067289a2479888\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.adminLTE.qa.stepDefinitions.HooksStepDefinition.set_up_Environment(HooksStepDefinition.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "AdminLTE Add User Details using DataTable Map Test Scenario",
  "description": "",
  "id": "adminlte-add-user-details-feature;adminlte-add-user-details-using-datatable-map-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "in Table Map Approach user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "in Table Map Approach title of the login page is AdminLTE Log in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "in Table Map Approach user enters email and password",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "in Table Map Approach user clicks on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "in Table Map Approach user is on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "in Table Map Approach user clicks on Users link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "in Table Map Approach user clicks on AddUser link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "in Table Map Approach user enters users details and click on submit",
  "rows": [
    {
      "cells": [
        "username",
        "mobile",
        "useremail",
        "gender",
        "state",
        "password"
      ],
      "line": 14
    },
    {
      "cells": [
        "sachin wankhade",
        "123466544",
        "sachin@gmail.com",
        "Male",
        "Maharashtra",
        "sachin@123"
      ],
      "line": 15
    },
    {
      "cells": [
        "Nilesh Mulekar",
        "98754764",
        "nilesh@gmail.com",
        "Male",
        "Punjab",
        "124743"
      ],
      "line": 16
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "in Table Map Approach close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.title_of_the_login_page_is_AdminLTE_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_clicks_on_sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_clicks_on_Users_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_clicks_on_AddUser_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.user_enters_users_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddUserDataTableMapStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 7078015738,
  "status": "passed"
});
formatter.uri("Hooks.feature");
formatter.feature({
  "line": 1,
  "name": "AdminLTE Hooks Feature",
  "description": "",
  "id": "adminlte-hooks-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 28618758297,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir7396_1868766758}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49981}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: 5a7325f193c224e7be9701a2711380d2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.adminLTE.qa.stepDefinitions.HooksStepDefinition.set_up_Environment(HooksStepDefinition.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 3,
  "name": "AdminLTE dashboard page and Hooks Concept Test",
  "description": "",
  "id": "adminlte-hooks-feature;adminlte-dashboard-page-and-hooks-concept-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "in app user is on dashboard page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "in app user checks dashboard page AdminLTE logo displayed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "in app user checks Users link is avilable",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_is_on_dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_checks_dashboard_page_AdminLTE_logo_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_checks_Users_link_is_avilable()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9559350478,
  "status": "passed"
});
formatter.before({
  "duration": 20699223796,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027SACHU-PC\u0027, ip: \u0027192.168.1.223\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d76.0.3809.68 (420c9498db8ce8fcd190a954d51297672c1515d5-refs/branch-heads/3809@{#864}), userDataDir\u003dC:\\Users\\SACHU\\AppData\\Local\\Temp\\scoped_dir7812_747453966}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50011}, acceptInsecureCerts\u003dfalse, browserVersion\u003d76.0.3809.132, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue}]\nSession ID: d2da64c1ca6819b71f2234c225ad476a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:370)\r\n\tat com.adminLTE.qa.stepDefinitions.HooksStepDefinition.set_up_Environment(HooksStepDefinition.java:30)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 10,
  "name": "AdminLTE Users page Test",
  "description": "",
  "id": "adminlte-hooks-feature;adminlte-users-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "in app user click on Users link",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "in app user check Users page title",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "in app user chek addUser link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_click_on_Users_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_check_Users_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HooksStepDefinition.in_app_user_chek_addUser_link_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2635273880,
  "status": "passed"
});
formatter.uri("TaggedHooks.feature");
formatter.feature({
  "line": 1,
  "name": "Test Tagged Hooks",
  "description": "",
  "id": "test-tagged-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 426588,
  "status": "passed"
});
