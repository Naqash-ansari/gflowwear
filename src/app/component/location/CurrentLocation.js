import React from 'react'

const CurrentLocation = () => {
  return (
    <div className='border p-2 rounded'>
      <iframe style={{width:'100%', height:'50vh'}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13606.386280231814!2d74.34701655!3d31.5077711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700851986396!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default CurrentLocation