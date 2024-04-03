export interface BaseVendor {
  id: string;
  updatedAt: string;
  createdAt: string;
  code: string;
  name: string;
  alias: any;
  contact: any;
  address: any;
  contractLink: any;
  portalLink: any;
  portalAccount: any;
  portalPassword: any;
  apiDocument: any;
  bankingBeneficiary: any;
  bankingName: any;
  bankingAccount: any;
  bankingAddress: any;
  bankingIbanCode: any;
  bankingSwiftCode: any;
  bankingNote: any;
  representative: any;
  apiKey: any;
  apiSecret: any;
  baseUrl: any;
  userName: any;
  password: any;
}

export interface VendorResponse extends BaseVendor {}

export interface GetVendorResponse extends BaseVendor {}
