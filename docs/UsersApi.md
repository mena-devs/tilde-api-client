# ApiV1.UsersApi

All URIs are relative to *https://menadevs.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1UsersGet**](UsersApi.md#apiV1UsersGet) | **GET** /api/v1/users | All users

<a name="apiV1UsersGet"></a>
# **apiV1UsersGet**
> Users apiV1UsersGet(opts)

All users

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.UsersApi();
let opts = { 
  'pageNumber': 56 // Number | Allow navigation through a large set of objects
};
apiInstance.apiV1UsersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | **Number**| Allow navigation through a large set of objects | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

