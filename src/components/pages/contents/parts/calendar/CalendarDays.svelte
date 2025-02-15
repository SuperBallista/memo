<script lang="ts">
    import defaultCategoryContent from "../../../../../defaultData/defaultCategoryContent.json";
    import { view } from "../../../../../lib/store/viewStore";
    import type { memoType } from "../../../../../lib/types/memoTypes";


    export let day: Date | null;
    let isOtherMonth = day && day.getMonth() !== new Date().getMonth();

let memoList = defaultCategoryContent as unknown as memoType[]


</script>



{#if isOtherMonth}
<div 
  class="relative md:aspect-[3/4] aspect-[9/16] flex flex-row flex-wrap gap-2 items-start justify-start text-sm rounded-lg cursor-pointer transition-all duration-200"
>
  <span class="absolute top-2 left-2">{day.getDate()}</span>

  <div class="gap-0 p-0 m-0 overflow-hidden h-[160px]">
    <br/><br/>
    {#each memoList as memo}
      <div class="text-muted text-sm bg-light rounded-md shadow cursor-pointer 
                  overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1"
                  on:click={()=>{view.set("memo")}}>
                  
        {memo.title}
      </div>   
    {/each}
  </div>
  </div>
{:else}
<div 
  class="relative md:aspect-[3/4] aspect-[9/16] flex flex-row flex-wrap gap-2 items-start justify-start text-sm rounded-lg cursor-pointer transition-all duration-200"
>  <span class="absolute top-2 left-2 text-gray">{day.getDate()}</span>
<div class="gap-0 p-0 m-0 overflow-hidden h-[160px]">
  <br/><br/>
  {#each memoList as memo}
    <div class="text-muted text-sm bg-light rounded-md shadow cursor-pointer 
                overflow-hidden text-ellipsis whitespace-nowrap px-2 py-1"
                on:click={()=>{view.set("memo")}}>
      {memo.title}
    </div>   
  {/each}
</div>
</div>
{/if}
