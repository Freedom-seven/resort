import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

export default function RoomsContainer() {
    return (
        <div>
            Hello rooms container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
