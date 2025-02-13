<script lang="ts">
  import MemoToolbar from "./MemoToolbar.svelte";
  import MemoLinks from "./Parts/MemoLinks.svelte";
  import { viewMemoCard } from "../../../lib/store/memoStore";
  import { view } from "../../../lib/store/viewStore";

  // 본문 수정 핸들러
  const handleContentChange = (event: Event) => {
    const newText = (event.target as HTMLTextAreaElement).value;
    viewMemoCard.update(memo => ({ ...memo, content: newText }));
  };
</script>

<div class="bg-bgPrimary flex items-center justify-center p-6">
  <div class="max-w-5xl w-full bg-cardBg shadow-lg rounded-lg p-8 flex flex-col gap-6">
    
    <!-- 제목 -->
    <h1 class="text-3xl font-bold text-main mb-4">{$viewMemoCard.title}</h1>

    <!-- 본문 수정 가능 (textarea) -->
    <textarea
      class="w-full text-default text-lg border border-sub1 rounded-md p-3 min-h-[450px] resize-none"
      bind:value={$viewMemoCard.content}
      on:input={handleContentChange}
      rows="10"
    ></textarea>

    <!-- 보조 기능: 카테고리 선택 & 파일 첨부 -->
    <MemoToolbar />

    <!-- 날짜, 학생, 메모 링크 -->
    <MemoLinks />

    <!-- 나가기 버튼 -->
    <button on:click={() => view.undo()} class="cursor-pointer mt-8 w-full py-3 text-center btn-gray text-white font-semibold rounded-lg shadow-md">
      나가기
    </button>
  </div>
</div>
