import { Category, CategoryProps } from '@/models';
import { GetCategoryResponse } from './dtos';

export class CategoryMapper {
  public static toModel(dto: GetCategoryResponse): Category {
    const props: CategoryProps = {
      categoryType: dto.categoryType,
      categoryCode: dto.categoryCode,
      categoryName: dto.categoryName,
    };

    const category = Category.create(props, dto.id);
    category.updatedAt = dto.updatedAt;
    category.createdAt = dto.createdAt;

    return category;
  }
}
