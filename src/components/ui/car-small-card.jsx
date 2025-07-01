import React from 'react'
import { Card, CardContent, CardTitle } from './card'
import Image from 'next/image'
import { Badge } from './badge'

const CarSmallCard = ({ selectCar }) => {

    return (
        <>
            <Card className="mb-6">
                <CardContent className="px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Image
                            src={`https://transfer511.webedevs.com/public/storage/${selectCar?.image}`}
                            alt="car"
                            width={100}
                            height={100}
                            className="w-28 h-24 object-cover rounded"
                        />
                        <div>
                            <CardTitle className="text-xl mb-2">{selectCar?.name}</CardTitle>
                            <div className="text-sm text-muted-foreground flex items-center gap-3">
                                <Badge variant="secondary">🧑‍🤝‍🧑 {selectCar?.passenger_capacity} Passenger</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <h2 className="text-xl font-bold">€ {selectCar?.price}</h2>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default CarSmallCard



