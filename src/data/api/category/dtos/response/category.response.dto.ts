interface BaseCategory {
  id: string;
  createdAt: string;
  updatedAt: string;
  categoryType: string;
  categoryCode: string;
  categoryName: string;
  level: number;
  status: string;
}

export interface CategoryResponse extends BaseCategory {}

export interface GetCategoryResponse extends BaseCategory {}
