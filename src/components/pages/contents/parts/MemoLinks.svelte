<script lang="ts">
    import { myStudent, viewMemoCard } from "../../../../lib/store/memoStore";
    let showDateList = false;
    let showStudentList = false;
    let showMemoList = false;
  
    // 날짜 포맷 변환 함수
    const formatDate = (date: Date) => {
      return new Date(date).toLocaleString("ko-KR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    };
  </script>
  
  <div class="flex gap-6 text-lg">
    <!-- 날짜 -->
    {#if $viewMemoCard.dateTimeLink.length > 0}
      <div class="flex items-center cursor-pointer" on:click={() => showDateList = !showDateList}>
        📅 <span class="ml-1">({$viewMemoCard.dateTimeLink.length})</span>
      </div>
    {/if}
  
    <!-- 학생 -->
    {#if $viewMemoCard.studentLink.length > 0}
      <div class="flex items-center cursor-pointer" on:click={() => showStudentList = !showStudentList}>
        👤 <span class="ml-1">({$viewMemoCard.studentLink.length})</span>
      </div>
    {/if}
  
    <!-- 메모 -->
    {#if $viewMemoCard.memoLink.length > 0}
      <div class="flex items-center cursor-pointer" on:click={() => showMemoList = !showMemoList}>
        🔗 <span class="ml-1">({$viewMemoCard.memoLink.length})</span>
      </div>
    {/if}
  </div>
  
  <!-- 날짜 상세 리스트 -->
  {#if showDateList}
    <div class="mt-2 bg-card p-3 rounded">
      <h3 class="text-lg font-semibold text-main">📅 언급된 날짜</h3>
      <ul class="text-default text-sm list-disc pl-5">
        {#each $viewMemoCard.dateTimeLink as date}
          <li>{formatDate(date)}</li>
        {/each}
      </ul>
    </div>
  {/if}
  
  <!-- 학생 상세 리스트 -->
  {#if showStudentList}
    <div class="mt-2 bg-card p-3 rounded">
      <h3 class="text-lg font-semibold text-main">👤 언급된 학생</h3>
      <ul class="text-default text-sm list-disc pl-5">
        {#each $viewMemoCard.studentLink as studentId}
          <li>{$myStudent[studentId] || `학생 ID: ${studentId}`}</li>
        {/each}
      </ul>
    </div>
  {/if}
  