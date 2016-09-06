$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Registration.feature");
formatter.feature({
  "line": 2,
  "name": "User Registration",
  "description": "I would like to successfully register",
  "id": "user-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.before({
  "duration": 6435233586,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1668612462,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that registration is a successful",
  "description": "",
  "id": "user-registration;verify-that-registration-is-a-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I fill field with the following data",
  "rows": [
    {
      "cells": [
        "field",
        "data"
      ],
      "line": 10
    },
    {
      "cells": [
        "first_name",
        "Mike"
      ],
      "line": 11
    },
    {
      "cells": [
        "last_name",
        "Medis"
      ],
      "line": 12
    },
    {
      "cells": [
        "phone_number",
        "9045242217"
      ],
      "line": 13
    },
    {
      "cells": [
        "username",
        "MikeMedisThe"
      ],
      "line": 14
    },
    {
      "cells": [
        "e_mail",
        "mike@mikemedis.tech"
      ],
      "line": 15
    },
    {
      "cells": [
        "description",
        "@sampledesc"
      ],
      "line": 16
    },
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 17
    },
    {
      "cells": [
        "confirm_password",
        "password"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be registered successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.i_fill_field_with_the_following_data(DataTable)"
});
formatter.result({
  "duration": 11458188110,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 1399105788,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_should_be_registered_successfully()"
});
formatter.result({
  "duration": 103007684,
  "status": "passed"
});
formatter.after({
  "duration": 171397712,
  "status": "passed"
});
formatter.before({
  "duration": 6694915234,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 2190808329,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid Registration Empty Field Message",
  "description": "",
  "id": "user-registration;invalid-registration-empty-field-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I leave field empty with no data",
  "rows": [
    {
      "cells": [
        "field",
        "data"
      ],
      "line": 24
    },
    {
      "cells": [
        "first_name",
        ""
      ],
      "line": 25
    },
    {
      "cells": [
        "last_name",
        ""
      ],
      "line": 26
    },
    {
      "cells": [
        "phone_number",
        ""
      ],
      "line": 27
    },
    {
      "cells": [
        "username",
        ""
      ],
      "line": 28
    },
    {
      "cells": [
        "e_mail",
        ""
      ],
      "line": 29
    },
    {
      "cells": [
        "password",
        ""
      ],
      "line": 30
    },
    {
      "cells": [
        "confirm_password",
        ""
      ],
      "line": 31
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should receive field required \"* This field is required\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinitions.i_leave_field_empty_with_no_data(DataTable)"
});
formatter.result({
  "duration": 3631065469,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 366702553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "* This field is required",
      "offset": 33
    }
  ],
  "location": "StepsDefinitions.i_should_receive_message(String)"
});
formatter.result({
  "duration": 226121681,
  "status": "passed"
});
formatter.after({
  "duration": 165226949,
  "status": "passed"
});
formatter.before({
  "duration": 6391079161,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1097839331,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Invalid phone_number",
  "description": "",
  "id": "user-registration;invalid-phone-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I enter 000-6786 in the phone_number input field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should receive phone \"* Minimum 10 Digits starting with Country Code\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "000",
      "offset": 8
    },
    {
      "val": "6786",
      "offset": 12
    }
  ],
  "location": "StepsDefinitions.i_enter_in_the_phone_number_input_field(int,int)"
});
formatter.result({
  "duration": 441981610,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 470643663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "* Minimum 10 Digits starting with Country Code",
      "offset": 24
    }
  ],
  "location": "StepsDefinitions.phoneErrorMessage(String)"
});
formatter.result({
  "duration": 241169372,
  "status": "passed"
});
formatter.after({
  "duration": 159270718,
  "status": "passed"
});
formatter.before({
  "duration": 6873286179,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1082157509,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Invalid E-mail",
  "description": "",
  "id": "user-registration;invalid-e-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I enter \"mikemedis@mikemedis\" in the e_mail input field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should receive email \"* Invalid email address\"\t message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mikemedis@mikemedis",
      "offset": 9
    }
  ],
  "location": "StepsDefinitions.i_enter_in_the_e_mail_input_field(String)"
});
formatter.result({
  "duration": 462521985,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 441403349,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 161505954,
  "status": "passed"
});
formatter.before({
  "duration": 6972112504,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1029929364,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Invalid Password",
  "description": "",
  "id": "user-registration;invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I enter \"passWod\" into the password input field",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should receive short password \"* Minimum 8 characters required\" message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 166454567,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "Mismatching Passwords",
  "description": "",
  "id": "user-registration;mismatching-passwords",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "I enter \"\u003cpassword\u003e\" and \"\u003cconfirm_password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should receive mismatched passwords \"* Fields do not match\" message",
  "keyword": "Then "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "user-registration;mismatching-passwords;",
  "rows": [
    {
      "cells": [
        "password",
        "confirm_password"
      ],
      "line": 56,
      "id": "user-registration;mismatching-passwords;;1"
    },
    {
      "cells": [
        "pa$$word",
        "tHis$isMyPa$$"
      ],
      "line": 57,
      "id": "user-registration;mismatching-passwords;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6541338219,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1117352298,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Mismatching Passwords",
  "description": "",
  "id": "user-registration;mismatching-passwords;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "I enter \"pa$$word\" and \"tHis$isMyPa$$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should receive mismatched passwords \"* Fields do not match\" message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "pa$$word",
      "offset": 9
    },
    {
      "val": "tHis$isMyPa$$",
      "offset": 24
    }
  ],
  "location": "StepsDefinitions.i_enter_and(String,String)"
});
formatter.result({
  "duration": 1141739585,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 428598907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "* Fields do not match",
      "offset": 39
    }
  ],
  "location": "StepsDefinitions.password_message(String)"
});
formatter.result({
  "duration": 219186143,
  "status": "passed"
});
formatter.after({
  "duration": 168868717,
  "status": "passed"
});
formatter.before({
  "duration": 6368481415,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1342210458,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Duplicate Username Error Message",
  "description": "",
  "id": "user-registration;duplicate-username-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "a user has successfully registered with \"MMedis\" as a username",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I enter valid data on the page in each field",
  "rows": [
    {
      "cells": [
        "field",
        "data"
      ],
      "line": 62
    },
    {
      "cells": [
        "first_name",
        "Mike"
      ],
      "line": 63
    },
    {
      "cells": [
        "last_name",
        "Medis"
      ],
      "line": 64
    },
    {
      "cells": [
        "phone_number",
        "9045242217"
      ],
      "line": 65
    },
    {
      "cells": [
        "username",
        "MikeMedis12"
      ],
      "line": 66
    },
    {
      "cells": [
        "e_mail",
        "mike@mikemedis.tech"
      ],
      "line": 67
    },
    {
      "cells": [
        "description",
        "@sampledesc"
      ],
      "line": 68
    },
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 69
    },
    {
      "cells": [
        "confirm_password",
        "password"
      ],
      "line": 70
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I should receive username message \"Error: Username already exists\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "MMedis",
      "offset": 41
    }
  ],
  "location": "StepsDefinitions.a_user_has_successfully_registered_with_as_a_username(String)"
});
formatter.result({
  "duration": 109461524,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_enter_valid_data_on_the_page_in_each_field(DataTable)"
});
formatter.result({
  "duration": 11416622377,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 1572117282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: Username already exists",
      "offset": 35
    }
  ],
  "location": "StepsDefinitions.i_should_receive(String)"
});
formatter.result({
  "duration": 217629483,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Error: Username already exists]\u003e but was:\u003c[]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\n\tat com.medis.bdd.StepsDefinitions.i_should_receive(StepsDefinitions.java:247)\n\tat ✽.Then I should receive username message \"Error: Username already exists\"(Registration.feature:72)\n",
  "status": "failed"
});
formatter.after({
  "duration": 157347347,
  "status": "passed"
});
formatter.before({
  "duration": 6202706239,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am a new user on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepsDefinitions.i_am_a_new_user_on_the_registration_page()"
});
formatter.result({
  "duration": 1569193756,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Duplicate E-mail Error Message",
  "description": "",
  "id": "user-registration;duplicate-e-mail-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "a user has successfully registered with \"email@email.com\" as a E-mail",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I register with valid data on the page in each field",
  "rows": [
    {
      "cells": [
        "field",
        "data"
      ],
      "line": 77
    },
    {
      "cells": [
        "first_name",
        "Mike"
      ],
      "line": 78
    },
    {
      "cells": [
        "last_name",
        "Medis"
      ],
      "line": 79
    },
    {
      "cells": [
        "phone_number",
        "9045242217"
      ],
      "line": 80
    },
    {
      "cells": [
        "username",
        "MikeMedis"
      ],
      "line": 81
    },
    {
      "cells": [
        "e_mail",
        "email@email.com"
      ],
      "line": 82
    },
    {
      "cells": [
        "description",
        "@sampledesc"
      ],
      "line": 83
    },
    {
      "cells": [
        "password",
        "password"
      ],
      "line": 84
    },
    {
      "cells": [
        "confirm_password",
        "password"
      ],
      "line": 85
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "I should receive email message \"Error: E-mail address already exists\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "email@email.com",
      "offset": 41
    }
  ],
  "location": "StepsDefinitions.a_user_has_successfully_registered_with_as_a_E_mail(String)"
});
formatter.result({
  "duration": 109837816,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_register_with_valid_data_on_the_page_in_each_field(DataTable)"
});
formatter.result({
  "duration": 9579310119,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 1516859074,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 155978020,
  "status": "passed"
});
});