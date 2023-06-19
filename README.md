## Password Generator

Click [here](https://jenstem.github.io/horiseon_seo_web_page/) to see the website.

## Description

As a current student, I wanted to create a password generator with or without certain criteria according to what the user picks.  I accomplished this by creating prompts that allow the user to pick the length of the password between 8 - 128 characters, if they would like lower case, upper case, numberic or special characters in their password.  If the user picks a password length of less than 8 or greater than 128 characters, they are not allowed to move forward to generate a password.

You can navigate the site by clicking on the red "Generate Password" button.  Clicking on this button will start the prompts of picking the length of the password, and any additional characters the user would like in their password.  Then the password is generated in the box provided.

## User Story

AS AN employee with access to sensitive data\
I WANT to randomly generate a password that meets certain criteria\
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

GIVEN I need a new, secure password\
WHEN I click the button to generate a password\
THEN I am presented with a series of prompts for password criteria\
WHEN prompted for password criteria\
THEN I select which criteria to include in the password\
WHEN prompted for the length of the password\
THEN I choose a length of at least 8 characters and no more than 128 characters\
WHEN asked for character types to include in the password\
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters\
WHEN I answer each prompt\
THEN my input should be validated and at least one character type should be selected\
WHEN all prompts are answered\
THEN a password is generated that matches the selected criteria\
WHEN the password is generated\
THEN the password is either displayed in an alert or written to the page

## Screenshots:

![](https://github.com/jenstem/Password-Generator/blob/main/assets/passwordlength.png)
*This is a screenshot of the Password Generator asking for the password length*
##

![](https://github.com/jenstem/Password-Generator/blob/main/assets/prompts.png)
*This is a screenshot of ad additional prompts*
##

![](https://github.com/jenstem/Password-Generator/blob/main/assets/passwordgen.png)
*This is a screenshot of the password once it is generated*
##

## Notes:

I received help from a tutor, [David Elutilo](https://calendly.com/fsf-tutor-team/david-elutilo?month=2023-06) for lines 30, 54, and 59.