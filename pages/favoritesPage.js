data = {
    name: 'p_favoritesPage',
    view: ` 
    <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
        <div class="mb-3">
            <h1 class="text-3xl font-bold" onclick="CONNECT.function.GlobalAlert({fav:1})">Favorites</h1>
            <p class="text-sm text-gray-500 uppercase font-bold">Favorite List</p>
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
    </div>
    `,
    script: '(' + function async(callback=function(){}) {
        console.log('Favorites')

        callback()
    } + ')(); '
}