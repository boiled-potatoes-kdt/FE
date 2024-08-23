export type BoardId = "A" | "B" | "C";

export type BoardType = "announcement" | "community" | "follows";

export type Board = {
  boardId: BoardId;
  boardType: BoardType;
};

export const BOARD_LIST: Board[] = [
  { boardId: "A", boardType: "announcement" },
  { boardId: "B", boardType: "community" },
  { boardId: "C", boardType: "follows" },
] as const;

export type CategoryId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

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

export interface BoardCategory {
  categoryId: CategoryId;
  categoryName: CategoryName;
  categoryText: CategoryText;
}

export const COMMUNITY_LIST: BoardCategory[] = [
  { categoryId: 1, categoryName: "question", categoryText: "질문하기" },
  { categoryId: 2, categoryName: "know-how", categoryText: "노하우" },
  { categoryId: 3, categoryName: "accompany", categoryText: "동행" },
  { categoryId: 4, categoryName: "others", categoryText: "기타" },
] as const;

export const FOLLOWS_LIST: BoardCategory[] = [
  { categoryId: 5, categoryName: "blog", categoryText: "블로그" },
  { categoryId: 6, categoryName: "instagram", categoryText: "인스타그램" },
  { categoryId: 7, categoryName: "youtube", categoryText: "유튜브" },
  { categoryId: 8, categoryName: "tictoc", categoryText: "틱톡" },
  { categoryId: 9, categoryName: "others", categoryText: "기타" },
] as const;

export const CATEGORY_LIST: Record<BoardType, BoardCategory[]> = {
  community: COMMUNITY_LIST,
  follows: FOLLOWS_LIST,
} as const;
