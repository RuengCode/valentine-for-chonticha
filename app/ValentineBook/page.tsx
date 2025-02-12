export default function ValentineBook() {
    return (
        <div className="min-h-screen bg-base-100 flex justify-center items-center p-4">
            <div className="card bg-base-200 text-base-content w-full md:w-[40rem]">
            <div className="card-body">
                {/* Profile Header */}
                <div className="flex space-x-4 items-center">
                <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img
                                    alt="avatar"
                                    src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex space-x-2 items-center">
                                <h2 className="text-base">เรืองจรัส ทองจรัส</h2>
                                <div className="badge badge-primary badge-sm">✓</div>
                                <div className="text-xs opacity-70">posted an update</div>
                            </div>
                            <p className="text-xs opacity-70">10 Months Ago</p>
                        </div>
                    </div>

                    {/* Post Content */}
                    <p className="text-sm">
                        Hypnosis at the parallel universe was the advice of alarm, commanded to a conscious ship.
                        Processors experiment with paralysis!
                    </p>

                    {/* Image Grid */}
                    <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-3">
                            <img className="rounded-box w-full h-56 object-cover"
                                src="https://media.discordapp.net/attachments/1283830529933840507/1339162086739021875/005.jpg?ex=67adb761&is=67ac65e1&hm=c8a3ab934bcf6a7669590e1944ddb78997c5433dc0fa5fdfbd60977b2e786b13&=&format=webp&width=525&height=701"
                                alt="" />
                        </div>
                        <div className="col-span-3">
                            <img className="rounded-box w-full h-56 object-cover"
                                src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                                alt="" />
                        </div>
                        <div className="col-span-2">
                            <img className="rounded-box w-full h-40 object-cover"
                                src="https://media.discordapp.net/attachments/1283830529933840507/1339162087359774770/003.jpg?ex=67adb762&is=67ac65e2&hm=b4bcab359127b0818cee251de4f1e8df918615b822083bd96372b32229f560cb&=&format=webp&width=394&height=700"
                                alt="" />
                        </div>
                        <div className="col-span-2">
                            <img className="rounded-box w-full h-40 object-cover"
                                src="https://media.discordapp.net/attachments/1283830529933840507/1339162088169410603/001.jpg?ex=67adb762&is=67ac65e2&hm=d74c619ddec9c57d8f55768427629f07010e8dd343c0c8f3b29f3ef23b3d48e9&=&format=webp&width=394&height=700"
                                alt="" />
                        </div>
                        <div className="col-span-2">
                            <img className="rounded-box w-full h-40 object-cover"
                                src="https://media.discordapp.net/attachments/1283830529933840507/1339162088509014048/009.jpg?ex=67adb762&is=67ac65e2&hm=e96afbfe8173416e2ede95146f06ab036b012d801308d9119419dcc7014dcf61&=&format=webp&width=394&height=700"
                                alt="" />
                        </div>
                      
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-5">
                        <button className="btn btn-ghost btn-sm">
                            <svg className="h-4 w-4 text-error" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                        </button>
                        <div className="opacity-70 text-sm">23 Comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
