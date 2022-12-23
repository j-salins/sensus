<script>
    import listbg from "../assets/creators/list-bg.png";
    export let id;
    export let title;
    export let description;
</script>
<div class="flex items-center w-full justify-between ">
  <div class="w-1/3">
    <p class="text-3xl font-bold text-right">{@html title}</p></div>
  <div class="w-1/3 relative flex justify-center">
    <img class="rounded-full w-20" src={listbg} alt="" />
    <span
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">{id}
    </span>
  </div>
  <div class="w-1/3">
    <p class="text-md max-w-xs">{@html description}</p>
  </div>
</div>
<style>

</style>