// ========== services/searchFlights.js ==========
module.exports = function searchFlights(params, flights) {
  const {
    departure,
    arrival,
    start_date,
    end_date,
    page = 0,
    size = 10
  } = params;

  if (!departure || !arrival || !start_date) {
    return {
      status: 400,
      body: {
        meta: {
          code: "400000",
          type: "INVALID_REQUEST",
          message: "Missing required fields",
          service_id: "searching-service",
          extra_meta: {}
        },
        data: []
      }
    };
  }

  const results = flights.filter(flight =>
    flight.departure === departure &&
    flight.arrival === arrival &&
    flight.start_date === start_date &&
    (!end_date || flight.end_date === end_date)
  );

  if (results.length === 0) {
    return {
      status: 404,
      body: {
        meta: {
          code: "400001",
          type: "NOT_FOUND_ANY_FLIGHTS",
          message: "No flights found in the given time range",
          service_id: "searching-service",
          extra_meta: {}
        },
        data: []
      }
    };
  }

  const paginated = results.slice(page * size, page * size + size);
  const totalPages = Math.ceil(results.length / size);

  return {
    status: 200,
    body: {
      meta: {
        code: "200000",
        type: "SUCCESS",
        message: "Search completed successfully",
        service_id: "searching-service",
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
};