<script>
  /* import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte '*/
  import sensusLogo from './assets/sensus_logo2x.png';

  function handleClick() {
		alert('no more alerts')
	}

</script>

<main>
  <header class="container bg-snaccent self-center flex flex-col" style="height: 80vh;">
    <nav>
      <div class="mx-auto flex items-center justify-between h-14">
          <!-- Brand-->
          <img src={sensusLogo} alt="Sensus Logo" class=" max-h-10" />
          <!-- Nav Links-->
          <ul class="hidden md:flex text-gray-700 text-base">
              <li class="px-3 cursor-pointer flex items-center">
                  <a href="#" class="text-white font-bold tracking-wider">PRAESCRIPTUS<sup>TM</sup></a>
              </li>
              <li class="px-3 cursor-pointer flex items-center text-white">
                  <a href="#" class="text-white font-bold tracking-wider">CONTACTS</a>
              </li>
          </ul>
      </div>
  </nav>
  <div class="flex flex-col w-2/3 flex-1 justify-center">
    <h1 class="text-white text-8xl font-bold">We make <i class=" font-caption">sense.</i></h1>
    <p class="text-white text-2xl pt-10 max-w-lg">Be it communications, influencers, event planning, or crisis communication – we make sense of it all whatever the task at hand.</p>
  </div>
  </header>
  <section class="container">
    
    <button on:click|once={handleClick}>
      Click me
    </button>

  </section>
  <footer class="container bg-snaccent" style="height: 70vh;">footr </footer>
</main>

<style>

</style>
