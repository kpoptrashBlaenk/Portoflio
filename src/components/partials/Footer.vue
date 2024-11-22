<template>
  <div class="container">
    <footer
      class="d-flex flex-wrap justify-content-between py-3 my-4 border-top"
    >
      <div class="col-1 d-flex">
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/kpoptrashBlaenk"
          class="mb-3 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-github"></i>
        </a>
      </div>

      <div class="col-1 d-flex justify-content-end list-styled">
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-tiktok"></i>
        </a>
        <a
          href="/"
          class="mb-3 me-2 text-body-secondary text-decoration-none lh-1"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a href="/" class="mb-3 text-body-secondary text-decoration-none lh-1">
          <i class="fab fa-reddit"></i>
        </a>
      </div>

      <div class="col-12 row d-flex justify-content-between fs-8 mx-0">
        <div
          class="col-4 d-flex flex-column justify-content-start fw-bold px-0"
        >
          <h4>Owner</h4>
          <div>Aldin Music</div>
          <div>aldinmusik@gmail.com</div>
          <div>Hosted by ©Render</div>
          <div>Portfolio</div>
          <div class="mt-1">
            <button
              type="button"
              class="btn btn-sm text-bg-full dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              English
            </button>
            <ul class="dropdown-menu bg-full-inverse">
              <li class="dropdown-item bg-full-inverse cursor-pointer">
                English
              </li>

              <li class="dropdown-item bg-full-inverse cursor-pointer">
                Deutsch
              </li>

              <li class="dropdown-item bg-full-inverse cursor-pointer">
                Francais
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-6 col-md-7 col-lg-4 d-flex flex-column justify-content-start px-0 text-end"
        >
          <h4>Legal Mentions</h4>
          <div class="mb-2">
            All content, including text, images, and files, on this website is
            the property of Aldin Music and is protected by intellectual
            property laws.
          </div>
          <div class="mb-2">
            This website does not collect any personal data from its users.
          </div>
          <div class="mb-2">
            These legal mentions are governed by the laws of France.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.btn:hover {
  border-color: var(--bs-btn-active-border-color);
}

.dropdown-item:hover {
  background-color: var(--bs-bg-full-inverse);
}
</style>
