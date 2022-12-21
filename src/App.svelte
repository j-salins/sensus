<script>
  /* import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte '*/
  import sensusLogo from "./assets/sensus_logo2x.png";
  import c1 from "./assets/creators/01.png";
  import c2 from "./assets/creators/02.png";
  import c3 from "./assets/creators/03.png";

  function handleClick() {
    alert("no more alerts");
  }
</script>

<main>
  <header
    class="container bg-snaccent self-center flex flex-col"
    style="height: 80vh;"
  >
    <nav>
      <div class="mx-auto flex items-center justify-between h-14">
        <!-- Brand-->
        <img src={sensusLogo} alt="Sensus Logo" class=" max-h-10" />
        <!-- Nav Links-->
        <ul class="hidden md:flex text-gray-700 text-base">
          <li class="px-3 cursor-pointer flex items-center">
            <a href="#" class="text-white font-bold tracking-wider"
              >PRAESCRIPTUS<sup>TM</sup></a
            >
          </li>
          <li class="px-3 cursor-pointer flex items-center text-white">
            <a href="#" class="text-white font-bold tracking-wider">CONTACTS</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="flex flex-col w-2/3 flex-1 justify-center">
      <h1 class="text-white text-8xl font-bold">
        We make <i class=" font-caption">sense.</i>
      </h1>
      <p class="text-white text-2xl pt-10 max-w-lg">
        Be it communications, influencers, event planning, or crisis
        communication – we make sense of it all whatever the task at hand.
      </p>
    </div>
  </header>

  <section id="praescriptus" class="container bg-sn-light">
    <h3 class="text-snaccent text-5xl font-bold tracking-tighter">
      Praescriptus <sup class="text-sm">TM</sup>
    </h3>
    <div class="flex flex-1 justify-center">
      <div class="w-1/2">
        <p>
          We examine each issue distinctively and create a unique potion by
          following our six senses.
        </p>
      </div>
      <div class="w-1/2">
        <h1 class=" text-snaccent text-8xl font-bold">
          <i class=" font-caption">How</i> it works
        </h1>
        <p>
          Our six-step framework is something that experts have been using in
          medicine and other scientific fields where precision is essential. We
          believe that PR shouldn't be treated any differently.
        </p>
      </div>
    </div>
  </section>

  <section id="makers" class="container bg-sn-dark">
    <div class="w-1/2">
      <h1 class="text-sn-light text-8xl font-bold">
        There are no two identical problems
      </h1>
      <p class="text-sn-light">
        We create tailor-made solutions by relying on top-tier marketing
        expertise and common sense.
      </p>
    </div>
    <h3 class="text-center text-sn-light text-3xl font-bold my-8">Meet our board of sense-makers</h3>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <div class="max-w-sm">
        <img class="mb-5" src={c1} alt="" />
        <p class=" text-sn-light">Ieva Gorkša</p>
        <p class=" text-sn-light font-bold">Business Development Director</p>
        <p class=" text-sn-light">ieva.gorksa@sensus.lv</p>
        <p class=" text-sn-light">+371 29 117 181</p>
      </div>
      <div class="max-w-sm">
        <img class="mb-5" src={c2} alt="" />
        <p class=" text-sn-light">Iveta Puntuze</p>
        <p class=" text-sn-light font-bold">Financial Director </p>
        <p class=" text-sn-light">iveta.puntuze@sensus.lv</p>
        <p class=" text-sn-light">+371 29 646 255</p>
      </div>
      <div class="max-w-sm">
        <img class="mb-5" src={c3} alt="" />
        <p class=" text-sn-light">Kristiāna Pinne</p>
        <p class=" text-sn-light font-bold">Account Manager</p>
        <p class=" text-sn-light">kristiana.pinne@sensus.lv </p>
        <p class=" text-sn-light">+371 26 288 288</p>
      </div>
    </div>
  </section>

  <footer
    class="container bg-snaccent self-center flex flex-col"
    style="height: 70vh;"
  >
    <div class="flex flex-col w-1/2 flex-1 justify-center">
      <h1 class="text-white text-8xl font-bold">
        Let's start making <i class=" font-caption">sense!</i>
      </h1>
    </div>
    <div class="flex w-2/4">
      <div class=" w-full">
        <p class="text-sn-light">Contact us for a consultation and get your prescription.</p>
      </div>
      <div>
        <p class="text-sn-light">info@sensus.lv</p>
        <p class="text-sn-light">+371 29 117 181</p>
      </div>
    </div>
    <h4 class="text-sn-light font-bold tracking-[0.45rem]">MAKING SENSE</h4>
  </footer>
</main>

<style>
</style>
