import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Watchhistory() {
  return (
    <>
      
      <div className="bg-dark min-vh-100">
        <div className="container-fluid">
          <h2 className="text-light fw-bold pt-3">Watch History</h2>
          <table className="table table-dark text-center mt-4">
            <thead>
              <tr>
                <th>Date Watched</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/10/2020</td>
                <td>ARM</td>
              </tr>
              <tr>
                <td>10/10/2020</td>
                <td>KGF</td>
              </tr>
              <tr>
                <td>15/10/2020</td>
                <td>Marco</td>
              </tr>
              <tr>
                <td>20/10/2020</td>
                <td>Shershaah</td>
              </tr>
              <tr>
                <td>25/10/2020</td>
                <td>Sooryamanasam</td>
              </tr>
              <tr>
                <td>30/10/2020</td>
                <td>Dangal</td>
              </tr>
              <tr>
                <td>01/11/2021</td>
                <td>ABCD</td>
              </tr>
              <tr>
                <td>05/11/2021</td>
                <td>KOK</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation">
              <ul className="pagination pagination-md">
                <li className="page-item">
                  <a className="page-link bg-transparent text-white border-0" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link bg-danger text-white border-0" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-transparent text-white border-0" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-transparent text-white border-0" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link bg-transparent text-white border-0" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Watchhistory;