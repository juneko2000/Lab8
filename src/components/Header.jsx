import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <h1 className="display-4 text-center">
        <Link to="/about">
          <i className="fas fa-dollar-sign text-primary"></i> My <span className="text-primary">Expenses</span>
        </Link>
      </h1>
    </div>
  )
}
