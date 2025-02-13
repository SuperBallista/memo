import { writable, type Writable } from "svelte/store";
import { createUndoStore } from "./undoStore";


export const isSidebarOpened = writable<boolean>(false)
export const view = createUndoStore<"summary"| "category" | "memo" | "calendar" | "student" | "setting">("summary")
export const selectedCategoryId = writable<number | null>(null)
export const viewCategoryId = writable<number | null>(null)
export const viewCategoryName = writable<string | null>(null)

export async function moveToMemo(memoId:number=1){
view.set("memo")
}