import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header(){
    return(
    <div className='flex items-center gap-5 py-2'>
        <a href="/"><img src={nlwUniteIcon} /></a>
        <nav className='flex items-center gap-5'>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/participants">Participants</NavLink>
            <NavLink href="/create-event">Create Event</NavLink>
            <NavLink href="/register-attendee">Register Attendee</NavLink>
            <NavLink href="/update-event">Update Event</NavLink>
            <NavLink href="/update-attendee">Update Attendee</NavLink>
            <NavLink href="/delete-event">Delete Event</NavLink>
            <NavLink href="/delete-attendee">Delete Attendee</NavLink>
            
        </nav>
    </div>
    )
}