import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'
import { GOOGLE_MAPS } from '../../../app/config/keys'

const Marker = () => {
    return <Icon name='marker' size="big" color="red" />
}

const EventDetailedMap = ({ latLng }) => {
    const zoom = 14

    return (
        <Segment attached="bottom" style={{ padding: 0 }}>
            <div style={{ height:300, width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAPS }}
                    center={latLng}
                    zoom={zoom}
                >
                    <Marker lat={latLng.lat} lng={latLng.lng} />
                </GoogleMapReact>
            </div>
        </Segment>
    )
}

export default EventDetailedMap
