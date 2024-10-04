<template>
  <div class="container my-5">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">Repositories
            <i class="fab fa-github px-1"></i>
        <a class="link-underline link-underline-opacity-0" href="https://github.com/kpoptrashBlaenk" target="_blank">
            <img class="rounded mb-2" src="https://avatars.githubusercontent.com/u/160846759?v=4" alt="githubAvatar"
                 width="32" height="32">
        </a>
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div id="carouselExample" class="mt-3 carousel d-flex justify-content-between position-relative"
         style="height:22rem">
      <button class="prev-button m-0 position-absolute translate-middle-y top-50 start-0 border-tertiary z-1 rounded"
              style="height:3em;padding-top:0.4em" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon m-0" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <div id="carouselInner" class="carousel-inner position-relative">
        <div id="carouselLoading" class="position-absolute top-50 start-50 translate-middle-x" style="height:25rem">
          <div class="spinner-grow text-tertiary" output="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-tertiary" output="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-tertiary" output="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
      <button class="next-button m-0 position-absolute translate-middle-y top-50 end-0 border-tertiary z-1 rounded"
              style="height:3em;padding-top:0.4em" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon m-0" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'

const languageColors = [
  {language: "JavaScript", color: "#f1e05a", textColor: "#000000"}, // Black text
  {language: "HTML", color: "#e34c26", textColor: "#FFFFFF"}, // White text
  {language: "CSS", color: "#563d7c", textColor: "#FFFFFF"}, // White text
  {language: "PHP", color: "#4F5D95", textColor: "#FFFFFF"}, // White text
  {language: "TypeScript", color: "#3178c6", textColor: "#FFFFFF"}, // White
]

let carouselInner
let carouselItem
let cardWidth

$(window).on('resize', setCardWidth)

function getLanguageColor(language) {
  const languageColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase())
  return languageColor ? languageColor.color : '#000000'
}

function getLanguageTextColor(language) {
  const languageTextColor = languageColors.find(lc => lc.language.toLowerCase() === language.toLowerCase())
  return languageTextColor ? languageTextColor.textColor : '#FFFFFF'
}

function dateFormat(value) {
  return value.substring(0, 10)
}

function setCardWidth() {
  cardWidth = carouselItem.outerWidth(true)
}

function moveFirstToLast() {
  let firstItem = carouselItem.first()
  firstItem.remove()
  carouselInner.append(firstItem)
  carouselInner.scrollLeft(carouselInner.scrollLeft() - cardWidth)
}

function moveLastToFirst() {
  let lastItem = carouselItem.last()
  lastItem.remove()
  carouselInner.prepend(lastItem)
  carouselInner.scrollLeft(carouselInner.scrollLeft() + cardWidth)
}

onMounted(() => {
  fetchGitHubRepos().then(function () {
    carouselInner = $('.carousel-inner')
    carouselItem = $('.carousel-item')

    setCardWidth()
  })

  $('.next-button').on('click', function () {
    carouselItem = $('.carousel-item')
    carouselInner.animate({scrollLeft: '+=' + cardWidth}, 400, function () {
      moveFirstToLast()
    })
  })

  $('.prev-button').on('click', function () {
    carouselItem = $('.carousel-item')
    moveLastToFirst()
    carouselInner.animate({scrollLeft: '-=' + cardWidth}, 400)
  })

})

async function fetchGitHubRepos() {
  let token = import.meta.env.VITE_GITHUB_API_KEY

  const response = await fetch('https://api.github.com/users/kpoptrashBlaenk/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  })
  const repos = await response.json()

  const repoCardsContainer = $('#carouselInner')

  $('#carouselLoading').remove()

  let firstCard = true

  for (const repo of repos) {
    const commits = await fetch(`https://api.github.com/repos/kpoptrashBlaenk/${repo.name}/commits`, {
      headers: {
        Authorization: token
      }
    })
    const commitsJSON = await commits.json()
    const commitCount = commitsJSON.length

    const carouselItem = $('<div>', {
      class: `carousel-item ${firstCard ? 'active' : ''}`
    }).appendTo(repoCardsContainer)

    const card = $('<div>', {
      class: 'card project-card shadow-lg',
      style: 'width: 18rem; height: 20rem'
    }).appendTo(carouselItem)

    const link = $('<a>', {
      href: `${repo.html_url}`,
      target: '_blank',
      class: 'card-header text-center'
    }).appendTo(card)

    $('<h2>', {
      class: 'card-title'
    }).html(`${repo.name}`).appendTo(link)

    const cardBody = $('<div>', {
      class: 'card-body position-relative mb-3'
    }).appendTo(card)

    $('<p>', {
      class: 'card-text'
    }).text(`${repo.description}`).appendTo(cardBody)

    const infos = $('<div>', {
      class: 'position-absolute bottom-0'
    }).appendTo(cardBody)

    $('<span>', {
      class: 'badge',
      style: `background-color: ${getLanguageColor(repo.language)}; color: ${getLanguageTextColor(repo.language)}`
    }).text(repo.language).appendTo(infos)

    $('<div>', {}).html(`<strong>Commits:</strong> ${commitCount}`).appendTo(infos)
    $('<div>', {}).html(`<strong>Updated:</strong> ${dateFormat(repo.updated_at)}`).appendTo(infos)
    $('<div>', {}).html(`<strong>Created:</strong> ${dateFormat(repo.created_at)}`).appendTo(infos)

    firstCard = false
  }
}
</script>

<style>
@media screen and (min-width: 1005px) {
  .carousel-item {
    flex: 0 0 calc(100% / 3);
  }
}

@media screen and (min-width: 768px) and (max-width: 1005px) {
  .carousel-item {
    flex: 0 0 calc(100% / 2);
  }
}

@media screen and (min-width: 0px) and (max-width: 768px) {
  .carousel-item {
    flex: 0 0 calc(100% / 1);
  }
}

.carousel-inner {
  display: flex;
  padding: 1vw;
}

.carousel .carousel-item {
  display: flex;
  margin: 0px;
  justify-content: center;
}

.carousel .carousel-item.active {
  display: flex; /* active is overriding carousel-item display */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(100%); /* light mode had wrong colors */
}
</style>