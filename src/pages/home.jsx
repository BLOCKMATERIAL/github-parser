import React from 'react'
import '../scss/components/_home.scss';

function Home() {


    return (
        <div className="area">
            <div className="Search">
                <input className="input-search" type="text"  placeholder="Enter name project"/>
                <h2>Search History:</h2>
                <p>Jam</p>
                <p>Ellipse</p>
                <p>Trello</p>
            </div>

            <div className="Cards">
                <div className="Card">
                        <h2>Project</h2>
                        <p>Language:Java</p>
                        <p>Descripiton: Lavera course work in progress</p>
                </div>
                <div className="Card">
                    <h2>Project</h2>
                    <p>Language:Java</p>
                    <p>Descripiton: Lavera course work in progress Descripiton: Lavera course work in progress Descripiton: Lavera course work in progress</p>
                </div>
                <div className="Card">
                    <h2>Project</h2>
                    <p>Language:Java</p>
                    <p>Descripiton: Lavera course work in progress</p>
                </div>
            </div>
        </div>



    )
}
export default  Home;