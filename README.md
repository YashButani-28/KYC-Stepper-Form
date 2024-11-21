# KYC-Stepper-Form

=> Overview -----
This document outlines the requirements, workflow, test cases, and marking methods for the KYC Stepper Form demo. The demo is designed to showcase the KYC process through a step-by-step form, ensuring all details are captured and validated as per the Figma design specifications.

=> Requirements -----

1. Authentication:
User must log in to access the KYC form.
Login form should collect necessary credentials and validate them.

2. KYC Form Steps:
Step 1: Basic Details
Step 2: Terms Details
Step 3: User Details
Step 4: Address Details
Each step must include all fields as shown in the Figma design.
Form navigation should be sequential, with each step requiring completion before moving to the next.

3. Validation:
All form fields must have proper validation as specified in the Figma design.
Steps cannot be skipped unless the current step is completed.

4. Final Submission:
On completing Step 4, the user should be able to submit the form.
Post-submission, a 'View List' button should be enabled.

5. View and Edit:
View List Page Design You need to create your own and make sure it is compatible with the existing template design.
The View List page should display all details entered by the user in a step-wise manner.
Each step's details should be editable. Clicking on the edit button should redirect to the respective step for editing.
After editing, the user should be redirected back to the 'View List' page.

6. Download Options:
Provide options to download the KYC details in PDF and XML formats.

=> Working Flow -----

1. Login Page:
User lands on the login page and enters their details.
Upon successful login, the user is redirected to the KYC form (Step 1).

2. View List Page:
After form submission, the 'View List' button is enabled.
Clicking on 'View List' displays all the KYC details step-wise.
Each step has an edit button that allows the user to make changes.

3. Edit and Download:
User can edit details by navigating to the respective step via the 'Edit' button.
After editing, the user is redirected back to the 'View List' page.
The user can download their details in PDF or XML format using the provided buttons.
