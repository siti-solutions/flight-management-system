

# Flight Management System

A simple browser-based flight management system with JSON Server for domestic airline bookings.

## ✈️ Features

### Public
- Landing page
- FAQs
- Contact page

### User
- Register/Login
- Search and book flights
- View and cancel bookings
- Manage profile

### Admin (Airline)
- Login
- Manage flights
- Disable flights
- View airport list
- View user bookings
- Dashboard and reports

## 🛠 Tech Stack
- HTML, CSS, JavaScript
- JSON Server (as backend API)

## 📁 Folder Structure

```
flight-management-system/
├── public/
├── user/
│   ├── auth/
│   ├── booking/
│   ├── my-flights/
│   └── profile/
├── admin/
│   ├── auth/
│   ├── dashboard/
│   ├── flights/
│   ├── airports/
│   ├── users/
│   └── reports/
├── shared/
│   ├── css/
│   └── js/
├── backend/
│   └── db.json
└── README.md
```

## ⚙️ Getting Started

1. **Clone the repository**  
   `git clone https://github.com/your-username/flight-management-system`

2. **Navigate to the folder**  
   `cd flight-management-system`

3. **Start JSON Server**  
   `npx json-server --watch backend/db.json --port 3000`

4. **Open `public/landing/index.html` in browser**

## 🗂 Database Structure (db.json)

### users
```json
{
  "id": 1,
  "name": "Alice Sharma",
  "email": "alice@example.com",
  "password": "pass123",
  "phoneNumber": "9876543210",
  "passportNumber": "A12345678",
  "deleted": false
}
```

### airlineAdmins
```json
{
  "id": 1,
  "name": "IndiGo Admin",
  "email": "admin@indigo.com",
  "password": "admin123",
  "contactNumber": "1234567890",
  "airlineName": "IndiGo",
  "deleted": false
}
```

### airports
```json
{
  "id": 1,
  "airportName": "Indira Gandhi International Airport",
  "city": "Delhi",
  "contact": "011-47198600",
  "deleted": false
}
```

### flights
```json
{
  "id": 1,
  "flightNumber": "6E101",
  "departureTime": "...",
  "arrivalTime": "...",
  "status": "Scheduled",
  "aircraftModel": "Airbus A320",
  "capacity": 180,
  "airlineAdminId": 1,
  "departureAirportId": 1,
  "arrivalAirportId": 2,
  "disabled": false,
  "deleted": false
}
```

### bookings
```json
{
  "id": 1,
  "userId": 1,
  "flightId": 1,
  "seatNumber": "12A",
  "seatClass": "Economy",
  "bookingDate": "...",
  "bookingTime": "...",
  "status": "Confirmed",
  "amount": 4500,
  "deleted": false
}
```

### payments
```json
{
  "id": 1,
  "bookingId": 1,
  "userId": 1,
  "amount": 4500,
  "paymentMethod": "Card",
  "paymentDate": "...",
  "paymentTime": "...",
  "deleted": false
}
```

## 📌 Notes

- All booking and management logic is simulated with JSON Server.
- Data is stored in `backend/db.json`. Edits in UI persist until server restart unless saved manually.