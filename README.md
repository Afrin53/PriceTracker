# 💰 PriceWise – Smart E-commerce Price Tracker

**PriceWise** is a full-stack e-commerce price tracker built using **Next.js, Node.js, MongoDB, and Chart.js**. It allows users to monitor product prices over time, view interactive trend graphs, and receive real-time alerts via email.

---

## 📚 Features

### 🧑‍💻 User Interface
- Clean, responsive design using **Next.js & Tailwind CSS**
- Individual product pages with price history charts
- Community comment system for product feedback

### 📈 Price Tracking
- Periodic scraping with **Node.js, Axios, Cheerio**
- Tracks historical prices and updates automatically
- Visualizes price trends using **Chart.js**

### 🔔 Notifications
- 📧 **Email alerts** using **Nodemailer** when price drops

### 🧊 Tech Stack
| Layer       | Technology         |
|-------------|--------------------|
| Frontend    | Next.js, Tailwind CSS |
| Backend     | Node.js, Express.js  |
| Database    | MongoDB, Mongoose    |
| Scraping    | Axios, Cheerio       |
| Charts      | Chart.js             |
| Notifications | Nodemailer         |

---

## 🚀 Getting Started

### 🧾 Prerequisites
- Node.js & npm
- MongoDB (local or cloud)
- Email account for sending alerts (Gmail recommended)

### 💻 Setup Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/Afrin53/PriceTracker.git
cd PriceTracker
 Set Up Backend
bash
Copy
Edit
cd backend/
npm install
# Create a .env file (refer to .env.example)
npm run start
3. Set Up Frontend
bash
Copy
Edit
cd ../frontend/
npm install
npm run dev
Open http://localhost:3000 in your browser.
Folder Structure
php
Copy
Edit
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
🔧 Core Functions
Function	Description
scrapePrice()	Extracts latest price from product page
savePrice()	Saves price and timestamp to MongoDB
sendEmailAlert()	Sends email if price drops
drawChart()	Renders price history with Chart.js

🔄 Workflow
User adds product URL to track.

System scrapes price and stores it with date.

Frontend displays the trend graph.

If price drops, email is automatically sent.

⏱ Complexity
Time: O(n) for chart rendering, where n = price history entries

Space: O(n), where n = tracked price points

📌 Tags
#NextJS #PriceTracker #WebScraping #FullStack #NodeJS #MongoDB #ChartJS #TailwindCSS #InternshipProject


