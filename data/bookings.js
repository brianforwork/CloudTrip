const bookings = [
    {
      booking_id: "BK1000",
      flight_id: "FT2308164983",
      passenger: {
        name: "Alice Tran",
        email: "alice@example.com",
        passport: "VN123456789"
      },
      seat: "24A",
      created_at: "2024-10-16T18:24:23.310Z"
    },
    {
      booking_id: "BK1001",
      flight_id: "FT2308164710",
      passenger: {
        name: "Thao Bui",
        email: "thao@example.com",
        passport: "VN667788990"
      },
      seat: "3C",
      created_at: "2025-03-13T18:24:23.310Z"
    },
    {
      booking_id: "BK1002",
      flight_id: "FT2308164289",
      passenger: {
        name: "Nam Le",
        email: "nam@example.com",
        passport: "VN334455667"
      },
      seat: "8A",
      created_at: "2025-01-13T18:24:23.310Z"
    },
    {
      booking_id: "BK1003",
      flight_id: "FT2308164102",
      passenger: {
        name: "Kevin Vu",
        email: "kevin@example.com",
        passport: "VN556677889"
      },
      seat: "19D",
      created_at: "2024-12-04T18:24:23.310Z"
    },
    {
      booking_id: "BK1004",
      flight_id: "FT2308164175",
      passenger: {
        name: "Linh Nguyen",
        email: "linh@example.com",
        passport: "VN111223344"
      },
      seat: "14F",
      created_at: "2025-04-26T18:24:23.310Z"
    },
    {
      booking_id: "BK1005",
      flight_id: "FT2308164530",
      passenger: {
        name: "Kevin Vu",
        email: "kevin@example.com",
        passport: "VN556677889"
      },
      seat: "1B",
      created_at: "2025-01-24T18:24:23.310Z"
    },
    {
      booking_id: "BK1006",
      flight_id: "FT2308164542",
      passenger: {
        name: "Brian Ho",
        email: "brian@example.com",
        passport: "VN987654321"
      },
      seat: "5D",
      created_at: "2025-02-17T18:24:23.310Z"
    },
    {
      booking_id: "BK1007",
      flight_id: "FT2308164182",
      passenger: {
        name: "Chi Nguyen",
        email: "chi@example.com",
        passport: "VN778899001"
      },
      seat: "10F",
      created_at: "2025-01-14T18:24:23.310Z"
    },
    {
      booking_id: "BK1008",
      flight_id: "FT2308164285",
      passenger: {
        name: "Thao Bui",
        email: "thao@example.com",
        passport: "VN667788990"
      },
      seat: "23C",
      created_at: "2025-01-30T18:24:23.310Z"
    },
    {
      booking_id: "BK1009",
      flight_id: "FT2308164443",
      passenger: {
        name: "Trang Pham",
        email: "trang@example.com",
        passport: "VN998877665"
      },
      seat: "7E",
      created_at: "2024-10-22T18:24:23.310Z"
    },
    {
      booking_id: "BK1010",
      flight_id: "FT2308164683",
      passenger: {
        name: "Minh Dang",
        email: "minh@example.com",
        passport: "VN223344556"
      },
      seat: "16F",
      created_at: "2024-09-13T18:24:23.310Z"
    },
    {
      booking_id: "BK1011",
      flight_id: "FT2308164922",
      passenger: {
        name: "Alice Tran",
        email: "alice@example.com",
        passport: "VN123456789"
      },
      seat: "2B",
      created_at: "2024-09-07T18:24:23.310Z"
    },
    {
      booking_id: "BK1012",
      flight_id: "FT2308164072",
      passenger: {
        name: "Linh Nguyen",
        email: "linh@example.com",
        passport: "VN111223344"
      },
      seat: "20C",
      created_at: "2025-02-08T18:24:23.310Z"
    },
    {
      booking_id: "BK1013",
      flight_id: "FT2308164869",
      passenger: {
        name: "Chi Nguyen",
        email: "chi@example.com",
        passport: "VN778899001"
      },
      seat: "25B",
      created_at: "2024-10-24T18:24:23.310Z"
    },
    {
      booking_id: "BK1014",
      flight_id: "FT2308164653",
      passenger: {
        name: "Trang Pham",
        email: "trang@example.com",
        passport: "VN998877665"
      },
      seat: "6E",
      created_at: "2025-03-03T18:24:23.310Z"
    },
    {
      booking_id: "BK1015",
      flight_id: "FT2308164114",
      passenger: {
        name: "Minh Dang",
        email: "minh@example.com",
        passport: "VN223344556"
      },
      seat: "11A",
      created_at: "2025-01-07T18:24:23.310Z"
    },
    {
      booking_id: "BK1016",
      flight_id: "FT2308164485",
      passenger: {
        name: "Nam Le",
        email: "nam@example.com",
        passport: "VN334455667"
      },
      seat: "21F",
      created_at: "2024-08-23T18:24:23.310Z"
    },
    {
      booking_id: "BK1017",
      flight_id: "FT2308164177",
      passenger: {
        name: "Duy Do",
        email: "duy@example.com",
        passport: "VN112233445"
      },
      seat: "22A",
      created_at: "2025-02-27T18:24:23.310Z"
    },
    {
      booking_id: "BK1018",
      flight_id: "FT2308164492",
      passenger: {
        name: "Kevin Vu",
        email: "kevin@example.com",
        passport: "VN556677889"
      },
      seat: "13D",
      created_at: "2024-12-27T18:24:23.310Z"
    },
    {
      booking_id: "BK1019",
      flight_id: "FT2308164267",
      passenger: {
        name: "Brian Ho",
        email: "brian@example.com",
        passport: "VN987654321"
      },
      seat: "27C",
      created_at: "2024-07-17T18:24:23.310Z"
    },
    {
      booking_id: "BK1020",
      flight_id: "FT2308164783",
      passenger: {
        name: "Alice Tran",
        email: "alice@example.com",
        passport: "VN123456789"
      },
      seat: "29B",
      created_at: "2024-12-30T18:24:23.310Z"
    },
    {
      booking_id: "BK1021",
      flight_id: "FT2308164923",
      passenger: {
        name: "Brian Ho",
        email: "brian@example.com",
        passport: "VN987654321"
      },
      seat: "15F",
      created_at: "2025-03-11T18:24:23.310Z"
    },
    {
      booking_id: "BK1022",
      flight_id: "FT2308164021",
      passenger: {
        name: "Duy Do",
        email: "duy@example.com",
        passport: "VN112233445"
      },
      seat: "17E",
      created_at: "2025-02-01T18:24:23.310Z"
    },
    {
      booking_id: "BK1023",
      flight_id: "FT2308164935",
      passenger: {
        name: "Linh Nguyen",
        email: "linh@example.com",
        passport: "VN111223344"
      },
      seat: "30A",
      created_at: "2024-11-02T18:24:23.310Z"
    },
    {
      booking_id: "BK1024",
      flight_id: "FT2308164101",
      passenger: {
        name: "Chi Nguyen",
        email: "chi@example.com",
        passport: "VN778899001"
      },
      seat: "18C",
      created_at: "2024-07-11T18:24:23.310Z"
    }
  ];
  
  export default bookings;
  