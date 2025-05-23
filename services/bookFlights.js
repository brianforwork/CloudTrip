// ========== services/bookFlights.js ==========
import { v4 as uuidv4 } from 'uuid'; 
import bookings from '../data/bookings.js';

export default function bookFlights(params) {
    const { flight_id, passenger, seat } = params;

    if (!flight_id || !seat || !passenger) {
        return {
            status: 400,
            body: {
                meta: {
                    code: "400000",
                    type: "INVALID_REQUEST",
                    message: "Missing required fields!",
                    service_id: "booking-service",
                    extra_meta: {}
                },
                data: []
            }
        };
    }

    const booking = {
        booking_id: uuidv4(),
        flight_id,
        seat,
        passenger,
        created_at: new Date().toISOString()
    };
    
    console.log("Before push:", bookings.length);
    bookings.push(booking);
    console.log("After push:", bookings.length);

    return {
        status: 200,
        body: {
          meta: {
            code: "200000",
            type: "SUCCESS",
            message: "Booking confirmed",
            service_id: "booking-service"
          },
          data: {
            booking_id: booking.booking_id,
            flight_id: booking.flight_id,
            passenger: {
                name: booking.passenger.name,
                passport: booking.passenger.passport,
                email: booking.passenger.email
            }
          }
        }
    };

}
