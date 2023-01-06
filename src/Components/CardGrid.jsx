import React from 'react';
import '../css/cardgrid.css'
const Card = ({ title, imgSrc, content, buttonText, buttonLink }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <img src={imgSrc} alt="" />
      <div>
        <p className="card-content">{content}</p>
      </div>
      <a target='_blank' href={buttonLink} className="card-button" rel="noreferrer">
        {buttonText}
      </a>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      title: 'Angular Project',
      imgSrc: require('../img/gcbg.jpg'),
      content: 'Gracious Crossings is a website for a potential home buying business that aims to provide individuals with the resources and support they need to find and purchase their dream home.',
      buttonText: 'Explore Now',
      buttonLink: 'https://gracious-crossings.netlify.app/',
    },
    {
      title: 'Angular Project',
      imgSrc: require('../img/blbg.jpg'),
      content: 'Belief-Ministries is a landing page for what could be a website dedicated to helping individuals and organizations start their entrepreneurial spirit launch faith-based venture.',
      buttonText: 'Explore Now',
      buttonLink: 'https://beliefministries.netlify.app/',
    },
    {
      title: 'Angular Project',
      imgSrc: require('../img/brbg.jpg'),
      content: 'Barbershop Faith is an innovative website that seeks to provide the perfect haircut for its customers, as well as assist families who are in need of assistance. BarberFaith will offer you a great haircut.',
      buttonText: 'Explore Now',
      buttonLink: 'https://barberfaith.netlify.app/',
    },
    {
      title: 'React Project',
      imgSrc: require('../img/itbg.jpg'),
      content: 'Itruth News is an innovative news landing page that provides honest and reliable news. It offers a comprehensive selection of articles from all over the world, sourced from trusted sources.',
      buttonText: 'Explore Now',
      buttonLink: 'https://itruthnews.netlify.app/',
    },
    {
      title: 'React Project',
      imgSrc: require('../img/glbg.jpg'),
      content: 'Gulimeshop is an innovative ecommerce landing page that offers a wide selection of products to meet the needs of customers. With its user-friendly interface, GulimeShop has what your looking for.',
      buttonText: 'Explore Now',
      buttonLink: 'https://gulimeshop.netlify.app/',
    },
    {
      title: 'React Project',
      imgSrc: require('../img/fabg.jpg'),
      content: 'Fooapp is an innovative platform for restaurants to showcase their food menu. It provides a modern and user-friendly landing page that allows customers to easily browse through the different dishes offered',
      buttonText: 'Explore Now',
      buttonLink: 'https://fooapp.netlify.app/',
    },
    {
      title: 'Vue Project',
      imgSrc: require('../img/tabg.jpg'),
      content: 'ToDo app lets you keep track of what you need to get done.',
      buttonText: 'Explore Now',
      buttonLink: 'https://topdo.netlify.app/',
    },
  ];

  return (
    <div className="card-grid">
      {cards.map((card,index) => (
        <Card
          key={index}
          title={card.title}
          imgSrc={card.imgSrc}
          content={card.content}
          buttonText={card.buttonText}
          buttonLink={card.buttonLink}
        />
      ))}
    </div>
  );
};

export default CardGrid;
