<template>
  <v-container>
    <v-card v-if="product">
      <v-img
        :src="product.screenshot"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="400px"
        cover
      >
        <v-card-title class="text-white" v-text="product.name"></v-card-title>
      </v-img>

      <v-card-text>
        <p class="mb-4">{{ product.description }}</p>
        <p>More details and information about <strong>{{ product.name }}</strong> will be available here soon.</p>
      </v-card-text>

      <v-card-actions>
        <v-btn v-if="product.github" :href="product.github" target="_blank" prepend-icon="mdi-github">
          GitHub
        </v-btn>
        <v-btn to="/">Back to Home</v-btn>
      </v-card-actions>
    </v-card>
    <div v-else>
      <v-alert type="error">Product not found.</v-alert>
    </div>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { products } from '@/data/products.js';

const route = useRoute();
const product = ref(null);

onMounted(() => {
  const productId = route.params.id;
  product.value = products.find(p => p.id === productId);
});
</script>
