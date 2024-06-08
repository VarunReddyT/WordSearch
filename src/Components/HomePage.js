import React from 'react';

export default function HomePage() {
    return (
        <div className='home'>
        <div className="container">
            <div className='d-flex justify-content-center align-items-center mt-3'>
                <h1>Word Match</h1>
            </div>
            <div className="row mt-3 outer">
                <div></div>
                <div className="col-md-4 col-sm-6 col-12 mb-4 mt-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 1" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 1</h5>
                            <button className='btn btn-primary mt-2'>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4 mt-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 2" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 2</h5>
                            <button className='btn btn-primary mt-2'>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4 mt-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 3"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 3</h5>
                            <button className='btn btn-primary mt-2'>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 4"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 4</h5>
                            <button className='btn btn-primary mt-2'>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 5"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 5</h5>
                            <button className='btn btn-primary mt-2'>Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
