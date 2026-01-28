<template>
  <div class="hidden lg:flex w-[55%] relative flex-col justify-between p-12 text-white overflow-hidden bg-zinc-900 h-full">
    <!-- Backgrounds -->
    <div class="absolute inset-0 bg-zinc-900 z-0"></div>
    <div class="absolute inset-0 auth-mesh opacity-40 z-0"></div>
    
    <!-- Abstract Shapes -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>

    <!-- Top Right Links -->
    <div class="relative z-10 flex justify-end gap-6 text-sm font-medium text-white/60">
      <a href="#" class="hover:text-white transition-colors">Manifesto</a>
      <a href="#" class="hover:text-white transition-colors">About</a>
    </div>

    <!-- Central Visual: Floating Card -->
    <div class="relative z-10 flex-1 flex items-center justify-center">
      <div class="relative group perspective-container">
        <!-- Decorative Orbit Rings -->
        <div class="absolute inset-0 border border-white/10 rounded-full scale-150 animate-[spin_20s_linear_infinite]"></div>
        <div class="absolute inset-0 border border-white/5 rounded-full scale-[1.8] animate-[spin_30s_linear_infinite_reverse]"></div>

        <!-- Glass Card -->
        <div class="glass-panel w-[380px] p-8 rounded-2xl transform rotate-y-12 rotate-x-6 transition-transform duration-700 group-hover:rotate-0">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
              <span class="text-xs font-medium text-emerald-100 tracking-wide uppercase">Live Resonance</span>
            </div>
            <Icon icon="solar:menu-dots-linear" class="text-white/40" width="20" />
          </div>

          <div class="space-y-6">
            <div class="space-y-2">
              <div class="h-2 w-20 bg-white/20 rounded-full"></div>
              <p class="font-serif-italic text-2xl leading-relaxed text-white/90">
                "The quietness of the morning brings a clarity I haven't felt in weeks. Finally, the noise has settled."
              </p>
            </div>
            
            <div class="pt-6 border-t border-white/10 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 p-[1px]">
                  <div class="w-full h-full rounded-full bg-black/20 backdrop-blur-sm"></div>
                </div>
                <div>
                  <p class="text-xs font-semibold text-white">Anonymous</p>
                  <p class="text-[10px] text-white/50">Berlin, 2 mins ago</p>
                </div>
              </div>
              <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                <Icon icon="solar:heart-linear" width="16" />
                <span>24</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Badge -->
        <div class="absolute -right-8 top-10 glass-panel px-4 py-3 rounded-xl flex items-center gap-3 animate-float delay-700">
          <div class="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center border border-indigo-500/30">
            <Icon icon="solar:chart-2-linear" width="20" />
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-wider text-white/40">Mood Analysis</p>
            <p class="text-xs font-semibold text-white">Calm &amp; Focused</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Testimonial -->
    <div class="relative z-10">
      <div class="max-w-md">
        <div class="flex gap-1 mb-3 text-white">
          <Icon icon="solar:star-bold" width="16" />
          <Icon icon="solar:star-bold" width="16" />
          <Icon icon="solar:star-bold" width="16" />
          <Icon icon="solar:star-bold" width="16" />
          <Icon icon="solar:star-bold" width="16" />
        </div>
        <p class="text-lg font-medium text-white/90 leading-relaxed mb-2">
          "Resonote transformed how I process my daily thoughts. It's not just a journal; it's a mirror for my mind."
        </p>
        <p class="text-sm text-white/50">— Sarah J., Product Designer</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');

.font-serif-italic {
    font-family: 'Playfair Display', serif;
    font-style: italic;
}

/* Right Panel Mesh Gradient */
.auth-mesh {
    background-color: #f8fafc;
    background-image: 
        radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
        radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
        radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
    background-size: 150% 150%;
    animation: mesh-move 20s ease infinite;
}

@keyframes mesh-move {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Glassmorphism */
.glass-panel {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.perspective-container {
    perspective: 1000px;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
</style>
