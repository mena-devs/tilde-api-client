# ApiV1.InvitationsApi

All URIs are relative to *https://menadevs.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1InvitationsGet**](InvitationsApi.md#apiV1InvitationsGet) | **GET** /api/v1/invitations | Invitation
[**createNewInvitation**](InvitationsApi.md#createNewInvitation) | **POST** /api/v1/invitations | Invitation

<a name="apiV1InvitationsGet"></a>
# **apiV1InvitationsGet**
> apiV1InvitationsGet()

Invitation

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.InvitationsApi();
apiInstance.apiV1InvitationsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createNewInvitation"></a>
# **createNewInvitation**
> createNewInvitation(opts)

Invitation

Create a new invitation to join Slack Group

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.InvitationsApi();
let opts = { 
  'body': new ApiV1.Invitation() // Invitation | 
};
apiInstance.createNewInvitation(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Invitation**](Invitation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

