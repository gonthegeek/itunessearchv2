import React, { Fragment, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import Moment from 'moment';

const CollectionInfo = () => {


    const {id} = useParams()

    const [album, setAlbum]= useState([])


    useEffect(() => { 
        const obtenerAlbum = async () => {
            const data = await fetch(`https://itunes.apple.com/lookup?id=${id}`)
            const users = await data.json()
            setAlbum(users.results) 
        }
        obtenerAlbum() 
    }, [id])

    return ( 
        <Fragment>
                {
                    album.map(item => (
                        //console.log(item.artistName)
                            <div className="container-fluid">
                                <div className="row d-flex align-items-center align-middle" >
                                    <div className="col-md-3 align-middle">
                                        <img 
                                            style={{width: "240px"}}
                                            className="img-fluid rounded-circle 
                                                        animate__animated 
                                                            animate__slideInLeft
                                                            animate__fadeOutLeft" 
                                            alt="Artwork preview" 
                                            src={item.artworkUrl100} />
                                    </div>
                                    <div className="col-md-8  animate__animated animate__slideInRight animate__fadeOutright">
                                        <div className="row">
                                            <div className="col-md-auto">
                                                <h3>
                                                    {item.collectionName}
                                                </h3> 
                                                <h4 className="">{item.artistName}</h4>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="">{item.collectionExplicitness}</h5>
                                            </div>
                                        </div>
                                        <div className="row ">
                                            <div className="col-md-4">
                                                <h5 className="">{item.trackCount} - canciones</h5>
                                            </div>
                                            <div className="col-md-4">
                                                <h5 className="">{item.primaryGenreName}</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <h6 className="">{item.country}</h6>
                                            </div>
                                            <div className="col-md-4">
                                                <h6 className="">{Moment(item.releaseDate).format('DD  MMMM 	YYYY')}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className=" col-4">
                                        <a type="button" className="btn btn-danger" href="/Lista">Regresar</a>
                                    </div>
                                </div>
                                
                                <div className="row fixed-bottom" style={{ textAlign: "center"}}>
                                    <div className="col-md-12">
                                        <p>{item.copyright}</p>
                                    </div>
                                </div>
                        </div>
                    ))
                }
        </Fragment>
     );
}
 
export default CollectionInfo;