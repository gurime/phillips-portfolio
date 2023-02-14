import React from 'react'

export const Card = ({ title, imgSrc, content, buttonText, buttonLink }) => {
return (
<div>
<div className="card">
<img src={imgSrc} alt="" />
<h2 className="card-title">{title}</h2>

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
