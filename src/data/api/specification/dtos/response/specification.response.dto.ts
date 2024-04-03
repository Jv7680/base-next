export interface BaseSpecification {
  id: string;
  updatedAt: string;
  createdAt: string;
  specificationCode: string;
  specificationName: string;
  specificationValue: string;
}

export interface SpecificationResponse extends BaseSpecification {}

export interface GetSpecificationResponse extends BaseSpecification {}
