<script>
  export let name;
  export let occupation;
  export let tel;
  export let email;
  export let pic;
</script>
<div class="max-w-sm mb-10">
  <img class="mb-5 h-[380px] w-auto object-cover" src={pic} alt="" />
  <p class=" text-sn-light mb-1">{name}</p>
  <p class=" text-sn-light mb-1 font-bold">{occupation}</p>
  <p class=" text-sn-light mb-1"><a class="hover:hover:border-b-2 hover:transition-all" href="email:{email}">{email}</a></p>
  <p class=" text-sn-light mb-1"><a class="hover:hover:border-b-2 hover:transition-all" href="tel:{tel}">{tel}</a></p>
</div>