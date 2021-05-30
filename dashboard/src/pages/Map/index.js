import React, { useEffect, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import Menu from '../../components/Menu';
import config from '../../config/google.config';

function GoogleM({latitude, longitude}) {
    return <GoogleMap defaultZoom={18} defaultCenter={{lat: Number(latitude), lng: Number(longitude)}} />
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleM))

export default function Map() {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);
    return (
        <Menu>
            {latitude && longitude && 
                <div style={{width: '100%', height: '100%'}}>
                    <WrappedMap 
                        latitude={latitude}
                        longitude={longitude}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.api_key}`} 
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            }
        </Menu>
    );
}