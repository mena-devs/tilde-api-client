# ApiV1.JobsApi

All URIs are relative to *https://menadevs.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1JobsGet**](JobsApi.md#apiV1JobsGet) | **GET** /api/v1/jobs | All jobs

<a name="apiV1JobsGet"></a>
# **apiV1JobsGet**
> Jobs apiV1JobsGet(opts)

All jobs

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.JobsApi();
let opts = { 
  'pageNumber': 56 // Number | Allow navigation through a large set of objects
};
apiInstance.apiV1JobsGet(opts, (error, data, response) => {
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

[**Jobs**](Jobs.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

