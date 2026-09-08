import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RoutingOutlet from './router/routing-outlet';
import StudentDashboard from './pages/studentMemo/studentDashboard';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    < StudentDashboard />
);


