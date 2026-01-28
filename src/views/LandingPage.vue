<template>
  <div class="landing-page font-sans text-zinc-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md transition-all">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center">
            <Icon icon="solar:soundwave-square-linear" width="20" />
          </div>
          <span class="font-semibold tracking-tight text-lg">Resonote</span>
        </div>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
          <a href="#features" class="hover:text-zinc-900 transition-colors">Manifesto</a>
          <a href="#resonance" class="hover:text-zinc-900 transition-colors">Resonance</a>
          <a href="#pricing" class="hover:text-zinc-900 transition-colors">Membership</a>
        </div>

        <div class="flex items-center gap-4">
          <router-link to="/login" class="text-sm font-medium text-zinc-600 hover:text-zinc-900 hidden sm:block">Log in</router-link>
          <router-link to="/register" class="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-200">
            Get Started
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="mesh-gradient"></div>
      <div class="absolute top-0 left-0 w-full h-full grid-bg -z-20"></div>

      <div class="max-w-7xl mx-auto px-6 text-center z-10 relative">
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8 animate-float">
          <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          v2.0 is now live: Intelligent Emotion Mapping
        </div>

        <h1 class="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
          Your thoughts, <span class="font-serif-italic text-zinc-500">understood.</span><br>
          Your feelings, <span class="gradient-text-color">connected.</span>
        </h1>

        <p class="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The first journaling platform that uses AI to decode your emotional DNA and serendipitously connects you with souls resonating on the same frequency.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <router-link to="/register" class="h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group shadow-lg shadow-zinc-200 justify-center">
            Start Journaling
            <Icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform" />
          </router-link>
          <button class="h-12 px-8 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-all flex items-center gap-2 justify-center">
            <Icon icon="solar:play-circle-linear" width="20" />
            Watch Manifesto
          </button>
        </div>

        <!-- 3D App Mockup -->
        <div class="perspective-container max-w-5xl mx-auto relative">
          <!-- Floating Elements behind -->
          <div class="absolute -top-10 -right-10 w-24 h-24 bg-rose-100 rounded-full blur-2xl opacity-60"></div>
          <div class="absolute top-20 -left-20 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>

          <div class="rotate-3d bg-white rounded-2xl border border-zinc-200/80 overflow-hidden relative">
            <!-- Fake UI Header -->
            <div class="h-10 border-b border-zinc-100 bg-zinc-50/50 flex items-center px-4 gap-2">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-zinc-200"></div>
                <div class="w-3 h-3 rounded-full bg-zinc-200"></div>
              </div>
              <div class="mx-auto w-32 h-2 rounded-full bg-zinc-100"></div>
            </div>
            <!-- Fake UI Body (Simplified Image Representation) -->
            <div class="p-8 grid grid-cols-12 gap-8 h-[500px] bg-white text-left">
              <!-- Sidebar -->
              <div class="col-span-3 space-y-4 border-r border-zinc-50 pr-4 hidden md:block">
                <div class="h-8 w-8 bg-zinc-100 rounded-lg mb-8"></div>
                <div class="h-4 w-24 bg-zinc-100 rounded mb-2"></div>
                <div class="h-4 w-20 bg-zinc-50 rounded"></div>
                <div class="h-4 w-16 bg-zinc-50 rounded"></div>
              </div>
              <!-- Main Content -->
              <div class="col-span-12 md:col-span-6 space-y-6 pt-4">
                <div class="h-8 w-3/4 bg-zinc-100 rounded"></div>
                <div class="space-y-3">
                  <div class="h-4 w-full bg-zinc-50 rounded"></div>
                  <div class="h-4 w-full bg-zinc-50 rounded"></div>
                  <div class="h-4 w-5/6 bg-zinc-50 rounded"></div>
                </div>
                <!-- AI Card in UI -->
                <div class="p-4 rounded-xl border border-indigo-100 bg-indigo-50/30 flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                    <Icon icon="solar:magic-stick-3-linear" />
                  </div>
                  <div class="space-y-2 flex-1">
                    <div class="h-3 w-1/3 bg-indigo-100 rounded"></div>
                    <div class="h-3 w-full bg-indigo-50 rounded"></div>
                  </div>
                </div>
              </div>
              <!-- Right Panel -->
              <div class="col-span-3 hidden md:block space-y-4 pt-4">
                 <div class="h-3 w-20 bg-zinc-100 rounded mb-4"></div>
                 <div class="p-3 border border-zinc-100 rounded-lg shadow-sm">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-6 h-6 rounded-full bg-zinc-100"></div>
                      <div class="w-12 h-2 bg-zinc-100 rounded"></div>
                    </div>
                    <div class="w-full h-2 bg-zinc-50 rounded"></div>
                 </div>
              </div>
            </div>
            
            <!-- Gradient Overlay on Bottom -->
            <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-10 border-y border-zinc-100 bg-zinc-50/50">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-wider">Trusted by 10,000+ thinkers &amp; dreamers</p>
        <div class="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div class="flex items-center gap-2 text-zinc-800 font-bold text-lg"><Icon icon="solar:infinity-linear" /> Loop</div>
          <div class="flex items-center gap-2 text-zinc-800 font-bold text-lg"><Icon icon="solar:atom-linear" /> Core</div>
          <div class="flex items-center gap-2 text-zinc-800 font-bold text-lg"><Icon icon="solar:planet-linear" /> Orbit</div>
          <div class="flex items-center gap-2 text-zinc-800 font-bold text-lg"><Icon icon="solar:leaf-linear" /> Natural</div>
          <div class="flex items-center gap-2 text-zinc-800 font-bold text-lg"><Icon icon="solar:mountains-linear" /> Peak</div>
        </div>
      </div>
    </section>

    <!-- Bento Grid Features -->
    <section id="features" class="py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-6">
        <div class="mb-16 max-w-2xl">
          <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Everything you need to <br>understand yourself.</h2>
          <p class="text-zinc-500 text-lg">Resonote isn't just a blank page. It's an intelligent mirror that reflects your emotional patterns and connects the dots.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          <!-- Feature 1: AI Insight (Large) -->
          <div class="md:col-span-2 rounded-2xl bg-zinc-50 border border-zinc-100 p-8 relative overflow-hidden group hover:border-indigo-100 transition-colors">
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon icon="solar:brain-linear" width="200" class="text-indigo-600" />
            </div>
            <div class="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-4 shadow-sm text-indigo-600">
                  <Icon icon="solar:magic-stick-3-linear" width="24" />
                </div>
                <h3 class="text-xl font-semibold text-zinc-900 mb-2">Semantic Emotion Analysis</h3>
                <p class="text-zinc-500 max-w-sm">Our AI parses the nuance of your words, identifying underlying moods like "Melancholy" or "Euphorria" even when you don't name them.</p>
              </div>
              <!-- Visual representation -->
              <div class="flex gap-2 mt-6">
                <span class="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs shadow-sm text-zinc-600">#Anxiety</span>
                <span class="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs shadow-sm text-indigo-600">#CreativeFlow</span>
                <span class="px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs shadow-sm text-rose-600">#Gratitude</span>
              </div>
            </div>
          </div>

          <!-- Feature 2: Resonance (Tall) -->
          <div id="resonance" class="md:row-span-2 rounded-2xl bg-zinc-900 text-white p-8 relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none z-10"></div>
            <!-- Background Animation -->
            <div class="absolute inset-0 opacity-20">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            </div>
            
            <div class="relative z-20 h-full flex flex-col">
              <div class="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                <Icon icon="solar:magnet-linear" width="24" />
              </div>
              <h3 class="text-xl font-semibold mb-2">The Resonance Wall</h3>
              <p class="text-zinc-400 text-sm leading-relaxed mb-8">
                Experience the profound relief of knowing you aren't alone. Connect anonymously with others feeling exactly what you feel, right now.
              </p>

              <div class="mt-auto space-y-3">
                <!-- User Card 1 -->
                <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div class="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-300 border border-indigo-500/30">JD</div>
                  <div class="flex-1 min-w-0">
                    <div class="h-2 w-16 bg-white/20 rounded mb-1.5"></div>
                    <div class="h-1.5 w-24 bg-white/10 rounded"></div>
                  </div>
                  <span class="text-xs font-bold text-indigo-400">98% Match</span>
                </div>
                <!-- User Card 2 -->
                <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md opacity-60 scale-95">
                  <div class="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-xs text-rose-300 border border-rose-500/30">MK</div>
                  <div class="flex-1 min-w-0">
                    <div class="h-2 w-16 bg-white/20 rounded mb-1.5"></div>
                    <div class="h-1.5 w-24 bg-white/10 rounded"></div>
                  </div>
                  <span class="text-xs font-bold text-zinc-500">82% Match</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3: Privacy (Small) -->
          <div class="rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow">
            <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Icon icon="solar:shield-check-linear" width="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-zinc-900 mb-1">Private by Default</h3>
              <p class="text-zinc-500 text-sm">Your raw entries are encrypted. Only you decide what to share on the Wall.</p>
            </div>
          </div>

          <!-- Feature 4: Insights (Small) -->
          <div class="rounded-2xl bg-white border border-zinc-200 p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow overflow-hidden relative">
            <div class="w-10 h-10 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <Icon icon="solar:chart-square-linear" width="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-zinc-900 mb-1">Mood Tracking</h3>
              <p class="text-zinc-500 text-sm">Visualize your emotional journey over weeks and months.</p>
            </div>
            <!-- Decorative Chart -->
            <div class="absolute bottom-0 right-0 w-32 h-16 opacity-50 flex items-end gap-1 px-4 pb-4">
              <div class="w-1/5 bg-violet-100 h-[40%] rounded-t"></div>
              <div class="w-1/5 bg-violet-200 h-[70%] rounded-t"></div>
              <div class="w-1/5 bg-violet-500 h-[100%] rounded-t"></div>
              <div class="w-1/5 bg-violet-300 h-[60%] rounded-t"></div>
              <div class="w-1/5 bg-violet-100 h-[30%] rounded-t"></div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Testimonial / Emotional Hook -->
    <section class="py-24 bg-zinc-50 border-y border-zinc-200">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <Icon icon="solar:quote-up-square-linear" class="text-zinc-300 mb-8 mx-auto" width="48" />
        <h2 class="text-3xl md:text-5xl font-serif-italic text-zinc-800 leading-tight mb-8">
          "I used to write into the void. Now, I write to find the others who are weathering the same storm. It’s comforting in a way I can’t explain."
        </h2>
        <div class="flex items-center justify-center gap-4">
          <div class="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden">
            <!-- Placeholder avatar -->
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" class="w-full h-full object-cover grayscale opacity-80" />
          </div>
          <div class="text-left">
            <div class="font-bold text-zinc-900">Sarah Jenkins</div>
            <div class="text-zinc-500 text-sm">Early Beta User</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing / Membership -->
    <section id="pricing" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Simple Membership</h2>
          <p class="text-zinc-500 text-lg">Resonote is currently in Invite-Only Beta. Join the waitlist to get early access.</p>
        </div>

        <div class="max-w-md mx-auto rounded-3xl border border-zinc-200 p-8 shadow-xl shadow-zinc-100/50 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div class="flex justify-between items-baseline mb-8">
            <h3 class="text-lg font-semibold text-zinc-900">Early Believer</h3>
            <span class="text-4xl font-bold tracking-tight">$0<span class="text-lg font-normal text-zinc-500">/mo</span></span>
          </div>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 text-zinc-600">
              <Icon icon="solar:check-circle-bold" class="text-indigo-600" />
              Unlimited Journal Entries
            </li>
            <li class="flex items-center gap-3 text-zinc-600">
              <Icon icon="solar:check-circle-bold" class="text-indigo-600" />
              Basic AI Emotion Analysis
            </li>
            <li class="flex items-center gap-3 text-zinc-600">
              <Icon icon="solar:check-circle-bold" class="text-indigo-600" />
              3 Resonance Matches / Day
            </li>
            <li class="flex items-center gap-3 text-zinc-600">
              <Icon icon="solar:check-circle-bold" class="text-indigo-600" />
              Community Wall Access
            </li>
          </ul>

          <button class="w-full h-12 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all">
            Join Waitlist
          </button>
          <p class="text-xs text-center text-zinc-400 mt-4">No credit card required.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-zinc-100 bg-white">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center">
            <Icon icon="solar:soundwave-square-linear" width="14" />
          </div>
          <span class="font-semibold text-zinc-900">Resonote</span>
        </div>
        <div class="text-sm text-zinc-400">
          &copy; 2026 Resonote Inc. All rights reserved.
        </div>
        <div class="flex gap-6">
          <a href="#" class="text-zinc-400 hover:text-zinc-900 transition-colors"><Icon icon="mdi:twitter" width="20" /></a>
          <a href="#" class="text-zinc-400 hover:text-zinc-900 transition-colors"><Icon icon="mdi:instagram" width="20" /></a>
          <a href="#" class="text-zinc-400 hover:text-zinc-900 transition-colors"><Icon icon="mdi:github" width="20" /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap');

.font-serif-italic {
    font-family: 'Playfair Display', serif;
    font-style: italic;
}

/* Subtle Gradients */
.mesh-gradient {
    background-color: #ffffff;
    background-image: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                      radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
                      radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
    opacity: 0.03;
    position: absolute;
    top: 0; left: 0; right: 0; height: 100vh;
    z-index: -1;
    pointer-events: none;
}

/* 3D Transform for App Preview */
.perspective-container {
    perspective: 2000px;
}
.rotate-3d {
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(4deg) scale(0.9);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 
                0 0 0 1px rgba(0,0,0,0.05);
    transition: transform 0.5s ease-out;
}
.rotate-3d:hover {
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(2deg) scale(0.95);
}

/* Animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}

.glass-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(244, 244, 245, 0.8);
}

.gradient-text {
    background: linear-gradient(135deg, #18181B 0%, #52525B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gradient-text-color {
    background: linear-gradient(135deg, #4f46e5 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Custom decorative elements */
.grid-bg {
    background-size: 40px 40px;
    background-image: linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px);
}
</style>
