// MOBILESAMV1
// Fast and simple mobile products
// CUSTOM LAYOUT
// Page Data = ${pageData}

data = {
    name: 'c_layout',
    view: `
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    <div class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex" style="width:414px;height:736px">
        ${CONNECT.pageData}
        <div class="bg-white absolute bottom-0 w-full border-t border-gray-200 flex">
            <a href="javascript:CONNECT.route('r_homeRoute')" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-newspaper-variant-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Today</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_categoriesRoute')" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-apps"></i>
                    </span>
                    <span class="block text-xs leading-none">Categories</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_favoritesRoute')" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
                <div class="text-center">
                    <span class="block h-8 text-3xl leading-8">
                        <i class="mdi mdi-star-outline"></i>
                    </span>
                    <span class="block text-xs leading-none">Favorites</span>
                </div>
            </a>
            <a href="javascript:CONNECT.route('r_searchRoute')" class="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500">
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

        callback()
    } + ')(); ',
    preload: '(' + function async(callback=function(){}) {
        console.log('RUN layout preload')

        $.loadJS("https://cdn.tailwindcss.com");
        $.loadCSS('https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css');

        callback()
    } + ')(); '
} 

/* 
 <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div class="mb-3">
                <h1 class="text-3xl font-bold">Yesterday</h1>
                <p class="text-sm text-gray-500 uppercase font-bold">WEDNESDAY 5 AUGUST</p>
            </div>
            <div class="flex -mx-1 mb-5">
                <div class="w-1/2 px-1">
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;">
                        <div class="h-24"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">DJ Dan Spins The Wheels</h3>
                    </a>
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1534329539061-64caeb388c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;">
                        <div class="h-32"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">Top Travels Destinations For 2020</h3>
                    </a>
                </div>
                <div class="w-1/2 px-1">
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1526661934280-676cef25bc9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;">
                        <div class="h-32"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">M&S Launches New Makeup Range!</h3>
                    </a>
                    <a href="#" class="block mb-2 p-5 rounded overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1558365849-6ebd8b0454b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;">
                        <div class="h-24"></div>
                        <h3 class="text-lg font-bold text-white leading-tight">APT Set To Be A&nbsp;Ripper</h3>
                    </a>
                </div>
            </div>
            <div class="mb-3">
                <h1 class="text-3xl font-bold">Previous</h1>
            </div>
            <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-24 w-2/5 rounded overflow-hidden" style="background: url(https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase font-semibold">SPORTS</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div class="rounded-full w-5 h-5 mr-3" style="background: url(https://randomuser.me/api/portraits/men/41.jpg) center; background-size: cover;"></div>
                            <div>Jack Ryan</div>
                        </div>
                    </div>
                </a>
            </div>
            <hr class="border-gray-200 my-3">
            <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-24 w-2/5 rounded overflow-hidden" style="background: url(https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase font-semibold">ART</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div class="rounded-full w-5 h-5 mr-3" style="background: url(https://randomuser.me/api/portraits/men/63.jpg) center; background-size: cover;"></div>
                            <div>Kevin Jackson</div>
                        </div>
                    </div>
                </a>
            </div>
            <hr class="border-gray-200 my-3">
            <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-24 w-2/5 rounded overflow-hidden" style="background: url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase font-semibold">MUSIC</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div class="rounded-full w-5 h-5 mr-3" style="background: url(https://randomuser.me/api/portraits/women/11.jpg) center; background-size: cover;"></div>
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                </a>
            </div>
            <hr class="border-gray-200 my-3">
            <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-24 w-2/5 rounded overflow-hidden" style="background: url(https://images.unsplash.com/photo-1511068797325-6083f0f872b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60) center; background-size: cover;"></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase font-semibold">WORLD</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div class="rounded-full w-5 h-5 mr-3" style="background: url(https://randomuser.me/api/portraits/women/74.jpg) center; background-size: cover;"></div>
                            <div>Gwen Thomson</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
*/