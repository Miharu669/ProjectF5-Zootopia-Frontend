<template>
  <div class="grid min-h-[60px] w-full place-items-end p-6 lg:overflow-visible bg-white">
    <nav>
      <ul class="flex">
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Previous"
          >
            <span class="material-icons text-sm">keyboard_arrow_left</span>
          </a>
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-random-50 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
            href="#"
            >1</a
          >
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-random-50 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            >2</a
          >
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-random-50 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            >3</a
          >
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Next"
          >
            <span class="material-icons text-sm">keyboard_arrow_right</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Si necesitas agregar alguna lógica, puedes utilizar los composables de Vue aquí.
// Por ejemplo:
const currentPage = ref(1)
const totalPages = 3

function goToPage(page) {
  if (page > 0 && page <= totalPages) {
    currentPage.value = page
  }
}

// Puedes usar onMounted para realizar acciones cuando el componente se monte.
onMounted(() => {
  console.log('Componente montado')
})
</script>

<style scoped>
/* Asegúrate de incluir los estilos de Material Icons */
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('https://fonts.gstatic.com/s/materialicons/v139/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.woff') format('woff');
}
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
