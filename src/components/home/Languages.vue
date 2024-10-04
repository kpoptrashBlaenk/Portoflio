<template>
  <div class="container py-5">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">My Knowledge</span>
    <div class="mt-2 border-bottom border-secondary sticky-border"></div>

    <div class="row row-cols-1 row-cols-lg-2 align-items-center g-5 py-5 ps-5">
      <div class="col d-flex flex-column align-items-start gap-2 pt-3">
        <h2 class="fw-bold text-body-emphasis">Showcasing My Expertise in Web Development</h2>
        <p class="text-body-secondary">Here, I highlight my proficiency in key technologies used in modern web
          development. My skills span PHP, JavaScript, CSS, and SQL, each of which I use to create dynamic, responsive,
          and efficient web applications.</p>
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <Language
              v-for="(language, index) in languages"
              :key="index"
              :language="language"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LanguageInfo } from "../../types/types"
import Language from "./Language.vue"

const languages: LanguageInfo[] = [
  {
    language: "Javascript & jQuery",
    body: "Proficient in JavaScript, including AJAX for asynchronous data loading and jQuery for efficient DOM manipulation and event handling.",
    color: "bg-gradient-js",
    icon: "fab fa-js"
  },
  {
    language: "PHP & Laravel",
    body: "Experienced in PHP development, including working with the Laravel framework to build scalable and maintainable server-side applications",
    color: "bg-gradient-php",
    icon: "fab fa-php"
  },
  {
    language: "SQL",
    body: "Skilled in SQL for database management and data manipulation, ensuring efficient and secure data storage and retrieval.",
    color: "bg-gradient-sql",
    icon: "fas fa-database"
  },
  {
    language: "CSS & Bootstrap",
    body: "Proficient in CSS for styling and responsive design, and experienced with Bootstrap for rapid UI development and consistent design across devices.",
    color: "bg-gradient-css-html",
    icon: "fab fa-css3"
  }
]
</script>