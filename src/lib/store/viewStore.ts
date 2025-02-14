import { writable, type Writable } from "svelte/store";
import { createUndoStore } from "./undoStore";
import { memoType, viewMemoCard } from "./memoStore";
import defaultMemoText from "../../defaultData/defaultMemoText.json"

export type pageType = "summary"| "category" | "memo" | "calendar" | "student" | "setting"

export const isSidebarOpened = writable<boolean>(false)
export const view = createUndoStore<pageType>("summary")
export const selectedCategoryId = writable<number | null>(null)
export const viewCategoryId = writable<number | null>(null)
export const viewCategoryName = writable<string | null>(null)

export async function moveToPage(page:pageType , pageNumber:number){
view.set(page)
viewMemoCard.set(defaultMemoText as unknown as memoType) // 임시 자료 로드
}

export const mainColor = "#2563EB"

