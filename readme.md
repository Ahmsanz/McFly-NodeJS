## Description

This is a small CRUD API built with the sole purpose of fullfilling the technical test asked by the Kubide team. 

The schema-to-be has been mocked using javascript classes, and some of the methods in the controller call to them and refer to hardcoded data that would be, normally, stored in a database. 

You can install all the needed dependencies by calling **npm i**, and run it locally with **npm run local**.

### Unit Testing

Some unit tests have been provided using **Mocha** and **Chai** (with http-chai) as testing libraries.

*Some of the tests are __expected to fail__, since there is no database implemented*

You might run the provided test just with **npm run test**.
