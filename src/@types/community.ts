export type CategoryName =
  | "question"
  | "know-how"
  | "accompany"
  | "blog"
  | "instagram"
  | "youtube"
  | "tictoc"
  | "others";

export type CategoryText =
  | "질문하기"
  | "노하우"
  | "동행"
  | "블로그"
  | "인스타그램"
  | "유튜브"
  | "틱톡"
  | "기타";

export interface CommunityCategory {
  categoryId: number;
  categoryName: CategoryName;
  categoryText: CategoryText;
}

export const CategoryList: CommunityCategory[] = [
  { categoryId: 1, categoryName: "question", categoryText: "질문하기" },
  { categoryId: 2, categoryName: "know-how", categoryText: "노하우" },
  { categoryId: 3, categoryName: "accompany", categoryText: "동행" },
  { categoryId: 4, categoryName: "blog", categoryText: "블로그" },
  { categoryId: 5, categoryName: "instagram", categoryText: "인스타그램" },
  { categoryId: 6, categoryName: "youtube", categoryText: "유튜브" },
  { categoryId: 7, categoryName: "tictoc", categoryText: "틱톡" },
  { categoryId: 8, categoryName: "others", categoryText: "기타" },
] as const;
