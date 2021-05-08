import React, { Fragment, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtainCollectionAction} from '../redux/collectionDucks'
import {Grid, Card, Button, CardHeader, CardContent} from '@material-ui/core'
import Moment from 'moment';

const Collection = () => {


    const dispatch =useDispatch()

    const collection = useSelector(store => store.collection.array)
    console.log(collection);


    useEffect(() => {
        dispatch(obtainCollectionAction())
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);


    return ( 
        <Fragment>
            
           <Grid container spacing={6} >
                {
                    collection.map((item,index) =>(
                        
                        <Grid item xs={3} className="animate__animated animate__fadeInUp">
                            <Card className={"MuiElevatedCard--01 "} variant="elevation" style={{backgroundColor: "#4e4e50" }} >
                                <CardHeader
                                  className={"MuiCardHeader-root"}
                                  title={item.collectionName}
                                  style={{color: "#f0f8ff"}}
                                />
                                <CardContent className={"MuiCardContent-root"} style={{backgroundColor: "#4e4e50"}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} zeroMinWidth> 
                                            <Grid container justify="space-evenly">
                                                <img src={item.artworkUrl100} className=" mr-3" alt="" />
                                                
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} zeroMinWidth> 
                                            <Grid container justify="space-evenly">
                                            <   label style={{color: "#950740"}}>{Moment(item.releaseDate).format('MMM 	YYYY')}</label>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}  zeroMinWidth> 
                                            <Grid container justify="space-evenly">
                                                <Button variant="contained" style={{backgroundColor: "#C3073F"}} href={`/Album/${item.collectionId}`}>
                                                    Saber más
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                    
                }
                </Grid>
        </Fragment>
     );
}
 
export default Collection;