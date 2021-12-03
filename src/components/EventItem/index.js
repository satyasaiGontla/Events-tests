import './index.css'

const EventItem = props => {
  const {eventDetails, onClickEvent, activeEvent} = props
  const {imageUrl, name, location} = eventDetails

  const onSelectEvent = () => {
    onClickEvent(eventDetails)
  }

  const activeBorder = activeEvent.id === eventDetails.id ? 'active-border' : ''

  return (
    <>
      <li className="event-item">
        <button type="button" onClick={onSelectEvent} className="event-button">
          <img
            src={imageUrl}
            alt="event"
            className={`event-image ${activeBorder}`}
          />
        </button>
        <p className="festival-name">{name}</p>
        <p className="location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
