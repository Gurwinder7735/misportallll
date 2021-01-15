import React from 'react'
import "./Sidebar.css"
import { FaHome, FaWindowClose, FaUsers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import {useSelector,useDispatch} from 'react-redux'
// import { logOut,setTableData } from "../Redux/action";


function Sidebar() {


    const {user} = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div
        id="mySidebar"
        className="show-sidebar sidebar"
      >
        <button
          className="closebtn btn btn-danger"
        >
        </button>
        <div className="sidebar-header">
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQERIQExMSEA4QFhAPEBATEBAOFxIWFxUVFRUYHSggGRolHRMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0PECsZHxkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADwQAAIBAgMEBwUGBAcAAAAAAAABAgMRBAUhEjFBUQYyYXGBkbEicqHB0RNCUmKy8CNTgqIVM0NzkuHy/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APs4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQuadIYUrxppVJrTf7EX2vj3LzAmjxu2r0S1u9yRUMDm23V28TUexBOSgk9lzurLZW+2/XkYZzn0qy2IJxp8b9affyXYBNUuktBuz246tbTjeLXPS7+BKYfEQqK8JRkucWnbv5Hzkzo1ZQe1CTi1xi7MD6QCByPPvtWqdWym9IyWim+TXB+pPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjO86VD2IWlUa3PqwXOXb2Ac3SnM3BKjB2cleTW9Q3JLv1/bKmbcRXlUk5ze1J72zWAAAAAAEXzJMd9vSUm1tr2ZLjtLjbt0fiUNGcJyhK8W4yT3xdmn3gfSAV/I8/wBtqlWttPSM9yk+UuTLAAAAAAAAAAAAAAAAAAAAAAAAAByZpjVQpyqcVpFc5vd9fAoNSo5Nyk2222297ZYemOI9qFPknN97dl6S8yuAAZUqbm1GKu3okixYHJoQ1nacu3qLuXHxArtOnKXVjJ+6m/Q3LAVX/pz8YtFvStotFyW49AqP+G1v5cvgerLK38uXwXzLaAIbK8ncGp1LXWqitUnzbIBl4RSsRDZnKPKUl5NgYF46P4/7aktp3nD2ZdvKXivimUcm+iVfZrOHCcGv6o6r4bQFwAAAAAAAAAAAAAAAAAAAAAAABSulMr4h9kKa+F/mRJL9Ko2xD7YU38LfIiqUNpqK+81HzdgLDkOE2IfaNe1PXuhw89/kSp5GKSstySXgegAAAAAArGfUNmrtcJra8Vo/r4lnOPNMH9rCy6y1j38vECpnfkMrYin7zXnFr5nA1bR6NaWe9MkOj0b4in3yflGTAvYAAAAAAAAAAAAAAAAAAAAAAAKt0yo+1TnzjKHk7r9TIjKI3rQ96/km/kWHpStqm/ySi/k/X4EHkK/jR7FN/wBr+oFoAAAAAAAAAAFc6RUkqikvvR17Wnv9Db0SpXruX4acn4tpfNnnSXrQ92Xqjq6JR2dqX4pRh4L/ANIC0AAAAAAAAAAAAAAAAAAAAAAAAi8dS21OH4lKPnuKzkC/jL3ZlsxStJ9tmRODy9wrVKmlnfZXH2mm/oBIgAAAAAAAAACv9JevD3H6ktk9HYpwXF2k+9u/z+BqzPAfauD09mXtLnB2v6fEkqCvJd9/ICQAAAAAAAAAAAAAAAAAAAAAAABz4undX5ehyEmcuLppWaSWr3AcwAAAAAAAAAAHVg4fe8EYYSCbd1fTj++w7AAAAAAAAAAAAAAAAAAAAAAAAABrrwvF+ZsAEYDbiaey+xmoAAAAAAAGdGntO3n3AdWFjaN+evgbggAAAAAAAAAAAAAAAAAAAAAAAAAANeIrxpxcpOyX7su0DDG9XTmjhhO/zXFM5qeZyrVNlK0Em0uLfNs2Vqb60d/qgN4OaGLX3lbuNqrR5rzsBsBrdaPNeZqqYtcNfQDfOaSuzflVTaUn2q3dYh6k3LVilmEqMtNYvfF8e1PgwLMDThMVGrHag+9cYvkzcAAAAAAAAAAAAAAAAAAAAAAAYVasYK8pRiucmkR9fPKUd21P3VZebAkK9aMIuUnZJXuVPMcdKtK70iurHkvqZ5lmTrNK2zFfdve75s4QO3KP8z+mXyJor2Er7ElLetzXYT1KopK8XdAYVqCl2PmclSi4714rcSIAigSMqMXvS9DB4WPb5gcJy4zeu5kvOjCKvLcuLbIfF1lOXsqyWi597AYTFSpS2ovvXCS5MtmDxUasVOPiuMXyZTDry7HOjLaWqejjfevqBbwRtDO6Ut7cH+ZaeaJCnUjJXi1Jc4tNAZAAAAAAAAAAAAAAOPH5jCitdZcILf48kV3G5lUq6N2j+COi8eYE9i84pU9E9t8obvF7iIxOd1ZdW0F+XV+b+RGADKcm3dtt827vzMQAAAAGyjWlB3i7ej7zWAJnCZgpaS9mX9r+h3FYJbK8VtexLelo+a5ASJyYvHRp6b5cuC7xmGK2FZdZ7uxcyEbA2V8RKbvJ+HBdxqAAAAAZQm4u8W0+abT+BiAJPDZ3Vj1rTX5tJeaJfC5xSno3sPlPd4PcVUAXoFQweYVKXVd1+GWsf+vAsGAzWFXTqy/C+Pc+IHeAAAAAEbnGZfZLZj12v+K5kkUvGVtucpvjJ+W5fCwGuUm22223q29W2YgAAAAAAAAAAAANlCpsyUuTT8OJrAHRj6m1OT4J7K7l+2c56zwAAAAAAAAAAAAAAncozd3VOq9+kZvnyl9SdKKWzJsS6lJN74twb523PyaA7gAB5J6PuZRkXpoo0lZ25NoDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn+jEtKi5OD87/QgCe6MLSo/9tfqAnAAAKViuvP35/qYAGoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsPRnqT96PoABMgAD/2Q=="></img>
          <h6>{user}</h6>
        </div>
        <div className="sidebar-body">
          <a href="#">
            <FaHome className="icon" /> Dashboard
          </a>
          <a href="#">
            <GoReport className="icon" />
            Reports
          </a>

          <a href="#">
            <FaUsers className="icon" />
            Promoters
          </a>

          <a href="#">
            <BiLogOut className="icon" />
            Logout
          </a>
        </div>
      </div>
    )
}

export default Sidebar
