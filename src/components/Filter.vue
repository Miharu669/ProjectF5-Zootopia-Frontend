<template>
    <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3">
        <div class="px-5 py-6 bg-white rounded-3xl shadow-sm border border-random-50">
            <details class="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex cursor-pointer items-center justify-between gap-2 text-gray-900 transition">
                    <span class="text-sm font-semibold text-random-50"> Filter </span>

                    <span class="transition group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>

                <div class="border-t border-gray-200 bg-white">
                    <header class="flex items-center justify-between p-4">
                        <span class="text-sm text-gray-500"> 0 Selected </span>

                        <button type="button" class="text-sm text-gray-600 underline underline-offset-4">
                            Reset
                        </button>
                    </header>

                    <ul class="space-y-1 border-t border-gray-200 p-4">
                        <li>
                            <label for="Felidae" class="inline-flex items-center gap-2">
                                <input type="checkbox" id="Felidae" class="size-5 rounded accent-marron-800" />

                                <span class="text-sm font-medium text-gray-500"> Felidae </span>
                            </label>
                        </li>

                        <li>
                            <label for="Calidae" class="inline-flex items-center gap-2">
                                <input type="checkbox" id="Calidae" class="size-5 rounded accent-marron-800" />

                                <span class="text-sm font-medium text-gray-500"> Canidae </span>
                            </label>
                        </li>

                        <li>
                            <label for="Reptilia" class="inline-flex items-center gap-2">
                                <input type="checkbox" id="Reptilia" class="size-5 rounded accent-marron-800" />

                                <span class="text-sm font-medium text-gray-500"> Reptilia </span>
                            </label>
                        </li>

                        <li>
                            <label for="Mustelidae" class="inline-flex items-center gap-2">
                                <input type="checkbox" id="Mustelidae" class="size-5 rounded accent-marron-800" />

                                <span class="text-sm font-medium text-gray-500"> Mustelidae </span>
                            </label>
                        </li>

                        <li>
                            <label for="Leporidae" class="inline-flex items-center gap-2">
                                <input type="checkbox" id="Leporidae" class="size-5 rounded accent-marron-800" />

                                <span class="text-sm font-medium text-gray-500"> Leporidae </span>
                            </label>
                        </li>
                    </ul>
                </div>
            </details>
        </div>
    </div>
</template>