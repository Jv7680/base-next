import { BaseModel } from './base-model';

export interface VendorProps {
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

export class Vendor extends BaseModel<VendorProps> {
  public static create(props: VendorProps, id: string): Vendor {
    return new Vendor(props, id);
  }

  public get code() {
    return this.props.code as string;
  }

  public get name() {
    return this.props.name as string;
  }

  public get alias() {
    return this.props.alias as any;
  }

  public get contact() {
    return this.props.contact as any;
  }

  public get address() {
    return this.props.address as any;
  }

  public get contractLink() {
    return this.props.contractLink as any;
  }

  public get portalLink() {
    return this.props.portalLink as any;
  }

  public get portalAccount() {
    return this.props.portalAccount as any;
  }

  public get portalPassword() {
    return this.props.portalPassword as any;
  }

  public get apiDocument() {
    return this.props.apiDocument as any;
  }

  public get bankingBeneficiary() {
    return this.props.bankingBeneficiary as any;
  }

  public get bankingName() {
    return this.props.bankingName as any;
  }

  public get bankingAccount() {
    return this.props.bankingAccount as any;
  }

  public get bankingAddress() {
    return this.props.bankingAddress as any;
  }

  public get bankingIbanCode() {
    return this.props.bankingIbanCode as any;
  }

  public get bankingSwiftCode() {
    return this.props.bankingSwiftCode as any;
  }

  public get bankingNote() {
    return this.props.bankingNote as any;
  }

  public get representative() {
    return this.props.representative as any;
  }

  public get apiKey() {
    return this.props.apiKey as any;
  }

  public get apiSecret() {
    return this.props.apiSecret as any;
  }

  public get baseUrl() {
    return this.props.baseUrl as any;
  }

  public get userName() {
    return this.props.userName as any;
  }

  public get password() {
    return this.props.password as any;
  }
}
