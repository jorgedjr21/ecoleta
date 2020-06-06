import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiLoader } from 'react-icons/fi';
import { FaWhatsapp, FaCity, FaFlag } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Map, TileLayer, Marker } from 'react-leaflet';


import Point from '../../interfaces/Point';

import logo from '../../assets/logo.svg'
import './styles.css';
import Item from '../../interfaces/Item';

const ShowPoint = () => {
  const { id } = useParams();
  const [positions, setPosition] = useState<[number, number]>([0, 0]);
  const [point, setPoint] = useState<Point>({id: '', name: '', whatsapp: '', email: '', latitude: 0, longitude: 0, city: '', uf: ''});
  const [items, setItems] = useState<Item[]>([]);

  
  useEffect(() => {
    setTimeout(() => {
      api.get(`/points/${id}`).then(response => {
        setPoint(response.data.point);
        setItems(response.data.items);
      })
    }, 500);
  }, [])

  useEffect(() => {
    setPosition([point.latitude, point.longitude]);
  }, [point])

  function mainContent() {
    if(point.id === '' && point.name === '') {
      return (
        <main>
          <FiLoader size={40} className="icon-spin"/>
          <h1>Carregando informações...</h1>
        </main>
      )
    } else {   
      return (
        <main>
          <h2 className="success-message"> Ponto {point.name}</h2>

          <Map center={positions} zoom={15.25}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positions} />
          </Map>

          <div className="infos">
            <p className="info-box">
              <FaCity size={30}/> <br/>
              <span>{point.city}</span>
            </p>
            <p className="info-box">
              <FaFlag size={30}/><br/>
              <span>{point.uf}</span>
            </p>
            <p className="info-box">
              <FaWhatsapp size={30} className="success-message"/><br/>
              <span>{point.whatsapp}</span>
            </p>
            <p className="info-box">
              <MdEmail size={30}/><br/>
              <span>{point.email}</span>
            </p>
          </div>

          <h3>Items coletados</h3>
          <ul className="items-grid">
            {items.map(item => (
              <li 
                key={item.id} 
                className='selected'  
              >
                <img src={item.image_url} alt={item.title}/>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </main>
      )    
    }
  }

  return (
    <div id="page-point">
      <header>
        <img src={logo} alt="Ecoleta"/>
        <Link to="/">
          <FiArrowLeft/> Voltar para home
        </Link>
      </header>

      {
        mainContent()
      }
    </div>
  )
}

export default ShowPoint;