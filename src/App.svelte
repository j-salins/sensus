<script>
  import sensusLogo from "./assets/sensus_logo2x.png";
  import c1 from "./assets/creators/01.png";
  import c2 from "./assets/creators/02.png";
  import c3 from "./assets/creators/03.png";
  import icon_red from "./assets/creators/sensus-icon-red.svg";
  import icon_dark from "./assets/creators/sensus-icon-dark.svg";
  import header_bg from "./assets/creators/header-bg.png"
  import about_bg from "./assets/creators/about-bg.png"

  import ListItemLarge from "./components/ListItemLarge.svelte";


  let list_items = [
		{ title: 'Desk research', description: 'Overview and initial information <br/> gathering.' },
    { title: 'Market research', description: 'Researching the industry, <br/> audience, and stakeholders.' },
    { title: 'Diagnosis', description: 'Problem identification and <br/> definition.' },
    { title: 'Prescription', description: 'Instruction of <br/> recommendations.' },
    { title: 'Treatment', description: 'Taking action in order to <br/> improve the condition.' },
    { title: 'Prophylaxis', description: 'Ongoing situation control and <br/> prevention.' },
	];


  function handleClick() {
    alert("no more alerts");
  }
</script>

<main>
  <header class=" bg-snaccent">
    <div class="container bg-snaccent self-center flex flex-col bg-fixed bg-cover bg-left bg-no-repeat" style="height: 80vh; background-image: url({header_bg})">
      <nav>
        <div class="mx-auto flex items-center justify-between md:h-10">
          <!-- Brand-->
          <img src={sensusLogo} alt="Sensus Logo" class="max-h-8 md:max-h-10" />
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
      <div class="flex flex-col md:w-2/3 flex-1 justify-center">
        <h1 class="text-white text-7xl md:text-8xl font-bold">
          We make <i class=" font-caption">sense.</i>
        </h1>
        <p class="text-white text-lg md:text-2xl pt-10 max-w-xs md:max-w-lg">
          Be it communications, influencers, event planning, or crisis
          communication – we make sense of it all whatever the task at hand.
        </p>
      </div>
  </div>
  </header>

  <section id="praescriptus" class="bg-sn-light sm:py-10 md:py-15" >
    <div class="container md:pb-64 bg-cover md:bg-[length:70%_auto] bg-right-top md:bg-right md:bg-center bg-no-repeat" style="background-image: url({about_bg})">
      <div class="flex pt-7 pb-7 md:pb-10">
        <img src={icon_red} class="mr-3 w-10" alt="">
        <h3 class="text-snaccent text-4xl md:text-5xl font-bold tracking-tighter whitespace-nowrap">
        Praescriptus <sup class="text-sm">TM</sup>
        </h3>
      </div>
      <div class="md:flex flex-1 justify-center ">
        <div class="md:w-1/2">
          <p class="text-snaccent md:max-w-sm md:pl-14">
            We examine each issue distinctively and create a unique potion by
            following our six senses.
          </p>
        </div>
        <div class="md:w-1/2">
          <h1 class=" text-snaccent text-7xl font-bold pt-20 pb-7 md:pb-10">
            <i class="font-caption">How</i> it works
          </h1>
          <p class="text-snaccent md:max-w-md">
            Our six-step framework is something that experts have been using in
            medicine and other scientific fields where precision is essential. We
            believe that PR shouldn't be treated any differently.
          </p>
        </div>
      </div>
    </div>
    <div class="sensus-list my-20 py-20 mx-auto max-w-5xl flex flex-col items-center justify-center gap-10 shadow-hard">
      <div class="flex justify-items-center"><img src="{ icon_dark }" alt="" class="mr-2"><p class="text-4xl font-bold tracking-tight">Praescriptus<sup>TM</sup></p></div>

      {#each list_items as { title, description }, id}

      <ListItemLarge id = {id+1} {title} {description}/>

      {/each}

    </div>
  </section>

  <section id="makers" class="bg-sn-dark">
    <div class="container md:p-20">
      <div class="md:w-2/3">
        <h1 class="text-sn-light text-6xl md:text-8xl font-bold">
          There are no two <i class=" font-caption">identical</i>  problems
        </h1>
        <p class="text-sn-light max-w-sm py-20">
          We create tailor-made solutions by relying on top-tier marketing
          expertise and common sense.
        </p>
      </div>
      <h3 class="text-center text-sn-light text-3xl font-bold my-8">
        Meet our board of sense-makers
      </h3>
      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-10">
        <div class="max-w-sm mb-10">
          <img class="mb-5" src={c1} alt="" />
          <p class=" text-sn-light">Ieva Gorkša</p>
          <p class=" text-sn-light font-bold">Business Development Director</p>
          <p class=" text-sn-light">ieva.gorksa@sensus.lv</p>
          <p class=" text-sn-light">+371 29 117 181</p>
        </div>
        <div class="max-w-sm mb-10">
          <img class="mb-5" src={c2} alt="" />
          <p class=" text-sn-light">Iveta Puntuze</p>
          <p class=" text-sn-light font-bold">Financial Director</p>
          <p class=" text-sn-light">iveta.puntuze@sensus.lv</p>
          <p class=" text-sn-light">+371 29 646 255</p>
        </div>
        <div class="max-w-sm mb-10">
          <img class="mb-5" src={c3} alt="" />
          <p class=" text-sn-light">Kristiāna Pinne</p>
          <p class=" text-sn-light font-bold">Account Manager</p>
          <p class=" text-sn-light">kristiana.pinne@sensus.lv</p>
          <p class=" text-sn-light">+371 26 288 288</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-snaccent">
    <div class="container self-center flex flex-col">
      <div class="flex flex-col w-2/3 flex-1 justify-center">
        <h1 class="text-white text-7xl md:text-8xl font-bold md:ml-20 py-10">
          Let's start making <i class=" font-caption">sense!</i>
        </h1>
      </div>
      <div class="md:flex md:w-7/12">
        <div class=" w-full">
          <p class="text-sn-light max-w-xs md:ml-20">
            Contact us for a consultation and get your prescription.
          </p>
        </div>
        <div class="mt-10 md:mt-0">
          <p class="text-sn-light">info@sensus.lv</p>
          <p class="text-sn-light">+371 29 117 181</p>
        </div>
      </div>
      <h4 class="text-sn-light font-bold tracking-[0.45rem] mt-20 mb-10">MAKING SENSE</h4>
    </div>
  </footer>
</main>

<style>
</style>
