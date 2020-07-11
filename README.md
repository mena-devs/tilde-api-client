# api_v1

ApiV1 - JavaScript client for api_v1
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: v1
- Package version: v1
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_v1 --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiV1 = require('api_v1');
var defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new ApiV1.InvitationsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.apiV1InvitationsGet(callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://menadevs.com/api/v1/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiV1.InvitationsApi* | [**apiV1InvitationsGet**](docs/InvitationsApi.md#apiV1InvitationsGet) | **GET** /api/v1/invitations | Invitation
*ApiV1.InvitationsApi* | [**createNewInvitation**](docs/InvitationsApi.md#createNewInvitation) | **POST** /api/v1/invitations | Invitation
*ApiV1.JobApi* | [**apiV1JobsIdGet**](docs/JobApi.md#apiV1JobsIdGet) | **GET** /api/v1/jobs/{id} | Retrieves a job
*ApiV1.JobsApi* | [**apiV1JobsGet**](docs/JobsApi.md#apiV1JobsGet) | **GET** /api/v1/jobs | All jobs
*ApiV1.UserApi* | [**apiV1UsersIdGet**](docs/UserApi.md#apiV1UsersIdGet) | **GET** /api/v1/users/{id} | Retrieves a user
*ApiV1.UserApi* | [**apiV1UsersSearchGet**](docs/UserApi.md#apiV1UsersSearchGet) | **GET** /api/v1/users/search | Searches for a user using an incorrect query parameter
*ApiV1.UsersApi* | [**apiV1UsersGet**](docs/UsersApi.md#apiV1UsersGet) | **GET** /api/v1/users | All users

## Documentation for Models

 - [ApiV1.ErrorsMap](docs/ErrorsMap.md)
 - [ApiV1.ErrorsObject](docs/ErrorsObject.md)
 - [ApiV1.Invitation](docs/Invitation.md)
 - [ApiV1.InvitationInvitation](docs/InvitationInvitation.md)
 - [ApiV1.Jobs](docs/Jobs.md)
 - [ApiV1.JobsAttributes](docs/JobsAttributes.md)
 - [ApiV1.JobsData](docs/JobsData.md)
 - [ApiV1.JobsMeta](docs/JobsMeta.md)
 - [ApiV1.JobsPagination](docs/JobsPagination.md)
 - [ApiV1.User](docs/User.md)
 - [ApiV1.Users](docs/Users.md)
 - [ApiV1.UsersAttributes](docs/UsersAttributes.md)
 - [ApiV1.UsersData](docs/UsersData.md)

## Documentation for Authorization


### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
