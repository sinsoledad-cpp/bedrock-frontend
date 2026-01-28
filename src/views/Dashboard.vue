<template>
  <div class="flex h-screen overflow-hidden text-sm selection:bg-indigo-100 selection:text-indigo-900 bg-zinc-50 font-sans">
    
    <!-- Left Navigation Sidebar -->
    <aside class="w-16 lg:w-64 border-r border-zinc-200 bg-white flex flex-col justify-between flex-shrink-0 z-20 transition-all duration-300">
      <div>
        <!-- Logo Area -->
        <div class="h-14 flex items-center px-4 lg:px-6 border-b border-transparent">
          <router-link to="/" class="flex items-center gap-3 group">
            <div class="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shadow-sm transition-transform group-hover:scale-95">
              <Icon icon="solar:soundwave-square-linear" width="20" />
            </div>
            <span class="font-semibold tracking-tight text-base hidden lg:block text-zinc-900">Resonote</span>
          </router-link>
        </div>

        <!-- Nav Items -->
        <nav class="mt-6 px-3 space-y-1">
          <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-100 text-zinc-900 group transition-colors">
            <Icon icon="solar:pen-new-square-linear" width="20" class="text-zinc-900" />
            <span class="font-medium hidden lg:block">Journal</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors group">
            <Icon icon="solar:users-group-rounded-linear" width="20" class="group-hover:text-zinc-900 transition-colors" />
            <span class="font-medium hidden lg:block">Resonance Wall</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors group">
            <div class="relative">
              <Icon icon="solar:chat-round-dots-linear" width="20" class="group-hover:text-zinc-900 transition-colors" />
              <span class="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </div>
            <span class="font-medium hidden lg:block">Messages</span>
          </a>
          <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors group">
            <Icon icon="solar:chart-square-linear" width="20" class="group-hover:text-zinc-900 transition-colors" />
            <span class="font-medium hidden lg:block">Insights</span>
          </a>
        </nav>
      </div>

      <!-- User Profile -->
      <div class="p-4 border-t border-zinc-100">
        <a-dropdown :trigger="['click']" placement="topLeft">
          <button class="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-50 transition-colors text-left group">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="Profile" class="w-8 h-8 rounded-full object-cover ring-1 ring-zinc-200 group-hover:ring-zinc-300 transition-all">
            <div class="hidden lg:block overflow-hidden">
              <p class="font-medium text-zinc-900 truncate">Elara Vance</p>
              <p class="text-xs text-zinc-400 truncate">Free Plan</p>
            </div>
          </button>
          <template #overlay>
            <a-menu>
              <a-menu-item key="settings">
                <template #icon><Icon icon="solar:settings-linear" /></template>
                Settings
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="logout" @click="handleLogout">
                <template #icon><Icon icon="solar:logout-2-linear" /></template>
                Log out
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
    </aside>

    <!-- Main Content Area: Journal Editor -->
    <main class="flex-1 flex flex-col relative bg-white min-w-0">
      <!-- Top Toolbar -->
      <header class="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur sticky top-0 z-10">
        <div class="flex items-center gap-4 text-zinc-400">
          <span class="text-xs font-medium uppercase tracking-wider">Today, Oct 24</span>
          <span class="w-1 h-1 rounded-full bg-zinc-300"></span>
          <a-tooltip title="Change mood">
            <div class="flex items-center gap-2 text-zinc-500 cursor-pointer hover:text-zinc-900 transition-colors">
              <Icon icon="solar:cloud-sun-linear" width="16" />
              <span class="text-xs">Melancholic</span>
            </div>
          </a-tooltip>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2 mr-2">
            <span class="text-xs text-zinc-500">Private</span>
            <a-switch size="small" v-model:checked="isPublic" />
            <span class="text-xs text-zinc-400">Public</span>
          </div>
          <button class="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Icon icon="solar:menu-dots-linear" width="20" />
          </button>
        </div>
      </header>

      <!-- Editor Canvas -->
      <div class="flex-1 overflow-y-auto custom-scrollbar">
        <div class="max-w-3xl mx-auto py-12 px-8 fade-in">
          <!-- Title Input -->
          <input 
            type="text" 
            placeholder="Untitled Reflection" 
            class="w-full text-4xl font-medium tracking-tight text-zinc-900 placeholder:text-zinc-300 outline-none bg-transparent mb-8" 
            v-model="journalTitle"
          >
          
          <!-- Rich Text Content (Simulated) -->
          <div class="space-y-6 text-lg leading-relaxed text-zinc-600">
            <p contenteditable="true" class="outline-none focus:text-zinc-800 transition-colors">
              It’s been one of those days where the rain doesn’t just fall outside the window, but feels like it’s seeping into the room. The project deadline is looming, and honestly, I feel a bit overwhelmed.
            </p>
            
            <p contenteditable="true" class="outline-none focus:text-zinc-800 transition-colors">
              I tried to explain it to Mark, but words felt heavy. It's not just stress, it's a specific kind of <span class="bg-indigo-50 text-indigo-700 px-1 rounded cursor-help" title="Detected emotion">loneliness</span> that comes from being surrounded by people yet feeling unheard.
            </p>

            <div class="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex items-start gap-3 my-6 group cursor-pointer hover:border-indigo-100 transition-colors">
              <div class="mt-1 text-indigo-500">
                <Icon icon="solar:magic-stick-3-linear" width="18" />
              </div>
              <div class="flex-1">
                <p class="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors">
                  <span class="font-medium text-zinc-900">AI Suggestion:</span> You seem to be describing a sense of "emotional isolation." Would you like to expand on why communication felt difficult with Mark?
                </p>
              </div>
            </div>

            <p contenteditable="true" class="outline-none focus:text-zinc-800 transition-colors">
              Maybe tomorrow I'll try to wake up earlier. Just to have some quiet time before the chaos starts. I need to find my center again.
            </p>
          </div>
          
          <!-- Floating AI Action Bar (Bottom Center) -->
          <div class="fixed bottom-8 left-1/2 md:left-[calc(50%+4rem)] lg:left-[calc(50%+8rem)] -translate-x-1/2 bg-white shadow-xl shadow-zinc-200/50 border border-zinc-200 rounded-full px-4 py-2 flex items-center gap-2 z-20 transition-all duration-300">
            <a-tooltip title="Insert media">
              <button class="p-2 text-zinc-400 hover:text-indigo-600 transition-colors relative">
                <Icon icon="solar:gallery-add-linear" width="20" />
              </button>
            </a-tooltip>
            <div class="w-px h-4 bg-zinc-200"></div>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
              <Icon icon="solar:stars-minimalistic-linear" width="18" />
              <span class="text-xs font-medium">Polish</span>
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 text-zinc-600 hover:bg-rose-50 hover:text-rose-600 transition-colors">
              <Icon icon="solar:tag-linear" width="18" />
              <span class="text-xs font-medium">Tag Mood</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Right Sidebar: Resonance & AI Analysis -->
    <aside class="w-80 border-l border-zinc-200 bg-zinc-50/50 flex flex-col overflow-y-auto hidden md:flex flex-shrink-0">
      
      <!-- Section: AI Analysis -->
      <div class="p-6 border-b border-zinc-200/60">
        <h3 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Icon icon="solar:brain-linear" width="16" />
          AI Emotion Vector
        </h3>
        
        <div class="space-y-4">
          <!-- Emotion Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs text-zinc-600 shadow-sm cursor-default hover:border-zinc-300 transition-colors">#Overwhelmed</span>
            <span class="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-xs text-zinc-600 shadow-sm cursor-default hover:border-zinc-300 transition-colors">#Isolation</span>
            <span class="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-xs text-indigo-600 shadow-sm cursor-default hover:border-indigo-200 transition-colors">#DeepReflection</span>
          </div>

          <!-- Generated Visual/Graph Placeholder -->
          <div class="h-24 bg-white rounded-lg border border-zinc-200 p-3 flex items-center justify-center relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-50 via-white to-rose-50 opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <!-- Minimal bar chart representation -->
            <div class="flex items-end gap-1 h-12 z-10">
              <div class="w-2 bg-zinc-200 rounded-t h-full group-hover:bg-zinc-300 transition-colors"></div>
              <div class="w-2 bg-zinc-300 rounded-t h-3/4 group-hover:bg-zinc-400 transition-colors"></div>
              <div class="w-2 bg-indigo-400 rounded-t h-5/6 shadow-lg shadow-indigo-200 group-hover:bg-indigo-500 transition-colors"></div>
              <div class="w-2 bg-zinc-200 rounded-t h-1/2 group-hover:bg-zinc-300 transition-colors"></div>
              <div class="w-2 bg-zinc-200 rounded-t h-2/3 group-hover:bg-zinc-300 transition-colors"></div>
            </div>
          </div>
          <p class="text-xs text-zinc-500 leading-relaxed">
            Your entry indicates a high need for <span class="font-medium text-zinc-700">empathetic listening</span>. The tone shifts from anxious to hopeful towards the end.
          </p>
        </div>
      </div>

      <!-- Section: Soul Resonance (Matching) -->
      <div class="p-6 flex-1">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
            <Icon icon="solar:magnet-linear" width="16" />
            Resonance Matches
          </h3>
          <span class="text-[10px] bg-zinc-200 text-zinc-600 px-1.5 py-0.5 rounded animate-pulse">Live</span>
        </div>

        <!-- Match Card 1 (High Match) -->
        <div class="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer mb-3 relative overflow-hidden group">
          <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
          
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs">
                <Icon icon="solar:user-circle-linear" width="24" />
              </div>
              <div>
                <p class="text-xs font-medium text-zinc-900">User_892</p>
                <p class="text-[10px] text-zinc-400">2 min ago</p>
              </div>
            </div>
            <div class="flex items-center gap-1 text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
              <Icon icon="solar:bolt-linear" width="12" />
              <span class="text-xs font-bold">98%</span>
            </div>
          </div>

          <p class="text-xs text-zinc-600 italic border-l-2 border-zinc-100 pl-2 mb-3">
            "...also feeling like the walls are closing in a bit today. Just need someone to..."
          </p>

          <div class="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
            <button class="flex-1 py-1.5 rounded-md bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1">
              <Icon icon="solar:chat-line-linear" width="14" />
              Connect
            </button>
            <button class="px-2 py-1.5 rounded-md border border-zinc-200 text-zinc-500 hover:bg-zinc-50 hover:text-rose-500 transition-colors">
              <Icon icon="solar:heart-linear" width="14" />
            </button>
          </div>
        </div>

         <!-- Match Card 2 -->
         <div class="bg-white rounded-xl border border-zinc-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer relative group opacity-80 hover:opacity-100">
          <div class="flex justify-between items-start mb-2">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs">
                <Icon icon="solar:cat-linear" width="20" />
              </div>
              <div>
                <p class="text-xs font-medium text-zinc-900">Kaito.Writes</p>
                <p class="text-[10px] text-zinc-400">15 min ago</p>
              </div>
            </div>
            <div class="flex items-center gap-1 text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
              <span class="text-xs font-semibold">84%</span>
            </div>
          </div>
          <p class="text-xs text-zinc-600 italic border-l-2 border-zinc-100 pl-2 mb-3">
            "Finding peace in the rain sounds nice, but it's hard when..."
          </p>
          <!-- Hidden Actions visible on hover -->
           <div class="hidden group-hover:flex gap-2 animate-pulse">
            <button class="flex-1 py-1.5 rounded-md border border-zinc-200 text-zinc-700 text-xs font-medium hover:bg-zinc-50 transition-colors">
              Wave 👋
            </button>
          </div>
        </div>

        <!-- AI Icebreaker Tip -->
        <div class="mt-6 p-3 bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-lg border border-violet-100">
          <div class="flex gap-2 items-start">
            <Icon icon="solar:lightbulb-linear" class="text-violet-500 mt-0.5" width="16" />
            <div>
              <p class="text-xs font-medium text-violet-900 mb-1">Social Lubricant</p>
              <p class="text-[10px] text-violet-700 leading-tight">
                User_892 also mentioned "deadlines". That's a great safe topic to break the ice!
              </p>
            </div>
          </div>
        </div>

      </div>
    </aside>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { message } from 'ant-design-vue'

const router = useRouter()

const isPublic = ref(false)
const journalTitle = ref('Echoes of a rainy Tuesday')

const handleLogout = () => {
  // Clear any auth tokens here
  localStorage.removeItem('token') // Example
  message.success('Logged out successfully')
  router.push('/login')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}

/* Custom Scrollbar for elegance */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #E4E4E7;
  border-radius: 20px;
}

/* Subtle Animations */
.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}

.ai-gradient-text {
  background: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
