<script lang="ts">
    import { onMount } from "svelte";
  
    let currentDate = new Date();
    let selectedDate: Date | null = null;
    let days: (Date | null)[] = [];
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();
  
    function getDaysInMonth(year: number, month: number) {
      let date = new Date(year, month, 1);
      let days: (Date | null)[] = [];
  
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
  
      return days;
    }
  
    function generateCalendar() {
      days = getDaysInMonth(year, month);
      const firstDayIndex = days[0]?.getDay() ?? 0;
      for (let i = 0; i < firstDayIndex; i++) {
        days.unshift(null);
      }
    }
  
    function prevMonth() {
      if (month === 0) {
        month = 11;
        year--;
      } else {
        month--;
      }
      generateCalendar();
    }
  
    function nextMonth() {
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      generateCalendar();
    }
  
    function selectDate(day: Date) {
      selectedDate = day;
    }
  
    onMount(() => {
      generateCalendar();
    });
  </script>
  
  <div class="w-full h-screen flex flex-col items-center justify-center bg-light p-6">
    <!-- 달력 컨테이너 -->
    <div class="w-full max-w-screen-lg bg-white rounded-lg shadow-lg p-6 md:p-10 flex flex-col min-h-[80vh] overflow-hidden">
      <!-- 달력 헤더 -->
      <div class="flex justify-between items-center mb-6">
        <button class="cursor-pointer btn-gray px-6 py-3 text-2xl rounded" on:click={prevMonth}>‹</button>
        <h2 class="text-3xl font-bold text-main">{year}년 {month + 1}월</h2>
        <button class="cursor-pointer btn-gray px-6 py-3 text-2xl rounded" on:click={nextMonth}>›</button>
      </div>
  
      <!-- 요일 헤더 -->
      <div class="grid grid-cols-7 text-center text-muted font-semibold text-lg border-b-2 pb-2">
        <div class="text-accent">일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div class="text-sub1">토</div>
      </div>
  
      <!-- 날짜 표시 -->
      <div class="grid grid-cols-7 gap-1 md:gap-2 mt-4 flex-1">
        {#each days as day}
          {#if day}
            <div 
              class="relative aspect-square flex items-start justify-start p-2 text-sm rounded-lg cursor-pointer transition-all duration-200
                {day.toDateString() === new Date().toDateString() ? 'bg-accent text-white' : 'hover:bg-sub2'}
                {selectedDate && selectedDate.toDateString() === day.toDateString() ? 'bg-sub2 text-white font-bold' : ''}"
              on:click={() => selectDate(day)}
            >
              <span class="absolute top-2 left-2">{day.getDate()}</span>
            </div>
          {:else}
            <div class="aspect-square"></div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
