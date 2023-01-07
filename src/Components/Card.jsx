import React from 'react'

export const Card = ({ title, imgSrc, content, buttonText, buttonLink }) => {
return (
<div>
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

</div>
)
}
