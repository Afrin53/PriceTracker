# 💰 PriceTracker – Smart E-commerce Price Tracking System

**PriceTracker** is a full-stack e-commerce price tracker built using **Next.js, Node.js, MongoDB, and Chart.js**. It allows users to monitor product prices over time, view interactive trend graphs, and receive real-time alerts via email.

---

## 📚 Features

### 🧑‍💻 User Interface
- Clean, responsive design using **Next.js** & **Tailwind CSS**
- Individual product pages with price history charts
- Community comment system for product feedback

### 📈 Price Tracking
- Periodic scraping with **Node.js**, **Axios**, **Cheerio**
- Tracks historical prices and updates automatically
- Visualizes price trends using **Chart.js**

### 🔔 Notifications
- 📧 **Email alerts** using **Nodemailer** when price drops

---

## 🧊 Tech Stack

| Layer         | Technology              |
|---------------|------------------------|
| Frontend      | Next.js, Tailwind CSS  |
| Backend       | Node.js, Express.js    |
| Database      | MongoDB, Mongoose      |
| Scraping      | Axios, Cheerio         |
| Charts        | Chart.js               |
| Notifications | Nodemailer             |

---

## 🚀 Getting Started

### 🧾 Prerequisites
- Node.js & npm
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Gmail account (for sending alerts)

---

### 💻 Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/Afrin53/PriceTracker.git
cd PriceTracker
```

#### 2. Set Up Backend

```bash
cd backend/
npm install
# Create a .env file based on .env.example
npm run start
```

#### 3. Set Up Frontend

```bash
cd ../frontend/
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
PriceWise/
├── frontend/              # Next.js frontend
│   ├── app/               # App router pages
│   ├── components/        # UI components like Navbar, ProductCard, Chart
│   └── styles/            # Tailwind/global CSS
├── backend/               # Node.js scraping & API server
│   ├── routes/            # API routes (scrape, add product, etc.)
│   ├── models/            # Mongoose schemas
│   └── utils/             # Web scraping functions
├── notifications/         # Email alert logic (Nodemailer)
├── public/                # Static assets
├── .env.example           # Environment variable template
└── README.md              # Project documentation
```

---

## 🔧 Core Functions

| Function           | Description                             |
|--------------------|-----------------------------------------|
| `scrapePrice()`    | Extracts latest price from product page |
| `savePrice()`      | Saves price and timestamp to MongoDB    |
| `sendEmailAlert()` | Sends email alert if price drops        |
| `drawChart()`      | Renders price history graph (Chart.js)  |

---

## 🔄 Workflow

1. User adds product URL to track.
2. Scraper fetches and stores latest price with timestamp.
3. Frontend displays interactive chart of price history.
4. If price drops, email is automatically triggered to user.

---

## ⏱ Time & Space Complexity

- **Time**: O(n) for chart rendering and historical data lookup
- **Space**: O(n), where n = number of tracked price records

---

## 📌 Tags

#NextJS #PriceTracker #WebScraping #FullStack #NodeJS #MongoDB #ChartJS #TailwindCSS #InternshipProject




