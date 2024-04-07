//data fetched from API
const sampleObj = {
    "meta": {
        "count": 5,
        "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=JFK&departureDate=2024-05-15&returnDate=2024-05-25&adults=2&max=5"
        }
    },
    "data": [
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-07",
            "lastTicketingDateTime": "2024-04-07",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT5H26M",
                    "segments": [
                        {
                            "departure": { // this 
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-15T20:40:00" //this
                            },
                            "arrival": { //this
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-16T05:06:00" //this
                            },
                            "carrierCode": "B6",
                            "number": "2924",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H26M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-25T10:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-25T13:08:00"
                            },
                            "carrierCode": "B6",
                            "number": "523",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H58M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "705.26",
                "base": "604.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "705.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-07",
            "lastTicketingDateTime": "2024-04-07",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT5H34M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-15T22:40:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-16T07:14:00"
                            },
                            "carrierCode": "B6",
                            "number": "1114",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H34M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-25T10:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-25T13:08:00"
                            },
                            "carrierCode": "B6",
                            "number": "523",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H58M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "705.26",
                "base": "604.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "705.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-07",
            "lastTicketingDateTime": "2024-04-07",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT5H37M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-15T15:20:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-15T23:57:00"
                            },
                            "carrierCode": "B6",
                            "number": "1124",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H37M",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-25T10:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-25T13:08:00"
                            },
                            "carrierCode": "B6",
                            "number": "523",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H58M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "705.26",
                "base": "604.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "705.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "4",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-07",
            "lastTicketingDateTime": "2024-04-07",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT5H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-15T12:15:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-15T20:55:00"
                            },
                            "carrierCode": "B6",
                            "number": "524",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H40M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-25T10:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-25T13:08:00"
                            },
                            "carrierCode": "B6",
                            "number": "523",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H58M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "705.26",
                "base": "604.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "705.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "5",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2024-04-07",
            "lastTicketingDateTime": "2024-04-07",
            "numberOfBookableSeats": 7,
            "itineraries": [
                {
                    "duration": "PT5H43M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-15T10:05:00"
                            },
                            "arrival": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-15T18:48:00"
                            },
                            "carrierCode": "B6",
                            "number": "324",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H43M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                },
                {
                    "duration": "PT5H58M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "JFK",
                                "terminal": "5",
                                "at": "2024-05-25T10:10:00"
                            },
                            "arrival": {
                                "iataCode": "LAX",
                                "terminal": "5",
                                "at": "2024-05-25T13:08:00"
                            },
                            "carrierCode": "B6",
                            "number": "523",
                            "aircraft": {
                                "code": "32S"
                            },
                            "operating": {
                                "carrierCode": "B6"
                            },
                            "duration": "PT5H58M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "705.26",
                "base": "604.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "705.26"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": false
            },
            "validatingAirlineCodes": [
                "B6"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "travelerId": "2",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "352.63",
                        "base": "302.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "UI2AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "OI4AUEL1",
                            "brandedFare": "DN",
                            "brandedFareLabel": "BLUE BASIC",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 0
                            },
                            "amenities": [
                                {
                                    "description": "CHECKED BAG FIRST",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "CHECKED BAG SECOND",
                                    "isChargeable": true,
                                    "amenityType": "BAGGAGE",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "EXTRA LEGROOM",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ADVANCE SEAT SELECTION",
                                    "isChargeable": true,
                                    "amenityType": "PRE_RESERVED_SEAT",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "SNACK",
                                    "isChargeable": false,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                },
                                {
                                    "description": "ALCOHOLIC DRINK",
                                    "isChargeable": true,
                                    "amenityType": "MEAL",
                                    "amenityProvider": {
                                        "name": "BrandedFare"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "LAX": {
                "cityCode": "LAX",
                "countryCode": "US"
            },
            "JFK": {
                "cityCode": "NYC",
                "countryCode": "US"
            }
        },
        "aircraft": {
            "32S": "AIRBUS INDUSTRIE A318/A319/A320/A321"
        },
        "currencies": {
            "EUR": "EURO"
        },
        "carriers": {
            "B6": "JETBLUE AIRWAYS"
        }
    }
}
//function that takes fetched data (obj) and returns matching flights (price, dates, airlines, number of travelers)
  function arrayofTravelObjects(obj, dep_city, dep_date, dest_city, ret_date, num_travelers) {
    const airlinesObj = {
        "3X": "Japan Air Commuter",
        "6E": "IndiGo",
        "6J": "Solaseed Air",
        "7G": "StarFlyer",
        "9C": "Spring Airlines",
        "AA": "American Airlines",
        "AC": "Air Canada",
        "AI": "Air India",
        "AK": "AirAsia",
        "AM": "Aeromexico",
        "ANA": "All Nippon Airways",
        "AR": "Aerolineas Argentinas",
        "AV": "Avianca",
        "B6": "JetBlue Airways",
        "BC": "Skymark Airlines",
        "BR": "EVA Air",
        "CA": "Air China",
        "CI": "China Airlines",
        "CM": "Copa Airlines",
        "CZ": "China Southern Airlines",
        "DL": "Delta Air Lines",
        "EK": "Emirates",
        "ET": "Ethiopian Airlines",
        "EY": "Etihad Airways",
        "F9": "Frontier Airlines",
        "FJ": "Fiji Airways",
        "GA": "Garuda Indonesia",
        "GK": "Jetstar Japan",
        "GJ": "Loong Air",
        "HA": "Hawaiian Airlines",
        "IT": "Tigerair Taiwan",
        "JL": "Japan Airlines",
        "KA": "Cathay Dragon",
        "KE": "Korean Air",
        "KL": "KLM Royal Dutch Airlines",
        "KN": "China United Airlines",
        "LA": "LATAM Airlines",
        "LH": "Lufthansa",
        "MK": "Air Mauritius",
        "MS": "EgyptAir",
        "MU": "China Eastern Airlines",
        "NH": "All Nippon Airways",
        "NK": "Spirit Airlines",
        "NU": "Japan Transocean Air",
        "NZ": "Air New Zealand",
        "OC": "Oriental Air Bridge",
        "ON": "Nauru Airlines",
        "OZ": "Asiana Airlines",
        "PX": "Air Niugini",
        "PR": "Philippine Airlines",
        "QF": "Qantas Airways",
        "QR": "Qatar Airways",
        "RK": "Ryukyu Air Commuter",
        "SB": "Aircalin",
        "SG": "SpiceJet",
        "SK": "Scandinavian Airlines System (SAS)",
        "SQ": "Singapore Airlines",
        "SV": "Saudia",
        "TG": "Thai Airways International",
        "TN": "Air Tahiti Nui",
        "TR": "Scoot",
        "TV": "Tibet Airlines",
        "UU": "Air Austral",
        "VA": "Virgin Australia",
        "VN": "Vietnam Airlines",
        "WS": "WestJet",
        "ZG": "ZIPAIR Tokyo",
        "ZH": "Shenzhen Airlines"
      };
    const result = [];
    
    obj.data.forEach(flightOffer => { //note: 'flightOffer' is "data" in embeeded response object
      const price = flightOffer.price.total * num_travelers; 
      flightOffer.itineraries.forEach(itinerary => {  //itinerary is "itineraries"
        itinerary.segments.forEach(segment => { //iterates through "segments" (same name)
          const departureDate = new Date(segment.departure.at).toISOString().split('T')[0]; //slices time off and leaves just with the date
          const arrivalDate = new Date(segment.arrival.at).toISOString().split('T')[0];
          const airlines = airlinesObj[segment.carrierCode]
       
          if (segment.departure.iataCode === dep_city && departureDate === dep_date && segment.arrival.iataCode === dest_city && arrivalDate === ret_date) {
            result.push({ dep_city, dep_date, dest_city, ret_date, price, airlines, num_travelers });
          }
        });
      });
    });
    return result;
  }
  
  //sample user input data 
  const flightData = sampleObj;
  const dep_city = "LAX"; // Departure city
  const dest_city = "JFK"
  const dep_date= "2024-05-15"
  const ret_date = "2024-05-16"; // Current date
  const num_travelers = 2;
    
  const matchingFlights = arrayofTravelObjects(flightData, dep_city, dep_date, dest_city, ret_date, num_travelers);
  console.log("Matching Flights:", matchingFlights);




