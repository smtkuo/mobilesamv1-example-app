// MOBILESAMV1
// Fast and simple mobile products
// CUSTOM LAYOUT
// Page Data = {{pageData}}

CONNECT.data = {
    name: 'c_layout',
    view: `
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex" style="width:414px;height:736px">
        {{pageData}}
        <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
            <a href="javascript:CONNECT.route('r_homeRoute')" id="r_homeRoute" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500 ">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Today</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_categoriesRoute')" id="r_categoriesRoute" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500 ">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-apps"></i>
                    </span>
                    <span class="block text-xs leading-none">Categories</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_favoritesRoute')" id="r_favoritesRoute" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500 ">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-star-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Favorites</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_searchRoute')" id="r_searchRoute" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-magnify"></i>
                    </span>
                    <span class="block text-xs leading-none">Search</span>
                </div>
            </a>
        </div>
    </div>
</div>  
    `,
    script: '(' + function async(callback=function(){}) {
        console.log('RUN layout script')

        CONNECT.function.GlobalAlert = function (params = {n:0}){
            alert(":::Global Alert:::")
            alert(JSON.stringify(params))
        }

        document.getElementById(CONNECT.selectRoute).classList.add("text-indigo-500");
        

        callback()
    } + ')(); ',
    preload: '(' + function async(callback=function(){}) {
        console.log('RUN layout preload')

        $.loadJS("https://cdn.tailwindcss.com");
        $.loadCSS('https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css');

        callback()
    } + ')(); '
} 

Memory[CONNECT.data.name] = CONNECT.data