/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      {/* Sidebar (Hidden on Mobile) */}
      <aside className="w-64 bg-white dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 flex-col hidden md:flex h-full shrink-0 z-20">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 dark:border-opacity-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              <span className="material-icons-outlined text-xl">chat_bubble</span>
            </div>
            <span className="text-xl font-bold tracking-tight dark:text-white">wsup.ai</span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group" href="#">
            <span className="material-icons-outlined group-hover:text-primary">auto_stories</span>
            <span className="font-medium">Stories</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-50 dark:bg-white/10 text-primary dark:text-white font-medium transition-colors" href="#">
            <span className="material-icons-outlined text-primary dark:text-white">explore</span>
            <span>Explore</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group" href="#">
            <span className="material-icons-outlined group-hover:text-primary">person_add</span>
            <span>Create Character</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group" href="#">
            <span className="material-icons-outlined group-hover:text-primary">post_add</span>
            <span>Create a Post</span>
          </a>
          <div className="mt-8 px-3">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">Recent Chats</span>
              <button className="text-primary hover:text-primary-dark">
                <span className="material-icons-outlined text-sm">add</span>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center py-8 px-2 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 transform rotate-3">
                  <span className="text-3xl font-black text-white">w</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-background-light dark:bg-background-dark rounded-full flex items-center justify-center">
                  <span className="material-icons-outlined text-xs text-yellow-400">star</span>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  You haven&apos;t chatted with anyone yet
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  Talk to your AI companions and see your recent chats here.
                </p>
              </div>
            </div>
          </div>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-400 dark:text-gray-600 space-y-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <a className="hover:text-gray-500 dark:hover:text-gray-400" href="#">Privacy Policy</a>
            <a className="hover:text-gray-500 dark:hover:text-gray-400" href="#">Terms of use</a>
          </div>
          <p>© 2025 now.gg. All rights reserved.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark relative">
        <header className="flex flex-col bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 shrink-0">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20">
                <span className="material-icons-outlined text-lg">chat_bubble</span>
              </div>
              <span className="text-xl font-bold tracking-tight dark:text-white">wsup.ai</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700">
                <span className="material-icons-outlined text-xl">notifications</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-[#ff4500] flex items-center justify-center text-white hover:opacity-90 transition-opacity border border-[#ff4500]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border border-gray-200 dark:border-gray-600">
                <span className="material-icons-outlined text-gray-500 dark:text-gray-400">person</span>
              </button>
              <div className="flex items-center bg-gray-900 dark:bg-black rounded-full px-3 py-1.5 border border-yellow-600/50">
                <span className="material-icons-outlined text-yellow-400 text-sm mr-1">diamond</span>
                <span className="text-white text-xs font-bold font-mono">0</span>
              </div>
            </div>
          </div>
          <div className="px-4 pb-4 flex items-center gap-3">
            <div className="relative flex-1">
              <input className="w-full h-10 pl-4 pr-10 rounded-full bg-gray-100 dark:bg-gray-800 border-none text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:ring-1 focus:ring-primary" placeholder="Search" type="text" />
              <button className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-400">
                <span className="material-icons-outlined">search</span>
              </button>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Spicy</span>
              <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                <input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer peer checked:right-0 checked:border-green-400" id="spicy-toggle" name="spicy-toggle" type="checkbox" />
                <label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 dark:bg-gray-700 cursor-pointer peer-checked:bg-green-400" htmlFor="spicy-toggle"></label>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 pb-24">
          <section>
            <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Featured</h2>
            <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 md:mx-0 md:px-0">
              {/* Featured Item 1 */}
              <div className="relative flex-shrink-0 w-72 bg-gray-100 dark:bg-[#202020] rounded-full p-2 flex items-center gap-3 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 shrink-0">
                  <img alt="The new girl avatar" className="w-16 h-16 rounded-full object-cover border-2 border-white/10" src="https://placehold.co/100x100/2a2a2a/FFF?text=New+Girl" />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-100 dark:border-[#202020]">
                    <span className="material-icons-outlined text-white text-[10px]">article</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">the new girl</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Leonardo, Vol. 1</p>
                </div>
              </div>
              {/* Featured Item 2 */}
              <div className="relative flex-shrink-0 w-72 bg-gray-100 dark:bg-[#202020] rounded-full p-2 flex items-center gap-3 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 shrink-0">
                  <img alt="Chris avatar" className="w-16 h-16 rounded-full object-cover border-2 border-white/10" src="https://placehold.co/100x100/1a3a3a/FFF?text=Chris" />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-100 dark:border-[#202020]">
                    <span className="material-icons-outlined text-white text-[10px]">auto_awesome</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">Chris</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Chris V, inherit</p>
                </div>
              </div>
              {/* Featured Item 3 */}
              <div className="relative flex-shrink-0 w-72 bg-gray-100 dark:bg-[#202020] rounded-full p-2 flex items-center gap-3 cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-16 h-16 shrink-0">
                  <img alt="Cyberpunk avatar" className="w-16 h-16 rounded-full object-cover border-2 border-white/10" src="https://placehold.co/100x100/3a1a1a/FFF?text=Neon" />
                  <div className="absolute -bottom-1 -right-1 bg-indigo-600 rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-100 dark:border-[#202020]">
                    <span className="material-icons-outlined text-white text-[10px]">article</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">Neon Nights</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Cyberpunk, Ep. 3</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Explore</h2>
                <span className="material-icons-outlined text-gray-500 text-sm">filter_list</span>
              </div>
            </div>
            <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-2">
              <button className="px-5 py-2 rounded-full border border-primary bg-primary/10 text-primary font-medium text-sm whitespace-nowrap transition-colors hover:bg-primary/20">
                Recommended
              </button>
              <button className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium text-sm whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                Boyfriend
              </button>
              <button className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium text-sm whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                Anime
              </button>
              <button className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium text-sm whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                Realistic
              </button>
            </div>
            <div className="max-w-2xl">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Chat with AI online and turn conversations into stories. Pick an AI companion below to start your journey.
                <a className="text-primary hover:underline ml-1" href="#">Read More</a>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {/* Character 1 */}
              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-200 dark:bg-gray-800">
                <img alt="Character" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://placehold.co/400x600/2a2a2a/FFF?text=Alice" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-mono opacity-75">#315</span>
                    <div className="text-right">
                      <p className="font-bold text-lg leading-tight">Alice</p>
                      <p className="text-[10px] opacity-80">15.2k chats</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Character 2 */}
              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-200 dark:bg-gray-800">
                <img alt="Character" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://placehold.co/400x600/1a3a3a/FFF?text=Sarah" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-mono opacity-75">#314</span>
                    <div className="text-right">
                      <p className="font-bold text-lg leading-tight">Sarah</p>
                      <p className="text-[10px] opacity-80">8.1k chats</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Character 3 */}
              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-200 dark:bg-gray-800">
                <img alt="Character" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://placehold.co/400x600/3a1a1a/FFF?text=Kenji" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-mono opacity-75">#138</span>
                    <div className="text-right">
                      <p className="font-bold text-lg leading-tight">Kenji</p>
                      <p className="text-[10px] opacity-80">11.2k chats</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Character 4 */}
              <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md bg-gray-200 dark:bg-gray-800">
                <img alt="Character" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://placehold.co/400x600/1a1a3a/FFF?text=Luna" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-end justify-between">
                    <span className="text-xs font-mono opacity-75">#611</span>
                    <div className="text-right">
                      <p className="font-bold text-lg leading-tight">Luna</p>
                      <p className="text-[10px] opacity-80">7.3k chats</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-20 md:h-0"></div>
        </div>
      </main>

      {/* Bottom Nav (Mobile Only) - Moved to layout.tsx */}
    </>
  );
}
