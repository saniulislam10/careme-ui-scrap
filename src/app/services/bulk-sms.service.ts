import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BulkSms} from '../interfaces/bulk-sms';


const API_BULK_SMS = environment.apiBaseLink + '/api/bulk-sms/';

@Injectable({
  providedIn: 'root'
})
export class BulkSmsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * iSMS SSLWIRELESS
   * POWERED BY SSLWIRELESS
   * URL: http://login.bulksmsbd.com/default.php
   */

  sentSingleSms(phoneNo: string, message: string, uid: string) {
    const header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let params = new HttpParams();
    params = params.append('user', environment.smsUser);
    params = params.append('pass', environment.smsPass);
    params = params.append('sid', environment.smsSid);
    params = params.append('msisdn', phoneNo);
    params = params.append('sms', message);
    params = params.append('csmsid', uid);
    // const body = {
    //   user: environment.smsUser,
    //   pass: environment.smsPass,
    //   msisdn: phoneNo,
    //   sms: message,
    //   sid: environment.smsSid,
    //   csmsid: uid
    // };
    return this.httpClient.get<any>(API_BULK_SMS, {headers: header, params});
  }

  sendSmsBySslAPi(data: BulkSms) {
    return this.httpClient.post<{ success: boolean; message: string; xmlRes: string }>
    (API_BULK_SMS + 'sent-bulk-sms-by-ssl', data);
  }

  /**
   * SENT MESSAGE With Subscribe
   */
  sendMessageWithSubscribe(phoneNo: string, message: string) {
    const messageBody: BulkSms = {
      sms: message,
      csmsid: phoneNo,
      msisdn: phoneNo
    };
    this.sendSmsBySslAPi(messageBody)
      .subscribe(res => {

      }, error => {
        console.log(error);
      });
  }


}
