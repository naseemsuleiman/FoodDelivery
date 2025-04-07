import React from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart } from 'chart.js';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong while rendering the chart.</h3>;
    }

    return this.props.children;
  }
}

const Dashboard = () => {
    const [orderData, setOrderData] = React.useState({
        labels: [],
        datasets: [
            {
                label: 'Orders Per Day',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const chartRef = React.useRef(null);

    React.useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'orders'),
            (snapshot) => {
                try {
                    const ordersPerDay = {};
                    snapshot.forEach((doc) => {
                        const order = doc.data();
                        const orderDate = new Date(order.timestamp?.seconds * 1000);
                        const day = orderDate.toLocaleDateString('en-US', { weekday: 'long' });

                        // Filter by date range
                        if (orderDate >= startDate && orderDate <= endDate) {
                            ordersPerDay[day] = (ordersPerDay[day] || 0) + 1;
                        }
                    });

                    // Update chart data
                    setOrderData({
                        labels: Object.keys(ordersPerDay),
                        datasets: [
                            {
                                label: 'Orders Per Day',
                                data: Object.values(ordersPerDay),
                                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                            },
                        ],
                    });
                    setLoading(false);
                } catch (error) {
                    console.error('Error processing Firestore data:', error);
                }
            },
            (error) => {
                console.error('Error fetching Firestore data:', error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [startDate, endDate]);

    React.useEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy the previous chart instance
        }
    }, [orderData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;

    return (
        <div className="flex flex-col h-screen bg-background">
            <div className="flex flex-row">
                <aside className="w-64 bg-secondary text-secondary-foreground p-4">
                    <h1 className="text-2xl font-bold mb-6">Food Express</h1>
                    <nav>
                        <ul>
                            <li className="mb-4"><Link to="/" className="hover:text-accent">Dashboard</Link></li>
                            <li className="mb-4"><Link to="/orders" className="hover:text-accent">Orders</Link></li>
                            <li className="mb-4"><Link to="/calendar" className="hover:text-accent">Calendar</Link></li>
                            <li className="mb-4"><Link to="/order-id" className="hover:text-accent">Order ID</Link></li>
                            <li className="mb-4"><Link to="/customers" className="hover:text-accent">General Customers</Link></li>
                            <li className="mb-4"><Link to="/analytics" className="hover:text-accent">Analytics</Link></li>
                            <li className="mb-4"><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
                            <li className="mt-6"><span className="text-muted-foreground">Apps</span></li>
                            <li className="mb-4"><Link to="/icons" className="hover:text-accent">Icons <span className="text-pink-500">New</span></Link></li>
                            <li className="mb-4"><Link to="/cms" className="hover:text-accent">CMS <span className="text-pink-500">New</span></Link></li>
                            <li className="mb-4"><Link to="/charts" className="hover:text-accent">Charts</Link></li>
                            <li className="mb-4"><Link to="/bootstrap" className="hover:text-accent">Bootstrap</Link></li>
                        </ul>
                    </nav>
                </aside>

                <main className="flex-1 p-6">
                    <header className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-semibold">Dashboard</h2>
                    </header>

                 
                    <div className="flex mb-4">
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                            className="border rounded p-2 mr-2"
                            dateFormat="MM/dd/yyyy"
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            className="border rounded p-2"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>

          
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-r from-green-300 to-green-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">459</h3>
                            <p>Total Menus Available</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-300 to-green-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">$87,561</h3>
                            <p>Total Revenue Generated</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-300 to-green-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">872</h3>
                            <p>Total Registered Customers</p>
                        </div>
                        <div className="bg-gradient-to-r from-green-300 to-green-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">247</h3>
                            <p>Total Orders Processed</p>
                        </div>
                        <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">35</h3>
                            <p>Active Drivers</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-300 to-purple-500 p-4 rounded-lg text-white">
                            <h3 className="text-2xl">120</h3>
                            <p>Pending Orders</p>
                        </div>
                    </div>

                    <section className="bg-card p-4 rounded-lg">
                        <h3 className="text-xl font-semibold">Orders Summary</h3>
                        <p className="text-muted-foreground">Track the status of your orders in real-time.</p>
                        <div className="flex justify-between mt-4">
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">Monthly</button>
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">Weekly</button>
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">Today</button>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-2xl">$456,005.56</h4>
                            <p className="text-muted-foreground">Revenue generated this month.</p>
                        </div>
                    </section>

                    {/* Revenue Breakdown Section */}
                    <section className="bg-card p-4 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold">Revenue Breakdown</h3>
                        <p className="text-muted-foreground">Analyze revenue by category.</p>
                        <div className="mt-4">
                            <span className="text-xl">Income: $126,000</span>
                        </div>
                        <div className="flex mt-4">
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">All Categories</button>
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">Food</button>
                            <button className="bg-primary text-primary-foreground rounded-lg p-2">Beverages</button>
                        </div>
                    </section>

                    {/* Active Drivers Section */}
                    <section className="bg-card p-4 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold">Active Drivers</h3>
                        <p className="text-muted-foreground">Monitor the status of your drivers in real-time.</p>
                        <div className="mt-4">
                            <h4 className="text-2xl">35 Active Drivers</h4>
                            <p className="text-muted-foreground">Drivers currently delivering orders.</p>
                        </div>
                    </section>

                    {/* Chart Section */}
                    <section className="bg-card p-4 rounded-lg mt-6">
                        <h3 className="text-xl font-semibold">Orders Per Day</h3>
                        <ErrorBoundary>
                          <Bar ref={chartRef} data={orderData} options={{ responsive: true }} />
                        </ErrorBoundary>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;