# ApiV1.JobApi

All URIs are relative to *https://menadevs.com/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1JobsIdGet**](JobApi.md#apiV1JobsIdGet) | **GET** /api/v1/jobs/{id} | Retrieves a job

<a name="apiV1JobsIdGet"></a>
# **apiV1JobsIdGet**
> Jobs apiV1JobsIdGet(id)

Retrieves a job

### Example
```javascript
import ApiV1 from 'api_v1';
let defaultClient = ApiV1.ApiClient.instance;

// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new ApiV1.JobApi();
let id = "id_example"; // String | ID of a job that you wish to retrieve

apiInstance.apiV1JobsIdGet(id, (error, data, response) => {
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
 **id** | **String**| ID of a job that you wish to retrieve | 

### Return type

[**Jobs**](Jobs.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

