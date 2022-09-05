<script>
  import avi from "./assets/halo.png";
  import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<!-- svelte-ignore a11y-missing-content -->
<main>
  <div class="hero min-h-screen bg-gradient-to-b from-blue-500 to-blue-300">
    <div class="hero-overlay bg-opacity-60" />
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <div class="avatar">
          <div
            class="w-32 p-4 rounded-full ring ring-primary ring-offset-blue-300 ring-offset-2"
          >
            <img alt="me" src={avi} />
          </div>
        </div>
        <h1 class="mb-2 text-5xl font-bold">Michael Saffold</h1>
        <p class="mb-1">AS Computer Network Engineering • SBCC 2017</p>
        <p class="mb-2">🍋 Goleta, CA</p>
        <div class="justify-center">
          <a
            href="https://linkedin.com/in/MichaelSaffold"
            class="btn btn-primary my-2 bi bi-linkedin text-3xl"
          />
          <a
            href="https://github.com/MichaelSaffold"
            class="btn btn-primary my-2 bi bi-github text-3xl"
          />
        </div>
      </div>
    </div>
  </div>
</main>
