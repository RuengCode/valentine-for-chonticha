export default function Calendar() {
    return(
        <div className="flex items-center justify-center p-8">
            <div className="card w-full max-w-sm shadow-xl bg-base-300">
            <div className="card-body">
                <div className="flex items-center justify-between">
                <span className="text-lg font-bold">November 2024</span>
                <div className="flex items-center gap-2">
                    <button className="btn btn-ghost btn-square btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                    </button>
                    <button className="btn btn-ghost btn-square btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                    </button>
                </div>
                </div>
                <div className="overflow-x-auto">
                <table className="table table-sm">
                    <thead>
                    <tr>
                        <th className="text-center">Mo</th>
                        <th className="text-center">Tu</th>
                        <th className="text-center">We</th>
                        <th className="text-center">Th</th>
                        <th className="text-center">Fr</th>
                        <th className="text-center">Sa</th>
                        <th className="text-center">Su</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* First week */}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center">1</td>
                        <td className="text-center">2</td>
                        <td className="text-center">3</td>
                        <td className="text-center">4</td>
                    </tr>
                    {/* Second week */}
                    <tr>
                        <td className="text-center">5</td>
                        <td className="text-center">6</td>
                        <td className="text-center">7</td>
                        <td className="text-center">8</td>
                        <td className="text-center">9</td>
                        <td className="text-center">10</td>
                        <td className="text-center">11</td>
                    </tr>
                    {/* Remaining weeks - same pattern continues */}
                    <tr>
                        <td className="text-center">12</td>
                        <td className="text-center">13</td>
                        <td className="text-center">14</td>
                        <td className="text-center">15</td>
                        <td className="text-center">16</td>
                        <td className="text-center">17</td>
                        <td className="text-center">18</td>
                    </tr>
                    <tr>
                        <td className="text-center">19</td>
                        <td className="text-center">20</td>
                        <td className="text-center">21</td>
                        <td className="text-center"><div className="badge badge-primary">22</div></td>
                        <td className="text-center">23</td>
                        <td className="text-center">24</td>
                        <td className="text-center">25</td>
                    </tr>
                    <tr>
                        <td className="text-center">26</td>
                        <td className="text-center">27</td>
                        <td className="text-center">28</td>
                        <td className="text-center">29</td>
                        <td className="text-center">30</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}