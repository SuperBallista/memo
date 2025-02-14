import { writable } from "svelte/store";
import defaultAllCategories from "../../defaultData/defaultAllCategories.json"
import { createUndoStore } from "./undoStore";

//카테고리 상태스토어
export const myCategory = writable<categoryInterface[]>([])
export const allCategories = writable<categoryInterface[]>(defaultAllCategories)
export interface categoryInterface { id:number, name:string, children: categoryInterface[], parentId:number | null, orderNum:number }

// 현재 선택된 카테고리
export const selectedCategory = writable<number | null>(null);


export type memoType = {
  id: number;
  title: string;
  content: string;
  category: number;
  orderNum: number;
  dateTimeLink: Date[];
  studentLink: number[];
  memoLink: number[];
  filesUrl?: string[] | undefined;
};


export type studentCache = {
id: number,
name: string,
class: string
}

export const viewMemoCard = createUndoStore<memoType | null>(null)


export let myStudent = writable<studentCache[]>([])


export const currentLine = writable("");


