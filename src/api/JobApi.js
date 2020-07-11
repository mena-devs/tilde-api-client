/**
 * API V1
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from "../ApiClient";
import Jobs from '../model/Jobs';

/**
* Job service.
* @module api/JobApi
* @version v1
*/
export default class JobApi {

    /**
    * Constructs a new JobApi. 
    * @alias module:api/JobApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiV1JobsIdGet operation.
     * @callback module:api/JobApi~apiV1JobsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Jobs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a job
     * @param {module:api/JobApi~apiV1JobsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Jobs}
     */
    apiV1JobsIdGet(id, callback) {
      let postBody = null;

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Jobs;

      return this.apiClient.callApi(
        '/api/v1/jobs/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}