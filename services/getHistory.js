// ========== services/getHistory.js ==========
import bookings from "../data/bookings.js";

export default function getHistory({ passport, page = 0, size = 10 }) {
  if (!passport) {
    return {
      status: 400,
      body: {
        meta: {
          code: "400000",
          type: "INVALID_REQUEST",
          message: "Missing passport query param",
          service_id: "get-history-service",
          extra_meta: {}
        },
        data: []
      }
    };
  }

  const results = bookings.filter(
    (booking) => booking.passenger.passport === passport
  );

  const paginated = results.slice(page * size, page * size + size);
  const totalPages = Math.ceil(results.length / size);

  return {
    status: 200,
    body: {
      meta: {
        code: "200000",
        type: "SUCCESS",
        message: "Get History completed successfully",
        service_id: "get-history-service",
        extra_meta: {
          page,
          size,
          total_items: results.length,
          total_pages: totalPages
        }
      },
      data: paginated
    }
  };
}
