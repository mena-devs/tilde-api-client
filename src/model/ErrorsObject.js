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

import ApiClient from '../ApiClient';
import ErrorsMap from './ErrorsMap';

/**
* The ErrorsObject model module.
* @module model/ErrorsObject
* @version v1
*/
export default class ErrorsObject {
    /**
    * Constructs a new <code>ErrorsObject</code>.
    * @alias module:model/ErrorsObject
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>ErrorsObject</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ErrorsObject} obj Optional instance to populate.
    * @return {module:model/ErrorsObject} The populated <code>ErrorsObject</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorsObject();
                        
            
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ErrorsMap.constructFromObject(data['errors']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/ErrorsMap} errors
    */
    'errors' = undefined;




}
