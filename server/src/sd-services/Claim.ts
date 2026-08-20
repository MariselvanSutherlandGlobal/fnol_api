// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import cookieParser from 'cookie-parser'; //_splitter_
import { dirname } from 'path'; //_splitter_
import { fileURLToPath } from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class Claim {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'Claim';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new Claim(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_Claim_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Claim');
    //appendnew_flow_Claim_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: Claim');

    this.app['get'](
      `${this.serviceBasePath}/claims/:claimId`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.prepareClaimLookup(bh, parentSpanInst);
          //appendnew_next_sd_8aHK2gb3vy0gnYQB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8aHK2gb3vy0gnYQB');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/master-data`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.getFnolMasterDataCallService(bh, parentSpanInst);
          //appendnew_next_sd_AkPstqgszKFA1tfV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_AkPstqgszKFA1tfV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claims`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.createClaimValidateRequest(bh, parentSpanInst);
          //appendnew_next_sd_FkE3S1Ma4Jxu6ySE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_FkE3S1Ma4Jxu6ySE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/claims/decision`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.requestValidationScript(bh, parentSpanInst);
          //appendnew_next_sd_4oziEIOhSVrDQObP
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_4oziEIOhSVrDQObP');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Claim_HttpIn
  }
  //   service flows_Claim

  async getFnolMasterDataInternal(
    parentSpanInst,
    masterDataResponse: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'getFnolMasterDataInternal',
      parentSpanInst
    );
    let bh: any = {
      input: {
        masterDataResponse,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareMasterDataRequests(bh, parentSpanInst);
      //appendnew_next_getFnolMasterDataInternal
      return (
        // formatting output variables
        {
          input: {
            masterDataResponse: bh.input.masterDataResponse,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TwPyl5c2xuiGMbUf',
        spanInst,
        'getFnolMasterDataInternal'
      );
    }
  }
  //appendnew_flow_Claim_start

  async prepareClaimLookup(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareClaimLookup',
      parentSpanInst
    );
    try {
      const claimId = bh.input.params?.claimId;

      if (!claimId) {
        bh.local.isValid = false;
        bh.local.responseStatus = 400;

        bh.local.response = {
          success: false,
          message: 'claimId is required',
        };
      } else {
        bh.local.isValid = true;
        bh.local.claimId = claimId;

        bh.local.claimSql = `
        SELECT
            c.id,
            c.claim_number,
            c.policy_id,
            c.claimant_type,
            c.loss_date_time,
            c.loss_location,
            c.loss_type,
            c.loss_description,
            c.driver_name,
            c.driver_licence_status,
            c.police_report_available,
            c.police_report_reference,
            c.estimated_loss_amount,
            c.currency,
            c.vehicle_drivable,
            c.third_party_involved,
            c.injury_involved,
            c.preferred_contact_method,
            c.preferred_contact_value,
            c.status,
            c.created_by,
            c.created_at,
            c.updated_at,

            p.policy_number,
            p.customer_id,
            p.policy_status,
            p.policy_start_date,
            p.policy_end_date,
            p.insured_name,
            p.vehicle_registration,
            p.vehicle_make,
            p.vehicle_model,
            p.vehicle_year,
            p.coverage_type,
            p.covered_perils,
            p.excess_amount,
            p.sum_insured

        FROM claims c

        INNER JOIN policy_master p
            ON p.id = c.policy_id

        WHERE c.id = $1

        LIMIT 1
    `;

        bh.local.claimSqlParams = [claimId];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimiIdValidorNot(bh, parentSpanInst);
      //appendnew_next_prepareClaimLookup
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3n8aBlsrKvXmNyhr',
        spanInst,
        'prepareClaimLookup'
      );
    }
  }

  async claimiIdValidorNot(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimiIdValidorNot',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.claimIdValidError(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.getClaimSql(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OuNgMwEugkC6hVv0',
        spanInst,
        'claimiIdValidorNot'
      );
    }
  }

  async claimIdValidError(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zGFb7OQilrmpR9zQ');
    }
  }

  async getClaimSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getClaimSql',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.claimSqlParams;
      params = params ? params : [];
      bh.local.claimResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.claimSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.validateClaimResult(bh, parentSpanInst);
      //appendnew_next_getClaimSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wcRjikbUDR3TEio0',
        spanInst,
        'getClaimSql'
      );
    }
  }

  async validateClaimResult(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'validateClaimResult',
      parentSpanInst
    );
    try {
      const result = bh.local.claimResult || [];

      if (!Array.isArray(result) || result.length === 0) {
        bh.local.claimFound = false;

        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,
          message: 'Claim not found',
          claimId: bh.local.claimId,
        };
      } else {
        const data = result[0];

        bh.local.claimFound = true;

        bh.local.claim = {
          id: Number(data.id),
          claimNumber: data.claim_number,
          policyId: Number(data.policy_id),
          claimantType: data.claimant_type,
          lossDateTime: data.loss_date_time,
          lossLocation: data.loss_location,
          lossType: data.loss_type,
          lossDescription: data.loss_description,
          driverName: data.driver_name,
          driverLicenceStatus: data.driver_licence_status,
          policeReportAvailable: data.police_report_available,
          policeReportReference: data.police_report_reference,
          estimatedLossAmount: data.estimated_loss_amount,
          currency: data.currency,
          vehicleDrivable: data.vehicle_drivable,
          thirdPartyInvolved: data.third_party_involved,
          injuryInvolved: data.injury_involved,
          preferredContactMethod: data.preferred_contact_method,
          preferredContactValue: data.preferred_contact_value,
          status: data.status,
          createdBy: data.created_by,
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        };

        bh.local.policy = {
          id: Number(data.policy_id),
          policyNumber: data.policy_number,
          customerId: data.customer_id,
          policyStatus: data.policy_status,
          policyStartDate: data.policy_start_date,
          policyEndDate: data.policy_end_date,
          insuredName: data.insured_name,
          vehicleRegistration: data.vehicle_registration,
          vehicleMake: data.vehicle_make,
          vehicleModel: data.vehicle_model,
          vehicleYear: data.vehicle_year,
          coverageType: data.coverage_type,
          coveredPerils: data.covered_perils,
          excessAmount: data.excess_amount,
          sumInsured: data.sum_insured,
        };
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eHmTgVvZMigHV2Cc(bh, parentSpanInst);
      //appendnew_next_validateClaimResult
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w8iAkzwSCITmtUCM',
        spanInst,
        'validateClaimResult'
      );
    }
  }

  async sd_eHmTgVvZMigHV2Cc(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eHmTgVvZMigHV2Cc',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.claimFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.claimNotFoundError(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.claimFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareClaimResponse(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eHmTgVvZMigHV2Cc',
        spanInst,
        'sd_eHmTgVvZMigHV2Cc'
      );
    }
  }

  async claimNotFoundError(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Xwhth1hn2ZmvQoJv');
    }
  }

  async prepareClaimResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareClaimResponse',
      parentSpanInst
    );
    try {
      bh.local.responseStatus = 200;

      bh.local.response = {
        success: true,
        claim: bh.local.claim,
        policy: bh.local.policy,
        evidence: [],
        decision: null,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.claimLookupOut(bh, parentSpanInst);
      //appendnew_next_prepareClaimResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OV4n5bi5SkySxbRd',
        spanInst,
        'prepareClaimResponse'
      );
    }
  }

  async claimLookupOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UlEe00O7eQRXHwhJ');
    }
  }

  async prepareMasterDataRequests(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareMasterDataRequests',
      parentSpanInst
    );
    try {
      const BASE_URL = bh.system.environment.REELS_BASE_URL;

      const TOKEN = bh.system.environment.REELS_TOKEN;

      /*
       * Replace the placeholder UUIDs below with your actual
       * Dataset ID / Master Data ID / Entity ID values.
       */

      const CLAIMANT_TYPE_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';
      const CLAIMANT_TYPE_MDM_ID = 'b34e9a23-b442-488c-982c-e14f525a19ae';
      const CLAIMANT_TYPE_ENTITY_ID = '4383405d-0c7a-4d9e-a182-c41481948f8a';

      const LOSS_TYPE_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';
      const LOSS_TYPE_MDM_ID = '08bc2d6f-8ef9-4349-8c8c-40565944b1cd';
      const LOSS_TYPE_ENTITY_ID = '940c5c81-27fb-49f2-bb53-6b821dac3730';

      const LOSS_LOCATION_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';
      const LOSS_LOCATION_MDM_ID = 'c1c987a9-96b8-4507-9948-26287cc55742';
      const LOSS_LOCATION_ENTITY_ID = 'f4463407-3922-4e25-8cc6-7b6569f1f37f';

      const DRIVER_LICENCE_DATASET_ID = '72b58c39-817f-4204-95dc-4f5eec8fd929';
      const DRIVER_LICENCE_MDM_ID = 'aec9808b-6c3a-43e4-a7e2-232699894119';
      const DRIVER_LICENCE_ENTITY_ID = '832e08aa-e9f7-454f-b8a1-8a600c64dc41';

      const buildUrl = (datasetId, mdmId, entityId) =>
        `${BASE_URL}/integration/api/records/filter/${datasetId}/${mdmId}/${entityId}`;

      bh.local.headers = {
        token: TOKEN,
        'Content-Type': 'application/json',
      };

      bh.local.requestBody = {
        pageNumber: 0,
        pageSize: 100,
        filter: {},
        multiplicity: 'multiple',
        totalCount: true,
      };

      bh.local.claimantTypeUrl = buildUrl(
        CLAIMANT_TYPE_DATASET_ID,
        CLAIMANT_TYPE_MDM_ID,
        CLAIMANT_TYPE_ENTITY_ID
      );

      bh.local.lossTypeUrl = buildUrl(
        LOSS_TYPE_DATASET_ID,
        LOSS_TYPE_MDM_ID,
        LOSS_TYPE_ENTITY_ID
      );

      bh.local.lossLocationUrl = buildUrl(
        LOSS_LOCATION_DATASET_ID,
        LOSS_LOCATION_MDM_ID,
        LOSS_LOCATION_ENTITY_ID
      );

      bh.local.driverLicenceStatusUrl = buildUrl(
        DRIVER_LICENCE_DATASET_ID,
        DRIVER_LICENCE_MDM_ID,
        DRIVER_LICENCE_ENTITY_ID
      );

      console.log('FNOL master-data URLs prepared');
      console.log('claimantType:', bh.local.claimantTypeUrl);
      console.log('lossType:', bh.local.lossTypeUrl);
      console.log('lossLocation:', bh.local.lossLocationUrl);
      console.log('driverLicenceStatus:', bh.local.driverLicenceStatusUrl);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getClaimantTypes(bh, parentSpanInst);
      //appendnew_next_prepareMasterDataRequests
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4A7Hlcc9SxtkN3nW',
        spanInst,
        'prepareMasterDataRequests'
      );
    }
  }

  async getClaimantTypes(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.claimantTypeUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.claimantTypeResponse = responseMsg;
      bh = await this.getLossTypes(bh, parentSpanInst);
      //appendnew_next_getClaimantTypes
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_nLILRrSSk2kw2YW6');
    }
  }

  async getLossTypes(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.lossTypeUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.lossTypeResponse = responseMsg;
      bh = await this.getLossLocations(bh, parentSpanInst);
      //appendnew_next_getLossTypes
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CG2yZHdDLqv84cXw');
    }
  }

  async getLossLocations(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.lossLocationUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.lossLocationResponse = responseMsg;
      bh = await this.getDriverLicenceStatuses(bh, parentSpanInst);
      //appendnew_next_getLossLocations
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WcPFwmhxmfLWzX2U');
    }
  }

  async getDriverLicenceStatuses(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.driverLicenceStatusUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.headers,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.requestBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.driverLicenceStatusResponse = responseMsg;
      bh = await this.buildFnolMasterDataResponse(bh, parentSpanInst);
      //appendnew_next_getDriverLicenceStatuses
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ehc09P32x7asFH3y');
    }
  }

  async buildFnolMasterDataResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'buildFnolMasterDataResponse',
      parentSpanInst
    );
    try {
      const getRecords = (response) =>
        response?.payload?.records || response?.records || [];

      bh.local.masterDataResponse = {
        claimantTypes: getRecords(bh.local.claimantTypeResponse),
        lossTypes: getRecords(bh.local.lossTypeResponse),
        lossLocations: getRecords(bh.local.lossLocationResponse),
        driverLicenceStatuses: getRecords(bh.local.driverLicenceStatusResponse),
      };

      console.log(
        'FNOL Master Data Response:',
        JSON.stringify(bh.local.masterDataResponse, null, 2)
      );

      bh.input.masterDataResponse = bh.local.masterDataResponse;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_buildFnolMasterDataResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QsPcWRDbaZJKbX8F',
        spanInst,
        'buildFnolMasterDataResponse'
      );
    }
  }

  async getFnolMasterDataCallService(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getFnolMasterDataCallService',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getFnolMasterDataInternal(
        spanInst,
        undefined
      );
      bh.local.masterDataResponse = outputVariables.input.masterDataResponse;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.prepareMasterDataHttpResponse(bh, parentSpanInst);
      //appendnew_next_getFnolMasterDataCallService
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ih7aPP8kUjrizPoY',
        spanInst,
        'getFnolMasterDataCallService'
      );
    }
  }

  async prepareMasterDataHttpResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareMasterDataHttpResponse',
      parentSpanInst
    );
    try {
      bh.local.masterResponse = {
        success: true,
        message: 'FNOL master data fetched successfully',
        data: bh.local.masterDataResponse || {
          claimantTypes: [],
          lossTypes: [],
          lossLocations: [],
          driverLicenceStatuses: [],
        },
      };

      console.log(
        'Master Data HTTP Response:',
        JSON.stringify(bh.local.masterResponse, null, 2)
      );
      this.tracerService.sendData(spanInst, bh);
      await this.fnolMasterDataHttpOut(bh, parentSpanInst);
      //appendnew_next_prepareMasterDataHttpResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cMTwfQfQPdaYn6Mi',
        spanInst,
        'prepareMasterDataHttpResponse'
      );
    }
  }

  async fnolMasterDataHttpOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.masterResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_b7SFQ05T4nkeKxxo');
    }
  }

  async createClaimValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createClaimValidateRequest',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const requiredFields = [
        'policyId',
        'lossDateTime',
        'lossLocation',
        'lossType',
        'lossDescription',
        'estimatedLossAmount',
        'currency',
      ];

      const missingFields = requiredFields.filter(
        (field) =>
          body[field] === undefined ||
          body[field] === null ||
          body[field] === ''
      );

      if (missingFields.length > 0) {
        bh.local.isValid = false;

        bh.local.validationErrors = missingFields;

        bh.local.responseStatus = 400;

        bh.local.response = {
          success: false,
          message: 'Required fields are missing',
          missingFields: missingFields,
        };
      } else {
        /*
         * Prepare claim values
         */

        bh.local.isValid = true;

        bh.local.policyId = body.policyId;
        bh.local.claimantType = body.claimantType || 'POLICYHOLDER';

        bh.local.lossDateTime = body.lossDateTime;
        bh.local.lossLocation = body.lossLocation;
        bh.local.lossType = body.lossType;
        bh.local.lossDescription = body.lossDescription;

        bh.local.driverName = body.driverName || null;
        bh.local.driverLicenceStatus = body.driverLicenceStatus || null;

        bh.local.policeReportAvailable = body.policeReportAvailable ?? false;

        bh.local.policeReportReference = body.policeReportReference || null;

        bh.local.repairEstimateAvailable =
          body.repairEstimateAvailable ?? false;

        bh.local.estimatedLossAmount = body.estimatedLossAmount;

        bh.local.currency = body.currency || 'INR';

        bh.local.vehicleDrivable = body.vehicleDrivable ?? null;

        bh.local.thirdPartyInvolved = body.thirdPartyInvolved ?? false;

        bh.local.injuryInvolved = body.injuryInvolved ?? false;

        bh.local.preferredContactMethod = body.preferredContactMethod || null;

        bh.local.preferredContactValue = body.preferredContactValue || null;

        bh.local.createdBy = body.createdBy || 'FNOL_USER';

        /*
         * Prepare Policy Lookup SQL
         */

        bh.local.policySql = `
    SELECT
        id,
        policy_number,
        customer_id,
        policy_status,
        policy_start_date,
        policy_end_date,
        insured_name,
        vehicle_registration,
        vehicle_make,
        vehicle_model,
        vehicle_year,
        coverage_type,
        covered_perils,
        excess_amount,
        sum_insured,
        currency
    FROM policy_master
    WHERE id = $1
    LIMIT 1
`;

        bh.local.policySqlParams = [bh.local.policyId];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createClaimisValidorNot(bh, parentSpanInst);
      //appendnew_next_createClaimValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BrxenPJ47nVyuH50',
        spanInst,
        'createClaimValidateRequest'
      );
    }
  }

  async createClaimisValidorNot(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createClaimisValidorNot',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.fieldMissingError(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.isValid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.policySearchSql(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_S2Z7LTzhTLX55RWW',
        spanInst,
        'createClaimisValidorNot'
      );
    }
  }

  async fieldMissingError(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TsqG5XQNgrXQjKKv');
    }
  }

  async policySearchSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policySearchSql',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.policySqlParams;
      params = params ? params : [];
      bh.local.policyResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.policySql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.policyResultResponse(bh, parentSpanInst);
      //appendnew_next_policySearchSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_g9Lzuy8q47rRKo2s',
        spanInst,
        'policySearchSql'
      );
    }
  }

  async policyResultResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policyResultResponse',
      parentSpanInst
    );
    try {
      const policyResult = bh.local.policyResult || [];
      console.log(
        'FULL POLICY OBJECT:',
        JSON.stringify(bh.local.policyResult, null, 2)
      );
      if (!Array.isArray(policyResult) || policyResult.length === 0) {
        bh.local.policyFound = false;

        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,
          message: 'Policy not found',
          policyId: bh.local.policyId,
        };
      } else {
        const policy = policyResult[0];

        bh.local.policyFound = true;
        bh.local.policy = policy;

        // Keep the verified policy values available for the claim INSERT
        bh.local.verifiedPolicyId = policy.id;
        bh.local.policyNumber = policy.policy_number;
        bh.local.policyStatus = policy.policy_status;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.duplicateAndPriorClaimCheck(bh, parentSpanInst);
      //appendnew_next_policyResultResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_haRvpxJmSHUqWXH4',
        spanInst,
        'policyResultResponse'
      );
    }
  }

  async duplicateAndPriorClaimCheck(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'duplicateAndPriorClaimCheck',
      parentSpanInst
    );
    try {
      /* =========================================================
   DUPLICATE CLAIM CHECK + PRIOR CLAIMS COUNT
   ========================================================= */

      /*
   DUPLICATE DEFINITION FOR POC:

   Same policy
   + same loss type
   + same loss date
   + similar claim amount

   PRIOR CLAIMS DEFINITION FOR POC:

   Same policy
   + claims in the previous 12 months
   + claim loss date BEFORE current claim loss date

   The current claim is checked BEFORE insertion.
*/

      /* =========================================================
   INPUTS
   ========================================================= */

      const policyId = Number(
        bh.local.verifiedPolicyId || bh.local.policyId || 0
      );

      const lossDateTime = bh.local.lossDateTime;

      const lossType = bh.local.lossType;

      const estimatedLossAmount = Number(bh.local.estimatedLossAmount || 0);

      /* =========================================================
   DEFAULT VALUES
   ========================================================= */

      bh.local.duplicateClaimFlag = false;

      bh.local.duplicateClaimId = null;

      bh.local.duplicateClaimNumber = null;

      /*
   IMPORTANT:
   Default prior claim count is 0.
*/
      bh.local.priorClaims12m = 0;

      /* =========================================================
   VALIDATION
   ========================================================= */

      if (!policyId || !lossDateTime || !lossType) {
        console.log('Duplicate check skipped - required values missing');
      } else {
        /* =====================================================
       DUPLICATE CLAIM SQL

       Same:
       - policy
       - loss type
       - loss date
       - approximately same amount

       Same calendar date is used instead of exact timestamp.
       ===================================================== */

        bh.local.duplicateClaimSql = `
        SELECT
            id,
            claim_number
        FROM claims
        WHERE policy_id = $1
          AND loss_type = $2
          AND DATE(loss_date_time) = DATE($3::timestamp)
          AND ABS(
                COALESCE(estimated_loss_amount, 0)
                - $4
              ) <= 1
        ORDER BY id DESC
        LIMIT 1;
    `;

        bh.local.duplicateClaimSqlParams = [
          policyId,

          lossType,

          lossDateTime,

          estimatedLossAmount,
        ];

        /* =====================================================
       PRIOR CLAIMS COUNT - PREVIOUS 12 MONTHS

       Count existing claims for the same policy where:

       loss_date_time >= current loss date - 12 months

       AND

       loss_date_time < current loss date

       This prevents the current claim from being counted.
       ===================================================== */

        bh.local.priorClaimsSql = `
        SELECT
            COUNT(*) AS prior_claims_12m
        FROM claims
        WHERE policy_id = $1
          AND loss_date_time >=
              ($2::timestamp - INTERVAL '12 months')
          AND loss_date_time < $2::timestamp;
    `;

        bh.local.priorClaimsSqlParams = [policyId, lossDateTime];

        /* =====================================================
       LOGGING
       ===================================================== */

        console.log('========== DUPLICATE CHECK ==========');

        console.log('Policy ID:', policyId);

        console.log('Loss Type:', lossType);

        console.log('Loss Date:', lossDateTime);

        console.log('Estimated Amount:', estimatedLossAmount);

        console.log('Duplicate SQL:', bh.local.duplicateClaimSql);

        console.log('======================================');

        console.log('========== PRIOR CLAIMS CHECK ==========');

        console.log('Policy ID:', policyId);

        console.log('Current Loss Date:', lossDateTime);

        console.log('Prior Claims SQL:', bh.local.priorClaimsSql);

        console.log('Prior Claims SQL Params:', bh.local.priorClaimsSqlParams);

        console.log('========================================');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.duplicateClaimSql(bh, parentSpanInst);
      //appendnew_next_duplicateAndPriorClaimCheck
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SyCb7KeFfsHWri2N',
        spanInst,
        'duplicateAndPriorClaimCheck'
      );
    }
  }

  async duplicateClaimSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'duplicateClaimSql',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.duplicateClaimSqlParams;
      params = params ? params : [];
      bh.local.duplicateClaimResult =
        await new GenericRDBMSOperations().executeSQL(
          connectionName,
          bh.local.duplicateClaimSql,
          params
        );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.priorClaimSql(bh, parentSpanInst);
      //appendnew_next_duplicateClaimSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kOWjcCRlGA64y0B0',
        spanInst,
        'duplicateClaimSql'
      );
    }
  }

  async priorClaimSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'priorClaimSql',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.priorClaimsSqlParams;
      params = params ? params : [];
      bh.local.priorClaims12m = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.priorClaimsSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.duplicateClaimResponse(bh, parentSpanInst);
      //appendnew_next_priorClaimSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T9u31GzeVJGBw5oO',
        spanInst,
        'priorClaimSql'
      );
    }
  }

  async duplicateClaimResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'duplicateClaimResponse',
      parentSpanInst
    );
    try {
      /* =========================================================
   DUPLICATE CLAIM + PRIOR CLAIMS RESPONSE
   ========================================================= */

      /* =========================================================
   DUPLICATE CLAIM RESPONSE
   ========================================================= */

      const duplicateResult = bh.local.duplicateClaimResult || [];

      console.log(
        'Duplicate query result:',
        JSON.stringify(duplicateResult, null, 2)
      );

      /* =========================================================
   DEFAULT DUPLICATE VALUES
   ========================================================= */

      bh.local.duplicateClaimFlag = false;

      bh.local.duplicateClaimId = null;

      bh.local.duplicateClaimNumber = null;

      /* =========================================================
   PROCESS DUPLICATE RESULT
   ========================================================= */

      if (Array.isArray(duplicateResult) && duplicateResult.length > 0) {
        const duplicate = duplicateResult[0];

        bh.local.duplicateClaimFlag = true;

        bh.local.duplicateClaimId = duplicate.id;

        bh.local.duplicateClaimNumber = duplicate.claim_number;
      }

      /* =========================================================
   PRIOR CLAIMS 12 MONTH RESPONSE
   ========================================================= */

      const priorClaimsResult = bh.local.priorClaimsResult || [];

      console.log(
        'Prior claims query result:',
        JSON.stringify(priorClaimsResult, null, 2)
      );

      /* =========================================================
   DEFAULT PRIOR CLAIM VALUES
   ========================================================= */

      bh.local.priorClaims12m = 0;

      bh.local.priorClaimsValid = true;

      /* =========================================================
   GET PRIOR CLAIM COUNT
   ========================================================= */

      if (Array.isArray(priorClaimsResult) && priorClaimsResult.length > 0) {
        const priorClaims = priorClaimsResult[0];

        bh.local.priorClaims12m = Number(priorClaims.prior_claims_12m || 0);
      }

      /* =========================================================
   PRIOR CLAIM VALIDATION
   =========================================================

   <= 1  → VALID
   > 1   → INVALID
   ========================================================= */

      bh.local.priorClaimsValid = bh.local.priorClaims12m <= 1;

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== CLAIM HISTORY RESULT ==========');

      console.log('Duplicate Claim Flag:', bh.local.duplicateClaimFlag);

      console.log('Duplicate Claim ID:', bh.local.duplicateClaimId);

      console.log('Duplicate Claim Number:', bh.local.duplicateClaimNumber);

      console.log('Prior Claims 12M:', bh.local.priorClaims12m);

      console.log('Prior Claims Valid:', bh.local.priorClaimsValid);

      console.log('==========================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WsQyWnZwjTB0WuRN(bh, parentSpanInst);
      //appendnew_next_duplicateClaimResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gUSvVx8xFnOi4wYH',
        spanInst,
        'duplicateClaimResponse'
      );
    }
  }

  async sd_WsQyWnZwjTB0WuRN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WsQyWnZwjTB0WuRN',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.policyFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.policyNotFoundError(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.policyFound,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.claimPrepareSql(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WsQyWnZwjTB0WuRN',
        spanInst,
        'sd_WsQyWnZwjTB0WuRN'
      );
    }
  }

  async policyNotFoundError(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hJs2wYf9AvejpXyI');
    }
  }

  async claimPrepareSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimPrepareSql',
      parentSpanInst
    );
    try {
      const policyId = bh.local.verifiedPolicyId;

      /* =========================================================
   CLAIM INSERT SQL
   ========================================================= */

      bh.local.claimSql = `
    INSERT INTO claims (
        claim_number,
        policy_id,
        claimant_type,
        loss_date_time,
        loss_location,
        loss_type,
        loss_description,
        driver_name,
        driver_licence_status,
        police_report_available,
        police_report_reference,
        repair_estimate_available,
        estimated_loss_amount,
        currency,
        vehicle_drivable,
        third_party_involved,
        injury_involved,
        preferred_contact_method,
        preferred_contact_value,
        status,
        created_by
    )
    VALUES (
        'CLM' ||
        TO_CHAR(CURRENT_DATE, 'YYYYMMDD') ||
        LPAD(
            nextval('claim_number_seq')::TEXT,
            6,
            '0'
        ),

        $1,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10,
        $11,
        $12,
        $13,
        $14,
        $15,
        $16,
        $17,
        $18,

        'FNOL_SUBMITTED',

        $19
    )
    RETURNING
        id,
        claim_number,
        policy_id,
        status,
        created_at;
`;

      /* =========================================================
   SQL PARAMETERS
   ========================================================= */

      bh.local.claimSqlParams = [
        /* $1 */
        policyId,

        /* $2 */
        bh.local.claimantType,

        /* $3 */
        bh.local.lossDateTime,

        /* $4 */
        bh.local.lossLocation,

        /* $5 */
        bh.local.lossType,

        /* $6 */
        bh.local.lossDescription,

        /* $7 */
        bh.local.driverName,

        /* $8 */
        bh.local.driverLicenceStatus,

        /* $9 */
        bh.local.policeReportAvailable,

        /* $10 */
        bh.local.policeReportReference,

        /* $11 */
        bh.local.repairEstimateAvailable,

        /* $12 */
        bh.local.estimatedLossAmount,

        /* $13 */
        bh.local.currency,

        /* $14 */
        bh.local.vehicleDrivable,

        /* $15 */
        bh.local.thirdPartyInvolved,

        /* $16 */
        bh.local.injuryInvolved,

        /* $17 */
        bh.local.preferredContactMethod,

        /* $18 */
        bh.local.preferredContactValue,

        /* $19 */
        bh.local.createdBy,
      ];

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== CLAIM INSERT PREPARED ==========');

      console.log('Policy ID:', policyId);

      console.log(
        'Repair Estimate Available:',
        bh.local.repairEstimateAvailable
      );

      console.log('SQL Parameter Count:', bh.local.claimSqlParams.length);

      console.log(
        'Claim SQL Params:',
        JSON.stringify(bh.local.claimSqlParams, null, 2)
      );

      console.log('============================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimSql(bh, parentSpanInst);
      //appendnew_next_claimPrepareSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Z9MA44QRsChpaaO',
        spanInst,
        'claimPrepareSql'
      );
    }
  }

  async claimSql(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('claimSql', parentSpanInst);
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.claimSqlParams;
      params = params ? params : [];
      bh.local.claimResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.claimSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.checkClaimResult(bh, parentSpanInst);
      //appendnew_next_claimSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6Er0rH37NnBl416v',
        spanInst,
        'claimSql'
      );
    }
  }

  async checkClaimResult(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'checkClaimResult',
      parentSpanInst
    );
    try {
      const claimResult = bh.local.claimResult || [];

      console.log('========== CLAIM RESULT ==========');
      console.log(claimResult);

      if (!Array.isArray(claimResult) || claimResult.length === 0) {
        bh.local.claimCreated = false;

        bh.local.responseStatus = 500;

        bh.local.response = {
          success: false,
          message: 'Claim creation failed. No claim record was returned.',
        };
      } else {
        const claim = claimResult[0];

        bh.local.claimCreated = true;

        bh.local.claim = claim;

        bh.local.claimId = claim.id;
        bh.local.claimNumber = claim.claim_number;
        bh.local.claimPolicyId = claim.policy_id;
        bh.local.claimStatus = claim.status;
        bh.local.claimCreatedAt = claim.created_at;

        console.log('Claim created successfully');
        console.log('Claim ID:', bh.local.claimId);
        console.log('Claim Number:', bh.local.claimNumber);
        console.log('Policy ID:', bh.local.claimPolicyId);
        console.log('Claim Status:', bh.local.claimStatus);
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_eRe9r9GGo2Zv4BL8(bh, parentSpanInst);
      //appendnew_next_checkClaimResult
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Xq2Hqv5wl9pitqbi',
        spanInst,
        'checkClaimResult'
      );
    }
  }

  async sd_eRe9r9GGo2Zv4BL8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eRe9r9GGo2Zv4BL8',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.claimCreated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.unabletoCreateClaimError(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.claimCreated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareEvidence(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eRe9r9GGo2Zv4BL8',
        spanInst,
        'sd_eRe9r9GGo2Zv4BL8'
      );
    }
  }

  async unabletoCreateClaimError(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pc8fHXrItH6iRYG6');
    }
  }

  async prepareEvidence(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareEvidence',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      const evidence = body.evidence || [];

      bh.local.evidence = evidence;

      bh.local.hasEvidence = Array.isArray(evidence) && evidence.length > 0;

      console.log('Evidence received:', evidence);
      console.log('Has evidence:', bh.local.hasEvidence);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XRponF5hISX6HJeZ(bh, parentSpanInst);
      //appendnew_next_prepareEvidence
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_53GW5t4Qb1XypxGc',
        spanInst,
        'prepareEvidence'
      );
    }
  }

  async sd_XRponF5hISX6HJeZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XRponF5hISX6HJeZ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.hasEvidence,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareCaseCreation(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.hasEvidence,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.prepareDmsUpload(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XRponF5hISX6HJeZ',
        spanInst,
        'sd_XRponF5hISX6HJeZ'
      );
    }
  }

  async prepareCaseCreation(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareCaseCreation',
      parentSpanInst
    );
    try {
      const policy = bh.local.policy || {};

      const claim = bh.local.claim || {};

      /* =========================================================
   CASE CREATION URL
   ========================================================= */

      const BASE_URL = bh.system.environment.CASE_SERVICE_BASE_URL;

      bh.local.caseCreationUrl =
        (BASE_URL || '').replace(/\/+$/, '') +
        '/caseservice/case/instance/create?branch=main';

      /* =========================================================
   VERIFIED IDENTIFIERS
   ========================================================= */

      const claimId = Number(bh.local.claimId || claim.id || 0);

      const claimNumber = bh.local.claimNumber || claim.claim_number || '';

      const policyId = Number(
        bh.local.claimPolicyId || bh.local.verifiedPolicyId || policy.id || 0
      );

      const policyNumber = bh.local.policyNumber || policy.policy_number || '';

      /* =========================================================
   COMMON CASE / WORKFLOW DATA
   =========================================================
 *
 * IMPORTANT:
 *
 * caseData and wfData are intentionally created from
 * this SAME object.
 *
 * This prevents caseData and wfData from becoming
 * different when a field is added/removed later.
 *
 * Only SOURCE FACTS are sent here.
 *
 * Reëls calculated outputs such as:
 *   policyAgeDays
 *   lossDateWithinPolicyPeriod
 *   claimAmountWithinCoverage
 *   eligibilityValid
 *   recommendation
 *   stpEligible
 *   fraudRiskBand
 *   complexityBand
 *   authorityBand
 *
 * are NOT created here.
 * ========================================================= */

      const commonCaseData = {
        /* =====================================================
       1. CLAIM / POLICY IDENTITY
       ===================================================== */

        claimId: claimId,

        claimNumber: claimNumber,

        policyId: policyId,

        policyNumber: policyNumber,

        /* =====================================================
       2. FNOL / CLAIM DETAILS
       ===================================================== */

        claimantType: bh.local.claimantType,

        lossDateTime: bh.local.lossDateTime,

        lossLocation: bh.local.lossLocation,

        lossType: bh.local.lossType,

        lossDescription: bh.local.lossDescription || '',

        /* =====================================================
       3. DRIVER
       ===================================================== */

        driverName: bh.local.driverName || null,

        driverLicenceStatus: bh.local.driverLicenceStatus || null,

        /* =====================================================
       4. POLICE / REPAIR INFORMATION
       ===================================================== */

        policeReportAvailable: !!bh.local.policeReportAvailable,

        policeReportReference: bh.local.policeReportReference || '',

        repairEstimateAvailable: !!bh.local.repairEstimateAvailable,

        /* =====================================================
       5. FINANCIAL
       ===================================================== */

        estimatedLossAmount: Number(bh.local.estimatedLossAmount || 0),

        currency: bh.local.currency || policy.currency || 'INR',

        /* =====================================================
       6. INCIDENT
       ===================================================== */

        vehicleDrivable: !!bh.local.vehicleDrivable,

        thirdPartyInvolved: !!bh.local.thirdPartyInvolved,

        injuryInvolved: !!bh.local.injuryInvolved,

        /* =====================================================
       7. CONTACT
       ===================================================== */

        preferredContactMethod: bh.local.preferredContactMethod || null,

        preferredContactValue: bh.local.preferredContactValue || '',

        /* =====================================================
       8. SYSTEM
       ===================================================== */

        createdBy: bh.local.createdBy || 'FNOL_USER',

        /* =====================================================
       9. POLICY FACTS FROM POSTGRES
       ===================================================== */

        policyStatus: policy.policy_status || '',

        policyStartDate: policy.policy_start_date || '',

        policyEndDate: policy.policy_end_date || '',

        coverageType: policy.coverage_type || '',

        coveredPerils: policy.covered_perils || [],

        sumInsured: Number(policy.sum_insured || 0),

        excessAmount: Number(policy.excess_amount || 0),

        /* =====================================================
       10. RISK / CLAIM HISTORY SOURCE FACTS
       ===================================================== */

        fraudScore: Number(bh.local.fraudScore || 0),

        duplicateClaimFlag: !!bh.local.duplicateClaimFlag,

        blacklistedEntityFlag: !!bh.local.blacklistedEntityFlag,

        suspiciousPatternFlag: !!bh.local.suspiciousPatternFlag,

        mandatoryDocsComplete: false,

        priorClaims12m: Number(bh.local.priorClaims12m || 0),

        priorClaimsValid: !!bh.local.priorClaimsValid,

        /* =====================================================
       11. WORKFLOW CONTEXT
       ===================================================== */

        manualReviewOverride: !!bh.local.manualReviewOverride,
      };

      /* =========================================================
   CASE CREATION REQUEST
   =========================================================
 *
 * caseData and wfData contain EXACTLY the same values.
 * ========================================================= */

      bh.local.caseCreationRequest = {
        caseType: 'fnol_claim',

        caseData: commonCaseData,

        wfData: JSON.parse(JSON.stringify(commonCaseData)),
      };

      /* =========================================================
   CASE CREATION BODY
   ========================================================= */

      bh.local.caseCreationBody = JSON.stringify(bh.local.caseCreationRequest);

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== CASE CREATION PREPARED ==========');

      console.log('Case Creation URL:', bh.local.caseCreationUrl);

      console.log('Case ID:', claimId);

      console.log('Policy ID:', policyId);

      console.log('Duplicate Claim:', bh.local.duplicateClaimFlag);

      console.log(
        'Repair Estimate Available:',
        bh.local.repairEstimateAvailable
      );

      console.log(
        'Case Data:',
        JSON.stringify(bh.local.caseCreationRequest.caseData, null, 2)
      );

      console.log(
        'WF Data:',
        JSON.stringify(bh.local.caseCreationRequest.wfData, null, 2)
      );

      console.log(
        'Case Data / WF Data identical:',
        JSON.stringify(bh.local.caseCreationRequest.caseData) ===
          JSON.stringify(bh.local.caseCreationRequest.wfData)
      );

      console.log('============================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCaseServiceTokenScript(bh, parentSpanInst);
      //appendnew_next_prepareCaseCreation
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V5ntOw3EKIAIW33L',
        spanInst,
        'prepareCaseCreation'
      );
    }
  }

  async getCaseServiceTokenScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'getCaseServiceTokenScript',
      parentSpanInst
    );
    try {
      const CLIENT_ID = bh.system.environment.CASE_SERVICE_CLIENT_ID;

      const CLIENT_SECRET = bh.system.environment.CASE_SERVICE_CLIENT_SECRET;

      /* =========================================================
   TOKEN URL
   ========================================================= */

      bh.local.caseTokenUrl = 'https://ids-ctr-pt.neutrinos-apps.com/token';

      /* =========================================================
   TOKEN BODY
   ========================================================= */

      bh.local.caseTokenBody =
        'grant_type=client_credentials&client_id=' +
        encodeURIComponent(CLIENT_ID) +
        '&client_secret=' +
        encodeURIComponent(CLIENT_SECRET);

      /* =========================================================
   TOKEN HEADERS
   ========================================================= */

      bh.local.caseTokenHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== CASE TOKEN REQUEST ==========');

      console.log('URL:', bh.local.caseTokenUrl);

      console.log('Body:', bh.local.caseTokenBody);

      console.log(
        'Headers:',
        JSON.stringify(bh.local.caseTokenHeaders, null, 2)
      );

      console.log('=========================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.getCaseServiceToken(bh, parentSpanInst);
      //appendnew_next_getCaseServiceTokenScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ec7cC9CNKd3RqBFy',
        spanInst,
        'getCaseServiceTokenScript'
      );
    }
  }

  async getCaseServiceToken(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.caseTokenUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.caseTokenHeaders,
        followRedirects: true,
        cookies: {},
        authType: undefined,
        body: bh.local.caseTokenBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: '',
        password: '',
        token: undefined,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.caseTokenResponse = responseMsg;
      bh = await this.tokenResponse(bh, parentSpanInst);
      //appendnew_next_getCaseServiceToken
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_17VKHaYiZmcd2AST');
    }
  }

  async tokenResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'tokenResponse',
      parentSpanInst
    );
    try {
      const rawTokenResponse = bh.local.caseTokenResponse || {};

      const tokenResponse =
        rawTokenResponse &&
        rawTokenResponse.payload &&
        typeof rawTokenResponse.payload === 'object'
          ? rawTokenResponse.payload
          : rawTokenResponse;

      console.log('========== CASE TOKEN RESPONSE ==========');

      console.log(JSON.stringify(tokenResponse, null, 2));

      /* =========================================================
   VALIDATE TOKEN
   ========================================================= */

      if (
        !tokenResponse.access_token ||
        typeof tokenResponse.access_token !== 'string' ||
        !tokenResponse.access_token.trim()
      ) {
        bh.local.caseTokenSuccess = false;

        bh.local.caseAccessToken = '';

        bh.local.caseCreationReady = false;

        console.error(
          'Case Service authentication failed: access token missing.'
        );
      } else {
        bh.local.caseTokenSuccess = true;

        bh.local.caseAccessToken = tokenResponse.access_token.trim();

        bh.local.caseCreationReady = true;

        console.log('Case Service authentication successful.');

        console.log('Access token received:', true);
      }

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('Case Token Success:', bh.local.caseTokenSuccess);

      console.log('Case Creation Ready:', bh.local.caseCreationReady);

      console.log('==========================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createFnolCaseScript(bh, parentSpanInst);
      //appendnew_next_tokenResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LpYNgGoX0Z6sQSI6',
        spanInst,
        'tokenResponse'
      );
    }
  }

  async createFnolCaseScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'createFnolCaseScript',
      parentSpanInst
    );
    try {
      /* =========================================================
   PREPARE CASE CREATION HTTP REQUEST
   ========================================================= */

      if (
        !bh.local.caseAccessToken ||
        typeof bh.local.caseAccessToken !== 'string' ||
        !bh.local.caseAccessToken.trim()
      ) {
        bh.local.caseCreationReady = false;

        console.error('CASE CREATION STOPPED: access token missing.');
      } else {
        /* =====================================================
       URL
       ===================================================== */

        const BASE_URL = bh.system.environment.CASE_SERVICE_BASE_URL;

        bh.local.caseCreationUrl =
          (BASE_URL || '').replace(/\/+$/, '') +
          '/caseservice/case/instance/create?branch=main';

        /* =====================================================
       HEADERS
       ===================================================== */

        bh.local.caseCreationHeaders = {
          Authorization: 'Bearer ' + bh.local.caseAccessToken.trim(),

          'Content-Type': 'application/json',

          Accept: 'application/json',
        };

        /* =====================================================
       BODY
       ===================================================== */

        bh.local.caseCreationBody = JSON.stringify(
          bh.local.caseCreationRequest
        );

        bh.local.caseCreationReady = true;

        /* =====================================================
       DEBUG
       ===================================================== */

        console.log('========== CASE CREATION HTTP REQUEST ==========');

        console.log('URL:', bh.local.caseCreationUrl);

        console.log(
          'Headers:',
          JSON.stringify(bh.local.caseCreationHeaders, null, 2)
        );

        console.log('Body:', bh.local.caseCreationBody);

        console.log('Ready:', bh.local.caseCreationReady);

        console.log('=================================================');
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.createFnolCase(bh, parentSpanInst);
      //appendnew_next_createFnolCaseScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_X3xO5YlXF0IzAnFt',
        spanInst,
        'createFnolCaseScript'
      );
    }
  }

  async createFnolCase(bh, parentSpanInst) {
    try {
      let requestOptions: any = {
        url: bh.local.caseCreationUrl,
        timeout: 30000,
        method: 'post',
        headers: bh.local.caseCreationHeaders,
        followRedirects: false,
        cookies: undefined,
        authType: undefined,
        body: bh.local.caseCreationBody,
        paytoqs: false,
        proxyConfig: undefined,
        tlsConfig: undefined,
        ret: 'json',
        params: {},
        username: undefined,
        password: undefined,
        token: bh.local,
        useQuerystring: false,
      };
      requestOptions.rejectUnauthorized = false;
      requestOptions.tlsConfig = undefined;
      requestOptions.proxyConfig = undefined;
      let responseMsg: any = await this.sdService.httpRequest(
        requestOptions.url,
        requestOptions.timeout,
        requestOptions.method,
        requestOptions.headers,
        requestOptions.followRedirects,
        requestOptions.cookies,
        requestOptions.authType,
        requestOptions.body,
        requestOptions.paytoqs,
        requestOptions.proxyConfig,
        requestOptions.tlsConfig,
        requestOptions.ret,
        requestOptions.params,
        requestOptions.rejectUnauthorized,
        requestOptions.username,
        requestOptions.password,
        requestOptions.token
      );

      bh.local.caseCreationResponse = responseMsg;
      bh = await this.finalResponseScript(bh, parentSpanInst);
      //appendnew_next_createFnolCase
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7IkvK7uWt0f2Uifi');
    }
  }

  async finalResponseScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'finalResponseScript',
      parentSpanInst
    );
    try {
      /* =========================================================
       * CASE CREATION RESPONSE
       * ========================================================= */

      /* ---------------------------------------------------------
       * Default HTTP response status
       *
       * Always set this so the final response never receives
       * an undefined HTTP status code.
       * --------------------------------------------------------- */

      bh.local.responseStatus = 200;

      /* ---------------------------------------------------------
       * Get raw case creation response
       * --------------------------------------------------------- */

      const rawCaseResponse = bh.local.caseCreationResponse || {};

      /* ---------------------------------------------------------
       * Normalize payload
       * --------------------------------------------------------- */

      const caseResponse =
        rawCaseResponse &&
        rawCaseResponse.payload &&
        typeof rawCaseResponse.payload === 'object'
          ? rawCaseResponse.payload
          : rawCaseResponse;

      /* ---------------------------------------------------------
       * Store normalized response
       * --------------------------------------------------------- */

      bh.local.caseCreationResponse = caseResponse;

      /* =========================================================
       * EXTRACT CASE ID
       * ========================================================= */

      bh.local.caseId =
        caseResponse.caseId ||
        caseResponse.id ||
        caseResponse.caseInstanceId ||
        (caseResponse.case &&
          (caseResponse.case.caseId ||
            caseResponse.case.id ||
            caseResponse.case.caseInstanceId)) ||
        null;

      /* =========================================================
       * DETERMINE SUCCESS
       * ========================================================= */

      bh.local.caseCreated = !!(
        bh.local.caseId ||
        caseResponse.success === true ||
        caseResponse.status === 'SUCCESS'
      );

      /* =========================================================
       * DETERMINE RESPONSE STATUS
       * ========================================================= */

      if (bh.local.caseCreated) {
        bh.local.responseStatus = 200;
      } else {
        bh.local.responseStatus = 500;
      }

      /* =========================================================
       * FINAL RESPONSE BODY
       * ========================================================= */

      bh.local.response = caseResponse;

      /* =========================================================
       * DEBUG
       * ========================================================= */

      console.log('========== CASE CREATION RESPONSE ==========');

      console.log(
        'Raw Case Response:',
        JSON.stringify(rawCaseResponse, null, 2)
      );

      console.log(
        'Normalized Case Response:',
        JSON.stringify(caseResponse, null, 2)
      );

      console.log('Case ID:', bh.local.caseId);

      console.log('Case Created:', bh.local.caseCreated);

      console.log('Response Status:', bh.local.responseStatus);

      console.log('Response Body:', JSON.stringify(bh.local.response, null, 2));

      console.log('=============================================');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_f25NqaHFj386lYIb(bh, parentSpanInst);
      //appendnew_next_finalResponseScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cieULxefdEWNPZjA',
        spanInst,
        'finalResponseScript'
      );
    }
  }

  async sd_f25NqaHFj386lYIb(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_f25NqaHFj386lYIb');
    }
  }

  async prepareDmsUpload(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'prepareDmsUpload',
      parentSpanInst
    );
    try {
      const evidence = bh.local.evidence || [];

      bh.local.dmsFiles = evidence.map((file) => ({
        claimId: bh.local.claimId,
        documentType: file.documentType,
        fileName: file.fileName || file.name,
        mimeType: file.mimeType || file.type,
        fileSize: file.fileSize || file.size,
        file: file.file,
      }));

      bh.local.dmsFileCount = bh.local.dmsFiles.length;

      console.log('DMS files prepared:', bh.local.dmsFiles);

      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_prepareDmsUpload
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dIrgUDVBMIPJnl0H',
        spanInst,
        'prepareDmsUpload'
      );
    }
  }

  async requestValidationScript(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'requestValidationScript',
      parentSpanInst
    );
    try {
      const body = bh.input.body || {};

      /* =========================================================
   BASIC DECISION DATA
   ========================================================= */

      bh.local.claimId = Number(body.claimId || 0);

      bh.local.decision = String(body.decision || '').trim();

      bh.local.status = String(body.status || '').trim();

      bh.local.decisionSource = String(body.decisionSource || 'BPM').trim();

      bh.local.decisionRole = String(body.decisionRole || 'SYSTEM').trim();

      bh.local.comments = String(body.comments || '').trim();

      bh.local.correlationId = String(body.correlationId || '').trim();

      /* =========================================================
   REËLS / DECISION DATA
   ========================================================= */

      bh.local.recommendation = String(body.recommendation || '').trim();

      bh.local.stpEligible = body.stpEligible === true;

      bh.local.stpFailureReasons = Array.isArray(body.stpFailureReasons)
        ? body.stpFailureReasons
        : [];

      bh.local.recommendationScore =
        body.recommendationScore === null ||
        body.recommendationScore === undefined ||
        body.recommendationScore === ''
          ? null
          : Number(body.recommendationScore);

      bh.local.complexityBand = String(body.complexityBand || '').trim();

      bh.local.fraudRiskBand = String(body.fraudRiskBand || '').trim();

      bh.local.authorityBand = String(body.authorityBand || '').trim();

      bh.local.reasonCodes = Array.isArray(body.reasonCodes)
        ? body.reasonCodes
        : [];

      bh.local.rulesFired = Array.isArray(body.rulesFired)
        ? body.rulesFired
        : [];

      bh.local.ruleSetVersion = String(body.ruleSetVersion || '').trim();

      bh.local.decisionDetails =
        body.decisionDetails && typeof body.decisionDetails === 'object'
          ? body.decisionDetails
          : {};

      /* =========================================================
   VALIDATION
   ========================================================= */

      bh.local.valid = true;
      bh.local.error = '';

      if (!bh.local.claimId) {
        bh.local.valid = false;
        bh.local.error = 'claimId is required';
      }

      if (!bh.local.decision) {
        bh.local.valid = false;
        bh.local.error = 'decision is required';
      }

      if (!bh.local.status) {
        bh.local.valid = false;
        bh.local.error = 'status is required';
      }

      /* =========================================================
   CLAIM LOOKUP SQL
   ========================================================= */

      bh.local.claimSql = `
    SELECT *
    FROM public.claims
    WHERE id = $1
    LIMIT 1
`;

      bh.local.claimSqlParams = [bh.local.claimId];

      console.log('========== CLAIM DECISION REQUEST ==========');

      console.log('Claim ID:', bh.local.claimId);

      console.log('Decision:', bh.local.decision);

      console.log('Status:', bh.local.status);

      console.log('Recommendation:', bh.local.recommendation);

      console.log('STP Eligible:', bh.local.stpEligible);

      console.log('Complexity Band:', bh.local.complexityBand);

      console.log('Fraud Risk Band:', bh.local.fraudRiskBand);

      console.log('Authority Band:', bh.local.authorityBand);

      console.log('Rule Set Version:', bh.local.ruleSetVersion);

      console.log('============================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tvpRA3DieRCWXJcn(bh, parentSpanInst);
      //appendnew_next_requestValidationScript
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BSSiVswx5eeyeVkw',
        spanInst,
        'requestValidationScript'
      );
    }
  }

  async sd_tvpRA3DieRCWXJcn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tvpRA3DieRCWXJcn',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = bh.local.claimSqlParams;
      params = params ? params : [];
      bh.local.claimResponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.claimSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimResponse(bh, parentSpanInst);
      //appendnew_next_sd_tvpRA3DieRCWXJcn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tvpRA3DieRCWXJcn',
        spanInst,
        'sd_tvpRA3DieRCWXJcn'
      );
    }
  }

  async claimResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimResponse',
      parentSpanInst
    );
    try {
      /* =========================================================
   CLAIM LOOKUP RESPONSE
   ========================================================= */

      console.log('========== CLAIM LOOKUP RESPONSE ==========');

      console.log(
        'Raw claimResponse:',
        JSON.stringify(bh.local.claimResponse, null, 2)
      );

      /* =========================================================
   NORMALIZE SQL RESULT
   ========================================================= */

      let rows = bh.local.claimResponse;

      if (Array.isArray(rows)) {
        rows = rows;
      } else if (rows && Array.isArray(rows.rows)) {
        rows = rows.rows;
      } else if (rows && rows.payload && Array.isArray(rows.payload)) {
        rows = rows.payload;
      } else if (rows && rows.data && Array.isArray(rows.data)) {
        rows = rows.data;
      } else {
        rows = [];
      }

      /* =========================================================
   CLAIM NOT FOUND
   ========================================================= */

      if (rows.length === 0) {
        bh.local.claimFound = false;

        bh.local.claimUpdateSuccess = false;

        bh.local.claimDecisionInsertSuccess = false;

        bh.local.auditInsertSuccess = false;

        bh.local.responseStatus = 404;

        bh.local.response = {
          success: false,

          message: 'Claim not found',

          claimId: Number(bh.local.claimId),
        };

        console.error('Claim not found. Claim ID:', bh.local.claimId);
      } else {
        /* =====================================================
       CLAIM FOUND
       ===================================================== */

        const claim = rows[0];

        bh.local.claimFound = true;

        bh.local.claimNumber = String(
          claim.claim_number || claim.claimNumber || ''
        );

        bh.local.oldStatus = String(claim.status || '');

        /* =====================================================
       ESCAPE SQL VALUES
       ===================================================== */

        const esc = (value) =>
          String(value == null ? '' : value).replace(/'/g, "''");

        /* =====================================================
       PREPARE CLAIM UPDATE SQL
       ===================================================== */

        bh.local.updateSql =
          'UPDATE public.claims ' +
          "SET status = '" +
          esc(bh.local.status) +
          "', updated_at = CURRENT_TIMESTAMP " +
          'WHERE id = ' +
          Number(bh.local.claimId) +
          ';';

        /* =====================================================
       PREPARE CLAIM DECISION JSON
       ===================================================== */

        const stpFailureReasonsJson = JSON.stringify(
          Array.isArray(bh.local.stpFailureReasons)
            ? bh.local.stpFailureReasons
            : []
        );

        const reasonCodesJson = JSON.stringify(
          Array.isArray(bh.local.reasonCodes) ? bh.local.reasonCodes : []
        );

        const rulesFiredJson = JSON.stringify(
          Array.isArray(bh.local.rulesFired) ? bh.local.rulesFired : []
        );

        const decisionDetailsJson = JSON.stringify(
          bh.local.decisionDetails || {}
        );

        /* =====================================================
       PREPARE CLAIM DECISION INSERT
       ===================================================== */

        bh.local.claimDecisionSql =
          'INSERT INTO public.claim_decision (' +
          'claim_id, ' +
          'recommendation, ' +
          'stp_eligible, ' +
          'stp_failure_reasons, ' +
          'recommendation_score, ' +
          'complexity_band, ' +
          'fraud_risk_band, ' +
          'authority_band, ' +
          'reason_codes, ' +
          'rules_fired, ' +
          'rule_set_version, ' +
          'decision_details, ' +
          'decision, ' +
          'status, ' +
          'decision_source, ' +
          'decision_role, ' +
          'comments, ' +
          'correlation_id' +
          ') VALUES (' +
          Number(bh.local.claimId) +
          ", '" +
          esc(bh.local.recommendation) +
          "'" +
          ', ' +
          (bh.local.stpEligible ? 'TRUE' : 'FALSE') +
          ", '" +
          esc(stpFailureReasonsJson) +
          "'::jsonb" +
          ', ' +
          (bh.local.recommendationScore === null ||
          Number.isNaN(bh.local.recommendationScore)
            ? 'NULL'
            : Number(bh.local.recommendationScore)) +
          ", '" +
          esc(bh.local.complexityBand) +
          "'" +
          ", '" +
          esc(bh.local.fraudRiskBand) +
          "'" +
          ", '" +
          esc(bh.local.authorityBand) +
          "'" +
          ", '" +
          esc(reasonCodesJson) +
          "'::jsonb" +
          ", '" +
          esc(rulesFiredJson) +
          "'::jsonb" +
          ", '" +
          esc(bh.local.ruleSetVersion) +
          "'" +
          ", '" +
          esc(decisionDetailsJson) +
          "'::jsonb" +
          ", '" +
          esc(bh.local.decision) +
          "'" +
          ", '" +
          esc(bh.local.status) +
          "'" +
          ", '" +
          esc(bh.local.decisionSource) +
          "'" +
          ", '" +
          esc(bh.local.decisionRole) +
          "'" +
          ", '" +
          esc(bh.local.comments) +
          "'" +
          ", '" +
          esc(bh.local.correlationId) +
          "'" +
          ') RETURNING id;';

        /* =====================================================
       PREPARE AUDIT SQL
       ===================================================== */

        bh.local.auditSql =
          'INSERT INTO public.claim_audit (' +
          'claim_id, ' +
          'event_type, ' +
          'user_id, ' +
          'user_role, ' +
          'action, ' +
          'comments, ' +
          'old_status, ' +
          'new_status, ' +
          'correlation_id, ' +
          'integration_name, ' +
          'integration_status' +
          ') VALUES (' +
          Number(bh.local.claimId) +
          ', ' +
          "'CLAIM_DECISION', " +
          "'" +
          esc(bh.local.decisionSource) +
          "', " +
          "'" +
          esc(bh.local.decisionRole) +
          "', " +
          "'" +
          esc(bh.local.decision) +
          "', " +
          "'" +
          esc(bh.local.comments) +
          "', " +
          "'" +
          esc(bh.local.oldStatus) +
          "', " +
          "'" +
          esc(bh.local.status) +
          "', " +
          "'" +
          esc(bh.local.correlationId) +
          "', " +
          "'CLAIMS_DECISION_API', " +
          "'SUCCESS'" +
          ');';

        /* =====================================================
       DEBUG
       ===================================================== */

        console.log('Claim found:', bh.local.claimFound);

        console.log('Claim number:', bh.local.claimNumber);

        console.log('Old status:', bh.local.oldStatus);

        console.log('Claim Update SQL:', bh.local.updateSql);

        console.log('Claim Decision SQL:', bh.local.claimDecisionSql);

        console.log('Audit SQL:', bh.local.auditSql);
      }

      console.log('==========================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_K03aJrwG6JG7i18V(bh, parentSpanInst);
      //appendnew_next_claimResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iUI6fQrfR1nGmiWV',
        spanInst,
        'claimResponse'
      );
    }
  }

  async sd_K03aJrwG6JG7i18V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_K03aJrwG6JG7i18V',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.claimNotFoundErrorDecision(bh, parentSpanInst);
      } else if (
        this.sdService.operators['true'](
          bh.local.valid,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_BwgNfP9zSM4obH2q(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_K03aJrwG6JG7i18V',
        spanInst,
        'sd_K03aJrwG6JG7i18V'
      );
    }
  }

  async claimNotFoundErrorDecision(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5yPoTw6y9Jf27FxH');
    }
  }

  async sd_BwgNfP9zSM4obH2q(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BwgNfP9zSM4obH2q',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.updateResponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.updateSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimUpdateSuccess(bh, parentSpanInst);
      //appendnew_next_sd_BwgNfP9zSM4obH2q
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BwgNfP9zSM4obH2q',
        spanInst,
        'sd_BwgNfP9zSM4obH2q'
      );
    }
  }

  async claimUpdateSuccess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimUpdateSuccess',
      parentSpanInst
    );
    try {
      /* =========================================================
   CLAIM UPDATE SUCCESS
   ========================================================= */

      console.log('========== CLAIM UPDATE ==========');

      console.log('Update SQL:', bh.local.updateSql);

      console.log('Claim ID:', bh.local.claimId);

      console.log('New Status:', bh.local.status);

      /*
       * SQL node completed without throwing an error.
       * Therefore the UPDATE was successful.
       */

      bh.local.claimUpdateSuccess = true;

      console.log('claimUpdateSuccess:', bh.local.claimUpdateSuccess);

      console.log('==================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_jtmB7o9PqYxOolFO(bh, parentSpanInst);
      //appendnew_next_claimUpdateSuccess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mxsngu8MrOe0rPsc',
        spanInst,
        'claimUpdateSuccess'
      );
    }
  }

  async sd_jtmB7o9PqYxOolFO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jtmB7o9PqYxOolFO',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.claimDecisionResponse =
        await new GenericRDBMSOperations().executeSQL(
          connectionName,
          bh.local.claimDecisionSql,
          params
        );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.claimDecisionInsertSuccess(bh, parentSpanInst);
      //appendnew_next_sd_jtmB7o9PqYxOolFO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jtmB7o9PqYxOolFO',
        spanInst,
        'sd_jtmB7o9PqYxOolFO'
      );
    }
  }

  async claimDecisionInsertSuccess(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'claimDecisionInsertSuccess',
      parentSpanInst
    );
    try {
      /* =========================================================
   CLAIM DECISION INSERT SUCCESS
   ========================================================= */

      console.log('========== CLAIM DECISION INSERT ==========');

      console.log('Claim ID:', bh.local.claimId);

      console.log('Decision:', bh.local.decision);

      console.log('Recommendation:', bh.local.recommendation);

      console.log('STP Eligible:', bh.local.stpEligible);

      console.log('Complexity Band:', bh.local.complexityBand);

      console.log('Fraud Risk Band:', bh.local.fraudRiskBand);

      console.log('Authority Band:', bh.local.authorityBand);

      console.log('Rule Set Version:', bh.local.ruleSetVersion);

      /* =========================================================
   SQL COMPLETED WITHOUT ERROR
   ========================================================= */

      bh.local.claimDecisionInsertSuccess = true;

      /* =========================================================
   GET DECISION ID
   ========================================================= */

      let result = bh.local.claimDecisionResponse;

      let rows = [];

      if (Array.isArray(result)) {
        rows = result;
      } else if (result && Array.isArray(result.rows)) {
        rows = result.rows;
      } else if (result && result.payload && Array.isArray(result.payload)) {
        rows = result.payload;
      } else if (result && result.data && Array.isArray(result.data)) {
        rows = result.data;
      }

      bh.local.claimDecisionId =
        rows.length > 0
          ? rows[0].id || rows[0].claim_decision_id || null
          : null;

      console.log('Claim Decision ID:', bh.local.claimDecisionId);

      console.log(
        'claimDecisionInsertSuccess:',
        bh.local.claimDecisionInsertSuccess
      );

      console.log('============================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cy1Fe1Hc8wDpU15I(bh, parentSpanInst);
      //appendnew_next_claimDecisionInsertSuccess
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6klTRtypHdAZqCBf',
        spanInst,
        'claimDecisionInsertSuccess'
      );
    }
  }

  async sd_cy1Fe1Hc8wDpU15I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cy1Fe1Hc8wDpU15I',
      parentSpanInst
    );
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_OhBYahJpKIdIWsaK'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = undefined;
      params = params ? params : [];
      bh.local.auditResponse = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.auditSql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_KShEl0HcfdjMUMbx(bh, parentSpanInst);
      //appendnew_next_sd_cy1Fe1Hc8wDpU15I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cy1Fe1Hc8wDpU15I',
        spanInst,
        'sd_cy1Fe1Hc8wDpU15I'
      );
    }
  }

  async sd_KShEl0HcfdjMUMbx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KShEl0HcfdjMUMbx',
      parentSpanInst
    );
    try {
      /* =========================================================
   FINAL CLAIM DECISION RESPONSE
   ========================================================= */

      console.log('========== FINAL CLAIM DECISION RESPONSE ==========');

      /* =========================================================
   NORMALIZE FLAGS
   ========================================================= */

      const claimFound =
        bh.local.claimFound === true || bh.local.claimFound === 'true';

      const claimUpdateSuccess =
        bh.local.claimUpdateSuccess === true ||
        bh.local.claimUpdateSuccess === 'true';

      const claimDecisionInsertSuccess =
        bh.local.claimDecisionInsertSuccess === true ||
        bh.local.claimDecisionInsertSuccess === 'true';

      const auditInsertSuccess =
        bh.local.auditInsertSuccess === true ||
        bh.local.auditInsertSuccess === 'true';

      /* =========================================================
   FINAL SUCCESS
   ========================================================= */

      if (
        claimFound &&
        claimUpdateSuccess &&
        claimDecisionInsertSuccess &&
        auditInsertSuccess
      ) {
        bh.local.responseStatus = 200;

        bh.local.finalResponse = {
          success: true,

          message: 'Claim decision updated successfully.',

          claimId: Number(bh.local.claimId),

          claimNumber: bh.local.claimNumber || '',

          decision: bh.local.decision || '',

          status: bh.local.status || '',

          oldStatus: bh.local.oldStatus || '',

          newStatus: bh.local.status || '',

          /* =================================================
           REËLS DECISION
           ================================================= */

          recommendation: bh.local.recommendation || '',

          stpEligible: !!bh.local.stpEligible,

          stpFailureReasons: bh.local.stpFailureReasons || [],

          recommendationScore: bh.local.recommendationScore,

          complexityBand: bh.local.complexityBand || '',

          fraudRiskBand: bh.local.fraudRiskBand || '',

          authorityBand: bh.local.authorityBand || '',

          reasonCodes: bh.local.reasonCodes || [],

          rulesFired: bh.local.rulesFired || [],

          ruleSetVersion: bh.local.ruleSetVersion || '',

          decisionDetails: bh.local.decisionDetails || {},

          /* =================================================
           DATABASE / AUDIT
           ================================================= */

          claimDecisionId: bh.local.claimDecisionId || null,

          auditRecorded: true,

          correlationId: bh.local.correlationId || '',
        };

        console.log('CLAIM DECISION SUCCESS');
      } else {
        bh.local.responseStatus = 500;

        bh.local.finalResponse = {
          success: false,

          message: 'Claim decision update failed.',

          claimId: Number(bh.local.claimId),

          claimNumber: bh.local.claimNumber || '',

          decision: bh.local.decision || '',

          status: bh.local.status || '',

          auditRecorded: auditInsertSuccess,

          claimDecisionRecorded: claimDecisionInsertSuccess,

          correlationId: bh.local.correlationId || '',

          details: {
            claimFound: claimFound,

            claimUpdateSuccess: claimUpdateSuccess,

            claimDecisionInsertSuccess: claimDecisionInsertSuccess,

            auditInsertSuccess: auditInsertSuccess,
          },
        };

        console.error('CLAIM DECISION FAILED');
      }

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log(
        'Final response:',
        JSON.stringify(bh.local.finalResponse, null, 2)
      );

      console.log('Final response status:', bh.local.responseStatus);

      console.log('==================================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WrL4maILWVIjMgvV(bh, parentSpanInst);
      //appendnew_next_sd_KShEl0HcfdjMUMbx
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KShEl0HcfdjMUMbx',
        spanInst,
        'sd_KShEl0HcfdjMUMbx'
      );
    }
  }

  async sd_WrL4maILWVIjMgvV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WrL4maILWVIjMgvV',
      parentSpanInst
    );
    try {
      /* =========================================================
   EMAIL SEND DECISION
   BEFORE SWITCH NODE
   ========================================================= */

      console.log('========== EMAIL SEND DECISION ==========');

      /* =========================================================
   DEFAULT VALUES
   ========================================================= */

      bh.local.emailSend = false;

      bh.local.emailRequired = false;

      bh.local.emailFrom = 'maritdev2017@gmail.com';

      bh.local.emailTo = '';

      /* =========================================================
   CLAIM FOUND
   ========================================================= */

      const claimFound =
        bh.local.claimFound === true || bh.local.claimFound === 'true';

      /* =========================================================
   NORMALIZE CLAIM RESPONSE
   ========================================================= */

      let rows = bh.local.claimResponse;

      if (Array.isArray(rows)) {
        rows = rows;
      } else if (rows && Array.isArray(rows.rows)) {
        rows = rows.rows;
      } else if (rows && Array.isArray(rows.payload)) {
        rows = rows.payload;
      } else if (rows && Array.isArray(rows.data)) {
        rows = rows.data;
      } else {
        rows = [];
      }

      /* =========================================================
   GET CLAIM RECORD
   ========================================================= */

      const claim = rows.length > 0 ? rows[0] : {};

      /* =========================================================
   GET PREFERRED CONTACT METHOD
   ========================================================= */

      const preferredContactMethod = (
        claim.preferred_contact_method ||
        claim.preferred_contact_mehod ||
        claim.preferredContactMethod ||
        ''
      )
        .toString()
        .trim()
        .toUpperCase();

      /* =========================================================
   GET PREFERRED CONTACT VALUE
   ========================================================= */

      const preferredContactValue = (
        claim.preferred_contact_value ||
        claim.preferredContactValue ||
        ''
      )
        .toString()
        .trim();

      /* =========================================================
   VALIDATE EMAIL FORMAT
   ========================================================= */

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const validEmail = emailPattern.test(preferredContactValue);

      /* =========================================================
   DEBUG INPUT
   ========================================================= */

      console.log('Claim Found:', claimFound);

      console.log('Claim Records:', rows.length);

      console.log('Claim Record:', claim);

      console.log('Preferred Contact Method:', preferredContactMethod);

      console.log('Preferred Contact Value:', preferredContactValue);

      console.log('Valid Email:', validEmail);

      /* =========================================================
   EMAIL CONDITION
   =========================================================
   
   Email should be sent ONLY when ALL conditions are true:

   1. Claim exists
   2. Claim record exists
   3. Preferred Contact Method = EMAIL
   4. Preferred Contact Value is not empty
   5. Preferred Contact Value is a valid email
   ========================================================= */

      if (
        claimFound === true &&
        rows.length > 0 &&
        preferredContactMethod === 'EMAIL' &&
        preferredContactValue !== '' &&
        validEmail === true
      ) {
        /* =====================================================
       EMAIL REQUIRED
       ===================================================== */

        bh.local.emailSend = true;

        bh.local.emailRequired = true;

        bh.local.emailTo = preferredContactValue;

        console.log('EMAIL CONDITION SATISFIED');

        console.log('Email Send:', bh.local.emailSend);

        console.log('Email To:', bh.local.emailTo);
      } else {
        /* =====================================================
       EMAIL NOT REQUIRED
       ===================================================== */

        bh.local.emailSend = false;

        bh.local.emailRequired = false;

        bh.local.emailTo = '';

        console.log('EMAIL CONDITION NOT SATISFIED');

        console.log('Claim Found:', claimFound);

        console.log('Records:', rows.length);

        console.log('Preferred Contact Method:', preferredContactMethod);

        console.log('Preferred Contact Value:', preferredContactValue);

        console.log('Valid Email:', validEmail);
      }

      /* =========================================================
   FINAL SWITCH VALUE
   ========================================================= */

      console.log('==========================================');

      console.log('FINAL emailSend:', bh.local.emailSend);

      console.log('FINAL emailRequired:', bh.local.emailRequired);

      console.log('FINAL emailTo:', bh.local.emailTo);

      console.log('==========================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QORpPgvflcdb0fx2(bh, parentSpanInst);
      //appendnew_next_sd_WrL4maILWVIjMgvV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WrL4maILWVIjMgvV',
        spanInst,
        'sd_WrL4maILWVIjMgvV'
      );
    }
  }

  async sd_QORpPgvflcdb0fx2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QORpPgvflcdb0fx2',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.emailSend,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uhiQ595xjvqhfjje(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.emailSend,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.claimDecisionUpdateOut(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QORpPgvflcdb0fx2',
        spanInst,
        'sd_QORpPgvflcdb0fx2'
      );
    }
  }

  async sd_uhiQ595xjvqhfjje(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uhiQ595xjvqhfjje',
      parentSpanInst
    );
    try {
      /* =========================================================
   PREPARE CLAIM DECISION EMAIL
   SWITCH TRUE BRANCH
   ========================================================= */

      console.log('========== PREPARE CLAIM DECISION EMAIL ==========');

      /* =========================================================
   EMAIL CONFIGURATION
   ========================================================= */

      bh.local.emailFrom = 'maritdev2017@gmail.com';

      bh.local.emailResult = {};

      /* =========================================================
   NORMALIZE CLAIM RESPONSE
   ========================================================= */

      let rows = bh.local.claimResponse;

      if (Array.isArray(rows)) {
        rows = rows;
      } else if (rows && Array.isArray(rows.rows)) {
        rows = rows.rows;
      } else if (rows && Array.isArray(rows.payload)) {
        rows = rows.payload;
      } else if (rows && Array.isArray(rows.data)) {
        rows = rows.data;
      } else {
        rows = [];
      }

      /* =========================================================
   GET CLAIM
   ========================================================= */

      const claim = rows.length > 0 ? rows[0] : {};

      /* =========================================================
   CLAIM DETAILS
   ========================================================= */

      const claimId = claim.claim_id || claim.claimId || bh.local.claimId || '';

      const claimNumber =
        claim.claim_number || claim.claimNumber || bh.local.claimNumber || '';

      const policyNumber = claim.policy_number || claim.policyNumber || '';

      const claimantType = claim.claimant_type || claim.claimantType || '';

      const lossType = claim.loss_type || claim.lossType || '';

      const lossLocation = claim.loss_location || claim.lossLocation || '';

      const lossDate = claim.loss_date_time
        ? claim.loss_date_time instanceof Date
          ? claim.loss_date_time.toISOString().split('T')[0]
          : claim.loss_date_time.toString().substring(0, 10)
        : '';

      const lossDescription =
        claim.loss_description || claim.lossDescription || '';

      const estimatedAmount =
        claim.estimated_amount ||
        claim.estimated_loss_amount ||
        claim.estimatedLossAmount ||
        '';

      const driverName = claim.driver_name || claim.driverName || '';

      const vehicleRegistration =
        claim.vehicle_registration || claim.vehicleRegistration || '';

      const vehicleMake = claim.vehicle_make || claim.vehicleMake || '';

      const vehicleModel = claim.vehicle_model || claim.vehicleModel || '';

      /* =========================================================
   DECISION DETAILS
   ========================================================= */

      const decision = bh.local.decision || claim.decision || '';

      const status = bh.local.status || claim.status || '';

      const oldStatus = bh.local.oldStatus || claim.old_status || '';

      const newStatus =
        bh.local.status || claim.new_status || claim.status || '';

      /* =========================================================
   AUDIT DETAILS
   ========================================================= */

      const correlationId =
        bh.local.correlationId ||
        claim.correlation_id ||
        claim.correlationId ||
        '';

      const auditRecorded =
        bh.local.auditInsertSuccess === true ||
        bh.local.auditInsertSuccess === 'true';

      /* =========================================================
   EMAIL TO
   ========================================================= */

      bh.local.emailTo =
        claim.preferred_contact_value ||
        claim.preferredContactValue ||
        bh.local.emailTo ||
        '';

      /* =========================================================
   SUBJECT
   ========================================================= */

      bh.local.emailSubject =
        'FNOL Claim Decision - ' + (claimNumber || claimId);

      /* =========================================================
   PLAIN TEXT BODY
   ========================================================= */

      bh.local.emailBody =
        'Hello,\n\n' +
        'Your insurance claim decision has been updated.\n\n' +
        'CLAIM DETAILS\n' +
        '--------------\n' +
        'Claim ID: ' +
        (claimId || 'N/A') +
        '\n' +
        'Claim Number: ' +
        (claimNumber || 'N/A') +
        '\n' +
        // "Policy Number: " +
        // (policyNumber || "N/A") +
        // "\n" +

        'Claimant Type: ' +
        (claimantType || 'N/A') +
        '\n' +
        'Loss Type: ' +
        (lossType || 'N/A') +
        '\n' +
        'Loss Location: ' +
        (lossLocation || 'N/A') +
        '\n' +
        'Loss Date: ' +
        (lossDate || 'N/A') +
        '\n' +
        'Loss Description: ' +
        (lossDescription || 'N/A') +
        '\n' +
        'Estimated Loss Amount: ' +
        (estimatedAmount || 'N/A') +
        '\n' +
        'Driver Name: ' +
        (driverName || 'N/A') +
        '\n' +
        'Vehicle Registration: ' +
        (vehicleRegistration || 'N/A') +
        '\n' +
        'Vehicle: ' +
        ([vehicleMake, vehicleModel]
          .filter(function (v) {
            return v !== null && v !== undefined && v !== '';
          })
          .join(' ') || 'N/A') +
        '\n\n' +
        'CLAIM DECISION\n' +
        '--------------\n' +
        'Decision: ' +
        (decision || 'N/A') +
        '\n' +
        'Previous Status: ' +
        (oldStatus || 'N/A') +
        '\n' +
        'New Status: ' +
        (newStatus || status || 'N/A') +
        '\n\n' +
        'AUDIT INFORMATION\n' +
        '------------------\n' +
        'Audit Recorded: ' +
        (auditRecorded ? 'Yes' : 'No') +
        '\n' +
        'Correlation ID: ' +
        (correlationId || 'N/A') +
        '\n\n' +
        'This notification was generated automatically by the ' +
        'Insurance Claims FNOL POC.\n\n' +
        'Regards,\n' +
        'Insurance Claims POC Team';

      /* =========================================================
   HTML BODY
   ========================================================= */

      bh.local.emailHtml =
        '<html>' +
        '<body style="font-family: Arial, sans-serif;">' +
        '<h2>Insurance Claims FNOL POC</h2>' +
        '<p>' +
        'Your insurance claim decision has been updated.' +
        '</p>' +
        '<h3>Claim Details</h3>' +
        '<table border="1" cellpadding="8" cellspacing="0">' +
        '<tr>' +
        '<td><b>Claim ID</b></td>' +
        '<td>' +
        (claimId || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Claim Number</b></td>' +
        '<td>' +
        (claimNumber || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Policy Number</b></td>' +
        '<td>' +
        (policyNumber || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Claimant Type</b></td>' +
        '<td>' +
        (claimantType || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Loss Type</b></td>' +
        '<td>' +
        (lossType || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Loss Location</b></td>' +
        '<td>' +
        (lossLocation || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Loss Date</b></td>' +
        '<td>' +
        (lossDate || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Estimated Loss Amount</b></td>' +
        '<td>' +
        (estimatedAmount || 'N/A') +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<h3>Claim Decision</h3>' +
        '<table border="1" cellpadding="8" cellspacing="0">' +
        '<tr>' +
        '<td><b>Decision</b></td>' +
        '<td>' +
        (decision || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Previous Status</b></td>' +
        '<td>' +
        (oldStatus || 'N/A') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>New Status</b></td>' +
        '<td>' +
        (newStatus || status || 'N/A') +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<h3>Audit Information</h3>' +
        '<table border="1" cellpadding="8" cellspacing="0">' +
        '<tr>' +
        '<td><b>Audit Recorded</b></td>' +
        '<td>' +
        (auditRecorded ? 'Yes' : 'No') +
        '</td>' +
        '</tr>' +
        '<tr>' +
        '<td><b>Correlation ID</b></td>' +
        '<td>' +
        (correlationId || 'N/A') +
        '</td>' +
        '</tr>' +
        '</table>' +
        '<br>' +
        '<p>' +
        'This notification was generated automatically by the ' +
        'Insurance Claims FNOL POC.' +
        '</p>' +
        '<p>' +
        'Regards,<br>' +
        'Insurance Claims POC Team' +
        '</p>' +
        '</body>' +
        '</html>';

      /* =========================================================
   DEBUG
   ========================================================= */

      console.log('========== EMAIL READY ==========');

      console.log('Email Send:', bh.local.emailSend);

      console.log('Email From:', bh.local.emailFrom);

      console.log('Email To:', bh.local.emailTo);

      console.log('Email Subject:', bh.local.emailSubject);

      console.log('=================================');
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7K4xmJndrYSxsW9m(bh, parentSpanInst);
      //appendnew_next_sd_uhiQ595xjvqhfjje
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uhiQ595xjvqhfjje',
        spanInst,
        'sd_uhiQ595xjvqhfjje'
      );
    }
  }

  async sd_7K4xmJndrYSxsW9m(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7K4xmJndrYSxsW9m',
      parentSpanInst
    );
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_Tx8xifuCc5sWAFFF'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.local.emailResult = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: bh.local.emailTo,
          subject: bh.local.emailSubject,
          body: bh.local.emailBody,
          cc: undefined,
          bcc: undefined,
          from: bh.local.emailFrom,
          html: bh.local.emailHtml,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: [],
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.claimDecisionUpdateOut(bh, parentSpanInst);
      //appendnew_next_sd_7K4xmJndrYSxsW9m
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7K4xmJndrYSxsW9m',
        spanInst,
        'sd_7K4xmJndrYSxsW9m'
      );
    }
  }

  async claimDecisionUpdateOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.local.responseStatus).send(bh.local.finalResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1VOY74enEH2Q34mi');
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_Claim_Catch
}
