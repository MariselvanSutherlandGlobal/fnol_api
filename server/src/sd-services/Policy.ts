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
import { GenericRDBMSOperations } from '../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export class Policy {
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
    this.serviceName = 'Policy';
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
      instance = new Policy(
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
    //appendnew_flow_Policy_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: Policy');
    //appendnew_flow_Policy_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: Policy');

    this.app['get'](
      `${this.serviceBasePath}/policies/search`,
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
          bh = await this.policySearchValidateRequest(bh, parentSpanInst);
          //appendnew_next_sd_5XgzqT10WBwdFsym
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5XgzqT10WBwdFsym');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_Policy_HttpIn
  }
  //   service flows_Policy

  //appendnew_flow_Policy_start

  async policySearchValidateRequest(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policySearchValidateRequest',
      parentSpanInst
    );
    try {
      const searchType = bh.input.query?.searchType;
      const searchValue = bh.input.query?.searchValue;

      bh.local.sqlParams = [];

      if (!searchType && !searchValue) {
        bh.local.sql = `
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
        ORDER BY id
    `;
      } else if (searchType && searchValue) {
        const columnMap = {
          POLICY_NUMBER: 'policy_number',
          REGISTRATION_NUMBER: 'vehicle_registration',
          CUSTOMER_ID: 'customer_id',
        };

        const column = columnMap[searchType];

        if (!column) {
          throw new Error(
            'Invalid searchType. Use POLICY_NUMBER, REGISTRATION_NUMBER, or CUSTOMER_ID.'
          );
        }

        bh.local.sql = `
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
        WHERE ${column} = $1
        ORDER BY id
    `;

        bh.local.sqlParams = [searchValue];
      } else {
        throw new Error(
          'searchType and searchValue must be provided together.'
        );
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.policySearchSql(bh, parentSpanInst);
      //appendnew_next_policySearchValidateRequest
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Q0b2nV8IRKZYktWZ',
        spanInst,
        'policySearchValidateRequest'
      );
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
      let params = bh.local.sqlParams;
      params = params ? params : [];
      bh.local.policyResult = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.sql,
        params
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.policySearchResponse(bh, parentSpanInst);
      //appendnew_next_policySearchSql
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_FvvoYk4sBs2Pmryv',
        spanInst,
        'policySearchSql'
      );
    }
  }

  async policySearchResponse(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'policySearchResponse',
      parentSpanInst
    );
    try {
      const rows = bh.local.policyResult || [];

      bh.local.response = {
        success: true,
        count: rows.length,
        policies: rows.map((row) => ({
          id: Number(row.id),
          policyNumber: row.policy_number,
          customerId: row.customer_id,
          policyStatus: row.policy_status,
          policyStartDate: row.policy_start_date,
          policyEndDate: row.policy_end_date,
          insuredName: row.insured_name,
          vehicleRegistration: row.vehicle_registration,
          vehicleMake: row.vehicle_make,
          vehicleModel: row.vehicle_model,
          vehicleYear: row.vehicle_year,
          coverageType: row.coverage_type,
          coveredPerils: row.covered_perils,
          excessAmount: Number(row.excess_amount),
          sumInsured: Number(row.sum_insured),
          currency: row.currency,
        })),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.policySearchOut(bh, parentSpanInst);
      //appendnew_next_policySearchResponse
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TPPEiWcDbSeNEZ6y',
        spanInst,
        'policySearchResponse'
      );
    }
  }

  async policySearchOut(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YGLD9RVsYkFtpaX2');
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
  //appendnew_flow_Policy_Catch
}
