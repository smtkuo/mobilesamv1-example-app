CONNECT.data = {
    name: 'p_homePage',
    view: ` 
    <div class="bg-white h-full w-full px-5 pt-6 pb-20 overflow-y-auto">
            <div class="mb-3">   
                <h1 class="text-3xl font-bold" onclick="CONNECT.function.Alert({homepage:1})">HomePage</h1>
                <p class="text-sm text-gray-500 uppercase font-bold">THURSDAY 6 AUGUST</p>
                <p>${CONNECT.function.TEST()}</p>
                <p>${CONNECT.function.TESTB()}</p>
            </div>
            <div class="mb-5">
                <a href="#" class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80) center; background-size: cover;">
                    <div class="absolute top-0 right-0 -mt-3 mr-3">
                        <div class="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i class="mdi mdi-fire text-base align-middle"></i> <span class="align-middle">FRESH</span></div>
                    </div>
                    <div class="h-48"></div>
                    <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">Tasnim Lacey New Album Out&nbsp;Now</h2>
                    <div class="flex w-full items-center text-sm text-gray-300 font-medium">
                        <div class="flex-1 flex items-center">
                            <div class="rounded-full w-8 h-8 mr-3" style="background: url(https://randomuser.me/api/portraits/women/74.jpg) center; background-size: cover;"></div>
                            <div>Gwen Thomson</div>
                        </div>
                        <div><i class="mdi mdi-thumb-up"></i> 18</div>
                    </div>
                </a>
            </div>
            <div class="mb-5">
                <a href="#" class="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95" style="background: url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80) center; background-size: cover;">
                    <div class="h-48"></div>
                    <h2 class="text-white text-2xl font-bold leading-tight mb-3 pr-5">Top 5 Cocktail Bars in&nbsp;NYC</h2>
                    <div class="flex w-full items-center text-sm text-gray-300 font-medium">
                        <div class="flex-1 flex items-center">
                            <div class="rounded-full w-8 h-8 mr-3" style="background: url(https://randomuser.me/api/portraits/women/55.jpg) center; background-size: cover;"></div>
                            <div>Kayden Buckley</div>
                        </div>
                        <div><i class="mdi mdi-thumb-up"></i> 7</div>
                    </div>
                </a>
            </div>
            
        </div>
`,
    script: '(' + function async(callback=function(){}) {
        console.log('HOMEPAGE')

        CONNECT.function.Alert = function (params = {}){
            alert(JSON.stringify(params))
        }

        callback()
    } + ')(); '
}

Memory[CONNECT.data.name] = CONNECT.data