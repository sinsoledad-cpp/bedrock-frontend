import { ref, watch } from "vue";

// Initialize theme from localStorage or default to 'system'
const theme = ref(localStorage.getItem("theme") || "system");

// Media query for system dark mode
const systemDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

// Function to update the DOM based on isDark flag
const updateDOM = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Function to determine and apply the correct theme
const applyTheme = () => {
  const currentTheme = theme.value;
  if (currentTheme === "system") {
    updateDOM(systemDarkMode.matches);
  } else {
    updateDOM(currentTheme === "dark");
  }
};

// Initial application
applyTheme();

// Watch for changes in the theme state
watch(theme, (newTheme) => {
  localStorage.setItem("theme", newTheme);
  applyTheme();
});

// Listen for system preference changes
systemDarkMode.addEventListener("change", (e) => {
  if (theme.value === "system") {
    updateDOM(e.matches);
  }
});

export function useTheme() {
  const setTheme = (newTheme) => {
    theme.value = newTheme;
  };

  return {
    theme,
    setTheme,
  };
}
