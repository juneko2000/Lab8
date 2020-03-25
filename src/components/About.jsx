import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/lab8-d9b0d.appspot.com/o/picpro.jpg?alt=media&token=8e5df8ee-e7b6-4e8f-b374-6b2de533f60b" } className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Nanthouchaporn Nitikanjanatan (610610593)</p>
            <p>Nanthouchaporn Nitikanjanatan</p>
            <Link to="/Lab8">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
