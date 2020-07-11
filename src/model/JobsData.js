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
import JobsAttributes from './JobsAttributes';

/**
* The JobsData model module.
* @module model/JobsData
* @version v1
*/
export default class JobsData {
    /**
    * Constructs a new <code>JobsData</code>.
    * @alias module:model/JobsData
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>JobsData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobsData} obj Optional instance to populate.
    * @return {module:model/JobsData} The populated <code>JobsData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JobsData();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = JobsAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    'id' = undefined;
    /**
    * @member {module:model/JobsAttributes} attributes
    */
    'attributes' = undefined;




}
