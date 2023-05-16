import React from 'react'

const Flight = ({ city, flightPrice, cityImage }) => {
  return (
    <article className='flight-container'>
         {cityImage.includes("blurry") ? (
            <div className='img-container'>
                <img className='img' src="https://t4.ftcdn.net/jpg/02/83/83/93/360_F_283839302_yt6JIsE96Pj4PydFDcBNKDUnuSpYB9h0.jpg" alt="generic city" />
                <p className='generic-img'>(Generic city image. An image of the city could not be found)</p>
            </div>
         ) : (
            <div className='img-container'>
                <img className='img' src={ cityImage } alt={ city } />
            </div>
        )}
        <div>
            <h3>{ city }</h3>
            <p>Lowest Price:
              <a className='prices' target="_blank" href='https://www.skyscanner.com'>${ flightPrice }</a>
            </p>
            <a className="hotel-link" target="_blank" href={`https://www.google.com/travel/hotels?q=${ city }%20hotels&gsas=1&rp=CgRYAGAAOAGoAgA&ved=0CAAQ5JsGahcKEwigtcjx9d77AhUAAAAAHQAAAAAQBA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaIAoCGgASGhIUCgcI5g8QDBgOEgcI5g8QDBgPGAEyAhAAKgsKBygDOgNVU0QaAA&ap=MAFaswMKBQivARAAIgNFVVIqFgoHCOYPEAwYDhIHCOYPEAwYDxgBKACwAQBYAWgDcgQIAhgAogEVCggvbS8wY3YzdxIJTGFzIFZlZ2FzqgEPCgIIEhIDCJsBEgIIaBgBqgEOCgIIFBICCD8SAggbGAGqAQcKAwicARgAqgEHCgMIoQIYAKoBOAoCCBwSAggHEgMIlwESAghREgIIWBICCHMSAghHEgIIXxICCDYSAggkEgIITRIDCJ4CEgIIKRgBqgEKCgIIJRICCHkYAaoBGgoCCBESAgg0EgIIQBICCDgSAggCEgIIKxgBqgE0CgIILhICCDsSAghWEgMIhgESAgg6EgIIGhICCD0SAwiDARICCEsSAghTEgIIKBICCCcYAaoBBgoCCCwYAKoBCwoDCOECEgIIYxgBqgEKCgIIUBICCEwYAaoBBgoCCAoYAKoBBwoDCLgCGACqAQYKAggzGACqASIKAgg1EgIIHhICCBMSAggiEgIIJhICCAsSAghdEgIIEBgBkgICCBGSAgIIEpICAggQkgICCA6SAgIIE5ICAggNkgICCAySAgIID5ICAggUkgECIAE`}>Hotels</a>
        </div>
    </article>
  )
}

export default Flight