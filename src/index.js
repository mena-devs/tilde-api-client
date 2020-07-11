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

import ApiClient from './ApiClient';
import ErrorsMap from './model/ErrorsMap';
import ErrorsObject from './model/ErrorsObject';
import Invitation from './model/Invitation';
import InvitationInvitation from './model/InvitationInvitation';
import Jobs from './model/Jobs';
import JobsAttributes from './model/JobsAttributes';
import JobsData from './model/JobsData';
import JobsMeta from './model/JobsMeta';
import JobsPagination from './model/JobsPagination';
import User from './model/User';
import Users from './model/Users';
import UsersAttributes from './model/UsersAttributes';
import UsersData from './model/UsersData';
import InvitationsApi from './api/InvitationsApi';
import JobApi from './api/JobApi';
import JobsApi from './api/JobsApi';
import UserApi from './api/UserApi';
import UsersApi from './api/UsersApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ApiV1 = require('index'); // See note below*.
* var xxxSvc = new ApiV1.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ApiV1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ApiV1.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ApiV1.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ErrorsMap model constructor.
     * @property {module:model/ErrorsMap}
     */
    ErrorsMap,

    /**
     * The ErrorsObject model constructor.
     * @property {module:model/ErrorsObject}
     */
    ErrorsObject,

    /**
     * The Invitation model constructor.
     * @property {module:model/Invitation}
     */
    Invitation,

    /**
     * The InvitationInvitation model constructor.
     * @property {module:model/InvitationInvitation}
     */
    InvitationInvitation,

    /**
     * The Jobs model constructor.
     * @property {module:model/Jobs}
     */
    Jobs,

    /**
     * The JobsAttributes model constructor.
     * @property {module:model/JobsAttributes}
     */
    JobsAttributes,

    /**
     * The JobsData model constructor.
     * @property {module:model/JobsData}
     */
    JobsData,

    /**
     * The JobsMeta model constructor.
     * @property {module:model/JobsMeta}
     */
    JobsMeta,

    /**
     * The JobsPagination model constructor.
     * @property {module:model/JobsPagination}
     */
    JobsPagination,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The Users model constructor.
     * @property {module:model/Users}
     */
    Users,

    /**
     * The UsersAttributes model constructor.
     * @property {module:model/UsersAttributes}
     */
    UsersAttributes,

    /**
     * The UsersData model constructor.
     * @property {module:model/UsersData}
     */
    UsersData,

    /**
    * The InvitationsApi service constructor.
    * @property {module:api/InvitationsApi}
    */
    InvitationsApi,

    /**
    * The JobApi service constructor.
    * @property {module:api/JobApi}
    */
    JobApi,

    /**
    * The JobsApi service constructor.
    * @property {module:api/JobsApi}
    */
    JobsApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
