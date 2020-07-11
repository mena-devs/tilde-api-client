# ApiV1.UserApi

All URIs are relative to *https://menadevs.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1UsersIdGet**](UserApi.md#apiV1UsersIdGet) | **GET** /api/v1/users/{id} | Retrieves a user
[**apiV1UsersSearchGet**](UserApi.md#apiV1UsersSearchGet) | **GET** /api/v1/users/search | Searches for a user using an incorrect query parameter

<a name="apiV1UsersIdGet"></a>
# **apiV1UsersIdGet**
> User apiV1UsersIdGet(id)

Retrieves a user

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.UserApi();
let id = "id_example"; // String | ID of a user that you wish to retrieve

apiInstance.apiV1UsersIdGet(id, (error, data, response) => {
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
 **id** | **String**| ID of a user that you wish to retrieve | 

### Return type

[**User**](User.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="apiV1UsersSearchGet"></a>
# **apiV1UsersSearchGet**
> Users apiV1UsersSearchGet(opts)

Searches for a user using an incorrect query parameter

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.UserApi();
let opts = { 
  'query': "query_example" // String | search query
};
apiInstance.apiV1UsersSearchGet(opts, (error, data, response) => {
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
 **query** | **String**| search query | [optional] 

### Return type

[**Users**](Users.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

