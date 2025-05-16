import tailwindcss from '@tailwindcss/postcss'; // Import the plugin

    export default {
      plugins: {
        tailwindcss: tailwindcss('./tailwind.config.ts'), // Use the imported plugin
        autoprefixer: {},
      },
    };
