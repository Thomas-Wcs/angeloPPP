import './UserCard.css';

function UserCard({ image, firstname, lastname, email, origin, gender }) {
  return (
    <div className='card'>
      <img src={image} alt='Avatar' className='w-100' />
      <div className='info-container'>
        <div className='info-head'>
          <h4>
            {firstname} {lastname}
          </h4>
        </div>
        <div className='info-body'>
          <p>{email}</p>
          <p>{origin}</p>
          <p>{gender}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
