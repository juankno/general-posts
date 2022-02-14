<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="https://cdn2.civitatis.com/islandia/islandia/guia/islandia.jpg"
      :alt="post.attributes.title"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ post.attributes.title }}</div>
      <p class="text-gray-700 text-base">
        {{ post.attributes.content }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#photography</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#travel</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#winter</span
      >
    </div>
    <div class="px-6 py-4 flex items-center">
      <img
        class="w-10 h-10 rounded-full mr-4"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Avatar of Jonathan Reinink"
      />
      <div class="text-sm">
        <p class="text-gray-900 leading-none">
          {{ post.relationships.author.data.name }}
        </p>
        <p class="text-gray-600">
          {{ post.attributes.created_at }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: ["post"],
};
</script>

<style></style>
