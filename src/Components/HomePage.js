import React from 'react';
import { GameContext } from './GameContext.js';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {

    const {setSelectedLevel} = useContext(GameContext);
    const navigate = useNavigate();

    const handleClick = (levelId) => {
        setSelectedLevel(levelId);
        navigate('/game');
    }
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
                            <button className='btn btn-primary mt-2' onClick={()=>handleClick(1)}>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4 mt-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 2" />
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 2</h5>
                            <button className='btn btn-primary mt-2' onClick={()=>handleClick(2)}>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4 mt-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 3"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 3</h5>
                            <button className='btn btn-primary mt-2' onClick={()=>handleClick(3)}>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 4"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 4</h5>
                            <button className='btn btn-primary mt-2' onClick={()=>handleClick(4)}>Start</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card" >
                        <img src={'/homeImage3.png'} className="card-img-top" alt="Level 5"/>
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Level 5</h5>
                            <button className='btn btn-primary mt-2' onClick={()=>handleClick(5)}>Start</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
