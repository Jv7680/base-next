import { Specification, SpecificationProps } from '@/models';
import { GetSpecificationResponse } from './dtos';

export class SpecificationMapper {
  public static toModel(dto: GetSpecificationResponse): Specification {
    const props: SpecificationProps = {
      specificationCode: dto.specificationCode,
      specificationName: dto.specificationName,
      specificationValue: dto.specificationValue,
    };

    const specification = Specification.create(props, dto.id);
    specification.updatedAt = dto.updatedAt;
    specification.createdAt = dto.createdAt;

    return specification;
  }
}
