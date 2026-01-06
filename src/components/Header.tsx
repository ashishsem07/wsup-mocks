export function Header() {
    return (
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
    );
}
