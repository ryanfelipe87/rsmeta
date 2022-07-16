import icon from '../../assets/img/Icone-notification.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="rsmeta-red-btn">
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton
