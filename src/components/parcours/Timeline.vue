<template>
  <div class="container my-5">
    <span class="fs-2 fw-bold pb-2 pt-3 ps-3 ms-5 text-body-emphasis sticky-xl-top sticky-title">Timeline
    </span>
    <div class="mt-2 border-bottom border-secondary"></div>

    <div class="mt-3 mx-5">
      <label id="timelineRangeLabel" for="timelineRange" class="form-label"></label>
      <input value="0" type="range" class="form-range" min="0" max="4" step="1" id="timelineRange">

      <div class="accordion" id="timelineAccordion">
        <div class="accordion-item">
          <div class="accordion-header accordion-button collapsed">
            2001 - <strong class="ms-1">Birth</strong>
          </div>
          <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body">
              <div class="card mx-5" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">Mother</h5>
                  <p class="card-text"><strong>Location:</strong> Frankfurt am Main, Germany</p>
                  <p class="card-text"><strong>Time:</strong> 2001</p>
                  <p class="card-text"><strong>Notes:</strong> I'VE BEEN BORN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header accordion-button collapsed">
            2007 - 2011 - <strong class="ms-1">Elementary School</strong>
          </div>
          <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body">
              <div class="card mx-5" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">Günderrodeschule</h5>
                  <p class="card-text"><strong>Location:</strong> Frankfurt am Main, Germany</p>
                  <p class="card-text"><strong>Time:</strong> Summer 2007 - Summer 2011</p>
                  <p class="card-text"><strong>Notes:</strong> Finished Elementary School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header accordion-button collapsed">
            2011 - 2020 - <strong class="ms-1">Middle & High School</strong>
          </div>
          <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body">
              <div class="card mx-5" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">Bettinaschule</h5>
                  <p class="card-text"><strong>Focus:</strong> Math, Physics</p>
                  <p class="card-text"><strong>Location:</strong> Frankfurt am Main, Germany</p>
                  <p class="card-text"><strong>Time:</strong> Summer 2011 - November 2020</p>
                  <p class="card-text"><strong>Notes:</strong> Quit High School because of personal problems, ended up
                    in France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header accordion-button collapsed">
            2021 - 2023 - <strong class="ms-1">High School</strong>
          </div>
          <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body">
              <div class="card mx-5" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">Microlycée</h5>
                  <p class="card-text"><strong>Focus:</strong> Math, English</p>
                  <p class="card-text"><strong>Location:</strong> Nancy, France</p>
                  <p class="card-text"><strong>Time:</strong> Summer 2021 - Summer 2023</p>
                  <p class="card-text"><strong>Notes:</strong> Finished High School (16/20)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <div class="accordion-header accordion-button collapsed">
            2023 - Present - <strong class="ms-1">Dual Studies</strong>
          </div>
          <div class="accordion-collapse collapse" data-bs-parent="#timelineAccordion">
            <div class="accordion-body row">
              <div class="card mx-5 col" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">Campus MEWO</h5>
                  <p class="card-text"><strong>Subject:</strong> BTS SIO SLAM</p>
                  <p class="card-text"><strong>Location:</strong> Metz, France</p>
                  <p class="card-text"><strong>Time:</strong> Summer 2023 - Present</p>
                  <p class="card-text"><strong>Notes:</strong> 16/20 average, requires apprenticeship at the same time
                  </p>
                </div>
              </div>
              <div class="card mx-5 col" style="margin-top:-20px">
                <div class="card-body">
                  <h5 class="card-title mb-3">SNCF EIC LORCA</h5>
                  <p class="card-text"><strong>Position:</strong> IT Expert, Developer</p>
                  <p class="card-text"><strong>Location:</strong> Nancy, France</p>
                  <p class="card-text"><strong>Time:</strong> Summer 2023 - Present</p>
                  <p class="card-text"><strong>Notes:</strong> Paid Apprenticeship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'

let timelineCollapses
let timelineRangeLabel
let timelineYear

onMounted(() => {
  timelineCollapses = $('.accordion-collapse')
  let timelineRange = $('#timelineRange')
  timelineRangeLabel = $('#timelineRangeLabel')
  let timelineRangeValue = localStorage.getItem('timelineValue')

  if (!timelineRangeValue) {
    timelineRangeValue = '0'
  }

  timelineRange.attr('value', timelineRangeValue)
  timeline(timelineRangeValue)

  timelineRange.on('input', function () {
    timeline(this.value)

    localStorage.setItem('timelineValue', this.value)
  })
})

function timeline(value) {
  new bootstrap.Collapse(timelineCollapses[value], {
    toggle: true
  })

  switch (value) {
    case '0':
      timelineYear = '2001'
      break
    case '1':
      timelineYear = '2007 - 2011'
      break
    case '2':
      timelineYear = '2011 - 2020'
      break
    case '3':
      timelineYear = '2021 - 2023'
      break
    case '4':
      timelineYear = '2023 - Present'
      break
    default:
      timelineYear = 'error'
      break
  }

  timelineRangeLabel.text(timelineYear)
}
</script>

<style scoped>
.accordion-collapse {
  transition: .15s /* slowing transition to avoid bugs */
}

.accordion-button::after {
  display: none; /* removing the arrow */
}

.accordion-button {
  transition: none; /* transition applies to theme change */
}
</style>