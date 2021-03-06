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
  "duration": 8786812264,
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
  "duration": 4795096782,
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
  "duration": 14855243366,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 1874804657,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_should_be_registered_successfully()"
});
formatter.result({
  "duration": 142274492,
  "status": "passed"
});
formatter.after({
  "duration": 259702394,
  "status": "passed"
});
formatter.before({
  "duration": 6813063882,
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
  "duration": 3320501856,
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
  "duration": 4187423650,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 412473597,
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
  "duration": 299678947,
  "status": "passed"
});
formatter.after({
  "duration": 180332328,
  "status": "passed"
});
formatter.before({
  "duration": 8638203084,
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
  "duration": 1563116218,
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
  "duration": 505631929,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 630969527,
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
  "duration": 354961043,
  "status": "passed"
});
formatter.after({
  "duration": 184006286,
  "status": "passed"
});
formatter.before({
  "duration": 8173878987,
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
  "duration": 1532875572,
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
  "duration": 651532925,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 647496714,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 248988346,
  "status": "passed"
});
formatter.before({
  "duration": 8013480187,
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
  "duration": 1623188354,
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
  "duration": 188590143,
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
  "duration": 8988367924,
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
  "duration": 1636105030,
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
  "duration": 1309776795,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 562658223,
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
  "duration": 331594509,
  "status": "passed"
});
formatter.after({
  "duration": 186840646,
  "status": "passed"
});
formatter.before({
  "duration": 8752309456,
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
  "duration": 1488707212,
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
  "duration": 336124358,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_enter_valid_data_on_the_page_in_each_field(DataTable)"
});
formatter.result({
  "duration": 14695281238,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 1925019346,
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
  "duration": 275563121,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Error: Username already exists]\u003e but was:\u003c[]\u003e\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\n\tat com.medis.bdd.StepsDefinitions.i_should_receive(StepsDefinitions.java:248)\n\tat ✽.Then I should receive username message \"Error: Username already exists\"(Registration.feature:72)\n",
  "status": "failed"
});
formatter.after({
  "duration": 185303006,
  "status": "passed"
});
formatter.before({
  "duration": 7946528954,
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
  "duration": 2792945477,
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
  "duration": 182180061,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_register_with_valid_data_on_the_page_in_each_field(DataTable)"
});
formatter.result({
  "duration": 11943931757,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinitions.i_click_the_submit_button()"
});
formatter.result({
  "duration": 2104116072,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 238599990,
  "status": "passed"
});
});