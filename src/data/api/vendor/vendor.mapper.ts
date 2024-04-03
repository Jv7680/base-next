import { Vendor, VendorProps } from '@/models';
import { GetVendorResponse } from './dtos';

export class VendorMapper {
  public static toModel(dto: GetVendorResponse): Vendor {
    const props: VendorProps = {
      code: dto.code,
      name: dto.name,
      alias: dto.alias,
      contact: dto.contact,
      address: dto.address,
      contractLink: dto.contractLink,
      portalLink: dto.portalLink,
      portalAccount: dto.portalAccount,
      portalPassword: dto.portalPassword,
      apiDocument: dto.apiDocument,
      bankingBeneficiary: dto.bankingBeneficiary,
      bankingName: dto.bankingName,
      bankingAccount: dto.bankingAccount,
      bankingAddress: dto.bankingAddress,
      bankingIbanCode: dto.bankingIbanCode,
      bankingSwiftCode: dto.bankingSwiftCode,
      bankingNote: dto.bankingNote,
      representative: dto.representative,
      apiKey: dto.apiKey,
      apiSecret: dto.apiSecret,
      baseUrl: dto.baseUrl,
      userName: dto.userName,
      password: dto.password,
    };

    const vendor = Vendor.create(props, dto.id);
    vendor.updatedAt = dto.updatedAt;
    vendor.createdAt = dto.createdAt;

    return vendor;
  }
}
